export interface ExperienceType {
  company: string;
  dateRange: string;
  jobTitle: string;
  description: string;
  tags: Array<string>;
}

export const experiences: Array<ExperienceType> = [
  {
    company: "Samsung Research & Development Institute Philippines",
    dateRange: "July - September 2023",
    jobTitle: "Software Engineer Intern",
    description:
      "I worked on converting Figma designs into functional pages and components for an internal dashboard web app using React, Vite and Mantine.",
    tags: [
      "React",
      "Vite",
      "Mantine",
      "UI/UX Design",
      "Typescript",
      "Javascript",
      "Zustand",
    ],
  },
  {
    company: "Creating Next Concepts Inc",
    dateRange: "June - August 2022",
    jobTitle: "Web Developer Intern",
    description:
      "I developed unit, integrated, and end to end (e2e) Typescript tests for Zayls software using Cypress.",
    tags: [
      "Cypress",
      "End to End Testing",
      "HTML/CSS",
      "Typescript",
      "Javascript",
    ],
  },
  {
    company: "Polychroma Games",
    dateRange: "Nov - May 2021",
    jobTitle: "Tools Developer",
    description:
      "I developed an inhouse sprite animation tool that streamlines animation processes by providing features such as keyframing, adding & removing sprites, adding sprite bounds using Flutter Desktop.",
    tags: ["Flutter", "Dart", "UI/UX Design"],
  },
];
