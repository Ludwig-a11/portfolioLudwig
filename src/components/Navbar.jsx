import './navbar.css'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { GithubIcon, LinkedInIcon, TwitterIcon } from './Icons'


const Navbar = () => {
  return (
    <div className='navBarContainer'>
      <nav className='navBar'>
        <Link to='/' className='navBarItem'>Home</Link>
        <Link to='/about' className='navBarItem'>About</Link>
        <Link to='/projects' className='navBarItem'>Projects</Link>
        <Link to='/articles' className='navBarItem'>Articles</Link>
      </nav>
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
         whileHover={{y:5}}><TwitterIcon className='twitterIcon' /></motion.a>
         <motion.a href='https://github.com/Ludwig-a11' target={'_blank'} rel='noreferrer'
         whileHover={{y:2}}><GithubIcon className='gitHubIcon' /></motion.a>
         
      </nav>
    </div>
  )
}

export default Navbar