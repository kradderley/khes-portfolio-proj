import React from "react";
import "../css-files/Menu.css"; 
import { NavLink, Link } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <div className="menu-bar">
        <nav>
          <p> Khes Adderley</p>
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
      </div>
    </>
  );
};

export default Menu;
