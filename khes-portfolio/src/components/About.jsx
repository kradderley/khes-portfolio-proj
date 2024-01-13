import React from "react";
import "../css-files/About.css";

const About = () => {
  return (
    <>
      <div className="about-container">
        <h1 className="about-heading">About Me</h1>
        <h3 className="about-subheading">Introduction</h3>
        <div className="about-grid-container">
          <img
            className="about-image"
            src="../src/images/girl-web-developer.svg"
            alt="web-developer"
          />
          <section className="about-info-section">
            <h3>A committed web developer based in Paris, France</h3>
            <p>
              {" "}
              As a Junior Front-End Developer, my goal is to create and maintain
              responsive websites that offer a seamless user experience. My
              skills in HTML, CSS/SCSS, Javascript and React, among others, I am
              capable of working in cross-functional teams to produce top-notch
              web applications. I am excited to display my ability to craft
              dynamic interfaces while writing clean and optimized code.{" "}
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default About;
