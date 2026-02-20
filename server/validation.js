const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function sanitizeText(value) {
  return String(value ?? "")
    .replace(/[\u0000-\u001F\u007F]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function validateContactPayload(payload) {
  const raw = payload ?? {};
  const cleaned = {
    name: sanitizeText(raw.name),
    email: sanitizeText(raw.email).toLowerCase(),
    subject: sanitizeText(raw.subject),
    message: sanitizeText(raw.message),
    companyWebsite: sanitizeText(raw.companyWebsite),
  };

  const errors = {};

  if (!cleaned.name || cleaned.name.length < 2 || cleaned.name.length > 80) {
    errors.name = "Name must be between 2 and 80 characters.";
  }

  if (!cleaned.email || !EMAIL_REGEX.test(cleaned.email) || cleaned.email.length > 120) {
    errors.email = "Please provide a valid email address.";
  }

  if (!cleaned.subject || cleaned.subject.length < 3 || cleaned.subject.length > 120) {
    errors.subject = "Subject must be between 3 and 120 characters.";
  }

  if (!cleaned.message || cleaned.message.length < 10 || cleaned.message.length > 2000) {
    errors.message = "Message must be between 10 and 2000 characters.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
    cleaned,
  };
}
