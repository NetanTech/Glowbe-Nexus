"use client";

import { useState } from "react";

const QUOTE =
  "Absolutely love this product. It has changed the way I invest and made my money work so much harder without me doing much.";

type Testimonial = {
  name: string;
  quote: string;
  initials: string;
  tone: string;
  image: string;
};

/**
 * Swap `image` for your own files (e.g. "/testimonials/adenuga.jpg" in /public).
 * If an image fails to load, the card falls back to the initials badge.
 */
const testimonials: Testimonial[] = [
  {
    name: "Adenuga I.",
    quote: QUOTE,
    initials: "AI",
    tone: "bg-[#dbe4f0] text-brand",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Chioma O.",
    quote: QUOTE,
    initials: "CO",
    tone: "bg-[#e8ddd4] text-[#5c4033]",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Tunde B.",
    quote: QUOTE,
    initials: "TB",
    tone: "bg-[#dde8e0] text-[#1f4d3a]",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    name: "Amaka E.",
    quote: QUOTE,
    initials: "AE",
    tone: "bg-[#e8e0f0] text-[#3d2a5c]",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Ibrahim K.",
    quote: QUOTE,
    initials: "IK",
    tone: "bg-[#f0e6d8] text-[#5a3d1e]",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    name: "Sarah M.",
    quote: QUOTE,
    initials: "SM",
    tone: "bg-[#dce8f5] text-[#1e3a5c]",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
];

function Avatar({
  name,
  image,
  initials,
  tone,
}: Pick<Testimonial, "name" | "image" | "initials" | "tone">) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`flex h-11 w-11 items-center justify-center rounded-full text-sm font-semibold ${tone}`}
      >
        {initials}
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={image}
      alt={name}
      width={44}
      height={44}
      loading="lazy"
      draggable={false}
      onError={() => setFailed(true)}
      className="h-11 w-11 rounded-full object-cover"
    />
  );
}

function TestimonialCard(props: Testimonial) {
  return (
    <article className="mr-4 w-[280px] shrink-0 rounded-[18px] bg-[#F3F5F7] p-5 sm:mr-5 sm:w-[300px] sm:p-6 md:w-[320px]">
      <Avatar {...props} />
      <p className="mt-4 text-[14px] leading-relaxed text-foreground/80 sm:text-[15px]">
        {props.quote}
      </p>
      <p className="mt-5 text-[14px] font-semibold text-foreground sm:text-[15px]">
        {props.name}
      </p>
    </article>
  );
}

/** One scrolling row. The set is repeated 4x; the track slides by exactly one set (25%) and loops seamlessly. */
function MarqueeRow({
  items,
  direction,
  duration,
}: {
  items: Testimonial[];
  direction: "left" | "right";
  duration: number;
}) {
  const copies = 4;

  return (
    <div className="group overflow-hidden">
      <div
        className={`flex w-max ${
          direction === "left" ? "testimonial-marquee-left" : "testimonial-marquee-right"
        }`}
        style={{ animationDuration: `${duration}s` }}
      >
        {Array.from({ length: copies }).map((_, copyIndex) =>
          items.map((item) => (
            <div
              key={`${copyIndex}-${item.name}`}
              aria-hidden={copyIndex > 0 ? true : undefined}
            >
              <TestimonialCard {...item} />
            </div>
          )),
        )}
      </div>
    </div>
  );
}

export default function Testimonials() {
  const rowOne = testimonials.slice(0, 3);
  const rowTwo = testimonials.slice(3);

  return (
    <section
      id="testimonials"
      className="overflow-hidden bg-white px-0 py-16 sm:py-20 md:py-24 lg:py-28"
    >
      <style>{`
        @keyframes testimonial-scroll-left {
          from { transform: translateX(0); }
          to   { transform: translateX(-25%); }
        }
        @keyframes testimonial-scroll-right {
          from { transform: translateX(-25%); }
          to   { transform: translateX(0); }
        }
        .testimonial-marquee-left,
        .testimonial-marquee-right {
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          will-change: transform;
        }
        .testimonial-marquee-left  { animation-name: testimonial-scroll-left; }
        .testimonial-marquee-right { animation-name: testimonial-scroll-right; }
        /* pause both rows while the pointer is over the carousel */
        .testimonial-carousel:hover .testimonial-marquee-left,
        .testimonial-carousel:hover .testimonial-marquee-right {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .testimonial-marquee-left,
          .testimonial-marquee-right { animation: none; }
        }
      `}</style>

      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="mx-auto max-w-[640px] text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted sm:text-[12px]">
            <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-muted align-middle" />
            Testimonials
          </p>
          <h2 className="mt-4 text-balance text-[clamp(1.65rem,4vw,2.5rem)] font-bold leading-[1.15] tracking-tight text-foreground">
            What our customers say about us
          </h2>
        </div>
      </div>

      <div className="testimonial-carousel relative mt-10 space-y-4 sm:mt-12 sm:space-y-5 md:mt-14">
        <MarqueeRow items={rowOne} direction="left" duration={40} />
        <MarqueeRow items={rowTwo} direction="right" duration={45} />

        {/* white fade overlays on the left and right edges */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white via-white/80 to-transparent sm:w-28 md:w-40 lg:w-56"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white via-white/80 to-transparent sm:w-28 md:w-40 lg:w-56"
        />
      </div>
    </section>
  );
}