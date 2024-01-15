import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloudSunRain,
  faSpoon,
  faCalculator,
} from "@fortawesome/free-solid-svg-icons";
import "../css-files/About.css";

const Projects = () => {
  return (
    <>
      <div className="projects-container">
        <h1 className="projects-heading">Projects</h1>
        <h3 className="projects-subheading">Most Recent Work </h3>
        <div className="projects-grid-container">
          <section className="project-one">
            <FontAwesomeIcon icon={faCloudSunRain} size={"10x"} />
            <h4>Weather App</h4>
            <ul className="projects-list">
              <li>HTML</li>
              <li>CSS</li>
              <li>Javacript</li>
            </ul>
          </section>

          <section className="project-two">
            <FontAwesomeIcon icon={faSpoon} size={"8x"} />
            <h4>La Recette: Recipe Website</h4>
            <ul className="projects-list">
              <li>React</li>
            </ul>
          </section>

          <section className="project-three">
            <FontAwesomeIcon icon={faCalculator} size={"10x"} />
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
