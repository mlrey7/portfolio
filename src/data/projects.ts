interface ProjectsType {
  imageSrc: string;
  title: string;
  description: string;
  link: string;
}

export const projects: Array<ProjectsType> = [
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
