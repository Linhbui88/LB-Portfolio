import {Link} from 'react-router-dom'

const Nav = () => {
  return (
   <nav>
     <ol>
       <Link className="text-decoration-none mx-3" to="/">About</Link>
       <Link className="text-decoration-none mx-3" to="/portfolio">Portfolio</Link>
       <Link className="text-decoration-none mx-3" to="/contact">Contact</Link>
       <Link className="text-decoration-none mx-3" to="/resume">Resume</Link>
       
     </ol>
   </nav>
  )
}

export default Nav
