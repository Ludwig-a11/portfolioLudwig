import { sendContactEmail } from "../../server/mailer.js";
import { validateContactPayload } from "../../server/validation.js";

const WINDOW_MS = 15 * 60 * 1000;
const MAX_REQUESTS = 5;
const ipStore = new Map();

function json(statusCode, body) {
  return {
    statusCode,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store",
    },
    body: JSON.stringify(body),
  };
}

function isRateLimited(ip) {
  const now = Date.now();
  const existing = ipStore.get(ip) || [];
  const recent = existing.filter((timestamp) => now - timestamp < WINDOW_MS);

  if (recent.length >= MAX_REQUESTS) {
    return true;
  }

  recent.push(now);
  ipStore.set(ip, recent);
  return false;
}

export async function handler(event) {
  if (event.httpMethod !== "POST") {
    return json(405, {
      ok: false,
      message: "Method not allowed.",
    });
  }

  const sourceIp =
    event.headers["x-forwarded-for"]?.split(",")[0].trim() ||
    event.headers["client-ip"] ||
    "unknown";

  if (isRateLimited(sourceIp)) {
    return json(429, {
      ok: false,
      message: "Too many contact requests. Please try again later.",
    });
  }

  let payload;
  try {
    payload = JSON.parse(event.body || "{}");
  } catch (_error) {
    return json(400, {
      ok: false,
      message: "Invalid JSON payload.",
    });
  }

  const { isValid, errors, cleaned } = validateContactPayload(payload);

  if (!isValid) {
    return json(400, {
      ok: false,
      message: "Validation failed.",
      errors,
    });
  }

  if (cleaned.companyWebsite) {
    return json(200, {
      ok: true,
      message: "Message sent successfully.",
    });
  }

  try {
    await sendContactEmail(cleaned);
    return json(200, {
      ok: true,
      message: "Message sent successfully.",
    });
  } catch (error) {
    console.error("[netlify-contact] mail send failed:", error);
    return json(500, {
      ok: false,
      message: "Could not send message right now. Please try again later.",
    });
  }
}
