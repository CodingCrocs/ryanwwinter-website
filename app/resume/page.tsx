import ImagePlaceholder from "@/components/ImagePlaceholder";
import CollapsibleSection from "@/components/CollapsibleSection";

const experiences = [
  {
    title: "Events Assistant",
    company: "CuriOdyssey",
    dateRange: "Fall 2024 — Present",
    location: "San Mateo, CA",
    description:
      "Led design initiatives for major client projects, collaborated with cross-functional teams, and mentored junior designers. Delivered high-impact visual solutions across digital and print media.",
  },
  {
    title: "Overwatch 2 Esports Course Instructor",
    company: "Gen. G Esports",
    dateRange: "Jun 2023 - Sept 2023",
    location: "Riyadh, Saudi Arabia",
    description:
      "Created 16+ weeks of new advanced course content focused on systematic problem-solving and in-depth game mechanics. Collaborated with international partners and conducted extensive data analysis to integrate diverse strategies and solutions to improve service offerings and drive retention. Curated 70+ pages of reports to supervising agencies about the program's successes including student retention, technology improvements, and the incorporation of online courses into the academy.",
  },
  {
    title: "Dying Light 2 Demo Crew Member",
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

const education = [
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

const media = [
  {
    title: "KQED's the Forum",
    company: "KQED",
    dateRange: "Nov 2021",
    description:
      "represented local collegiate Esports on nationally distributed radio show",
  },
];

export default function ResumePage() {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <CollapsibleSection title="Work Experience" defaultOpen={false}>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-neutral2 hidden md:block" />
            <div className="flex flex-col gap-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative md:pl-12">
                  {/* Timeline dot */}
                  <div className="absolute left-2.5 top-8 w-3 h-3 rounded-full bg-neutral2 border-2 border-white hidden md:block" />

                  <div className="rounded-2xl bg-white shadow-sm p-6 hover:shadow-md transition-shadow">
                    {/* TODO: Replace with scroll-animated background images using Framer Motion */}
                    <ImagePlaceholder
                      aspectRatio="aspect-[3/1]"
                      label="Background Image"
                    />

                    <div className="mt-4">
                      <h3 className="text-xl font-semibold">{exp.title}</h3>
                      <p className="text-secondary font-medium">
                        {exp.company}
                      </p>
                      <p className="text-sm text-neutral2 mb-3">
                        {exp.dateRange}
                      </p>
                      <p className="text-neutral1 leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CollapsibleSection>

        <CollapsibleSection title="Education" defaultOpen={false}>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-neutral2 hidden md:block" />
            <div className="flex flex-col gap-8">
              {education.map((edu, index) => (
                <div key={index} className="relative md:pl-12">
                  {/* Timeline dot */}
                  <div className="absolute left-2.5 top-8 w-3 h-3 rounded-full bg-neutral2 border-2 border-white hidden md:block" />

                  <div className="rounded-2xl bg-white shadow-sm p-6 hover:shadow-md transition-shadow">
                    {/* TODO: Replace with scroll-animated background images using Framer Motion */}
                    <ImagePlaceholder
                      aspectRatio="aspect-[3/1]"
                      label="Background Image"
                    />

                    <div className="mt-4">
                      <h3 className="text-xl font-semibold">{edu.title}</h3>
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
        </CollapsibleSection>
        <CollapsibleSection title="Media Appearances" defaultOpen={false}>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-neutral2 hidden md:block" />
            <div className="flex flex-col gap-8">
              {education.map((edu, index) => (
                <div key={index} className="relative md:pl-12">
                  {/* Timeline dot */}
                  <div className="absolute left-2.5 top-8 w-3 h-3 rounded-full bg-neutral2 border-2 border-white hidden md:block" />

                  <div className="rounded-2xl bg-white shadow-sm p-6 hover:shadow-md transition-shadow">
                    {/* TODO: Replace with scroll-animated background images using Framer Motion */}
                    <ImagePlaceholder
                      aspectRatio="aspect-[3/1]"
                      label="Background Image"
                    />

                    <div className="mt-4">
                      <h3 className="text-xl font-semibold">{edu.title}</h3>
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
        </CollapsibleSection>
      </div>
    </section>
  );
}
