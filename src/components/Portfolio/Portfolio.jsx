import React, { useEffect, useState } from "react";
import "./Portfolio.css";
import { RiGithubFill, RiShareCircleFill } from "react-icons/ri";
import getRandomKey from "../../constants/getRandomKey";

export default function Portfolio({ navigation, contentPortfolio, index }) {
  const technologys = contentPortfolio.technologies.map((tecgnology) => {
    return <li key={getRandomKey()}>{tecgnology}</li>;
  });

  const number = () => {
    if (index < 10) {
      return "0" + (index + 1);
    } else {
      return index + 1;
    }
  };

  return (
    <section className="portfolio" id={navigation} data-nav="portfolio">
      <div className="portfolio-headings_container">
        <h3 className="portfolio-heading-num">{number()}</h3>
        <h2 className="portfolio-heading-title">Portfolio</h2>
      </div>
      <div className="portfolio-content_container">
        <div className="portfolio-content-title">
          <h4>{contentPortfolio.title}</h4>
        </div>
        <div className="portfolio-description">{contentPortfolio.text}</div>
        <ul className="portfolio-technologys">{technologys}</ul>
        <a
          href={contentPortfolio.link_webpage}
          target="_blank"
          className="portfolio-link"
        >
          <RiShareCircleFill className="portfolio-icon icon-github" size={30} />
        </a>
        <a
          href={contentPortfolio.link_github}
          target="_blank"
          className="portfolio-link"
        >
          <RiGithubFill className="portfolio-icon icon-page" size={30} />
        </a>
      </div>
      <div className="portfolio-img_container">
        <img src={contentPortfolio.pic} />
      </div>
    </section>
  );
}
