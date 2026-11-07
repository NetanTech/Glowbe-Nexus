"use client";

import { useId, useState } from "react";

export type StatCard = {
  label: string;
  value: string;
  naira: string;
  change: string;
  up: boolean;
  note: string;
};

const defaultStats: StatCard[] = [
  {
    label: "Total Amount",
    value: "$36,813.28",
    naira: "₦42,636,948.21",
    change: "10% (-$1,486)",
    up: true,
    note: "Vs last month",
  },
  {
    label: "Total Investment",
    value: "$89,524.93",
    naira: "₦42,636,948.21",
    change: "4.9% (-$805)",
    up: false,
    note: "Vs last month",
  },
  {
    label: "Accrued Growth",
    value: "$5,753.90",
    naira: "₦42,636,948.21",
    change: "4.9% (-$805)",
    up: false,
    note: "Investment interest • 8% p.a",
  },
  {
    label: "Total Purchases",
    value: "0",
    naira: "",
    change: "0",
    up: true,
    note: "Vs last month",
  },
];

function UsFlag() {
  const id = useId().replace(/:/g, "");
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden>
      <defs>
        <clipPath id={id}>
          <circle cx="9" cy="9" r="9" />
        </clipPath>
      </defs>
      <g clipPath={`url(#${id})`}>
        <rect width="18" height="18" fill="#BF0A30" />
        {[1, 3, 5, 7, 9, 11, 13].map((y) => (
          <rect key={y} y={y} width="18" height="1.4" fill="white" />
        ))}
        <rect width="8" height="8" fill="#002868" />
      </g>
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path d="M1.5 8S4 3.8 8 3.8 14.5 8 14.5 8 12 12.2 8 12.2 1.5 8 1.5 8Z" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="8" cy="8" r="1.7" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

function DocIcon() {
  return (
    <span className="flex h-[18px] w-[18px] items-center justify-center rounded-[4px] bg-[#F3F4F6] text-[#98A2B3]">
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
        <path d="M3 1.5h4l2 2V10.5H3V1.5Z" stroke="currentColor" strokeWidth="1" />
        <path d="M7 1.6V3.6h2M4.2 6h3.6M4.2 8h3.6" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      </svg>
    </span>
  );
}

export default function StatCards({ stats = defaultStats }: { stats?: StatCard[] }) {
  const [hidden, setHidden] = useState<Record<string, boolean>>({});

  return (
    <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => {
        const masked = hidden[stat.label];
        return (
          <article key={stat.label} className="rounded-xl border border-[#ECEEF2] bg-white px-4 py-3.5">
            <div className="flex items-center justify-between gap-2">
              <p className="flex items-center gap-1.5 text-[12px] text-[#667085]">
                {stat.naira ? <UsFlag /> : <DocIcon />}
                {stat.label}
              </p>
              {stat.naira ? (
                <button
                  type="button"
                  aria-label={masked ? "Show amount" : "Hide amount"}
                  className="text-[#98A2B3]"
                  onClick={() =>
                    setHidden((current) => ({ ...current, [stat.label]: !current[stat.label] }))
                  }
                >
                  <EyeIcon />
                </button>
              ) : null}
            </div>
            <p className="mt-3 text-[20px] font-semibold tracking-tight text-[#1B2430]">
              {masked ? "••••••" : stat.value}
            </p>
            <p className={`mt-0.5 text-[12px] ${stat.naira ? "text-[#98A2B3]" : "text-transparent"}`}>
              {stat.naira ? (masked ? "••••••" : stat.naira) : "."}
            </p>
            <p className="mt-3 flex items-center justify-between gap-2 border-t border-[#F2F4F7] pt-2.5 text-[11px]">
              <span className={stat.up ? "font-medium text-[#12B76A]" : "font-medium text-[#F04438]"}>
                {stat.up ? "↑" : "↓"} {stat.change}
              </span>
              <span className="text-right text-[#98A2B3]">{stat.note}</span>
            </p>
          </article>
        );
      })}
    </div>
  );
}
