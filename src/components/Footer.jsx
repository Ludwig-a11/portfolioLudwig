import "./footer.css";
import { GithubIcon, LinkedInIcon } from "./Icons";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footerRoot">
      {/* Fila superior */}
      <div className="footerTop">
        <div className="footerInfo">
          <h3>Luis Martinez</h3>
          <h4>Web & AI Developer</h4>
        </div>

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
          {/* agrega más si quieres */}
        </div>
      </div>

      {/* Divisor */}
      <hr className="footerDivider" />

      {/* Fila inferior */}
      <div className="footerBottom">
        <span>
          © {year} Factory Code Studio. Made with ❤️ and lots of coffee.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
