"use client";

import { Suspense, useState } from "react";
import DashboardSidebar from "@/src/components/DashboardSidebar";
import DashboardHeader from "@/src/components/DashboardHeader";

function SidebarFallback({ isOpen }: { isOpen: boolean }) {
  return (
    <aside
      aria-hidden
      className={`fixed top-0 left-0 z-50 flex h-full w-[220px] shrink-0 flex-col bg-[#1B2838] px-3.5 py-6 text-white transition-transform duration-300 ease-in-out lg:static lg:translate-x-0 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    />
  );
}

export default function DashboardShell({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-brand-soft pt-3 pl-3">
      <Suspense fallback={<SidebarFallback isOpen={isSidebarOpen} />}>
        <DashboardSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      </Suspense>

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
