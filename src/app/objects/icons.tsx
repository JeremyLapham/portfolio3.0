import { BsLinkedin } from 'react-icons/bs';
import {
    SiCsharp,
    SiHtml5,
    SiCss3,
    SiReact,
    SiJavascript,
    SiTypescript,
    SiBootstrap,
    SiJira,
    SiMicrosoftazure,
    SiGithub,
    SiBulma,
    SiAngular,
    SiDotnet,
    SiAzuredevops,
    SiVisualstudiocode,
    SiVisualstudio
} from "react-icons/si";
import { BsServer } from "react-icons/bs";
import { FaSquareGithub, FaNewspaper } from 'react-icons/fa6';

export const introIcons = [
    {
        icon: <BsLinkedin size={70} color={'white'} />, link: 'https://www.linkedin.com/in/jeremylapham/'
    },
    {
        icon: <FaSquareGithub size={77} color={'white'} />, link: 'https://github.com/JeremyLapham'
    },
    {
        icon: <FaNewspaper size={74} color={'white'} />, link: ''
    },
]

export const skillIconLanguages = [
    { icon: <SiJavascript size={50} color="#F0DB4F" />, text: "JavaScript" },
    { icon: <SiHtml5 size={50} color="#e34c26" />, text: "HTML" },
    { icon: <SiCss3 size={50} color="#264de4" />, text: "CSS" },
    { icon: <SiCsharp size={50} color="green" style={{ border: "1px solid white", borderRadius: 100, backgroundColor: "white" }} />, text: "C#" },
    { icon: <BsServer size={50} color="#f29111" />, text: "SQL" },
    { icon: <SiTypescript size={50} color="#007acc" />, text: "TypeScript" },
]
export const skillIconFrameworks = [
    { icon: <SiReact size={50} color="#264de4" />, text: "React" },
    { icon: <SiBootstrap size={50} color="#563d7c" />, text: "Bootstrap" },
    { icon: <SiReact size={50} color="#264de4" />, text: "React Native" },
    { icon: <SiBulma size={50} color="#23d160" />, text: "Bulma" },
    { icon: <SiAngular size={50} color="#dd1b16" />, text: "Angular" },
    { icon: <SiDotnet size={50} color="#5d2d91" />, text: ".Net" },
]
export const skillIconProductions = [
    { icon: <SiVisualstudio size={50} color="purple" />, text: "Visual Studio" },
    { icon: <SiJira size={50} color="#0052CC" />, text: "Jira" },
    { icon: <SiVisualstudiocode size={50} color="blue" />, text: "Visual Studio Code" },
    { icon: <SiMicrosoftazure size={50} color="#008AD7" />, text: "Azure" },
    { icon: <SiGithub size={50} color="white" />, text: "GitHub" },
    { icon: <SiAzuredevops size={50} color="#008AD7" />, text: "DevOps" },
]