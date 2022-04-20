import homedesign from "../assets/pics/homedesign.jpg";
import mastermind from "../assets/pics/mastermind.jpg";
import randomuser from "../assets/pics/randomuser.jpg";
import rockpaperscissorslizardspock from "../assets/pics/rockpaperscissorslizardspock.jpg";
import triviaquiz from "../assets/pics/triviaquiz.jpg";

const english = {
  home: {
    name: "Gergő Buglyó",
    position: "Front-End Developer",
    button: "Hire Me",
  },
  nav: {
    home: "Home",
    about: "About",
    portfolio: "Portfolio",
    contact: "Contact",
  },
  about: {
    greeting: "My name is Gergő.",
    describe:
      "I’m a web developer who loves creating things that live on the the internet.",
    experience: "Here are some of the technologies I use:",
    knowledge: ["HTML", "CSS", "Bootstrap", "JavaScript", "React", "Figma"],
  },
  portfolio: {
    landingpage: {
      title: "Interior design store's landingpage",
      text: "This is a landing page of a Home Design Company with impressive design.",
      technologies: ["HTML", "CSS"],
      link_webpage: "https://gerry9009.github.io/home-design/",
      link_github: "https://github.com/gerry9009/home-design",
      pic: homedesign,
    },
    randomuser: {
      title: "Random User Generator",
      text: "Random user generator web application with many features.",
      technologies: ["HTML", "Bootstrap", "JavaScript", "React"],
      link_webpage: "https://gerry9009.github.io/randomuser-generator/",
      link_github: "https://github.com/gerry9009/randomuser-generator",
      pic: randomuser,
    },
    rockpaperscissors: {
      title: "Rock Paper Scissors Lizard Spoke",
      text: "This is an extended version of the classic rock-paper-scissors game.",
      technologies: ["HTML", "CSS", "JavaScript", "React"],
      link_webpage:
        "https://gerry9009.github.io/rock-paper-scissors-lizard-spock/",
      link_github:
        "https://github.com/gerry9009/rock-paper-scissors-lizard-spock",
      pic: rockpaperscissorslizardspock,
    },
    mastermind: {
      title: "Mastermind board game",
      text: "This is a landing page of a Home Design Company with impressive design.",
      technologies: ["HTML", "CSS", "JavaScript"],
      link_webpage: "https://gerry9009.github.io/mastermind-game/",
      link_github: "https://github.com/gerry9009/mastermind-game",
      pic: mastermind,
    },
    triviaquiz: {
      title: "Trivia quiz API app",
      text: "Simple multiple-choice quiz game. Choose a category in which to play. Earn the maximum points in each category.",
      technologies: ["HTML", "CSS", "JavaScript", "React"],
      link_webpage: "https://gerry9009.github.io/triviaQuizGame/",
      link_github: "https://github.com/gerry9009/triviaQuizGame",
      pic: triviaquiz,
    },
  },
  contact: {
    text: "Feel free to send me a message:",
    form: ["name", "email", "message"],
  },
};

export default english;
