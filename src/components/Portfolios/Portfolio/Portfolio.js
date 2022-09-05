import React from "react";
import { RiGithubFill, RiShareCircleFill } from "react-icons/ri";

import { v4 as uuidv4 } from "uuid";

import "./Portfolio.css";

const Portfolio = ({ content, index }) => {
  //create list of technologies

  const technologies = content.technologies.map((technology) => {
    return <li key={uuidv4()}>{technology}</li>;
  });

  //create order number
  const renderNumber = () => {
    return index < 10 ? (
      <h3 className="portfolio-header-number">{"0" + (index + 1)}</h3>
    ) : (
      <h3 className="portfolio-header-number">{index + 1}</h3>
    );
  };

  return (
    <div className="portfolio">
      <div className="portfolio-header">
        {renderNumber()}
        <h2 className="portfolio-header-title">Portfolio</h2>
      </div>

      <div className="portfolio-title">
        <h4 className="portfolio-title-text">{content.title}</h4>
      </div>

      <div className="portfolio-container">
        <a href={content.link_webpage} target="_blank" rel="noreferrer">
          <img
            className="portfolio-img-pic"
            src={content.pic}
            alt={content.title}
          />
        </a>

        <div className="portfolio-content">
          <div className="portfolio-content-description">
            <p>{content.text}</p>
          </div>

          <ul className="portfolio-content-technologies">{technologies}</ul>

          <div className="portfolio-content_links">
            <a href={content.link_webpage} target="_blank" rel="noreferrer">
              <RiShareCircleFill
                className="portfolio-content_icon icon-github"
                size={30}
              />
            </a>

            <a href={content.link_github} target="_blank" rel="noreferrer">
              <RiGithubFill
                className="portfolio-content_icon icon-page"
                size={30}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
