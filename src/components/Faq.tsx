"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What is Glowbe Nexus?",
    a: "Glowbe Nexus is an investment-first platform where users can manage their wallet, explore investment portfolios, track investment activity, and access financial market education and mentorship offerings.",
  },
  {
    q: "How do I start investing?",
    a: "Create your account, complete identity verification, fund your wallet, then choose a portfolio that matches your goals and preferred tenure.",
  },
  {
    q: "What investment options are available?",
    a: "You can explore curated investment portfolios on the platform, review terms for each option, and select the amount and tenure that fit your plan.",
  },
  {
    q: "Are investment returns guaranteed?",
    a: "No. Investment outcomes can vary based on market conditions and the portfolio you choose. Always review the terms carefully before investing.",
  },
  {
    q: "Does mentorship guarantee trading profits?",
    a: "No. Mentorship and education are designed to support informed decision-making. They do not guarantee profits or specific trading results.",
  },
  {
    q: "How do I access a course after purchase?",
    a: "After purchase, your course appears in My Purchases on your dashboard so you can start learning right away from your account.",
  },
];

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 text-foreground/70 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
      aria-hidden="true"
    >
      <path
        d="M6 9L12 15L18 9"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      id="faq"
      className="relative z-10 rounded-b-[32px] bg-white px-4 py-16 sm:rounded-b-[40px] sm:px-6 sm:py-20 md:rounded-b-[48px] md:px-8 md:py-24 lg:rounded-b-[56px] lg:px-10 lg:py-28"
    >
      <div className="mx-auto w-full max-w-[720px]">
        <div className="mx-auto max-w-[560px] text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted sm:text-[12px]">
            <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-muted align-middle" />
            FAQ
          </p>
          <h2 className="mt-4 text-balance text-[clamp(1.65rem,4vw,2.5rem)] font-bold leading-[1.15] tracking-tight text-foreground">
            Frequently asked questions
          </h2>
        </div>

        <div className="mt-10 space-y-3 sm:mt-12 sm:space-y-3.5 md:mt-14">
          {faqs.map((item, index) => {
            const open = openIndex === index;

            return (
              <div key={item.q} className="rounded-[14px] bg-[#F3F5F7] sm:rounded-[16px]">
                <button
                  type="button"
                  className="flex w-full items-start justify-between gap-4 px-4 py-4 text-left sm:px-5 sm:py-5"
                  aria-expanded={open}
                  onClick={() => setOpenIndex(open ? -1 : index)}
                >
                  <span className="text-[14px] font-semibold leading-snug text-foreground sm:text-[15px] md:text-[16px]">
                    {item.q}
                  </span>
                  <Chevron open={open} />
                </button>

                {open ? (
                  <div className="px-4 pb-4 sm:px-5 sm:pb-5">
                    <p className="max-w-[560px] text-[13px] leading-relaxed text-muted sm:text-[14px]">
                      {item.a}
                    </p>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
