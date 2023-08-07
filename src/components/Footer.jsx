import './footer.css'

const Footer = () => {
  return (
    <div>
      <span className='footerSpan'>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
      <span className='footerSpan' >FactoryCodeStudio</span>
    </div>
  )
}

export default Footer