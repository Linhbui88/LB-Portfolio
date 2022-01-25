import React from 'react'
import { BrowserRouter as Router, Route, Routes,} from "react-router-dom";
import About from './pages/About'
import Header from './components/Header';
import Portfolio from './pages/Portfolio';
import Project from './components/Project';


import Footer from './components/Footer';
import {projects} from './projectsData';



import './App.css';

function App() {
  return (
   
    <div className="bg-black p-5">
    
      <Router>
        <Header />
        <Routes>
          <Route exact path ="/" element ={<About />} />
          <Route path ="/portfolio" element ={<Portfolio projects={projects}/>} />
        
        </Routes>
      
       
     
      </Router>

    </div>
  );
}

export default App;
