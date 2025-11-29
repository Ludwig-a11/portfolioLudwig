import './navbar.css'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"
import { useState } from 'react'

const handleHireMeClick = () =>{
  const recipient = 'boue123@gmail.com';
  const subjectline = "Let's talk...";
  const body = 'What is your project about?';

  const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(subjectline)}&body=${encodeURIComponent(body)}`;
  window.open(mailtoUrl, '_blank');
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <div className='navBarContainer'>
        <div className='navBarItemName'>Ludwig</div>
        
        {/* Menú desktop */}
        <nav className='navBar desktop-nav'>
          <Link to='/' className='navBarItem'>Home</Link>
          <Link to='/discovery' className='navBarItem'>Discovery</Link>
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
        
        {/* Botón hamburguesa */}
        <button 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Menú mobile */}
      <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
        <nav>
          <Link to='/' className='mobile-nav-item' onClick={closeMenu}>Home</Link>
          <Link to='/discovery' className='mobile-nav-item' onClick={closeMenu}>Discovery</Link>
          <Link to='/about' className='mobile-nav-item' onClick={closeMenu}>Biography</Link>
          <Link to='/projects' className='mobile-nav-item' onClick={closeMenu}>Projects</Link>
          <div 
            className="mobile-hire-me"
            onClick={() => {
              handleHireMeClick();
              closeMenu();
            }}
          >
            <button className="mobile-hire-btn">
              Let&apos;s Talk
            </button>
          </div>
        </nav>
      </div>

      {/* Overlay */}
      {isMenuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}
    </>
  )
}

export default Navbar