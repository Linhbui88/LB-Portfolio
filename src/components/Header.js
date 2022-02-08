import profilePic2 from "../photo/profile.jpg";

import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

import { FaTwitterSquare } from "react-icons/fa";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="header-content">
        <img src={profilePic2} alt={profilePic2} />

        <div className="header-description">
          <p className="greeting">Hi There ! I'm</p>
          <h1>Linh Bui</h1>
          <ul className="header-list">
            <li>fullstack developer</li>
            <li>based in Michigan</li>
            <li>fueled by coffee and driven by passion</li>
            <li>dogs and plants mama</li>
          </ul>
          <div className="header-social-resume">
            <div className="header-resume">
              <a
                href={process.env.PUBLIC_URL + "/LinhBui-resume.pdf"}
                alt="LinhBui-resume"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </div>

            <ul className="socialList">
              <li>
                <a
                  href="https://www.linkedin.com/in/linh-bui-525129219/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Linhbui88"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/LinhbuiDev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitterSquare />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
