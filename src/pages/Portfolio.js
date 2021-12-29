import { useState } from "react";

import Project from "../components/Project";


const Portfolio = ({projects}) => {
 
 
  
  return (
    <div>
      {projects.map((project,index) =>(
        <Project key ={index} title ={project.title} img ={project.img} code={project.code} deployedLink={project.deployedLink}/>
      ))}
    </div>
  )
}

export default Portfolio
