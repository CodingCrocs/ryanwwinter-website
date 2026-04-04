import ImagePlaceholder from "@/components/ImagePlaceholder";

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
    title: "Junior Graphic Designer",
    company: "StartUp Labs",
    dateRange: "2017 — 2019",
    description:
      "Created marketing materials, social media assets, and brand collateral. Assisted in building the company's visual identity from the ground up.",
  },
  {
    title: "Freelance Web Developer",
    company: "Self-Employed",
    dateRange: "2016 — 2017",
    description:
      "Built and maintained websites for small businesses and individuals. Gained experience in client communication, project management, and full-stack development.",
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
