import Link from "next/link";

const outcomes = [
  "Analyse advanced market structure and liquidity concepts.",
  "Refine your understanding of supply and demand zones.",
  "Apply Fibonacci tools and multi-timeframe analysis.",
  "Evaluate potential entries using confirmation and confluence.",
  "Approach risk management and risk-to-reward planning more systematically.",
  "Document, backtest, and forward-test your trading ideas.",
  "Build a repeatable trading system and evaluate its performance.",
  "Develop stronger emotional discipline when making trading decisions.",
];

const modules = [
  {
    label: "Module 1",
    title: "Advanced Market Structure",
    summary:
      "Explore how price moves through the market and develop a deeper understanding of the concepts used to analyse potential trading opportunities.",
    topics: [
      "Advanced market structure",
      "Liquidity concepts",
      "Supply and demand refinement",
      "Institutional price zones",
    ],
  },
  {
    label: "Module 2",
    title: "Advanced Market Structure",
    summary:
      "Explore how price moves through the market and develop a deeper understanding of the concepts used to analyse potential trading opportunities.",
    topics: [
      "Advanced market structure",
      "Liquidity concepts",
      "Supply and demand refinement",
      "Institutional price zones",
    ],
  },
  {
    label: "Module 3",
    title: "Advanced Market Structure",
    summary:
      "Explore how price moves through the market and develop a deeper understanding of the concepts used to analyse potential trading opportunities.",
    topics: [
      "Advanced market structure",
      "Liquidity concepts",
      "Supply and demand refinement",
      "Institutional price zones",
    ],
  },
];

const facts = [
  { label: "Intermediate Level", icon: "level" },
  { label: "49,234 Candidates", icon: "people" },
  { label: "7 hours, 38 minutes Duration", icon: "clock" },
  { label: "Updated 29, Dec, 2026", icon: "calendar" },
] as const;

function FactIcon({ name }: { name: (typeof facts)[number]["icon"] }) {
  if (name === "level") {
    return (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
        <path d="M2.5 12.5V9.5M6.5 12.5V6.5M10.5 12.5V3.5M14 12.5H2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    );
  }
  if (name === "people") {
    return (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
        <circle cx="6" cy="5.2" r="1.8" stroke="currentColor" strokeWidth="1.3" />
        <path d="M2.8 12.2c.4-1.8 1.6-2.7 3.2-2.7s2.8.9 3.2 2.7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
        <circle cx="11" cy="5.6" r="1.4" stroke="currentColor" strokeWidth="1.3" />
        <path d="M10.2 9.6c1.2.1 2.1.8 2.5 2.1" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    );
  }
  if (name === "clock") {
    return (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
        <circle cx="8" cy="8" r="5.2" stroke="currentColor" strokeWidth="1.3" />
        <path d="M8 5.2V8l2 1.4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <rect x="2.5" y="3.5" width="11" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M2.5 6.5h11M5.5 2.5v2M10.5 2.5v2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

export default function CourseDetails() {
  return (
    <section className="relative z-10 rounded-b-[32px] bg-white px-4 pb-16 sm:rounded-b-[40px] sm:px-6 sm:pb-20 md:rounded-b-[48px] md:px-8 md:pb-20 lg:rounded-b-[56px] lg:px-10 lg:pb-24 pt-16">
      <div className="mx-auto grid w-full max-w-[1100px] gap-8 lg:grid-cols-[minmax(0,1fr)_300px] lg:items-start lg:gap-10">
        <div>
          <h2 className="max-w-[560px] text-[clamp(1.45rem,2.4vw,1.85rem)] font-bold leading-[1.2] tracking-tight text-foreground">
            Move beyond the basics. Develop your market methodology.
          </h2>
          <p className="mt-4 max-w-[640px] text-[14px] leading-relaxed text-muted sm:text-[15px]">
            Build on your foundational knowledge of the financial markets with a deeper study of market
            structure, liquidity, trade setups, and risk management. Market Mastery is designed to help
            you analyse price action more systematically, test your ideas, and develop a repeatable
            approach to trading.
          </p>

          <h3 className="mt-10 text-[20px] font-bold tracking-tight text-foreground sm:text-[22px]">
            What you&apos;ll learn
          </h3>
          <p className="mt-3 max-w-[640px] text-[14px] leading-relaxed text-muted sm:text-[15px]">
            Market Mastery focuses on developing the knowledge and practical frameworks needed to
            approach the markets with greater structure and discipline.
          </p>
          <p className="mt-3 text-[14px] leading-relaxed text-muted sm:text-[15px]">
            By working through the course, you&apos;ll explore how to:
          </p>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 text-[14px] leading-relaxed text-muted sm:text-[15px]">
            {outcomes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h3 className="mt-10 text-[20px] font-bold tracking-tight text-foreground sm:text-[22px]">
            Course Curriculum
          </h3>
          <div className="mt-6 space-y-8">
            {modules.map((module) => (
              <article key={module.label}>
                <span className="inline-flex rounded-full bg-[#ECE8F8] px-3 py-1 text-[12px] font-medium text-[#5B4B8A]">
                  {module.label}
                </span>
                <h4 className="mt-3 text-[16px] font-bold tracking-tight text-foreground sm:text-[18px]">
                  {module.title}
                </h4>
                <p className="mt-2 max-w-[640px] text-[14px] leading-relaxed text-muted">
                  {module.summary}
                </p>
                <p className="mt-4 text-[14px] font-semibold text-foreground">Topic covered</p>
                <ul className="mt-2 list-disc space-y-1.5 pl-5 text-[14px] leading-relaxed text-muted">
                  {module.topics.map((topic) => (
                    <li key={topic}>{topic}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>

        <aside className="rounded-2xl bg-[#F4F6F8] p-5 sm:p-6 lg:sticky lg:top-24">
          <p className="text-[22px] font-bold tracking-tight text-foreground">From $99</p>
          <Link
            href="/register"
            className="btn-primary mt-4 flex w-full items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-semibold"
          >
            Buy now
            <span aria-hidden="true">→</span>
          </Link>
          <ul className="mt-5 space-y-3.5">
            {facts.map((fact) => (
              <li key={fact.label} className="flex items-center gap-2.5 text-[13px] text-muted">
                <span className="text-muted">
                  <FactIcon name={fact.icon} />
                </span>
                {fact.label}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
