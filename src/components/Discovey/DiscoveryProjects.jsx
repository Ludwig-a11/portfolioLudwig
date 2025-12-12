import { motion } from "framer-motion";
import chloeImg from "../../assets/chloe_banner.jpeg";
import kivoImg from "../../assets/kivo_banner.jpeg";
import ddtcImg from "../../assets/ddtCalculator.png";
import rickMortyImg from "../../assets/rick-morthy.png";

const projects = [
  {
    id: 1,
    title: "Chloe",
    image: chloeImg,
    link: "#"
  },
  {
    id: 2,
    title: "Kivo",
    image: kivoImg,
    link: "#"
  },
  {
    id: 3,
    title: "Dedicated Teams Calculator",
    image: ddtcImg,
    link: "https://www.salvosoftware.com/dedicated-development-teams/#calculator"
  },
  {
    id: 4,
    title: "Rick & Morty",
    image: rickMortyImg,
    link: "https://subtle-pasca-8707dd.netlify.app/"
  }
];

const experiences = [
  {
    title: "AI Automation Developer",
    company: "Salvo Software - Custom Software Solutions"
  },
  {
    title: "QA Tester",
    company: "Salvo Software - Custom Software Solutions"
  }
];

const DiscoveryProjects = () => {
  const handleProjectClick = (link) => {
    if (link !== "#") {
      window.open(link, "_blank");
    }
  };

  return (
    <section className="discoveryProjectsSection">
      <div className="discoveryProjectsHeader">
        <h2 className="discoveryProjectsTitle">Projects</h2>
        <p className="discoveryProjectsSubtitle">A snapshot of my favorite builds and experiments.</p>
      </div>

      <div className="discoveryProjectsLayout">
        <div className="discoveryExperienceColumn">
          <div className="discoveryExperienceCard">
            <div className="discoveryExperienceHeader">
              <p className="discoveryTag">Experience</p>
              <h3>What I&apos;m working on</h3>
            </div>
            <ul className="discoveryExperienceList">
              {experiences.map((role) => (
                <li key={role.title} className="discoveryExperienceItem">
                  <h4>{role.title}</h4>
                  <p>{role.company}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="discoveryResumeCard">
            <p className="discoveryTag">Resume</p>
            <h3>Full resume coming soon</h3>
            <p className="discoveryResumeText">
              I&apos;m polishing a detailed overview of my skills and journey. Check back soon to download it.
            </p>
            <button className="discoveryResumeButton" type="button" disabled>
              In progress
            </button>
          </div>
        </div>

        <div className="discoveryProjectsGrid">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="discoveryProjectCard"
              onClick={() => handleProjectClick(project.link)}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <img src={project.image} alt={project.title} className="discoveryProjectImg" />
              <div className="discoveryProjectOverlay">
                <h3>{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiscoveryProjects;
