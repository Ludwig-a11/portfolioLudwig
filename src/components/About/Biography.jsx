import "./biography.css";
import { motion } from "framer-motion";
import ProfileImage from "../../assets/portfolio_pc2.jpg";

import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiPython,
  SiPostgresql,
  SiGit,
  SiCypress,
  SiPostman,
  SiDocker,
  SiTailwindcss,
} from "react-icons/si";

const Biography = () => {
  const summary =
    "AI Automation Developer with hands-on experience designing, building, and deploying intelligent workflow systems powered by LLMs, voice AI agents, and multi-app integrations. I specialize in automating operational and sales processes using n8n, Retell AI, APIs, CRMs, and custom logic to streamline response time and improve lead qualification.";

  const skillsSoftware = [
    { name: "JavaScript", icon: SiJavascript },
    { name: "React.js", icon: SiReact },
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Python", icon: SiPython },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "Tailwind", icon: SiTailwindcss },
    { name: "Git", icon: SiGit },
    { name: "Cypress", icon: SiCypress },
    { name: "Postman", icon: SiPostman },
    { name: "Docker", icon: SiDocker },
  ];

  const automationHighlights = [
    "AI agents for lead qualification (Kivo, Chloe)",
    "Voice workflows with Retell AI and custom prompts",
    "End-to-end automations with n8n & webhooks",
    "CRM updates, follow-up emails and call summaries",
  ];

  const companies = [
    {
      name: "Salvo Software",
      period: "Sep 2022 – Present",
      location: "Vancouver, WA · Remote",
      roles: [
        {
          title: "AI Automation Developer",
          description:
            "Designed and implemented end-to-end automations using n8n, APIs, LLM prompts, and Retell AI. Built AI agents (Kivo, Chloe) that automate lead qualification, calling, email drafting, and CRM updates.",
        },
        {
          title: "QA Tester",
          description:
            "Manual testing, end-to-end validation and regression cycles using Gherkin BDD cases and full test documentation.",
        },
      ],
    },
    {
      name: "Noralogic Inc.",
      period: "Apr 2022 – Sep 2022",
      location: "Cheyenne, WY · Remote",
      roles: [
        {
          title: "IT Recruiter",
          description:
            "Full-cycle technical recruiting for IT staff hires in the US and LATAM for clients worldwide.",
        },
      ],
    },
    {
      name: "Parallel Staff",
      period: "Aug 2021 – Mar 2022",
      location: "Cuernavaca, MX · Remote",
      roles: [
        {
          title: "IT Recruiter",
          description:
            "IT recruiting across different regions, collaborating with cross-functional teams and improving hiring processes.",
        },
      ],
    },
  ];

  const certifications = [
    {
      title: "Software Product Management",
      issuer: "University of Alberta",
      date: "May 2025",
    },
    {
      title: "Software Testing for Developers",
      issuer: "Codio",
      date: "Jan 2024",
    },
    {
      title: "Full Stack Web Development",
      issuer: "Academlo",
      date: "Nov 2022",
    },
  ];

  const languages = [
    { name: "Spanish", level: "Native" },
    { name: "English", level: "Advanced (C1)" },
  ];

  const interests = [
    "AI agents & automations",
    "Product thinking",
    "System design",
    "Teaching / mentoring",
  ];

  return (
    <div className="biographyWrapper">
      <motion.div
        className="bioPage"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* LEFT COLUMN */}
        <div className="bioLeftColumn">
          <header className="bioHeader">
            <h1>Luis N. Martinez Zarza</h1>
            <p className="bioTitle">AI Automation & Web Developer</p>
            <div className="bioMeta">
              <span>📍 México City, MX</span>
              <span>✉️ ludwigd3v@gmail.com</span>
            </div>
          </header>

          <section className="bioSection">
            <h2>About me</h2>
            <p>{summary}</p>
          </section>

          <section className="bioSection">
            <h2>Automation focus</h2>
            <ul className="bioList">
              {automationHighlights.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="bioSection">
            <h2>Experience</h2>
            <div className="bioTimeline">
              {companies.map((company, idx) => (
                <div key={idx} className="bioTimelineItem">
                  <div className="bioTimelineDot" />
                  <div className="bioTimelineBody">
                    <h3>{company.name}</h3>
                    <p className="bioTimelineMeta">
                      {company.period} · {company.location}
                    </p>
                    {company.roles.map((role, rIdx) => (
                      <div key={rIdx} className="bioRole">
                        <h4>{role.title}</h4>
                        <p>{role.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="bioSection">
            <h2>Education & Certifications</h2>
            <div className="bioCertList">
              {certifications.map((cert, idx) => (
                <div key={idx} className="bioCertItem">
                  <h3>{cert.title}</h3>
                  <p>{cert.issuer}</p>
                  <span>{cert.date}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* RIGHT COLUMN */}
        <div className="bioRightColumn">
          <motion.div
            className="bioPortraitCard"
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bioPortraitCircle">
              <img src={ProfileImage} alt="Luis Martinez" />
            </div>
            <div className="bioPortraitInfo">
              <p>AI Automation Developer</p>
              <p>Working with LLMs, Retell AI & n8n</p>
            </div>
          </motion.div>

          <section className="bioSubSection">
            <h3>Software & Tools</h3>
            <div className="bioSoftwareGrid">
              {skillsSoftware.map((skill, idx) => (
                <div key={idx} className="bioSoftwareItem">
                  <skill.icon className="bioSoftwareIcon" />
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="bioSubSection">
            <h3>Languages</h3>
            <ul className="bioListSmall">
              {languages.map((lang, idx) => (
                <li key={idx}>
                  <strong>{lang.name}</strong> · {lang.level}
                </li>
              ))}
            </ul>
          </section>

          <section className="bioSubSection">
            <h3>Interests</h3>
            <div className="bioTags">
              {interests.map((interest, idx) => (
                <span key={idx} className="bioTag">
                  {interest}
                </span>
              ))}
            </div>
          </section>
        </div>
      </motion.div>
    </div>
  );
};

export default Biography;
