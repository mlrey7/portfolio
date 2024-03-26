import TimelineContent, { TimelineContentData } from "./TimelineContent";

const timelineData: Array<TimelineContentData> = [
  {
    company: "Samsung Research & Development Institute Philippines",
    dateRange: "July - September 2023",
    jobTitle: "Software Engineer Intern",
    description:
      "I worked on converting mock Figma designs into initial functional pages for an internal dashboard metrics web app using React, Vite and Mantine.",
  },
  {
    company: "Creating Next Concepts Inc",
    dateRange: "June - August 2022",
    jobTitle: "Web Developer Intern",
    description:
      "Developed unit, integrated, and end to end (e2e) Typescript tests for Zayls software using Cypress.",
  },
  {
    company: "Polychroma Games",
    dateRange: "Nov - May 2021",
    jobTitle: "Tools Developer",
    description:
      "I developed an inhouse sprite animation tool that streamlines animation processes by providing features such as keyframing, adding & removing sprites, adding sprite bounds using Flutter Desktop.",
  },
];

const Timeline = () => {
  return (
    <div className="flex flex-col justify-center divide-y divide-slate-200">
      <div className="w-full max-w-3xl mx-auto">
        <div className="-my-6">
          {...timelineData.map((data) => (
            <TimelineContent key={data.description} {...data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
