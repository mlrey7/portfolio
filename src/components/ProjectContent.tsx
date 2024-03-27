import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface ProjectContentData {
  imageSrc: string;
  title: string;
  description: string;
  link: string;
}

const ProjectContent = ({
  imageSrc,
  title,
  description,
  link,
}: ProjectContentData) => {
  return (
    <div className="flex flex-col">
      <Link className="relative" href={link}>
        <Image
          src={imageSrc}
          alt={title + " image"}
          width={1000}
          height={1000}
          className="h-auto w-full object-cover rounded"
        />
        <div className="bg-blue-500 h-full w-full absolute ease-in duration-200 opacity-0 hover:opacity-80 inset-0 flex items-center justify-center rounded">
          <h6 className="text-white font-semibold text-xl">Read more</h6>
        </div>
      </Link>

      <div className="mt-6 flex flex-col gap-4">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <p className="w-3/4 text-slate-500">{description}</p>
        <div>
          <Link
            href={link}
            className={cn(
              "font-semibold tracking-tight hover:bg-accent hover:text-accent-foreground"
            )}
          >
            VIEW PROJECT {">"}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectContent;
