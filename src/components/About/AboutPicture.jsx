import "./about.css";
import { GithubIcon, LinkedInIcon } from "../Icons";
import Picture from "../../assets/portfolio_pc2.jpg";

const AboutPicture = () => {
  return (
    <div className="aboutSidebarFixed">
                <div className="aboutProfileCard">
                  <AboutPicture image={Picture} alt="aboutMePic" />
    
                  <div className="profileInfo">
                    <h2>Luis Martinez</h2>
                    <p className="profileTitle">Web & AI Developer</p>
                    <div className="footerSocial">
                      <a
                        href="https://github.com/Ludwig-a11"
                        aria-label="GitHub"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <GithubIcon width="28" height="28" />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/luis-zarza/"
                        aria-label="LinkedIn"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <LinkedInIcon width="28" height="28" />
                      </a>
                    </div>
                    <div className="contactDetails">
                      <div className="contactCards">
                        <div className="contactCard">
                          <div className="contactIcon">✉️</div>
                          <div>
                            <div className="contactValue">ludwigd3v@gmail.com</div>
                          </div>
                        </div>
                        <div className="contactCard">
                          <div className="contactIcon">📞</div>
                          <div>
                            <div className="contactValue">+52 (55) 3150-6673</div>
                          </div>
                        </div>
                        <div className="contactCard">
                          <div className="contactIcon">📍</div>
                          <div>
                            <div className="contactValue">México, City, MX</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
    


  )
}

export default AboutPicture