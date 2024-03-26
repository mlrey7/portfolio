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
    title: "Zapper",
    description:
      "A Twitter clone built with Next.js, Prisma and Redis. Implements a subset of Twitter's features: following and unfollowing users, posting, replying, retweeting and more.",
    link: "/projects/zapper",
  },
];

const ProjectGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 mt-10 gap-16">
      {...projects.map((data) => <ProjectContent key={data.title} {...data} />)}
    </div>
  );
};

export default ProjectGrid;
