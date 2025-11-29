import "./about.css";
import BioSection from "./BioSection";
import ExpSection from "./ExpSection";
import SkillSection from "./SkillSection";
import CertSection from "./CertSection";
import { motion } from "framer-motion";
import { HiOutlineArrowSmallUp } from "react-icons/hi2";

const ScrollableContent = () => {
  const handleUpButton = () => {
    const scrollableContent = document.querySelector(".aboutContentScrollable");
    if (scrollableContent) {
      scrollableContent.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="aboutContentScrollable">
      <div className="aboutContentInner">
        {/* Sección de Biografía */}
        <BioSection />

        {/* Sección de Experiencia */}
        <ExpSection />

        {/* Sección de Habilidades */}
        <SkillSection />

        {/* Sección de Certificaciones + Botón Back to Top */}
        <div className="certSectionWrapper">
          <CertSection />

          {/* Botón para volver arriba */}
          <motion.button
            className="backToTopBtn"
            onClick={handleUpButton}
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            aria-label="Back to top"
          >
            <HiOutlineArrowSmallUp />
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default ScrollableContent;