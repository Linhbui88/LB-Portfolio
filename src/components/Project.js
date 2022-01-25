import { Card, Row, Col, Stack } from "react-bootstrap";

const Project = ({ title, img, code, deployedLink, description, technologies }) => {
  return (
    <>
    <div className="bg-white p-5 mb-5 border border-success" style={{borderRadius:"15px"}}>
    <Row className="mb-2">
        <Col>
        <img src={img} style={{height:"250px",width:"350px"}}></img>
        </Col>
        <Col>
        <h3 className="fw-bold">{title}</h3>
        <h5>Technologies Used: <span className="text-success"> {technologies}</span></h5>
        {description}
        </Col>
        
      </Row>
      <Row classNam="justify-content-md-center"> 
        <Col className="d-flex justify-content-end">
          <a href={deployedLink} target="_blank"className="text-success fw-bold fs-4" >Live</a>
     
        </Col>
        <Col>
        <a href={code} target="_blank"className="text-success fw-bold fs-4" >Repo</a>
      
        </Col>
      </Row>

    </div>
     
    </>
  );
};

export default Project;
