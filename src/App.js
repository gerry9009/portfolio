import "./App.css";
import { useState, useEffect } from "react";

import english from "./constants/english";
import hungarian from "./constants/hungarian";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";

import getRandomKey from "./constants/getRandomKey";

export default function App() {
  const [isEnglish, setIsEngilsh] = useState(true);
  const [language, setLanguage] = useState(english);
  const [lastYPosition, setLastYPosition] = useState(0);
  const [logoAnimationStatus, setLogoAnimationStatus] = useState(false);

  window.addEventListener("scroll", () => {
    setLastYPosition(window.pageYOffset);
  });

  const handleEng = () => {
    setIsEngilsh(true);
  };
  const handleHun = () => {
    setIsEngilsh(false);
  };

  // handle logoLoaded state when animation is finished
  const handleAnimationFinished = () => {
    setLogoAnimationStatus(true);
  };

  useEffect(() => {
    isEnglish ? setLanguage(english) : setLanguage(hungarian);
  }, [isEnglish]);

  const PortfoliosSection = Object.keys(language.portfolio).map(
    (page, index) => {
      if (index === 0) {
        return (
          <Portfolio
            navigation="portfolio"
            contentPortfolio={language.portfolio[page]}
            index={index}
            key={getRandomKey()}
          />
        );
      } else {
        return (
          <Portfolio
            contentPortfolio={language.portfolio[page]}
            index={index}
            key={getRandomKey()}
          />
        );
      }
    }
  );

  return (
    <div className="App">
      <Navbar
        contentNavbar={language.nav}
        lastYPosition={lastYPosition}
        handleAnimationFinished={handleAnimationFinished}
        logoAnimationStatus={logoAnimationStatus}
      />
      {logoAnimationStatus && (
        <>
          <Home
            handleEng={handleEng}
            handleHun={handleHun}
            contentHome={language.home}
            isEnglish={isEnglish}
            navigation="home"
          />
          <About
            navigation="about"
            contentAbout={language.about}
            lastYPosition={lastYPosition}
          />
          {PortfoliosSection}
          <Contact navigation="contact" />
        </>
      )}
    </div>
  );
}
