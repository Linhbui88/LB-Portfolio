import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Works from "./pages/Works";
import SideNavBar from "./components/SideNavBar";
import { projects } from "./projectsData";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [openSB, setOpenSB] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", updateWindowWidth);
  }, []);
  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  return (
    <>
      <Router>
        <div className="d-flex">
          <SideNavBar
            openSB={openSB}
            setOpenSB={setOpenSB}
            windowWidth={windowWidth}
            setWindowWidth={setWindowWidth}
          />

          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route
              path="/works"
              element={<Works projects={projects} />}
            />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
