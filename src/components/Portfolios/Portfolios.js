import React from "react";
import Portfolio from "./Portfolio/Portfolio";

import { v4 as uuidv4 } from "uuid";

import "./Portfolios.css";

const Portfolios = ({ content, navigation }) => {
  const keys = Object.keys(content);

  return (
    <section className="portfolios" id={navigation} data-navigation="portfolio">
      {keys.map((key, index) => {
        return (
          <Portfolio content={content[key]} index={index} key={uuidv4()} />
        );
      })}
    </section>
  );
};

export default Portfolios;
