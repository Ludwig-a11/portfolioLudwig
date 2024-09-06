"use client";
import "./about.css";
import image from "../../assets/aboutMePic.jpg";
import BioSection from "./BioSection";
import AboutPicture from "./AboutPicture";
import ExpSection from "./ExpSection";
import SkillSection from "./SkillSection";
import { motion } from "framer-motion";
import { HiOutlineArrowSmallUp } from "react-icons/hi2";
import CertSection from "./CertSection";

const About = () => {
  const handleUpButton = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
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
    </>
  );
};

export default About;
