import './navbar.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

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
        <Link to='/' className='navBarItemName'>Ludwig</Link>
        
        {/* Menú desktop */}
        <nav className='navBar desktop-nav'>
          <Link to='/' className='navBarItem'>Home</Link>
          <Link to='/discovery' className='navBarItem'>Discovery</Link>
          <Link to='/about' className='navBarItem'>Biography</Link>
          <Link to='/projects' className='navBarItem'>Projects</Link>
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
        </nav>
      </div>

      {/* Overlay */}
      {isMenuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}
    </>
  )
}

export default Navbar