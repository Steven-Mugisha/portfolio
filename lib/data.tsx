import adc from "../public/adc.png";
import uog from "../public/uog.png";

import w3s from "../public/w3s.png";

export const experienceData = [
  {
    id: 1,
    position: "Software Engineer",
    company: "Food From Thought",
    date: " 2023 - Present",
    description:
      "Develop, maintain, and deploy the semantic engine a web plaform to compose schemas from a tabulater approach. Currently exploring ways to enhance core systems used at Food From Thought to achieve a suitable schema model.",
    tags: ["React", "Typescript", "HTML/CSS", "Material UI", "Rust"],
    link: "https://foodfromthought.ca/",
    imageUrl: adc,
    alt: "ADC Logo",
  },
  {
    id: 2,
    position: "Software Developer",
    company: "University of Guelph | Water Resource Engineering",
    date: "2022 - 2023",
    description:
      "Built a Data as a Service (DaaS) web platform that allows application users to download climate data of a pre-specified region within any watershed across the globe.",
    tags: ["Python", "Bash", "Docker", "RShiny"],
    link: "https://www.uoguelph.ca/engineering/web-based-tools-0",
    imageUrl: uog,
    alt: "UoG Logo",
  },
] as const;

export const projectsData = [
  {
    title: "W3S",
    description:
      "A Data as a Service (DaaS) platform that allows application users to download climate data of a pre-specified region within any watershed across the globe.",
    tags: ["Python", "Bash", "Docker", "RShiny"],
    imageUrl: w3s,
    link: "https://www.uoguelph.ca/watershed/w3s/",
    isLink: true,
    alt: "W3S Project Image",
    achievement: "",
    hasAchievement: true,
  },
] as const;
