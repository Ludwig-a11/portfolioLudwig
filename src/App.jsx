import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Error from "./components/Error";
import Home from "./components/Home/Home";
//import Footer from "./components/Footer";
import Discovery from "./components/Discovey/Discovery";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <>
      <div className="app">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/discovery" element={<Discovery />} /> 
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Router>
      </div>
      {/*<Footer />*/}
    </>
  );
}

export default App;
