import Link from "next/link";

const plans = [
  {
    name: "Group Mentorship",
    price: "99",
    prefix: "$",
    period: "/Month",
    popular: false,
  },
  {
    name: "Premium Mentorship",
    price: "199",
    prefix: "$",
    period: "/Month",
    popular: false,
  },
  {
    name: "Private Mentorship",
    price: "Custom",
    prefix: "",
    period: "/month",
    popular: true,
  },
];

const features = [
  "Monthly subscription",
  "Access to the designated mentorship community",
  "Purchase and subscription status in your account",
];

function Chevron() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
      className="mt-[3px] shrink-0 text-white/80"
    >
      <path
        d="M4.5 2.5 8 6 4.5 9.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Mentorship() {
  return (
    <section
      id="mentorship"
      className="bg-black px-4 py-16 text-white sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-10 lg:py-28"
    >
      <div className="mx-auto w-full max-w-[932px]">
        {/* Header */}
        <div className="mx-auto max-w-[720px] text-center">
          <p className="font-mono text-[13px] text-white">
            <span className="mr-2 inline-block h-[5px] w-[5px] rounded-full bg-white align-middle" />
            Mentorship
          </p>
          <h2 className="mt-2 text-balance text-[clamp(1.6rem,3.2vw,2rem)] font-medium leading-[1.15] tracking-[-0.04em] text-white">
            You don&apos;t have to figure everything out alone.
          </h2>
          <p className="mx-auto mt-4 max-w-[440px] text-[14px] leading-[20px] text-white/80">
            Explore mentorship options that give you a way to continue your
            financial market learning beyond self-paced course materials.
          </p>
        </div>

        {/* Outer frame */}
        <div className="mt-7 rounded-[28px] border border-white/15 p-2">
          <div className="grid gap-2 lg:grid-cols-3">
            {plans.map((plan) => (
              <article
                key={plan.name}
                className={`flex h-full flex-col rounded-[20px] border px-6 py-6 ${
                  plan.popular
                    ? "border-white/20 bg-[linear-gradient(135deg,#2e2e2e_0%,#161616_55%,#0b0b0b_100%)]"
                    : "border-white/15 bg-black"
                }`}
              >
                {/* Title + badge: same reserved height on every card (two lines) */}
                <div className="flex items-start justify-between gap-3 lg:min-h-[60px]">
                  <h3
                    className={`text-[20px] font-medium leading-[30px] tracking-[-0.02em] text-white ${
                      plan.popular ? "lg:max-w-[130px]" : ""
                    }`}
                  >
                    {plan.name}
                  </h3>
                  {plan.popular ? (
                    <span className="mt-[1px] shrink-0 rounded-full bg-[#2D4263] px-3 py-[5px] text-[12px] font-medium leading-[18px] text-white">
                      Most popular
                    </span>
                  ) : null}
                </div>

                {/* Price: identical offset on every card */}
                <div className="mt-8 flex h-10 items-center gap-1.5">
                  {plan.prefix ? (
                    <span className="text-[40px] font-medium leading-none tracking-[-0.03em] text-white">
                      {plan.prefix}
                    </span>
                  ) : null}
                  <span
                    className={`font-medium leading-none tracking-[-0.03em] text-white ${
                      plan.prefix ? "text-[40px]" : "text-[30px]"
                    }`}
                  >
                    {plan.price}
                  </span>
                  <span className="text-[14px] font-normal text-white/90">
                    {plan.period}
                  </span>
                </div>

                {/* CTA */}
                <Link
                  href="/register"
                  className="mt-8 inline-flex h-10 w-full items-center justify-center rounded-[6px] bg-[#2B4470] text-[14px] font-normal text-white transition-colors hover:bg-[#345285]"
                >
                  Subscribe
                </Link>

                {/* Features */}
                <ul className="mt-6 space-y-[9px]">
                  {features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-[13px] font-medium leading-[18px] text-white/80"
                    >
                      <Chevron />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
