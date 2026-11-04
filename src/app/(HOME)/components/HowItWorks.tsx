import Image from "next/image";

const steps = [
  {
    step: "Step 1",
    title: "Create your account",
    description:
      "Register with your details to establish your Glowbe Nexus account.",
  },
  {
    step: "Step 2",
    title: "Verify your identity",
    description:
      "Complete the required identity verification before accessing investment and funding features.",
  },
  {
    step: "Step 3",
    title: "Fund your wallet",
    description:
      "Add funds to your wallet using the available payment options and review the applicable conversion details before confirming.",
  },
  {
    step: "Step 4",
    title: "Choose your investment",
    description:
      "Explore the available portfolios, select your investment amount and tenure, and review the terms before proceeding.",
  },
  {
    step: "Step 5",
    title: "Monitor your progress",
    description:
      "Use your dashboard to view investment activity, track growth records, and follow important maturity and withdrawal information.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="px-4 py-16 text-white sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-10 lg:py-28"
    >
      <div className="mx-auto w-full max-w-[1200px]">
        <div className="mx-auto max-w-[720px] text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-white/55 sm:text-[12px]">
            <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-white/55 align-middle" />
            How it works
          </p>
          <h2 className="mt-4 text-balance text-[clamp(1.65rem,4vw,2.5rem)] font-bold leading-[1.15] tracking-tight sm:mt-5">
            From getting started to tracking your investments.
          </h2>
          <p className="mx-auto mt-4 max-w-[560px] text-[14px] leading-relaxed text-white/60 sm:mt-5 sm:text-[15px]">
            Get started with a clear process designed to help you understand
            each stage of your investment journey.
          </p>
        </div>

        <div className="mt-12 grid gap-10 sm:mt-14 sm:gap-12 lg:mt-16 lg:grid-cols-[3fr_2fr] lg:gap-14 xl:gap-20">
          <div className="min-w-0">
            <div className="md:sticky md:top-28">
              <div className="rounded-[22px] bg-[#1a3a6b] p-3 sm:rounded-[28px] sm:p-4 md:p-5">
                <div className="relative h-[240px] w-full overflow-hidden rounded-[18px] sm:h-[340px] sm:rounded-[22px] md:h-[400px] lg:h-[min(520px,calc(100vh-8rem))]">
                  <Image
                    src="/assets/howitworks.webp"
                    alt="Glowbe Nexus dashboard preview"
                    fill
                    quality={75}
                    sizes="(min-width: 1024px) 700px, 100vw"
                    className="object-contain object-center"
                  />
                </div>
              </div>
            </div>
          </div>

          <ol className="min-w-0 lg:pt-2">
            {steps.map((item) => (
              <li
                key={item.step}
                className="border-b border-white/15 py-6 first:pt-0 last:border-b-0 last:pb-0 sm:py-7 lg:py-8"
              >
                <p className="text-[12px] font-medium text-white/45 sm:text-[13px]">
                  {item.step}
                </p>
                <h3 className="mt-2 text-[17px] font-semibold tracking-tight sm:text-[18px] md:text-[20px]">
                  {item.title}
                </h3>
                <p className="mt-2 max-w-[420px] text-[13px] leading-relaxed text-white/60 sm:text-[14px]">
                  {item.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}