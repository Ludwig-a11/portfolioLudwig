import { motion } from "framer-motion";
import ddtcImg from "../../assets/ddtCalculator.png";

const DDTCalculator = () => {

    const salvoProjectHandle = () => {
        const salvoProject = 'https://www.salvosoftware.com/dedicated-development-teams/#calculator';
        window.open(salvoProject, '_blank');
      };
      
  return (
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
            onClick={salvoProjectHandle}
            target = {'_blank'}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Project
          </motion.button>
        </div>
    </div>
  )
}

export default DDTCalculator