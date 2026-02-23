import "./discovery.css";
import ProfilePicture from "../../assets/portfolio_pc2.jpg";
import TechBannerImage from "../../assets/tech_banner.jpeg";
import { GithubIcon, LinkedInIcon } from "../Icons";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { projects } from "../../data/projects";
//import ContactForm from "../Home/ContactForm";

const Discovery = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isResetting, setIsResetting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const wheelLockRef = useRef(0);

  const menuItems = [
    { text: "HOME", link: "/" },
    { text: "DISCOVERY", link: "/discovery" },
    { text: "CONTACT", link: "/contact" },
  ];

  const services = [
    {
      title: "Discovery & Alignment",
      footer: "Problem definition + priorities + success criteria",
      bullets: [
        "Understand the real problem (not just the request).",
        "Business goals, users, and success metrics.",
        "Initial scope and risks.",
      ],
    },
    {
      title: "Design & Technical Planning",
      footer: "Functional design + technical plan ready to iterate",
      bullets: [
        "UX/UI flows (design-just what is needed).",
        "Architecture and technical decisions.",
        "MVP definition and iterations.",
      ],
    },
    {
      title: "Build, Test & Iterate",
      footer: "Functional software validated through iterations",
      bullets: [
        "Incremental development.",
        "Continuous testing (manual and automated).",
        "Early feedback from clients and stakeholders.",
      ],
    },
    {
      title: "Launch, Monitor & Improve",
      footer: "A living, stable product that continuously improves",
      bullets: [
        "Continuous deployment.",
        "Monitoring (performance, errors, real usage).",
        "Ongoing product evolution.",
      ],
    },
  ];

  const handleMessage = () => {
    navigate("/contact");
  };

  const handleProjectCardClick = (projectSlug) => {
    navigate(`/projects/${projectSlug}`);
  };

  const handleLiveClick = (event, liveUrl) => {
    event.stopPropagation();
    if (liveUrl) {
      window.open(liveUrl, "_blank", "noopener,noreferrer");
    }
  };

  const handleWheel = (event) => {
    event.preventDefault();
    const now = Date.now();
    if (now - wheelLockRef.current < 300) return;
    wheelLockRef.current = now;

    const direction = event.deltaY > 0 ? 1 : -1;
    if (direction > 0) {
      setCurrentIndex((prev) => {
        if (projects.length === 0) return 0;
        if (prev >= projects.length) return 1;
        return prev + 1;
      });
      return;
    }

    setCurrentIndex((prev) => {
      if (projects.length === 0) return 0;
      if (prev <= 0) return projects.length - 1;
      return prev - 1;
    });
  };

  useEffect(() => {
    if (projects.length <= 1 || isPaused) return undefined;
    const intervalId = setInterval(() => {
      setCurrentIndex((prev) => {
        if (projects.length === 0) return 0;
        if (prev >= projects.length) return 1;
        return prev + 1;
      });
    }, 4500);
    return () => clearInterval(intervalId);
  }, [isPaused]);

  useEffect(() => {
    if (projects.length === 0) return;
    if (currentIndex === projects.length) {
      setIsResetting(true);
      setCurrentIndex(0);
      requestAnimationFrame(() => setIsResetting(false));
    }
  }, [currentIndex]);

  return (
    <div className="discoveryPageWrapper">
      {/* Botón de menú flotante */}
      <div
        className="discoveryFloatingMenu"
        onMouseEnter={() => setIsMenuOpen(true)}
        onMouseLeave={() => setIsMenuOpen(false)}
        aria-label="Discovery navigation"
      >
        <motion.button
          className="discoveryMenuButton"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="discoveryMenuIcon">
            <motion.div
              className="discoveryMenuLine"
              animate={isMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
            />
            <motion.div
              className="discoveryMenuLine"
              animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.div
              className="discoveryMenuLine"
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
              className="discoveryMenuDropdown"
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
                    className={`discoveryMenuItem ${
                      item.text === "DISCOVERY" ? "active" : ""
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

              {/* Exploring */}
              <div className="discoverySidebarSection discoverySidebarSectionCentered">
                <h3>Currently exploring</h3>
                <ul className="discoverySidebarList">
                  <li>Typescript</li>
                  <li>Python</li>
                  <li>Three.js</li>
                </ul>
              </div>

              {/* Tech Skills*/}
              <div className="discoverySidebarSection discoverySidebarSectionCentered">
                <h3>Tech Skills</h3>
                <ul className="discoverySidebarList">
                  <li>Retell + n8n + LLMs</li>
                  <li>JavaScript + React.js + Motion</li>
                  <li>Cypress + Postman + Gerkin</li>
                  <li>PostsgreSQL</li>
                  <li>APIs + Webhooks</li>
                </ul>
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
              <div className="discoveryProjectsSlider" onWheel={handleWheel}>
                <div
                  className="discoveryProjectsTrack"
                  style={{
                    "--slide-index": currentIndex,
                    transition: isResetting ? "none" : "transform 4.5s ease",
                  }}
                >
                  {[...projects, ...projects].map((project, index) => (
                    <motion.div
                      key={`${project.id}-${index}`}
                      className="discoveryProjectCard sliderItem"
                      onClick={() => handleProjectCardClick(project.slug)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(event) => {
                        if (event.key === "Enter" || event.key === " ") {
                          event.preventDefault();
                          handleProjectCardClick(project.slug);
                        }
                      }}
                      onMouseEnter={() => setIsPaused(true)}
                      onMouseLeave={() => setIsPaused(false)}
                      whileHover={{ scale: 1.03 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className={`discoveryProjectImg ${
                          project.slug === "kivo" ? "discoveryProjectImgKivo" : ""
                        }`}
                      />
                      <div className="discoveryProjectOverlay">
                        <h3>{project.title}</h3>
                        <p className="discoveryProjectMeta">
                          {project.description}
                        </p>
                        <div className="discoveryProjectStack">
                          {project.stack}
                        </div>
                        <div className="discoveryProjectActions">
                          <button
                            type="button"
                            className="discoveryProjectBtn"
                            onClick={(event) => {
                              event.stopPropagation();
                              handleProjectCardClick(project.slug);
                            }}
                          >
                            View details
                          </button>
                          {project.liveUrl && (
                            <button
                              type="button"
                              className="discoveryProjectBtn discoveryProjectBtnGhost"
                              onClick={(event) =>
                                handleLiveClick(event, project.liveUrl)
                              }
                            >
                              Live
                            </button>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            <div className="discoveryProjectsSection discoveryServicesSection">
              <h2 className="discoveryProjectsTitle">What I&apos;ve learned</h2>
              <p className="discoveryServicesText">
                I’ve worked close to the problem from multiple angles, sales
                conversations, QA validation, and product delivery, which made me
                opinionated about one thing: reliability comes from a tight
                loop. Define the problem and success criteria, plan what’s
                needed for an MVP, build and test in small increments with early
                feedback, then monitor and improve based on real usage.
              </p>
              <div className="discoveryServicesGrid">
                {services.map((service) => (
                  <article key={service.title} className="discoveryServiceCard">
                    <h3 className="discoveryServiceTitle">{service.title}</h3>
                    <ul className="discoveryServiceList">
                      {service.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                    <p className="discoveryServiceFooter">{service.footer}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discovery;
