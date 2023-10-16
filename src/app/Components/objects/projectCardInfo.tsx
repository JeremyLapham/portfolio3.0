import {
  SiCsharp,
  SiReact,
  SiJavascript,
  SiTypescript,
  SiBootstrap,
  SiAngular,
  SiGithub,
} from "react-icons/si";
import { BsServer } from "react-icons/bs";
import pokemonAPI from "@/app/Images/pokemonAPI.png";
import rememberWhen from "@/app/Images/rememberwhen.png";
import adviceGen from "@/app/Images/advice.png";
import iHub from "@/app/Images/ihub.png";
import CAPTAIN from "@/app/Images/CAPTAIN.png";
import { IProjects } from "@/app/Interfaces/Projects";

const projectSet: IProjects[] = [
  {
    id: 1,
    img: iHub,
    name: "IHub",
    languages: "React | TypeScript | Bootstrap | C# | SQL ",
    description:
      "IHub is a website built for the San Joaquin county. During my internship I got the opportunity to help develop and maintain IHub. My responsibilities included building reuseable components to allow future developers to easily understand and use the components when needed. Also fixed design issues and bugs",
    linkToSite: "https://www.ihubsj.org",
    languageIcon: [
      { icon: <SiReact size={50} color="#2C3033" />, text: "React" },
      { icon: <SiTypescript size={50} color="#2C3033" />, text: "Typescript" },
      { icon: <SiBootstrap size={50} color="#2C3033" />, text: "Bootstrap" },
      { icon: <SiCsharp size={50} color="#2C3033" />, text: "C Sharp" },
      { icon: <BsServer size={50} color="#2C3033" />, text: "SQL" },
    ],
    projectRepo: null,
  },
  {
    id: 2,
    img: CAPTAIN,
    name: "CAPTAIN",
    languages: "Angular | TypeScript | Bootstrap | C# | SQL",
    description:
      "CAPTAIN is a website built by CodeStack. During my internship I got the opportunity to help develop and maintain CAPTAIN. My responsibilities for CAPTAIN included working within already made components and fix some display issues or any bug that was causing the site to break or not work properly",
    linkToSite: "https://captaindata.org",
    languageIcon: [
      { icon: <SiAngular size={50} color="#2C3033" />, text: "Angular" },
      { icon: <SiTypescript size={50} color="#2C3033" />, text: "TypeScript" },
      { icon: <SiBootstrap size={50} color="#2C3033" />, text: "Bootstrap" },
      { icon: <SiCsharp size={50} color="#2C3033" />, text: "C Sharp" },
      { icon: <BsServer size={50} color="#2C3033" />, text: "SQL" },
    ],
    projectRepo: null,
  },
  {
    id: 3,
    img: rememberWhen,
    name: "Remember When",
    languages: "React | TypeScript | Bootstrap | C# | SQL",
    description:
      "A fullstack project made with a team using C#,SQL for our Backend as well as React Typescript with Bootstrap for our Frontend. This website allows users to create and login to an account and then the user can make folders and put memories into the folders for the user to view at any time.",
    linkToSite: "https://rememberwhen.vercel.app",
    languageIcon: [
      { icon: <SiReact size={50} color="#2C3033" />, text: "React" },
      { icon: <SiTypescript size={50} color="#2C3033" />, text: "Typescript" },
      { icon: <SiBootstrap size={50} color="#2C3033" />, text: "Bootstrap" },
      { icon: <SiCsharp size={50} color="#2C3033" />, text: "C Sharp" },
      { icon: <BsServer size={50} color="#2C3033" />, text: "SQL" },
    ],
    projectRepo: {
      github: {
        icon: <SiGithub size={40} className="navText" color="white" />,
        text: "Remember Client Repo",
      },
      repoLink: "https://github.com/JeremyLapham/rememberwhenvite",
      title: "Jeremy's Remember When Frontend Github repository",
    },
    projectAPIRepo: {
      github: {
        icon: <SiGithub size={40} className="navText" color="black" />,
        text: "Remember API Repo",
      },
      repoLink: "https://github.com/EXgarcia/RememberWhen",
      title: "Elizaar's Remember When Backend Github repository",
    },
  },
  {
    id: 4,
    img: pokemonAPI,
    name: "Pokemon API",
    languages: "React | JavaScript | Bootstrap",
    description:
      "A rebuilt project in React Javascript using Bootstrap. This website offers extensive data on pokemon that are searched or randomly generated. This website uses the free Pokemon API to get said data to be pulled and displayed in a informational way.",
    linkToSite: "https://jeremypokedexapi.vercel.app",
    languageIcon: [
      { icon: <SiReact size={50} color="#2C3033" />, text: "React" },
      { icon: <SiJavascript size={50} color="#2C3033" />, text: "JavaScript" },
      { icon: <SiBootstrap size={50} color="#2C3033" />, text: "Bootstrap" },
    ],
    projectRepo: {
      github: {
        icon: <SiGithub size={40} className="navText" color="white" />,
        text: "Pokemon Repo",
      },
      repoLink: "https://github.com/JeremyLapham/ReactRebuildPokemonAPI",
      title: "Jeremy's Pokemon Github repository",
    },
  },
  {
    id: 5,
    img: adviceGen,
    name: "Advice Generator",
    languages: `React | Javascript | Bootstrap`,
    description: (
      <>
        I built a small two-day sprint project using React, JavaScript, and
        Bootstrap. The project utilized the{" "}
        <a
          className="linkChange"
          href="https://api.adviceslip.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          advice generator API
        </a>{" "}
        and included reference pictures for guidance. While aiming to match the
        given prototype closely, I made a small UX change to accommodate the API
        functionality.
      </>
    ),
    linkToSite: "https://jeremys-advice-generator.vercel.app",
    languageIcon: [
      { icon: <SiReact size={50} color="#2C3033" />, text: "React" },
      { icon: <SiJavascript size={50} color="#2C3033" />, text: "JavaScript" },
      { icon: <SiBootstrap size={50} color="#2C3033" />, text: "Bootstrap" },
    ],
    projectRepo: {
      github: {
        icon: <SiGithub size={40} className="navText" color="white" />,
        text: "Advice Repo",
      },
      repoLink: "https://github.com/JeremyLapham/Advice-Generator",
      title: "Jeremy's Advice Generator Github repository",
    },
  },
];

export default projectSet;
