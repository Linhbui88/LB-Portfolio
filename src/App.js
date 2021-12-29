import React from 'react'
import { BrowserRouter as Router, Route, Routes,} from "react-router-dom";
import About from './pages/About'
import Header from './components/Header';
import Portfolio from './pages/Portfolio';
import Project from './components/Project';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Footer from './components/Footer';
import {projects} from './projectsData';



import './App.css';

function App() {
  return (
   
    <div className="container my-3">
    
      <Router>
        <Header />
        <Routes>
          <Route exact path ="/" element ={<About />} />
          <Route path ="/portfolio" element ={<Portfolio projects={projects}/>} />
          <Route  path ="/contact" element ={<Contact />} />
          <Route  path ="/resume" element ={<Resume />} />
        </Routes>
      
       
        <Footer />
      </Router>

    </div>
  );
}

export default App;
