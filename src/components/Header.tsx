"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { CloseIcon, Logo, MenuIcon } from "../../public/svgs/svg";

const links = [
  { label: "Home", href: "/" },
  { label: "Academy", href: "/academy" },
  { label: "Invest", href: "/invest" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "About us", href: "/about" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-transparent bg-white/70 backdrop-blur-md supports-backdrop-filter:bg-white/55">
      <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between gap-3 px-4 py-3.5 sm:gap-4 sm:px-6 sm:py-4 md:px-8 lg:px-10">
        <Link
          href="/"
          className="min-w-0 shrink-0"
          onClick={() => setMenuOpen(false)}
        >
          <Logo className="h-7 w-auto sm:h-9" />
          <span className="sr-only">Glowbe Nexus</span>
        </Link>

        <nav
          className="hidden items-center gap-5 lg:flex lg:gap-7"
          aria-label="Main"
        >
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="whitespace-nowrap text-[13px] font-medium text-foreground/80 transition-colors hover:text-foreground xl:text-[14px]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="/login"
            className="hidden rounded-lg px-3 py-2 text-[12px] font-semibold text-foreground transition-colors hover:text-brand sm:inline-flex sm:text-[13px]"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="btn-primary hidden rounded-lg px-3.5 py-2 text-[12px] font-semibold sm:inline-flex sm:px-4 sm:py-2.5 sm:text-[13px]"
          >
            Get started
          </Link>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-line bg-white text-brand lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div
          id="mobile-nav"
          className="absolute inset-x-0 top-full border-b border-line bg-white px-4 py-4 shadow-lg sm:px-6 lg:hidden"
        >
          <nav
            className="mx-auto flex w-full max-w-[1200px] flex-col gap-1"
            aria-label="Mobile"
          >
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="rounded-lg px-3 py-3 text-sm font-medium text-foreground transition-colors hover:bg-surface"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/login"
              className="mt-2 rounded-lg px-4 py-3 text-center text-sm font-semibold text-foreground"
              onClick={() => setMenuOpen(false)}
            >
              Login
            </Link>
            <Link
              href="/register"
              className="btn-primary rounded-lg px-4 py-3 text-center text-sm font-semibold"
              onClick={() => setMenuOpen(false)}
            >
              Get started
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
