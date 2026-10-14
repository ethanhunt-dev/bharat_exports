"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useQuoteModal } from "@/context/QuoteModalContext";

export default function Header() {
  const pathname = usePathname();
  const { openQuoteModal } = useQuoteModal();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about-us" },
    { label: "Products", href: "/products" },
    { label: "Services", href: "/services" },
    { label: "Blog", href: "/blog" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/95 backdrop-blur-md border-b border-outline-variant/30 shadow-[0_2px_12px_rgba(0,0,0,0.06)] transition-all">
      {/* Main Navbar */}
      <div>
        <div className="h-20 max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <img
                src="/svmr_logo.png"
                alt="SVMR Exports Official Emblem"
                className="h-12 w-auto object-contain drop-shadow-sm"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-headline-sm text-headline-sm tracking-tight text-on-surface uppercase group-hover:text-primary transition-colors">
                SVMR EXPORTS
              </span>
              <span className="font-eyebrow-bold text-eyebrow-bold text-secondary uppercase tracking-[0.2em]">
                ESTD. 2008 · INDIA
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-1 p-1 rounded-lg bg-surface-container-low/60 border border-outline-variant/20">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-2 rounded transition-all font-label-md text-label-md ${
                    active
                      ? "bg-surface-container-high text-primary font-bold shadow-sm"
                      : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Action Area & Mobile Hamburger */}
          <div className="flex items-center gap-3 sm:gap-4">
            <button
              type="button"
              onClick={() => openQuoteModal()}
              className="inline-flex items-center gap-2 bg-secondary text-surface-container-lowest font-label-md text-label-md px-4 sm:px-6 py-2.5 rounded hover:bg-on-secondary-fixed-variant transition-colors shadow-sm"
            >
              <span>Get a Quote</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden w-10 h-10 rounded bg-surface-container flex items-center justify-center text-on-surface border border-outline-variant/40 hover:bg-surface-container-high transition-colors"
              aria-label="Toggle mobile menu"
            >
              <span className="material-symbols-outlined text-[24px]">
                {mobileMenuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-surface border-t border-outline-variant/30 px-6 py-4 shadow-lg animate-fadeIn">
            <nav className="flex flex-col gap-1.5 pb-3">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-3 rounded text-base font-medium flex items-center justify-between ${
                      active
                        ? "bg-surface-container text-primary font-bold border-l-4 border-secondary"
                        : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low"
                    }`}
                  >
                    <span>{link.label}</span>
                    <span className="material-symbols-outlined text-[18px] opacity-60">chevron_right</span>
                  </Link>
                );
              })}
            </nav>
            <div className="pt-3 border-t border-outline-variant/20 flex flex-col gap-2 font-data-mono text-data-mono text-on-surface-variant text-sm">
              <a href="tel:+919876543210" className="flex items-center gap-2 py-1 hover:text-primary">
                <span className="material-symbols-outlined text-[16px] text-secondary">call</span>
                <span>+91 98765 43210</span>
              </a>
              <a href="mailto:export@svmrexports.example" className="flex items-center gap-2 py-1 hover:text-primary">
                <span className="material-symbols-outlined text-[16px] text-secondary">mail</span>
                <span>export@svmrexports.example</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
