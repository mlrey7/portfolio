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
      <Image
        src={imageSrc}
        width={1000}
        height={1000}
        alt="breadit"
        className="h-auto w-full object-cover rounded"
      />
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
