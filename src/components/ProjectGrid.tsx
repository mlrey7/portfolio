import React from "react";
import ProjectContent from "./ProjectContent";
import { projects } from "@/data/projects";

const ProjectGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-16">
      {...projects
        .slice(0, 2)
        .map((data) => <ProjectContent key={data.title} {...data} />)}
    </div>
  );
};

export default ProjectGrid;
