import React from "react";
import { useState, useEffect } from "react";
import "./App.css";

import english from "./constants/english";
import hungarian from "./constants/hungarian";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";
import Portfolios from "./components/Portfolios/Portfolios";
import Contact from "./components/Contact/Contact";

const App = () => {
  const [isEnglish, setIsEngilsh] = useState(true);
  const [language, setLanguage] = useState(english);
  const [windowTopPosition, setWindowTopPosition] = useState(0);
  const [logoAnimationFinished, setLogoAnimationFinished] = useState(false);

  // handle scrolling position -> set window top position
  window.addEventListener("scroll", () => {
    setWindowTopPosition(window.pageYOffset);
  });

  const handleEng = () => {
    setIsEngilsh(true);
  };
  const handleHun = () => {
    setIsEngilsh(false);
  };

  useEffect(() => {
    isEnglish ? setLanguage(english) : setLanguage(hungarian);
  }, [isEnglish]);

  const handleAnimationFinished = () => {
    setLogoAnimationFinished(!logoAnimationFinished);
  };

  return (
    <div className="App">
      <Navbar
        content={language.nav}
        windowTopPosition={windowTopPosition}
        logoAnimationFinished={logoAnimationFinished}
        handleAnimationFinished={handleAnimationFinished}
      />
      {logoAnimationFinished && (
        <>
          <Home
            content={language.home}
            navigation="home"
            handleEng={handleEng}
            handleHun={handleHun}
            isEnglish={isEnglish}
          />
          <About content={language.about} navigation="about" />
          <Portfolios content={language.portfolio} navigation="portfolio" />
          <Contact content={language.contact} navigation="contact" />
        </>
      )}
    </div>
  );
};

export default App;
