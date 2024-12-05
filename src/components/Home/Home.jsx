import "./home.css";
import image from "../../assets/project1Pic.jpg"
import ProfilePicture from "./ProfilePicture";
import NameAndSlogan from "./NameAndSlogan";
import ResumeButton from "./ResumeButton";
import SocialMediaLinks from "./SocialMediaLinks";


const Home = () => {

  const name = "Luis Martinez";
  const title = "Web Developer & Human";
  const slogan= "Transforming your ideas into digital realities";
  

  return (
    <>
      <div className="homeContainer">
        <ProfilePicture image={image} alt="profilepic" />
        <NameAndSlogan name={name} title={title} slogan={slogan} /> 
        <ResumeButton />
        <SocialMediaLinks />
      </div>
    </>
  );
};

export default Home;
