import "../shared/Section.css";
import { ImHtmlFive } from "react-icons/im";
import { IoLogoCss3 } from "react-icons/io";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiGraphql } from "react-icons/si";

const Skills = () => {
  return (
    <div className="section">
      <div className="section-head">
        <span>CHECK OUT MY</span>
        <h2>SKILLS</h2>
      </div>
      <div className="section-container">
        <div className="section-icons">
          <div className="section-icon">
            <ImHtmlFive />
            <small>HTML</small>
          </div>
          <div className="section-icon">
          <IoLogoCss3 />
          <small>CSS</small>
          </div>
          <div className="section-icon">
          <SiJavascript />
          <small>JavaScript</small>
          </div>
          <div className="section-icon">
          <FaReact />
          <small>React</small>
          </div>
          <div className="section-icon">
          <FaNodeJs />
          <small>NodeJS</small>
          </div>
          <div className="section-icon">
          <SiMysql />
          <small>MySQL</small>
          </div>
          <div className="section-icon">
          <SiMongodb />
          <small>MongoDB</small>
          </div>
          <div className="section-icon">
          <SiGraphql />
          <small>GraphQL</small>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Skills;
