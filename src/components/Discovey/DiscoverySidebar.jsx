import ProfilePicture from "../../assets/portfolio_pc2.jpg";
import { GithubIcon, LinkedInIcon } from "../Icons";
import { motion } from "framer-motion";
import { FaXTwitter } from "react-icons/fa6";

const DiscoverySidebar = () => {
  const handleMessage = () => {
    const recipient = "ludwigd3v@gmail.com";
    const subjectline = "Let's connect!";
    const body = "Hi Luis, I would like to connect with you...";
    const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(subjectline)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoUrl, "_blank");
  };

  return (
    <aside className="discoverySidebarFixed">
      <div className="discoveryProfileCard">
        <div className="discoveryPicContainer">
          <img className="discoveryPic" src={ProfilePicture} alt="Luis Martinez" />
        </div>

        <div className="discoveryProfileInfo">
          <h2>Luis Martinez</h2>
          <p className="discoveryProfileTitle">AI Automation and Web Developer</p>
          <p className="discoveryProfileTitle">México City, México</p>

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
            <a
              href="https://twitter.com/yourusername"
              aria-label="Twitter/X"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter size={28} />
            </a>
          </div>

          <div className="discoveryActionButtons">
            <motion.button
              className="discoveryMessageBtn"
              onClick={handleMessage}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Let&apos;s Connect
            </motion.button>
          </div>

          <div className="discoveryWorkSection">
            <div className="discoveryWorkItem">
              <h4>AI Automation Developer</h4>
              <p>Salvo Software - Custom Software Solutions</p>
              <br />
              <h4>QA Tester</h4>
              <p>Salvo Software - Custom Software Solutions</p>
              <br />
              <h4>View Full Resume -</h4>
              <br />
              <br />
              <p>Other Projects</p>
              <h4>Factory Code Studio</h4>
              <p>factorycodestudio.com</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default DiscoverySidebar;
