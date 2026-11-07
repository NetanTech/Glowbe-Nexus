import Image from "next/image";
import Link from "next/link";
import { HeroBg } from "../../../../../public/svgs/HeroBg";

export default function Hero() {
  return (
    <section className="relative -mt-[4.5rem] overflow-hidden px-4 pb-12 pt-[calc(4.5rem+2.5rem)] sm:px-6 sm:pb-16 sm:pt-[calc(4.5rem+3rem)] md:px-8 lg:px-10 lg:pb-20 lg:pt-[calc(4.5rem+4rem)]">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-full overflow-hidden"
        aria-hidden
      >
        <HeroBg className="absolute inset-x-0 top-0 h-full w-full" />
      </div>
      <div className="relative z-10 mx-auto flex w-full max-w-[760px] flex-col items-center text-center">
        <h1 className="text-balance text-[clamp(1.9rem,5.5vw,3.75rem)] font-bold leading-[1.08] tracking-tight text-foreground">
          Market Mastery
        </h1>
        <p className="mt-4 max-w-[560px] text-pretty text-[14px] leading-relaxed text-muted sm:mt-5 sm:text-[15px] md:text-base">
          Build on your existing knowledge with deeper market-structure concepts, multi-timeframe analysis, trade setups, backtesting, and risk management.
        </p>
        
      </div>

      <div className="relative z-10 mx-auto mt-10 aspect-[16/10] w-full max-w-[1100px] overflow-hidden rounded-[22px] bg-surface sm:mt-12 sm:aspect-[16/9] sm:rounded-[28px] lg:mt-14 lg:aspect-auto lg:min-h-[480px]">
        <Image
          src="/assets/market-mastery-hero.png"
          alt="Glowbe Nexus investment dashboard preview"
          fill
          priority
          quality={75}
          sizes="(min-width: 1100px) 1100px, 100vw"
          className="object-cover object-top"
        />
      </div>
    </section>
  );
}
