import TimelineContent, { TimelineContentData } from "./TimelineContent";

const timelineData: Array<TimelineContentData> = [
  {
    company: "Samsung Research & Development Institute Philippines",
    dateRange: "July - September 2023",
    jobTitle: "Software Engineer Intern",
    description:
      "Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus.",
  },
  {
    company: "Creating Next Concepts Inc",
    dateRange: "June - August 2022",
    jobTitle: "Web Developer Intern",
    description:
      "Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus.",
  },
  {
    company: "Polychroma Games",
    dateRange: "Nov - May 2021",
    jobTitle: "Tools Developer",
    description:
      "Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus.",
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
