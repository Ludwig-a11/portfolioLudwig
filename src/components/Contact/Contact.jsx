import { useState } from "react";
import "./contact.css";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { GithubIcon, LinkedInIcon } from "../Icons";

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
        </div>

        {/* RIGHT COLUMN */}
        <div className="contact-right">
          {/* (4) FORM */}
          <form className="contact-form">
            <div className="form-field">
              <label>Name</label>
              <input type="text" />
            </div>

            <div className="form-field">
              <label>Email</label>
              <input type="email" />
            </div>

            <div className="form-field">
              <label>Subject</label>
              <input type="text" />
            </div>

            <div className="form-field">
              <label>Message</label>
              <textarea
                rows="5" />
            </div>

            <motion.button
              type="submit"
              className="send-button"
              whileHover={{ scale: 1.05 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 10,
              }}
            >
              Send message
            </motion.button>
          </form>
        </div>

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
