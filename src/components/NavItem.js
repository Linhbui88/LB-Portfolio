import React from 'react';

import {GrHomeRounded} from "react-icons/gr"
import {MdPersonOutline} from "react-icons/md"
import {GrCode} from "react-icons/gr"
import {MdOutlineWorkOutline} from "react-icons/md"
import {FiPhoneCall} from "react-icons/fi"
import { Link } from 'react-router-dom';

const NavItem = () => {
  return (
    <div>
     

      <div className="d-flex flex-column gap-3 bg-success fs-6">
         
            <GrHomeRounded />
            <Link className="text-decoration-none text-black" to="/">
              HOME
            </Link>
           
         
              <MdPersonOutline/>
            <Link className="text-decoration-none text-black" to="about">
           ABOUT
            </Link>
          
           
              <GrCode />
            <Link className="text-decoration-none text-black" to="/skills">
              SKILLS
            </Link>
           
        
              <MdOutlineWorkOutline />
            <Link className="text-decoration-none text-black" to="/portfolio">
              PORTFOLIO
            </Link>
        
        
              <FiPhoneCall/>
            <Link className="text-decoration-none text-black" to="/contact">
              CONTACT
            </Link>
        
        </div>
    </div>



  )
  
  
 
};

export default NavItem;

