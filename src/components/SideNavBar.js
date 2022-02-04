import { useState } from "react";
import { GrHomeRounded } from "react-icons/gr";
import { MdPersonOutline } from "react-icons/md";
import { GrCode } from "react-icons/gr";
import { MdOutlineWorkOutline } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { Link } from "react-router-dom";
import { BsMenuButtonWide } from "react-icons/bs";
import { FaSlackHash } from "react-icons/fa";
import "./SideNavBar.css";

const SideNavbar = ({ openSB, setOpenSB, windowWidth, setWindowWidth }) => {
  const crossClassSideMenu = () => {
    return `${windowWidth > 990 || openSB ? "sideMenuShow" : "sideMenuHide"}`;
  };
  const crossClass = () => {
    return ` sidebar ${openSB ? "open" : ""} `;
  };

  const handleMouseEnter = () => {
    setOpenSB(true);
  };
  const handleMouseLeave = () => {
    setOpenSB(false);
  };
  const handleMenuBtn = () => {
    setOpenSB(!openSB);
  };
  const handleCloseSB = () => {
    setOpenSB(false);
  };
  const footerYear = new Date().getFullYear();
  return (
    <div>
      {windowWidth <= 990 ? (
        <BsMenuButtonWide className="sidebar-button" onClick={handleMenuBtn} />
      ) : (
        ""
      )}
      <div className={crossClassSideMenu()}>
        <aside
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={crossClass()}
        >
          <div className="top-sidebar">
            <p className="logo">LB</p>
          </div>
          <div className="middle-sidebar">
            <ul className="sidebar-list" onClick={handleCloseSB}>
              <li className="sidebar-list-item">
                <Link className="sidebar-link" to="/">
                  <GrHomeRounded className="sidebar-icon" />
                  <span className="hidden-sidebar">HOME</span>
                </Link>
              </li>
              <li className="sidebar-list-item">
                <Link className="sidebar-link" to="/about">
                  <MdPersonOutline className="sidebar-icon" />
                  <span className="hidden-sidebar">ABOUT</span>
                </Link>
              </li>
              <li className="sidebar-list-item">
                <Link className="sidebar-link" to="/skills">
                  <GrCode className="sidebar-icon" />
                  <span class="hidden-sidebar">SKILLS</span>
                </Link>
              </li>
              <li className="sidebar-list-item">
                <Link className="sidebar-link" to="/works">
                  <MdOutlineWorkOutline className="sidebar-icon" />
                  <span class="hidden-sidebar">WORKS</span>
                </Link>
              </li>
              <li className="sidebar-list-item">
                <Link className="sidebar-link" to="/contact">
                  <FiPhoneCall className="sidebar-icon" />
                  <span class="hidden-sidebar">CONTACT</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="bottom-sidebar">
            <FaSlackHash />

            <small> &copy; Linh Bui</small>

            <small> {footerYear}</small>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default SideNavbar;
