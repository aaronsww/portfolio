"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/#about", label: "About" },
  { href: "/journal", label: "Journal" },
  { href: "/#projects", label: "Projects" },
  { href: "/#contact", label: "Contact" },
];

export default function SiteNav() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-40 flex items-center border-b border-white/5 bg-[var(--background)]/70 px-4 py-4 backdrop-blur-md sm:px-6 sm:py-5 md:px-12 ${
        isHome ? "justify-end" : "justify-between"
      }`}
    >
      {!isHome && (
        <Link
          href="/"
          className="font-mono text-[10px] tracking-wide text-[var(--muted)] uppercase transition-colors hover:text-white sm:text-xs sm:tracking-widest"
        >
          Jeevan Aaron
        </Link>
      )}
      <div className="flex gap-3 font-mono text-[10px] tracking-wide text-[var(--muted)] uppercase sm:gap-6 sm:text-xs sm:tracking-widest">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="transition-colors hover:text-white">
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
