import "./Project.css";

const Project = ({
  title,
  img,
  code,
  deployedLink,
  description,
  technologies,
}) => {
  return (
   
      <div className="project-card">
        <div className="project-content">
          <img src={img}></img>

          <h5>{title}</h5>
          <small>Technologies Used:</small>
          <span> {technologies}</span>
         

          <p>{description}</p>
        </div>
        <div className="live-repo">
          <a href={deployedLink} target="_blank" rel="noopener noreferrer">
            Live
          </a>

          <a href={code} target="_blank" rel="noopener noreferrer">
            Repo
          </a>
        </div>
      </div>
  )
};

export default Project;
