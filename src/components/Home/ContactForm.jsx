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
          <div className="cardContainerGetInTouch">
            <h4>Get In Touch</h4>
            <p>
              I&apos;m always interested in hearing about new opportunities and
              exciting projects. Whether you have a question, want to
              collaborate, or just want to say hello, feel free to reach out!
            </p>
            <div className="contactCards">
              <div className="contactCard">
                <div className="contactIcon">✉️</div>
                <div>
                  <div className="contactLabel">Email</div>
                  <div className="contactValue">ludwigd3v@gmail.com</div>
                </div>
              </div>
              <div className="contactCard">
                <div className="contactIcon">📞</div>
                <div>
                  <div className="contactLabel">Phone</div>
                  <div className="contactValue">+52 (55) 3150-6673</div>
                </div>
              </div>
              <div className="contactCard">
                <div className="contactIcon">📍</div>
                <div>
                  <div className="contactLabel">Location</div>
                  <div className="contactValue">México, City, MX</div>
                </div>
              </div>
            </div>
            <div className="responseTime">
              Response time: Usually within 24 hours
            </div>
          </div>
        </div>
      </div>
  )
}

export default ContactForm