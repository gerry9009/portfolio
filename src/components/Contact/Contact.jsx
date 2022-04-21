import React from "react";
import { RiGithubLine, RiLinkedinFill, RiTwitterFill } from "react-icons/ri";
import { useForm, ValidationError } from "@formspree/react";

import "./Contact.css";

export default function Contact({ navigation, contentContact }) {
  const [state, handleSubmit] = useForm("xwkyrgpp");

  const ContactForm = () => {
    if (state.succeeded) {
      return (
        <div className="contact-title header_response">
          <h5 className="contact-title_header ">
            {contentContact.responseTitle}
          </h5>
          <p className="contact-title_message">{contentContact.responseText}</p>
        </div>
      );
    } else {
      return (
        <>
          <div className="contact-title">
            <h5 className="contact-title_header">{contentContact.title}</h5>
            <p className="contact-title_message">{contentContact.text}</p>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              className="contact-form_name"
              type="text"
              placeholder={contentContact.form.name}
              id="name"
              name="name"
              required
            />
            <input
              className="contact-form_email"
              type="email"
              placeholder={contentContact.form.email}
              id="email"
              name="email"
              required
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <textarea
              className="contact-form_message"
              placeholder={contentContact.form.message}
              id="message"
              name="message"
              required
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <button
              className="contact-form_button"
              type="submit"
              disabled={state.submitting}
            >
              {contentContact.form.send}
            </button>
          </form>
        </>
      );
    }
  };

  return (
    <section className="contact" id={navigation} data-nav="contact">
      <h4 className="contact-headline">{contentContact.heading}</h4>
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
        <ContactForm />
      </div>
    </section>
  );
}
