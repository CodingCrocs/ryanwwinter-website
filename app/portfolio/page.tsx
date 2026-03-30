import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "E-Commerce Dashboard",
    description:
      "A modern dashboard for managing online store inventory, orders, and analytics with real-time data visualization.",
    imageAlt: "E-Commerce Dashboard Preview",
    href: "#",
  },
  {
    title: "Weather App",
    description:
      "A clean, responsive weather application that displays current conditions and forecasts using a public API.",
    imageAlt: "Weather App Preview",
    href: "#",
  },
  {
    title: "Task Manager",
    description:
      "A productivity tool for organizing tasks with drag-and-drop, tags, and collaboration features.",
    imageAlt: "Task Manager Preview",
    href: "#",
  },
  {
    title: "Photography Portfolio",
    description:
      "A gallery-style portfolio site with lightbox viewing, category filtering, and responsive masonry layout.",
    imageAlt: "Photography Portfolio Preview",
    href: "#",
  },
];

export default function PortfolioPage() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-4">Portfolio</h1>
        <p className="text-neutral1 text-lg mb-12">
          A selection of projects and experiments I&apos;ve been working on.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              imageAlt={project.imageAlt}
              href={project.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
