import "./discovery.css";
import DiscoveryHeader from "./DiscoveryHeader";
import DiscoverySidebar from "./DiscoverySidebar";
import DiscoveryProjects from "./DiscoveryProjects";

const Discovery = () => {
  return (
    <div className="discoveryPageWrapper">
      <DiscoveryHeader />
      <div className="discoveryMainLayout">
        <DiscoverySidebar />

        <div className="discoveryContentScrollable">
          <div className="discoveryContentInner">
            <DiscoveryProjects />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discovery;
