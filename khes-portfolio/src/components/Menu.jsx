import React from "react";
import "./Menu.css"; 
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";

const Menu = () => {
  return (
    <>
      <div class="menu-bar">
        <nav>
          <p> Khes Adderley</p>
        </nav>
        <div class="info-bar">
          <ul>
            <li>Home</li>
            <li>About Me</li>
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
