import React from "react";
import "../css-files/About.css";

const Projects = () => {
  return (
    <>
      <div className="projects-container">
        <h1 className="projects-heading">Projects</h1>
        <h3 className="projects-subheading">Most Recent Work </h3>
        <div className="projects-grid-container">
          <section>
            <h4>Weather App</h4>
            <ul className="projects-list">
              <li>HTML</li>
              <li>CSS</li>
              <li>Javacript</li>
            </ul>
          </section>

          <section>
            <h4>La Recette: Recipe Website</h4>
            <ul className="projects-list">
              <li>React</li>
            </ul>
          </section>
          <section>
            <h4>My Calculator</h4>
            <ul className="projects-list">
              <li>React</li>
              <li>Redux</li>
            </ul>
          </section>
        </div>
      </div>
    </>
  );
};

export default Projects;
