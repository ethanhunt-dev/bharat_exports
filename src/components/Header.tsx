"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useQuoteModal } from "@/context/QuoteModalContext";

export default function Header() {
  const pathname = usePathname();
  const { openQuoteModal } = useQuoteModal();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Strictly 6 approved public navigation destinations (No About Us, No Admin)
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Services", href: "/services" },
    { label: "Blog", href: "/blog" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact Us", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#F7F4EB]/95 backdrop-blur-md border-b-2 border-[#C5A15B]/40 shadow-[0_4px_20px_rgba(197,161,91,0.12)] transition-all">
      {/* Main Navbar */}
      <div>
        <div className="h-20 max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Logo / Brand Wordmark */}
          <Link href="/" className="flex items-center gap-3.5 group">
            <div className="relative flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <img
                src="/svmr_logo.png"
                alt="Bharat Global Exports Emblem"
                className="h-12 w-auto object-contain drop-shadow-sm"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg sm:text-xl tracking-tight text-[#123D2B] uppercase group-hover:text-[#0B281D] transition-colors">
                BHARAT GLOBAL EXPORTS
              </span>
              <span className="font-sans text-[10px] font-bold text-[#C5A15B] uppercase tracking-[0.24em]">
                ESTD. 2008 · PREMIER INDIAN EXPORT HOUSE
              </span>
            </div>
          </Link>

          {/* Desktop Nav (Strict Scope: 6 items) */}
          <nav className="hidden lg:flex items-center gap-1.5 p-1 rounded-xl bg-[#ECE6D8]/80 border border-[#C5A15B]/25">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-lg transition-all font-sans text-xs tracking-wider uppercase font-semibold ${
                    active
                      ? "bg-[#123D2B] text-white font-bold shadow-md border-b-2 border-[#C5A15B]"
                      : "text-[#1A241F] hover:text-[#123D2B] hover:bg-white/80"
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
              className="gold-sheen-button inline-flex items-center gap-2 bg-gradient-to-r from-[#FDE047] via-[#E5B80B] to-[#C5A15B] text-[#0B281D] font-sans text-xs sm:text-sm px-5 sm:px-6 py-2.5 rounded-xl font-bold uppercase tracking-wider shadow-[0_4px_16px_rgba(229,184,11,0.35)] hover:shadow-[0_6px_22px_rgba(229,184,11,0.55)] hover:scale-105 transition-all duration-300 border border-[#FFF089]"
            >
              <span>Request a Quote</span>
              <span className="material-symbols-outlined text-[17px] font-bold">arrow_forward</span>
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-10 h-10 rounded-lg bg-[#ECE6D8] flex items-center justify-center text-[#123D2B] border border-[#C5A15B]/30 hover:bg-[#E4DDCB] transition-colors"
              aria-label="Toggle mobile menu"
            >
              <span className="material-symbols-outlined text-[24px]">
                {mobileMenuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu (Strict Scope: 6 items) */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#F7F4EB] border-t border-[#C5A15B]/30 px-6 py-4 shadow-xl animate-fadeIn">
            <nav className="flex flex-col gap-1.5 pb-3">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-3 rounded-lg text-sm font-semibold flex items-center justify-between ${
                      active
                        ? "bg-[#123D2B] text-white border-l-4 border-[#C5A15B]"
                        : "text-[#1A241F] hover:text-[#123D2B] hover:bg-[#ECE6D8]"
                    }`}
                  >
                    <span>{link.label}</span>
                    <span className="material-symbols-outlined text-[18px] opacity-60">chevron_right</span>
                  </Link>
                );
              })}
            </nav>
            <div className="pt-3 border-t border-[#C5A15B]/20 flex flex-col gap-2 font-sans text-xs text-[#3B4A40]">
              <a href="tel:+919876543210" className="flex items-center gap-2 py-1 hover:text-[#123D2B]">
                <span className="material-symbols-outlined text-[16px] text-[#C5A15B]">call</span>
                <span>+91 98765 43210</span>
              </a>
              <a href="mailto:export@bharatglobalexports.com" className="flex items-center gap-2 py-1 hover:text-[#123D2B]">
                <span className="material-symbols-outlined text-[16px] text-[#C5A15B]">mail</span>
                <span>export@bharatglobalexports.com</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
