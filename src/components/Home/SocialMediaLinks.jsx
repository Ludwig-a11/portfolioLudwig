import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa6";

const SocialMediaLinks = () => {
  return (
    <div>
        <nav className="navBarIcons">
          <motion.a
            href="https://www.linkedin.com/in/luis-zarza-471b06132/"
            target={"_blank"}
            rel="noreferrer"
            initial={{ opacity: 0, scale: 0.5, y: 0 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              y: { type: "spring", stiffness: 1 },
              duration: 1.1,
              delay: 2,
              ease: "easeInOut",
            }}
            whileHover={{
              scale: 1.1,
              transition: { duration: 1 },
            }}
            whileTap={{ scale: 1.1 }}
          >
            {" "}
            <FaLinkedin className="linkedInIcon" />
          </motion.a>
          <motion.a
            href="https://github.com/Ludwig-a11"
            target={"_blank"}
            rel="noreferrer"
            initial={{ opacity: 0, scale: 0.5, y: 0 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              y: { type: "spring", stiffness: 1 },
              duration: 1.1,
              delay: 2,
              ease: "easeInOut",
            }}
            whileHover={{
              scale: 1.1,
              transition: { duration: 1 },
            }}
            whileTap={{ scale: 1.1 }}
          >
            {" "}
            <FaGithub className="gitHubIcon" />
          </motion.a>
        </nav>
    </div>
  )
}

export default SocialMediaLinks