import React from "react";
import "../css-files/About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <>
      <div className="contact-container">
        <h1 className="contact-heading">Contact</h1>
        <h3 className="contact-subheading">Let's Get In Touch</h3>
        <div className="contact-grid-container">
          <section className="contact-item">
            <FontAwesomeIcon icon={faEnvelope} />
            <div>Email</div>
            <div>khesadderley@gmail.com</div>
            <div>Write Me </div>
          </section>
          <section className="contact-item">
            <FontAwesomeIcon icon={faPhone} />
            <div>Phone</div>
            <div>+33 7 88 11 94 40</div>
            <div>Send me a message </div>
          </section>
          <section></section>
        </div>
      </div>
      <footer></footer>
    </>
  );
};

export default Contact;
