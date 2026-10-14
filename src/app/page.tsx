"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useQuoteModal } from "@/context/QuoteModalContext";
import MarqueeTicker from "@/components/MarqueeTicker";
import AnimatedCounter from "@/components/AnimatedCounter";
import WorldTradeRoutes from "@/components/WorldTradeRoutes";

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
      {/* 1. CINEMATIC HERO SECTION WITH LUXURY EDITORIAL OVERLAY */}
      <section
        className="relative w-full -mt-20 pt-20 bg-[#0B281D] text-white overflow-hidden flex flex-col justify-between"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Full-Bleed Auto-Playing Port & Maritime Slides with Slow Cinematic Movement */}
        <div className="relative w-full h-[520px] sm:h-[620px] lg:h-[720px] overflow-hidden">
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

          {/* Luxury Deep Emerald Gradient Overlay for High Editorial Contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B281D]/95 via-[#0B281D]/80 to-[#123D2B]/50" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0B281D] to-transparent" />

          {/* Hero Content Overlay */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 h-full flex flex-col justify-center">
            <div className="max-w-3xl">
              {/* Understated Global Trade Label */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#123D2B]/80 backdrop-blur-md border border-[#C5A15B]/40 shadow-sm mb-6">
                <span className="w-2 h-2 rounded-full bg-[#86D7A9] animate-pulse" />
                <span className="font-mono text-xs text-[#FDE047] uppercase tracking-widest font-bold">
                  VISAKHAPATNAM PORT TERMINAL · DEEPWATER BERTH 04
                </span>
              </div>

              {/* Editorial Headline with deliberate line break */}
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white leading-[1.08] drop-shadow-lg mb-6">
                Rooted in India.<br />
                <span className="text-[#FDE047] italic font-normal">Trusted Across</span> the World.
              </h1>

              {/* Supporting Copy */}
              <p className="font-sans text-base sm:text-lg text-[#F7F4EB]/90 leading-relaxed max-w-2xl mb-10">
                Connecting quality Indian produce and materials with global markets through dependable sourcing, careful quality control and export expertise.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/products"
                  className="gold-sheen-button inline-flex items-center gap-2.5 bg-gradient-to-r from-[#FDE047] via-[#E5B80B] to-[#C5A15B] text-[#0B281D] font-sans text-sm font-bold uppercase tracking-wider px-7 py-3.5 rounded-xl shadow-[0_4px_20px_rgba(229,184,11,0.4)] hover:shadow-[0_6px_28px_rgba(229,184,11,0.6)] hover:scale-105 transition-all duration-300 border border-[#FFF089]"
                >
                  <span>Explore Our Products</span>
                  <span className="material-symbols-outlined text-[18px] font-bold">arrow_forward</span>
                </Link>

                <button
                  type="button"
                  onClick={() => openQuoteModal()}
                  className="inline-flex items-center gap-2.5 bg-white/10 hover:bg-white/20 text-white font-sans text-sm font-semibold uppercase tracking-wider px-6 py-3.5 rounded-xl backdrop-blur-md border border-[#C5A15B]/50 hover:border-[#C5A15B] transition-all duration-300"
                >
                  <span className="material-symbols-outlined text-[18px] text-[#FDE047]">request_quote</span>
                  <span>Request a Quote</span>
                </button>
              </div>
            </div>
          </div>

          {/* Minimal Slide Progress Dots & Scroll Indicator */}
          <div className="absolute bottom-6 left-6 lg:left-12 z-20 flex items-center gap-4">
            <div className="flex items-center gap-2">
              {heroSlides.map((slide, idx) => (
                <button
                  key={slide.id}
                  onClick={() => setCurrentSlide(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`transition-all duration-500 rounded-full ${
                    idx === currentSlide
                      ? "w-8 h-2 bg-[#E5B80B] shadow-md"
                      : "w-2 h-2 bg-white/50 hover:bg-white/80"
                  }`}
                />
              ))}
            </div>
            <div className="hidden sm:flex items-center gap-2 font-mono text-xs text-[#E7EDE6]/70">
              <span className="material-symbols-outlined text-[16px] text-[#C5A15B] animate-bounce">south</span>
              <span>SCROLL TO DISCOVER</span>
            </div>
          </div>
        </div>

        {/* C. VERIFIED TRUST STRIP */}
        <div className="w-full bg-[#0B281D] border-t border-[#C5A15B]/30 py-5">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <span className="font-display text-2xl lg:text-3xl font-bold text-[#FDE047]">
                <AnimatedCounter target={16} suffix="+" />
              </span>
              <div className="flex flex-col">
                <span className="font-sans text-xs font-bold text-white uppercase tracking-wider">Years Experience</span>
                <span className="font-sans text-[11px] text-[#E7EDE6]/70">Estd. 2008 in Andhra Pradesh</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 border-l-0 md:border-l border-[#C5A15B]/20 md:pl-6">
              <span className="font-display text-2xl lg:text-3xl font-bold text-[#FDE047]">
                <AnimatedCounter target={40} suffix="+" />
              </span>
              <div className="flex flex-col">
                <span className="font-sans text-xs font-bold text-white uppercase tracking-wider">Destination Ports</span>
                <span className="font-sans text-[11px] text-[#E7EDE6]/70">GCC, Europe, SE Asia, Americas</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 border-l-0 md:border-l border-[#C5A15B]/20 md:pl-6">
              <span className="font-display text-2xl lg:text-3xl font-bold text-[#FDE047]">
                <AnimatedCounter target={6} prefix="0" />
              </span>
              <div className="flex flex-col">
                <span className="font-sans text-xs font-bold text-white uppercase tracking-wider">Core Sectors</span>
                <span className="font-sans text-[11px] text-[#E7EDE6]/70">Rice, Spices, Cotton, Grains</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 border-l-0 md:border-l border-[#C5A15B]/20 md:pl-6">
              <span className="material-symbols-outlined text-[32px] text-[#FDE047]">verified_user</span>
              <div className="flex flex-col">
                <span className="font-sans text-xs font-bold text-white uppercase tracking-wider">Verified Compliance</span>
                <span className="font-sans text-[11px] text-[#E7EDE6]/70">APEDA, Spices Board, US-FDA</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTINUOUS HORIZONTAL MARQUEE OF VERIFIED COMMODITIES & CREDENTIALS */}
      <MarqueeTicker />

      {/* D. COMPANY INTRODUCTION (Warm Luxury Ivory & Floating Emerald Feature Card) */}
      <section className="w-full py-24 bg-[#F7F4EB] text-[#1A241F] border-b border-[#ECE6D8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
            {/* Visual Column (7 Cols on desktop) */}
            <div className="lg:col-span-7 relative">
              <div className="absolute -top-3 -left-3 w-full h-full border-2 border-[#C5A15B] rounded-2xl pointer-events-none hidden sm:block shadow-[0_0_20px_rgba(197,161,91,0.25)]" />
              <div className="relative bg-[#ECE6D8] rounded-2xl overflow-hidden shadow-xl aspect-[4/3] group border border-[#C5A15B]/30">
                <img
                  className="w-full h-full object-cover grayscale-[5%] group-hover:scale-105 transition-transform duration-700 ease-out"
                  alt="Quality control inspection of export grade Indian spices and agricultural grains"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzYrRoQxdKpgrd383CDGw6UiAnieZdvOiYFbGDFRqt8lwAERQ-56EYbdqaSCn6UnG7rHxPd1d-JKkRf-Dj1I44bF1HQcZXNPBMmndqW9qRy0ngR7GeqIDlny1rZ2G1Eomxq9l69AvyYmSXhEm3fsIEBYXP1nYPJmgeZ2NZxDyVh_NvsvR2zLstl8ldxVKPEkvMz8ilvmuzIufv1GPPYMwUsaNsvhMSoGyoEwyHiKDZOubtlsWmNZwN"
                />
                <div className="absolute bottom-4 right-4 bg-[#0B281D]/95 backdrop-blur-md text-white px-5 py-2.5 rounded-xl border-2 border-[#C5A15B] font-mono text-xs flex items-center gap-2.5 shadow-[0_4px_15px_rgba(197,161,91,0.3)]">
                  <span className="material-symbols-outlined text-[20px] text-[#FDE047]">biotech</span>
                  <span className="tracking-wide font-bold">INVTZ-LAB · BATCH PASS SGS 99.8%</span>
                </div>
              </div>

              {/* Floating Dark Emerald Value Card with Gold Radiance */}
              <div className="mt-6 p-6 rounded-2xl bg-[#0B281D] text-white border-2 border-[#C5A15B] shadow-[0_12px_35px_-5px_rgba(197,161,91,0.3)]">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#C5A15B] via-[#E5B80B] to-[#FDE047] text-[#0B281D] flex items-center justify-center font-black text-sm shrink-0 shadow-[0_0_12px_rgba(229,184,11,0.6)]">✓</span>
                    <span className="text-sm font-semibold text-white/95">APEDA &amp; Spices Board Certified</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#C5A15B] via-[#E5B80B] to-[#FDE047] text-[#0B281D] flex items-center justify-center font-black text-sm shrink-0 shadow-[0_0_12px_rgba(229,184,11,0.6)]">✓</span>
                    <span className="text-sm font-semibold text-white/95">Direct Deepwater Berth Quay 02</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#C5A15B] via-[#E5B80B] to-[#FDE047] text-[#0B281D] flex items-center justify-center font-black text-sm shrink-0 shadow-[0_0_12px_rgba(229,184,11,0.6)]">✓</span>
                    <span className="text-sm font-semibold text-white/95">100% Sortex Optical Cleaned</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#C5A15B] via-[#E5B80B] to-[#FDE047] text-[#0B281D] flex items-center justify-center font-black text-sm shrink-0 shadow-[0_0_12px_rgba(229,184,11,0.6)]">✓</span>
                    <span className="text-sm font-semibold text-white/95">Incoterms 2020: CIF / FOB / CFR</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Narrative Column (5 Cols on desktop) */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="inline-flex items-center gap-3 mb-4">
                <span className="font-mono text-[#C5A15B] font-bold text-base">01</span>
                <span className="w-8 h-0.5 bg-[#C5A15B]" />
                <span className="font-sans text-xs uppercase tracking-[0.24em] text-[#C5A15B] font-extrabold">
                  HERITAGE &amp; EXCELLENCE
                </span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1A241F] mb-6 leading-tight">
                Connecting Indian soil to <span className="text-[#C5A15B] italic font-normal">global tables &amp; mills</span>
              </h2>
              <p className="font-sans text-sm sm:text-base text-[#3B4A40] mb-6 leading-relaxed">
                Bharat Global Exports bridges India’s rich agrarian hinterlands and state-of-the-art weaving clusters directly with procurement directors worldwide. Operating out of the strategic Visakhapatnam maritime zone, we eliminate redundant intermediaries.
              </p>
              <p className="font-sans text-sm sm:text-base text-[#3B4A40] mb-8 leading-relaxed">
                We handle upstream farmgate aggregation, stringent multi-tier quality checks, Sortex optical grading, phytosanitary fumigation, and custom export packaging—delivering impeccable consistency and zero documentation discrepancies on every single consignment.
              </p>
              <div className="pt-2">
                <Link
                  className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl bg-white text-[#123D2B] border-2 border-[#C5A15B] hover:bg-[#123D2B] hover:text-white hover:border-[#123D2B] transition-all duration-300 font-sans text-sm font-bold shadow-md group hover:scale-[1.02]"
                  href="/products"
                >
                  <span>Explore Our Export Catalogue</span>
                  <span className="material-symbols-outlined text-[19px] text-[#C5A15B] group-hover:text-[#FDE047] group-hover:translate-x-1.5 transition-all">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* E. EXPORT CAPABILITIES & INFRASTRUCTURE BENTO GRID */}
      <section className="w-full py-24 bg-[#ECE6D8] text-[#1A241F] border-b border-[#DDD4BF]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <div className="inline-flex items-center gap-3 mb-3">
                <span className="font-mono text-[#C5A15B] font-bold text-base">02</span>
                <span className="w-8 h-0.5 bg-[#C5A15B]" />
                <span className="font-sans text-xs uppercase tracking-[0.24em] text-[#C5A15B] font-extrabold">
                  EXPORT INFRASTRUCTURE
                </span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1A241F]">
                Capabilities &amp; Processing Standards
              </h2>
            </div>
            <p className="font-sans text-sm text-[#3B4A40] max-w-md leading-relaxed">
              End-to-end commercial operations equipped to handle bulk ocean charters, FCL containerized shipping, and private-label retail configurations.
            </p>
          </div>

          {/* Asymmetric Bento-style Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Tall Featured Card (Left 6 Cols) */}
            <div className="lg:col-span-6 bg-[#F7F4EB] rounded-2xl p-8 border-2 border-[#C5A15B]/30 hover:border-[#C5A15B] flex flex-col justify-between group shadow-sm transition-all duration-300">
              <div>
                <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden mb-6 bg-[#E8E4D7]">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    alt="Aerial flat lay of raw Indian agricultural commodities"
                    src="/images/about_banner_pulses.jpg"
                  />
                  <span className="absolute top-3 left-3 bg-[#123D2B] text-white font-sans text-xs font-bold px-3 py-1 uppercase tracking-wider rounded-lg border border-[#C5A15B]/40">
                    CORE COMMODITIES
                  </span>
                </div>
                <h3 className="font-display text-2xl font-bold text-[#1A241F] mb-3">
                  Agricultural Commodities &amp; Whole Spices
                </h3>
                <p className="font-sans text-sm text-[#3B4A40] mb-6 leading-relaxed">
                  Pristine basmati rice, Malabar pepper, Salem turmeric, and Guntur chillies graded to custom ASTA and ETO parameters. Tested, packaged, and preserved to international sanitary standards.
                </p>
              </div>
              <div className="pt-6 border-t border-[#C5A15B]/20 flex items-center justify-between">
                <div className="flex items-center gap-2 text-[#123D2B] font-sans text-xs font-bold uppercase tracking-wider">
                  <span className="material-symbols-outlined text-[18px] text-[#C5A15B]">verified_user</span>
                  <span>Phytosanitary &amp; Halal Certified</span>
                </div>
                <Link
                  className="w-10 h-10 rounded-xl bg-white border border-[#C5A15B]/40 flex items-center justify-center text-[#123D2B] group-hover:bg-[#123D2B] group-hover:text-white group-hover:border-[#123D2B] transition-all shadow-sm"
                  href="/products"
                  aria-label="Explore Products"
                >
                  <span className="material-symbols-outlined text-[18px]">north_east</span>
                </Link>
              </div>
            </div>

            {/* Two Stacked Horizontal Cards (Right 6 Cols) */}
            <div className="lg:col-span-6 flex flex-col gap-8 justify-between">
              {/* Stacked Card 1 */}
              <div className="bg-[#F7F4EB] rounded-2xl p-7 border-2 border-[#C5A15B]/30 hover:border-[#C5A15B] flex flex-col sm:flex-row gap-6 items-center shadow-sm transition-all duration-300 group">
                <div className="w-full sm:w-44 h-40 shrink-0 rounded-xl overflow-hidden bg-[#E8E4D7]">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    alt="Packaging line and private label retail pouch facility"
                    src="/images/products_banner_spices.jpg"
                  />
                </div>
                <div className="flex flex-col justify-between flex-1">
                  <div>
                    <span className="font-sans text-xs font-bold text-[#C5A15B] uppercase tracking-wider block mb-1">
                      CONTRACT PACKAGING
                    </span>
                    <h4 className="font-display text-lg font-bold text-[#1A241F] mb-2">
                      Export Processing &amp; Private Label Services
                    </h4>
                    <p className="font-sans text-xs text-[#3B4A40] leading-relaxed mb-4">
                      Custom vacuum pouches, multi-wall paper bags, institutional nitrogen-flushed containers, and OEM retail branding under strict GMP supervision.
                    </p>
                  </div>
                  <Link
                    className="inline-flex items-center gap-1.5 font-sans text-xs font-bold text-[#123D2B] hover:text-[#C5A15B] transition-colors"
                    href="/services"
                  >
                    <span>Explore processing protocols</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </Link>
                </div>
              </div>

              {/* Stacked Card 2 */}
              <div className="bg-[#F7F4EB] rounded-2xl p-7 border-2 border-[#C5A15B]/30 hover:border-[#C5A15B] flex flex-col sm:flex-row gap-6 items-center shadow-sm transition-all duration-300 group">
                <div className="w-full sm:w-44 h-40 shrink-0 rounded-xl overflow-hidden bg-[#E8E4D7]">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    alt="Container vessel moored at Visakhapatnam Sea Port"
                    src="/images/banner_port_cranes.jpg"
                  />
                </div>
                <div className="flex flex-col justify-between flex-1">
                  <div>
                    <span className="font-sans text-xs font-bold text-[#C5A15B] uppercase tracking-wider block mb-1">
                      LOGISTICS CORRIDOR
                    </span>
                    <h4 className="font-display text-lg font-bold text-[#1A241F] mb-2">
                      Visakhapatnam Port Terminal &amp; Trade Gallery
                    </h4>
                    <p className="font-sans text-xs text-[#3B4A40] leading-relaxed mb-4">
                      Direct CFS access, pre-berthing customs clearance, and refrigerated reefers ensuring minimum dwell times and zero container demurrage.
                    </p>
                  </div>
                  <Link
                    className="inline-flex items-center gap-1.5 font-sans text-xs font-bold text-[#123D2B] hover:text-[#C5A15B] transition-colors"
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

      {/* F. INSTITUTIONAL RELIABILITY / WHY CHOOSE US (Deep Forest Green) */}
      <section className="w-full py-24 bg-[#0B281D] text-white relative overflow-hidden border-b-2 border-[#C5A15B]/30">
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 z-10">
          <div className="max-w-2xl mb-16">
            <div className="inline-flex items-center gap-3 mb-3">
              <span className="font-mono text-[#C5A15B] font-bold text-base">03</span>
              <span className="w-8 h-0.5 bg-[#C5A15B]" />
              <span className="font-sans text-xs uppercase tracking-[0.24em] text-[#FDE047] font-extrabold">
                INSTITUTIONAL RELIABILITY
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white leading-tight">
              Engineered for international risk mitigation &amp; <span className="text-[#FDE047] italic font-normal">velocity</span>
            </h2>
          </div>

          {/* 4 Columns separated by Antique Gold Dividers */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 lg:divide-x divide-[#C5A15B]/30">
            {/* Feature 1 */}
            <div className="pt-8 pb-8 md:pt-0 lg:pr-8 flex flex-col justify-between group">
              <div>
                <div className="w-14 h-14 rounded-2xl border-2 border-[#C5A15B] flex items-center justify-center text-[#FDE047] mb-6 bg-[#123D2B] shadow-[0_0_20px_rgba(197,161,91,0.25)] transition-transform duration-300 group-hover:scale-110">
                  <span className="material-symbols-outlined text-[28px]">verified</span>
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:text-[#FDE047] transition-colors">Quality Assured</h3>
                <p className="font-sans text-xs sm:text-sm text-[#E7EDE6]/75 leading-relaxed mb-4">
                  Lab-tested lots with comprehensive batch certificates. Third-party testing via SGS or Bureau Veritas readily facilitated upon request.
                </p>
              </div>
              <span className="font-mono text-xs text-[#FDE047] font-bold block mt-2 tracking-wide">
                Purity: 99.5% min
              </span>
            </div>

            {/* Feature 2 */}
            <div className="pt-8 pb-8 md:pt-0 lg:px-8 flex flex-col justify-between group">
              <div>
                <div className="w-14 h-14 rounded-2xl border-2 border-[#C5A15B] flex items-center justify-center text-[#FDE047] mb-6 bg-[#123D2B] shadow-[0_0_20px_rgba(197,161,91,0.25)] transition-transform duration-300 group-hover:scale-110">
                  <span className="material-symbols-outlined text-[28px]">directions_boat</span>
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:text-[#FDE047] transition-colors">On-time Shipping</h3>
                <p className="font-sans text-xs sm:text-sm text-[#E7EDE6]/75 leading-relaxed mb-4">
                  Planned direct dispatch from Visakhapatnam &amp; Chennai deep-water berths, maintaining strict sailing schedules with global carrier alliances.
                </p>
              </div>
              <span className="font-mono text-xs text-[#FDE047] font-bold block mt-2 tracking-wide">
                Avg Transit: 14-28 Days
              </span>
            </div>

            {/* Feature 3 */}
            <div className="pt-8 pb-8 md:pt-8 lg:pt-0 lg:px-8 flex flex-col justify-between group">
              <div>
                <div className="w-14 h-14 rounded-2xl border-2 border-[#C5A15B] flex items-center justify-center text-[#FDE047] mb-6 bg-[#123D2B] shadow-[0_0_20px_rgba(197,161,91,0.25)] transition-transform duration-300 group-hover:scale-110">
                  <span className="material-symbols-outlined text-[28px]">inventory_2</span>
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:text-[#FDE047] transition-colors">Custom Packing</h3>
                <p className="font-sans text-xs sm:text-sm text-[#E7EDE6]/75 leading-relaxed mb-4">
                  Private label configurations, moisture-barrier vacuum pouches, food-grade polypropylene, and heavy-duty 25/50kg export sacks.
                </p>
              </div>
              <span className="font-mono text-xs text-[#FDE047] font-bold block mt-2 tracking-wide">
                Palletized / Break-bulk
              </span>
            </div>

            {/* Feature 4 */}
            <div className="pt-8 pb-8 md:pt-8 lg:pt-0 lg:pl-8 flex flex-col justify-between group">
              <div>
                <div className="w-14 h-14 rounded-2xl border-2 border-[#C5A15B] flex items-center justify-center text-[#FDE047] mb-6 bg-[#123D2B] shadow-[0_0_20px_rgba(197,161,91,0.25)] transition-transform duration-300 group-hover:scale-110">
                  <span className="material-symbols-outlined text-[28px]">contract</span>
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:text-[#FDE047] transition-colors">Export Documentation</h3>
                <p className="font-sans text-xs sm:text-sm text-[#E7EDE6]/75 leading-relaxed mb-4">
                  Flawless commercial documentation: Ocean Bill of Lading, Phytosanitary, Certificate of Origin, Form A, and Letter of Credit compliant files.
                </p>
              </div>
              <span className="font-mono text-xs text-[#FDE047] font-bold block mt-2 tracking-wide">
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

          {/* Interactive Category Bar (Gleaming 916 KDM Gold Accents) */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3.5 mb-10 p-2.5 rounded-2xl bg-[#E6DEC8] border-2 border-[#E5B80B]/40 shadow-inner">
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
                className={`group flex items-center gap-2 px-4 sm:px-5 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all duration-300 shadow-sm border-2 ${
                  idx === 0
                    ? "bg-[#004f22] text-white border-[#E5B80B] shadow-[0_4px_20px_rgba(229,184,11,0.4)] scale-[1.03]"
                    : "bg-white text-on-surface border-[#D8CEBC] hover:bg-[#004f22] hover:text-white hover:border-[#E5B80B] hover:shadow-[0_4px_18px_rgba(229,184,11,0.35)] hover:scale-[1.03]"
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`font-data-mono text-[11px] px-2 py-0.5 rounded-full transition-all font-black shadow-xs ${
                    idx === 0
                      ? "bg-gradient-to-r from-[#FFE873] via-[#E5B80B] to-[#C59318] text-[#0A1E13]"
                      : "bg-[#F3EDE0] text-on-surface-variant group-hover:bg-gradient-to-r group-hover:from-[#FFE873] group-hover:via-[#E5B80B] group-hover:to-[#C59318] group-hover:text-[#0A1E13]"
                  }`}
                >
                  {cat.count}
                </span>
                <span className="material-symbols-outlined text-[17px] text-[#E5B80B] transition-transform duration-300 group-hover:translate-x-1.5 font-bold">
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

      {/* F. GLOBAL MARITIME TRADE ROUTES ANIMATION */}
      <WorldTradeRoutes />

      {/* G. TRADE INSIGHTS & REGULATORY ADVISORIES */}
      <section className="w-full py-24 bg-[#ECE6D8] text-[#1A241F] border-b border-[#DDD4BF]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-3 mb-3">
                <span className="font-mono text-[#C5A15B] font-bold text-base">05</span>
                <span className="w-8 h-0.5 bg-[#C5A15B]" />
                <span className="font-sans text-xs uppercase tracking-[0.24em] text-[#C5A15B] font-extrabold">
                  EXPORT INTELLIGENCE
                </span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1A241F]">
                Maritime Trade Insights &amp; Market Updates
              </h2>
            </div>
            <Link
              className="inline-flex items-center gap-2 font-sans text-xs sm:text-sm font-bold text-[#123D2B] hover:text-[#C5A15B] transition-colors"
              href="/blog"
            >
              <span>View all market articles</span>
              <span className="material-symbols-outlined text-[17px]">arrow_forward</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Article 1 */}
            <article className="bg-[#F7F4EB] rounded-2xl border-2 border-[#C5A15B]/30 hover:border-[#C5A15B] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-[#E8E4D7]">
                  <img
                    src="/images/banner_port_cranes.jpg"
                    alt="Container ship at deepwater port"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-[#123D2B] text-white text-[10px] font-mono uppercase px-2.5 py-1 rounded font-bold border border-[#C5A15B]/40">
                    INCOTERMS 2020
                  </span>
                </div>
                <div className="p-6">
                  <span className="font-mono text-[11px] text-[#C5A15B] block mb-2 font-bold">08 OCT 2026 · 6 MIN READ</span>
                  <h3 className="font-display text-lg font-bold text-[#1A241F] mb-3 group-hover:text-[#123D2B] transition-colors leading-snug">
                    Understanding Incoterms: FOB vs CIF for Indian Port Dispatches
                  </h3>
                  <p className="font-sans text-xs text-[#3B4A40] leading-relaxed mb-4">
                    What each term means for risk transfer, marine freight insurance, and buyer liability when shipping from Visakhapatnam.
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6 pt-0">
                <Link
                  href="/blog/export-documentation-guide"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#123D2B] hover:text-[#C5A15B] transition-colors uppercase tracking-wider font-sans"
                >
                  <span>Read Full Article</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </Link>
              </div>
            </article>

            {/* Article 2 */}
            <article className="bg-[#F7F4EB] rounded-2xl border-2 border-[#C5A15B]/30 hover:border-[#C5A15B] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-[#E8E4D7]">
                  <img
                    src="/images/products_banner_spices.jpg"
                    alt="Indian spices in packaging"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-[#123D2B] text-white text-[10px] font-mono uppercase px-2.5 py-1 rounded font-bold border border-[#C5A15B]/40">
                    QUALITY &amp; MOISTURE
                  </span>
                </div>
                <div className="p-6">
                  <span className="font-mono text-[11px] text-[#C5A15B] block mb-2 font-bold">01 OCT 2026 · 5 MIN READ</span>
                  <h3 className="font-display text-lg font-bold text-[#1A241F] mb-3 group-hover:text-[#123D2B] transition-colors leading-snug">
                    Packaging Spices for Long Sea Voyages: Moisture Control
                  </h3>
                  <p className="font-sans text-xs text-[#3B4A40] leading-relaxed mb-4">
                    Engineering hermetic liners, container desiccant poles, and automated nitrogen flushing for zero-caking transits.
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6 pt-0">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#123D2B] hover:text-[#C5A15B] transition-colors uppercase tracking-wider font-sans"
                >
                  <span>Read Full Article</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </Link>
              </div>
            </article>

            {/* Article 3 */}
            <article className="bg-[#F7F4EB] rounded-2xl border-2 border-[#C5A15B]/30 hover:border-[#C5A15B] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-[#E8E4D7]">
                  <img
                    src="/images/about_banner_pulses.jpg"
                    alt="Agricultural grains and commodities"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-[#123D2B] text-white text-[10px] font-mono uppercase px-2.5 py-1 rounded font-bold border border-[#C5A15B]/40">
                    GLOBAL CORRIDORS
                  </span>
                </div>
                <div className="p-6">
                  <span className="font-mono text-[11px] text-[#C5A15B] block mb-2 font-bold">24 SEP 2026 · 7 MIN READ</span>
                  <h3 className="font-display text-lg font-bold text-[#1A241F] mb-3 group-hover:text-[#123D2B] transition-colors leading-snug">
                    Top Export Destinations for Basmati Rice &amp; EU Quotas
                  </h3>
                  <p className="font-sans text-xs text-[#3B4A40] leading-relaxed mb-4">
                    Navigating pesticide residue limits, tricyclazole testing thresholds, and duty tariff exemptions across Western Europe.
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6 pt-0">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#123D2B] hover:text-[#C5A15B] transition-colors uppercase tracking-wider font-sans"
                >
                  <span>Read Full Article</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* H. FINAL B2B TRADE INQUIRY EXPERIENCE */}
      <section className="w-full py-24 bg-[#F7F4EB] border-b border-[#ECE6D8]" id="quick-enquiry">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 rounded-3xl overflow-hidden shadow-2xl border-2 border-[#C5A15B]/40">
            {/* Left: Minimalist Form (7 Cols) */}
            <div className="lg:col-span-7 bg-white p-8 lg:p-14">
              <div className="inline-flex items-center gap-3 mb-3">
                <span className="font-mono text-[#C5A15B] font-bold text-base">06</span>
                <span className="w-8 h-0.5 bg-[#C5A15B]" />
                <span className="font-sans text-xs uppercase tracking-[0.24em] text-[#C5A15B] font-extrabold">
                  COMMERCIAL DESK
                </span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1A241F] mb-3">
                Request an Official Export Quote
              </h2>
              <p className="font-sans text-sm text-[#3B4A40] mb-8 leading-relaxed">
                Direct your procurement queries to our maritime desks for firm FOB / CIF quotation sheets and certified specifications.
              </p>

              {formSubmitted ? (
                <div className="p-6 rounded-2xl bg-[#E7EDE6] border border-[#123D2B]/30 text-[#123D2B] flex flex-col gap-3">
                  <div className="flex items-center gap-2 font-display text-xl font-bold">
                    <span className="material-symbols-outlined text-[24px] text-[#123D2B]">verified</span>
                    <span>Inquiry Registered Successfully</span>
                  </div>
                  <p className="font-sans text-sm text-[#1A241F]">
                    Thank you, <span className="font-bold">{inquiryData.fullName || "Partner"}</span>. Our Visakhapatnam export desk is reviewing your requirements for <span className="font-bold">{inquiryData.commodity || "commodities"}</span>. A formal proforma quotation will be dispatched to <span className="font-bold">{inquiryData.email}</span> within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setFormSubmitted(false)}
                    className="self-start text-xs font-mono text-[#C5A15B] font-bold hover:underline pt-2"
                  >
                    ← Submit another inquiry
                  </button>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleInquirySubmit}>
                  {/* Full Name & Corporate Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col">
                      <label className="font-sans text-xs font-bold uppercase tracking-wider text-[#1A241F] mb-2" htmlFor="home-full-name">
                        Full Name *
                      </label>
                      <input
                        className="w-full bg-[#F7F4EB] px-4 py-3 border border-[#C5A15B]/30 rounded-xl focus:border-[#123D2B] focus:ring-2 focus:ring-[#123D2B]/20 focus:outline-none font-sans text-sm text-[#1A241F] transition-all"
                        id="home-full-name"
                        placeholder="e.g. David Vance"
                        required
                        type="text"
                        value={inquiryData.fullName}
                        onChange={(e) => setInquiryData({ ...inquiryData, fullName: e.target.value })}
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="font-sans text-xs font-bold uppercase tracking-wider text-[#1A241F] mb-2" htmlFor="home-corp-email">
                        Corporate Email *
                      </label>
                      <input
                        className="w-full bg-[#F7F4EB] px-4 py-3 border border-[#C5A15B]/30 rounded-xl focus:border-[#123D2B] focus:ring-2 focus:ring-[#123D2B]/20 focus:outline-none font-sans text-sm text-[#1A241F] transition-all"
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
                    <label className="font-sans text-xs font-bold uppercase tracking-wider text-[#1A241F] mb-2" htmlFor="home-commodity-select">
                      Sourcing Requirement / Commodity *
                    </label>
                    <select
                      className="w-full bg-[#F7F4EB] px-4 py-3 border border-[#C5A15B]/30 rounded-xl focus:border-[#123D2B] focus:ring-2 focus:ring-[#123D2B]/20 focus:outline-none font-sans text-sm text-[#1A241F] transition-all"
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
                      <option value="W180 - W320 Cashew Kernels">W180 - W320 Cashew Kernels</option>
                      <option value="Other Agro Bulk">Other Agro Bulk / Custom Specification</option>
                    </select>
                  </div>
                  {/* Destination Port & Volume */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col">
                      <label className="font-sans text-xs font-bold uppercase tracking-wider text-[#1A241F] mb-2" htmlFor="home-dest-port">
                        Destination Port &amp; Country *
                      </label>
                      <input
                        className="w-full bg-[#F7F4EB] px-4 py-3 border border-[#C5A15B]/30 rounded-xl focus:border-[#123D2B] focus:ring-2 focus:ring-[#123D2B]/20 focus:outline-none font-sans text-sm text-[#1A241F] transition-all"
                        id="home-dest-port"
                        placeholder="e.g. Jebel Ali, UAE or Rotterdam, NL"
                        required
                        type="text"
                        value={inquiryData.destinationPort}
                        onChange={(e) => setInquiryData({ ...inquiryData, destinationPort: e.target.value })}
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="font-sans text-xs font-bold uppercase tracking-wider text-[#1A241F] mb-2" htmlFor="home-order-quantity">
                        Target Quantity (MT or TEU) *
                      </label>
                      <input
                        className="w-full bg-[#F7F4EB] px-4 py-3 border border-[#C5A15B]/30 rounded-xl focus:border-[#123D2B] focus:ring-2 focus:ring-[#123D2B]/20 focus:outline-none font-sans text-sm text-[#1A241F] transition-all"
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
                      className="inline-flex items-center gap-3 bg-gradient-to-r from-[#FDE047] via-[#E5B80B] to-[#C5A15B] text-[#0B281D] font-sans text-sm font-bold uppercase tracking-wider px-8 py-3.5 rounded-xl hover:scale-105 transition-all duration-300 shadow-[0_4px_16px_rgba(229,184,11,0.35)] w-full sm:w-auto justify-center border border-[#FFF089]"
                      type="submit"
                    >
                      <span>Send Official Enquiry</span>
                      <span className="material-symbols-outlined text-[17px] font-bold">arrow_forward</span>
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Right: Forest Green Desk Assistance (5 Cols) */}
            <div className="lg:col-span-5 bg-[#0B281D] text-white p-8 lg:p-14 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-[#C5A15B]/30">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#123D2B] text-[#FDE047] flex items-center justify-center border border-[#C5A15B]/40 mb-6 shadow-sm">
                  <span className="material-symbols-outlined text-[24px]">support_agent</span>
                </div>
                <span className="font-sans text-xs font-bold uppercase tracking-[0.24em] text-[#C5A15B] block mb-2">
                  EXPRESS COMMERCE
                </span>
                <h3 className="font-display text-2xl font-bold text-white mb-4">
                  Direct Port Desk Assistance
                </h3>
                <p className="font-sans text-sm text-[#E7EDE6]/80 mb-8 leading-relaxed">
                  Require urgent spot container pricing, sample lot dispatch, or custom packing analysis? Our maritime trade managers respond directly.
                </p>
                <div className="space-y-4 mb-8">
                  <a
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#C5A15B] text-[#0B281D] font-sans text-xs font-bold uppercase tracking-wider py-3.5 px-6 rounded-xl hover:bg-[#E5B80B] transition-all shadow-md"
                    href="https://wa.me/919876543210"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span className="material-symbols-outlined text-[18px]">chat</span>
                    <span>Chat on WhatsApp</span>
                  </a>
                  <a
                    className="w-full inline-flex items-center justify-center gap-2 border border-[#C5A15B]/50 text-white font-sans text-xs font-semibold uppercase tracking-wider py-3.5 px-6 rounded-xl hover:bg-white/10 hover:border-[#FDE047] transition-all"
                    href="mailto:export@bharatglobalexports.com"
                  >
                    <span className="material-symbols-outlined text-[18px] text-[#FDE047]">mail</span>
                    <span>Email us directly</span>
                  </a>
                </div>
              </div>
              <div className="pt-6 border-t border-[#C5A15B]/25">
                <div className="flex items-center gap-2 font-mono text-xs text-[#FDE047] mb-1">
                  <span className="w-2 h-2 rounded-full bg-[#86D7A9] inline-block animate-pulse" />
                  <span>SLA GUARANTEE</span>
                </div>
                <p className="font-sans text-xs text-[#E7EDE6]/70 leading-relaxed">
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
