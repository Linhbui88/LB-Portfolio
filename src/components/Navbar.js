import { Link } from "react-router-dom";
import { useState } from "react";
import { CgMenu } from "react-icons/cg";
import { CgCloseR } from "react-icons/cg";
import NavItems from "./NavItems";
import { motion } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const btn = {
    hidden: { rotate: 360 },
    show: { rotate: 0 },
  };
  return (
    <>
      <div className="nav bg-transparent h-full w-full bg-stone-900 text-stone-300/50 grid grid-cols-1 md:grid-cols-2">
        <div className="first-nav"></div>
        <div className="second-nav bg-stone-900 md:flex justify-content-end items-center md:!bg-stone-300 md:!text-stone-900">
          <div
            className={`${
              menuOpen
                ? "z-10 h-full w-full transition-all duration-500 md:!h-min md:!w-full md:flex flex-row-reverse items-center"
                : "h-0 w-full transition-all duration-500  z-10 md:!w-0 md:transition-all duration-500"
            } transition-all duration-500 fixed bg-stone-900 opacity-95 md:bg-transparent md:opacity-100 overflow-x-hidden overflow-y-hidden md:!relative`}
          >
            <button
              className="closebtn float-right text-3xl m-3 md:hidden"
              onClick={() => setMenuOpen(false)}
            >
              <CgCloseR />
            </button>

            <div className="flex flex-col justify-center items-center gap-8 w-full h-full text-2xl font-bold md:font-normal md:flex-row md:!justify-end md:!gap-4md:!text-md">
              <Link to="/">ABOUT</Link>

              <Link to="/works">WORKS</Link>

              <Link to="/contact">CONTACT</Link>
            </div>
          </div>
          {menuOpen ? (
            <button
              className="closebtn float-right text-3xl m-3"
              onClick={() => setMenuOpen(false)}
            >
              <CgCloseR />
            </button>
          ) : (
            <button
              className="openbtn float-right text-3xl m-3"
              onClick={() => setMenuOpen(true)}
            >
              <CgMenu />
            </button>
          )}
        </div>
      </div>

      {/* <div
            className={`second-nav h-full w-full text-stone-300/50 md:!bg-stone-300 md:!text-stone-900 ${
              menuState ? "z-10" : ""
            }`}
          >
            <div>
              <buttton
                className="float-right absolute top-10 right-20 text-3xl"
                onClick={() => handleChange()}
              >
                <CgMenu />
              </buttton>
            </div>

            <nav
              className={`w-full  ${
                menuState ? "z-10 h-full transition-all duration-500" : "h-0"
              } fixed text-stone-300/50 md:!bg-stone-300 md:!text-stone-900 overflow-x-hidden`}
            >
              <button
                className="float-right absolute top-10 right-20 text-3xl"
                onClick={() => handleChange()}
              >
                <CgCloseR />
              </button>
              <ul
                className={`${
                  menuState
                    ? "relative top-1/4 text-center text-stone-300/50 mt-30 flex flex-col justify-center items-center gap-10 h-full"
                    : "h-0"
                }`}
              >
                <li>
                  <Link to="/">ABOUT</Link>
                </li>
                <li>
                  <Link to="/works">WORKS</Link>
                </li>
                <li>
                  <Link to="/contact">CONTACT</Link>
                </li>
              </ul>
            </nav>
          </div> */}

      {/* <div className="grid grid cols-1 justify-items-end md:grid-cols-2">
        <div className="first bg-stone-900 text-stone-300">nav1</div>
        <div className="second bg-stone-900 text-stone-300/50 grid justify-items-end md:!bg-stone-300 md:text-stone-900">
          <div className="">
            <label className="mx-3 btn btn-circle swap swap-rotate md:mx-5 md:bg-stone-300 hover:bg-green-900 border-0">
              <input type="checkbox" onClick={handleClick} />

              <svg
                className="swap-off fill-current text-stone-300/50 md:text-stone-900"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
              >
                <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
              </svg>

              <svg
                className="swap-on fill-current text-stone-300/50 md:text-stone-900"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
              >
                <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
              </svg>
            </label>

            {showNavItems ? <NavItems /> : null}
          </div>
        </div>
      </div> */}
      {/* // <div className="bg-white flex">
    //   <div className="first flex-1 bg-info md:flex flex-row md:bg-stone-900 md:text-stone-300"></div>
    //   <div className="second flex-1 bg-white"></div> */}
      {/* <div
        className={`navbar-second flex-1 bg-white ${
          showNavItems ? "!h-screen md:bg-stone-300" : "bg-stone-900"
        } h-full text-stone-300/50 overflow-hidden grid grid-cols-1 justify-items-end md:w-full md:flex md:bg-stone-300 md:text-info md:flex justify-end`}
      >
        <div className="bg-stone-900 sm:bg-white opacity-90 z-50 md:flex flex-row-reverse">
          <motion.label className="mx-3 btn btn-circle swap swap-rotate md:mx-5 md:bg-stone-300 hover:bg-green-900 border-0">
            <input type="checkbox" onClick={handleClick} />

            <svg
              className="swap-off fill-current text-stone-300/50 md:text-stone-900"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>

            <svg
              className="swap-on fill-current text-stone-300/50 md:text-stone-900"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
            </svg>
          </motion.label>

          {showNavItems ? <NavItems /> : null}
        </div>
      </div> */}
      {/* </div> */}
    </>
  );
};

export default Navbar;
