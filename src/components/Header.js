import Navbar from "./Navbar";
import { useState } from "react";

const Header = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`menu flex flex-col top-0 right-0 ${
        menuOpen ? "w-full !h-screen" : ""
      } overflow-x-hidden z-10 bg-stone-700 opacity-95 sm:${
        menuOpen ? "flex-col h-screen" : "flex-row"
      } sm:!h-auto sm:!bg-stone-300 md:h-screen md:flex-row
      }`}
    >
      <div className="sm:flex-1 bg-stone-900 z-10"></div>
      <div
        className={`text-green-600 !bg-stone-900 ${
          menuOpen ? "sm:!bg-stone-700 sm:!opacity-95" : ""
        } h-full sm:flex-1 sm:!bg-stone-300 md:!bg-stone-300 md:!opacity-100 sm:z-10 text-stone-900`}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </div>
    </div>
  );
};

export default Header;
