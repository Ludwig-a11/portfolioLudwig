import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Error from "./components/Error";
import Home from "./components/Home/Home";
import Footer from "./components/Footer";
import Discovery from "./components/Discovey/Discovery";

function App() {
  return (
    <>
      <div className="app">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/discovery" element={<Discovery />} /> 
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </>
  );
}

export default App;
