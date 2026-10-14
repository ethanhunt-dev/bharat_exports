"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSubscribed(true);
      setNewsletterEmail("");
    }
  };

  return (
    <footer className="w-full bg-[#0B281D] text-[#F7F4EB] border-t-2 border-[#C5A15B] shadow-[0_-4px_25px_rgba(197,161,91,0.15)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-12">
        {/* Main 4-column footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-[#C5A15B]/25">
          {/* Col 1: Brand & Identity */}
          <div className="flex flex-col">
            <div className="bg-[#FFFFFF] rounded-lg p-2.5 w-fit mb-5 shadow-sm border border-[#C5A15B]/30">
              <img
                src="/svmr_logo.png"
                alt="Bharat Global Exports Official Emblem"
                className="h-12 w-auto object-contain"
              />
            </div>
            <span className="font-display font-bold text-lg text-white mb-2">
              BHARAT GLOBAL EXPORTS
            </span>
            <p className="font-sans text-sm text-[#E7EDE6]/80 leading-relaxed mb-6">
              Premier Indian Government Recognized Three-Star Export House connecting Andhra agricultural wealth and Indian textiles to 40+ global port destinations.
            </p>
            <div className="flex items-center gap-3">
              <a
                aria-label="WhatsApp Direct"
                className="w-9 h-9 rounded-lg border border-[#C5A15B]/50 flex items-center justify-center text-[#FDE047] hover:bg-[#C5A15B]/20 hover:text-white transition-colors"
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined text-[18px]">chat</span>
              </a>
              <a
                aria-label="Email"
                className="w-9 h-9 rounded-lg border border-[#C5A15B]/50 flex items-center justify-center text-[#FDE047] hover:bg-[#C5A15B]/20 hover:text-white transition-colors"
                href="mailto:export@bharatglobalexports.com"
              >
                <span className="material-symbols-outlined text-[18px]">mail</span>
              </a>
              <a
                aria-label="Port Logistics"
                className="w-9 h-9 rounded-lg border border-[#C5A15B]/50 flex items-center justify-center text-[#FDE047] hover:bg-[#C5A15B]/20 hover:text-white transition-colors"
                href="/services"
              >
                <span className="material-symbols-outlined text-[18px]">anchor</span>
              </a>
              <a
                aria-label="Products Catalog"
                className="w-9 h-9 rounded-lg border border-[#C5A15B]/50 flex items-center justify-center text-[#FDE047] hover:bg-[#C5A15B]/20 hover:text-white transition-colors"
                href="/products"
              >
                <span className="material-symbols-outlined text-[18px]">inventory_2</span>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links (Strict Scope: 6 items, No About Us, No Admin) */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-5">
              <span className="w-4 h-0.5 bg-[#C5A15B]" />
              <span className="font-sans text-xs uppercase tracking-[0.2em] text-[#C5A15B] font-bold">
                Quick Links
              </span>
            </div>
            <ul className="flex flex-col gap-3 font-sans text-sm text-[#E7EDE6]/80">
              <li>
                <Link className="hover:text-[#FDE047] transition-colors" href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#FDE047] transition-colors" href="/about-us">
                  About Us (Company Profile)
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#FDE047] transition-colors" href="/products">
                  Product Catalogue
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#FDE047] transition-colors" href="/services">
                  Export &amp; Port Services
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#FDE047] transition-colors" href="/blog">
                  Trade Insights &amp; Articles
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#FDE047] transition-colors" href="/gallery">
                  Facility &amp; Terminal Gallery
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#FDE047] transition-colors" href="/contact">
                  Contact &amp; Trade Desks
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Export Commodity Lines */}
          <div className="flex flex-col">
            <span className="font-eyebrow-bold text-eyebrow-bold uppercase tracking-[0.2em] text-secondary-container mb-6">
              Export Lines
            </span>
            <ul className="flex flex-col gap-3 font-body-sm text-body-sm text-surface-bright/80">
              <li>
                <Link className="hover:text-secondary-fixed transition-colors" href="/products">
                  1121 Basmati Rice (Raw / Steam / Sella)
                </Link>
              </li>
              <li>
                <Link className="hover:text-secondary-fixed transition-colors" href="/products">
                  Malabar Black Pepper (550-600 G/L)
                </Link>
              </li>
              <li>
                <Link className="hover:text-secondary-fixed transition-colors" href="/products">
                  Guntur S17 / Teja Red Chilli
                </Link>
              </li>
              <li>
                <Link className="hover:text-secondary-fixed transition-colors" href="/products">
                  Organic Turmeric (High Curcumin)
                </Link>
              </li>
              <li>
                <Link className="hover:text-secondary-fixed transition-colors" href="/products">
                  Raw Cotton &amp; Grey Fabrics
                </Link>
              </li>
              <li>
                <Link className="hover:text-secondary-fixed transition-colors" href="/products">
                  W180 - W320 Cashew Kernels
                </Link>
              </li>
              <li>
                <Link className="hover:text-secondary-fixed transition-colors" href="/products">
                  Non-GMO Soybeans &amp; Oilseeds
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Port Office & Contact + Newsletter */}
          <div className="flex flex-col">
            <span className="font-eyebrow-bold text-eyebrow-bold uppercase tracking-[0.2em] text-secondary-container mb-6">
              Port Office &amp; Contact
            </span>
            <div className="flex flex-col gap-3.5 font-body-sm text-body-sm text-surface-bright/80 mb-6">
              <p className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[18px] text-secondary-container shrink-0 mt-0.5">
                  location_on
                </span>
                <span>12 Port Road, Visakhapatnam, Andhra Pradesh 530035, India</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-[#C5A15B] shrink-0">
                  call
                </span>
                <span className="font-mono text-xs">+91 98765 43210</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-[#C5A15B] shrink-0">
                  mail
                </span>
                <span className="font-mono text-xs">export@bharatglobalexports.com</span>
              </p>
              <div className="pt-2 border-t border-[#C5A15B]/20">
                <span className="font-sans text-[11px] font-bold text-[#C5A15B] uppercase block mb-1">
                  Corridor Origin
                </span>
                <span className="font-mono text-xs text-[#E7EDE6]/70">
                  INVTZ1 · Visakhapatnam Sea Port (VPA) · Berth 04
                </span>
              </div>
            </div>

            {/* DGFT Newsletter Subscribe */}
            <div className="bg-white/5 p-3.5 rounded-lg border border-[#C5A15B]/30">
              <span className="font-sans text-xs font-bold text-[#FDE047] uppercase block mb-1.5">
                DGFT Market Intelligence
              </span>
              <p className="text-xs text-[#E7EDE6]/70 mb-2.5">
                Bi-weekly crop forecasts, freight trends, and policy updates.
              </p>
              {newsletterSubscribed ? (
                <div className="text-xs text-[#86D7A9] font-mono flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">check_circle</span>
                  <span>Subscribed to trade bulletins!</span>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="name@importer.com"
                    className="w-full bg-white/10 text-xs px-2.5 py-1.5 rounded border border-[#C5A15B]/40 text-white focus:outline-none focus:border-[#FDE047] placeholder:text-white/40"
                  />
                  <button
                    type="submit"
                    className="bg-[#C5A15B] text-[#0B281D] px-3 py-1.5 rounded text-xs font-bold hover:bg-[#E5B80B] transition-colors shrink-0"
                  >
                    Join
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 font-sans text-xs text-[#E7EDE6]/60">
          <p>© 2026 Bharat Global Exports Pvt. Ltd. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="font-mono tracking-wider text-[#C5A15B]">
              IEC No. 0308012948 · APEDA &amp; Spices Board of India Registered
            </span>
            <span className="text-[#C5A15B]/40">•</span>
            <Link
              href="/admin"
              className="text-[#E7EDE6]/60 hover:text-[#E5B80B] transition-colors flex items-center gap-1 font-mono text-[11px]"
            >
              <span className="material-symbols-outlined text-[14px]">admin_panel_settings</span>
              <span>Admin Panel</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
