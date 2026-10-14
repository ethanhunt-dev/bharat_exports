"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useQuoteModal } from "@/context/QuoteModalContext";

const heroSlides = [
  {
    id: 1,
    tag: "MARITIME LOGISTICS · DEEPWATER PORT DOCK",
    badge: "Berth 02 Visakhapatnam · Direct Ocean Bills of Lading",
    categoryLabel: "Container Ship Berth",
    titlePrimary: "Indian spices, grains and textiles,",
    titleSecondary: "delivered worldwide.",
    description:
      "A trusted Indian export house with 15+ years of experience in quality sourcing, certified phytosanitary testing, and high-tonnage maritime vessel transshipment from Visakhapatnam Port.",
    image: "/images/banner_port_cranes.jpg",
    alt: "Mega container cargo ship berthed at deepwater port terminal with dock cranes and colorful containers",
  },
  {
    id: 2,
    tag: "PORT CONTAINER LOGISTICS · 48-HR CUSTOMS CLEARANCE",
    badge: "1,200+ TEUs Shipped · ISO 9001:2015 Accredited Yard",
    categoryLabel: "Port Container Yard",
    titlePrimary: "Certified container stuffing & port dispatch,",
    titleSecondary: "expedited customs transit.",
    description:
      "Dedicated port container staging, humidity-proof container liners, weighbridge verification, and 48-hour expedited customs clearance for global container freight.",
    image:
      "https://images.unsplash.com/photo-1494412685616-a5d310fbb07d?auto=format&fit=crop&w=2000&q=85",
    alt: "Vibrant aerial view of multi-colored shipping containers stacked at busy industrial maritime port",
  },
  {
    id: 3,
    tag: "OCEAN TRANSIT CORRIDORS · INCOTERMS 2020 (CIF / FOB)",
    badge: "Full Marine Insurance · Real-Time Vessel AIS Tracking",
    categoryLabel: "Ocean Cargo Freight",
    titlePrimary: "High-tonnage ocean freight shipping,",
    titleSecondary: "reliable global sea routes.",
    description:
      "Bridging Indian agricultural harvests and industrial textiles with key import terminals across the GCC, Europe, Southeast Asia, and the Americas.",
    image: "/images/banner_ocean_ship.jpg",
    alt: "Aerial view of large container ship loaded with cargo sailing across deep blue ocean waters",
  },
  {
    id: 4,
    tag: "QUAY CRANE BERTH · HEAVY CARGO TRANSSHIPMENT",
    badge: "Visakhapatnam Quay 02 · 24/7 Rapid Loading Operations",
    categoryLabel: "Quay Cranes & Cargo",
    titlePrimary: "Direct quay crane loading operations,",
    titleSecondary: "zero-moisture handling.",
    description:
      "Precision quay gantry loading straight into vessel cellular holds, safeguarding sensitive agro commodities and textiles against open-weather exposure.",
    image:
      "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=2000&q=85",
    alt: "Industrial port quay cranes loading containers onto international maritime freight ship",
  },
  {
    id: 5,
    tag: "HARBOUR TRANSSHIPMENT · 3-STAR EXPORT HOUSE",
    badge: "Institutional Grade Purity · APEDA & Spices Board Recognized",
    categoryLabel: "Harbour Fleet & Logistics",
    titlePrimary: "Government recognized export house,",
    titleSecondary: "precision global trade.",
    description:
      "Chartered container movements, complete export documentation, fumigation certifications, and direct container line bookings to 42+ maritime partner countries.",
    image:
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=2000&q=85",
    alt: "Commercial cargo ship and tugboat navigating through international shipping port channel",
  },
];

