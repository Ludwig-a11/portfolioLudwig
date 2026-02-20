const WINDOW_MS = 15 * 60 * 1000;
const MAX_REQUESTS = 5;

const ipStore = new Map();

export function contactRateLimit(req, res, next) {
  const sourceIp =
    req.headers["x-forwarded-for"]?.split(",")[0].trim() || req.ip || "unknown";

  const now = Date.now();
  const existing = ipStore.get(sourceIp) || [];
  const recent = existing.filter((timestamp) => now - timestamp < WINDOW_MS);

  if (recent.length >= MAX_REQUESTS) {
    return res.status(429).json({
      ok: false,
      message: "Too many contact requests. Please try again later.",
    });
  }

  recent.push(now);
  ipStore.set(sourceIp, recent);
  return next();
}

export function __resetRateLimitStoreForTests() {
  ipStore.clear();
}
