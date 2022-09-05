import React from "react";

import { v4 as uuidv4 } from "uuid";
import profilePicture from "../../assets/profile/myprofile2.png";

import "./About.css";

const About = ({ content, navigation }) => {
  const renderSkills = content.knowledge.map((skill) => {
    return (
      <li className="about-experiences-item" key={uuidv4()}>
        {skill}
      </li>
    );
  });

  return (
    <section className="about" id={navigation} data-navigation="about">
      <h2 className="about-header">{content.heading}</h2>
      <div className="about-description">
        <h3 className="about-description-greeting">{content.greeting}</h3>
        <h4 className="about-description-introduction">
          {content.introduction}
        </h4>
        <p className="about-description-content">{content.describe}</p>
        <h5 className="about-description-experience">{content.experience}</h5>
        <ul className="about-experiences">{renderSkills}</ul>
        <a className="about-cv" href="CV.pdf" download>
          <p>CV</p>
        </a>
      </div>

      <div className="about-img-container">
        <img
          className="about-img-profile"
          src={profilePicture}
          alt="elegant man"
        />
      </div>
    </section>
  );
};

export default About;
