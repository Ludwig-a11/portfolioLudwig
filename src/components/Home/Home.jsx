
import "./home.css";
import Picture from "../../assets/portfolio_pc2.jpg";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { RevealGroup, RevealItem } from "../motion/Reveal";
//import ContactForm from "./ContactForm";

const ROLES = ["AI Automation Developer", "Agentic AI"];

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);

  const imageWrapRef = useRef(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springRotateX = useSpring(rotateX, { stiffness: 200, damping: 20 });
  const springRotateY = useSpring(rotateY, { stiffness: 200, damping: 20 });

  useEffect(() => {
    const id = setInterval(() => {
      setRoleIndex((index) => (index + 1) % ROLES.length);
    }, 2600);
    return () => clearInterval(id);
  }, []);

  const handleImageMouseMove = (event) => {
    const el = imageWrapRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = (event.clientX - rect.left) / rect.width - 0.5;
    const relY = (event.clientY - rect.top) / rect.height - 0.5;
    rotateY.set(relX * 12);
    rotateX.set(relY * -12);
  };

  const handleImageMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

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
            <RevealGroup className="homeText" mode="mount" stagger={0.12} delayChildren={0.1}>
              <RevealItem as="h1">Hi, I&apos;m Luis Martinez</RevealItem>
              <RevealItem as="p">
                I turn “We&apos;ve got an idea” into “AI agents that work”
              </RevealItem>
              <RevealItem as="div" className="homeRole">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={ROLES[roleIndex]}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    style={{ display: "inline-block" }}
                  >
                    {ROLES[roleIndex]}
                  </motion.span>
                </AnimatePresence>
              </RevealItem>
            </RevealGroup>
            <motion.div
              className="homeImageWrap"
              ref={imageWrapRef}
              onMouseMove={handleImageMouseMove}
              onMouseLeave={handleImageMouseLeave}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              style={{ perspective: 900 }}
            >
              <motion.img
                className="picHome"
                src={Picture}
                alt="Luis Martinez"
                style={{ rotateX: springRotateX, rotateY: springRotateY }}
              />
            </motion.div>
          </div>
        </div>
      </section>
      {/*<ContactForm />*/}
    </>
  );
};

export default Home;
