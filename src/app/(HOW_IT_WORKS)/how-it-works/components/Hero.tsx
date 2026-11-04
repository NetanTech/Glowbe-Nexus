import Link from "next/link";
import { HeroBg } from "../../../../../public/svgs/HeroBg";

export default function Hero() {
  return (
    <section className="relative z-10 -mt-[4.5rem] overflow-hidden rounded-b-[32px] bg-white px-4 pb-16 pt-[calc(4.5rem+2.5rem)] sm:rounded-b-[40px] sm:px-6 sm:pb-20 sm:pt-[calc(4.5rem+3rem)] md:rounded-b-[48px] md:px-8 lg:rounded-b-[56px] lg:px-10 lg:pb-28 lg:pt-[calc(4.5rem+4rem)]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-full overflow-hidden" aria-hidden>
        <HeroBg className="absolute inset-x-0 top-0 h-full w-full" />
      </div>
      <div className="relative z-10 mx-auto flex w-full max-w-[760px] flex-col items-center text-center">
        <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted sm:text-[12px]">
          <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-muted align-middle" />
          How it works
        </p>
        <h1 className="mt-4 max-w-[18ch] text-balance text-[clamp(1.85rem,6vw,4.35rem)] font-medium leading-[1.08] tracking-tight text-foreground sm:max-w-none">
          From getting started to tracking your investments
        </h1>
        <p className="mt-4 max-w-[560px] text-pretty text-[14px] leading-relaxed text-muted sm:mt-6 sm:text-[15px] md:text-base">
          A clear process to create your account, verify identity, fund your wallet, choose a
          portfolio, and monitor your progress in one place.
        </p>
        <div className="mt-6 flex w-full max-w-sm flex-col items-stretch gap-3 sm:mt-8 sm:max-w-none sm:w-auto sm:flex-row sm:items-center sm:justify-center">
          <Link
            href="/register"
            className="rounded-lg bg-brand px-5 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-brand-soft"
          >
            Get started
          </Link>
          <Link
            href="/invest"
            className="rounded-lg border border-line bg-white/90 px-5 py-3 text-center text-sm font-semibold text-foreground backdrop-blur-sm transition-colors hover:bg-surface"
          >
            Explore invest
          </Link>
        </div>
      </div>
    </section>
  );
}
