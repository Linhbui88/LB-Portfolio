import profilePic2 from "../photo/profile.jpg";

import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

import { FaTwitterSquare } from "react-icons/fa";
import "./Header.css";
const Header = () => {
  return (
    <div className="header d-flex align-items-center justify-content-center">
      <div className="d-flex gap-5 justify-content-center">
        <div className="d-flex justify-content-end">
          <img src={profilePic2} alt={profilePic2} />
        </div>
        <div className="header-description d-flex flex-column">
          <p className="greeting">Hi There! I'm</p>
          <h1>Linh Bui</h1>
          <ul className="header-list">
            <li>fullstack developer</li>
            <li>based in Michigan</li>
            <li>fueled by coffee and driven by passion</li>
            <li>dogs and plants mama</li>
          </ul>
          <div className="d-flex flex-row align-items-baseline mt-auto">
            <div className="header-resume">
              <a
                className="text-decoration-none mx-3 text-dark fw-bolder"
                href={process.env.PUBLIC_URL + "/LinhBui-resume.pdf"}
                alt="LinhBui-resume"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </div>

            <ul className="socialList d-flex gap-3">
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
