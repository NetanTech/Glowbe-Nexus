import Image from "next/image";
import {
  DevelopIcon,
  LearningFundamentalsIcon,
  UnderstandIcon,
} from "../../../../../public/svgs/svg";

const features = [
  {
    title: "Learn the fundamentals",
    description:
      "Understand the concepts behind financial markets and trading.",
    icon: LearningFundamentalsIcon,
  },
  {
    title: "Understand risk",
    description:
      "Build awareness of risk management, capital preservation, and trading discipline.",
    icon: UnderstandIcon,
  },
  {
    title: "Develop your analysis",
    description:
      "Explore market structure, trading strategies, and performance evaluation.",
    icon: DevelopIcon,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white px-4 py-14 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-10 lg:py-24">
      <div className="mx-auto w-full max-w-[1200px]">
        <div className="mx-auto max-w-[640px] text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted sm:text-[12px]">
            <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-muted align-middle" />
            Why choose us
          </p>
          <h2 className="mt-4 text-balance text-[clamp(1.65rem,4vw,2.5rem)] font-bold leading-[1.15] tracking-tight text-foreground">
            Build knowledge you can put into practice.
          </h2>
          <p className="mx-auto mt-4 max-w-[520px] text-[14px] leading-relaxed text-muted sm:text-[15px]">
            Understanding the markets takes more than memorising concepts. It
            requires a structured approach to analysis, risk management, and
            decision-making.
          </p>
        </div>

        <div className="mt-10 grid items-start gap-6 sm:mt-12 lg:mt-14 lg:grid-cols-[2fr_3fr] lg:gap-8 xl:gap-10">
          <div className="relative isolate aspect-[4/3] w-full overflow-hidden rounded-[22px] bg-surface sm:aspect-[1/1] sm:rounded-[28px] lg:aspect-[1/1]">
            <Image
              src="/assets/academy-why.webp"
              alt="Learners collaborating during an Academy session"
              fill
              quality={75}
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="rounded-[22px] object-cover sm:rounded-[28px]"
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <article
                  key={feature.title}
                  className="flex flex-col rounded-[18px] bg-[#F3F5F7] p-5 sm:rounded-[20px] sm:p-6"
                >
                  <div className="flex w-16 items-center justify-center">
                    <Icon />
                  </div>
                  <h3 className="mt-5 text-[17px] font-semibold tracking-tight text-foreground sm:text-[18px]">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-muted sm:text-[14px]">
                    {feature.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
