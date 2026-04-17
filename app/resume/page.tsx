"use client";

import Image from "next/image";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import CollapsibleSection from "@/components/CollapsibleSection";
import { useState } from "react";

type ResumeCardItem = {
  title: string;
  company: string;
  dateRange: string;
  description: string;
  bullets?: string[];
  location?: string;
  image?: string;
  imagePosition?: string;
  imageAspect?: string;
};

const majorSkills = [
  {
    title: "Event & Production Technology",
    items:
      "OBS, NDI workflows, Dante audio networking, hybrid analog/digital AV systems",
  },
  {
    title: "Digital & Web Marketing Tools",
    items:
      "Photoshop, Lightroom Classic, Premiere Pro, InDesign, Canva, WordPress",
  },
  {
    title: "Data & Analytics",
    items: "Python, MySQL, MongoDB, Microsoft Excel, Google Sheets",
  },
  {
    title: "Programming Languages",
    items: " C++, Java, HTML, CSS, JavaScript, Python, Git",
  },
  {
    title: "AI Programming Tools",
    items:
      "Devin, Windsurf, OpenAI Codex, Claude Code, Gemini, ChatGPT, Claude",
  },
  {
    title: "Information Technology",
    items:
      "Windows and Mac Troubleshooting, Desktop PC Configuration, Hardware Repairs",
  },
];

const experiences: ResumeCardItem[] = [
  {
    title: "Events Assistant",
    company: "CuriOdyssey",
    dateRange: "Fall 2024 — Present",
    location: "San Mateo, CA",
    description: "",
    bullets: [
      "Directly oversaw a high-impact revenue stream within Facility Rentals, achieving a 30.6% YoY growth from 2024 to 2025, outpacing the overall department's 6.7% YoY growth.",
      "Drove end-to-end delivery of facility rental experiences, from pre-sales discovery and scope definition to cross-functional execution, risk mitigation, and post-event performance analysis.",
      "Pioneered new collaborations with local organizations and vendors for novel visitor experiences",
      "Reinvented department's digital presence, using updated visuals, photography, and client communication to drive positive customer experiences and utilize word-of-mouth to increase sales",
      "Personally led and executed over 200 bespoke events, ranging from guest counts of 20 to over 1000, navigating Audio/Visual, IT, Facilities, and other crises on a weekly basis",
      "Led Audio/Visual execution for a wide range of events, utilizing analog and digital sound systems, Dante architectures, NDI, OBS, etc, while minimizing investment in new equipment, limiting department expenditure",
    ],
  },
  {
    title: "Overwatch 2 Esports Course Instructor",
    image: "/ryaninriyadh.JPEG",
    imagePosition: "center 65%",
    company: "Gen. G Esports",
    dateRange: "Jun 2023 - Sept 2023",
    location: "Riyadh, Saudi Arabia",
    description: "",
    bullets: [
      "Created 16+ Weeks of new advanced course content focused on systematic problem-solving and in-depth game mechanics.",
      "Collaborated with international partners and conducted extensive data analysis to integrate diverse strategies and solutions to improve service offerings.",
      "Curated 70+ pages of reports to supervising agencies about the program's successes including student retention, technology improvements, and the incorporation of online courses into the academy.",
    ],
  },
  {
    title: "President and Events Manager",
    image:"/ggsfsu-guildhouse.JPG",
    company: "Gaming Gators @ SFSU",
    dateRange: "Apr 2021 - Apr 2023",
    description: "",
    bullets: [
      "Overhauled social media and drove at least 200% growth across Instagram, Twitter, and Discord.",
      "Expanded Discord from 500 members to more than 2,000 while maintaining roughly 50% active membership.",
      "Led weekly meetings for a diverse team of 40+ officers across team management, event organization, and content production.",
      "Hosted monthly hybrid meetings for 300+ attendees.",
      "Coordinated events from ideation through execution and post-event analysis.",
      "Created BACED, the Bay Area Collegiate Esports Discord, to connect 10 institutions including SJSU, Cal, and Stanford.",
      "Built sponsor relationships with companies including Red Bull, NRG, and Haunt.",
      "Supported inclusivity in gaming by helping establish women-led teams and departments.",
    ],
  },
  {
    title: "Dying Light 2 Demo Crew Member",
    image: "/ryandyinglight.JPEG",
    imagePosition: "center 35%",
    company: "TechLand",
    dateRange: "Nov. 2021",
    description:
      "Coordinated staffing for demonstration featuring multiple gaming influencers and media outlets totaling over 15 million views, managing concurrent user experiences in a shared environment",
  },
  {
    title: "Overwatch Team Manager, Captain, Head Coach",
    image: "/GGSFSU-Fresno.JPEG",
    imagePosition: "center 50%",
    company: "TechLand",
    dateRange: "Nov. 2021",
    description:
      "Coordinated staffing for demonstration featuring multiple gaming influencers and media outlets totaling over 15 million views, managing concurrent user experiences in a shared environment",
  },
  {
    title: "Computer Science Mentor",
    company: "SFSU",
    dateRange: "Aug 2021 - Jan 2022",
    description:
      "Monitored and guided students through complex programming concepts.",
  },
];

