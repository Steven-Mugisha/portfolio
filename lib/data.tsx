import adc from "../public/adc.png";
import uog from "../public/uog.png";
import w3s from "../public/w3s.png";
import said from "../public/said.png";

export const experienceData = [
  {
    id: 1,
    position: "Software Engineer",
    company: "Food From Thought at UofG",
    date: " 2023 - Present",
    description:
      "Develop, maintain, and deploy the Semantic Engine - a web plaform to compose schemas from a tabular approach. Currently exploring ways to enhance core systems used at Food From Thought to achieve a suitable schema model.",
    tags: ["Rust", "TypeScript", "React", "Node", "Python", "Azure"],
    link: "https://foodfromthought.ca/",
    imageUrl: adc,
    alt: "ADC Logo",
  },
  {
    id: 2,
    position: "Geospatial Software Developer",
    company: "University of Guelph (UofG)",
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
    title: "SAIDIFY",
    description:
      "Contributed to an open source NPM package that generates SAID - a cryptographic digest of a data model and embedded inside the data model it hashes.",
    tags: ["KERI", "Typescript", "Node.js"],
    imageUrl: said,
    link: "https://www.npmjs.com/package/saidify",
    isLink: true,
    alt: "SAID Project Image",
    achievement: "",
    hasAchievement: true,
  },
  {
    title: "W3S",
    description:
      "A Data as a Service (DaaS) platform that allows application users to download climate data of a pre-specified region within any watershed across the globe.",
    tags: ["Python", "Bash", "Docker", "RShiny"],
    imageUrl: w3s,
    link: "https://www.uoguelph.ca/watershed/w3s/",
    isLink: true,
    alt: "W3S Project Image",
    achievement: "Achieved over 25,000 data downloads since 2021",
    hasAchievement: true,
  },
  // {
  //   title: "Veyo (Vehicle and Go)",
  //   description:
  //     "A designated drivers mobile app for individuals who like to be driven in their own cars.",
  //   tags: ["React Native", "Stripe", "Clerk", "Neon DB", "Google Cloud APIs"],
  //   imageUrl: veyo,
  //   link: "https://www.uoguelph.ca/watershed/w3s/",
  //   isLink: true,
  //   alt: "W3S Project Image",
  //   achievement: "",
  //   hasAchievement: true,
  // },
] as const;
