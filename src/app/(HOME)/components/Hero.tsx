import Image from "next/image";
import Link from "next/link";
import { HeroBg } from "../../../../public/svgs/HeroBg";
import CurrencyToggle from "./CurrencyToggle";

export default function Hero() {
  return (
    <section
      id="invest"
      className="relative -mt-[4.5rem] overflow-hidden bg-white px-4 pb-12 pt-[calc(4.5rem+2rem)] sm:px-6 sm:pb-16 sm:pt-[calc(4.5rem+2.5rem)] md:px-8 lg:px-10 lg:pb-24 lg:pt-[calc(4.5rem+3rem)]"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-full overflow-hidden" aria-hidden>
        <HeroBg className="absolute inset-x-0 top-0 h-full w-full" />
      </div>
      <div className="relative z-10 mx-auto flex w-full max-w-[760px] flex-col items-center text-center">
        <h1 className="max-w-[18ch] text-balance text-[clamp(1.85rem,6vw,4.35rem)] font-medium leading-[1.08] tracking-tight text-foreground sm:max-w-none">
          Build your financial future with intention
        </h1>

        <p className="mt-4 max-w-[560px] text-pretty text-[14px] leading-relaxed text-muted sm:mt-6 sm:text-[15px] md:text-base">
          Explore investment portfolios, track your financial growth, and build your understanding of
          the markets with tools designed to support more informed decisions.
        </p>

        <div className="mt-6 flex w-full max-w-sm flex-col items-stretch gap-3 sm:mt-8 sm:max-w-none sm:w-auto sm:flex-row sm:items-center sm:justify-center">
          <Link
            href="/register"
            className="btn-primary rounded-lg px-5 py-3 text-center text-sm font-semibold"
          >
            Get started
          </Link>
          <Link
            href="#academy"
            className="rounded-lg border border-line bg-white/90 px-5 py-3 text-center text-sm font-semibold text-foreground backdrop-blur-sm transition-colors hover:bg-surface"
          >
            Get a course
          </Link>
        </div>
      </div>

      <div className="relative z-10 mx-auto mt-8 grid w-full max-w-[1200px] gap-3 sm:mt-10 sm:gap-4 md:mt-12 lg:mt-14 lg:grid-cols-[2fr_3fr] lg:items-stretch lg:gap-5">
        <div className="relative h-[280px] overflow-hidden rounded-[18px] bg-surface sm:h-[360px] sm:rounded-[22px] md:h-[400px] lg:h-[460px]">
          <Image
            src="/assets/Hero-image-one.png"
            alt="Two people reviewing investments together on a phone"
            fill
            priority
            quality={75}
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/40 to-transparent p-3 sm:p-4 md:p-5">
            <CurrencyToggle />
          </div>
        </div>

        <div className="relative h-[280px] overflow-hidden rounded-[18px] bg-surface sm:h-[360px] sm:rounded-[22px] md:h-[400px] lg:h-[460px]">
          <Image
            src="/assets/Hero-image-two.png"
            alt="Glowbe Nexus dashboard preview"
            fill
            quality={75}
            sizes="(min-width: 1024px) 60vw, 100vw"
            className="object-cover object-top"
          />
        </div>
      </div>
    </section>
  );
}
