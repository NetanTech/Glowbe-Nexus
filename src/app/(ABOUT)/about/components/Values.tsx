import Image from "next/image";
import {
  AboutEyesIcon,
  InvestorIcon,
  LearningIcon,
  LongTermIcon,
  RiskIcon,
} from "../../../../../public/svgs/svg";

const values = [
  {
    title: "Integrity & Transparency",
    description:
      "We communicate clearly, act responsibly, and treat trust as a responsibility, not a marketing claim.",
    icon: AboutEyesIcon,
  },
  {
    title: "Disciplined Risk Management",
    description:
      "We assess risk carefully and make decisions with a clear process rather than speculation or promises of easy returns.",
    icon: RiskIcon,
  },
  {
    title: "Long-Term Value",
    description:
      "We prioritise sustainable wealth-building and informed decisions over short-term hype.",
    icon: LongTermIcon,
  },
  {
    title: "Investor Partnership",
    description:
      "We aim to serve local and international investors with professionalism, respect, and consistent communication.",
    icon: InvestorIcon,
  },
  {
    title: "Learning & Empowerment",
    description:
      "We help people better understand investing so they can make more confident, informed financial decisions.",
    icon: LearningIcon,
  },
];

export default function Values() {
  const featured = values[4];
  const FeaturedIcon = featured.icon;

  return (
    <section className="bg-[#F3F5F7] px-4 py-14 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-10 lg:py-24">
      <div className="mx-auto grid w-full max-w-[1200px] gap-4 lg:grid-cols-[1.05fr_1.35fr] lg:gap-5">
        <div className="relative flex min-h-[420px] flex-col overflow-hidden rounded-[22px] bg-white p-6 sm:min-h-[520px] sm:rounded-[28px] sm:p-8 lg:min-h-full">
          <div className="relative z-10">
            <p className="text-[12px] font-medium text-[#3B5BDB]">
              <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-[#3B5BDB] align-middle" />
              Our values
            </p>
            <h2 className="mt-4 max-w-[280px] text-balance text-[clamp(1.7rem,3.5vw,2.4rem)] font-bold leading-[1.15] tracking-tight text-foreground">
              The principle behind our promise
            </h2>
          </div>

          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[55%] sm:h-[60%]">
            <Image
              src="/assets/coin-pot.png"
              alt="Plant growing into a coin, representing long-term value"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-contain object-left-bottom"
              priority
            />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
          {values.slice(0, 4).map((value) => {
            const Icon = value.icon;
            return (
              <article
                key={value.title}
                className="rounded-[18px] bg-white p-5 sm:rounded-[20px] sm:p-6"
              >
                <Icon className="h-8 w-8" aria-hidden />
                <h3 className="mt-4 text-[16px] font-semibold tracking-tight text-foreground sm:text-[17px]">
                  {value.title}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-muted sm:text-[14px]">
                  {value.description}
                </p>
              </article>
            );
          })}

          <article className="rounded-[18px] bg-white p-5 sm:col-span-2 sm:rounded-[20px] sm:p-6">
            <FeaturedIcon className="h-8 w-8" aria-hidden />
            <h3 className="mt-4 text-[16px] font-semibold tracking-tight text-foreground sm:text-[17px]">
              {featured.title}
            </h3>
            <p className="mt-2 max-w-[640px] text-[13px] leading-relaxed text-muted sm:text-[14px]">
              {featured.description}
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
