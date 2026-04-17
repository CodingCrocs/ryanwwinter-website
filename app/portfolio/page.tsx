import CollapsibleSection from "@/components/CollapsibleSection";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "Ryan Winter Directory",
    description:
      "A simple site meant to help show all folks named Ryan Winter across the world.",
    imageAlt: "E-Commerce Dashboard Preview",
    href: "#",
  },
  {
    title: "Natasha Oon Site",
    description:
      "A site meant to coagulate all media appearances and sponsors of an lpga player for increased visibility to new sponsors",
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

const events = [
  {
    title: "Gaming Gators Monthly Hybrids",
    description:
      "Produced recurring hybrid community events for 300+ attendees, coordinating programming, staff, and audience experience across in-person and online formats.",
    imageAlt: "Hybrid community event preview",
    href: "#",
  },
  {
    title: "Bay Area Collegiate Esports Discord",
    description:
      "Built a cross-campus event network connecting 10 institutions to support collaboration, promotion, and larger-scale collegiate esports programming.",
    imageAlt: "Collegiate esports network preview",
    href: "#",
  },
  {
    title: "TechLand Dying Light 2 Demo",
    description:
      "Supported a live demo activation for influencers and media, managing staffing and concurrent attendee experiences for a high-visibility launch moment.",
    imageAlt: "Live demo event preview",
    href: "#",
  },
];

const media = [
  {
    title: "Live Your Legacy Award Recepient Speech",
    company: "Braven",
    dateRange: "December 2024",
    description:
      "Received the Live Your Legacy Award at Braven's inaugural term closing ceremony, and spoke about my own legacy.",
    embedVid: "https://www.youtube.com/embed/Q5Pc5WFRGsA?si=LKul7ak5DOrejfU7",
  },
  {
    title: "KQED's the Forum",
    company: "KQED",
    dateRange: "July 2022",
    description:
      "represented local collegiate Esports on nationally distributed radio show",
    embedSpot:
      "https://open.spotify.com/embed/episode/2DVPUb88vGPqtfSyIUDShp?utm_source=generator&theme=0&t=0",
  },
  {
    title: "Gaming Gators First In-Person Meeting | Fall 2022",
    company: "Gaming Gators @ SFSU",
    dateRange: "August 2022",
    description: "led largest student meeting post pandemic",
    embedVid: "https://www.youtube.com/embed/9sKEsEAnIHQ?si=iVvXMA859O9OM6Gg",
  },
];

function ProjectGrid({
  items,
}: {
  items: {
    title: string;
    description: string;
    imageAlt: string;
    href?: string;
  }[];
}) {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {items.map((item) => (
        <ProjectCard
          key={item.title}
          title={item.title}
          description={item.description}
          imageAlt={item.imageAlt}
          href={item.href}
        />
      ))}
    </div>
  );
}

export default function PortfolioPage() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-4">Portfolio</h1>
        <p className="text-neutral1 text-lg mb-12">
          A selection of projects, event work, and media appearances.
        </p>

        <CollapsibleSection title="Software Projects" defaultOpen={false}>
          <ProjectGrid items={projects} />
        </CollapsibleSection>

        <CollapsibleSection title="Events Portfolio" defaultOpen={false}>
          <ProjectGrid items={events} />
        </CollapsibleSection>

        <CollapsibleSection title="Media Appearances" defaultOpen={false}>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-neutral2 hidden md:block" />
            <div className="flex flex-col gap-8">
              {media.map((item, index) => (
                <div key={index} className="relative md:pl-12">
                  <div className="absolute left-2.5 top-8 w-3 h-3 rounded-full bg-neutral2 border-2 border-white hidden md:block" />

                  <div className="rounded-2xl bg-white shadow-sm p-6 hover:shadow-md transition-shadow">
                    {item.embedSpot ? (
                      <iframe
                        style={{ borderRadius: "12px" }}
                        src={item.embedSpot}
                        width="100%"
                        height="152"
                        frameBorder="0"
                        allowFullScreen
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                      />
                    ) : item.embedVid ? (
                      <iframe
                        style={{ borderRadius: "12px" }}
                        src={item.embedVid}
                        width="100%"
                        height="420"
                        frameBorder="0"
                        allowFullScreen
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                      />
                    ) : (
                      <ImagePlaceholder
                        aspectRatio="aspect-[3/1]"
                        label="Background Image"
                      />
                    )}

                    <div className="mt-4">
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                      <p className="text-secondary font-medium">
                        {item.company}
                      </p>
                      <p className="text-sm text-neutral2 mb-3">
                        {item.dateRange}
                      </p>
                      <p className="text-neutral1 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CollapsibleSection>
      </div>
    </section>
  );
}
