import Footer from "../Footer";
import "./home.css";
import Picture from "../../assets/portfolio_pc2.jpg";
import ContactForm from "./ContactForm";

const Home = () => {
  return (
    <>
      <div className="homeContainer">
        <div className="home1">
          <h1>Hi, I&apos;m Luis Martinez</h1>
          <p>
            I turn “We&apos;ve got an idea” into “It&apos;s live and working”
          </p>
        </div>
        <img className="picHome" src={Picture} alt="picture" />
      </div>
      <ContactForm />
      <Footer />
    </>
  );
};

export default Home;
