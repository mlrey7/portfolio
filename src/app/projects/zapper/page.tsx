import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { ExternalLink, Zap } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Icons } from "@/components/Icons";

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
    <main className="flex min-h-screen container flex-col py-24 md:pt-36 lg:px-36">
      <section className="flex flex-col gap-16">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
            <div className="flex animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-semibold">Zapper</h1>
              <Zap className="w-[2.25rem] h-[2.25rem] md:w-[3rem] md:h-[3rem] ml-2 hover:animate-spin transition animate-none" />
            </div>

            <div className="flex gap-4 sm:ml-4">
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
          <p className="text-slate-500 max-w-prose">
            Zapper is a full-stack React Web Application built on top of the
            Next.js framework that replicates Twitter{"'"}s features. This
            social media application has support for posting, retweeting,
            quoting posts, liking and replying as well as a home feed. The UI
            design is heavily based on the Twitter so that I can focus on the
            implementation of the features. Due to its highly dynamic nature,
            Zapper required a lot of front end and back end integration in order
            for it to work.
          </p>
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
        </div>

        <Image
          src={"/home.png"}
          alt={"zapper home"}
          width={2000}
          height={0}
          className="h-auto w-full object-cover rounded"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 80vw"
        />
        <article className="flex flex-col gap-16">
          <div className="flex flex-col">
            <h2 className="animate-fade-in text-2xl font-bold">
              Project Goals
            </h2>
            <p className="max-w-prose text-slate-500 mt-4">
              I started building Zapper in order to teach myself how to code and
              reason about complex dynamic web apps. The goal is to integrate a
              lot of necessities for a modern web app in real life such as
              authentication, database, caching, server side rendering, UI/UX
              and responsive design.
            </p>
          </div>
          <div className="flex flex-col md:flex-row-reverse gap-8 md:gap-0">
            <div className="flex flex-col">
              <h2 className="animate-fade-in text-2xl font-bold">
                Frontend Design
              </h2>
              <p className="max-w-prose text-slate-500 mt-4">
                Using React as the UI library of choice was a no brainer, as it
                is an industry standard and battle tested for a highly dynamic
                web app such as a social media application (e.g. Facebook).
                However, React alone does not solve web app problems such as
                routing, fetching and authentication. I thought about using
                React with libraries such as react router dom and react query in
                order to solve this.
              </p>
              <p className="max-w-prose text-slate-500 mt-4">
                But Next.js as a full-stack framework on top of React was an
                appealing choice as it had already integrated solutions for
                routing, fetching, and authentication which saves time and
                complexity than hand rolling your own solution. It also features
                paradigms such as Server Side Rendering(SSR) and server
                components which I thought were very handy in reducing load
                times and state management respectively.
              </p>
            </div>
            <div className="items-center flex md:w-1/2 justify-center">
              <div className="flex flex-col xs:flex-row md:flex-col gap-8 mt-4">
                <div className="flex gap-2 items-center">
                  <Icons.react className="w-12 h-12" />
                  <h6 className="font-bold">React</h6>
                </div>
                <div className="flex gap-2 items-center">
                  <Icons.nextjs className="w-12 h-12" />
                  <h6 className="font-bold">Next.js</h6>
                </div>
                <div className="flex gap-2 items-center">
                  <Icons.tailwind className="w-12 h-12" />
                  <h6 className="font-bold">Tailwind CSS</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <Image
              src={"/zapper_wireframe.png"}
              alt={"zapper wireframe"}
              width={2000}
              height={1000}
              className="h-auto w-full object-cover rounded"
            />
            <Image
              src={"/zapper_routing.png"}
              alt={"zapper routing"}
              width={2000}
              height={1000}
              className="h-auto w-full object-cover rounded"
            />
          </div>
          <div className="flex flex-col w-full md:items-center">
            <h2 className="animate-fade-in text-2xl font-bold">
              CSS Framework and Design
            </h2>
            <p className="max-w-prose text-slate-500 mt-4 md:text-center">
              For the CSS frameworks, I chose to use Tailwind CSS for its
              simplicity as I appreciate the colocation of CSS and JSX in one
              file which reduces context switching and allows me to just focus
              on writing the CSS needed to style my components and layouts.
              However for components with predefined behaviors such as dialogs,
              navbar or toasts I utilized the shadcn/ui component library as it
              provide these components and their behaviors out of the box but is
              built on top of Tailwind as well which makes integrating them
              quite easy.
            </p>
          </div>
          <div className="columns-1 md:columns-2 gap-4 space-y-4">
            <Image
              src={"/splash.png"}
              alt={"zapper splash"}
              width={0}
              height={0}
              className="h-min w-full rounded"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            />
            <Image
              src={"/user.png"}
              alt={"zapper user"}
              width={0}
              height={0}
              className="h-min w-full rounded"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            />
            <Image
              src={"/compose.png"}
              alt={"zapper compose"}
              width={0}
              height={0}
              className="h-min w-full rounded"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            />
          </div>
          <div className="grid lg:grid-flow-col grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="flex flex-col">
              <h2 className="animate-fade-in text-2xl font-bold">
                Backend Design
              </h2>
              <p className="max-w-prose text-slate-500 mt-4">
                As Next.js was already a fullstack framework built on top of
                Node.js it already provided a way to deploy API routes through
                its Route Handlers feature, so there was no need for me to
                deploy a separate backend server such as using Express.js.
                However, I still needed a database to store my data. I chose
                PostgreSQL as I have some experience working with it before and
                I also liked its structured paradigm compared to something like
                a NoSQL db such Firebase or MongoDB as you needed more database
                experience in order to properly define your own database
                structure in those NoSQL paradigms.
              </p>
              <p className="max-w-prose text-slate-500 mt-4">
                In order to simplify my backend, I also integrated Prisma as my
                ORM because it provides both simplicity and typesafety in my
                database queries. One downside of using Prisma is that the
                queries it generates are typically less efficient than
                handwritten ones, but in this case on a small scale app, I
                judged that to be a non-factor compared to the development time
                I save. Finally, I added a Redis in memory cache to speed up my
                queries and to split up my load between Redis and the Postgres
                database.
              </p>
            </div>
            <Image
              src={"/system.png"}
              alt={"zapper system"}
              width={2000}
              height={1000}
              className="h-auto w-full object-cover rounded self-center"
            />
          </div>
          <div className="flex flex-row-reverse">
            <div className="flex flex-col">
              <h2 className="animate-fade-in text-2xl font-bold">
                Lessons Learned
              </h2>
              <p className="max-w-prose text-slate-500 mt-4">
                I learned a lot on this project such as complex routing(dynamic,
                parallel, intercepting) and proper database querying. One thing
                that stood out though is that I learned how hard is it to
                properly cache and invalidate the cache on my fetches and
                queries. Also, my initial database schema was not complete, so I
                had to refine and migrate my schema as I worked on the project.
                If I had to start all over again, I would increase my time spent
                on the initial planning and modeling as it{"'"}s gonna save a
                lot headaches later on in the project{"'"}s development.
              </p>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
};

export default Page;
