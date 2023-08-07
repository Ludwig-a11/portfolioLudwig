import "./home.css";
import image from '../assets/profilepic.jpg'
import { motion } from "framer-motion"

const Home = () => {

  const handleHireMeClick = () =>{
    const recipient = 'boue123@gmail.com';
    const subjectline = "Let's talk...";
    const body = 'What is your project about?';

    const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(subjectline)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <>
    <div className="homeContainer">
      <div className="homeProfile">
        <img 
          className='profilePic'
          src={image} 
          alt="profilepic" />
      </div>
      <div className="homeDetails">
        <motion.div
          className="homedetails"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
          <h2 className="homeTitle">
            Mejora continua a través de pequeños cambios.
          </h2>
        </motion.div>
        <p className="homeSlogan">
          Mi enfoque se basa en la idea de que incluso los pequeños cambios
          pueden marcar una gran diferencia. <br />
          ¡Gracias por visitar mi portfolio!
        </p>

        <div className="contactSection">
          <div className="homeResume">
            <motion.button
              className="resumeBtn"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Resume
            </motion.button>
          </div>
          <div 
          className="homeHireMe"
          onClick={handleHireMeClick}
          >
            <motion.button
              className="hireMeBtn"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Hire Me
            </motion.button>
          </div>
        </div>
      </div>
    </div>
    
    
    </>
  );
};

export default Home;
