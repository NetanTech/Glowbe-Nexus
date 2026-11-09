import Link from "next/link";
import { Logo } from "../../public/svgs/svg";

const explore = [
  { label: "Home", href: "/" },
  { label: "Investment Plans", href: "/invest" },
  { label: "Academy", href: "/academy" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "About Us", href: "/about" },
];

const company = [
  { label: "About", href: "/about" },
  { label: "Support", href: "#support" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact us", href: "#contact" },
];

const legal = [
  { label: "Privacy policy", href: "#privacy" },
  { label: "Terms of Service", href: "#terms" },
  { label: "AML Policy", href: "#aml" },
  { label: "Risk Disclosure", href: "#risk" },
];

function FacebookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M14 9h3V6h-3c-1.7 0-3 1.3-3 3v2H9v3h2v7h3v-7h3l1-3h-4V9c0-.6.4-1 1-1Z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.727-8.924L1.254 2.25H8.08l4.253 5.622L18.244 2.25Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M6.5 9.5H3.7V20h2.8V9.5ZM5.1 4C4.1 4 3.3 4.8 3.3 5.8S4.1 7.6 5.1 7.6 6.9 6.8 6.9 5.8 6.1 4 5.1 4ZM20.3 20h-2.8v-5.4c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V20H10.8V9.5h2.7v1.4h.1c.4-.7 1.3-1.5 2.7-1.5 2.9 0 3.4 1.9 3.4 4.4V20Z" />
    </svg>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <p className="text-[14px] font-medium text-white">{title}</p>
      <ul className="mt-5 space-y-[15px]">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-[14px] text-white/80 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer
      id="get-started"
      className="sticky bottom-0 z-0 overflow-hidden bg-[#17253B] text-white"
    >
      <div className="relative z-10 mx-auto w-full max-w-[1140px] px-6 pt-16 sm:pt-20 md:px-10">
        {/* CTA */}
        <div className="mx-auto max-w-[480px] text-center">
          <h2 className="text-balance text-[clamp(1.6rem,3vw,2.25rem)] font-medium leading-[1.15] tracking-[-0.03em]">
            Make your next financial decision a more informed one.
          </h2>
          <p className="mx-auto mt-5 max-w-[480px] text-[14px] leading-[1.55] text-white/85">
            Explore your investment options, understand the process, and take the first step toward
            managing your financial journey with greater clarity.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <Link
              href="/register"
              className="rounded-md bg-white px-5 py-2 text-center text-[13px] font-medium text-[#14284B] transition-colors hover:bg-white/90"
            >
              Get started
            </Link>
            <Link
              href="#academy"
              className="rounded-md border border-white/40 px-5 py-2 text-center text-[13px] font-medium text-white transition-colors hover:bg-white/10"
            >
              Get a course
            </Link>
          </div>
        </div>

        {/* Brand + links */}
        <div className="mt-20 flex flex-col gap-12 md:flex-row md:justify-between">
          <div className="max-w-[290px]">
            <Link href="/" className="inline-flex items-center">
              <span className="brightness-0 invert">
                <Logo className="h-8 w-auto" />
              </span>
              <span className="sr-only">Glowbe Nexus</span>
            </Link>
            <p className="mt-5 text-[14px] leading-[1.55] text-white/85">
              Bringing investment management, portfolio visibility, and financial market education
              together in one experience.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-12 gap-y-10 lg:gap-x-24">
            <FooterColumn title="Explore" links={explore} />
            <FooterColumn title="Company" links={company} />
            <FooterColumn title="Legal" links={legal} />
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pb-9 pt-12 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[13px] text-white/65">© 2026 Glowbe Nexus. All rights reserved.</p>
          <div className="flex items-center gap-5 text-white">
            <Link href="#facebook" aria-label="Facebook" className="transition-opacity hover:opacity-70">
              <FacebookIcon />
            </Link>
            <Link href="#x" aria-label="X" className="transition-opacity hover:opacity-70">
              <XIcon />
            </Link>
            <Link href="#instagram" aria-label="Instagram" className="transition-opacity hover:opacity-70">
              <InstagramIcon />
            </Link>
            <Link href="#linkedin" aria-label="LinkedIn" className="transition-opacity hover:opacity-70">
              <LinkedInIcon />
            </Link>
          </div>
        </div>
      </div>

      {/* Oversized, cropped watermark */}
      <div
        aria-hidden
        className="pointer-events-none h-[13vw] select-none overflow-hidden text-center"
      >
        <p className="whitespace-nowrap text-[23vw] font-bold leading-[0.9] tracking-[-0.04em] text-white/[0.06]">
          GLOWBE
        </p>
      </div>
    </footer>
  );
}