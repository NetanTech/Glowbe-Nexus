"use client";

import { useState } from "react";
import DashboardSidebar from "@/src/components/DashboardSidebar";
import DashboardHeader from "@/src/components/DashboardHeader";

export default function DashboardShell({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-brand-soft pt-3 pl-3">
      <DashboardSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      {isSidebarOpen ? (
        <button
          type="button"
          aria-label="Close menu"
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      ) : null}

      <div className="flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden rounded-tl-[24px] bg-white">
        <DashboardHeader onMenuClick={() => setIsSidebarOpen(true)} />
        <main className="flex-1 overflow-y-auto px-4 pb-8 pt-5 sm:px-6 lg:px-7">{children}</main>
      </div>
    </div>
  );
}
