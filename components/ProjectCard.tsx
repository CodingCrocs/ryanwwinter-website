import ImagePlaceholder from "./ImagePlaceholder";

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
    <div className="rounded-2xl bg-white shadow-sm hover:shadow-lg transition-shadow overflow-hidden">
      <ImagePlaceholder aspectRatio="aspect-video" label={imageAlt} />
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-neutral1 text-sm mb-4">{description}</p>
        {href && (
          <a
            href={href}
            className="inline-block rounded-full bg-secondary px-6 py-2.5 text-white font-medium shadow-sm transition-all duration-200 hover:bg-secondary/90 hover:shadow-md"
          >
            View Project
          </a>
        )}
      </div>
    </div>
  );
}
