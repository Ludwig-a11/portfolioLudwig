import React, { useState } from "react";
import "./contact.css";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

export default function Contact() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { text: "HOME", link: "/" },
    { text: "DISCOVERY", link: "/discovery" },
    { text: "CONTACT", link: "/contact" },
  ];

  return (
    <section className="contact-page">
      {/* Botón de menú flotante */}
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
                    className={`contactMenuItem ${
                      item.text === "CONTACT" ? "active" : ""
                    }`}
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
        {/* LEFT COLUMN */}
        <div className="contact-left">
          {/* (3) */}
          <p className="contact-kicker">
            Let&apos;s make something amaizing together.
          </p>

          {/* (5) */}
          <h1 className="contact-title">
            Just <br />
            send it.
          </h1>

          {/* Bottom blocks */}
          <div className="contact-bottom">
            {/* Opening hours */}
            <div className="contact-info-card">
              <p className="info-title">Opening hours</p>
              <p className="info-text">Mon - Fri 8 AM - 8 PM CST</p>
              <p className="info-text">Sat 8 AM - 12 PM CST</p>
            </div>

            {/* Follow me */}
            <div className="contact-info-card">
              <p className="info-title">Follow me</p>
              <div className="social-row">
                <a
                  href="https://www.linkedin.com/in/TU-USUARIO/"
                  target="_blank"
                  rel="noreferrer"
                  className="social-link"
                >
                  <LinkedInIcon />
                  <span>LinkedIn</span>
                </a>

                <a
                  href="https://github.com/TU-USUARIO"
                  target="_blank"
                  rel="noreferrer"
                  className="social-link"
                >
                  <GitHubIcon />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="contact-right">
          {/* (2) */}
          <div className="services-grid">
            <ServiceCard
              title="Discovery & Alignment"
              footer="Clear problem definition + priorities + success criteria"
              bullets={[
                "Understand the real problem (not just the request).",
                "Business goals, users, and success metrics.",
                "Initial scope and risks.",
                "Rapid validation (wireframes, flows, prototypes).",
              ]}
            />

            <ServiceCard
              title="Design & Technical Planning"
              footer="Functional design + technical plan ready to iterate"
              bullets={[
                "UX/UI flows (not perfect design—just what’s needed).",
                "Architecture and technical decisions.",
                "MVP definition and iterations.",
                "Prioritized backlog.",
              ]}
            />

            <ServiceCard
              title="Build, Test & Iterate"
              footer="Functional software validated through iterations"
              bullets={[
                "Incremental development.",
                "Continuous testing (manual and automated).",
                "Early feedback from clients and stakeholders.",
                "Fast adjustments.",
              ]}
            />

            <ServiceCard
              title="Launch, Monitor & Improve"
              footer="A living, stable product that continuously improves"
              bullets={[
                "Continuous deployment.",
                "Monitoring (performance, errors, real usage).",
                "Support and data-driven improvements.",
                "Ongoing product evolution.",
              ]}
            />
          </div>

          {/* (4) FORM */}
          <form className="contact-form">
            <div className="form-field">
              <label>Name</label>
              <input type="text" placeholder="Your name" />
            </div>

            <div className="form-field">
              <label>Email</label>
              <input type="email" placeholder="you@email.com" />
            </div>

            <div className="form-field">
              <label>Subject</label>
              <input type="text" placeholder="Project inquiry" />
            </div>

            <div className="form-field">
              <label>Message</label>
              <textarea
                rows="5"
                placeholder="Tell me about your project..."
              />
            </div>

            <button type="submit" className="send-button">
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

/* ---------- Components ---------- */

function ServiceCard({ title, bullets, footer }) {
  return (
    <div className="service-card">
      <p className="service-title">{title}</p>
      <ul>
        {bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
      <p className="service-footer">{footer}</p>
    </div>
  );
}

/* ---------- Icons ---------- */

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18">
      <path
        d="M6.94 6.5A2.19 2.19 0 1 1 2.56 6.5a2.19 2.19 0 0 1 4.38 0ZM3.5 21h3V9h-3v12ZM9.5 9h2.87v1.64h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.6V21h-3v-5.6c0-1.33-.02-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95V21h-3V9Z"
        fill="currentColor"
      />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18">
      <path
        d="M12 2C6.48 2 2 6.58 2 12.24c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.48 0-.24-.01-.86-.01-1.69-2.78.62-3.37-1.37-3.37-1.37-.45-1.17-1.11-1.48-1.11-1.48-.9-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.9 1.56 2.36 1.11 2.94.85.09-.67.35-1.11.63-1.37-2.22-.26-4.55-1.13-4.55-5.02 0-1.11.39-2.01 1.03-2.72-.1-.26-.45-1.31.1-2.73 0 0 .84-.27 2.75 1.04a9.2 9.2 0 0 1 2.5-.35c.85 0 1.71.12 2.5.35 1.9-1.31 2.74-1.04 2.74-1.04.55 1.42.2 2.47.1 2.73.64.71 1.03 1.61 1.03 2.72 0 3.9-2.34 4.76-4.57 5.01.36.32.68.95.68 1.92 0 1.39-.01 2.5-.01 2.84 0 .27.18.59.69.48A10.26 10.26 0 0 0 22 12.24C22 6.58 17.52 2 12 2Z"
        fill="currentColor"
      />
    </svg>
  );
}
