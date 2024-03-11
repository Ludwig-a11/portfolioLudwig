"use client";
import "./about.css";
import { useRef } from "react";
import image from "../assets/aboutMePic.jpg";
import { motion, useScroll } from "framer-motion";
import { HiOutlineArrowSmallUp } from "react-icons/hi2";
import { PiArrowSquareInLight } from "react-icons/pi";

const About = () => {
  const handleUpButton = () => {
    window.scrollTo(0, 0);
  };

  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start end", "start start"],
  });

  return (
    <>
      <div className="aboutMainContainer">
        <div className="aboutMePicContainer">
          <motion.img
            className="aboutMePic"
            src={image}
            alt="aboutMePicture"
          ></motion.img>
        </div>
      </div>

      <section className="bioSection">
        <h2 className="bio">Biography</h2>
        <p className="details">
          Luis Martinez <br /> 1990 / México
        </p>
        <p className="detailsTitles">
          IT Recruiter | Front-end Dev | QA Tester | Sales Rep
        </p>
        <motion.div ref={element} style={{ opacity: scrollYProgress }}>
          <p className="detailsSummary">
            I have a good knowledge of the Software Development Life Cycle and
            Quality Assurance Methodology, backed by my experience as a
            Technical Recruiter IT. I focused on dynamic and fast-paced
            environments, excelling in collaborative work environments and
            easily adapting to changes. As a self-starter, I pride myself on
            being a fast learner and proactive self-starter, looking to
            contribute effectively to the team. My approach to overcoming
            challenges is both systematic and proactive, reflecting a commitment
            to ensuring project success. I like to operate with a
            product/project and client-focused mindset, I have a genuine passion
            and dedication to learning and my work, delivering consistent
            results.
          </p>
        </motion.div>
      </section>

      <section className="expSection">
        <h3 className="exp">Background</h3>
        <p className="salvoSoftware">Salvo Software</p>
        <p className="startDate">Sep.2022 - Present</p>
        <p className="salvoRole">QA Tester</p>
        <p className="description">
          I participate in all Scrum meetings and have close collaboration with
          product managers and developers to ensure that the project meets
          functional requirements. Created behavior-based development test cases
          using Gherkin language. Executed various types and levels of manual
          testing: exploratory, sanity, smoke, regression, end-to-end, and
          cross-browser testing for web applications. Report defects/problems
          including brief relevant descriptions of the problem with detailed
          steps to replicate it, including screenshots, videos, and log files.
        </p>

        <div className="eduSection">
          <h3 className="edu">Education</h3>
          <p className="institute">
            School of Technology and Computer Science - Academlo
          </p>
          <p className="degree">Full Stack Web Development</p>
          <p className="date">Apr.2022 - Mar.2023</p>

          <p className="instituteMexicana">Universidad Mexicana</p>
          <p className="degree">Social Psychology - Not Graduated</p>
          <p className="date">Apr. 2019</p>
        </div>
        <div className="skillSection">
          <h3 className="skill">Skills & Tools</h3>
          <div className="skillsContainer">
            <div className="sales">
              <ul className="salesList">
                <li>HubSpot CRM</li>
                <li>Apollo</li>
                <li>Clearbit</li>
                <li>Google Analytics</li>
                <li>LinkedIn Recruiter</li>
                <li>Sales Navigator</li>
              </ul>
            </div>
            <div className="testing">
              <ul className="testingList">
                <li>Cucumber</li>
                <li>Postman</li>
                <li>Cypress</li>
                <li>Gherkin</li>
                <li>JMeter</li>
                <li>Jest</li>
              </ul>
            </div>
            <div className="development">
              <ul className="developmentList">
                <li>HTML5</li>
                <li>CSS3</li>
                <li>Tailwind CSS</li>
                <li>JavaScript</li>
                <li>Python</li>
                <li>TypeScript</li>
              </ul>
            </div>
            <div className="developmentList2">
              <ul className="developmentList2">
                <li>React.js</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>PostgreSQL</li>
                <li>SQL</li>
                <li>Sequelize</li>
              </ul>
            </div>
            <div className="developmentList3">
              <ul className="developmentList3">
                <li>DBeaver</li>
                <li>JSON</li>
                <li>SQL</li>
                <li>Git</li>
                <li>GitHub</li>
                <li>Axios</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="certSection">
        {" "}
        {/*add Imges each certification */}
        <h3 className="cert">Certifications</h3>
        <p className="certTesting">Software Testing for Developers</p>
        <p className="date">Feb-2024</p>
        <motion.a
          className="testingCred"
          href="https://www.coursera.org/account/accomplishments/verify/XD3ZQ2KFVEGA"
          target={"_blank"}
          rel="noreferrer"
          whileHover={{ scale: 1.3, fontWeight: "bold" }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          Credential <PiArrowSquareInLight />
        </motion.a>
        <p className="certFullStack">Full Stack Web Development</p>
        <p className="date">Nov-2022</p>
        <motion.a
          className="fullStackCred"
          href="https://certificates.academlo.com/en/verify/00470908666115"
          target={"_blank"}
          rel="noreferrer"
          whileHover={{ scale: 1.3, fontWeight: "bold" }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          Credential <PiArrowSquareInLight />
        </motion.a>
        <p className="certBackEnd">Back-end Development with Node.js</p>
        <p className="date">Oct-2022</p>
        <motion.a
          className="backEndCred"
          href="https://certificates.academlo.com/en/verify/31039857591732"
          target={"_blank"}
          rel="noreferrer"
          whileHover={{ scale: 1.3, fontWeight: "bold" }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          Credential <PiArrowSquareInLight />
        </motion.a>
        <p className="certFrontEnd">Front-end Development with React.js</p>
        <p className="date">Sep-2022</p>
        <motion.a
          className="frontEndCred"
          href="https://certificates.academlo.com/en/verify/13744625688450"
          target={"_blank"}
          rel="noreferrer"
          whileHover={{ scale: 1.3, fontWeight: "bold" }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          Credential <PiArrowSquareInLight />
        </motion.a>
      </section>

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
