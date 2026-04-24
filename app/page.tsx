import Image from "next/image";
import SocialLink from "@/components/SocialLink";
import HomeSlideshow from "@/components/HomeSlideshow";

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ryanwwinter/",
    icon: "/logos/linkedin-app-white-icon.svg",
    buttonColor: "#40C9CE",
  },
  {
    label: "GitHub",
    href: "https://github.com/CodingCrocs",
    icon: "/logos/github-white-icon.svg",
    buttonColor: "#26CE23",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/ryanwinterphotos/",
    icon: "/logos/instagram-white-icon.svg",
    buttonColor: "#E74141",
  },
];

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-8 md:px-8 lg:px-10">
      <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#585252] shadow-[0_24px_80px_rgba(0,0,0,0.28)]">
        {/* Hero Section */}
        <section className="relative isolate overflow-hidden bg-[#585252]">
          <HomeSlideshow />
          <div className="absolute inset-0 bg-[rgba(35,31,31,0.62)]" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(108,101,101,0.96)_0%,rgba(108,101,101,0.92)_20%,rgba(108,101,101,0.76)_36%,rgba(108,101,101,0.34)_51%,rgba(108,101,101,0.08)_75%)]" />
          <div className="relative z-10 flex min-h-[30rem] items-center px-10 py-20 md:min-h-[36rem] md:px-14 md:py-24 lg:px-20">
            <div className="max-w-2xl">
              <h1 className="mb-5 text-6xl font-bold text-white md:text-7xl">
                <span className="text-[1.5em] text-[#26CE23]">R</span>yan{" "}
                <span className="text-[1.5em] text-[#26CE23]">W</span>inter
              </h1>
              <p className="mb-10 max-w-2xl text-[1.6rem] text-[#E2DCDC] md:text-[1.8rem]">
                <span className="text-[1.2em] text-[#40C9CE]">T</span>ech,{" "}
                <span className="text-[1.2em] text-[#40C9CE]">B</span>rands,{" "}
                <span className="text-[1.2em] text-[#40C9CE]">E</span>vents
              </p>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((link) => (
                  <SocialLink
                    key={link.label}
                    label={link.label}
                    href={link.href}
                    iconOnly
                    className="h-[5.5rem] w-[5.5rem] rounded-[1.5rem] p-0"
                    icon={
                      <span className="flex scale-[2.3] items-center justify-center">
                        <Image
                          src={link.icon}
                          alt=""
                          width={48}
                          height={48}
                          className="h-6 w-6"
                        />
                      </span>
                    }
                    style={{ backgroundColor: link.buttonColor }}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <section className="relative z-20 -mt-20 bg-[#585252] px-6 pb-16 md:px-8 lg:px-10">
          <div className="rounded-2xl border border-white/10 bg-[#645d5d] p-6 shadow-[0_18px_40px_rgba(0,0,0,0.28)] md:p-10">
            <h2 className="mb-4 text-2xl font-bold text-white">About Me</h2>
            <p className="leading-relaxed text-[#E2DCDC]">
              I've had an extremely diverse background of experiences throughout my life that has
              turned me into an ultimate jack of all trades. From dressing up as the Christmas Teddy Bear, to DJing Bar Mitzvahs,
              to learning lagless video streaming protocols to solve a logistics issue, I've always been trusted with various tasks
              at every organization I've joined. As I move forward in my career I'm looking for opportunities that will help me hone
              myself as a professional and also utilize my various skills to benefit any team who needs it. I revel in chaos and am always
              ready for the next challenge that brings itself to me.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
