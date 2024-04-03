import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

const tags = [
  "React",
  "Next.js",
  "Tailwind CSS",
  "UI/UX Design",
  "Typescript",
  "Javascript",
  "Prisma",
  "Redis",
  "React Query",
  "Zod",
  "Next Auth",
];

const Page = () => {
  return (
    <main className="flex min-h-screen container flex-col py-24 md:pt-36 lg:px-64 gap-24">
      <section className="flex flex-col gap-10">
        <div className="flex justify-between">
          <h1 className="text-4xl md:text-5xl font-semibold">Zapper</h1>
          <div className="flex gap-4 ml-4">
            <Link
              href={"https://github.com/mlrey7/zapper"}
              className={cn(buttonVariants({ variant: "outline" }))}
            >
              See in github
              <FontAwesomeIcon icon={faGithub} className="w-6 h-6 ml-1" />
            </Link>
            <Link
              href={"https://zapper-nu.vercel.app/"}
              className={cn(buttonVariants(), "items-center")}
            >
              See live
              <ExternalLink className="w-6 h-6 ml-1" />
            </Link>
          </div>
        </div>
        <Image
          src={"/zapper.png"}
          alt={"zapper hero banner"}
          width={1000}
          height={1000}
          className="h-auto w-full object-cover rounded"
        />
        <div className="flex flex-wrap gap-2 max-w-prose">
          {...tags.map((tag) => (
            <Badge
              key={tag}
              variant={"outline"}
              className="border-blue-500 rounded-sm"
            >
              {tag}
            </Badge>
          ))}
        </div>
        <article>
          <p>
            A Twitter clone built with Next.js, Prisma and Redis. Implements a
            subset of Twitter{"'"}s features: following and unfollowing users,
            posting, replying, retweeting and more.
          </p>
        </article>
      </section>
    </main>
  );
};

export default Page;
