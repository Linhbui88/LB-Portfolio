import React from 'react'
import { BrowserRouter as Router, Route, Routes,} from "react-router-dom";
import About from './components/About'
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume'



import './App.css';

function App() {
  return (
   
    <div className="container my-3">
    
      <Router>
        <Header />
        <Routes>
          <Route exact path ="/" element ={<About />} />
          <Route path ="/portfolio" element ={<Portfolio />} />
          <Route  path ="/contact" element ={<Contact />} />
          <Route  path ="/resume" element ={<Resume />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
