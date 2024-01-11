import React from "react";
import "../css-files/Home.css";

const Home = () => {
  return (
    <>
      <div className="home-page">
        <section className="grid-column-one">
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
          <div>
            <h1>Khes Adderley</h1>
            <h2>Junior Web Developer</h2>
            <p>
              I am currently seeking employment as a Junior Web Developer in an
              organization that allows me the opportunity to apply my technical
              skills, while offering the room for growth and professional
              development.
            </p>
            <br />
            <button>
              Say Hello
              <img className="send" src="../src/images/send.svg" alt="Send" />
            </button>
          </div>
          <br />
          <p>Tech Stack</p>
        </section>
        <section>
          <div>
            <img
              className="headshot"
              src="../src/images/khes-resume-headshot.png"
              alt="headshot"
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
