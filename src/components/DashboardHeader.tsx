"use client";

import { useEffect, useState } from "react";
import { fetchCurrentUser } from "@/src/lib/auth-api";

export default function DashboardHeader({ onMenuClick }: { onMenuClick: () => void }) {
  const [name, setName] = useState("Isaac");

  useEffect(() => {
    fetchCurrentUser()
      .then((user) => {
        const first = user?.name?.trim().split(" ")[0];
        if (first) setName(first);
      })
      .catch(() => undefined);
  }, []);

  return (
    <div className="flex items-center justify-between gap-4 px-4 pt-4 sm:px-6 sm:pt-5 lg:px-7">
      <div className="flex min-w-0 flex-1 items-center gap-3">
        <button
          type="button"
          onClick={onMenuClick}
          aria-label="Open menu"
          className="rounded-lg p-2 text-[#1B2430] hover:bg-[#F4F5F7] lg:hidden"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
        <label className="flex w-full max-w-[440px] items-center gap-2 rounded-full bg-[#F3F4F6] px-4 py-2 text-[13px] text-[#98A2B3]">
          <span aria-hidden>⌕</span>
          <input
            placeholder="Search investments, courses, transactions..."
            className="min-w-0 flex-1 bg-transparent text-[#1B2430] outline-none placeholder:text-[#98A2B3]"
          />
        </label>
      </div>

      <div className="flex shrink-0 items-center gap-3">
        <button
          type="button"
          aria-label="Notifications"
          className="relative flex h-9 w-9 items-center justify-center rounded-full text-[#1B2430]"
        >
          <svg width="18" height="18" viewBox="0 0 16 16" fill="none" aria-hidden>
            <path d="M8 2.2a3.4 3.4 0 0 0-3.4 3.4v1.7c0 .6-.2 1.2-.6 1.7L3.2 10.2h9.6l-.8-1.2c-.4-.5-.6-1.1-.6-1.7V5.6A3.4 3.4 0 0 0 8 2.2Z" stroke="currentColor" strokeWidth="1.2" />
            <path d="M6.6 11.4a1.4 1.4 0 0 0 2.8 0" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
          <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-[#F04438]" />
        </button>
        <button type="button" className="flex items-center gap-1.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E4E7EC] text-[13px] font-semibold text-[#1B2838]">
            {name.slice(0, 1)}
          </span>
          <span aria-hidden className="text-[11px] text-[#98A2B3]">▾</span>
        </button>
      </div>
    </div>
  );
}
