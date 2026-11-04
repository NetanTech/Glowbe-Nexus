import { HeroBg } from "../../../../../public/svgs/HeroBg";

export default function Hero() {
  return (
    <section className="relative -mt-[4.5rem] overflow-hidden px-4 pb-12 pt-[calc(4.5rem+2.5rem)] sm:px-6 sm:pb-16 sm:pt-[calc(4.5rem+3rem)] md:px-8 lg:px-10 lg:pb-20 lg:pt-[calc(4.5rem+4rem)]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-full overflow-hidden" aria-hidden>
        <HeroBg className="absolute inset-x-0 top-0 h-full w-full" />
      </div>
      <div className="relative z-10 mx-auto flex w-full max-w-[720px] flex-col items-center text-center">
        <span className="inline-flex items-center gap-2 rounded-full  px-3.5 py-1.5 text-[12px] font-medium text-brand border border-brand sm:text-[13px]">
          <span className="h-1.5 w-1.5 rounded-full border " />
          About Us
        </span>
        <h1 className="mt-5 text-balance text-[clamp(1.9rem,5vw,3.5rem)] font-bold leading-[1.1] tracking-tight text-foreground sm:mt-6">
          Helping You Grow Your Financial Future
        </h1>
        <p className="mt-4 max-w-[560px] text-pretty text-[14px] leading-relaxed text-muted sm:mt-5 sm:text-[15px] md:text-base">
          Glowbe Nexus provides a structured investment experience designed to help you plan for your
          financial goals with clarity, flexibility, and transparency.
        </p>
      </div>
    </section>
  );
}
