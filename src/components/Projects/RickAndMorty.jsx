import { motion } from "framer-motion";
import rickMorthyImg from "../../assets/rick-morthy.png";

const RickAndMorty = () => {

    const rickAndMortyProjectHandle = () => {
        const rickAndMortyProject = 'https://subtle-pasca-8707dd.netlify.app/';
        window.open(rickAndMortyProject, '_blank');
      }

  return (
    <div className="projectsContainer">
        <div className="project1Card">
          <img className="project1Img" src={rickMorthyImg} alt="Project Image" />
          <div className="project1Details">
            <h2>Rick & Morthy</h2>
            
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, ad
              corrupti laudantium voluptatum explicabo voluptatibus enim
              consectetur magnam iste ipsum, accusamus iure molestias eligendi
              vel obcaecati architecto quis, sed sint?
            </p>
          </div>
          <motion.button
            className="projectBtn"
            onClick={rickAndMortyProjectHandle}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Project
          </motion.button>
        </div>
    </div>
  )
}

export default RickAndMorty