import cors from "cors";
import express from "express";
import helmet from "helmet";
import { sendContactEmail } from "./mailer.js";
import { contactRateLimit } from "./rateLimiter.js";
import { validateContactPayload } from "./validation.js";

const app = express();

const allowedOrigin = process.env.FRONTEND_ORIGIN || "http://localhost:5173";

app.use(helmet());
app.use(
  cors({
    origin: allowedOrigin,
    methods: ["POST", "GET"],
  }),
);
app.use(express.json({ limit: "10kb" }));

app.get("/api/health", (_req, res) => {
  res.json({ ok: true, service: "contact-api" });
});

app.post("/api/contact", contactRateLimit, async (req, res) => {
  const { isValid, errors, cleaned } = validateContactPayload(req.body);

  if (!isValid) {
    return res.status(400).json({
      ok: false,
      message: "Validation failed.",
      errors,
    });
  }

  if (cleaned.companyWebsite) {
    return res.status(200).json({
      ok: true,
      message: "Message sent successfully.",
    });
  }

  try {
    await sendContactEmail(cleaned);
    return res.status(200).json({
      ok: true,
      message: "Message sent successfully.",
    });
  } catch (error) {
    console.error("[contact-api] mail send failed:", error);
    return res.status(500).json({
      ok: false,
      message: "Could not send message right now. Please try again later.",
    });
  }
});

app.use((_req, res) => {
  res.status(404).json({
    ok: false,
    message: "Not found.",
  });
});

export default app;
