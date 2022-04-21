import React, { useEffect } from "react";
import "./About.css";
import getRandomKey from "../../constants/getRandomKey";
import mainpic from "../../assets/profil/myprofile.jpg";

import { fadeInAnimation } from "../../constants/animations";

export default function About({ contentAbout, lastYPosition, navigation }) {
  const fadeInRight = {
    animationName: "fadeRight",
    axis: "x",
    from: "-150px"
  };

  const fadeInLeft = {
    animationName: "fadeLeft",
    axis: "x",
    from: "200px"
  };

  useEffect(() => {
    fadeInAnimation(fadeInRight);
    fadeInAnimation(fadeInLeft);
  }, [lastYPosition]);

  const skills = contentAbout.knowledge.map((skill) => {
    return (
      <li className="about-experienceList" key={getRandomKey()}>
        {skill}
      </li>
    );
  });

  return (
    <section id={navigation} className="about" data-nav="about">
      <h2 className="about-headings">{contentAbout.heading}</h2>
      <div className="about-describtion" data-animation="fadeRight">
        <h3 className="about-describtion_greeting">{contentAbout.greeting}</h3>
        <h4 className="about-describtion_introduction">
          {contentAbout.introduction}
        </h4>
        <p className="about-describtion_content">{contentAbout.describe}</p>
        <h5 className="about-describtion_experience">
          {contentAbout.experience}
        </h5>
        <ul>{skills}</ul>
      </div>
      <a href="../../assets/cv/CV.pdf" download className="about-cv">
        <button className="about-btn">CV</button>
      </a>
      <div className="about-pic-container" data-animation="fadeLeft">
        <img src={mainpic} alt="elegant man" />
        <div className="about-pic-layer"></div>
      </div>
    </section>
  );
}
