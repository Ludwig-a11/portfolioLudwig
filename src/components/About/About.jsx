"use client";
import "./about.css";
import AboutPicture from "./AboutPicture";
import ScrollableContent from "./ScrollableContent";

const About = () => {
  return (
    <div className="aboutPageWrapper">
      <div className="aboutMainLayout">
        {/* Componente 1: Sidebar fijo (izquierda) */}
        <AboutPicture />

        {/* Componente 2: Contenido scrollable + Footer (derecha) */}
        <ScrollableContent />
      </div>
    </div>
  );
};

export default About;




{/*}
"use client";
import "./about.css";
import BioSection from "./BioSection";
import AboutPicture from "./AboutPicture";
import ExpSection from "./ExpSection";
import SkillSection from "./SkillSection";
import { motion } from "framer-motion";
import { HiOutlineArrowSmallUp } from "react-icons/hi2";
import CertSection from "./CertSection";

const About = () => {
  const handleUpButton = () => {
    const scrollableContent = document.querySelector(".aboutContentScrollable");
    if (scrollableContent) {
      scrollableContent.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="aboutPageWrapper">
      <div className="aboutMainLayout">
        
        <AboutPicture />

        
        <div className="aboutContentScrollable">
          <div className="aboutContentInner">
            <BioSection />
            <ExpSection />
            <SkillSection />
            
            <div className="certSectionWrapper">
              <CertSection />

              
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
      </div>
    </div>
  );
};

export default About;
*/}