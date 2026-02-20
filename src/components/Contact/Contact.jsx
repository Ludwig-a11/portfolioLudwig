import { useState } from "react";
import "./contact.css";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { GithubIcon, LinkedInIcon } from "../Icons";

const INITIAL_FORM = {
  name: "",
  email: "",
  subject: "",
  message: "",
  companyWebsite: "",
};

function validateClient(values) {
  const errors = {};

  if (!values.name.trim() || values.name.trim().length < 2 || values.name.trim().length > 80) {
    errors.name = "Name must be between 2 and 80 characters.";
  }

  if (!values.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Please provide a valid email address.";
  }

  if (
    !values.subject.trim() ||
    values.subject.trim().length < 3 ||
    values.subject.trim().length > 120
  ) {
    errors.subject = "Subject must be between 3 and 120 characters.";
  }

  if (
    !values.message.trim() ||
    values.message.trim().length < 10 ||
    values.message.trim().length > 2000
  ) {
    errors.message = "Message must be between 10 and 2000 characters.";
  }

  return errors;
}

export default function Contact() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: "idle", message: "" });

  const isSubmitting = status.type === "loading";

  const menuItems = [
    { text: "HOME", link: "/" },
    { text: "DISCOVERY", link: "/discovery" },
    { text: "CONTACT", link: "/contact" },
  ];

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ type: "idle", message: "" });

    const validationErrors = validateClient(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setStatus({ type: "error", message: "Please review the highlighted fields." });
      return;
    }

    try {
      setStatus({ type: "loading", message: "Sending message..." });

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const payload = await response.json();

      if (!response.ok) {
        if (payload.errors && typeof payload.errors === "object") {
          setErrors(payload.errors);
        }

        throw new Error(payload.message || "Could not send message.");
      }

      setFormData(INITIAL_FORM);
      setStatus({
        type: "success",
        message: "Message sent successfully. I will get back to you soon.",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message: error.message || "Could not send message right now. Please try again.",
      });
    }
  };

  return (
    <section className="contact-page">
      <div
        className="contactFloatingMenu"
        onMouseEnter={() => setIsMenuOpen(true)}
        onMouseLeave={() => setIsMenuOpen(false)}
        aria-label="Contact navigation"
      >
        <motion.button
          className="contactMenuButton"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="contactMenuIcon">
            <motion.div
              className="contactMenuLine"
              animate={isMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
            />
            <motion.div
              className="contactMenuLine"
              animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.div
              className="contactMenuLine"
              animate={isMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
            />
          </div>
        </motion.button>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="contactMenuDropdown"
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.06, duration: 0.2 }}
                >
                  <Link
                    to={item.link}
                    className={`contactMenuItem ${item.text === "CONTACT" ? "active" : ""}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.text}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="contact-shell">
        <div className="contact-left">
          <p className="contact-kicker">Let&apos;s make something amazing together.</p>
          <h1 className="contact-title">
            Just <br />
            send it.
          </h1>
        </div>

        <div className="contact-right">
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="hp-field" aria-hidden="true">
              <label htmlFor="companyWebsite">Website</label>
              <input
                id="companyWebsite"
                name="companyWebsite"
                type="text"
                autoComplete="off"
                tabIndex={-1}
                value={formData.companyWebsite}
                onChange={handleChange}
              />
            </div>

            <div className="form-field">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                maxLength={80}
                required
              />
              {errors.name ? <p className="field-error">{errors.name}</p> : null}
            </div>

            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                maxLength={120}
                required
              />
              {errors.email ? <p className="field-error">{errors.email}</p> : null}
            </div>

            <div className="form-field">
              <label htmlFor="subject">Subject</label>
              <input
                id="subject"
                name="subject"
                type="text"
                value={formData.subject}
                onChange={handleChange}
                maxLength={120}
                required
              />
              {errors.subject ? <p className="field-error">{errors.subject}</p> : null}
            </div>

            <div className="form-field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                maxLength={2000}
                required
              />
              {errors.message ? <p className="field-error">{errors.message}</p> : null}
            </div>

            {status.type !== "idle" ? (
              <p className={`form-status ${status.type}`}>{status.message}</p>
            ) : null}

            <motion.button
              type="submit"
              className="send-button"
              whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 10,
              }}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send message"}
            </motion.button>
          </form>
        </div>

        <div className="contact-bottom">
          <div className="contact-info-card">
            <p className="info-title">Opening hours</p>
            <p className="info-text">Mon - Fri 8 AM - 8 PM CST</p>
            <p className="info-text">Sat 8 AM - 12 PM CST</p>
          </div>

          <div className="contact-info-card">
            <p className="info-title">Follow me</p>
            <div className="contactSocialIcons">
              <a
                href="https://www.linkedin.com/in/luis-zarza/"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon width="28" height="28" />
              </a>
              <a
                href="https://github.com/Ludwig-a11"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon width="28" height="28" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
