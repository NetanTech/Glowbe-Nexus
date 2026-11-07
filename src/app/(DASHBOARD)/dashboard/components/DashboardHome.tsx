"use client";

import { useEffect, useState } from "react";
import { fetchCurrentUser } from "@/src/lib/auth-api";
import StatCards from "./StatCards";
import GrowthChart from "./GrowthChart";
import ProfileChecklist from "./ProfileChecklist";

export default function DashboardHome() {
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
    <div>
      <h1 className="text-[22px] font-semibold tracking-tight text-[#1B2430] sm:text-[24px]">
        Hey {name},
      </h1>
      <p className="mt-1 text-[13px] text-[#8B93A1]">Welcome to Glowbe Nexus, Let&apos;s get investing.</p>

      <div className="mt-5">
        <StatCards />
      </div>

      <div className="mt-4 grid items-start gap-4 xl:grid-cols-[minmax(0,1.45fr)_minmax(300px,0.9fr)]">
        <GrowthChart />
        <ProfileChecklist />
      </div>
    </div>
  );
}
