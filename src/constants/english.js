import homedesign from "../assets/pics/homedesign.jpg";
import mastermind from "../assets/pics/mastermind.jpg";
import randomuser from "../assets/pics/randomuser.jpg";
import rockpaperscissorslizardspock from "../assets/pics/rockpaperscissorslizardspock.jpg";
import triviaquiz from "../assets/pics/triviaquiz.jpg";
import skypeclone from "../assets/pics/skypeclone.jpg";
import carsrestapi from "../assets/pics/carsrestapi.png";

const english = {
  home: {
    name: "Gergő Buglyó",
    position: "Frontend Developer",
    button: "Work with Me",
  },
  nav: {
    home: "Home",
    about: "About",
    portfolio: "Portfolio",
    contact: "Contact",
  },
  about: {
    heading: "About Me",
    greeting: "Hello!",
    introduction: "My name is Gergő.",
    describe:
      "I’m a web developer who loves creating things that live on the internet.",
    experience: "Here are some of the technologies I use:",
    knowledge: [
      "HTML",
      "CSS",
      "Bootstrap",
      "Tailwind CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Redux",
      "NodeJS",
      "Express",
      "Figma",
    ],
  },
  portfolio: {
    landingpage: {
      title: "Simple landing page",
      text: "This is the landing page of an interior design company with stunning design.",
      technologies: ["HTML", "CSS"],
      link_webpage: "https://gerry9009.github.io/home-design/",
      link_github: "https://github.com/gerry9009/home-design",
      pic: homedesign,
    },
    randomuser: {
      title: "Random user generator",
      text: "Random user generator web application with many features.",
      technologies: ["HTML", "Bootstrap", "JavaScript", "React", "API"],
      link_webpage: "https://gerry9009.github.io/randomuser-generator/",
      link_github:
        "https://github.com/gerry9009/randomuser-generator/tree/master",
      pic: randomuser,
    },
    rockpaperscissors: {
      title: "Rock Paper Scissors Lizard Spoke",
      text: "This is an extended version of the classic rock-paper-scissors game.",
      technologies: ["HTML", "CSS", "JavaScript", "React"],
      link_webpage:
        "https://gerry9009.github.io/rock-paper-scissors-lizard-spock/",
      link_github:
        "https://github.com/gerry9009/rock-paper-scissors-lizard-spock/tree/master",
      pic: rockpaperscissorslizardspock,
    },
    mastermind: {
      title: "Mastermind",
      text: "Implementation of a classic code-breaking board game in a web application.",
      technologies: ["HTML", "CSS", "JavaScript"],
      link_webpage: "https://gerry9009.github.io/mastermind-game/",
      link_github: "https://github.com/gerry9009/mastermind-game",
      pic: mastermind,
    },
    triviaquiz: {
      title: "Trivia quiz game",
      text: "Simple multiple-choice quiz game. Choose a category in which to play. Earn the maximum points in each category.",
      technologies: ["React", "TailwindCSS", "TypeScript", "API"],
      link_webpage: "https://gerry9009.github.io/triviaQuizGame/",
      link_github: "https://github.com/gerry9009/triviaQuizGame",
      pic: triviaquiz,
    },
    skypeclone: {
      title: "Skype Clone",
      text: "You are able to create a connection between two peers via NodeJS server.",
      technologies: ["React", "NodeJS", "Express", "Simple-peer", "Socket-io"],
      link_webpage: "https://gerry9009.github.io/webrtc/",
      link_github: "https://github.com/gerry9009/webrtc",
      pic: skypeclone,
    },
    restapi: {
      title: "Car RestAPI",
      text: "This portfolio project showcases the development of a basic Node.js REST API for managing car data. The project provides endpoints for retrieving, adding, updating, and deleting car information, along with various filtering options.",
      technologies: ["NodeJS", "Express", "MongoDB"],
      link_webpage: "https://github.com/gerry9009/cars-rest-api",
      link_github: "https://github.com/gerry9009/cars-rest-api",
      pic: carsrestapi,
    },
  },
  contact: {
    heading: "Contact Me",
    title: "Get in touch",
    text: "Feel free to send me a message",
    responseTitle: "Thanks for your enquiry!",
    responseText: "I will contact you soon",
    form: { name: "name", email: "email", message: "message", send: "send" },
  },
};

export default english;
