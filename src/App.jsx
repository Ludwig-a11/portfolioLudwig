import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Articles from "./components/Articles";
import Error from "./components/Error";



function App() {

  
  return (
    <>
      <div className="app">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Router>
      </div>
      
     {/* <div className="footerCointainer">
        <Footer />
      </div>
     */}
    </>
  );
}

export default App;
