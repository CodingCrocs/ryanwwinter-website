"use client";

import Image from "next/image";

const photos = [
  { src: "/photography/baby-cake.jpg", title: "Baby with cake" },
  { src: "/photography/trap-swing.jpg", title: "Trap swing" },
  {
    src: "/photography/basketball-free-throw.jpg",
    title: "Basketball free throw",
  },
  { src: "/photography/ryan-headshot.jpg", title: "Ryan headshot" },
  { src: "/photography/boy-dark.jpg", title: "Portrait in shadow" },
  { src: "/photography/teal-ducks.jpg", title: "Teal ducks" },
  {
    src: "/photography/grandpa-headshot.JPEG",
    title: "Grandpa headshot",
  },
  { src: "/photography/quail-pedro.jpg", title: "Quail with Pedro" },
  { src: "/photography/nat-look.jpg", title: "Nat portrait" },
  { src: "/photography/girl-box.jpg", title: "Girl with box" },
  { src: "/photography/nmfc-point.jpg", title: "NMFC point" },
  { src: "/photography/sarah-headshot.jpg", title: "Sarah headshot" },
  { src: "/photography/basketball-dribble.jpg", title: "Basketball dribble" },
  { src: "/photography/nmfc-winner.jpg", title: "NMFC winner" },
  { src: "/photography/yashil-headshot.jpg", title: "Yashil headshot" },
  { src: "/photography/nat-david.jpg", title: "Nat and David" },
];

export default function PhotographyPage() {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-x-0 top-0 h-[24rem]">
        <Image
          src="/header-images/curio-flowers.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-y-0 left-0 w-[48%] overflow-hidden">
          <Image
            src="/header-images/store-stuffies-small.jpg"
            alt=""
            fill
            priority
            sizes="48vw"
            className="object-cover object-left"
            style={{
              maskImage:
                "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.95) 62%, rgba(0,0,0,0) 100%)",
              WebkitMaskImage:
                "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.95) 62%, rgba(0,0,0,0) 100%)",
            }}
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(214,238,255,0.12)_0%,rgba(214,238,255,0.6)_32%,rgba(214,238,255,0.9)_58%,rgba(214,238,255,1)_100%)]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-10 md:pt-14">
        <div className="rounded-2xl bg-white shadow-sm p-6 md:p-10">
          <div className="rounded-2xl bg-neutral3 p-4 md:p-5">
            <div className="overflow-hidden">
              <div className="photography-marquee flex w-max gap-3">
                {[...photos, ...photos].map(
                  (photo, index) => (
                    <div
                      key={`${photo.src}-${index}`}
                      className="w-32 shrink-0 rounded-2xl bg-white/70 p-2 shadow-sm sm:w-36 md:w-40"
                    >
                      <div className="relative aspect-square overflow-hidden rounded-xl bg-neutral2">
                        <Image
                          src={photo.src}
                          alt={photo.title}
                          fill
                          sizes="(max-width: 640px) 8rem, (max-width: 768px) 9rem, 10rem"
                          className="object-cover"
                        />
                      </div>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
                Photography
              </p>
              <h1 className="mt-3 text-4xl font-bold">Ryan Winter Photos</h1>
              <p className="mt-4 max-w-2xl text-lg text-neutral1">
                I'm always open for any interesting opportunities, feel free to
                reach out to me on LinkedIn or Instagram!
              </p>
            </div>
            <div className="flex flex-col gap-4 md:items-start">
              <a
                href="https://ryanwinter.myportfolio.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full bg-secondary px-7 py-3 text-white font-medium shadow-sm transition-all duration-200 hover:bg-secondary/90 hover:shadow-md"
              >
                See Full Adobe Portfolio
              </a>
              <a
                href="https://www.instagram.com/ryanwinterphotos/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full bg-white px-7 py-3 text-secondary font-medium shadow-sm ring-1 ring-secondary/20 transition-all duration-200 hover:bg-neutral3 hover:shadow-md"
              >
                Follow on Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-2xl bg-white shadow-sm p-6 md:p-10">
          <h2 className="text-2xl font-bold mb-4">My Photography Story</h2>
          <p className="text-neutral1 leading-relaxed">
            Photography was a bit of an accident for me. When I joined
            CuriOdyssey, I immediately recognized the need for high-quality
            images in our ability to find clients and professionalize our
            marketing presence for Facility Rentals. At a small non-profit
            however, the resources for marketing-ready images were limited, and
            I determined that the onus fell onto me to address the issue that I
            recognized. After some significant personal investment, I slowly
            learned the skills to take great photos, specifically with the goals
            of a larger business purpose in mind. Now I've taken photography
            outside of my work, and have started to apply it across events,
            sports, headshots, and more.
          </p>
        </div>
      </div>
      <style jsx>{`
        .photography-marquee {
          animation: photography-scroll 75s linear infinite;
        }

        @keyframes photography-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(-50% - 0.375rem));
          }
        }
      `}</style>
    </section>
  );
}
