"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const steps = [
  {
    step: "Step 1",
    title: "Create your account",
    description:
      "Register with your details to establish your Glowbe Nexus account.",
    image: "/assets/auth_image.webp",
    alt: "Create your Glowbe Nexus account",
  },
  {
    step: "Step 2",
    title: "Verify your identity",
    description:
      "Complete the required identity verification before accessing investment and funding features.",
    image: "/assets/academy-hero.webp",
    alt: "Verify your identity on Glowbe Nexus",
  },
  {
    step: "Step 3",
    title: "Fund your wallet",
    description:
      "Add funds to your wallet using the available payment options and review the applicable conversion details before confirming.",
    image: "/assets/course-mastery.webp",
    alt: "Fund your Glowbe Nexus wallet",
  },
  {
    step: "Step 4",
    title: "Choose your investment",
    description:
      "Explore the available portfolios, select your investment amount and tenure, and review the terms before proceeding.",
    image: "/assets/invest-plan.webp",
    alt: "Choose a Glowbe Nexus investment plan",
  },
  {
    step: "Step 5",
    title: "Monitor your progress",
    description:
      "Use your dashboard to view investment activity, track growth records, and follow important maturity and withdrawal information.",
    image: "/assets/howitworks.webp",
    alt: "Monitor progress on the Glowbe Nexus dashboard",
  },
];

function SectionHeader() {
  return (
    <div className="mx-auto max-w-[720px] text-center">
      <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-white/55 sm:text-[12px]">
        <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-white/55 align-middle" />
        How it works
      </p>
      <h2 className="mt-4 text-balance text-[clamp(1.65rem,4vw,2.5rem)] font-bold leading-[1.15] tracking-tight sm:mt-5">
        From getting started to tracking your investments.
      </h2>
      <p className="mx-auto mt-4 max-w-[560px] text-[14px] leading-relaxed text-white/60 sm:mt-5 sm:text-[15px]">
        Get started with a clear process designed to help you understand each
        stage of your investment journey.
      </p>
    </div>
  );
}

export default function HowItWorks() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    function updateActive() {
      const el = trackRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const range = Math.max(el.offsetHeight - window.innerHeight, 1);
      const scrolled = Math.min(Math.max(-rect.top, 0), range);
      const progress = scrolled / range;
      const index = Math.min(
        steps.length - 1,
        Math.max(0, Math.floor(progress * steps.length))
      );
      setActive(index);
    }

    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("resize", updateActive);
    return () => {
      window.removeEventListener("scroll", updateActive);
      window.removeEventListener("resize", updateActive);
    };
  }, []);

  const current = steps[active];

  return (
    <section id="how-it-works" className="text-white">
      {/* Mobile: normal stacked flow */}
      <div className="px-4 py-16 sm:px-6 sm:py-20 md:px-8 lg:hidden">
        <div className="mx-auto w-full max-w-[1200px]">
          <SectionHeader />

          <ol className="mt-12 sm:mt-14">
            {steps.map((item) => (
              <li
                key={item.step}
                className="space-y-5 border-b border-white/15 py-8 first:pt-0 last:border-b-0 last:pb-0"
              >
                <div className="relative mx-auto aspect-[4/3] w-full max-w-[560px] overflow-hidden rounded-[18px] sm:rounded-[22px]">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    quality={75}
                    sizes="(max-width: 1024px) 100vw, 560px"
                    className="object-cover object-center"
                  />
                </div>
                <div className="text-center sm:text-left">
                  <p className="text-[12px] font-medium text-white/45 sm:text-[13px]">
                    {item.step}
                  </p>
                  <h3 className="mt-2 text-[17px] font-semibold tracking-tight sm:text-[18px]">
                    {item.title}
                  </h3>
                  <p className="mx-auto mt-2 max-w-[420px] text-[13px] leading-relaxed text-white/60 sm:mx-0 sm:text-[14px]">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* Desktop: pinned viewport while scroll advances steps/images */}
      <div
        ref={trackRef}
        className="relative hidden lg:block"
        style={{ height: `${steps.length * 100}vh` }}
      >
        <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden px-10 py-12">
          <div className="mx-auto w-full max-w-[1200px]">
            <SectionHeader />

            <div className="mt-12 grid grid-cols-[3fr_2fr] items-center gap-14 xl:mt-14 xl:gap-20">
              <div className="min-w-0">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[22px]">
                  {steps.map((item, index) => (
                    <Image
                      key={item.step}
                      src={item.image}
                      alt={item.alt}
                      fill
                      quality={75}
                      sizes="700px"
                      className={`object-cover object-center transition-opacity duration-500 ease-out ${
                        index === active ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <ol className="min-w-0">
                {steps.map((item, index) => {
                  const isActive = index === active;
                  return (
                    <li
                      key={item.step}
                      className={`border-b border-white/15 py-5 transition-opacity duration-500 last:border-b-0 ${
                        isActive ? "opacity-100" : "opacity-40"
                      }`}
                    >
                      <p className="text-[12px] font-medium text-white/45">{item.step}</p>
                      <h3 className="mt-1 text-[18px] font-semibold tracking-tight">
                        {item.title}
                      </h3>
                      <p
                        className={`mt-2 max-w-[420px] text-[14px] leading-relaxed text-white/60 transition-all duration-500 ${
                          isActive
                            ? "max-h-28 opacity-100"
                            : "max-h-0 overflow-hidden opacity-0"
                        }`}
                      >
                        {item.description}
                      </p>
                    </li>
                  );
                })}
              </ol>
            </div>

            <p className="sr-only" aria-live="polite">
              {current.step}: {current.title}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
