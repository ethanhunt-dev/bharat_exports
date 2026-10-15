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
    <footer className="relative w-full bg-[#071C14] text-[#F7F4EB] border-t-2 border-[#C5A15B] shadow-[0_-4px_25px_rgba(197,161,91,0.15)] overflow-hidden">
      {/* Clear, Luminous Cargo Ship Background Image (Skanda Marine Style) */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none opacity-50 scale-105 transition-transform duration-1000"
        style={{ backgroundImage: "url('/images/global_export_shipping.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-[#071C14]/80 to-[#04100B]/85 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-12">
        {/* Main 4-column footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-[#C5A15B]/25">
          {/* Col 1: Brand & Identity */}
          <div className="flex flex-col">
            <Link href="/" className="inline-block mb-4 transition-transform duration-300 hover:scale-105">
              <img
                src="/svmr_logo_clean.png"
                alt="SVMR Exports Emblem"
                className="h-16 w-auto object-contain drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]"
              />
            </Link>
            <span className="font-display font-bold text-lg text-white mb-2">
              SVMR EXPORTS
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
                href="mailto:export@svmrexports.com"
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

          {/* Col 4: Location & Google Maps (Skanda Image 3 Style) */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-4 h-0.5 bg-[#C5A15B]" />
              <span className="font-sans text-xs uppercase tracking-[0.2em] text-[#C5A15B] font-bold">
                Location
              </span>
            </div>
            
            {/* Interactive Location Map Box */}
            <div className="relative rounded-xl overflow-hidden border-2 border-[#C5A15B]/40 shadow-xl bg-black/40 mb-3 group">
              <iframe
                title="SVMR Exports Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121571.49129598859!2d83.21848154823485!3d17.686815899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39431389e6973f%3A0x92d9c20395498468!2sVisakhapatnam%20Port!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-32 border-0 filter contrast-110 opacity-90 group-hover:opacity-100 transition-opacity"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a
                href="https://maps.google.com/?q=Visakhapatnam+Port"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-2 left-2 bg-white/95 text-[#2A2833] font-sans text-[10px] font-bold px-2 py-0.5 rounded shadow hover:bg-[#BB1515] hover:text-white transition-colors flex items-center gap-1"
              >
                <span>Open in Maps</span>
                <span className="material-symbols-outlined text-[12px]">open_in_new</span>
              </a>
            </div>

            <p className="font-sans text-xs text-[#E7EDE6]/80 flex items-start gap-1.5 mb-1.5">
              <span className="material-symbols-outlined text-[16px] text-[#F7C600] shrink-0 mt-0.5">location_on</span>
              <span>12 Port Road, Visakhapatnam Port, Andhra Pradesh 530035, India</span>
            </p>
            <p className="font-mono text-xs text-[#F7C600] flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[15px] text-[#F7C600] shrink-0">anchor</span>
              <span>Berth 04 · Quay Transit Station (INVTZ1)</span>
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 font-sans text-xs text-[#E7EDE6]/60">
          <p>© 2026 SVMR Exports Pvt. Ltd. All rights reserved.</p>
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
