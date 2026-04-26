export type ProjectItem = {
  title: string;
  description: string;
  image?: string;
  imageAlt: string;
  href?: string;
};

export type EventCardItem = {
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

export type MediaItem = {
  title: string;
  company: string;
  dateRange: string;
  description: string;
  embedVid?: string;
  embedSpot?: string;
};

export const portfolioIntro =
  "A selection of my coding projects, events I've organized, and some of my speeches!";

export const projects: ProjectItem[] = [
  {
    title: "This Website!",
    description:
      "A simple site meant to showcase my varied experiences and applications, using Next.JS with React and JSX Libraries.",
    image: "/website.png",
    imageAlt: "Resume Website Preview",
    href: "https://www.ryanwwinter.com/",
  },
  {
    title: "Natasha Oon Site",
    description:
      "A site meant to coagulate all media appearances and sponsors of an lpga player for increased visibility to new sponsors",
    imageAlt: "Golf Player Preview",
    href: "https://www.natashaaoon.com",
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

export const events: EventCardItem[] = [
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
      "Acted as main speaker and MC",
      "Created engaging presentation content with clear CTAs",
      "Extended the reach of local collegiate esports by making discovery and collaboration easier across the Bay Area.",
    ],
  },
  {
    title: "CuriOdyssey First Fridays",
    company: "CuriOdyssey",
    eventType: "Recurring",
    dateRange: " September 2024 - Present",
    description: "",
    image: "/events/first-fridays.jpg",
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

export const media: MediaItem[] = [
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
