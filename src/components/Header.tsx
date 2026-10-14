"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useQuoteModal } from "@/context/QuoteModalContext";

export default function Header() {
  const pathname = usePathname();
  const { openQuoteModal } = useQuoteModal();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about-us" },
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0B281D]/95 backdrop-blur-md border-b border-[#C5A15B]/35 shadow-2xl py-3"
          : "bg-black/35 backdrop-blur-sm border-b border-white/10 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between">
        {/* Logo / Brand Wordmark */}
        <Link href="/" className="flex items-center gap-3.5 group">
          <div className="relative flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
            <img
              src="/svmr_logo.png"
              alt="Bharat Global Exports Emblem"
              className="h-11 sm:h-12 w-auto object-contain drop-shadow-md"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-lg sm:text-xl tracking-tight text-white uppercase group-hover:text-[#FDE047] transition-colors leading-tight drop-shadow-sm">
              BHARAT GLOBAL EXPORTS
            </span>
            <span className="font-sans text-[10px] font-bold text-[#E5B80B] uppercase tracking-[0.22em] drop-shadow-sm">
              ESTD. 2008 · PREMIER INDIAN EXPORT HOUSE
            </span>
          </div>
        </Link>

        {/* Desktop Nav: Clean text links without background boxes (Matching Skanda Demo) */}
        <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative py-1 font-sans text-sm tracking-wide font-semibold transition-all duration-200 ${
                  active
                    ? "text-[#E5B80B] font-bold drop-shadow-sm"
                    : "text-white/90 hover:text-[#E5B80B]"
                }`}
              >
                <span>{link.label}</span>
                {active && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#C5A15B] via-[#E5B80B] to-[#FDE047] rounded-full shadow-[0_0_8px_#E5B80B]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Action Area & Signature Angled Enquiry Button */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Skanda-Inspired Angled Geometric Enquiry Button with Yellow Accent */}
          <div className="relative flex items-center">
            {/* Background angled yellow accent triangle/bar */}
            <div
              className="hidden sm:block absolute -right-2 top-0 bottom-0 w-6 bg-gradient-to-r from-[#E5B80B] to-[#FDE047] -skew-x-[16deg] transform origin-bottom pointer-events-none shadow-md"
              aria-hidden="true"
            />

            <button
              type="button"
              onClick={() => openQuoteModal()}
              className="gold-sheen-button relative z-10 px-5 sm:px-7 py-2.5 bg-gradient-to-r from-[#BA1A1A] via-[#A31616] to-[#860F0F] text-white font-sans text-xs sm:text-sm font-extrabold uppercase tracking-widest shadow-xl hover:brightness-110 active:scale-95 transition-all duration-300 border border-[#FDE047]/40 -skew-x-[16deg]"
            >
              <span className="skew-x-[16deg] flex items-center gap-2">
                <span>ENQUIRY</span>
                <span className="material-symbols-outlined text-[17px] font-bold">arrow_forward</span>
              </span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-10 h-10 rounded-lg bg-black/40 backdrop-blur-md flex items-center justify-center text-white border border-[#C5A15B]/40 hover:bg-[#123D2B] transition-colors"
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
        <div className="lg:hidden bg-[#0B281D]/98 backdrop-blur-xl border-t border-[#C5A15B]/30 px-6 py-5 shadow-2xl animate-fadeIn">
          <nav className="flex flex-col gap-1.5 pb-4">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-semibold flex items-center justify-between transition-colors ${
                    active
                      ? "bg-[#123D2B] text-[#E5B80B] font-bold border-l-4 border-[#E5B80B]"
                      : "text-white/90 hover:text-[#E5B80B] hover:bg-[#123D2B]/50"
                  }`}
                >
                  <span>{link.label}</span>
                  <span className="material-symbols-outlined text-[18px] opacity-60">chevron_right</span>
                </Link>
              );
            })}
          </nav>
          <div className="pt-3 border-t border-[#C5A15B]/20 flex flex-col gap-2 font-sans text-xs text-[#E7EDE6]/80">
            <a href="tel:+919876543210" className="flex items-center gap-2 py-1 hover:text-[#E5B80B]">
              <span className="material-symbols-outlined text-[16px] text-[#E5B80B]">call</span>
              <span>+91 98765 43210</span>
            </a>
            <a href="mailto:export@bharatglobalexports.com" className="flex items-center gap-2 py-1 hover:text-[#E5B80B]">
              <span className="material-symbols-outlined text-[16px] text-[#E5B80B]">mail</span>
              <span>export@bharatglobalexports.com</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
