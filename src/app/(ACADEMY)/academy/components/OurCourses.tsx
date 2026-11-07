import Image from "next/image";
import Link from "next/link";

const courses = [
  {
    title: "Foundation",
    level: "Beginner",
    description:
      "Build a solid starting point in financial markets, from forex fundamentals and trading terminology to chart analysis, risk management, and trading psychology.",
    image: "/assets/course-foundation.webp",
    href: "#foundation",
  },
  {
    title: "Market Mastery",
    level: "Intermediate",
    description:
      "Build on your existing knowledge with deeper market-structure concepts, multi-timeframe analysis, trade setups, backtesting, and risk management.",
    image: "/assets/course-mastery.webp",
    href: "/market-mastery",
  },
  {
    title: "Advanced Strategy",
    level: "Expert",
    description:
      "Explore advanced market analysis, strategy development, trade management, portfolio-level risk, drawdown management, and performance analytics.",
    image: "/assets/course-advanced.webp",
    href: "#advanced-strategy",
  },
];

export default function OurCourses() {
  return (
    <section id="courses" className="relative z-10 rounded-b-[32px] bg-white px-4 py-14 sm:rounded-b-[40px] sm:px-6 sm:py-16 md:rounded-b-[48px] md:px-8 md:py-20 lg:rounded-b-[56px] lg:px-10 lg:py-24">
      <div className="mx-auto w-full max-w-[1200px]">
        <div className="mx-auto max-w-[640px] text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted sm:text-[12px]">
            <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-muted align-middle" />
            Our courses
          </p>
          <h2 className="mt-4 text-balance text-[clamp(1.65rem,4vw,2.5rem)] font-bold leading-[1.15] tracking-tight text-foreground">
            Find your next step in financial market education.
          </h2>
          <p className="mx-auto mt-4 max-w-[540px] text-[14px] leading-relaxed text-muted sm:text-[15px]">
            Whether you&apos;re starting from the basics or refining your approach, explore a course that
            aligns with your current knowledge and learning goals.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-6 p-4">
          {courses.map((course) => (
            <article
              key={course.title}
              className="flex h-full flex-col overflow-hidden rounded-[18px] border border-line bg-white sm:rounded-[20px] p-4"
            >
              <div className="relative aspect-[16/10]">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  quality={70}
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-contain"
                />
              </div>

              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <span className="inline-flex w-fit rounded-full bg-[#ECE8F8] px-3 py-1 text-[11px] font-medium text-[#5B4B8A]">
                  {course.level}
                </span>
                <h3 className="mt-3 text-[18px] font-semibold tracking-tight text-foreground sm:text-[20px]">
                  {course.title}
                </h3>
                <p className="mt-2 flex-1 text-[13px] leading-relaxed text-muted sm:text-[14px] mb-2">
                  {course.description}
                </p>
                <p className="border-t border-line my-4 leading-relaxed text-muted ">
                  
                </p>
                <Link
                  href={course.href}
                  className="btn-primary mt-4 inline-flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-semibold"
                >
                  Explore course
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
