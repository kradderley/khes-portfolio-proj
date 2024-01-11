import React from "react";
import "../css-files/About.css";

const Skills = () => {
  return (
    <>
      <div className="skills-container">
        <h1 className="skills-heading"> Skills</h1>
        <h3> My technical level</h3>
        <div className="skills-grid-container">
          <section className="front-end-containter">
            <h4>Front-End</h4>
            <ul className="skills-list">
              <li>
              <img src="../src/images/html.svg" />
                <br />
                HTML</li>
              <li>
              <img src="../src/images/css.svg" />
                <br />
                CSS</li>
              <li>
                <img src="../src/images/javascript.svg" />
                <br />
                Javascript
              </li>
              <li>
                <img src="../src/images/react.svg" />
                <br />
                React
              </li>
              <li>
              <img src="../src/images/bootstrap.svg" />
                <br />
                Bootstrap</li>
              <li>
              <img src="../src/images/git.svg" />
                <br />
                Git</li>
            </ul>
          </section>
          <section className="back-end-container">
            <h4>Back-End</h4>
            <ul className="skills-list">
              <li>
              <img src="../src/images/php.svg" />
                <br />
                PHP</li>
              <li>
              <img src="../src/images/sql.svg" />
                <br />
                SQL</li>
              <li>
              <img src="../src/images/express-node.svg" />
                <br />
                Express/Node.js</li>
              <li>
              <img src="../src/images/ruby-rails.svg" />
                <br />
                Ruby on Rails</li>
            </ul>
          </section>
        </div>
      </div>
    </>
  );
};

export default Skills;
