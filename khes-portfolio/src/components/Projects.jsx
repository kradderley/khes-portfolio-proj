import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloudSunRain,
  faSpoon,
  faCalculator,
} from "@fortawesome/free-solid-svg-icons";
import "../css-files/About.css";

const Projects = () => {
  const recipeProject = () => {
    window.open(
      "https://github.com/kradderley/react-personal-project/tree/main/project-cocktails"
    );
  };

  const calculatorProject = () => {
    window.open(
      "https://github.com/kradderley/new-calc-app-proj/tree/main/calculator-proj"
    );
  };
  return (
    <>
      <div className="projects-container" id="menu-projects">
        <h1 className="projects-heading">Projects</h1>
        <h3 className="projects-subheading">Most Recent Work </h3>
        <div className="projects-grid-container">
          <section className="project-one">
            <FontAwesomeIcon
              icon={faCloudSunRain}
              size={"10x"}
              className="faCloudSunRain"
            />
            <h4>Weather App</h4>
            <div>
              <button>
                View in Github
                <img
                  className="arrow"
                  src="../src/images/arrow.svg"
                  alt="linkedin"
                />
              </button>
            </div>
            <ul className="projects-list">
              <li>HTML</li>
              <li>CSS</li>
              <li>Javacript</li>
            </ul>
          </section>

          <section className="project-two">
            <FontAwesomeIcon icon={faSpoon} size={"8x"} className="faSpoon" />
            <h4>La Recette: Recipe Website</h4>
            <div>
              <button onClick={recipeProject}>
                View in Github
                <img
                  className="arrow"
                  src="../src/images/arrow.svg"
                  alt="linkedin"
                />
              </button>
            </div>
            <ul className="projects-list">
              <li>HTML</li>
              <li>CSS</li>
              <li>Javacript</li>
              <li>React</li>
            </ul>
          </section>

          <section className="project-three">
            <FontAwesomeIcon
              icon={faCalculator}
              size={"10x"}
              className="faCalculator"
            />
            <h4>My Calculator</h4>
            <div>
              <button onClick={calculatorProject}>
                View in Github
                <img
                  className="arrow"
                  src="../src/images/arrow.svg"
                  alt="linkedin"
                />
              </button>
            </div>
            <ul className="projects-list">
              <li>HTML</li>
              <li>CSS</li>
              <li>Javacript</li>
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
