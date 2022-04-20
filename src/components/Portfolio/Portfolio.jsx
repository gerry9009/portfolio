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
      <div className="portfolio-headings">
        <h3 className="portfolio-headings_num">{number()}</h3>
        <h2 className="portfolio-headings_title">Portfolio</h2>
      </div>
      <div className="portfolio-img">
        <a href={contentPortfolio.link_webpage} target="_blank">
          <img className="portfolio-img_pic" src={contentPortfolio.pic} />
        </a>
      </div>
      <div className="portfolio-content">
        <h4 className="portfolio-content_title">{contentPortfolio.title}</h4>
        <div className="portfolio-content_description">
          {contentPortfolio.text}
        </div>
        <ul className="portfolio-content_technologys">{technologys}</ul>
        <div className="portfolio-content_link">
          <a href={contentPortfolio.link_webpage} target="_blank">
            <RiShareCircleFill
              className="portfolio-content_icon icon-github"
              size={30}
            />
          </a>
          <a href={contentPortfolio.link_github} target="_blank">
            <RiGithubFill
              className="portfolio-content_icon icon-page"
              size={30}
            />
          </a>
        </div>
      </div>
    </section>
  );
}
