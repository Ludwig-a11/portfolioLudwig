{
  /*"use client";
import "./about.css";
import image from "../../assets/copper_pic.jpg";
import BioSection from "./BioSection";
import AboutPicture from "./AboutPicture";
import ExpSection from "./ExpSection";
import SkillSection from "./SkillSection";
import { motion } from "framer-motion";
import { HiOutlineArrowSmallUp } from "react-icons/hi2";
import CertSection from "./CertSection";
import Footer from "../Footer";

const About = () => {
  const handleUpButton = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div className="bioContainer">
        <AboutPicture image={image} alt="aboutMePic" />
        <BioSection />
        <ExpSection />
        <SkillSection />
        <CertSection />

        <motion.button
          className="backToTopBtn"
          onClick={handleUpButton}
          whileHover={{ scale: 2, fontWeight: "bold" }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <HiOutlineArrowSmallUp />
        </motion.button>
      </div>

      <Footer />
    </>
  );
};

export default About;*/
}
("use client");
import "./about.css";
import image from "../../assets/copper_pic.jpg";
import BioSection from "./BioSection";
import AboutPicture from "./AboutPicture";
import ExpSection from "./ExpSection";
import SkillSection from "./SkillSection";
import { motion } from "framer-motion";
import { HiOutlineArrowSmallUp } from "react-icons/hi2";
import CertSection from "./CertSection";
import Footer from "../Footer";

const About = () => {
  const handleUpButton = () => {
    const scrollableContent = document.querySelector(".aboutContentScrollable");
    scrollableContent.scrollTo(0, 0);
  };

  return (
    <>
      <div className="aboutMainLayout">
        {/* Columna izquierda fija */}
        <div className="aboutSidebarFixed">
          <div className="aboutProfileCard">
            <AboutPicture image={image} alt="aboutMePic" />

            <div className="profileInfo">
              <h2>Luis Martinez</h2>
              <p className="profileTitle">Web & AI Developer</p>

              <div className="contactDetails">
                <div className="contactItem">
                  <span className="contactIcon">📧</span>
                  <span>ludwigd3v@gmail.com</span>
                </div>
                <div className="contactItem">
                  <span className="contactIcon">📞</span>
                  <span>+52 (55) 3150-6673</span>
                </div>
                <div className="contactItem">
                  <span className="contactIcon">📍</span>
                  <span>México City, MX</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Columna derecha scrollable */}
        <div className="aboutContentScrollable">
          <div className="aboutContentInner">
            <BioSection />
            <ExpSection />
            <SkillSection />
            <CertSection />

            {/* Botón back to top al final */}
            <motion.button
              className="backToTopBtn"
              onClick={handleUpButton}
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <HiOutlineArrowSmallUp />
            </motion.button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
