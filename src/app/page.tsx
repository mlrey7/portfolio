import { Icons } from "@/components/Icons";
import ProjectGrid from "@/components/ProjectGrid";
import Timeline from "@/components/Timeline";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-24 md:px-96 md:pt-48 gap-24">
      <section>
        <div className="flex w-full justify-between">
          <h1 className="text-3xl lg:text-5xl font-semibold leading-tight tracking-tight">
            Hello there, I{"'"}m Matthew Lemuel Rey.{" "}
            <br className="hidden lg:block" />
            Aspiring Front End <span className="text-blue-500">Engineer</span>,
            <br className="hidden lg:block" />
            and Graduating Student.
          </h1>
          <Image
            src={"/avatar2.jpg"}
            alt="matthew rey picture"
            width={160}
            height={160}
            className="h-40 w-40 rounded-full border-4 border-blue-500"
          />
        </div>

        <div className="max-w-prose flex flex-col gap-6 mt-16 text-slate-500">
          <p>
            I{"'"}m a 22-year-old graduating student at University of the
            Philippines Diliman studying Computer Science.
          </p>
          <p>
            I started dabbling in coding when I was 11 in order to make games
            with C++. However, my 11 year old mind could not comprehend pointers
            back then. Fortunately, I sticked with programming ever since,
            dabbled in a lot of programming languages and frameworks, but
            ultimately settled and honed my skills in web development with React
            and Javascript.
          </p>
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-3xl font-semibold">My Skills</h2>
        <div className="flex flex-wrap max-w-3xl gap-8 mt-4">
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
          <div className="flex gap-2 items-center">
            <Icons.javascript className="w-12 h-12" />
            <h6 className="font-bold">Javascript ES6</h6>
          </div>
          <div className="flex gap-2 items-center">
            <Icons.typescript className="w-12 h-12" />
            <h6 className="font-bold">Typescript</h6>
          </div>
          <div className="flex gap-2 items-center">
            <Icons.firebase className="w-12 h-12" />
            <h6 className="font-bold">Firebase</h6>
          </div>
          <div className="flex gap-2 items-center">
            <Icons.git className="w-12 h-12" />
            <h6 className="font-bold">Git</h6>
          </div>
          <div className="flex gap-2 items-center">
            <Icons.prisma className="w-12 h-12" />
            <h6 className="font-bold">Prisma</h6>
          </div>
          <div className="flex gap-2 items-center">
            <Icons.postgres className="w-12 h-12" />
            <h6 className="font-bold">PostgreSQL</h6>
          </div>
        </div>
      </section>
      <section>
        <h2 className="text-3xl font-semibold">My Projects</h2>
        <ProjectGrid />
      </section>
      <section>
        <h2 className="text-3xl font-semibold mb-10">My Experience</h2>
        <Timeline />
      </section>
    </main>
  );
}
