import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "../css-files/Menu.css";

const Menu = () => {
  return (
    <>
      <div className="menu-bar">
        <nav>
          <p className="menu-header-name"> Khes Adderley</p>
        </nav>
        <div className="info-bar">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="menu-bar-icon">
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>
    </>
  );
};

export default Menu;
