import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import { FaTwitterSquare } from "react-icons/fa";
import {
  Container,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Stack,
} from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <Stack className="d-flex align-items-center">
        <p className="text-success">Contact me</p>
        <div className="bg-success p-1 px-3 mb-1" style={{borderRadius:"25px"}}>
        <a
          href="mailto:linhbui.dev@gmail.com"
          className="text-decoration-none text-primary fs-4"
        >
          <h4 class="text-black">
            <FaEnvelope /> linhbui.dev@gmail.com
          </h4>
        </a>

        </div>
        

        <p className="fs-5 text-success">
          <ImLocation /> Milan, Michigan 48160
        </p>
        <div className="d-flex justify-content-center ">
        <a
        href="https://github.com/Linhbui88"
        className="text-decoration-none text-primary fs-3 text-success mx-2"
      >
        <FaGithub />
      </a>
      
      <a
        href="https://www.linkedin.com/in/linh-bui-525129219/"
        className="text-decoration-none text-primary fs-3 text-success"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://twitter.com/LinhbuiDev"
        className="text-decoration-none text-primary fs-3 text-success mx-2"
      >
        <FaTwitterSquare />
      </a>

        </div>
        
      </Stack>

     
    </>
  );
};

export default Footer;
