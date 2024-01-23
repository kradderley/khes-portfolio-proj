import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../css-files/About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_yfb1zn4",
        "template_0a9ks19",
        form.current,
        "GlK2aWoF6V4LvN2-l"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <>
      <div className="contact-container" id="menu-contact">
        <h1 className="contact-heading">Contact</h1>
        <h3 className="contact-subheading">Let's Get In Touch</h3>

        <h4 className="contact-paragraph">
          {" "}
          Feel free to reach out to me, even if it's just to say "Hello!". I'm
          looking forward to hearing from you.{" "}
        </h4>

        <div className="contact-all-container">
          <div className="contact-form-container">
            <form ref={form} onSubmit={sendEmail}>
              <input
                type="text"
                placeholder="Full Name"
                name="user_name"
                required
              />
              <input
                type="text"
                placeholder="Email"
                name="user_email"
                required
              />
              <input
                type="text"
                placeholder="Subject"
                name="subject"
                required
              />
              <textarea name="message" rows="7" cols="50"></textarea>
              <input type="submit" value="Send Message" />
            </form>
          </div>
          <div className="contact-grid-container">
            <section className="contact-item">
              <FontAwesomeIcon icon={faEnvelope} />
              <div>Email</div>
              <div>khesadderley@gmail.com</div>
              <div>Write Me!</div>
            </section>
            <section className="contact-item">
              <FontAwesomeIcon icon={faPhone} />
              <div>Phone</div>
              <div>+33 7 88 11 94 40</div>
              <div>Send me a message! </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
