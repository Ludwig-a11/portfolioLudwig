import "./projects.css";
import { motion } from "framer-motion";
import projectImg from "../assets/lifeAndCodeBlog.png";
import ddtcImg from "../assets/ddtCalculator.png";

const Projects = () => {
  return (
    <div>
      <div className="projectsContainer">
        <div className="project1Card">
          <img className="ddtcImg" src={ddtcImg} alt="Project Image" />
          <div className="project1Details">
            <h2>Dedicated Development Teams Calculator</h2>
            
            <p>
              Salvo Software’s tool helps companies create and manage dedicated
              development teams. The teams are customized, scalable, and
              cost-effective. They offer control, transparency, and quality
              results.
            </p>
          </div>
          <motion.button
            className="projectBtn"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Project
          </motion.button>
        </div>

        <div className="project1Card">
          <img className="project1Img" src={projectImg} alt="Project Image" />
          <div className="project1Details">
            <h2>Blog</h2>
            
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, ad
              corrupti laudantium voluptatum explicabo voluptatibus enim
              consectetur magnam iste ipsum, accusamus iure molestias eligendi
              vel obcaecati architecto quis, sed sint?
            </p>
          </div>
          <motion.button
            className="projectBtn"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Project
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
