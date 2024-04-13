import { Badge } from "@/components/ui/badge";
import { experiences } from "@/data/experiences";

const Page = () => {
  return (
    <main className="flex min-h-screen container flex-col py-24 md:pt-36 lg:px-64 gap-24">
      <section>
        <h1 className="text-4xl md:text-5xl font-semibold mb-10">Experience</h1>
        <div className="flex flex-col gap-16">
          {...experiences.map((exp) => (
            <div key={exp.jobTitle} className="flex flex-col w-full gap-8">
              <div className="flex flex-col gap-4">
                <div className="flex justify-between">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-semibold">
                      {exp.jobTitle}
                    </h2>
                    <h3 className="font-medium text-lg md:text-xl text-blue-500 max-w-[30ch]">
                      {exp.company}
                    </h3>
                  </div>
                  <time className="inline-flex items-center justify-center text-xs font-semibold uppercase w-44 h-fit px-3 py-2 ml-2 text-emerald-600 bg-emerald-100 rounded-full mt-1.5">
                    <p className="text-ellipsis">{exp.dateRange}</p>
                  </time>
                </div>
                <p className="text-slate-500 max-w-prose">{exp.description}</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {...exp.tags.map((tag) => (
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
          ))}
        </div>
      </section>
    </main>
  );
};

export default Page;
