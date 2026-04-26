export type ResumeCardItem = {
  id: string;
  title: string;
  subtitle?: string;
  company: string;
  dateRange: string;
  description: string;
  paid?: boolean;
  bullets?: string[];
  location?: string;
  image?: string;
  hideImage?: boolean;
  hidden: boolean;
  imagePosition?: string;
  imageAspect?: string;
};

export type SkillItem = {
  title: string;
  items: string;
};

export type TimelineItem = {
  id: string;
  jobTitle: string;
  org: string;
  above: boolean;
  hidden: boolean;
  start: [month: string, year: number];
  end: [month: string, year: number];
  summary: string;
  resumeCardId?: string;
};

// Intro copy for the top of the resume page.
export const resumeIntro =
  "Find my work experience, skills, and education here!";

// Major skills render in the card grid above education/work experience.
export const majorSkills: SkillItem[] = [
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
      "Google Suite, Windows and Mac Troubleshooting, Desktop PC Configuration, Hardware Repairs",
  },
];

// Timeline/work-experience source data.
// Resume cards only; timeline markers now use the dedicated timeline arrays below.
export const experiences: ResumeCardItem[] = [
  {
    id: "events-assistant-curiodyssey",
    title: "Events Assistant",
    company: "CuriOdyssey",
    paid: true,
    hidden: false,
    hideImage: true,
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
    id: "overwatch-2-esports-course-instructor",
    title: "Overwatch 2 Esports Course Instructor",
    paid: false,
    hidden: false,
    image: "/resume/ryaninriyadh.JPEG",
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
    id: "president-and-events-manager",
    title: "President and Events Manager",
    paid: false,
    hidden: false,
    image: "/resume/ggsfsu-guildhouse.JPG",
    company: "Gaming Gators @ SFSU",
    hideImage: false,
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
    id: "dying-light-2-demo-crew-member",
    title: "Dying Light 2 Demo Crew Member",
    paid: true,
    hidden: false,
    image: "/resume/ryandyinglight.JPEG",
    imagePosition: "center 35%",
    company: "TechLand",
    dateRange: "Nov. 2021",
    description:
      "Coordinated staffing for demonstration featuring multiple gaming influencers and media outlets totaling over 15 million views, managing concurrent user experiences in a shared environment",
  },
  {
    id: "overwatch-manager-and-team-captain",
    title: "Overwatch Manager and Team Captain",
    paid: false,
    hidden: false,
    image: "/resume/GGSFSU-Fresno.JPEG",
    imagePosition: "center 50%",
    company: "Gaming Gators @ SFSU",
    dateRange: "Jan 2021 - July 2023",
    description: "",
    bullets: [
      "Created the team in October 2021 and finished 48th in North America in its first season.",
      "Organized a same-day team road trip from San Francisco to a LAN in Fresno and back.",
      "Helped the program earn recognition as the best CSU Overwatch team as of February 12, 2022.",
      "Placed in the top 30 in both Overwatch 2 seasons while playing multiple roles.",
    ],
  },
  {
    id: "heart-and-front-of-house",
    title: "Heart and Front of House",
    paid: true,
    hidden: true,
    image:"",
    company:"Boudin Bakery & Cafe",
    dateRange:"Jan 2021 - Apr 2023",
    description:"",
  },
  {
    id: "semi-professional-overwatch-esports-athlete",
    title: "Semi-Professional Overwatch Esports Athlete",
    paid: false,
    hidden: false,
    image: "/resume/GGSFSU-Fresno.JPEG",
    hideImage: true,
    imagePosition: "center 50%",
    company: "N/A",
    dateRange: "2019 - 2023",
    description: "",
    bullets: [
      "Pursued a professional Esports career, playing on amateur teams and professional training squads",
      "Climbed from below 1500SR to over 4400SR, top 50 in North America",
      "Played in multiple tryouts for Tier 1 professional teams",
      "Operated a personal Twitch stream and coaching YouTube channel",
    ],
  },
  {
    id: "amateur-overwatch-tutor-and-coach",
    title: "Amateur Overwatch Tutor and Coach",
    company: "Miscellaneous",
    paid: false,
    hidden: false,
    dateRange: "2019 - 2021",
    hideImage: true,
    description: "",
    bullets: [
      "Coached Bronze to Platinum level pickup games, offering individual critique to 12+ players across every role.",
      "Joined a struggling amateur tournament team, transitioned from last place to 3rd in one season",
      "Created improvement plans for players after reviewing short gameplay samples.",
      "Helped many repeat students climb consistently from Silver to Diamond.",
    ],
  },
  {
    id: "computer-science-mentor",
    title: "Computer Science Mentor",
    company: "SFSU",
    paid: true,
    hidden: false,
    hideImage: true,
    dateRange: "Aug 2021 - Jan 2022",
    description:
      "Monitored and guided students through complex programming concepts.",
  },
];

