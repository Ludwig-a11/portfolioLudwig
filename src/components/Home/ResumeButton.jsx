import { motion } from "framer-motion";
import './home.css';

const ResumeButton = () => {
  return (
    <div className="contactSection">
        <motion.div
        className="homeResume"
        initial={{ opacity: 0, scale: 0.5, y: 0 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          y: { type: 'spring', stiffness: 1 },
          duration: 1.1,
          delay: 2,
          ease: 'easeInOut',
        }}
      >
        <motion.button
          className="resumeBtn"
          whileHover={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 1 }}
        >
          Resume
        </motion.button>
      </motion.div>
    </div>
  )
}

export default ResumeButton