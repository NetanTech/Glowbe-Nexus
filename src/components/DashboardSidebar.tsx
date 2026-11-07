"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Logo } from "../../public/svgs/svg";
import { clearSession } from "@/src/lib/auth-api";

const menu = [
  { label: "Home", href: "/dashboard", icon: "home" },
  { label: "Wallet", href: "/dashboard/wallet", icon: "wallet" },
  { label: "Investments", href: "/dashboard/investments", icon: "invest" },
  { label: "My Purchases", href: "/dashboard/purchases", icon: "bag" },
] as const;

const management = [
  { label: "Help & Support", href: "/dashboard/support", icon: "help" },
  { label: "Settings", href: "/dashboard/settings", icon: "settings" },
] as const;

function NavIcon({ name }: { name: string }) {
  const common = {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "none",
    "aria-hidden": true as const,
  };

  if (name === "home") {
    return (
      <svg {...common}>
        <path d="M2.5 7.2 8 2.8l5.5 4.4V13a1 1 0 0 1-1 1H9.2V9.6H6.8V14H3.5a1 1 0 0 1-1-1V7.2Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
      </svg>
    );
  }
  if (name === "wallet") {
    return (
      <svg {...common}>
        <rect x="2" y="4" width="12" height="9" rx="1.6" stroke="currentColor" strokeWidth="1.3" />
        <path d="M2 6.5h12M10.5 9.2h2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    );
  }
  if (name === "invest") {
    return (
      <svg {...common}>
        <path d="M2.5 12.5 6 8.2l2.2 2.1L13.5 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 4h3.5V7.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (name === "bag") {
    return (
      <svg {...common}>
        <path d="M3.2 5.5h9.6l-.7 7.2a1 1 0 0 1-1 .9H4.9a1 1 0 0 1-1-.9L3.2 5.5Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
        <path d="M6 5.4V4a2 2 0 0 1 4 0v1.4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    );
  }
  if (name === "help") {
    return (
      <svg {...common}>
        <circle cx="8" cy="8" r="5.2" stroke="currentColor" strokeWidth="1.3" />
        <path d="M6.4 6.5a1.7 1.7 0 0 1 3.1.9c0 1.1-1.5 1.3-1.5 2.3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
        <circle cx="8" cy="11.3" r="0.6" fill="currentColor" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <circle cx="8" cy="8" r="2" stroke="currentColor" strokeWidth="1.3" />
      <path d="M8 2.4v1.3M8 12.3v1.3M2.4 8h1.3M12.3 8h1.3M4 4l.9.9M11.1 11.1l.9.9M12 4l-.9.9M4.9 11.1 4 12" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

export default function DashboardSidebar({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const pathname = usePathname();
  const router = useRouter();

  function logout() {
    clearSession();
    onClose();
    router.push("/login");
  }

  return (
    <aside
      className={`fixed top-0 left-0 z-50 flex h-full w-[220px] shrink-0 flex-col bg-[#1B2838] px-3.5 py-6 text-white transition-transform duration-300 ease-in-out lg:static lg:translate-x-0 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="mb-7 flex items-center justify-between px-2">
        <Link href="/" className="brightness-0 invert" onClick={onClose}>
          <Logo className="h-7 w-auto" />
        </Link>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close menu"
          className="rounded-lg p-1.5 text-white/80 lg:hidden"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      <p className="mb-2 px-3 text-[10px] font-medium tracking-[0.16em] text-white/45">MENU</p>
      <nav className="space-y-0.5">
        {menu.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className={`flex items-center gap-2.5 rounded-lg px-3 py-2 text-[13px] transition-colors ${
                active ? "bg-white font-medium text-[#1B2838]" : "text-white/80 hover:bg-white/10"
              }`}
            >
              <NavIcon name={item.icon} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <p className="mb-2 mt-7 px-3 text-[10px] font-medium tracking-[0.16em] text-white/45">
        MANAGEMENT
      </p>
      <nav className="space-y-0.5">
        {management.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className={`flex items-center gap-2.5 rounded-lg px-3 py-2 text-[13px] transition-colors ${
                active ? "bg-white font-medium text-[#1B2838]" : "text-white/80 hover:bg-white/10"
              }`}
            >
              <NavIcon name={item.icon} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <button
        type="button"
        onClick={logout}
        className="mt-auto px-3 pt-6 text-left text-[13px] text-white/55 hover:text-white"
      >
        Log out
      </button>
    </aside>
  );
}
