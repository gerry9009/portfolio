import React from "react";
import { RiGithubLine, RiLinkedinFill, RiTwitterFill } from "react-icons/ri";

import "./Home.css";

const Home = ({ content, navigation, handleEng, handleHun, isEnglish }) => {
  return (
    <section className="home" id={navigation} data-navigation="home">
      <div className="home-language">
        <button
          onClick={handleEng}
          className={`home-language-btn ${isEnglish ? "active-language" : ""}`}
        >
          ENG
        </button>
        <button
          onClick={handleHun}
          className={`home-language-btn ${!isEnglish ? "active-language" : ""}`}
        >
          HUN
        </button>
      </div>

      <div className="home-content">
        <h1>{content.name}</h1>
        <h2>{content.position}</h2>
        <a href="#contact">{content.button}</a>
      </div>

      <div className="home-social">
        <a href="https://www.linkedin.com/in/gergobuglyo" target="_blank">
          <RiLinkedinFill className="home-icon" size={30} />
        </a>
        <a href="https://github.com/gerry9009" target="_blank">
          <RiGithubLine className="home-icon" size={30} />
        </a>
        <a href="https://twitter.com/GBuglyo" target="_blank">
          <RiTwitterFill className="home-icon" size={30} />
        </a>
      </div>
    </section>
  );
};

export default Home;
