import Image from "next/image";
import Link from "next/link";
import { HeroBg } from "../../../../../public/svgs/HeroBg";

export default function Hero() {
  return (
    <section className="relative -mt-[4.5rem] overflow-hidden bg-white px-4 pb-12 pt-[calc(4.5rem+2rem)] sm:px-6 sm:pb-16 sm:pt-[calc(4.5rem+2.5rem)] md:px-8 lg:px-10 lg:pb-20 lg:pt-[calc(4.5rem+3.5rem)]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-full overflow-hidden" aria-hidden>
        <HeroBg className="absolute inset-x-0 top-0 h-full w-full" />
      </div>
      <div className="relative z-10 mx-auto grid w-full max-w-[1200px] items-center gap-8 lg:grid-cols-[1fr_1.05fr] lg:gap-12 xl:gap-16">
        <div className="max-w-[540px]">
          <h1 className="text-balance text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.08] tracking-tight text-foreground">
            Learn the markets. Strengthen your strategy.
          </h1>
          <p className="mt-4 text-[14px] leading-relaxed text-muted sm:mt-5 sm:text-[15px] md:text-base">
            Build a deeper understanding of financial markets through structured courses and
            mentorship designed around market knowledge, disciplined decision-making, and risk
            management.
          </p>
          <div className="mt-6 flex w-full max-w-sm flex-col items-stretch gap-3 sm:mt-8 sm:max-w-none sm:flex-row sm:items-center">
            <Link
              href="#courses"
              className="btn-primary rounded-lg px-5 py-3 text-center text-sm font-semibold"
            >
              Browse courses
            </Link>
            <Link
              href="#mentorship"
              className="rounded-lg border border-line bg-white/90 px-5 py-3 text-center text-sm font-semibold text-foreground backdrop-blur-sm transition-colors hover:bg-surface"
            >
              Explore mentorship
            </Link>
          </div>
        </div>

        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[22px] bg-surface sm:aspect-[16/11] sm:rounded-[28px] lg:aspect-auto lg:min-h-[420px]">
          <Image
            src="/assets/academy-hero.webp"
            alt="Learner studying markets on a laptop"
            fill
            priority
            quality={75}
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
