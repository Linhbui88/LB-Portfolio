import {Link} from 'react-router-dom'
import {Row,Col} from "react-bootstrap"

const Nav = () => {
  return (
   <Row className="fs-5">
   
       <Col><Link className="text-decoration-none mx-3 text-success" to="/">About</Link></Col>
       <Col><Link className="text-decoration-none mx-3 text-success" to="/portfolio">Portfolio</Link></Col>
       <Col><Link className="text-decoration-none mx-3 text-success" to="/resume">Resume</Link></Col>
       
    
   </Row>
  )
}

export default Nav
