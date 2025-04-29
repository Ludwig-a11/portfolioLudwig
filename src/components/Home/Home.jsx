import "./home.css";
import image from "../../assets/photo_portfolio.jpg";
import ProfilePicture from "./ProfilePicture";
import NameAndSlogan from "./NameAndSlogan";
import ResumeButton from "./ResumeButton";
import SocialMediaLinks from "./SocialMediaLinks";


const Home = () => {

  const name = "Luis Martinez";
  const title = "SPM | Web Dev";
  

  return (
    <>
      <div className="homeContainer">
        <div className="home1">
          <ProfilePicture image={image} alt="profilepic" />
          <NameAndSlogan name={name} title={title} /> 
          <ResumeButton />
          <ResumeButton />
          <SocialMediaLinks />
        </div>
      </div>
    </>
  );
};

export default Home;
