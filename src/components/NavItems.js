import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CgMenu } from "react-icons/cg";
import { CgCloseR } from "react-icons/cg";

const NavItems = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`overlay w-full ${
        menuOpen ? "h-full z-10  transition-all duration-1000" : "h-0"
      } fixed bg-stone-900 opacity-90 overflow-x-hidden overflow-y-hidden md:!relative`}
    >
      <button
        className="closebtn float-right text-3xl m-3 md:hidden"
        onClick={() => setMenuOpen(false)}
      >
        <CgCloseR />
      </button>
      <div className="overlay-content  transition-all duration-1000 flex flex-col justify-center items-center gap-8 w-full h-full text-2xl font-bold md:!font-light md:flex-row md:!justify-end md:!gap-2 md:!text-md">
        <Link to="/">ABOUT</Link>

        <Link to="/works">WORKS</Link>

        <Link to="/contact">CONTACT</Link>
      </div>
    </div>
  );
};

export default NavItems;
