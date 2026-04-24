import Image from "next/image";
import ImagePlaceholder from "./ImagePlaceholder";

interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  imageAlt: string;
  href?: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
  imageAlt: string;
  href?: string;
}

export default function ProjectCard({
  title,
  description,
  imageAlt,
  href,
}: ProjectCardProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#645d5d] shadow-sm transition-shadow hover:shadow-lg">
      <ImagePlaceholder aspectRatio="aspect-video" label={imageAlt} />
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-neutral1 text-sm mb-4">{description}</p>
        {href && (
          <a
            href={href}
            className="inline-block rounded-full bg-secondary px-6 py-2.5 text-[#1f1a1a] font-medium shadow-sm transition-all duration-200 hover:bg-secondary/90 hover:shadow-md"
          >
            View Project
          </a>
        )}
      </div>
    </div>
  );
}
