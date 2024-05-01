import AnimatedHeader from "@/components/AnimatedHeader";
import { Icons } from "@/components/Icons";
import ProjectGrid from "@/components/ProjectGrid";
import Timeline from "@/components/Timeline";
import { buttonVariants } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col pt-24 md:pt-48">
      <section className="pb-6 sm:pb-12 container md:px-36">
        <div className="flex flex-col-reverse sm:flex-row w-full sm:justify-between items-center gap-4 sm:gap-0">
          <h1 className="text-4xl lg:text-5xl font-semibold leading-tight tracking-tight text-center sm:text-start">
            Hello there, I{"'"}m Matthew Lemuel Rey. <br />
            Aspiring <AnimatedHeader />,
            <br />
            and CS Graduate.
          </h1>
          <Image
            src={"/avatar2.jpg"}
            alt="matthew rey picture"
            width={160}
            height={160}
            className="h-32 w-32 lg:h-40 lg:w-40 rounded-full border-4 border-blue-500 ml-4"
          />
        </div>

        <div className="max-w-prose flex flex-col gap-4 mt-8 text-slate-500">
          <div>
            <p>
              I{"'"}m a 22-year-old fresh Computer Science graduate from the
              University of the Philippines Diliman.
            </p>
            <p className="mt-2">
              I started dabbling in coding when I was 11 in order to make games
              with C++. However, my 11 year old mind could not comprehend
              pointers back then. Fortunately, I sticked with programming ever
              since, dabbled in a lot of programming languages and frameworks,
              but ultimately settled and honed my skills in web development with
              React and Javascript.
            </p>
          </div>

          <a
            href="mailto:matthewlemuelr@gmail.com"
            className={buttonVariants({
              variant: "default",
              className: "w-max px-6",
            })}
          >
            Contact me
            <FontAwesomeIcon
              icon={faEnvelope}
              className="w-6 h-6 text-white ml-2"
            />
          </a>
          <div className="flex gap-4">
            <Link href={"https://github.com/mlrey7"}>
              <FontAwesomeIcon
                icon={faGithub}
                className="w-6 h-6 text-black hover:text-blue-500"
              />
            </Link>
            <Link
              href={"https://www.linkedin.com/in/matthew-lemuel-rey-714714276/"}
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className="w-6 h-6 text-black hover:text-blue-500"
              />
            </Link>
            <a href="mailto:matthewlemuelr@gmail.com">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="w-6 h-6 text-black hover:text-blue-500"
              />
            </a>
          </div>
        </div>
      </section>
      <section className="bg-slate-100 py-6 sm:py-12">
        <div className="flex flex-col gap-4 sm:gap-8 container md:px-36">
          <h2 className="text-3xl font-semibold">My Skills</h2>
          <div className="flex flex-wrap max-w-4xl gap-4">
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
            <div className="flex gap-2 items-center -ml-1">
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
        </div>
      </section>
      <section className="py-6 sm:py-12 container md:px-36">
        <h2 className="text-3xl font-semibold mb-4 sm:mb-8">My Projects</h2>
        <ProjectGrid />
      </section>
      <section className="bg-slate-100 py-6 pb-12 sm:py-12 sm:pb-24">
        <div className="container md:px-36">
          <h2 className="text-3xl font-semibold mb-4 sm:mb-8">My Experience</h2>
          <Timeline />
        </div>
      </section>
    </main>
  );
}