// Timeline items use `above` to determine whether they render above or below the year strip.
export const timelineItems: TimelineItem[] = [
  {
    id: "timeline-events-assistant-curiodyssey",
    jobTitle: "Events Assistant",
    org: "CuriOdyssey",
    above: true,
    hidden: false,
    start: ["September", 2024],
    end: ["December", 2026],
    summary:
      "Led bespoke events end to end while growing a key rental revenue stream and modernizing the client experience.",
    resumeCardId: "events-assistant-curiodyssey",
  },
  {
    id: "timeline-dying-light-2-demo-crew-member",
    jobTitle: "Dying Light 2 Demo Crew Member",
    org: "TechLand",
    above: true,
    hidden: false,
    start: ["November", 2021],
    end: ["December", 2021],
    summary:
      "Coordinated staffing and guest flow for a high-visibility demo seen by major creators and media outlets.",
    resumeCardId: "dying-light-2-demo-crew-member",
  },
  {
    id: "timeline-heart-and-front-of-house",
    jobTitle: "Heart and Front of House",
    org: "Boudin Bakery & Cafe",
    above: true,
    hidden: false,
    start: ["January", 2021],
    end: ["April", 2023],
    summary:
      "Supported front-of-house operations in a fast-paced bakery and cafe environment.",
    resumeCardId: "heart-and-front-of-house",
  },
  {
    id: "timeline-computer-science-mentor",
    jobTitle: "Computer Science Mentor",
    org: "SFSU",
    above: true,
    hidden: false,
    start: ["August", 2021],
    end: ["January", 2022],
    summary:
      "Guided students through challenging programming concepts and core computer science coursework.",
    resumeCardId: "computer-science-mentor",
  },
  {
    id: "timeline-overwatch-2-esports-course-instructor",
    jobTitle: "Overwatch 2 Esports Course Instructor",
    org: "Gen. G Esports",
    above: true,
    hidden: false,
    start: ["June", 2023],
    end: ["September", 2023],
    summary:
      "Built advanced course content, analyzed program outcomes, and supported an international esports curriculum.",
    resumeCardId: "overwatch-2-esports-course-instructor",
  },
  {
    id: "timeline-president-and-events-manager",
    jobTitle: "President and Events Manager",
    org: "Gaming Gators @ SFSU",
    above: false,
    hidden: false,
    start: ["April", 2021],
    end: ["April", 2023],
    summary:
      "Expanded the community, led a large officer team, and delivered high-attendance campus events.",
    resumeCardId: "president-and-events-manager",
  },
  {
    id: "timeline-overwatch-manager-and-team-captain",
    jobTitle: "Overwatch Manager and Team Captain",
    org: "Gaming Gators @ SFSU",
    above: false,
    hidden: false,
    start: ["January", 2021],
    end: ["July", 2023],
    summary:
      "Built and led a competitive Overwatch program with roster leadership, travel coordination, and strong results.",
    resumeCardId: "overwatch-manager-and-team-captain",
  },
  {
    id: "timeline-semi-professional-overwatch-esports-athlete",
    jobTitle: "Semi-Professional Overwatch Esports Athlete",
    org: "N/A",
    above: false,
    hidden: false,
    start: ["January", 2019],
    end: ["December", 2023],
    summary:
      "Advanced from amateur play to top-tier competition while building a stream, coaching presence, and player brand.",
    resumeCardId: "semi-professional-overwatch-esports-athlete",
  },
  {
    id: "timeline-amateur-overwatch-tutor-and-coach",
    jobTitle: "Amateur Overwatch Tutor and Coach",
    org: "Miscellaneous",
    above: false,
    hidden: true,
    start: ["January", 2019],
    end: ["December", 2021],
    summary:
      "Coached developing players, reviewed gameplay, and helped teams and individuals improve quickly.",
    resumeCardId: "amateur-overwatch-tutor-and-coach",
  },
];

// Education cards render in their own section, but the SFSU bachelor's entry also
// corresponds to the purple degree bar above the timeline in page.tsx.
export const education: ResumeCardItem[] = [
  {
    id: "bachelors-of-science-sfsu",
    title: "Bachelor's of Science",
    subtitle: "Minor in Business Administration",
    company: "San Francisco State University",
    hidden: false,
    dateRange: "2020-Present",
    description: "received deans list spring 2024",
  },
  {
    id: "comptia-certification",
    title: "CompTIA+ Certification",
    company: "Self-Study",
    hidden: false,
    dateRange: "Jan 2026 - Present",
    description: "Studied for and passed w",
  },
  {
    id: "av-associate-extron",
    title: "AV Associate",
    company: "Extron",
    hidden: false,
    dateRange: "March 2025",
    description:
      "Learned the basics of Audio/Visual Technology, including cables, waveforms, and AV over IP",
  },
];

// Ordered newest-to-oldest because the timeline currently renders left-to-right
// from the first item in this array.
export const timelineYears = ["2026","2025", "2024", "2023", "2022", "2021", "2020"];
