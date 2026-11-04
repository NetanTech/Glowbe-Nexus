import Image from "next/image";

const features = [
  {
    title: "Portfolio management",
    description: "Explore portfolios and manage active investments.",
    image: "/assets/Bottom.webp",
  },
  {
    title: "Personal dashboard",
    description: "See your balance, investment history, and maturity dates.",
    image: "/assets/Container.webp",
  },
  {
    title: "Wallet funding",
    description: "Fund your wallet and review transactions.",
    image: "/assets/Bottom.webp",
  },
  {
    title: "Growth tracking",
    description: "Follow recorded growth throughout your investment.",
    image: "/assets/Container.webp",
  },
  {
    title: "Withdrawal management",
    description: "Submit requests and track their progress.",
    image: "/assets/Bottom.webp",
  },
  {
    title: "Learning resources",
    description: "Discover courses and mentorship opportunities.",
    image: "/assets/Container.webp",
  },
];

export default function CoreFeatures() {
  return (
    <section
      id="features"
      className="relative z-10 rounded-b-[32px] bg-white px-4 py-12 sm:rounded-b-[40px] sm:px-6 sm:py-16 md:rounded-b-[48px] md:px-8 md:py-20 lg:rounded-b-[56px] lg:px-10 lg:py-24"
    >
      <div className="mx-auto w-full max-w-[1200px]">
        <div className="max-w-[640px]">
          <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted sm:text-[12px]">
            <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-muted align-middle" />
            Core Features
          </p>
          <h2 className="mt-3 text-balance text-[clamp(1.6rem,4vw,2.25rem)] font-bold leading-[1.15] tracking-tight text-foreground sm:mt-4">
            Everything you need to manage your investment journey.
          </h2>
          <p className="mt-3 text-[14px] leading-relaxed text-muted sm:mt-4 sm:text-[15px]">
            From funding your wallet to tracking your investments, Glowbe Nexus brings the essential
            parts of your investment experience together in one place.
          </p>
        </div>

        <div className="mt-8 grid gap-x-5 gap-y-8 sm:mt-10 sm:grid-cols-2 sm:gap-y-10 md:mt-12 lg:mt-14 lg:grid-cols-3 lg:gap-x-6">
          {features.map((feature) => (
            <article key={feature.title} className="min-w-0">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[16px] bg-[#F3F5F7] sm:rounded-[18px] mb-4">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  quality={70}
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover pt-8"
                />
              </div>
              <h3 className="mt-3 text-[16px] font-semibold tracking-tight text-foreground sm:mt-4 sm:text-[17px]">
                {feature.title}
              </h3>
              <p className="mt-1 text-[13px] leading-relaxed text-muted sm:mt-1.5 sm:text-[14px]">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
