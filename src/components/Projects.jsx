import "./projects.css";
import { motion } from "framer-motion";
import projectImg from "../assets/project1Pic.jpg";

const Projects = () => {
  return (
    <div>
      <div className="projectsContainer">
        <div className="project1Card">
          <img className="project1Img" src={projectImg} alt="Project Image" />
          <div className="project1Details">
            <h2>Dedicated Development Teams Calculator</h2>
            <h3>Assable your drem team</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
              voluptate consectetur quidem quos officiis cum laudantium commodi
              quia et sed atque nesciunt, sapiente eligendi, impedit iusto.
              Error autem est sed.
            </p>
          </div>
          <motion.button
          className="projectBtn"
          whileHover={{scale: 1.1}}
          transition={{type: "spring", stiffness: 400, damping: 10 }}
          >
            Project
          </motion.button>
        </div>

        <div className="project1Card">
          <img className="project1Img" src={projectImg} alt="Project Image" />
          <div className="project1Details">
            <h2>Dedicated Development Teams Calculator</h2>
            <h3>Assable your dream team</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, ad
              corrupti laudantium voluptatum explicabo voluptatibus enim
              consectetur magnam iste ipsum, accusamus iure molestias eligendi
              vel obcaecati architecto quis, sed sint?
            </p>
          </div>
          <motion.button
          className="projectBtn"
          whileHover={{scale: 1.1}}
          transition={{type: "spring", stiffness: 400, damping: 10 }}
          >
            Project
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
