import "./App.css";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Error from "./components/Error";
import Home from "./components/Home/Home";
//import Footer from "./components/Footer";
import Discovery from "./components/Discovey/Discovery";
import Contact from "./components/Contact/Contact";
import ProjectDetails from "./components/Projects/ProjectDetails";

function AppLayout() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname]);

  return (
    <div className="app">
      {isHome && (
        <div className="appHomeBackdrop" aria-hidden="true">
          <span className="appHomeShape appHomeShape1" />
          <span className="appHomeShape appHomeShape2" />
          <span className="appHomeShape appHomeShape3" />
          <span className="appHomeShape appHomeShape4" />
          <span className="appHomeShape appHomeShape5" />
          <span className="appHomeShape appHomeShape6" />
        </div>
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/discovery" element={<Discovery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects/:slug" element={<ProjectDetails />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <>
      <Router>
        <AppLayout />
      </Router>
      {/*<Footer />*/}
    </>
  );
}

export default App;
