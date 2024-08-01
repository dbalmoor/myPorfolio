import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
import Contact from "./components/Contact/Contact";
import Footer from "./components/footer/Footer";
import FooterBottom from "./components/footer/FooterBottom";
import Home from "./components/Home/Home";
import About from "./components/About/About";

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
      <Router>
        <NavBar />
        <Routes>
          {/* <div className="max-w-screen-2xl mx-auto px-16"> */}
          <Route path="/" element={<Home />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/Projects" element={<Projects />}></Route>
          <Route path="/Resume" element={<Resume />}></Route>
          <Route path="/About" element={<About />}></Route>
        </Routes>
        <Footer />
        <FooterBottom />
      </Router>
    </div>
  );
}

export default App;
