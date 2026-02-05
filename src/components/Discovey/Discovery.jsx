import "./discovery.css";
import ProfilePicture from "../../assets/portfolio_pc2.jpg";
import TechBannerImage from "../../assets/tech_banner.jpeg";
import { GithubIcon, LinkedInIcon } from "../Icons";
import { motion } from "framer-motion";
import { FaXTwitter } from "react-icons/fa6";

// Importa las imágenes de los proyectos
import chloeImg from "../../assets/chloe_banner.jpeg";
import kivoImg from "../../assets/kivo_banner.jpeg";
import ddtcImg from "../../assets/ddtCalculator.png";
import rickMortyImg from "../../assets/rick-morthy.png";
import ContactForm from "../Home/ContactForm";

const Discovery = () => {
  const projects = [
    {
      id: 1,
      title: "Chloe",
      image: chloeImg,
      link: "#",
    },
    {
      id: 2,
      title: "Kivo",
      image: kivoImg,
      link: "#",
    },
    {
      id: 3,
      title: "Dedicated Teams Calculator",
      image: ddtcImg,
      link: "https://www.salvosoftware.com/dedicated-development-teams/#calculator",
    },
    {
      id: 4,
      title: "Rick & Morty",
      image: rickMortyImg,
      link: "https://subtle-pasca-8707dd.netlify.app/",
    },
  ];

  const handleMessage = () => {
    const recipient = "ludwigd3v@gmail.com";
    const subjectline = "Let's connect!";
    const body = "Hi Luis, I would like to connect with you...";
    const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(subjectline)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoUrl, "_blank");
  };

  const handleProjectClick = (link) => {
    if (link !== "#") {
      window.open(link, "_blank");
    }
  };

  return (
    <div className="discoveryPageWrapper">
      <div className="discoveryMainLayout">
        {/* Sidebar izquierdo */}
        <div className="discoverySidebarFixed">
          <div className="discoveryProfileCard">
            <div className="discoveryPicContainer">
              <img
                className="discoveryPic"
                src={ProfilePicture}
                alt="Luis Martinez"
              />
            </div>

            <div className="discoveryProfileInfo">
              <h2>Luis Martinez</h2>
              <p className="discoveryProfileTitle">
                Automation Developer at Salvo Software
              </p>

              {/* Social Media Icons */}
              <div className="discoverySocialIcons">
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

              {/* Certifications Experience */}
              <div className="discoveryWorkSection">
                <div className="discoveryWorkItem">
                  <h3>Courses</h3>
                  <br />
                  <a
                    href="https://www.coursera.org/account/accomplishments/specialization/CS0M4THYKAYW"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    Software Product Management
                  </a>
                  <p>University of Alberta - May 2025</p>
                  <br />
                  <a
                    href="https://www.coursera.org/account/accomplishments/verify/XD3ZQ2KFVEGA"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    Software Testing for Developers
                  </a>
                  <p>Codio - Feb 2024</p>
                  <br />
                  <a
                    href="https://verified.sertifier.com/en/verify/00470908666115/"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    Full Stack Web Developer
                  </a>
                  <p>Academlo - Nov 2022</p>
                  <br />
                  <br />
                  <br />

                  {/* Boton Let's Connect */}
                  <div className="discoveryActionButtons">
                    <motion.button
                      className="discoveryMessageBtn"
                      onClick={handleMessage}
                      whileHover={{ scale: 1.05 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      Let&apos;s Connect
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contenido principal - Banner y Projects Grid */}
        <div className="discoveryContentScrollable">
          <div className="discoveryContentInner">
            {/* Banner superior */}
            <div className="discoveryBanner">
              <img
                src={TechBannerImage}
                alt="Banner"
                className="discoveryBannerImg"
              />
            </div>

            {/* About Section */}
            <div className="discoveryProjectsSection discoveryAboutSection">
              <h2 className="discoveryProjectsTitle">About</h2>
              <p className="discoveryAboutText">
                Automation Developer with hands-on experience designing,
                building, and deploying intelligent workflow systems powered by
                LLMs, voice AI agents, and multi-app integrations. I specialize
                in automating operational and sales processes using custom logic
                to streamline response time and improve lead qualification.
                Previously worked in QA, Sales Ops, and Tech Recruitment, giving
                me a unique cross-functional understanding of how technology,
                product, and business goals connect. I thrive in fast-paced
                environments, quickly learning new tools, designing robust
                automation flows, and delivering production-ready solutions.
              </p>
            </div>

            {/* Projects Grid */}
            <div className="discoveryProjectsSection">
              <h2 className="discoveryProjectsTitle">Projects</h2>
              <div className="discoveryProjectsGrid">
                {projects.map((project) => (
                  <motion.div
                    key={project.id}
                    className="discoveryProjectCard"
                    onClick={() => handleProjectClick(project.link)}
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="discoveryProjectImg"
                    />
                    <div className="discoveryProjectOverlay">
                      <h3>{project.title}</h3>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discovery;
