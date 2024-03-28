import { projects } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <main className="flex min-h-screen container flex-col py-24 md:pt-36 lg:px-64 gap-24">
      <section>
        <h1 className="text-4xl md:text-5xl font-semibold mb-10">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-16">
          {...projects.map((project) => (
            <div key={project.title} className="flex flex-col gap-4">
              <Link className="relative" href={project.link}>
                <Image
                  src={project.imageSrc}
                  alt={project.title + " image"}
                  width={1000}
                  height={1000}
                  className="h-auto w-full object-cover rounded"
                />
                <div className="bg-blue-500 h-full w-full absolute ease-in duration-200 opacity-0 hover:opacity-80 inset-0 flex items-center justify-center rounded">
                  <h6 className="text-white font-semibold text-xl">
                    Read more
                  </h6>
                </div>
              </Link>

              <h2 className="text-2xl font-semibold">{project.title}</h2>
              <p className="w-3/4 text-slate-500 max-w-prose">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Page;
