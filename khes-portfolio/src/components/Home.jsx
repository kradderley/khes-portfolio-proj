import React from "react";
import { Link } from "react-router-dom";
import resume from "../images/KhesAdderley_CV.pdf";
import "../css-files/Home.css";

const Home = () => {
  const sayHello = () => {
    window.open("https://www.linkedin.com/in/khesadderley/");
  };

  return (
    <>
      <div className="home-page" id="menu-home">
        <section className="social-media-grid-column">
          <div>
            <Link
              to={"https://www.linkedin.com/in/khesadderley/"}
              target="_blank"
            >
              <img
                className="social-media-icon"
                src="../src/images/linkedin.svg"
                alt="linkedin"
              />
            </Link>
            <Link
              to={"https://www.instagram.com/thekhesadderley/"}
              target="_blank"
            >
              <img
                className="social-media-icon"
                src="../src/images/instagram.svg"
                alt="instagram"
              />
            </Link>
            <Link
              to={"https://github.com/kradderley?tab=repositories/"}
              target="_blank"
            >
              <img
                className="social-media-icon"
                src="../src/images/github-com.svg"
                alt="github-repo"
              />
            </Link>
          </div>
        </section>
        <section>
          <div className="home-info-grid-column">
            <h1 className="home-heading">Khes Adderley</h1>
            <h2 className="home-role-heading">Junior Web Developer</h2>
            <p className="home-statement">
              I am currently seeking employment as a Junior Web Developer in an
              organization that allows me showcase my technical skills, while
              offering the room for growth and professional development.
            </p>
            <br />
            <div className="home-button-container">
              <button onClick={sayHello} className="home-button">
                Say Hello
                <img className="send" src="../src/images/send.svg" alt="Send" />
              </button>
            </div>
            <br />
            <div className="home-button-container">
              <a href={resume} download="Khes Adderley CV">
                <button className="home-button">
                  Download CV
                  <img
                    className="send"
                    src="../src/images/download.svg"
                    alt="Download"
                  />
                </button>
              </a>
            </div>
          </div>
        </section>
        <section>
          <div className="resume-headshot">
            <img
              className="headshot"
              src="../src/images/khes-resume-headshot.png"
              alt="headshot"
            />
          </div>
        </section>
        <section>
          <div className="social-media-container">
            <Link
              to={"https://www.linkedin.com/in/khesadderley/"}
              target="_blank"
            >
              <img
                className="social-media-icon"
                src="../src/images/linkedin.svg"
                alt="linkedin"
              />
            </Link>
            <Link
              to={"https://www.instagram.com/thekhesadderley/"}
              target="_blank"
            >
              <img
                className="social-media-icon"
                src="../src/images/instagram.svg"
                alt="instagram"
              />
            </Link>
            <Link
              to={"https://github.com/kradderley?tab=repositories/"}
              target="_blank"
            >
              <img
                className="social-media-icon"
                src="../src/images/github-com.svg"
                alt="github-repo"
              />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
