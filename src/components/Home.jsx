import "./home.css";
import image from '../assets/profilepic.jpg'
import { motion } from "framer-motion"
import { GithubIcon, LinkedInIcon, TwitterIcon } from './Icons'



const Home = () => {


  return (
    <>
    <div className="homeContainer">
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
            Luis Martinez
          </h2>
        </motion.div>
        <p className="homeSlogan">
          My approach to overcomming challenges is both systematic and proactive, <br/>reflecting a commitment to ensuring project success.
        </p>
        <div className="contactSection">
          <div className="homeResume">
            <motion.button
              className="resumeBtn"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              Resume
            </motion.button>
          </div> 
        </div>
      </div>
      <div className="homeProfile">
        <img 
          className='profilePic'
          src={image} 
          alt="profilepic" />
      </div>
      <nav className='navBarIcons'>
         <motion.a href='https://www.linkedin.com/in/luis-zarza-471b06132/' target={'_blank'} rel='noreferrer'
          whileHover={{
            scale:1.2,
            transition:{duration:1},
            }}
            whileTap={{scale:0.2}}
            > <LinkedInIcon className='linkedInIcon' />
          </motion.a>
         <motion.a href='https://twitter.com/_Luis_Z' target={'_blank'} rel='noreferrer'
          whileHover={{
            scale:1.2,
            transition: {duration:1},
            }}
            whileTap={{scale:0.2}}
            > <TwitterIcon className='twitterIcon' />
            </motion.a>
         <motion.a href='https://github.com/Ludwig-a11' target={'_blank'} rel='noreferrer'
          whileHover={{
            scale:1.2,
            transition:{duration:1},
            }}
            whileTap={{scale:0.2}}
            > <GithubIcon className='gitHubIcon' />
          </motion.a>         
      </nav>
    </div>
    
    </>
  );
};

export default Home;
