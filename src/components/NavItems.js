import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NavItems = () => {
  return (
    <div className="grid grid-cols-1 md:inline-flex">
      <Link to="/">ABOUT</Link>

      <Link to="/works">WORKS</Link>

      <Link to="/contact">CONTACT</Link>
    </div>
  );
};

export default NavItems;
