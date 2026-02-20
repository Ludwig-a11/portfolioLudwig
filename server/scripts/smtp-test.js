import "dotenv/config";
import nodemailer from "nodemailer";

const host = process.env.SMTP_HOST;
const port = Number(process.env.SMTP_PORT || 587);
const user = (process.env.SMTP_USER || "").trim();
const pass = (process.env.REMOVED || "").replace(/\s+/g, "").trim();

if (!host || !user || !pass) {
  console.error("Missing SMTP_HOST, SMTP_USER or REMOVED in .env");
  process.exit(1);
}

const transporter = nodemailer.createTransport({
  host,
  port,
  secure: port === 465,
  auth: { user, pass },
});

try {
  await transporter.verify();
  console.log("SMTP verify: OK");
  process.exit(0);
} catch (error) {
  console.error("SMTP verify: FAILED");
  console.error("code:", error.code || "n/a");
  console.error("responseCode:", error.responseCode || "n/a");
  console.error("response:", error.response || error.message || "n/a");
  process.exit(1);
}
