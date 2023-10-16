import { BsLinkedin } from "react-icons/bs";
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
  SiVisualstudio,
} from "react-icons/si";
import { BsServer } from "react-icons/bs";
import { TbBrandNextjs } from "react-icons/tb";
import { FaSquareGithub, FaNewspaper } from "react-icons/fa6";
import { IIntroIcons, LanguageIcon } from "@/app/Interfaces/Language";

export const introIcons: IIntroIcons[] = [
  {
    icon: <BsLinkedin size={75} color={"white"} />,
    link: "https://www.linkedin.com/in/jeremylapham/",
    target: "_blank",
    show: false,
  },
  {
    icon: <FaSquareGithub size={82} color={"white"} />,
    link: "https://github.com/JeremyLapham",
    target: "_blank",
    show: false,
  },
  {
    icon: <FaNewspaper size={79} color={"white"} />,
    link: "",
    target: "",
    show: true,
  },
];

export const skillIconLanguages: LanguageIcon[] = [
  { icon: <SiJavascript size={50} color="#2C3033" />, text: "JavaScript" },
  { icon: <SiHtml5 size={50} color="#2C3033" />, text: "HTML" },
  { icon: <SiCss3 size={50} color="#2C3033" />, text: "CSS" },
  { icon: <SiCsharp size={50} color="#2C3033" />, text: "C#" },
  { icon: <BsServer size={50} color="#2C3033" />, text: "SQL" },
  { icon: <SiTypescript size={50} color="#2C3033" />, text: "TypeScript" },
];
export const skillIconFrameworks: LanguageIcon[] = [
  { icon: <SiReact size={50} color="#2C3033" />, text: "React" },
  { icon: <SiBootstrap size={50} color="#2C3033" />, text: "Bootstrap" },
  { icon: <TbBrandNextjs size={50} color="#2C3033" />, text: "Next.js" },
  { icon: <SiBulma size={50} color="#2C3033" />, text: "Bulma" },
  { icon: <SiAngular size={50} color="#2C3033" />, text: "Angular" },
  { icon: <SiDotnet size={50} color="#2C3033" />, text: ".Net" },
];
export const skillIconProductions: LanguageIcon[] = [
  { icon: <SiVisualstudio size={50} color="#2C3033" />, text: "Visual Studio" },
  { icon: <SiJira size={50} color="#2C3033" />, text: "Jira" },
  { icon: <SiVisualstudiocode size={50} color="#2C3033" />, text: "VS Code" },
  { icon: <SiMicrosoftazure size={50} color="#2C3033" />, text: "Azure" },
  { icon: <SiGithub size={50} color="#2C3033" />, text: "GitHub" },
  { icon: <SiAzuredevops size={50} color="#2C3033" />, text: "DevOps" },
];
