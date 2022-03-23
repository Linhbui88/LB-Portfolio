import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import About from "./pages/About";

import Works from "./pages/Works";

import Header from "./components/Header";
import { projects } from "./projectsData";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<About />} />

          <Route path="/skills" element={<Skills />} />
          <Route path="/works" element={<Works projects={projects} />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
