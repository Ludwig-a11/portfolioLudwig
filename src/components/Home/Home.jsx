
import "./home.css";
import Picture from "../../assets/portfolio_pc2.jpg";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
//import ContactForm from "./ContactForm";

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { text: "HOME", link: "/" },
    { text: "DISCOVERY", link: "/discovery" },
    { text: "CONTACT", link: "/contact" },
  ];

  return (
    <>
      <section className="homeStage">
        {/* Botón de menú flotante */}
        <div
          className="homeFloatingMenu"
          onMouseEnter={() => setIsMenuOpen(true)}
          onMouseLeave={() => setIsMenuOpen(false)}
          aria-label="Home navigation"
        >
          <motion.button
            className="homeMenuButton"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="homeMenuIcon">
              <motion.div
                className="homeMenuLine"
                animate={isMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25 }}
              />
              <motion.div
                className="homeMenuLine"
                animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
              <motion.div
                className="homeMenuLine"
                animate={
                  isMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }
                }
                transition={{ duration: 0.25 }}
              />
            </div>
          </motion.button>

          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                className="homeMenuDropdown"
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
                      className={`homeMenuItem ${
                        item.text === "HOME" ? "active" : ""
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
        <div className="homeShell">
          <div className="homeGrid">
            <div className="homeText">
              <h1>Hi, I&apos;m Luis Martinez</h1>
              <p>
                I turn “We&apos;ve got an idea” into “It&apos;s live and working”
              </p>
              <div className="homeRole">
                Automation Developer • Web Developer
              </div>
            </div>
            <div className="homeImageWrap">
              <img className="picHome" src={Picture} alt="Luis Martinez" />
            </div>
          </div>
        </div>
      </section>
      {/*<ContactForm />*/}
    </>
  );
};

export default Home;
