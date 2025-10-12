import './home.css';

const ContactForm = () => {
  return (
    <div className="contactContainer">
        <h2>Let&apos;s Work Together</h2>
        <h3>Have a project in mind? I&apos;d love to hear about it.</h3>
        <div className="cardContainer">
          <div className="cardContactForm">
            <form className="contactForm">
              <div className="formGroup">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="formGroup">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div className="formGroup formFull">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  placeholder="Project inquiry"
                  required
                />
              </div>

              <div className="formGroup formFull">
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              {/* BOTÓN EN LUGAR DEL INPUT VACÍO */}
              <div className="formFull">
                <button type="submit" className="btnPrimary">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
  )
}

export default ContactForm