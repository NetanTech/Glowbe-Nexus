"use client";

const defaultPoints = [148, 156, 142, 134, 126, 108, 96, 62, 98, 118, 108, 122];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

type GrowthChartProps = {
  title?: string;
  value?: string;
  change?: string;
  year?: string;
  points?: number[];
  peakLabel?: string;
  peakIndex?: number;
};

export default function GrowthChart({
  title = "Accrued Growth",
  value = "$5,753.90",
  change = "↓ 4.9% (-$805)",
  year = "2026",
  points = defaultPoints,
  peakLabel = "$10,000",
  peakIndex = 7,
}: GrowthChartProps) {
  const width = 640;
  const height = 210;
  const step = width / (points.length - 1);
  const line = points
    .map((y, index) => `${index === 0 ? "M" : "L"} ${index * step} ${y}`)
    .join(" ");
  const peakX = peakIndex * step;
  const peakY = points[peakIndex] ?? points[points.length - 1];

  return (
    <div className="rounded-xl border border-[#ECEEF2] bg-white p-4 sm:p-5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-[13px] text-[#8B93A1]">{title}</p>
          <p className="mt-1 flex flex-wrap items-center gap-2">
            <span className="text-[20px] font-semibold tracking-tight text-[#1B2430]">{value}</span>
            <span className="text-[12px] font-medium text-[#E11D48]">{change}</span>
          </p>
        </div>
        <button
          type="button"
          className="inline-flex items-center gap-1.5 rounded-lg border border-[#ECEEF2] bg-white px-2.5 py-1.5 text-[12px] text-[#1B2430]"
        >
          <span aria-hidden>▦</span> {year}
          <span aria-hidden className="text-muted">▾</span>
        </button>
      </div>

      <div className="mt-4 grid grid-cols-[36px_1fr] gap-2">
        <div className="flex h-[210px] flex-col justify-between text-[10px] text-muted">
          <span>100k</span>
          <span>50k</span>
          <span>10k</span>
          <span>1k</span>
          <span>500</span>
          <span>100</span>
        </div>
        <div>
          <svg viewBox={`0 0 ${width} ${height}`} className="h-[210px] w-full">
            {[40, 80, 120, 160, 200].map((y) => (
              <line key={y} x1="0" x2={width} y1={y} y2={y} stroke="#EEF1F4" />
            ))}
            <path d={line} fill="none" stroke="#6D7E96" strokeWidth="1.7" />
            <line x1={peakX} x2={peakX} y1={peakY} y2={height} stroke="#C5CED8" strokeDasharray="3 3" />
            <circle cx={peakX} cy={peakY} r="5" fill="#1B3354" />
            <g transform={`translate(${peakX - 28}, ${peakY - 34})`}>
              <rect width="56" height="22" rx="11" fill="white" stroke="#E6E9EF" />
              <text x="28" y="15" textAnchor="middle" fontSize="10" fill="#17253B">
                {peakLabel}
              </text>
            </g>
          </svg>
          <div className="mt-1 grid grid-cols-12 text-center text-[10px] text-muted">
            {months.map((month) => (
              <span key={month}>{month}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
