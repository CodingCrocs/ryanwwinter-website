import ImagePlaceholder from "@/components/ImagePlaceholder";

const experiences = [
  {
    title: "Senior Designer",
    company: "Creative Studio Co.",
    dateRange: "2022 — Present",
    description:
      "Led design initiatives for major client projects, collaborated with cross-functional teams, and mentored junior designers. Delivered high-impact visual solutions across digital and print media.",
  },
  {
    title: "UI/UX Designer",
    company: "Digital Agency Inc.",
    dateRange: "2019 — 2022",
    description:
      "Designed user interfaces and experiences for web and mobile applications. Conducted user research, created wireframes and prototypes, and worked closely with development teams.",
  },
  {
    title: "Junior Graphic Designer",
    company: "StartUp Labs",
    dateRange: "2017 — 2019",
    description:
      "Created marketing materials, social media assets, and brand collateral. Assisted in building the company's visual identity from the ground up.",
  },
];

export default function ResumePage() {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-secondary mb-12">Resume</h1>

        <div className="relative">
          {/* Timeline connector line */}
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
                    <p className="text-secondary font-medium">{exp.company}</p>
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
      </div>
    </section>
  );
}
