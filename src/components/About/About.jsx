import React, { useEffect } from "react";
import "./About.css";
import getRandomKey from "../../constants/getRandomKey";
import mainpic from "../../assets/profil/myprofile.jpg";

import { fadeInAnimation } from "../../constants/animations";

export default function About({ contentAbout, lastYPosition, navigation }) {
  const fadeInRight = {
    animationName: "fadeRight",
    axis: "x",
    from: "-150px",
  };

  const fadeInLeft = {
    animationName: "fadeLeft",
    axis: "x",
    from: "200px",
  };

  useEffect(() => {
    fadeInAnimation(fadeInRight);
    fadeInAnimation(fadeInLeft);
  }, [lastYPosition]);

  const skills = contentAbout.knowledge.map((skill) => {
    return <li key={getRandomKey()}>{skill}</li>;
  });

  return (
    <section id={navigation} className="about" data-nav="about">
      <h2 className="about-headline">About Me</h2>
      <div className="about-describe-container" data-animation="fadeRight">
        <h3 className="about-greeting">Hello!</h3>
        <h4 className="about-introduce">{contentAbout.greeting}</h4>
        <p>{contentAbout.describe}</p>
        <h5>{contentAbout.experience}</h5>
        <ul>{skills}</ul>
      </div>
      <button>CV</button>
      <div className="about-pic-container" data-animation="fadeLeft">
        <img src={mainpic} alt="elegant man" />
        <div className="about-pic-layer"></div>
      </div>
    </section>
  );
}
