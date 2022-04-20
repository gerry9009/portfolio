/**
 * import animation from the animation.js
 * Call Animation in useEffect hook
 *
 */

/**
 *
 * @param animationName - from html element data atributum => data-animation=nameOfAnimation
 * @param side - the animation start side. /"left" of "right"/, default = left
 * @param lengthOfScrollAnimation - Animation length as a percentage of scrolling, default = 0.3
 * @param stopAnimationWith - animation breakpoint in pixel, default <= 576
 * @param margin - element margin in selected side in pixel, default 10
 *
 * call this function in useEffect
 */

const parallexFloatingX = ({
  animationName = "",
  side = "left",
  lengthOfScrollAnimation = 0.3,
  stopAnimationWith = 768,
  margin = 10,
} = {}) => {
  const elements = document.querySelectorAll(
    `[data-animation=${animationName}]`
  );

  elements.forEach((element) => {
    element.style.position = "absolute";
    element.style[`margin${capitalizeFirstLetter(side)}`] = margin + "px";

    if (window.innerWidth <= stopAnimationWith) {
      element.style[side] = margin + "px";
    } else if (window.pageYOffset > element.offsetTop + element.clientHeight) {
      const end = element.style[side];
      element.style[side] = end + "px";
    } else if (window.pageYOffset + window.innerHeight >= element.offsetTop) {
      element.style[side] =
        (window.pageYOffset * lengthOfScrollAnimation * window.innerWidth) /
          1000 +
        "px";
    }
  });
};

const floatingScroll = ({
  animationName = "",
  axis = "y",
  from = "-200px",
  to = 0,
  fromCorrection = 1,
  distanceCorrection = 1,
} = {}) => {
  const elements = document.querySelectorAll(
    `[data-animation=${animationName}]`
  );

  elements.forEach((element) => {
    const fromNum = getNumber(from);
    const toNum = getNumber(to);
    const distance = fromNum + toNum;
    const unit = getUnit(from);

    const yOffsetBottom = window.pageYOffset + window.innerHeight;
    const elementsTransformTop =
      (element.offsetTop + Number(fromNum)) * fromCorrection;

    if (
      yOffsetBottom > elementsTransformTop &&
      yOffsetBottom < element.offsetTop + window.innerHeight
    ) {
      const transformPercent =
        (yOffsetBottom - elementsTransformTop) / (element.offsetTop + fromNum);
      const transfromValue =
        fromNum - distance * distanceCorrection * transformPercent;

      element.style.transform = `translate${capitalizeFirstLetter(axis)}(${
        transfromValue + unit
      })`;
    }
  });
};

/**
 *
 * @param {Name of the animation get from data attributum data-animation=nameOfAnimation} animationName
 * @param {name of animation's axis } axis
 * @param {starting position of the animaton} from
 * @param {finishing poisition of the animation} to
 * @param {duration of the animation} duration
 */

const fadeInAnimation = ({
  animationName = "",
  axis = "y",
  from = "-200px",
  to = "0",
  duration = 2,
  delay = 0,
} = {}) => {
  const elements = document.querySelectorAll(
    `[data-animation=${animationName}]`
  );

  const styleSheets = Array.from(document.styleSheets).filter(
    (styleSheet) =>
      !styleSheet.href || styleSheet.href.startsWith(window.location.origin)
  );

  const css = styleSheets[0];

  css.insertRule(
    `
    @keyframes ${"animation-" + animationName} {
      0% {-webkit-transform: translate${capitalizeFirstLetter(
        axis
      )}(${from}); opacity: 0}
      75% {-webkit-transform: translate${capitalizeFirstLetter(
        axis
      )}(${distanceCorrection(from, to, 0.03)}); opacity: .8}
      100% {-webkit-transform: translate${capitalizeFirstLetter(
        axis
      )}(${to}); opacity: 1}
    }`,
    css.cssRules.length
  );

  elements.forEach((element) => {
    if (window.pageYOffset + window.innerHeight > element.offsetTop) {
      element.style.opacity = 0;
      element.style.animation = `${
        "animation-" + animationName
      } ${duration}s ease-in-out forwards`;
      element.style.animationDelay = delay + "s";
    } else {
      element.style.animation = "";
    }
  });
};

//Utility Functions

const capitalizeFirstLetter = (text) => {
  const newLetter = text.slice(0, 1).toUpperCase();
  const leftText = text.slice(1, text.legth);
  const newText = [newLetter, leftText].join("");
  return newText;
};

const distanceCorrection = (from, to = 0, correction = 0.1) => {
  const unit = getUnit(from);

  const fromNum = getNumber(from);

  const toNum = getNumber(to);

  const distance = Number(toNum) - Number(fromNum);
  const correctedValue = Number(toNum) + distance * Number(correction);

  return correctedValue + unit;
};

const getUnit = (value) => {
  return value
    .split("")
    .map((c) => {
      return /[0-9+-]/.test(c) ? "" : c;
    })
    .join("");
};

const getNumber = (num) => {
  if (num == 0) {
    return 0;
  }
  return Number(
    num
      .toString()
      .split("")
      .map((c) => {
        return /[0-9+-]/.test(c) ? c : "";
      })
      .join("")
  );
};

export { parallexFloatingX, floatingScroll, fadeInAnimation };
