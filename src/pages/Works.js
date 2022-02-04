import "../shared/Section.css";
import Project from "../components/Project";
import "./Works.css"

const Works = ({ projects }) => {
  return (
    <div className="work-content">
      <div className="section-head">
        <span>TAKE A LOOK AT</span>
        <h2>MY PROJECTS</h2>
      </div>

      <div className="work-project-card">
        {projects.map((project, index) => (
        
            <Project
              key={index}
              title={project.title}
              img={project.img}
              code={project.code}
              deployedLink={project.deployedLink}
              description={project.description}
              technologies={project.technologies}
            />
         
        ))}
      </div>
    </div>
  );
};

export default Works;
