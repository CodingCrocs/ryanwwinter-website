import SocialLink from "@/components/SocialLink";
import HomeSlideshow from "@/components/HomeSlideshow";

const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/ryanwinterphotos/" },
  { label: "GitHub", href: "https://github.com/CodingCrocs" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ryanwwinter/" },
  { label: "Adobe Portfolio", href: "https://ryanwinter.myportfolio.com/" },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden bg-neutral3">
        <HomeSlideshow />
        <div className="absolute inset-0 bg-slate-950/25" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(214,238,255,0.98)_0%,rgba(214,238,255,0.94)_26%,rgba(214,238,255,0.78)_48%,rgba(214,238,255,0.38)_72%,rgba(214,238,255,0)_100%)]" />
        <div className="relative z-10 mx-auto flex min-h-[30rem] max-w-6xl items-center px-10 py-20 md:min-h-[36rem] md:px-14 md:py-24 lg:px-20">
          <div className="max-w-lg">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Hi, I&apos;m Ryan!
              </h1>
              <p className="mb-8 max-w-lg text-lg text-black">
                An Experienced Professional with a varied background in Tech,
                Esports, Events, and Media.
              </p>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((link) => (
                  <SocialLink
                    key={link.label}
                    label={link.label}
                    href={link.href}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="relative z-20 -mt-20 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="rounded-2xl bg-white shadow-sm p-6 md:p-10">
            <h2 className="text-2xl font-bold mb-4">About Me</h2>
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
