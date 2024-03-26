import React from "react";

export interface TimelineContentData {
  company: string;
  dateRange: string;
  jobTitle: string;
  description: string;
}

const TimelineContent = ({
  company,
  dateRange,
  jobTitle,
  description,
}: TimelineContentData) => {
  return (
    <div className="relative pl-8 sm:pl-48 py-6 group">
      <h3 className="font-medium text-lg text-blue-500 mb-1 sm:mb-0">
        {company}
      </h3>
      <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[11rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-black after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[11rem] after:-translate-x-1/2 after:translate-y-1.5">
        <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-40 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
          {dateRange}
        </time>
        <div className="text-xl font-bold">{jobTitle}</div>
      </div>
      <p className="text-slate-500">{description}</p>
    </div>
  );
};

export default TimelineContent;
