import React, { useEffect } from "react";
import "./Home.css";
import { motion } from "framer-motion";
import { RiGithubLine, RiLinkedinFill, RiTwitterFill } from "react-icons/ri";

const maintitleVariants = {
  hidden: {
    opacity: 0,
    y: 40
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
      duration: 1.0,
      ease: "linear"
    }
  }
};

const titleVariants = {
  hidden: {
    opacity: 0,
    y: 40
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1,
      duration: 1.5,
      ease: "easeOut"
    }
  }
};

const buttonVariants = {
  hidden: {
    opacity: 0,
    y: 40
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1.5,
      duration: 1.5,
      ease: "easeOut"
    }
  }
};

export default function Home({
  contentHome,
  handleEng,
  handleHun,
  isEnglish,
  navigation
}) {
  useEffect(() => {
    const eng = document.querySelector(".btn--eng");
    const hun = document.querySelector(".btn--hun");
    if (isEnglish) {
      hun.classList.remove("active");
      eng.classList.add("active");
    } else {
      eng.classList.remove("active");
      hun.classList.add("active");
    }
  }, [isEnglish]);

  const handleOnClick = () => {
    window.location.href = "/#contact";
  };

  return (
    <section id={navigation} className="home" data-nav="home">
      <div className="home-lang">
        <button onClick={handleEng} className="home-lang_btn btn--eng">
          ENG
        </button>
        <button onClick={handleHun} className="home-lang_btn btn--hun">
          HUN
        </button>
      </div>
      <div className="home-title">
        <motion.h1
          variants={maintitleVariants}
          initial="hidden"
          animate="visible"
        >
          {contentHome.name}
        </motion.h1>
        <motion.h2 variants={titleVariants} initial="hidden" animate="visible">
          {contentHome.position}
        </motion.h2>
        <motion.button
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
          onClick={handleOnClick}
        >
          {contentHome.button}
        </motion.button>
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
}
