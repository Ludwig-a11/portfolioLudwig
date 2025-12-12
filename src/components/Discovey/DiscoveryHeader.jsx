import TechBannerImage from "../../assets/tech_banner.jpeg";

const DiscoveryHeader = () => {
  return (
    <div className="discoveryHeader" aria-hidden="true">
      <img src={TechBannerImage} alt="Technology banner" className="discoveryHeaderImg" />
      <div className="discoveryHeaderOverlay" />
    </div>
  );
};

export default DiscoveryHeader;
