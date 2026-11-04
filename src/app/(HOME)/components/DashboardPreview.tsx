const stats = [
  { label: "Total Amount", value: "$36,813.28", change: "+1.6% (+$340)", up: true },
  { label: "Total Investment", value: "$89,524.93", change: "+2.1% (+$1,240)", up: true },
  { label: "Active Plans", value: "12", change: "+1 this month", up: true },
  { label: "Courses", value: "08", change: "2 in progress", up: true },
];

const menu = [
  { label: "Home", active: true },
  { label: "Wallet", active: false },
  { label: "Investments", active: false },
  { label: "My Purchases", active: false },
];

const checklist = [
  { label: "Complete profile", done: true },
  { label: "Verify your identity", done: false },
  { label: "Make your first deposit", done: false },
];

export default function DashboardPreview() {
  return (
    <div className="flex h-full min-h-[280px] overflow-hidden rounded-[18px] border border-line bg-white shadow-[0_20px_50px_rgba(11,31,58,0.08)] sm:min-h-[360px] sm:rounded-[22px] lg:min-h-[440px]">
      <aside className="hidden w-[108px] shrink-0 flex-col bg-brand px-2.5 py-3 text-white md:flex md:w-[120px] lg:w-[132px] lg:px-3 lg:py-4">
        <div className="mb-4 flex items-center gap-1.5 px-1 lg:mb-6 lg:gap-2">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/15 text-[9px] font-bold lg:h-7 lg:w-7 lg:text-[10px]">
            GN
          </span>
          <span className="text-[9px] font-semibold leading-tight lg:text-[10px]">Glowbe Nexus</span>
        </div>

        <p className="mb-1.5 px-2 text-[8px] font-semibold uppercase tracking-[0.14em] text-white/45 lg:mb-2 lg:text-[9px]">
          Menu
        </p>
        <ul className="space-y-0.5 lg:space-y-1">
          {menu.map((item) => (
            <li key={item.label}>
              <span
                className={`block rounded-md px-2 py-1.5 text-[10px] lg:text-[11px] ${
                  item.active ? "bg-white/15 font-semibold" : "text-white/70"
                }`}
              >
                {item.label}
              </span>
            </li>
          ))}
        </ul>

        <p className="mb-1.5 mt-4 px-2 text-[8px] font-semibold uppercase tracking-[0.14em] text-white/45 lg:mb-2 lg:mt-6 lg:text-[9px]">
          Management
        </p>
        <ul className="space-y-0.5 lg:space-y-1">
          <li>
            <span className="block rounded-md px-2 py-1.5 text-[10px] text-white/70 lg:text-[11px]">
              Help & Support
            </span>
          </li>
          <li>
            <span className="block rounded-md px-2 py-1.5 text-[10px] text-white/70 lg:text-[11px]">
              Settings
            </span>
          </li>
        </ul>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col bg-[#f7f8fb] p-2.5 sm:p-3 md:p-4">
        <div className="mb-2 flex items-center gap-2 sm:mb-3">
          <div className="h-7 flex-1 truncate rounded-lg border border-line bg-white px-2.5 text-[9px] leading-7 text-muted sm:h-8 sm:px-3 sm:text-[10px] sm:leading-8">
            Search investments, courses...
          </div>
          <div className="h-7 w-7 shrink-0 rounded-full bg-brand/10 sm:h-8 sm:w-8" />
        </div>

        <p className="mb-2 text-[11px] font-semibold leading-snug text-foreground sm:mb-3 sm:text-[12px] md:text-[13px]">
          Hey Isaac, Welcome to Glowbe Nexus, Let&apos;s get investing.
        </p>

        <div className="mb-2 grid grid-cols-2 gap-1.5 sm:mb-3 sm:gap-2 xl:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`rounded-xl border border-line bg-white p-2 sm:p-2.5 ${
                index > 1 ? "hidden sm:block" : ""
              }`}
            >
              <p className="text-[8px] font-medium text-muted sm:text-[9px]">{stat.label}</p>
              <p className="mt-0.5 text-[11px] font-bold tracking-tight text-foreground sm:mt-1 sm:text-[12px] md:text-[13px]">
                {stat.value}
              </p>
              <p
                className={`mt-0.5 text-[8px] font-medium sm:mt-1 sm:text-[9px] ${
                  stat.up ? "text-emerald-600" : "text-rose-600"
                }`}
              >
                {stat.change}
              </p>
            </div>
          ))}
        </div>

        <div className="grid min-h-0 flex-1 gap-1.5 sm:gap-2 md:grid-cols-[1.4fr_0.9fr]">
          <div className="rounded-xl border border-line bg-white p-2.5 sm:p-3">
            <div className="mb-1.5 flex items-center justify-between sm:mb-2">
              <p className="text-[10px] font-semibold text-foreground sm:text-[11px]">Accrued Growth</p>
              <span className="rounded-md bg-surface px-2 py-0.5 text-[8px] font-medium text-muted sm:text-[9px]">
                2024
              </span>
            </div>
            <svg viewBox="0 0 280 90" className="h-auto w-full" aria-hidden="true">
              <defs>
                <linearGradient id="growthFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#7EB6FF" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#7EB6FF" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M0 70 C40 66, 55 48, 90 52 C120 56, 140 30, 170 28 C205 25, 230 40, 280 18 L280 90 L0 90 Z"
                fill="url(#growthFill)"
              />
              <path
                d="M0 70 C40 66, 55 48, 90 52 C120 56, 140 30, 170 28 C205 25, 230 40, 280 18"
                fill="none"
                stroke="#1a3358"
                strokeWidth="2.2"
              />
              <circle cx="170" cy="28" r="4" fill="#0B1F3A" />
            </svg>
          </div>

          <div className="rounded-xl border border-line bg-white p-2.5 sm:p-3">
            <p className="mb-1.5 text-[10px] font-semibold text-foreground sm:mb-2 sm:text-[11px]">
              Get started
            </p>
            <ul className="space-y-1.5 sm:space-y-2">
              {checklist.map((item) => (
                <li
                  key={item.label}
                  className="flex items-center gap-2 text-[9px] text-foreground/80 sm:text-[10px]"
                >
                  <span
                    className={`flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full text-[8px] sm:h-4 sm:w-4 sm:text-[9px] ${
                      item.done ? "bg-emerald-500 text-white" : "border border-line bg-surface text-muted"
                    }`}
                  >
                    {item.done ? "✓" : ""}
                  </span>
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
