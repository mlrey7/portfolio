import TimelineContent from "./TimelineContent";
import { experiences } from "@/data/experiences";

const Timeline = () => {
  return (
    <div className="flex flex-col justify-center divide-y divide-slate-200">
      <div className="w-full max-w-3xl mx-auto">
        <div className="-my-6">
          {...experiences.map((data) => (
            <TimelineContent key={data.description} {...data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
