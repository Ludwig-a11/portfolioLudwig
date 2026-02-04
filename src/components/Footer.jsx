import "./footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footerRoot">
      {/* Divisor 
      <hr className="footerDivider" />*/}

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
