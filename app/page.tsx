import Image from "next/image";
import Link from "next/link";
import SocialLink from "@/components/SocialLink";

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/ryanwinterphotos/",
    iconSrc: "/logos/instagram-white-icon.svg",
  },
  {
    label: "GitHub",
    href: "https://github.com/CodingCrocs",
    iconSrc: "/logos/github-white-icon.svg",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ryanwwinter/",
    iconSrc: "/logos/linkedin-app-white-icon.svg",
  },
];

export default function Home() {
  return (
    <div className="site-surface-gradient">
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(96,205,193,0.28),transparent_42%),linear-gradient(180deg,rgba(255,255,255,0.45),rgba(255,255,255,0))]" />
        <div className="relative z-10 mx-auto grid min-h-[34rem] max-w-6xl gap-10 px-6 py-16 md:px-10 md:py-20 lg:grid-cols-[minmax(0,1fr)_24rem] lg:items-center lg:px-16">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-secondary">
              Tech, Events, Esports, Media
            </p>
            <h1 className="mb-5 max-w-xl font-display text-5xl md:text-6xl">
              Hi, I&apos;m Ryan!
            </h1>
            <p className="mb-8 max-w-xl text-lg leading-8 text-dark">
              An experienced professional with a varied background in tech,
              esports, events, and media.
            </p>
            <div className="w-fit">
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((link) => (
                  <SocialLink
                    key={link.label}
                    label={link.label}
                    href={link.href}
                    iconSrc={link.iconSrc}
                  />
                ))}
              </div>
              <Link
                href="/resume"
                className="mt-4 flex h-14 w-[12.5rem] items-center justify-center rounded-xl bg-dark text-base font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-neutral1 hover:shadow-md"
              >
                View Resume
              </Link>
            </div>
          </div>

          <div className="justify-self-start lg:justify-self-end">
            <div className="relative overflow-hidden rounded-[2rem] border border-primary/20 bg-white p-3 shadow-[0_24px_60px_rgba(90,90,90,0.16)]">
              <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[1.4rem] bg-accent/10 lg:w-[24rem]">
                <Image
                  src="/headshot-4-26.jpg"
                  alt="Ryan Winter headshot"
                  fill
                  priority
                  sizes="(max-width: 1024px) 80vw, 24rem"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="relative z-20 -mt-8 pb-16 md:-mt-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="rounded-[2rem] bg-white p-6 shadow-sm md:p-10">
            <h2 className="mb-4 font-display text-3xl">About Me</h2>
            <p className="text-neutral1 leading-relaxed">
              I've had an extremely diverse background of experiences throughout my life that has 
              turned me into an ultimate jack of all trades. From dressing up as the Christmas Teddy Bear, to DJing Bar Mitzvahs,
              to learning lagless video streaming protocols to solve a logistics issue, I've always been trusted with various tasks
              at every organization I've joined. As I move forward in my career I'm looking for opportunities that will help me hone
              myself as a professional and also utilize my various skills to benefit any team who needs it. I revel in chaos and am always
              ready for the next challenge that brings itself to me.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
