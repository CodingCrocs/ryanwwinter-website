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

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setCurrentSlide((index) => (index + 1) % slideshowSlides.length);
    }, 8500);

    return () => window.clearTimeout(timeoutId);
  }, [currentSlide]);

  return (
    <div className="rounded-3xl bg-white shadow-sm p-5 md:p-6">
      <div className="aspect-[5/4] md:aspect-[4/3] rounded-2xl overflow-hidden bg-neutral2 flex flex-col">
        <div className="relative flex-1 min-h-0">
          {slideshowSlides.map((slide, index) => (
            <Image
              key={slide.src}
              src={slide.src}
              alt={slide.alt}
              fill
              priority={index === 0}
              sizes="(max-width: 768px) 100vw, 40vw"
              className={`object-contain transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