export default function HomePage() {
  const { openQuoteModal } = useQuoteModal();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [inquiryData, setInquiryData] = useState({
    fullName: "",
    email: "",
    commodity: "",
    destinationPort: "",
    quantity: "",
  });

  // Auto-advance banner slides every 6s
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="flex flex-col w-full">
      {/* 1. HERO SECTION WITH PURE FULL-BLEED IMAGE SLIDER */}
      <section
        className="relative w-full -mt-20 pt-20 bg-slate-950 text-surface-bright overflow-hidden flex flex-col justify-between"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Full-Bleed Auto-Playing Port & Maritime Slides */}
        <div className="relative w-full h-[450px] sm:h-[550px] lg:h-[650px] overflow-hidden">
          {heroSlides.map((slide, idx) => (
            <div
              key={slide.id}
              className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-out ${
                idx === currentSlide
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-105 pointer-events-none"
              }`}
              style={{ backgroundImage: `url('${slide.image}')` }}
              aria-label={slide.alt}
              role="img"
            />
          ))}

          {/* Soft Top Scrim for Clean Header Visibility */}
          <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />

          {/* Minimal Slide Progress Dots */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2">
            {heroSlides.map((slide, idx) => (
              <span
                key={slide.id}
                className={`transition-all duration-500 rounded-full ${
                  idx === currentSlide
                    ? "w-8 h-2 bg-secondary-fixed shadow-md"
                    : "w-2 h-2 bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>

      </section>

      {/* 2. COMPANY INTRODUCTION (Asymmetric 7/5 Split) */}
      {/* 2. COMPANY INTRODUCTION (Warm Luxury Ivory & Floating Emerald Feature Card) */}
      <section className="w-full py-24 bg-[#FAF7F0] text-on-surface border-b border-[#E8DFCE]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
            {/* Visual Column (7 Cols on desktop) */}
            <div className="lg:col-span-7 relative">
              <div className="absolute -top-3 -left-3 w-full h-full border-2 border-secondary/40 rounded-xl pointer-events-none hidden sm:block" />
              <div className="relative bg-surface-container rounded-xl overflow-hidden shadow-lg aspect-[4/3] group">
                <img
                  className="w-full h-full object-cover grayscale-[10%] group-hover:scale-105 transition-transform duration-700 ease-out"
                  alt="Quality control inspection of export grade Indian spices and agricultural grains"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzYrRoQxdKpgrd383CDGw6UiAnieZdvOiYFbGDFRqt8lwAERQ-56EYbdqaSCn6UnG7rHxPd1d-JKkRf-Dj1I44bF1HQcZXNPBMmndqW9qRy0ngR7GeqIDlny1rZ2G1Eomxq9l69AvyYmSXhEm3fsIEBYXP1nYPJmgeZ2NZxDyVh_NvsvR2zLstl8ldxVKPEkvMz8ilvmuzIufv1GPPYMwUsaNsvhMSoGyoEwyHiKDZOubtlsWmNZwN"
                />
                <div className="absolute bottom-4 right-4 bg-primary/95 backdrop-blur-md text-white px-5 py-2.5 rounded-lg border-l-4 border-secondary-container font-data-mono text-data-mono flex items-center gap-2.5 shadow-md">
                  <span className="material-symbols-outlined text-[18px] text-secondary-container">biotech</span>
                  <span className="tracking-wide">INVTZ-LAB · BATCH PASS SGS 99.8%</span>
                </div>
              </div>

              {/* Floating Dark Emerald Value Card with Royal Gold Checkmarks */}
              <div className="mt-6 p-6 rounded-2xl bg-[#081E14] text-white border border-secondary/35 shadow-xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-secondary/25 text-secondary-container flex items-center justify-center font-bold text-sm shrink-0 border border-secondary/40">✓</span>
                    <span className="text-sm font-medium text-white/95">APEDA &amp; Spices Board Certified</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-secondary/25 text-secondary-container flex items-center justify-center font-bold text-sm shrink-0 border border-secondary/40">✓</span>
                    <span className="text-sm font-medium text-white/95">Direct Deepwater Berth Quay 02</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-secondary/25 text-secondary-container flex items-center justify-center font-bold text-sm shrink-0 border border-secondary/40">✓</span>
                    <span className="text-sm font-medium text-white/95">100% Sortex Optical Cleaned</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-secondary/25 text-secondary-container flex items-center justify-center font-bold text-sm shrink-0 border border-secondary/40">✓</span>
                    <span className="text-sm font-medium text-white/95">Incoterms 2020: CIF / FOB / CFR</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Narrative Column (5 Cols on desktop) */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="inline-flex items-center gap-3 mb-4">
                <span className="font-data-mono text-data-mono text-secondary font-semibold">01</span>
                <span className="w-4 h-px bg-secondary/50" />
                <span className="font-eyebrow-bold text-eyebrow-bold uppercase tracking-[0.2em] text-secondary">
                  ABOUT THE HOUSE
                </span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-6 leading-tight">
                Connecting Indian soil to global tables &amp; mills
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">
                SVMR Exports bridges India’s rich agrarian hinterlands and state-of-the-art weaving clusters directly with procurement directors worldwide. Operating out of the Visakhapatnam maritime zone, we eliminate redundant intermediaries.
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant mb-8 leading-relaxed">
                We handle upstream farmgate aggregation, stringent multi-tier quality checks, Sortex optical grading, phytosanitary fumigation, and custom export packaging—delivering impeccable consistency and zero documentation discrepancies on every single consignment.
              </p>
              <div className="pt-2">
                <Link
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-white text-primary border border-secondary/35 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 font-label-md text-label-md shadow-xs group"
                  href="/about-us"
                >
                  <span className="font-semibold">Read our complete story</span>
                  <span className="material-symbols-outlined text-[18px] text-secondary group-hover:text-secondary-container group-hover:translate-x-1.5 transition-all">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PRODUCTS & SERVICES OVERVIEW */}
      <section className="w-full py-24 bg-surface-container text-on-surface border-y border-outline-variant/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <div className="inline-flex items-center gap-3 mb-3">
                <span className="font-data-mono text-data-mono text-secondary font-semibold">02</span>
                <span className="w-4 h-px bg-secondary/50" />
                <span className="font-eyebrow-bold text-eyebrow-bold uppercase tracking-[0.2em] text-secondary">
                  OFFERING &amp; CAPABILITIES
                </span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface">
                Export Categories &amp; Infrastructure
              </h2>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant max-w-md">
              End-to-end commercial operations equipped to handle break-bulk, FCL (Full Container Loads), and private-label retail configurations.
            </p>
          </div>
          {/* Asymmetric Bento-style Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Tall Featured Card (Left 6 Cols) */}
            <div className="lg:col-span-6 bg-surface rounded p-8 border border-secondary/20 flex flex-col justify-between group shadow-sm hover:border-secondary/40 transition-colors">
              <div>
                <div className="relative w-full aspect-[16/10] rounded overflow-hidden mb-6 bg-surface-container-high">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    alt="Aerial flat lay of raw Indian agricultural commodities"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFTT4b8SjJu_8477qcjkbGCBo4VlfDFzTmgkzPqu5mwLYeSLxla7dRmKLD1-Qs7TvTvMUqFYEiRlsWtGzdIDKo17s-w4GtZFStBDMTPl77S4w9lwm2Zc7uO7tRSbcc0iALC-ZjtUWz0mNLcLFDSPpftDUoQ_kWcHqVWXz49P1w_c4iS5iofQPXkx2alJf39X5vZNuPY_Tq3KDCtDQxrW8uqsN0olwpIZazyso8SfI52S_FXCpdzGyt"
                  />
                  <span className="absolute top-3 left-3 bg-primary text-surface-bright font-eyebrow-bold text-eyebrow-bold px-2.5 py-1 uppercase tracking-wider rounded">
                    CORE COMMODITIES
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-3">
                  Agricultural Commodities &amp; Whole Spices
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">
                  Pristine basmati rice, Malabar pepper, Salem turmeric, and Guntur chillies graded to custom ASTA and ETO parameters. Tested, packaged, and preserved to international sanitary standards.
                </p>
              </div>
              <div className="pt-6 border-t border-outline-variant/30 flex items-center justify-between">
                <div className="flex items-center gap-2 text-primary font-label-md text-label-md">
                  <span className="material-symbols-outlined text-[18px]">verified_user</span>
                  <span>Phytosanitary &amp; Halal Certified</span>
                </div>
                <Link
                  className="w-9 h-9 rounded bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-surface-bright transition-colors"
                  href="/products"
                >
                  <span className="material-symbols-outlined text-[18px]">north_east</span>
                </Link>
              </div>
            </div>

            {/* Two Stacked Horizontal Cards (Right 6 Cols) */}
            <div className="lg:col-span-6 flex flex-col gap-8 justify-between">
              {/* Stacked Card 1 */}
              <div className="bg-surface rounded p-7 border border-secondary/20 flex flex-col sm:flex-row gap-6 items-center shadow-sm hover:border-secondary/40 transition-colors group">
                <div className="w-full sm:w-44 h-40 shrink-0 rounded overflow-hidden bg-surface-container-high">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    alt="Packaging line and private label retail pouch facility"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAH5ycYEMwPCLygsuKRpp1_X4MzVu8wWwrTtM2gTrlRcsjEhSc4jdm_SeULs696WnDCG5cVBcpSf-YMH7ypUzErfYAiKDUUqkMHGtuQdVtpyuBJJodqxw1zz8kgAOBrOxKVGMcLkU2VlFVuMrvcZwrvuAn2cL5RCpJ18eYBhycM9-WP1JM5sstSv28N84OhlGQU8vfvyVdTJnzX-SRZMb3IgMMMwQgx1GwPrYCMLGWCOKCcFhOjh13i"
                  />
                </div>
                <div className="flex flex-col justify-between flex-1">
                  <div>
                    <span className="font-eyebrow-bold text-eyebrow-bold text-secondary uppercase tracking-wider block mb-1">
                      CONTRACT PACKAGING
                    </span>
                    <h4 className="font-title-md text-title-md text-on-surface mb-2">
                      Export Processing &amp; Private Label Services
                    </h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-4">
                      Custom vacuum pouches, multi-wall paper bags, institutional nitrogen-flushed containers, and OEM retail branding under strict GMP supervision.
                    </p>
                  </div>
                  <Link
                    className="inline-flex items-center gap-1.5 font-label-md text-label-md text-primary hover:text-secondary transition-colors"
                    href="/services"
                  >
                    <span>Explore processing protocols</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </Link>
                </div>
              </div>

              {/* Stacked Card 2 */}
              <div className="bg-surface rounded p-7 border border-secondary/20 flex flex-col sm:flex-row gap-6 items-center shadow-sm hover:border-secondary/40 transition-colors group">
                <div className="w-full sm:w-44 h-40 shrink-0 rounded overflow-hidden bg-surface-container-high">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    alt="Container vessel moored at Visakhapatnam Sea Port"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD74y-JtANthbaEcATtOcsTPUPUG5QR3YO0DSwtlWYy5e408woYi9sIRM5bMQ-xGqAgxTf7poegYOwZIsISIIa7U7qCVnpXdYZVmfx7z0ROzu7oyCXIxSuisWkNz6ApbRJXrO5EDkNQMnaBusMrIXtcP9aKd7iCSfQrseieGcafQ-V_E-vYZl65Z3dvCGFYX8JQTVeTAp68YyHy4-iXPWDTTj4GwaRc49ItdHQBwuAMwIxZtPWenJud"
                  />
                </div>
                <div className="flex flex-col justify-between flex-1">
                  <div>
                    <span className="font-eyebrow-bold text-eyebrow-bold text-secondary uppercase tracking-wider block mb-1">
                      LOGISTICS CORRIDOR
                    </span>
                    <h4 className="font-title-md text-title-md text-on-surface mb-2">
                      Visakhapatnam Port Terminal &amp; Trade Gallery
                    </h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-4">
                      Direct CFS access, pre-berthing customs clearance, and refrigerated reefers ensuring minimum dwell times and zero container demurrage.
                    </p>
                  </div>
                  <Link
                    className="inline-flex items-center gap-1.5 font-label-md text-label-md text-primary hover:text-secondary transition-colors"
                    href="/gallery"
                  >
                    <span>View port infrastructure</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US (Deep Forest Green Band) */}
      <section className="w-full py-24 bg-on-tertiary-fixed text-surface-bright relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 z-10">
          <div className="max-w-2xl mb-16">
            <div className="inline-flex items-center gap-3 mb-3">
              <span className="font-data-mono text-data-mono text-secondary-container font-semibold">03</span>
              <span className="w-4 h-px bg-secondary-container/50" />
              <span className="font-eyebrow-bold text-eyebrow-bold uppercase tracking-[0.2em] text-secondary-container">
                INSTITUTIONAL RELIABILITY
              </span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-surface-bright leading-tight">
              Engineered for international risk mitigation &amp; velocity
            </h2>
          </div>
          {/* 4 Columns separated by Gold Hairlines */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 lg:divide-x divide-secondary/30">
            {/* Feature 1 */}
            <div className="pt-8 pb-8 md:pt-0 lg:pr-8 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded border border-secondary-container/30 flex items-center justify-center text-secondary-container mb-6 bg-primary/20">
                  <span className="material-symbols-outlined text-[26px]">verified</span>
                </div>
                <h3 className="font-title-md text-title-md text-surface-bright mb-3">Quality Assured</h3>
                <p className="font-body-sm text-body-sm text-surface-bright/75 leading-relaxed mb-4">
                  Lab-tested lots with comprehensive batch certificates. Third-party testing via SGS or Bureau Veritas readily facilitated upon request.
                </p>
              </div>
              <span className="font-data-mono text-data-mono text-secondary-fixed/80 block mt-2">
                Purity: 99.5% min
              </span>
            </div>
            {/* Feature 2 */}
            <div className="pt-8 pb-8 md:pt-0 lg:px-8 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded border border-secondary-container/30 flex items-center justify-center text-secondary-container mb-6 bg-primary/20">
                  <span className="material-symbols-outlined text-[26px]">directions_boat</span>
                </div>
                <h3 className="font-title-md text-title-md text-surface-bright mb-3">On-time Shipping</h3>
                <p className="font-body-sm text-body-sm text-surface-bright/75 leading-relaxed mb-4">
                  Planned direct dispatch from Visakhapatnam &amp; Chennai deep-water berths, maintaining strict sailing schedules with global carrier alliances.
                </p>
              </div>
              <span className="font-data-mono text-data-mono text-secondary-fixed/80 block mt-2">
                Avg Transit: 14-28 Days
              </span>
            </div>
            {/* Feature 3 */}
            <div className="pt-8 pb-8 md:pt-8 lg:pt-0 lg:px-8 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded border border-secondary-container/30 flex items-center justify-center text-secondary-container mb-6 bg-primary/20">
                  <span className="material-symbols-outlined text-[26px]">inventory_2</span>
                </div>
                <h3 className="font-title-md text-title-md text-surface-bright mb-3">Custom Packing</h3>
                <p className="font-body-sm text-body-sm text-surface-bright/75 leading-relaxed mb-4">
                  Private label configurations, moisture-barrier vacuum pouches, food-grade polypropylene, and heavy-duty 25/50kg export sacks.
                </p>
              </div>
              <span className="font-data-mono text-data-mono text-secondary-fixed/80 block mt-2">
                Palletized / Break-bulk
              </span>
            </div>
            {/* Feature 4 */}
            <div className="pt-8 pb-8 md:pt-8 lg:pt-0 lg:pl-8 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded border border-secondary-container/30 flex items-center justify-center text-secondary-container mb-6 bg-primary/20">
                  <span className="material-symbols-outlined text-[26px]">contract</span>
                </div>
                <h3 className="font-title-md text-title-md text-surface-bright mb-3">Export Documentation</h3>
                <p className="font-body-sm text-body-sm text-surface-bright/75 leading-relaxed mb-4">
                  Flawless commercial documentation: Ocean Bill of Lading, Phytosanitary, Certificate of Origin, Form A, and Letter of Credit compliant files.
                </p>
              </div>
              <span className="font-data-mono text-data-mono text-secondary-fixed/80 block mt-2">
                DGFT &amp; Customs Cleared
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FEATURED PRODUCTS (Warm Luxury Linen & Interactive Category Bar) */}
      <section className="w-full py-24 bg-[#F4EFE6] text-on-surface border-y border-[#E2D9C8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="inline-flex items-center gap-3 mb-3">
                <span className="font-data-mono text-data-mono text-secondary font-semibold">04</span>
                <span className="w-4 h-px bg-secondary/50" />
                <span className="font-eyebrow-bold text-eyebrow-bold uppercase tracking-[0.2em] text-secondary">
                  EXPORT CATALOGUE
                </span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface">
                Featured Export Lines &amp; Specifications
              </h2>
            </div>
            <Link
              className="inline-flex items-center gap-2 font-label-md text-label-md text-primary hover:text-secondary transition-colors"
              href="/products"
            >
              <span>View all products manifest</span>
              <span className="material-symbols-outlined text-[17px]">arrow_forward</span>
            </Link>
          </div>

          {/* Interactive Category Bar (Matching Reference Demo Hover Behavior) */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3.5 mb-10 p-2.5 rounded-2xl bg-[#E8E0D0] border border-secondary/20 shadow-inner">
            {[
              { id: "all", label: "All Commodities", count: "12+" },
              { id: "rice", label: "Rice & Grains", count: "04" },
              { id: "spices", label: "Indian Spices", count: "06" },
              { id: "textiles", label: "Raw Cotton & Textiles", count: "03" },
              { id: "pulses", label: "Oilseeds & Pulses", count: "02" },
            ].map((cat, idx) => (
              <button
                key={cat.id}
                type="button"
                className={`group flex items-center gap-2 px-4 sm:px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm transition-all duration-300 shadow-xs border ${
                  idx === 0
                    ? "bg-primary text-white border-primary shadow-md scale-[1.02]"
                    : "bg-white text-on-surface border-[#D8CEBC] hover:bg-primary hover:text-white hover:border-primary hover:shadow-md hover:scale-[1.02]"
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`font-data-mono text-[11px] px-2 py-0.5 rounded-full transition-colors ${
                    idx === 0
                      ? "bg-secondary text-surface-container-lowest font-bold"
                      : "bg-[#F3EDE0] text-on-surface-variant group-hover:bg-secondary group-hover:text-surface-container-lowest"
                  }`}
                >
                  {cat.count}
                </span>
                <span className="material-symbols-outlined text-[16px] text-secondary-container transition-transform duration-300 group-hover:translate-x-1">
                  arrow_forward
                </span>
              </button>
            ))}
          </div>

          {/* 4 Product Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Product 1: Basmati Rice */}
            <div className="bg-surface-container-low rounded border border-secondary/25 overflow-hidden flex flex-col justify-between hover:border-secondary transition-all shadow-sm group">
              <div>
                <div className="relative w-full aspect-[4/3] bg-surface-container overflow-hidden">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    alt="Premium uncooked 1121 steam Basmati raw rice grains"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIlX-_kVp7704btKmFEHQQ4ISTNuqdsQpgTgRsrifXWFY0iV1fIsh8w9UcBeOxY-A_CizS2tAQP45Mifnln4rXUNxmrZkMEayul0q8TQ05gnGl2f5996rEK8Z46Zgu1t3cUmQ_pkudY6ndt9dni63AScit04DdwqOi7ojRu1AmwCEg5qA3jDgCM3T5RsDtGuQFHXtb9uwbDhsUj1FE7MGv5bIWk2ZRkTcVZmiITDjyNEmTyQ4QSN5y"
                  />
                  <span className="absolute top-3 left-3 bg-surface text-on-surface font-data-mono text-data-mono px-2 py-0.5 rounded border border-secondary/30">
                    HS: 1006.30
                  </span>
                </div>
                <div className="p-6">
                  <span className="font-eyebrow-bold text-eyebrow-bold text-secondary uppercase tracking-wider block mb-1">
                    GRAINS &amp; SEEDS
                  </span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface mb-4">
                    1121 Basmati Rice
                  </h3>
                  <div className="space-y-2 border-t border-outline-variant/30 pt-4">
                    <div className="flex justify-between font-body-sm text-body-sm">
                      <span className="text-on-surface-variant">Grade</span>
                      <span className="font-semibold text-on-surface font-data-mono">Steam Extra Long</span>
                    </div>
                    <div className="flex justify-between font-body-sm text-body-sm">
                      <span className="text-on-surface-variant">Avg. Length</span>
                      <span className="font-semibold text-on-surface font-data-mono">8.35 mm</span>
                    </div>
                    <div className="flex justify-between font-body-sm text-body-sm">
                      <span className="text-on-surface-variant">Moisture</span>
                      <span className="font-semibold text-on-surface font-data-mono">&lt; 12.5%</span>
                    </div>
                    <div className="flex justify-between font-body-sm text-body-sm">
                      <span className="text-on-surface-variant">Packing</span>
                      <span className="font-semibold text-on-surface font-data-mono">25 kg PP Bags</span>
                    </div>
                    <div className="flex justify-between font-body-sm text-body-sm">
                      <span className="text-on-surface-variant">MOQ</span>
                      <span className="font-semibold text-primary font-data-mono">20 MT (1 FCL)</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6 pt-0">
                <button
                  type="button"
                  onClick={() => openQuoteModal("1121-basmati")}
                  className="w-full py-3 px-4 rounded-xl bg-[#FAF6EE] text-primary border border-secondary/35 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300 font-label-md text-label-md flex items-center justify-center gap-2 font-semibold shadow-xs"
                >
                  <span>Enquire for Price &amp; Specs</span>
                  <span className="material-symbols-outlined text-[16px] text-secondary group-hover:text-secondary-container group-hover:translate-x-1 transition-all">
                    arrow_forward
                  </span>
                </button>
              </div>
            </div>

            {/* Product 2: Turmeric Powder */}
            <div className="bg-surface-container-low rounded border border-secondary/25 overflow-hidden flex flex-col justify-between hover:border-secondary transition-all shadow-sm group">
              <div>
                <div className="relative w-full aspect-[4/3] bg-surface-container overflow-hidden">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    alt="Vibrant organic golden-orange turmeric powder"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZusFlCbsg1R0AwCqA1tAymPp3eGmaugw3vRakDxDkhhablJc4KQBrMPvkUH2XBDS9hR6oznslW5H4JgHZXphXSrGCfvQ60EgHh8P6kf2Ck-eWolO00azp_iQZ2yxR728qnrHMfWP2y_F7-rAPMocDhkBWNEk1XR3NnxFHnknfzPPFrwcCFyWzSuqLffl-OVlXV0Os-3qKg2KHRlDZkDBgQoPbRtly7pSvD2x-Etx8NUFvyF8x_LDM"
                  />
                  <span className="absolute top-3 left-3 bg-surface text-on-surface font-data-mono text-data-mono px-2 py-0.5 rounded border border-secondary/30">
                    HS: 0910.30
                  </span>
                </div>
                <div className="p-6">
                  <span className="font-eyebrow-bold text-eyebrow-bold text-secondary uppercase tracking-wider block mb-1">
                    PURE SPICES
                  </span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface mb-4">
                    Turmeric Powder
                  </h3>
                  <div className="space-y-2 border-t border-outline-variant/30 pt-4">
                    <div className="flex justify-between font-body-sm text-body-sm">
                      <span className="text-on-surface-variant">Origin</span>
                      <span className="font-semibold text-on-surface font-data-mono">Salem / Alleppey</span>
                    </div>
                    <div className="flex justify-between font-body-sm text-body-sm">
                      <span className="text-on-surface-variant">Curcumin</span>
                      <span className="font-semibold text-on-surface font-data-mono">3.0% – 5.0%</span>
                    </div>
                    <div className="flex justify-between font-body-sm text-body-sm">
                      <span className="text-on-surface-variant">Mesh Size</span>
                      <span className="font-semibold text-on-surface font-data-mono">80 - 100 Mesh</span>
                    </div>
                    <div className="flex justify-between font-body-sm text-body-sm">
                      <span className="text-on-surface-variant">Packing</span>
                      <span className="font-semibold text-on-surface font-data-mono">25 kg Multi-wall</span>
                    </div>
                    <div className="flex justify-between font-body-sm text-body-sm">
                      <span className="text-on-surface-variant">MOQ</span>
                      <span className="font-semibold text-primary font-data-mono">5 MT</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6 pt-0">
                <button
                  type="button"
                  onClick={() => openQuoteModal("organic-turmeric")}
                  className="w-full py-3 px-4 rounded-xl bg-[#FAF6EE] text-primary border border-secondary/35 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300 font-label-md text-label-md flex items-center justify-center gap-2 font-semibold shadow-xs"
                >
                  <span>Enquire for Price &amp; Specs</span>
                  <span className="material-symbols-outlined text-[16px] text-secondary group-hover:text-secondary-container group-hover:translate-x-1 transition-all">
                    arrow_forward
                  </span>
                </button>
              </div>
            </div>

            {/* Product 3: Black Pepper */}
            <div className="bg-surface-container-low rounded border border-secondary/25 overflow-hidden flex flex-col justify-between hover:border-secondary transition-all shadow-sm group">
              <div>
                <div className="relative w-full aspect-[4/3] bg-surface-container overflow-hidden">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    alt="Deep black tellicherry garbled extra bold whole black peppercorns"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCu96Fgm4_NynskGIHbk-COWnmeOMQOToESpM3Dc98bYMTain2glx69IAXAq0NhKp-FbiGSY_z_ya0pWkBShHmY5iVYylYUC2YqCweTbZiut6t8xSH9x8awVH0fudUc6uyMafk033CGH0Uwre4y7WZNa2sJ97ul2HpkTBYSrIIWuKl9wOKhS55x7nXLnzx71s-uPjdbNta4RwZwvgHPDkTlAwGOv6Gnd2I6UuzhVB0sF-ZPvkUWqtb6"
                  />
                  <span className="absolute top-3 left-3 bg-surface text-on-surface font-data-mono text-data-mono px-2 py-0.5 rounded border border-secondary/30">
                    HS: 0904.11
                  </span>
                </div>
                <div className="p-6">
                  <span className="font-eyebrow-bold text-eyebrow-bold text-secondary uppercase tracking-wider block mb-1">
                    MALABAR SPICES
                  </span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface mb-4">
                    Black Pepper
                  </h3>
                  <div className="space-y-2 border-t border-outline-variant/30 pt-4">
                    <div className="flex justify-between font-body-sm text-body-sm">
                      <span className="text-on-surface-variant">Density</span>
                      <span className="font-semibold text-on-surface font-data-mono">550 GL / 570 GL</span>
                    </div>
                    <div className="flex justify-between font-body-sm text-body-sm">
                      <span className="text-on-surface-variant">Processing</span>
                      <span className="font-semibold text-on-surface font-data-mono">Machine Cleaned</span>
                    </div>
                    <div className="flex justify-between font-body-sm text-body-sm">
                      <span className="text-on-surface-variant">Sterilization</span>
                      <span className="font-semibold text-on-surface font-data-mono">Steam Sterilized</span>
                    </div>
                    <div className="flex justify-between font-body-sm text-body-sm">
                      <span className="text-on-surface-variant">Packing</span>
                      <span className="font-semibold text-on-surface font-data-mono">25/50 kg Jute/PP</span>
                    </div>
                    <div className="flex justify-between font-body-sm text-body-sm">
                      <span className="text-on-surface-variant">MOQ</span>
                      <span className="font-semibold text-primary font-data-mono">5 MT</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6 pt-0">
                <button
                  type="button"
                  onClick={() => openQuoteModal("tellicherry-pepper")}
                  className="w-full py-3 px-4 rounded-xl bg-[#FAF6EE] text-primary border border-secondary/35 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300 font-label-md text-label-md flex items-center justify-center gap-2 font-semibold shadow-xs"
                >
                  <span>Enquire for Price &amp; Specs</span>
                  <span className="material-symbols-outlined text-[16px] text-secondary group-hover:text-secondary-container group-hover:translate-x-1 transition-all">
                    arrow_forward
                  </span>
                </button>
              </div>
            </div>

            {/* Product 4: Cotton Fabrics */}
            <div className="bg-surface-container-low rounded border border-secondary/25 overflow-hidden flex flex-col justify-between hover:border-secondary transition-all shadow-sm group">
              <div>
                <div className="relative w-full aspect-[4/3] bg-surface-container overflow-hidden">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    alt="Rolls of raw natural 100% combed cotton greige export fabrics"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQetGmb7QzsBa3a53TffjCsYYCMdQxED5VkeD-kvaw3en2nKWI60p6eo7Vsh7g59bD0s7X2b3B14ILdACvfejAUo4tR4Ovqe-io8R2-N2vtxR5XEGj7wY_0eeF6uq_J9OM1CU5TuTOni2H1EkQfS24wJIijhXy9SykXWe_MeQVrpXAF5F87o4Zq1WHLGMJZ9MSEPW5rMaxQFjFfHB2jmjz8D8kWIoXQ_05gE12lyfQEQGr3PT7yd9G"
                  />
                  <span className="absolute top-3 left-3 bg-surface text-on-surface font-data-mono text-data-mono px-2 py-0.5 rounded border border-secondary/30">
                    HS: 5208.11
                  </span>
                </div>
                <div className="p-6">
                  <span className="font-eyebrow-bold text-eyebrow-bold text-secondary uppercase tracking-wider block mb-1">
                    TEXTILE MILLS
                  </span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface mb-4">
                    Cotton Fabrics
                  </h3>
                  <div className="space-y-2 border-t border-outline-variant/30 pt-4">
                    <div className="flex justify-between font-body-sm text-body-sm">
                      <span className="text-on-surface-variant">Composition</span>
                      <span className="font-semibold text-on-surface font-data-mono">100% Combed</span>
                    </div>
                    <div className="flex justify-between font-body-sm text-body-sm">
                      <span className="text-on-surface-variant">Yarn Count</span>
                      <span className="font-semibold text-on-surface font-data-mono">40s x 40s Weave</span>
                    </div>
                    <div className="flex justify-between font-body-sm text-body-sm">
                      <span className="text-on-surface-variant">GSM</span>
                      <span className="font-semibold text-on-surface font-data-mono">120 - 145 GSM</span>
                    </div>
                    <div className="flex justify-between font-body-sm text-body-sm">
                      <span className="text-on-surface-variant">Packing</span>
                      <span className="font-semibold text-on-surface font-data-mono">Export Roll / Bale</span>
                    </div>
                    <div className="flex justify-between font-body-sm text-body-sm">
                      <span className="text-on-surface-variant">MOQ</span>
                      <span className="font-semibold text-primary font-data-mono">5,000 Meters</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6 pt-0">
                <button
                  type="button"
                  onClick={() => openQuoteModal("cotton-fabrics")}
                  className="w-full py-3 px-4 rounded-xl bg-[#FAF6EE] text-primary border border-secondary/35 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300 font-label-md text-label-md flex items-center justify-center gap-2 font-semibold shadow-xs"
                >
                  <span>Enquire for Price &amp; Specs</span>
                  <span className="material-symbols-outlined text-[16px] text-secondary group-hover:text-secondary-container group-hover:translate-x-1 transition-all">
                    arrow_forward
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. B2B QUICK ENQUIRY SECTION */}
      <section className="w-full py-24 bg-surface-container border-t border-outline-variant/30" id="quick-enquiry">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 rounded overflow-hidden shadow-sm border border-secondary/30">
            {/* Left: Minimalist Form (7 Cols) */}
            <div className="lg:col-span-7 bg-surface p-8 lg:p-14">
              <div className="inline-flex items-center gap-3 mb-3">
                <span className="font-data-mono text-data-mono text-secondary font-semibold">05</span>
                <span className="w-4 h-px bg-secondary/50" />
                <span className="font-eyebrow-bold text-eyebrow-bold uppercase tracking-[0.2em] text-secondary">
                  TRADE INQUIRY
                </span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-3">
                Request an Official Export Quote
              </h2>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-10">
                Direct your procurement queries to our maritime desks for firm FOB / CIF quotation sheets.
              </p>

              {formSubmitted ? (
                <div className="p-6 rounded bg-primary-fixed/20 border border-primary/30 text-on-primary-fixed flex flex-col gap-3">
                  <div className="flex items-center gap-2 text-primary font-headline-sm">
                    <span className="material-symbols-outlined text-[24px]">verified</span>
                    <span>Inquiry Registered Successfully</span>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface">
                    Thank you, <span className="font-bold">{inquiryData.fullName || "Partner"}</span>. Our Visakhapatnam export desk is reviewing your requirements for <span className="font-bold">{inquiryData.commodity || "agro commodities"}</span>. A formal proforma quotation will be dispatched to <span className="font-bold">{inquiryData.email}</span> within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setFormSubmitted(false)}
                    className="self-start text-xs font-data-mono text-secondary hover:underline pt-2"
                  >
                    ← Submit another inquiry
                  </button>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleInquirySubmit}>
                  {/* Full Name & Corporate Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col">
                      <label className="font-label-md text-label-md text-on-surface mb-2" htmlFor="home-full-name">
                        Full Name *
                      </label>
                      <input
                        className="w-full bg-surface-container-low px-3.5 py-3 border border-secondary/30 rounded focus:border-primary focus:outline-none font-body-md text-body-md text-on-surface transition-colors"
                        id="home-full-name"
                        placeholder="e.g. David Vance"
                        required
                        type="text"
                        value={inquiryData.fullName}
                        onChange={(e) => setInquiryData({ ...inquiryData, fullName: e.target.value })}
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="font-label-md text-label-md text-on-surface mb-2" htmlFor="home-corp-email">
                        Corporate Email *
                      </label>
                      <input
                        className="w-full bg-surface-container-low px-3.5 py-3 border border-secondary/30 rounded focus:border-primary focus:outline-none font-body-md text-body-md text-on-surface transition-colors"
                        id="home-corp-email"
                        placeholder="name@company.com"
                        required
                        type="email"
                        value={inquiryData.email}
                        onChange={(e) => setInquiryData({ ...inquiryData, email: e.target.value })}
                      />
                    </div>
                  </div>
                  {/* Commodity Requirement */}
                  <div className="flex flex-col">
                    <label className="font-label-md text-label-md text-on-surface mb-2" htmlFor="home-commodity-select">
                      Sourcing Requirement / Commodity *
                    </label>
                    <select
                      className="w-full bg-surface-container-low px-3.5 py-3 border border-secondary/30 rounded focus:border-primary focus:outline-none font-body-md text-body-md text-on-surface transition-colors"
                      id="home-commodity-select"
                      required
                      value={inquiryData.commodity}
                      onChange={(e) => setInquiryData({ ...inquiryData, commodity: e.target.value })}
                    >
                      <option value="">Select Commodity Line</option>
                      <option value="1121 Basmati Rice">1121 Basmati Rice (Steam / Sella / Raw)</option>
                      <option value="Turmeric Powder & Fingers">Turmeric (Salem / Alleppey Finger &amp; Powder)</option>
                      <option value="Malabar Black Pepper">Malabar Black Pepper (500 - 570 GL)</option>
                      <option value="Guntur Dry Red Chilli">Guntur Dry Red Chilli (S17 / Sanam / Byadgi)</option>
                      <option value="100% Combed Cotton Fabrics">100% Combed Cotton Fabrics &amp; Yarns</option>
                      <option value="Other Agro Bulk">Other Agro Bulk / Custom Specification</option>
                    </select>
                  </div>
                  {/* Destination Port & Volume */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col">
                      <label className="font-label-md text-label-md text-on-surface mb-2" htmlFor="home-dest-port">
                        Destination Port &amp; Country *
                      </label>
                      <input
                        className="w-full bg-surface-container-low px-3.5 py-3 border border-secondary/30 rounded focus:border-primary focus:outline-none font-body-md text-body-md text-on-surface transition-colors"
                        id="home-dest-port"
                        placeholder="e.g. Jebel Ali, UAE or Rotterdam, NL"
                        required
                        type="text"
                        value={inquiryData.destinationPort}
                        onChange={(e) => setInquiryData({ ...inquiryData, destinationPort: e.target.value })}
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="font-label-md text-label-md text-on-surface mb-2" htmlFor="home-order-quantity">
                        Target Quantity (MT or TEU) *
                      </label>
                      <input
                        className="w-full bg-surface-container-low px-3.5 py-3 border border-secondary/30 rounded focus:border-primary focus:outline-none font-body-md text-body-md text-on-surface transition-colors"
                        id="home-order-quantity"
                        placeholder="e.g. 50 Metric Tons (2 FCL)"
                        required
                        type="text"
                        value={inquiryData.quantity}
                        onChange={(e) => setInquiryData({ ...inquiryData, quantity: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="pt-2">
                    <button
                      className="inline-flex items-center gap-3 bg-secondary text-surface-bright font-label-md text-label-md px-8 py-3.5 rounded hover:bg-on-secondary-fixed-variant transition-colors shadow-sm w-full sm:w-auto justify-center"
                      type="submit"
                    >
                      <span>Send enquiry</span>
                      <span className="material-symbols-outlined text-[17px]">arrow_forward</span>
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Right: Forest Green Desk Assistance (5 Cols) */}
            <div className="lg:col-span-5 bg-on-tertiary-fixed text-surface-bright p-8 lg:p-14 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-secondary/30">
              <div>
                <div className="w-10 h-10 rounded bg-primary text-secondary-container flex items-center justify-center border border-secondary/40 mb-6">
                  <span className="material-symbols-outlined text-[20px]">support_agent</span>
                </div>
                <span className="font-eyebrow-bold text-eyebrow-bold uppercase tracking-[0.2em] text-secondary-container block mb-2">
                  EXPRESS COMMERCE
                </span>
                <h3 className="font-headline-sm text-headline-sm text-surface-bright mb-4">
                  Direct Port Desk Assistance
                </h3>
                <p className="font-body-md text-body-md text-surface-bright/80 mb-8 leading-relaxed">
                  Require urgent spot container pricing, sample lot dispatch, or custom packing analysis? Our trade managers respond in real-time.
                </p>
                <div className="space-y-4 mb-8">
                  <a
                    className="w-full inline-flex items-center justify-center gap-2 bg-secondary text-surface-bright font-label-md text-label-md py-3.5 px-6 rounded hover:bg-on-secondary-fixed-variant transition-colors"
                    href="https://wa.me/919876543210"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span className="material-symbols-outlined text-[18px]">chat</span>
                    <span>Chat on WhatsApp</span>
                  </a>
                  <a
                    className="w-full inline-flex items-center justify-center gap-2 border border-surface-bright/40 text-surface-bright font-label-md text-label-md py-3 px-6 rounded hover:bg-surface-bright/10 hover:border-surface-bright transition-colors"
                    href="mailto:export@svmrexports.example"
                  >
                    <span className="material-symbols-outlined text-[18px] text-secondary-container">mail</span>
                    <span>Email us directly</span>
                  </a>
                </div>
              </div>
              <div className="pt-6 border-t border-secondary/25">
                <div className="flex items-center gap-2 font-data-mono text-data-mono text-secondary-container mb-1">
                  <span className="w-2 h-2 rounded-full bg-primary-fixed inline-block" />
                  <span>SLA GUARANTEE</span>
                </div>
                <p className="font-body-sm text-body-sm text-surface-bright/70">
                  We reply with verified FOB (Visakhapatnam/Chennai) or CIF quotes within 24 hours of commercial inquiry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