const education: ResumeCardItem[] = [
  {
    title: "Bachelor's of Science",
    company: "San Francisco State University",
    dateRange: "2020-Present",
    description: "received deans list spring 2024",
  },
  {
    title: "CompTIA+ Certification",
    company: "Self-Study",
    dateRange: "Jan 2026 - Present",
    description: "Studied for and passed w",
  },
  {
    title: "av associate",
    company: "company",
    dateRange: "company",
    description: "did the thang",
  },
];

function renderCardImage(item: ResumeCardItem) {
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

export default function ResumePage() {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-4">Resume</h1>
        <p className="text-neutral1 text-lg mb-12">
          Find my work experience, skills, and education here!
        </p>

        <div className="hidden lg:block mb-12">
          <div className="mx-auto max-w-4xl rounded-3xl bg-white p-6 shadow-sm">
            <h2 className="mb-6 flex items-center gap-3 text-4xl font-bold text-secondary">
              Work Experience
            </h2>
            <div className="max-h-[70vh] overflow-y-auto">
              <div className="mx-auto max-w-3xl rounded-2xl bg-neutral3/40 p-4 md:p-6">
                <div className="relative">
                  <div className="absolute left-3.5 top-0 bottom-0 w-0.5 bg-neutral2 hidden md:block" />
                  <div className="flex flex-col gap-6">
                    {experiences.map((exp, index) => (
                      <div key={index} className="relative md:pl-10">
                        {/* Timeline dot */}
                        <div className="absolute left-2 top-6 w-3 h-3 rounded-full bg-neutral2 border-2 border-white hidden md:block" />

                        <div className="rounded-2xl bg-white shadow-sm p-5 hover:shadow-md transition-shadow">
                          {renderCardImage(exp)}

                          <div className="mt-3">
                            <h3 className="text-lg font-semibold">
                              {exp.title}
                            </h3>
                            <p className="text-secondary font-medium">
                              {exp.company}
                            </p>
                            <p className="text-sm text-neutral2 mb-3">
                              {exp.dateRange}
                            </p>
                            {exp.bullets?.length ? (
                              <ResumeBulletList bullets={exp.bullets} />
                            ) : (
                              <p className="text-neutral1 leading-relaxed">
                                {exp.description}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:hidden">
          <CollapsibleSection title="Work Experience" defaultOpen={true}>
            <div className="mx-auto max-w-4xl lg:max-h-[70vh] lg:overflow-y-auto lg:rounded-3xl lg:bg-white lg:p-6 lg:shadow-sm">
              <div className="mx-auto max-w-3xl rounded-2xl bg-neutral3/40 p-4 md:p-6">
                <div className="relative">
                  <div className="absolute left-3.5 top-0 bottom-0 w-0.5 bg-neutral2 hidden md:block" />
                  <div className="flex flex-col gap-6">
                    {experiences.map((exp, index) => (
                      <div key={index} className="relative md:pl-10">
                        {/* Timeline dot */}
                        <div className="absolute left-2 top-6 w-3 h-3 rounded-full bg-neutral2 border-2 border-white hidden md:block" />

                        <div className="rounded-2xl bg-white shadow-sm p-5 hover:shadow-md transition-shadow">
                          {renderCardImage(exp)}

                          <div className="mt-3">
                            <h3 className="text-lg font-semibold">
                              {exp.title}
                            </h3>
                            <p className="text-secondary font-medium">
                              {exp.company}
                            </p>
                            <p className="text-sm text-neutral2 mb-3">
                              {exp.dateRange}
                            </p>
                            {exp.bullets?.length ? (
                              <ResumeBulletList bullets={exp.bullets} />
                            ) : (
                              <p className="text-neutral1 leading-relaxed">
                                {exp.description}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </CollapsibleSection>
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

        <CollapsibleSection title="Education" defaultOpen={false}>
          <div className="mx-auto max-w-3xl rounded-2xl bg-neutral3/40 p-4 md:p-6">
            <div className="relative">
              <div className="absolute left-3.5 top-0 bottom-0 w-0.5 bg-neutral2 hidden md:block" />
              <div className="flex flex-col gap-6">
                {education.map((edu, index) => (
                  <div key={index} className="relative md:pl-10">
                    {/* Timeline dot */}
                    <div className="absolute left-2 top-6 w-3 h-3 rounded-full bg-neutral2 border-2 border-white hidden md:block" />

                    <div className="rounded-2xl bg-white shadow-sm p-5 hover:shadow-md transition-shadow">
                      {renderCardImage(edu)}

                      <div className="mt-3">
                        <h3 className="text-lg font-semibold">{edu.title}</h3>
                        <p className="text-secondary font-medium">
                          {edu.company}
                        </p>
                        <p className="text-sm text-neutral2 mb-3">
                          {edu.dateRange}
                        </p>
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
      </div>
    </section>
  );
}
