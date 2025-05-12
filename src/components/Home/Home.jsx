import "./home.css";
import image from "../../assets/photo_portfolio.jpg";
import ProfilePicture from "./ProfilePicture";
import NameAndSlogan from "./NameAndSlogan";
import ResumeButton from "./ResumeButton";
import SocialMediaLinks from "./SocialMediaLinks";
import Summary from "./Summary";


const Home = () => {

  const name = "Luis Martinez";
  const title = "Sales | QA | Dev | SPM";
  

  return (
    <>
      <div className="homeContainer">
        <div className="home1">
          <ProfilePicture image={image} alt="profilepic" />
          <NameAndSlogan name={name} title={title} /> 
          <ResumeButton />
          <SocialMediaLinks />
        </div>
        <div className="home2">
          <Summary />
        </div>
      </div>
    </>
  );
};

export default Home;
