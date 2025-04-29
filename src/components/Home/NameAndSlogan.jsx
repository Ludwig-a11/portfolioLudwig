import { motion } from "framer-motion";
import './home.css';

const NameAndSlogan = ({ name, title}) => {


   return (
    <div>
        <div className="homeDetails">
          <motion.div
            className="homedetails"
            initial={{ opacity: 0, scale: 1.2}}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{
              x: { type: "spring", stiffness: 10 },
              duration: 2,
              delay: 1,
              ease: "linear",
            }}
          >
            <h2 className="homeTitle">{name}</h2>
            <h3>{title}</h3>
          </motion.div>
        </div>
    </div>
  )
}

export default NameAndSlogan;