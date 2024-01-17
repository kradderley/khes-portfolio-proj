import React, { useState } from "react";
import { Link } from "react-scroll";
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
            <Link to="menu-home" smooth offset={-100} duration={1000}>
              Khes Adderley
            </Link>
          </p>
        </nav>
        <nav className="menu-titles">
          <div
            className="menu-bar-icon"
            onClick={() => {
              setOpenMenu(!openMenu);
            }}
          >
            <FontAwesomeIcon icon={faBars} />
          </div>
          <div className="info-bar">
            <ul className={openMenu ? "open" : ""}>
              <li>
                <Link to="menu-home" smooth offset={-100} duration={1000}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="menu-about" smooth offset={-150} durations={1000}>
                  About
                </Link>
              </li>
              <li>
                <Link to="menu-skills" smooth offset={-100} durations={1000}>
                  Skills
                </Link>
              </li>
              <li>
                <Link to="menu-projects" smooth offset={-100} durations={1000}>
                  Projects
                </Link>
              </li>
              <li>
                <Link to="menu-contact" smooth offset={-100} durations={1000}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Menu;
