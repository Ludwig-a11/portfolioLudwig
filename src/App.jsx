import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Home from "./components/Home/Home";



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
            <Route path="/contact" element={<Contact />} />
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
