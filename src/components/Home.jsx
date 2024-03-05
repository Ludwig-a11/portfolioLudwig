import "./home.css";
import image from "../assets/profilepic.jpg";
import { motion } from "framer-motion";
//import { GithubIcon, LinkedInIcon, TwitterIcon } from './Icons'
import { FaLinkedin, FaXTwitter, FaGithub } from "react-icons/fa6";

const Home = () => {
  return (
    <>
      <div className="homeContainer">
        <div className="homeDetails">
          <motion.div
            className="homedetails"
            initial={{ opacity: 0, scale: 0.5, y: -400 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              y: { type: "spring", stiffness: 10 },
              duration: 3,
              delay: 0,
              ease: "easeOut",
            }}
          >
            <h2 className="homeTitle">Luis Martinez</h2>
          </motion.div>

          <motion.p
            className="homeSlogan"
            initial={{ opacity: 0, scale: 0.5, y: -350 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              y: { type: "spring", stiffness: 10 },
              duration: 2,
              delay: 0,
              ease: "easeOut",
            }}
          >
            My approach to overcoming challenges is both systematic and
            proactive, <br />
            reflecting a commitment to ensuring project success.
          </motion.p>

          <div className="contactSection">
            <motion.div
              className="homeResume"
              initial={{ opacity: 0, scale: 0.5, y: -300 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                y: { type: "spring", stiffness: 10 },
                duration: 1,
                delay: 0,
                ease: "easeOut",
              }}
            >
              <motion.button
                className="resumeBtn"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                Resume
              </motion.button>
            </motion.div>
          </div>
        </div>
        <div className="homeProfile">
          <img className="profilePic" src={image} alt="profilepic" />
        </div>
        <nav className="navBarIcons">
          <motion.a
            href="https://www.linkedin.com/in/luis-zarza-471b06132/"
            target={"_blank"}
            rel="noreferrer"
            whileHover={{
              scale: 1.2,
              transition: { duration: 1 },
            }}
            whileTap={{ scale: 0.2 }}
          >
            {" "}
            <FaLinkedin className="linkedInIcon" />
          </motion.a>
          <motion.a
            href="https://twitter.com/_Luis_Z"
            target={"_blank"}
            rel="noreferrer"
            whileHover={{
              scale: 1.2,
              transition: { duration: 1 },
            }}
            whileTap={{ scale: 0.2 }}
          >
            {" "}
            <FaXTwitter className="twitterIcon" />
          </motion.a>
          <motion.a
            href="https://github.com/Ludwig-a11"
            target={"_blank"}
            rel="noreferrer"
            whileHover={{
              scale: 1.2,
              transition: { duration: 1 },
            }}
            whileTap={{ scale: 0.2 }}
          >
            {" "}
            <FaGithub className="gitHubIcon" />
          </motion.a>
        </nav>
      </div>
    </>
  );
};

export default Home;
