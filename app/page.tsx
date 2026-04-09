import SocialLink from "@/components/SocialLink";
import ImagePlaceholder from "@/components/ImagePlaceholder";

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
      <section className="py-20 bg-neutral3">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Hi, I&apos;m Ryan!
              </h1>
              <p className="text-lg text-neutral1 mb-8">
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
            <ImagePlaceholder label="Profile Photo" />
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="rounded-2xl bg-white shadow-sm p-6 md:p-10">
            <h2 className="text-2xl font-bold mb-4">About Me</h2>
            <p className="text-neutral1 leading-relaxed">
              Welcome to my personal website!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
