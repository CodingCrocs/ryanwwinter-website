"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

// Add future slideshow files to /public/slideshow/ and register each one here.
// Example:
// { src: "/slideshow/new-photo.jpg", alt: "Ryan speaking on stage" }
const slideshowSlides = [
  { src: "/slideshow/saudi-arena.JPEG", alt: "Ryan at a Saudi arena" },
  { src: "/slideshow/fuel-stage.JPEG", alt: "Ryan on the Fuel stage" },
  {
    src: "/slideshow/post-meeting-meal.JPEG",
    alt: "Team meal after First GGSFSU Meeting",
  },
  { src: "/slideshow/team-in-car.JPEG", alt: "On the road to Fresno" },
  { src: "/slideshow/fresno-stage.JPEG", alt: "Team posing with our winnings in Fresno" },
  { src: "/slideshow/stage-point.JPEG", alt: "Ryan pointing on stage" },
  { src: "/slideshow/cal-headshot.JPEG", alt: "Ryan Cal headshot" },
  { src: "/slideshow/team-stage.JPEG", alt: "Ryan with a team on stage" },
  { src: "/slideshow/owl-finals.JPEG", alt: "Ryan at OWL finals" },
  {
    src: "/slideshow/cal-shock-flag.JPEG",
    alt: "Ryan with a Cal Shock flag",
  },
  { src: "/slideshow/Gaming Gators.jpg", alt: "Ryan with Gaming Gators" },
  { src: "/slideshow/loic.JPEG", alt: "Ryan with Loic" },
  { src: "/slideshow/sideshow.JPEG", alt: "Ryan with Sideshow" },
  {
    src: "/slideshow/team-at-fresno.JPEG",
    alt: "Ryan with the team at Fresno",
  },
  { src: "/slideshow/crusty.JPEG", alt: "Ryan with Crusty" },
  { src: "/slideshow/gator-table.JPEG", alt: "Ryan at the Gator table" },
];

export default function HomeSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideFits, setSlideFits] = useState<
    Record<string, "contain" | "cover">
  >({});

  useEffect(() => {
    setCurrentSlide(Math.floor(Math.random() * slideshowSlides.length));
  }, []);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setCurrentSlide((index) => (index + 1) % slideshowSlides.length);
    }, 8500);

    return () => window.clearTimeout(timeoutId);
  }, [currentSlide]);

  function updateSlideFit(
    src: string,
    naturalWidth: number,
    naturalHeight: number,
  ) {
    const nextFit = naturalHeight > naturalWidth ? "contain" : "cover";

    setSlideFits((current) =>
      current[src] === nextFit ? current : { ...current, [src]: nextFit },
    );
  }

  return (
    <div
      className="absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {slideshowSlides.map((slide, index) => {
        const fit = slideFits[slide.src] ?? "cover";

        return (
          <Image
            key={slide.src}
            src={slide.src}
            alt=""
            fill
            preload={index === 0}
            sizes="100vw"
            onLoad={(event) =>
              updateSlideFit(
                slide.src,
                event.currentTarget.naturalWidth,
                event.currentTarget.naturalHeight,
              )
            }
            className={`pointer-events-none select-none transition-opacity duration-1000 ${
              fit === "contain"
                ? "object-contain object-right"
                : "object-cover object-center"
            } ${index === currentSlide ? "opacity-100" : "opacity-0"}`}
          />
        );
      })}
    </div>
  );
}
