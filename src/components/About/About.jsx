import "./about.css";
import { motion } from "framer-motion";
import ProfileImage from "../../assets/portfolio_pc2.jpg";

import { 
  SiJavascript, SiReact, SiNodedotjs, SiPython, SiPostgresql,
  SiGit, SiCypress, SiPostman, SiTailwindcss
} from "react-icons/si";

const About = () => {
  const summary =
    "AI Automation Developer with hands-on experience designing, building, and deploying intelligent workflow systems powered by LLMs, voice AI agents, and multi-app integrations.";

  const skills = {
    automation: [
      { name: "n8n", icon: "🔄" },
      { name: "LLMs", icon: "🤖" },
      { name: "Retell AI", icon: "📞" },
      { name: "Webhooks", icon: "🔗" },
    ],
    development: [
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "React.js", icon: SiReact, color: "#61DAFB" },
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
    ],
    testing: [
      { name: "Cypress", icon: SiCypress, color: "#17202C" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "Jest", icon: "🃏" },
      { name: "Gherkin", icon: "🥒" },
    ],
    tools: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
    ],
  };

  const companies = [
    {
      name: "Salvo Software",
      period: "Sep 2022 - Present",
      roles: [
        {
          title: "AI Automation Developer",
          description:
            "Built AI agents (Kivo, Chloe) automating lead qualification, calling, and CRM updates using n8n, APIs, and Retell AI.",
        },
        {
          title: "QA Tester",
          description: "Manual testing, regression cycles, Gherkin BDD cases.",
        },
      ],
      logo: "🚀",
    },
    {
      name: "Noralogic Inc.",
      period: "Apr 2022 - Sep 2022",
      roles: [
        {
          title: "IT Recruiter",
          description:
            "Full-cycle technical recruiting for US and LATAM clients.",
        },
      ],
      logo: "💼",
    },
    {
      name: "Parallel Staff",
      period: "Aug 2021 - Mar 2022",
      roles: [
        {
          title: "IT Recruiter",
          description: "IT staff recruiting across multiple regions.",
        },
      ],
      logo: "🌐",
    },
  ];

  const certifications = [
    {
      title: "Software Product Management",
      issuer: "Univ. of Alberta",
      date: "May 2025",
      credential: "#",
    },
    {
      title: "Software Testing",
      issuer: "Codio",
      date: "Jan 2024",
      credential:
        "https://www.coursera.org/account/accomplishments/verify/XD3ZQ2KFVEGA",
    },
    {
      title: "Full Stack Dev",
      issuer: "Academlo",
      date: "Nov 2022",
      credential:
        "https://certificates.academlo.com/en/verify/00470908666115",
    },
  ];

  return (
    <div className="aboutWrapper">
      <motion.div
        className="aboutContent"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Left Sidebar */}
        <div className="aboutSidebar">
          <motion.div
            className="aboutProfileCircle"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img src={ProfileImage} alt="Luis Martinez" />
          </motion.div>

          <div className="aboutHeroText">
            <h1>Luis N. Martinez Zarza</h1>
            <p>AI Automation & Web Developer</p>
            <div className="aboutLocation">
              <span>📍 México City, MX</span>
              <span>✉️ ludwigd3v@gmail.com</span>
            </div>
          </div>

          <div className="aboutSummary">
            <h3>💡 Summary</h3>
            <p>{summary}</p>
          </div>
        </div>

        {/* Right Content */}
        <div className="aboutMain">
          {/* Skills */}
          <section className="aboutSection">
            <h2>🛠️ Technical Skills</h2>

            <div className="aboutSkillCategory">
              <h3>AI & Automation</h3>
              <div className="aboutSkillsGrid">
                {skills.automation.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    className="aboutSkillCard"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="skillIcon">{skill.icon}</span>
                    <span className="skillName">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="aboutSkillCategory">
              <h3>Development</h3>
              <div className="aboutSkillsGrid">
                {skills.development.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    className="aboutSkillCard"
                    whileHover={{ scale: 1.05 }}
                  >
                    <skill.icon
                      className="skillIconSvg"
                      style={{ color: skill.color }}
                    />
                    <span className="skillName">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="aboutSkillCategory">
              <h3>Testing & Tools</h3>
              <div className="aboutSkillsGrid">
                {[...skills.testing, ...skills.tools].map((skill, idx) => (
                  <motion.div
                    key={idx}
                    className="aboutSkillCard"
                    whileHover={{ scale: 1.05 }}
                  >
                    {typeof skill.icon === "string" ? (
                      <span className="skillIcon">{skill.icon}</span>
                    ) : (
                      <skill.icon
                        className="skillIconSvg"
                        style={{ color: skill.color }}
                      />
                    )}
                    <span className="skillName">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Experience */}
          <section className="aboutSection">
            <h2>💼 Experience</h2>
            <div className="aboutCompanies">
              {companies.map((company, idx) => (
                <motion.div
                  key={idx}
                  className="aboutCompanyCard"
                  whileHover={{ x: 5 }}
                >
                  <div className="aboutCompanyHeader">
                    <div className="aboutCompanyLogo">{company.logo}</div>
                    <div className="aboutCompanyInfo">
                      <h3>{company.name}</h3>
                      <p className="aboutCompanyPeriod">{company.period}</p>
                    </div>
                  </div>
                  {company.roles.map((role, roleIdx) => (
                    <div key={roleIdx} className="aboutRoleItem">
                      <h4>{role.title}</h4>
                      <p>{role.description}</p>
                    </div>
                  ))}
                </motion.div>
              ))}
            </div>
          </section>

          {/* Certifications */}
          <section className="aboutSection">
            <h2>🎓 Certifications</h2>
            <div className="aboutCerts">
              {certifications.map((cert, idx) => (
                <motion.a
                  key={idx}
                  href={cert.credential}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="aboutCertCard"
                  whileHover={{ y: -3 }}
                >
                  <span className="aboutCertIcon">🏆</span>
                  <h3>{cert.title}</h3>
                  <p className="aboutCertIssuer">{cert.issuer}</p>
                  <p className="aboutCertDate">{cert.date}</p>
                  <span className="aboutCertLink">View →</span>
                </motion.a>
              ))}
            </div>
          </section>
        </div>
      </motion.div>
    </div>
  );
};

export default About;