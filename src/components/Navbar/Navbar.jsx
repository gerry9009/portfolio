import React, { useEffect, useState } from "react";
import "./Navbar.css";
// import framer motion
import { motion } from "framer-motion";
//import react icons
import { RiMenuFill, RiCloseLine } from "react-icons/ri";
// import react-scrolllock
import ScrollLock from "react-scrolllock";

const containerVariants = {
  hidden: {
    scale: 8,
    x: "calc(50vw - 40px)",
    y: "calc(-50vh - 2.5rem)",
  },
  visible: {
    scale: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 1.5,
      ease: "easeOut",
      delay: 3.5,
    },
  },
};

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 4,
      ease: "linear",
    },
  },
};

export default function Navbar({
  contentNavbar,
  lastYPosition,
  handleAnimationFinished,
  logoAnimationStatus,
}) {
  const [navbar, setNavbar] = useState("navbar");
  const [navBarPosition, setNavBarPosition] = useState(0);
  const [toggleMenu, setToggleMenu] = useState(true);
  const [navbarMenu, setNavbarMenu] = useState(
    "navbar__menu-container scale-up-ver-bottom"
  );

  //set navbar position
  useEffect(() => {
    const nav = document.querySelector(".navbar");
    setNavBarPosition(nav.offsetTop);
  }, []);

  // handle highlight nav menu on scroll
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".navbar__links li a");
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionBottom = section.offsetTop + section.clientHeight;
      if (
        lastYPosition >= sectionTop - 30 &&
        lastYPosition <= sectionBottom - 30
      ) {
        current = section.dataset.nav;
      }
    });

    navLinks.forEach((a) => {
      a.classList.remove("active");
      if (a.dataset.nav === current) {
        a.classList.add("active");
      }
    });
  }, [lastYPosition]);

  const handleResizeWidth = () => {
    if (window.innerWidth >= 992 && !toggleMenu) {
      setToggleMenu(true);
    }
  };

  //handle where will show-up the hamburger menu
  const handleMenuShowUp = () => {
    if (lastYPosition <= 0) {
      setNavbarMenu("navbar__menu-container scale-up-ver-bottom");
    } else if (lastYPosition > navBarPosition) {
      setNavbarMenu("navbar__menu-container scale-up-ver-top");
    } else {
      setNavbarMenu("navbar__menu-container slide-in-right");
    }
  };

  //handle navbar sticky mode
  const handleNavbarStickyMode = () => {
    if (navBarPosition >= 0) {
      if (lastYPosition > navBarPosition) {
        setNavbar("navbar navbar-sticky");
      } else {
        setNavbar("navbar");
      }
    }
  };

  const handleScroll = () => {
    handleMenuShowUp();
    handleNavbarStickyMode();
  };

  useEffect(() => {
    handleScroll();
  }, [lastYPosition]);

  window.addEventListener("resize", handleResizeWidth);

  const logo = () => {
    return (
      <a href="#home">
        <motion.svg
          className="navbar__container-logo"
          width="200"
          height="202"
          viewBox="0 0 506 402"
        >
          <motion.path
            variants={pathVariants}
            className="navbar__container-logo-fill"
            d="M185.108 120.189L185.12 120.202L185.133 120.214C206.201 141.731 216.535 167.782 216.535 198.214V286.574C216.535 318.208 205.813 344.639 184.775 365.742L184.762 365.755L184.75 365.768C163.652 387.316 138.636 398 109.502 398C81.9912 398 57.867 387.854 37.3113 367.675L41.0745 363.6C60.629 382.617 83.2689 392.069 109.502 392.069C137.059 392.069 161.05 381.639 181.287 360.608C201.546 339.954 211.517 315.069 211.517 286.574V198.214C211.517 168.91 201.15 143.979 180.437 124.096C159.859 103.944 136.295 93.9129 110.268 93.9129C81.1845 93.9129 57.1361 104.742 38.0022 125.876C18.9951 146.87 9.40057 170.899 9.40057 198.214C9.40057 227.087 19.3577 251.969 38.8505 272.232C58.3483 292.502 82.3543 302.913 110.268 302.913C122.103 302.913 133.649 300.898 144.875 296.558L147.12 301.893C134.731 306.635 122.645 308.844 110.268 308.844C79.599 308.844 54.2558 297.762 33.9688 275.919C13.9536 253.559 4 227.846 4 198.214C4 166.186 14.7164 140.183 36.0918 119.494L36.105 119.481L36.1181 119.468C57.6216 98.2704 82.282 87.9822 110.268 87.9822C139.407 87.9822 164.408 98.6695 185.108 120.189ZM470.907 120.535L470.919 120.548L470.932 120.561C491.675 142.51 502 168.594 502 198.214C502 229.844 491.282 256.261 469.882 277.357L469.87 277.37L469.857 277.382C448.757 298.547 424.113 308.844 395.733 308.844C365.448 308.844 340.098 297.763 319.804 275.905C299.419 253.552 289.465 227.847 289.465 198.214V4H294.866V201C294.866 229.562 305.27 253.671 325.549 273.513L325.564 273.527L325.58 273.542C345.784 292.898 369.342 302.913 395.733 302.913C424.026 302.913 448.049 292.502 467.56 271.805L467.574 271.791L467.587 271.776C487.023 250.747 496.599 226.297 496.599 198.214C496.599 169.337 486.638 144.43 466.341 124.151C446.505 103.95 422.914 93.5148 395.733 93.5148C383.791 93.5148 371.903 95.8925 360.371 100.296L358.099 94.8963C370.261 90.105 382.703 87.5842 395.733 87.5842C425.616 87.5842 450.595 98.6514 470.907 120.535Z"
            strokeWidth="10"
            fill="none"
          />
        </motion.svg>
      </a>
    );
  };

  const links = () => {
    return (
      <>
        <li>
          <a href="#home" className="active" data-nav="home">
            {contentNavbar.home}
          </a>
        </li>
        <li>
          <a href="#about" data-nav="about">
            {contentNavbar.about}
          </a>
        </li>
        <li>
          <a href="#portfolio" data-nav="portfolio">
            {contentNavbar.portfolio}
          </a>
        </li>
        <li>
          <a href="#contact" data-nav="contact">
            {contentNavbar.contact}
          </a>
        </li>
      </>
    );
  };

  const navbarLinks = () => {
    return <ul className="navbar__links">{links()}</ul>;
  };

  const hamburgerMenu = () => {
    return (
      <ScrollLock isActive={!toggleMenu}>
        <div className="navbar__menu">
          <RiMenuFill
            className="navbar__menu-icon"
            size={27}
            onClick={() => setToggleMenu(false)}
          />

          {!toggleMenu && (
            <div className={navbarMenu}>
              <RiCloseLine
                className="navbar__menu-container-close"
                size={27}
                onClick={() => setToggleMenu(true)}
              />
              <ul
                className="navbar__menu-container-links"
                onClick={() => setToggleMenu(true)}
              >
                {links()}
              </ul>
            </div>
          )}
        </div>
      </ScrollLock>
    );
  };

  return (
    <motion.nav id="nav" className={navbar}>
      <motion.div
        className="navbar__container"
        variants={containerVariants}
        onAnimationComplete={() => handleAnimationFinished()}
        initial="hidden"
        animate="visible"
      >
        {logo()}
      </motion.div>
      {logoAnimationStatus && navbarLinks()}
      {logoAnimationStatus && hamburgerMenu()}
    </motion.nav>
  );
}
