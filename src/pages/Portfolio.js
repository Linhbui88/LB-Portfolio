import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import Project from "../components/Project";

const Portfolio = ({ projects }) => {
  return (
    <>
      <div className="m-3 text-success text-center">
     
        <h1 > Projects</h1>
        <h6 className="text-secondary">Deployed applications will have links to the hosted site. Please wait up to 15 seconds for the Heroku urls to load the page the first time.</h6> 
      </div>
      <div
        className="bg-success p-2 text-dark p-5"
        style={{ borderRadius: "25px" }}
      >
        {projects.map((project, index) => (
          <div>
            <Project
              key={index}
              title={project.title}
              img={project.img}
              code={project.code}
              deployedLink={project.deployedLink}
              description={project.description}
              technologies={project.technologies}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Portfolio;
