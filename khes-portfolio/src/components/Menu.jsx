import React, { useState } from "react";
import { Router, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "../css-files/Menu.css";

const Menu = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <div className="menu-bar">
        <nav>
          <p className="menu-header-name">
            {" "}
            <NavLink to="/">Khes Adderley</NavLink>
          </p>
        </nav>
        <nav className="menu-titles">
          <div className="menu-bar-icon" onClick={() => {
            setOpenMenu(!openMenu)
          }}>
            <FontAwesomeIcon icon={faBars} />
          </div>
          <div className="info-bar">
            <ul className={openMenu ? "open" : ""}>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/">About</NavLink>
              </li>
              <li>
                <NavLink to="/">Skills</NavLink>
              </li>
              <li>
                <NavLink to="/">Projects</NavLink>
              </li>
              <li>
                <NavLink to="/">Contact</NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Menu;
