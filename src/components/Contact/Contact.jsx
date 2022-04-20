import React from "react";
import { RiGithubLine, RiLinkedinFill, RiTwitterFill } from "react-icons/ri";

import "./Contact.css";

export default function Contact({ navigation }) {
  return (
    <section className="contact" id={navigation} data-nav="contact">
      <h4 className="contact-headline">Contact Me</h4>
      <div className="contact-container">
        <div className="contact-social">
          <a
            href="https://www.linkedin.com/in/gergobuglyo"
            rel="noreferrer"
            target="_blank"
          >
            <RiLinkedinFill className="contact-social_icon" size={50} />
          </a>
          <a
            href="https://github.com/gerry9009"
            rel="noreferrer"
            target="_blank"
          >
            <RiGithubLine className="contact-social_icon" size={50} />
          </a>
          <a
            href="https://twitter.com/GBuglyo"
            rel="noreferrer"
            target="_blank"
          >
            <RiTwitterFill className="contact-social_icon" size={50} />
          </a>
        </div>
        <div className="contact-title">
          <h5>Get in touch</h5>
          <p>Feel free to send me a message</p>
        </div>
        <form className="contact-form" action="#" method="">
          <input
            className="contact-form_name"
            type="text"
            placeholder="name"
            required
          />
          <input
            className="contact-form_email"
            type="email"
            placeholder="email"
            required
          />
          <textarea
            className="contact-form_message"
            placeholder="message"
            required
          />
          <input className="contact-form_button" type="submit" value="Send" />
        </form>
      </div>
    </section>
  );
}
