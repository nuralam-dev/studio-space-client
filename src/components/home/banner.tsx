"use client";

import { useState } from "react";
import Link from "next/link";
import { Aperture, ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

import { Button, buttonVariants } from "@/components/ui/button";

const slides = [
  {
    category: "A space for every idea",
    title: "Your next big idea starts with the right space.",
    description: "Discover photography studios, film stages, and creative workspaces. Find a setting that brings your vision to life.",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2400&q=85",
  },
  {
    category: "Make yourself heard",
    title: "Give your next recording a space of its own.",
    description: "Explore podcast lounges and music suites for your next conversation, recording session, or creative collaboration.",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=2400&q=85",
  },
  {
    category: "Create something together",
    title: "Find room for your hands-on imagination.",
    description: "Discover workshops and flexible creative spaces for making, experimenting, and bringing your team together.",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=2400&q=85",
  },
];

export default function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slide = slides[currentSlide];

  function changeSlide(direction: number) {
    setCurrentSlide((previous) => (previous + direction + slides.length) % slides.length);
  }

  const controlClassName = "size-11 rounded-full border-white/40 bg-transparent text-white hover:bg-white/15 hover:text-white dark:bg-transparent dark:hover:bg-white/15";

  return (
    <section
      aria-label="Creative spaces"
      aria-roledescription="carousel"
      className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8"
    >
      <div className="relative isolate overflow-hidden rounded-3xl bg-neutral-950 text-white">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-20 bg-cover bg-center"
          style={{ backgroundImage: `url("${slide.image}")` }}
        />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-linear-to-r from-black/90 via-black/70 to-black/30" />

        <div className="px-6 pt-14 pb-8 sm:px-10 sm:pt-20 lg:px-16 lg:pt-24 lg:pb-10">
          <div aria-live="polite" aria-atomic="true" className="max-w-2xl">
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-medium tracking-wide sm:text-sm">
              <Aperture className="size-4" aria-hidden="true" />
              {slide.category}
            </p>
            <h1 className="text-4xl leading-tight font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
              {slide.title}
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-white/80 sm:text-lg">
              {slide.description}
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/studios" className={buttonVariants({ className: "h-12 gap-2 bg-white px-6 text-neutral-950 hover:bg-white/90" })}>
              Explore Studios
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </Link>
            <Link href="/register" className={buttonVariants({ variant: "outline", className: "h-12 border-white/40 bg-transparent px-6 text-white hover:bg-white/15 hover:text-white dark:bg-transparent dark:hover:bg-white/15" })}>
              Start Hosting
            </Link>
          </div>

          <div className="mt-14 flex flex-wrap items-center justify-between gap-6 border-t border-white/20 pt-6 lg:mt-20">
            <p className="text-sm text-white/75">Room to imagine. Space to create.</p>
            <div className="flex items-center gap-4">
              <span className="text-sm text-white/75" aria-label={`Slide ${currentSlide + 1} of ${slides.length}`}>
                {String(currentSlide + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
              </span>
              <div className="flex gap-2">
                <Button type="button" variant="outline" size="icon" aria-label="Previous slide" onClick={() => changeSlide(-1)} className={controlClassName}>
                  <ArrowLeft aria-hidden="true" />
                </Button>
                <Button type="button" variant="outline" size="icon" aria-label="Next slide" onClick={() => changeSlide(1)} className={controlClassName}>
                  <ArrowRight aria-hidden="true" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
