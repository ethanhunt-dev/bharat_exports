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
    <footer className="w-full bg-on-primary-fixed text-surface-bright border-t-2 border-secondary/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-12">
        {/* Main 4-column footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-secondary/20">
          {/* Col 1: Brand & Identity */}
          <div className="flex flex-col">
            <div className="bg-surface-bright rounded-lg p-2.5 w-fit mb-5 shadow-sm border border-secondary/30">
              <img
                src="/svmr_logo.png"
                alt="SVMR Exports Official Emblem"
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="font-body-md text-body-md text-surface-bright/80 leading-relaxed mb-6">
              Premier Indian Government Recognized Three-Star Export House connecting Andhra agricultural wealth and Indian textiles to 40+ global destinations.
            </p>
            <div className="flex items-center gap-3">
              <a
                aria-label="WhatsApp Direct"
                className="w-9 h-9 rounded border border-secondary/50 flex items-center justify-center text-secondary-container hover:bg-secondary/20 hover:text-surface-bright transition-colors"
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined text-[18px]">chat</span>
              </a>
              <a
                aria-label="Email"
                className="w-9 h-9 rounded border border-secondary/50 flex items-center justify-center text-secondary-container hover:bg-secondary/20 hover:text-surface-bright transition-colors"
                href="mailto:export@svmrexports.example"
              >
                <span className="material-symbols-outlined text-[18px]">mail</span>
              </a>
              <a
                aria-label="Port Logistics"
                className="w-9 h-9 rounded border border-secondary/50 flex items-center justify-center text-secondary-container hover:bg-secondary/20 hover:text-surface-bright transition-colors"
                href="/services"
              >
                <span className="material-symbols-outlined text-[18px]">anchor</span>
              </a>
              <a
                aria-label="Compliance Certification"
                className="w-9 h-9 rounded border border-secondary/50 flex items-center justify-center text-secondary-container hover:bg-secondary/20 hover:text-surface-bright transition-colors"
                href="/about-us"
              >
                <span className="material-symbols-outlined text-[18px]">verified</span>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="flex flex-col">
            <span className="font-eyebrow-bold text-eyebrow-bold uppercase tracking-[0.2em] text-secondary-container mb-6">
              Quick Links
            </span>
            <ul className="flex flex-col gap-3 font-body-sm text-body-sm text-surface-bright/80">
              <li>
                <Link className="hover:text-secondary-fixed transition-colors" href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="hover:text-secondary-fixed transition-colors" href="/about-us">
                  About Us &amp; Heritage
                </Link>
              </li>
              <li>
                <Link className="hover:text-secondary-fixed transition-colors" href="/products">
                  Product Catalog
                </Link>
              </li>
              <li>
                <Link className="hover:text-secondary-fixed transition-colors" href="/services">
                  Export &amp; Port Services
                </Link>
              </li>
              <li>
                <Link className="hover:text-secondary-fixed transition-colors" href="/blog">
                  Trade Insights &amp; DGFT Desk
                </Link>
              </li>
              <li>
                <Link className="hover:text-secondary-fixed transition-colors" href="/gallery">
                  Facility &amp; Terminal Gallery
                </Link>
              </li>
              <li>
                <Link className="hover:text-secondary-fixed transition-colors" href="/contact">
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
                <span className="material-symbols-outlined text-[18px] text-secondary-container shrink-0">
                  call
                </span>
                <span className="font-data-mono text-data-mono">+91 98765 43210</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-secondary-container shrink-0">
                  mail
                </span>
                <span className="font-data-mono text-data-mono">export@svmrexports.example</span>
              </p>
              <div className="pt-2 border-t border-secondary/20">
                <span className="font-eyebrow-bold text-eyebrow-bold text-secondary-container uppercase block mb-1">
                  Corridor Origin
                </span>
                <span className="font-data-mono text-data-mono text-surface-bright/70">
                  INVTZ1 · Visakhapatnam Sea Port (VPA) · Berth 04
                </span>
              </div>
            </div>

            {/* DGFT Newsletter Subscribe */}
            <div className="bg-surface-bright/5 p-3.5 rounded border border-secondary/30">
              <span className="font-eyebrow-bold text-eyebrow-bold text-secondary-fixed uppercase block mb-1.5">
                DGFT Market Intelligence
              </span>
              <p className="text-xs text-surface-bright/70 mb-2.5">
                Bi-weekly crop forecasts, freight trends, and policy updates.
              </p>
              {newsletterSubscribed ? (
                <div className="text-xs text-primary-fixed font-data-mono flex items-center gap-1">
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
                    className="w-full bg-surface-bright/10 text-xs px-2.5 py-1.5 rounded border border-secondary/40 text-surface-bright focus:outline-none focus:border-secondary-fixed placeholder:text-surface-bright/40"
                  />
                  <button
                    type="submit"
                    className="bg-secondary text-surface-container-lowest px-3 py-1.5 rounded text-xs font-semibold hover:bg-on-secondary-fixed-variant transition-colors shrink-0"
                  >
                    Join
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 font-label-md text-label-md text-surface-bright/60">
          <p>© 2026 SVMR Exports Pvt. Ltd. All rights reserved.</p>
          <p className="font-data-mono text-data-mono tracking-wider text-secondary-container">
            IEC No. 0308012948 · APEDA &amp; Spices Board of India Registered · US-FDA Compliant
          </p>
        </div>
      </div>
    </footer>
  );
}
