import "./about.css";
import image from "../assets/aboutMePic.jpg";
import { motion } from "framer-motion";

const About = () => {
  const handleUpButton = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div className="aboutMainContainer">
        <div className="aboutMePicContainer">
          <img className="aboutMePic" src={image} alt="aboutMePicture" />
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
        <p className="detailsSummary">
          I have achieved a good training as a front-end developer with
          attention to detail and the creation of accurate web pages. In
          developing visually appealing and user-friendly web interfaces,
          successfully translating design mockups into responsive websites using
          front-end frameworks and libraries. I have also gained experience in
          QA testing, including test case creation, bug reporting and user story
          tracking. My testing experience extends to automated testing,
          microservices and APIs, having worked with multiple clients and
          projects in the US and LATAM regions. In addition, have experience in
          sales, specializing in prospecting and customer attraction, and
          knowledge of several sales tools. I have managed to develop myself in
          diverse activities ranging from new client creation, project scope
          development, project negotiation and planning, project implementation
          and monitoring ensuring the best quality of each release. With a
          combination of frontend development, QA testing, and sales skills,
          along with a strong background as an IT recruiter, I am confident that
          I am well prepared to make valuable contributions in a multicultural
          environment in any technology company.
        </p>
      </section>

      <section className="expSection">
        <h3 className="exp">Experience</h3>
        <p className="salvoSoftware">Salvo Software</p>
        <p className="startDate">Sep.2022 - Present</p>
        <p className="salvoRole">QA Tester</p>
        <p className="description">
          I have been responsible for test case creation, bug reporting, and
          user story tracking. I am fluent in the -Given-When-Then- technique,
          and have experience testing microservices and APIs. For multiple
          clients and simultaneous projects in US and LATAM.
        </p>

        <p className="parallelStaff">ParallelStaff</p>
        <p className="date">Aug.2021 - Mar.2022</p>
        <p className="parallelRole">IT Recruiter</p>
        <p className="description">
          Experience managing the hiring plan for the clients vacancies that
          have been assigned to me I spend the day identifying, locating,
          directing and hiring the best talent in the US, Mexico and LATAM: QA,
          DevOps, FrontEnd, BackEnd and FullStack Developers, BI Dev, etc. I am
          in charge of ensuring optimal use of the ATS and other recruiting
          tools, for a great candidate experience. Creation of job descriptions
          that align with the expectations of the hiring manager and clients.
        </p>
        <p className="integraTechnologies">Integra Technologies</p>
        <p className="date">Nov.2020 - Jul.2021</p>
        <p className="integralRole">IT Recruiter</p>
        <p className="description">
          Worked with a high number of Telecom and IT vacancies for the company
          to understand needs and provide accurate prospects for the current
          project such a Solution Architect, DevOps, Mobile Developers, Full
          Stack prospects, CISCO, and HUAWEI roles, and so on. Developed
          recruiting strategies to identify qualified candidates, utilizing
          specialized job boards and tools Social media platforms and online job
          boards to advertise open positions and engage with potential
        </p>
      </section>

      <section className="eduSection">
        <h3 className="edu">Education</h3>
        <p className="institute">
          School of Technology and Computer Science - Academlo
        </p>
        <p className="degree">Full Stack Web Development</p>
        <p className="date">Apr.2022 - Mar.2023</p>

        <p className="instituteMexicana">Universidad Mexicana</p>
        <p className="degree">Social Psychology - Not Graduated</p>
        <p className="date">Apr. 2019</p>
      </section>

      <section className="certSection">
        <h3 className="cert">Certifications</h3>
        <p className="certFullStack">Full Stack Web Development</p>
        <p className="date">Nov-2022</p>
        <motion.a
          className="fullStackCred"
          href="https://certificates.academlo.com/en/verify/00470908666115"
          target={"_blank"}
          rel="noreferrer"
          whileHover={{ scale: 1.3 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          Show Credential
        </motion.a>

        <p className="certBackEnd">Back-end Development with Node.js</p>
        <p className="date">Oct-2022</p>
        <motion.a
          className="backEndCred"
          href="https://certificates.academlo.com/en/verify/31039857591732"
          target={"_blank"}
          rel="noreferrer"
          whileHover={{ scale: 1.3 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          Show Credential
        </motion.a>

        <p className="certFrontEnd">Front-end Development with React.js</p>
        <p className="date">Sep-2022</p>
        <motion.a
          className="frontEndCred"
          href="https://certificates.academlo.com/en/verify/13744625688450"
          target={"_blank"}
          rel="noreferrer"
          whileHover={{ scale: 1.3 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          Show Credential
        </motion.a>
      </section>

      <section className="skillSection">
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
              <li>Jira</li>
              <li>Postman</li>
              <li>Cypress</li>
              <li>Scrum</li>
              <li>ASANA</li>
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
              <li>JWT</li>
              <li>Git</li>
              <li>GitHub</li>
              <li>Axios</li>
            </ul>
          </div>
        </div>
      </section>
      <button className="backToTopBtn" onClick={handleUpButton}>
        Back to top
      </button>
    </>
  );
};

export default About;
