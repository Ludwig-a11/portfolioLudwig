import "./App.css";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Error from "./components/Error";
import Home from "./components/Home/Home";
//import Footer from "./components/Footer";
import Discovery from "./components/Discovey/Discovery";
import Contact from "./components/Contact/Contact";
import ProjectDetails from "./components/Projects/ProjectDetails";
import PageTransition from "./components/motion/PageTransition";
import RouteProgressBar from "./components/motion/RouteProgressBar";

function AppLayout() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname]);

  return (
    <div className="app">
      <RouteProgressBar />
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
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageTransition><Home /></PageTransition>} />
          <Route path="/discovery" element={<PageTransition><Discovery /></PageTransition>} />
          <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
          <Route
            path="/projects/:slug"
            element={<PageTransition><ProjectDetails /></PageTransition>}
          />
          <Route path="*" element={<PageTransition><Error /></PageTransition>} />
        </Routes>
      </AnimatePresence>
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
