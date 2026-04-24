"use client";

import Image from "next/image";
import { useState } from "react";
import CollapsibleSection from "@/components/CollapsibleSection";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "This Website!",
    description:
      "A simple site meant to showcase my varied experiences and applications, using Next.JS with React and JSX Libraries.",
    imageAlt: "Resume Website Preview",
    href: "https://www.ryanwwinter.com/",
  },
  {
    title: "Natasha Oon Site",
    description:
      "A site meant to coagulate all media appearances and sponsors of an lpga player for increased visibility to new sponsors",
    imageAlt: "Weather App Preview",
    href: "#",
  },
  {
    title: "Ryan Winter Directory",
    description: "A website for all Ryan Winters to be found across the world!",
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

type EventCardItem = {
  title: string;
  company: string;
  eventType: string;
  dateRange: string;
  description: string;
  bullets?: string[];
  image?: string;
  imagePosition?: string;
  imageAlt: string;
};

const events: EventCardItem[] = [
  {
    title: "First Friday: A Train Adventure",
    company: "CuriOdyssey",
    eventType: "Special Event",
    dateRange: "September 2025",
    description: "",
    image: "/events/train-night.jpg",
    imageAlt: "Hybrid community event preview",
    bullets: [
      "Brainstormed, planned, and executed the largest scale collaboration in CuriOdyssey's history, combining Transit, Science and Wildlife for an engaging visitor experience.",
      "Created new pathways for community engagement with organizations like Caltrain and CA High Speed Rail",
      "Coordinated end-to-end logistics, from Food Vendors, Facilities, Staff and Volunteer Allocation, Exhibits, and more.",
      "Set tone for high-quality events hosted by CuriOdyssey and created examples for future partners",
    ],
  },
  {
    title: "Gaming Gators First In-Person Meeting",
    eventType: "Special Event",
    company: "Gaming Gators @ SFSU",
    dateRange: "Fall 2022",
    description: "",
    image: "/events/ggsfsu-first-meeting.jpg",
    imageAlt: "Collegiate esports meeting preview",
    bullets: [
      "Planned and Advertised largest attendance club meeting post-pandemic",
      "Acted as main speaker, engaging audience",
      "Created engaging presentation content with clear CTAs",
      "M",
      "Extended the reach of local collegiate esports by making discovery and collaboration easier across the Bay Area.",
    ],
  },
  {
    title: "CuriOdyssey First Fridays",
    company: "CuriOdyssey",
    eventType: "Recurring",
    dateRange: " September 2024 - Present",
    description: "",
    imageAlt: "Community event preview",
    bullets: [
      "Produced recurring evening events designed to drive attendance, revenue, and guest engagement in a museum setting.",
      "Coordinated programming, staffing, and on-site execution across departments to keep the visitor experience consistent from planning through teardown.",
      "Bridged technological gaps to increase perceived value of attendance",
      "Led Asset development through photography for better brand awareness",
      "Balanced entertainment, logistics, and venue operations while adapting quickly to changing attendance patterns and live event needs.",
      "Helped shape a repeatable event format that could support both operational goals and a stronger public-facing brand presence.",
    ],
  },
  {
    title: "Dying Light 2 Influencer and Media Preview",
    company: "TechLand",
    eventType: "Special Event",
    dateRange: "November 2021",
    image: "/resume/ryandyinglight.JPEG",
    imagePosition: "center 35%",
    description:
      "Coordinated staffing for demonstration featuring multiple gaming influencers and media outlets totaling over 15 million views, managing concurrent user experiences in a shared environment",
    imageAlt: "Live demo event preview",
  },
  {
    title: "Gaming Gators",
    company: "Gaming Gators @ SFSU",
    eventType: "",
    dateRange: "2021 - 2023",
    description: "",
    imageAlt: "Collegiate esports meetings preview",
    bullets: [
      "Built a collaborative network connecting 10 institutions including SJSU, Cal, and Stanford.",
      "Created a stronger foundation for cross-campus promotions, shared programming, and larger competitive or community-focused events.",
      "Aligned student organizations across different schools around communication standards, outreach, and event coordination.",
      "Extended the reach of local collegiate esports by making discovery and collaboration easier across the Bay Area.",
    ],
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

function EventBulletList({ bullets }: { bullets: string[] }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const visibleBullets = isExpanded ? bullets : bullets.slice(0, 3);

  return (
    <div className="space-y-3">
      <ul className="list-disc pl-5 space-y-2 text-neutral1">
        {visibleBullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
      {bullets.length > 3 ? (
        <button
          type="button"
          onClick={() => setIsExpanded((current) => !current)}
          className="text-sm font-medium text-secondary transition-opacity hover:opacity-80"
        >
          {isExpanded ? "Show less" : "Read more"}
        </button>
      ) : null}
    </div>
  );
}

export default function PortfolioPage() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-4">Portfolio</h1>
        <p className="text-neutral1 text-lg mb-12">
          A selection of my coding projects, events I've organized, and some of
          my speeches!
        </p>

        <CollapsibleSection title="Software Projects" defaultOpen={false}>
          <ProjectGrid items={projects} />
        </CollapsibleSection>

        <CollapsibleSection title="Events Portfolio" defaultOpen={false}>
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {events.map((event) => (
              <div
                key={event.title}
                className="rounded-2xl border border-white/10 bg-[#645d5d] p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                {event.image ? (
                  <div className="relative aspect-[3/1] overflow-hidden rounded-2xl bg-neutral2">
                    <Image
                      src={event.image}
                      alt={event.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      className="object-cover"
                      style={{ objectPosition: event.imagePosition ?? "center" }}
                    />
                  </div>
                ) : (
                  <ImagePlaceholder
                    aspectRatio="aspect-[3/1]"
                    label={event.imageAlt}
                  />
                )}

                <div className="mt-4">
                  <h3 className="text-xl font-semibold">{event.title}</h3>
                  <p className="text-neutral1 font-medium">{event.eventType}</p>
                  <p className="text-secondary font-medium">{event.company}</p>
                  
                  <p className="text-sm text-neutral2 mb-3">
                    {event.dateRange}
                  </p>
                  {event.bullets?.length ? (
                    <EventBulletList bullets={event.bullets} />
                  ) : (
                    <p className="text-neutral1 leading-relaxed">
                      {event.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CollapsibleSection>

        <CollapsibleSection
          title="Media Appearances & Speaking Engagements"
          defaultOpen={false}
        >
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-neutral2 hidden md:block" />
            <div className="flex flex-col gap-8">
              {media.map((item, index) => (
                <div key={index} className="relative md:pl-12">
                  <div className="absolute left-2.5 top-8 w-3 h-3 rounded-full bg-neutral2 border-2 border-white hidden md:block" />

                  <div className="rounded-2xl border border-white/10 bg-[#645d5d] p-6 shadow-sm transition-shadow hover:shadow-md">
                    {/* When you curate media visuals, replace these embeds or the fallback
                        with your preferred thumbnail / still image treatment. */}
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
