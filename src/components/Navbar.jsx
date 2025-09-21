import './navbar.css'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"
/*import { MoonIcon, SunIcon } from './Icons';*/


const handleHireMeClick = () =>{
  const recipient = 'boue123@gmail.com';
  const subjectline = "Let's talk...";
  const body = 'What is your project about?';

  const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(subjectline)}&body=${encodeURIComponent(body)}`;
  window.open(mailtoUrl, '_blank');
};

const Navbar = () => {
  return (
    <div className='navBarContainer'>
      <div className='navBarItemName'>Ludwig
        {/*<SunIcon/>
        <MoonIcon/>*/}
      </div>
      <nav className='navBar'>
        <Link to='/' className='navBarItem'>Home</Link>
        <Link to='/about' className='navBarItem'>Biography</Link>
        <Link to='/projects' className='navBarItem'>Projects</Link>
        <div 
          className="homeHireMe"
          onClick={handleHireMeClick}
          >
            <motion.button
              className="hireMeBtn"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              Let&apos;s Talk
            </motion.button>
        </div>
      </nav>
      
    </div>
  )
}

export default Navbar