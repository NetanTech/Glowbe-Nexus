const testimonials = [
  {
    name: "Adenuga I.",
    quote:
      "Absolutely love this product. It has changed the way I invest and made my money work so much harder without me doing much.",
    initials: "AI",
    tone: "bg-[#dbe4f0] text-brand",
  },
  {
    name: "Chioma O.",
    quote:
      "Absolutely love this product. It has changed the way I invest and made my money work so much harder without me doing much.",
    initials: "CO",
    tone: "bg-[#e8ddd4] text-[#5c4033]",
  },
  {
    name: "Tunde B.",
    quote:
      "Absolutely love this product. It has changed the way I invest and made my money work so much harder without me doing much.",
    initials: "TB",
    tone: "bg-[#dde8e0] text-[#1f4d3a]",
  },
  {
    name: "Amaka E.",
    quote:
      "Absolutely love this product. It has changed the way I invest and made my money work so much harder without me doing much.",
    initials: "AE",
    tone: "bg-[#e8e0f0] text-[#3d2a5c]",
  },
  {
    name: "Ibrahim K.",
    quote:
      "Absolutely love this product. It has changed the way I invest and made my money work so much harder without me doing much.",
    initials: "IK",
    tone: "bg-[#f0e6d8] text-[#5a3d1e]",
  },
  {
    name: "Sarah M.",
    quote:
      "Absolutely love this product. It has changed the way I invest and made my money work so much harder without me doing much.",
    initials: "SM",
    tone: "bg-[#dce8f5] text-[#1e3a5c]",
  },
];

function TestimonialCard({
  name,
  quote,
  initials,
  tone,
}: {
  name: string;
  quote: string;
  initials: string;
  tone: string;
}) {
  return (
    <article className="w-[280px] shrink-0 rounded-[18px] bg-[#F3F5F7] p-5 sm:w-[300px] sm:p-6 md:w-[320px]">
      <div className={`flex h-11 w-11 items-center justify-center rounded-full text-sm font-semibold ${tone}`}>
        {initials}
      </div>
      <p className="mt-4 text-[14px] leading-relaxed text-foreground/80 sm:text-[15px]">{quote}</p>
      <p className="mt-5 text-[14px] font-semibold text-foreground sm:text-[15px]">{name}</p>
    </article>
  );
}

export default function Testimonials() {
  const rowOne = testimonials.slice(0, 3);
  const rowTwo = testimonials.slice(3);

  return (
    <section id="testimonials" className="overflow-hidden bg-white px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-10 lg:py-28">
      <div className="mx-auto w-full max-w-[1200px]">
        <div className="mx-auto max-w-[640px] text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted sm:text-[12px]">
            <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-muted align-middle" />
            Testimonials
          </p>
          <h2 className="mt-4 text-balance text-[clamp(1.65rem,4vw,2.5rem)] font-bold leading-[1.15] tracking-tight text-foreground">
            What our customers say about us
          </h2>
        </div>
      </div>

      <div className="mt-10 space-y-4 sm:mt-12 sm:space-y-5 md:mt-14">
        <div className="flex justify-center gap-4 overflow-x-auto px-4 pb-1 [-ms-overflow-style:none] [scrollbar-width:none] sm:gap-5 [&::-webkit-scrollbar]:hidden">
          {rowOne.map((item) => (
            <TestimonialCard key={item.name} {...item} />
          ))}
        </div>
        <div className="flex justify-center gap-4 overflow-x-auto px-4 pb-1 [-ms-overflow-style:none] [scrollbar-width:none] sm:gap-5 md:translate-x-8 lg:translate-x-12 [&::-webkit-scrollbar]:hidden">
          {rowTwo.map((item) => (
            <TestimonialCard key={item.name} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
