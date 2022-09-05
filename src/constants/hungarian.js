import homedesign from "../assets/pics/homedesign.jpg";
import mastermind from "../assets/pics/mastermind.jpg";
import randomuser from "../assets/pics/randomuser.jpg";
import rockpaperscissorslizardspock from "../assets/pics/rockpaperscissorslizardspock.jpg";
import triviaquiz from "../assets/pics/triviaquiz.jpg";

const hungarian = {
  home: {
    name: "Buglyó Gergő",
    position: "Frontend Fejlesztő",
    button: "Dolgozzunk együtt",
  },
  nav: {
    home: "Főoldal",
    about: "Rólam",
    portfolio: "Portfolió",
    contact: "Kapcsolat",
  },
  about: {
    heading: "Rólam",
    greeting: "Hello!",
    introduction: "Az én nevem Gergő.",
    describe:
      "Webfejlesztő vagyok, aki szeret hasznos dolgokat létrehozni az internet világába.",
    experience: "Íme néhány általam használt technológia:",
    knowledge: ["HTML", "CSS", "Bootstrap", "JavaScript", "React", "Figma"],
  },
  portfolio: {
    landingpage: {
      title: "Egyszerű főoldal",
      text: "Ez egy lakberendezési cég főoldala, lenyűgöző dizájnnal.",
      technologies: ["HTML", "CSS"],
      link_webpage: "https://gerry9009.github.io/home-design/",
      link_github: "https://github.com/gerry9009/home-design",
      pic: homedesign,
    },
    randomuser: {
      title: "Véletlenszerű felhasználó generátor",
      text: "Véletlen felhasználó generátor webes alkalmazás számos funkcióval.",
      technologies: ["HTML", "Bootstrap", "JavaScript", "React", "API"],
      link_webpage: "https://gerry9009.github.io/randomuser-generator/",
      link_github:
        "https://github.com/gerry9009/randomuser-generator/tree/master",
      pic: randomuser,
    },
    rockpaperscissors: {
      title: "Kő Papír Olló Gyík Spoke",
      text: "Ez a klasszikus kő-papír-olló játék kibővített változata.",
      technologies: ["HTML", "CSS", "JavaScript", "React"],
      link_webpage:
        "https://gerry9009.github.io/rock-paper-scissors-lizard-spock/",
      link_github:
        "https://github.com/gerry9009/rock-paper-scissors-lizard-spock/tree/master",
      pic: rockpaperscissorslizardspock,
    },
    mastermind: {
      title: "Mastermind",
      text: "A klasszikus kódfejtő társasjáték megvalósítása egy webes alkalmazásban",
      technologies: ["HTML", "CSS", "JavaScript"],
      link_webpage: "https://gerry9009.github.io/mastermind-game/",
      link_github: "https://github.com/gerry9009/mastermind-game",
      pic: mastermind,
    },
    triviaquiz: {
      title: "Kvíz játék",
      text: "Egyszerű feleletválasztós kvízjáték. Válassz ki egy kategóriát, amelyben játszani szeretnél. Szerezd meg a maximális pontot minden kategóriában.",
      technologies: ["HTML", "CSS", "JavaScript", "API"],
      link_webpage: "https://gerry9009.github.io/triviaQuizGame/",
      link_github: "https://github.com/gerry9009/triviaQuizGame",
      pic: triviaquiz,
    },
  },
  contact: {
    heading: "Kapcsolat",
    title: "Vedd fel velem a kapcsolatot",
    text: "Itt tudsz nekem üzenetet küldeni",
    responseTitle: "Köszönöm a megkeresésed!",
    responseText: "Hamarosan felveszem veled a kapcsolatot",
    form: { name: "név", email: "email", message: "üzenet", send: "küld" },
  },
};

export default hungarian;
