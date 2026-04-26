"use client";

import Image from "next/image";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import CollapsibleSection from "@/components/CollapsibleSection";
import { useEffect, useRef, useState, type MouseEvent, type PointerEvent } from "react";
import {
  education,
  experiences,
  majorSkills,
  resumeIntro,
  timelineItems,
  timelineYears,
  type ResumeCardItem,
  type TimelineItem,
} from "./content";

const degreeTimelineItem: TimelineItem = {
  id: "timeline-bachelors-of-science-sfsu",
  jobTitle: "Bachelor's of Science",
  org: "San Francisco State University",
  above: true,
  hidden: false,
  start: ["January", 2020],
  end: ["December", 2026],
  summary:
    "Pursuing a computer science degree with a business administration minor at San Francisco State University.",
  resumeCardId: "bachelors-of-science-sfsu",
};

const timelineAccentStyles = [
  { bar: "#37C740", text: "#2f8f35" },
  { bar: "#60CDC1", text: "#2d8f86" },
  { bar: "#d95c5c", text: "#a53f3f" },
];

function getExperienceCardId(id: string) {
  return `resume-experience-${id}`;
}

function getEducationCardId(id: string) {
  return `resume-education-${id}`;
}

const monthStartFractions: Record<string, number> = {
  january: 0 / 6,
  february: 0 / 6,
  march: 1 / 6,
  april: 1 / 6,
  may: 2 / 6,
  june: 2 / 6,
  july: 3 / 6,
  august: 3 / 6,
  september: 4 / 6,
  october: 4 / 6,
  november: 5 / 6,
  december: 5 / 6,
};

function getTimelineBoundaryOffset(
  [month, year]: TimelineItem["start"],
  years: number[],
  yearCellWidthRem: number,
  boundary: "start" | "end",
) {
  const yearIndex = years.indexOf(year);
  const clampedYearIndex =
    yearIndex >= 0
      ? yearIndex
      : year > years[0]
        ? 0
        : Math.max(years.length - 1, 0);
  const monthFraction = monthStartFractions[month.toLowerCase()] ?? 0;
  const fractionWithinYear =
    boundary === "start" ? monthFraction : monthFraction + 1 / 6;
  const fraction = 1 - fractionWithinYear;
  return clampedYearIndex * yearCellWidthRem + fraction * yearCellWidthRem;
}

function getTimelineMarkerMetrics(
  item: TimelineItem,
  years: string[],
  yearCellWidthRem: number,
) {
  const numericYears = years.map(Number);
  const minimumSliceRem = yearCellWidthRem / 6;
  const left = getTimelineBoundaryOffset(
    item.start,
    numericYears,
    yearCellWidthRem,
    "start",
  );
  const right = getTimelineBoundaryOffset(
    item.end,
    numericYears,
    yearCellWidthRem,
    "end",
  );

  return {
    leftRem: Math.min(left, right),
    widthRem: Math.max(Math.abs(right - left), minimumSliceRem),
  };
}

function getTimelineMarkerStyle(
  item: TimelineItem,
  years: string[],
  yearCellWidthRem: number,
) {
  const { leftRem, widthRem } = getTimelineMarkerMetrics(
    item,
    years,
    yearCellWidthRem,
  );

  return {
    left: `${leftRem}rem`,
    width: `${widthRem}rem`,
  };
}

// Staggers markers across stacked lanes to reduce overlap when multiple items share similar years.
function getTimelineLane(index: number, laneCount: number) {
  return index % laneCount;
}

function formatTimelineRange(item: TimelineItem) {
  const [startMonth, startYear] = item.start;
  const [endMonth, endYear] = item.end;
  return `${startMonth} ${startYear} - ${endMonth} ${endYear}`;
}

function renderCardImage(item: ResumeCardItem) {
  if (item.hideImage) {
    return null;
  }

  if (!item.image) {
    return (
      <ImagePlaceholder aspectRatio="aspect-[3/1]" label="Background Image" />
    );
  }

  return (
    <div
      className={`relative overflow-hidden rounded-2xl ${item.imageAspect ?? "aspect-[3/1]"}`}
    >
      <Image
        src={item.image}
        alt={`${item.title} image`}
        fill
        className="object-cover"
        style={{ objectPosition: item.imagePosition ?? "center" }}
        sizes="(max-width: 768px) 100vw, 896px"
      />
    </div>
  );
}

