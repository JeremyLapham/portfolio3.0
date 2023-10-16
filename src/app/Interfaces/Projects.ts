import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export interface IGithub {
    icon: ReactNode;
    text: string;
}

export interface IProjectRepos {
    github: IGithub;
    repoLink: string;
    title: string;
}

export interface ILanguageIcon {
    icon: ReactNode;
    text: string;
}

export interface IProjects {
    id: number;
    img: StaticImageData;
    name: string;
    languages: string;
    description: string | ReactNode;
    linkToSite: string;
    languageIcon: ILanguageIcon[];
    projectRepo?: IProjectRepos | null;
    projectAPIRepo?: IProjectRepos | null;
}