import React from "react";
import "../css-files/Home.css";

const Home = () => {
  return (
    <>
      <div className="home-page" id="menu-home">
        <section className="social-media-grid-column">
          <div>
            <img
              className="social-media-icon"
              src="../src/images/linkedin.svg"
              alt="linkedin"
            />
            <img
              className="social-media-icon"
              src="../src/images/instagram.svg"
              alt="instagram"
            />
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
              <button className="home-button">
                Say Hello
                <img className="send" src="../src/images/send.svg" alt="Send" />
              </button>
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
            <img
              className="social-media-icon"
              src="../src/images/linkedin.svg"
              alt="linkedin"
            />
            <img
              className="social-media-icon"
              src="../src/images/instagram.svg"
              alt="instagram"
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