function ResumeBulletList({ bullets }: { bullets: string[] }) {
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

function ResumeExperienceCard({
  item,
  cardId,
}: {
  item: ResumeCardItem;
  cardId: string;
}) {
  return (
    <article
      id={cardId}
      className="rounded-2xl bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
    >
      {renderCardImage(item)}

      <div className="mt-3">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-lg font-semibold">{item.title}</h3>
          <p className="shrink-0 text-sm text-neutral2">{item.dateRange}</p>
        </div>
        <p className="text-secondary font-medium">{item.company}</p>
        <div className="mb-3" />
        {item.bullets?.length ? (
          <ResumeBulletList bullets={item.bullets} />
        ) : (
          <p className="text-neutral1 leading-relaxed">{item.description}</p>
        )}
      </div>
    </article>
  );
}

function TimelineExpandedCard({
  item,
  accentStyle,
  onLearnMore,
}: {
  item: TimelineItem;
  accentStyle: { bar: string; text: string };
  onLearnMore: () => void;
}) {
  return (
    <div
      data-timeline-interactive="true"
      className="min-h-[13.5rem] w-full max-w-3xl rounded-2xl bg-white p-5 shadow-lg"
      style={{
        border: `2px solid ${accentStyle.bar}`,
      }}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <h3 className="truncate text-2xl font-bold text-dark">{item.org}</h3>
          <p className="mt-1 text-sm font-semibold uppercase tracking-[0.12em] text-neutral1">
            {item.jobTitle}
          </p>
          <p className="mt-2 text-sm text-neutral2">{formatTimelineRange(item)}</p>
        </div>
        <div className="h-16 w-16 shrink-0 rounded-xl bg-neutral3 ring-1 ring-neutral2" />
      </div>
      <p className="mt-4 text-sm leading-6 text-neutral1">{item.summary}</p>
      <button
        type="button"
        onClick={onLearnMore}
        className="mt-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em]"
        style={{ color: accentStyle.text }}
      >
        <span aria-hidden="true">→</span>
        <span>Learn more</span>
      </button>
    </div>
  );
}

export default function ResumePage() {
  const [visibleExperienceCount, setVisibleExperienceCount] = useState(3);
  const [openTimelineItemId, setOpenTimelineItemId] = useState<string | null>(null);
  const [yearCellWidthRem, setYearCellWidthRem] = useState(16);
  const loadMoreRef = useRef<HTMLDivElement | null>(null);
  const timelineViewportRef = useRef<HTMLDivElement | null>(null);
  const timelineScrollRef = useRef<HTMLDivElement | null>(null);
  const timelineDragStateRef = useRef<{
    pointerId: number | null;
    startX: number;
    startScrollLeft: number;
  }>({
    pointerId: null,
    startX: 0,
    startScrollLeft: 0,
  });
  const timelineDraggedRef = useRef(false);
  const [isTimelineDragging, setIsTimelineDragging] = useState(false);
  // Top lanes are for paid items, bottom lanes are for unpaid/non-paid items.
  const topTimelineLaneCount = 5;
  const bottomTimelineLaneCount = 3;
  // Reduce this for tighter vertical stacking, increase it for more separation between rows.
  const timelineLaneGapRem = 2.2;
  const timelineTrackWidth = `${timelineYears.length * yearCellWidthRem}rem`;
  const visibleEducation = education.filter((item) => !item.hidden);
  const visibleExperiences = experiences.filter((experience) => !experience.hidden);
  const visibleTimelineItems = timelineItems.filter((item) => !item.hidden);
  const allTimelineItems = [...visibleTimelineItems, degreeTimelineItem];
  const topTimelineItems = visibleTimelineItems.filter((item) => item.above);
  const bottomTimelineItems = visibleTimelineItems.filter((item) => !item.above);
  const openTimelineItem =
    allTimelineItems.find((item) => item.id === openTimelineItemId) ?? null;
  const openTimelineAccentStyle = openTimelineItem?.id === degreeTimelineItem.id
    ? { bar: "#6f2c91", text: "#6f2c91" }
    : openTimelineItem
      ? timelineAccentStyles[
          (openTimelineItem.above
            ? topTimelineItems.findIndex((item) => item.id === openTimelineItem.id)
            : bottomTimelineItems.findIndex((item) => item.id === openTimelineItem.id)) %
            timelineAccentStyles.length
        ]
    : null;

  useEffect(() => {
    function updateTimelineScale() {
      const viewportWidth = window.innerWidth;
      const containerWidth =
        timelineScrollRef.current?.clientWidth ??
        timelineViewportRef.current?.clientWidth ??
        viewportWidth;
      const desktopWidthBufferPx = 12;
      const desktopUsableWidthPx =
        containerWidth - (viewportWidth >= 768 ? desktopWidthBufferPx : 0);
      const availableWidthRem =
        desktopUsableWidthPx / 16 / timelineYears.length;

      // Desktop fits the actual visible container; mobile keeps a wider track so drag-scroll still matters.
      setYearCellWidthRem(
        viewportWidth >= 768 ? availableWidthRem : Math.max(12, availableWidthRem),
      );
    }

    updateTimelineScale();
    const resizeObserver = new ResizeObserver(updateTimelineScale);
    if (timelineViewportRef.current) {
      resizeObserver.observe(timelineViewportRef.current);
    }
    window.addEventListener("resize", updateTimelineScale);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateTimelineScale);
    };
  }, []);

  useEffect(() => {
    const node = loadMoreRef.current;

    if (!node || visibleExperienceCount >= visibleExperiences.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setVisibleExperienceCount((current) =>
            Math.min(current + 3, visibleExperiences.length),
          );
        }
      },
      { rootMargin: "160px 0px" },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [visibleExperienceCount, visibleExperiences.length]);

  function handleTimelinePointerDown(event: PointerEvent<HTMLDivElement>) {
    const container = timelineScrollRef.current;

    if (!container) {
      return;
    }

    timelineDragStateRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startScrollLeft: container.scrollLeft,
    };
    timelineDraggedRef.current = false;
    setIsTimelineDragging(true);
    container.setPointerCapture(event.pointerId);
  }

  function handleTimelinePointerMove(event: PointerEvent<HTMLDivElement>) {
    const container = timelineScrollRef.current;
    const dragState = timelineDragStateRef.current;

    if (!container || dragState.pointerId !== event.pointerId) {
      return;
    }

    const deltaX = event.clientX - dragState.startX;
    if (Math.abs(deltaX) > 4) {
      timelineDraggedRef.current = true;
    }
    container.scrollLeft = dragState.startScrollLeft - deltaX;
  }

  function handleTimelinePointerEnd(event: PointerEvent<HTMLDivElement>) {
    const container = timelineScrollRef.current;
    const dragState = timelineDragStateRef.current;

    if (!container || dragState.pointerId !== event.pointerId) {
      return;
    }

    if (container.hasPointerCapture(event.pointerId)) {
      container.releasePointerCapture(event.pointerId);
    }

    timelineDragStateRef.current.pointerId = null;
    timelineDraggedRef.current = false;
    setIsTimelineDragging(false);
  }

  function handleTimelineItemClick(itemId: string) {
    if (timelineDraggedRef.current) {
      return;
    }

    setOpenTimelineItemId((current) => (current === itemId ? null : itemId));
  }

  function handleTimelineLearnMore(item: TimelineItem) {
    if (!item.resumeCardId) {
      return;
    }

    const target =
      document.getElementById(getExperienceCardId(item.resumeCardId)) ??
      document.getElementById(getEducationCardId(item.resumeCardId));
    if (!target) {
      return;
    }

    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function handleResumeSectionClick(event: MouseEvent<HTMLElement>) {
    const target = event.target;

    if (!(target instanceof HTMLElement)) {
      return;
    }

    if (target.closest("[data-timeline-interactive='true']")) {
      return;
    }

    setOpenTimelineItemId(null);
  }

  return (
    <section className="site-surface-gradient py-20" onClickCapture={handleResumeSectionClick}>
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-4">Resume</h1>
        <p className="text-neutral1 text-lg mb-12">{resumeIntro}</p>

        <div className="mb-12">
          <div className="mb-6 flex items-end justify-between gap-4">
            
          </div>

          <div
            className={`${openTimelineItem && openTimelineAccentStyle ? "sticky top-6 z-10" : ""} mb-6 flex justify-center`}
          >
            {openTimelineItem && openTimelineAccentStyle ? (
              <TimelineExpandedCard
                item={openTimelineItem}
                accentStyle={openTimelineAccentStyle}
                onLearnMore={() => handleTimelineLearnMore(openTimelineItem)}
              />
            ) : (
              <div className="flex min-h-[13.5rem] w-full max-w-3xl items-center justify-center rounded-2xl border-2 border-dashed border-neutral2 bg-white/80 p-5 text-center text-sm font-medium uppercase tracking-[0.12em] text-neutral2">
                Click on the timeline to see details
              </div>
            )}
          </div>

          <div
            ref={timelineViewportRef}
            className="relative left-1/2 w-[min(100vw-2rem,140%)] -translate-x-1/2 px-6"
          >
            <div
              ref={timelineScrollRef}
              tabIndex={0}
              onPointerDown={handleTimelinePointerDown}
              onPointerMove={handleTimelinePointerMove}
              onPointerUp={handleTimelinePointerEnd}
              onPointerCancel={handleTimelinePointerEnd}
              onLostPointerCapture={() => setIsTimelineDragging(false)}
              className={`overflow-x-auto overflow-y-visible pt-6 outline-none [scrollbar-width:thin] ${isTimelineDragging ? "select-none md:cursor-auto cursor-grabbing" : "cursor-auto"}`}
            >
              <div
                className="mx-auto flex min-w-max flex-col items-center gap-5"
                style={{ width: timelineTrackWidth }}
              >
              <div
                className="relative w-full"
                style={{
                  height: `${topTimelineLaneCount * timelineLaneGapRem + 0.4}rem`,
                }}
              >
                {/* Upper marker lanes: timeline items marked `above: true` in content.ts. */}
                {topTimelineItems.map((item, index) => (
                  <button
                    key={item.id}
                    type="button"
                    data-timeline-interactive="true"
                    aria-label={`Placeholder logo marker for ${item.jobTitle}`}
                    onPointerDown={(event) => event.stopPropagation()}
                    onClick={() => handleTimelineItemClick(item.id)}
                    className="absolute top-0 h-3 rounded-full transition-opacity hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-primary"
                    style={{
                      ...getTimelineMarkerStyle(
                        item,
                        timelineYears,
                        yearCellWidthRem,
                      ),
                      backgroundColor:
                        timelineAccentStyles[index % timelineAccentStyles.length].bar,
                      top: `${getTimelineLane(index, topTimelineLaneCount) * timelineLaneGapRem}rem`,
                    }}
                  >
                    <span
                      className="absolute -top-5 left-0 truncate text-[10px] font-semibold uppercase tracking-[0.12em]"
                      style={{
                        color:
                          timelineAccentStyles[index % timelineAccentStyles.length].text,
                      }}
                    >
                      {item.jobTitle} | {item.org}
                    </span>
                  </button>
                ))}
              </div>

              <div className="relative h-6 w-full">
                {/* Degree bar: adjust the hardcoded date range or color here if you want it to span differently. */}
                <button
                  type="button"
                  data-timeline-interactive="true"
                  aria-label="Timeline marker for Bachelor's of Science"
                  onPointerDown={(event) => event.stopPropagation()}
                  onClick={() => handleTimelineItemClick(degreeTimelineItem.id)}
                  className="absolute top-0 flex h-3 items-center rounded-full bg-[#6f2c91] transition-opacity hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-[#6f2c91]"
                  style={getTimelineMarkerStyle(
                    degreeTimelineItem,
                    timelineYears,
                    yearCellWidthRem,
                  )}
                >
                  <span className="absolute -top-5 left-0 truncate text-[10px] font-semibold uppercase tracking-[0.12em] text-[#6f2c91]">
                    Bachelor&apos;s of Science | San Francisco State University
                  </span>
                </button>
              </div>

              <div className="flex w-full overflow-hidden rounded-full bg-primary text-white shadow-sm">
                {/* Year strip: each cell width is tied to yearCellWidthRem above. */}
                {timelineYears.map((year) => (
                  <div
                    key={year}
                    className="flex h-14 items-center justify-center border-r border-white/20 px-2 py-2 text-[clamp(1rem,2.2vw,1.75rem)] font-semibold tracking-[0.18em] last:border-r-0"
                    style={{ width: `${yearCellWidthRem}rem` }}
                  >
                    {year}
                  </div>
                ))}
              </div>

              <div
                className="relative w-full"
                style={{
                  height: `${bottomTimelineLaneCount * timelineLaneGapRem}rem`,
                }}
              >
                {/* Lower marker lanes: timeline items marked `above: false` in content.ts. */}
                {bottomTimelineItems.map((item, index) => (
                  <button
                    key={item.id}
                    type="button"
                    data-timeline-interactive="true"
                    aria-label={`Placeholder logo marker for ${item.jobTitle}`}
                    onPointerDown={(event) => event.stopPropagation()}
                    onClick={() => handleTimelineItemClick(item.id)}
                    className="absolute top-0 h-3 rounded-full transition-opacity hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-primary"
                    style={{
                      ...getTimelineMarkerStyle(
                        item,
                        timelineYears,
                        yearCellWidthRem,
                      ),
                      backgroundColor:
                        timelineAccentStyles[index % timelineAccentStyles.length].bar,
                      top: `${getTimelineLane(index, bottomTimelineLaneCount) * timelineLaneGapRem}rem`,
                    }}
                  >
                    <span
                      className="absolute -top-5 left-0 truncate text-[10px] font-semibold uppercase tracking-[0.12em]"
                      style={{
                        color:
                          timelineAccentStyles[index % timelineAccentStyles.length].text,
                      }}
                    >
                      {item.jobTitle} | {item.org}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
          </div>
        </div>

        <div className="mb-12 rounded-3xl bg-white p-6 shadow-sm md:p-8">
          <h2 className="mb-6 flex items-center gap-3 text-4xl font-bold text-secondary">
            Major Skills
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {majorSkills.map((skill) => (
              <div
                key={skill.title}
                className="rounded-2xl bg-neutral3/60 p-4 shadow-sm"
              >
                <h3 className="text-lg font-semibold mb-2">{skill.title}</h3>
                <p className="text-sm text-neutral1 leading-relaxed">
                  {skill.items}
                </p>
              </div>
            ))}
          </div>
        </div>

        <CollapsibleSection title="Education" defaultOpen={true}>
          <div className="mx-auto max-w-3xl rounded-2xl bg-neutral3/40 p-4 md:p-6">
            <div className="relative">
              <div className="absolute left-3.5 top-0 bottom-0 w-0.5 bg-neutral2 hidden md:block" />
              <div className="flex flex-col gap-6">
                {visibleEducation.map((edu, index) => (
                  <div
                    key={edu.id}
                    id={getEducationCardId(edu.id)}
                    className="relative md:pl-10"
                  >
                    <div className="rounded-2xl bg-white shadow-sm p-5 hover:shadow-md transition-shadow">
                      <div>
                        <div className="flex items-start justify-between gap-4">
                          <h3 className="text-lg font-semibold">{edu.title}</h3>
                          <p className="shrink-0 text-sm text-neutral2">
                            {edu.dateRange}
                          </p>
                        </div>
                        {edu.subtitle ? (
                          <h4 className="text-base font-semibold text-neutral1">
                            {edu.subtitle}
                          </h4>
                        ) : null}
                        <p className="text-secondary font-medium">
                          {edu.company}
                        </p>
                        <div className="mb-3" />
                        <p className="text-neutral1 leading-relaxed">
                          {edu.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CollapsibleSection>

        <div className="mt-12">
          <div className="mb-6 flex items-end justify-between gap-4">
            <h2 className="flex items-center gap-3 text-4xl font-bold text-secondary">
              Work Experience
            </h2>
            <p className="text-sm text-neutral2">Scroll to load more</p>
          </div>

          <div className="flex flex-col gap-6">
            {visibleExperiences.slice(0, visibleExperienceCount).map((exp, index) => (
              <ResumeExperienceCard
                key={exp.id}
                item={exp}
                cardId={getExperienceCardId(exp.id)}
              />
            ))}
          </div>

          {visibleExperienceCount < visibleExperiences.length ? (
            <div ref={loadMoreRef} className="py-8 text-center text-sm text-neutral2">
              Loading more experience...
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
