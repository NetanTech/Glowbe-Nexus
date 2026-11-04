import Image from "next/image";
import Link from "next/link";

const plans = [
  {
    title: "Conservative Growth",
    rate: "18–20% p.a.",
    description:
      "A portfolio with a target annual growth objective of 18–20%, using a 19% midpoint rate for illustrative projections.",
    image: "/assets/invest-plan.webp",
  },
  {
    title: "Balanced Growth",
    rate: "20–24% p.a.",
    description:
      "A portfolio with a target annual growth objective of 20–24%, using a 22% midpoint rate for illustrative projections.",
    image: "/assets/invest-plan.webp",
  },
  {
    title: "Aggressive Growth",
    rate: "24–30% p.a.",
    description:
      "A portfolio with a target annual growth objective of 24–30%, using a 27% midpoint rate for illustrative projections.",
    image: "/assets/invest-plan.webp",
  },
];

export default function InvestmentPlans() {
  return (
    <section
      id="plans"
      className="relative z-10 rounded-b-[32px] bg-[#F7F8FA] px-4 py-14 sm:rounded-b-[40px] sm:px-6 sm:py-16 md:rounded-b-[48px] md:px-8 md:py-20 lg:rounded-b-[56px] lg:px-10 lg:py-24"
    >
      <div className="mx-auto w-full max-w-[1200px]">
        <div className="max-w-[560px]">
          <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted sm:text-[12px]">
            <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-muted align-middle" />
            Investment plans
          </p>
          <h2 className="mt-4 text-balance text-[clamp(1.6rem,3.5vw,2.25rem)] font-bold leading-[1.15] tracking-tight text-foreground">
            Three plans. Different growth objectives.
          </h2>
          <p className="mt-4 text-[14px] leading-relaxed text-muted sm:text-[15px]">
            Each portfolio has a published growth objective and supports investment tenures from one
            to five years. Midpoint rates are used for illustrative projections only.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-6">
          {plans.map((plan) => (
            <article
              key={plan.title}
              className="flex h-full flex-col overflow-hidden rounded-[18px] border border-line bg-white sm:rounded-[20px]"
            >
              <div className="relative aspect-[16/10] bg-brand">
                <Image
                  src={plan.image}
                  alt=""
                  fill
                  quality={70}
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>

              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-[17px] font-semibold tracking-tight text-foreground sm:text-[18px]">
                    {plan.title}
                  </h3>
                  <span className="shrink-0 rounded-full bg-[#ECE8F8] px-2.5 py-1 text-[11px] font-medium text-[#5B4B8A]">
                    {plan.rate}
                  </span>
                </div>

                <p className="mt-3 flex-1 text-[13px] leading-relaxed text-muted sm:text-[14px]">
                  {plan.description}
                </p>

                <Link
                  href="/register"
                  className="mt-5 inline-flex w-fit items-center gap-2 rounded-lg bg-brand-soft px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-soft"
                >
                  Make an investment
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
