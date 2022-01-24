import profilePic2 from "../photo/profile.jpg";
import {
  Container,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Stack,
} from "react-bootstrap";


const About = () => {
  return (
    <>
      <Row className="justify-content-md-center m-5 text-success">
        <Col className="d-flex justify-content-end">
          <img
            src={profilePic2}
            alt={profilePic2}
            style={{ width: "200px", height: "250px" }}
          />
        </Col>
        <Col className="d-flex align-self-end text-secondary">
          <Stack>
            <h2 className="display-1 text-success">Linh Bui</h2>
            <ul style={{ "list-style-type": "none" }}>
              <li>front-end developer</li>
              <li>based in Michigan</li>
              <li>fueled by coffee and driven by passion</li>
              <li>dogs and plants mama</li>
            </ul>
          </Stack>
        </Col>
      </Row>
      <Stack className="d-flex align-items-center bg-success p-3 mb-5" style={{borderRadius:"25px"}}>
        <p className="fs-5">
          Full stack web developer recently graduated in early 2022 from the MSU
          Coding Boot Camp. After an intensive course in coding boot camp that is
          deep dive into full stack web development and the MERN stack, I am
          experienced in object-oriented programming, developing, testing and
          debugging code and designing interfaces.
        </p>
        <div className="bg-black p-1 px-3 mb-1" style={{borderRadius:"25px"}}>
        <h3 class="text-success">Development</h3>
        </div>
       
        <p> HTML, CSS, JavaScript(Node.js)</p>
        <div className="bg-black p-1 px-3 mb-1" style={{borderRadius:"25px"}}>
        <h3  class="text-success">Technologies, Libraries, and Frameworks</h3>
        </div>
        
        <p>
          Express, React, MongoDB + Mongoose, MySQL + Sequelize, GraphQL,
          Bootstrap, and Foundation CSS
        </p>
      </Stack>
    </>
  );
};

export default About;
