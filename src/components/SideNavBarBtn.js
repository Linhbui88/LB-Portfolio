import {BsMenuButtonWide} from "react-icons/bs";
import "./SideNavBarBtn.css";
import SideNavbar from "./SideNavBar";

const sidebarBtn = ({openSB, setOpenSB}) => {
 
  return (
    <BsMenuButtonWide className="sidebar-button"/>
  );
};

export default sidebarBtn;
