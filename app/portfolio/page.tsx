"use client";

import Image from "next/image";
import { useState } from "react";
import CollapsibleSection from "@/components/CollapsibleSection";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import ProjectCard from "@/components/ProjectCard";
import {
  events,
  media,
  portfolioIntro,
  projects,
  type ProjectItem,
} from "./content";

function ProjectGrid({
  items,
}: {
  items: ProjectItem[];
}) {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {items.map((item) => (
        <ProjectCard
          key={item.title}
          title={item.title}
          description={item.description}
          image={item.image}
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
    <section className="site-surface-gradient py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-4">Portfolio</h1>
        <p className="text-neutral1 text-lg mb-12">{portfolioIntro}</p>

        <CollapsibleSection title="Software Projects" defaultOpen={false}>
          <ProjectGrid items={projects} />
        </CollapsibleSection>

        <CollapsibleSection title="Events Portfolio" defaultOpen={false}>
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {events.map((event) => (
              <div
                key={event.title}
                className="rounded-2xl bg-white shadow-sm p-6 hover:shadow-md transition-shadow"
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

                  <div className="rounded-2xl bg-white shadow-sm p-6 hover:shadow-md transition-shadow">
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
