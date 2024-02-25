import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Contacts from "./components/pages/Contact";
import About from "./components/pages/About";
import NewProject from "./components/pages/NewProject";

import Container from "./components/layout/Container";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Projects from "./components/pages/Projects";
import Project from "./components/pages/Project";

function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass="min_height">
        <Routes>
          <Route path="/project" element={<Projects/>} />
          <Route exact path="/newproject" element={<NewProject />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/contact" element={<Contacts />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/project/:id" element={<Project />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
