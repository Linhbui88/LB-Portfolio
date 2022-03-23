import NavItems from "./NavItems";
import { useState } from "react";
import { motion } from "framer-motion";

const Navbar = ({ menuOpen, setMenuOpen }) => {
  const [showNavItems, setShowNavItems] = useState(false);
  const [hidden, setHidden] = useState();
  const handleClick = () => {
    console.log("click");
    setShowNavItems(!showNavItems);
    setMenuOpen(!menuOpen);
  };
  const btn = {
    hidden: { rotate: 360 },
    show: { rotate: 0 },
  };
  return (
    <div className="bg-stone-900 grid grid-cols-1 sm:grids-col-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 ">
      <div
        className={`hidden sm:inline-flex md:bg-stone-900 md:text-stone-300`}
      ></div>
      <div className="bg-stone-900  text-info md:bg-stone-300 md:text-info">
        <NavItems />
      </div>
    </div>
    // <div className="bg-black">
    //   <div className="flex-1 bg-stone-900 "></div>

    //   <div className="flex-1 h-full w-full bg-stone-300 sm:flex justify-end">
    //     {showNavItems ? <NavItems /> : null}

    //     <motion.label className="bg-green-900 text-stone-300 hover:bg-stone-900 hover:text-stone-300 btn btn-circle swap swap-rotate">
    //       <input type="checkbox" onClick={handleClick} />

    //       <svg
    //         className="swap-off fill-current hover:bg-stone-900 hover:text-stone-300"
    //         xmlns="http://www.w3.org/2000/svg"
    //         width="32"
    //         height="32"
    //         viewBox="0 0 512 512"
    //       >
    //         <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
    //       </svg>

    //       <svg
    //         className="swap-on fill-current hover:bg-stone-900"
    //         xmlns="http://www.w3.org/2000/svg"
    //         width="32"
    //         height="32"
    //         viewBox="0 0 512 512"
    //       >
    //         <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
    //       </svg>
    //     </motion.label>
    //   </div>
    // </div>
  );
};

export default Navbar;
