import React from "react";
import ProjectContent from "./ProjectContent";

const projects = [
  {
    imageSrc: "/breadit.png",
    title: "Breadit",
    description:
      "A Reddit clone built with Next.js, Prisma and Redis. Implements a subset of Reddit's features: joining and leaving subreddits, posts, upvotes and downvotes.",
    link: "/projects/breadit",
  },
  {
    imageSrc: "/breadit.png",
    title: "Breadit",
    description:
      "A Reddit clone built with Next.js, Prisma and Redis. Implements a subset of Reddit's features: joining and leaving subreddits, posts, upvotes and downvotes.",
    link: "/projects/breadit",
  },
];

const ProjectGrid = () => {
  return (
    <div className="grid grid-cols-2 mt-10 gap-16">
      {...projects.map((data) => <ProjectContent key={data.title} {...data} />)}
    </div>
  );
};

export default ProjectGrid;
