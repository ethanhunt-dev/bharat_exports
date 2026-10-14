"use client";

import React from "react";
import Link from "next/link";
import { useQuoteModal } from "@/context/QuoteModalContext";
import PageBanner from "@/components/PageBanner";

export default function AboutUsPage() {
  const { openQuoteModal } = useQuoteModal();

  return (
    <div className="flex flex-col w-full">
      {/* 1. Cinematic Luxury Page Banner */}
      <PageBanner
        title="About Us"
        eyebrow="BHARAT GLOBAL EXPORTS · COMPANY PROFILE"
        breadcrumbCurrent="About Us"
        bgImage="/images/about_banner_pulses.jpg"
        description="Institutional scale, multi-generational agrarian knowledge, and coastal port readiness under a single trade authority."
        metaBadge={{
          label: "PORT GATEWAY",
          value: "INVTZ1 · VISAKHAPATNAM",
        }}
      />

      {/* 2. Company Profile (Asymmetric Editorial Layout) */}
      <section className="w-full bg-surface py-20 lg:py-28 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Storytelling (7 cols) */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-eyebrow-bold text-eyebrow-bold text-secondary uppercase tracking-[0.2em]">
                  01 — HERITAGE &amp; PROFILE
                </span>
                <div className="w-12 h-px bg-secondary/40" />
              </div>
              <h2 className="font-display-md text-display-md text-on-surface mb-8 leading-[1.15]">
                Rooted in Andhra Pradesh, Trusted Across 40 Nations.
              </h2>
              <div className="space-y-6 text-on-surface-variant font-body-lg text-body-lg">
                <p className="first-letter:text-5xl first-letter:font-headline-lg first-letter:text-primary first-letter:float-left first-letter:mr-3 first-letter:leading-none">
                  Founded in 2008, we export spices, grains, textiles and dry fruits with an uncompromising focus on quality, transparency, and buyer trust. Situated strategically adjacent to Visakhapatnam Port on the Bay of Bengal, we provide international buyers with a seamless supply chain directly from Indian farmlands to foreign harbors.
                </p>
                <p className="font-body-md text-body-md text-on-surface-variant/90 leading-relaxed">
                  Our maritime facility operates on stringent inward-sampling protocols, automated sortex cleaning units, and dedicated moisture-controlled warehouse chambers. By eliminating intermediaries, SVMR guarantees lot-level phytosanitary integrity, direct farm provenance, and synchronized trans-oceanic vessel schedules.
                </p>
              </div>
              {/* Commodity Verification Manifest Strip */}
              <div className="mt-10 grid grid-cols-3 gap-4 p-5 bg-surface-container rounded-sm">
                <div>
                  <span className="block font-eyebrow-bold text-eyebrow-bold uppercase tracking-wider text-secondary mb-1">
                    Port Gateway
                  </span>
                  <span className="font-data-mono text-data-mono text-on-surface font-semibold">
                    INVTZ1 (Bay of Bengal)
                  </span>
                </div>
                <div>
                  <span className="block font-eyebrow-bold text-eyebrow-bold uppercase tracking-wider text-secondary mb-1">
                    Direct Farmland Hubs
                  </span>
                  <span className="font-data-mono text-data-mono text-on-surface font-semibold">
                    Guntur, Krishna, Godavari
                  </span>
                </div>
                <div>
                  <span className="block font-eyebrow-bold text-eyebrow-bold uppercase tracking-wider text-secondary mb-1">
                    Clearing Time
                  </span>
                  <span className="font-data-mono text-data-mono text-on-surface font-semibold">
                    &lt; 36 Hours to Berth
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Visual Offset Picture Frame (5 cols) */}
            <div className="lg:col-span-5 relative mt-6 lg:mt-0">
              <div className="absolute -top-4 -right-4 w-full h-full bg-secondary-fixed/30 rounded-sm -z-0" />
              <div className="relative z-10 bg-surface-container-low p-3 shadow-md rounded-sm">
                <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
                  <img
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    alt="Export house team conducting grain and spice grading inspection"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4TP2ueh4Q8ON6gsun4xP_-vEorJk3ByUPUwyGdYy00sQD8ixxId66vSz9FL0ro3e2o72Z6us0MRlvWanRaIVUDxQSFYhiIGDiubowKBUmmzMs6OdZDvuqkf1RjFHXTD_b0LlCYP9mg4D8GHfn-MnbUSOLNKPUm5gIBoDz-SYOvKfDd8GGzbe9aFAmV6csPQmnlU7pdZVZvylhkNVzzJpeHbnhSH7z7j3CdqnlgiCG5HP3ggSI_Muj"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-on-primary-fixed/80 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 p-4 bg-surface-bright/95 backdrop-blur-md rounded-sm">
                    <div className="flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="font-eyebrow-bold text-eyebrow-bold uppercase tracking-widest text-secondary">
                          Grading &amp; Lot Inspection
                        </span>
                        <span className="font-data-mono text-data-mono text-on-surface">
                          Central Dock Terminal · Andhra Pradesh
                        </span>
                      </div>
                      <span className="material-symbols-outlined text-primary text-[28px]">
                        verified
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between px-2 text-on-surface-variant font-data-mono text-data-mono">
                <span>REGISTERED MANIFEST 08-2026</span>
                <span className="text-secondary font-semibold">100% SORTEX VERIFIED</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Company History (Horizontal Timeline) */}
      <section className="w-full bg-surface-container-low py-20 lg:py-28 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <span className="font-eyebrow-bold text-eyebrow-bold text-secondary uppercase tracking-[0.2em] block mb-2">
                02 — CHRONOLOGY
              </span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface">
                Sixteen Years of Proven Ocean Freight
              </h2>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-sm">
              From a regional trade syndicate to an integrated global export corporation.
            </p>
          </div>
          {/* Timeline Rail */}
          <div className="relative w-full">
            <div className="hidden lg:block absolute top-[23px] left-0 right-0 h-0.5 bg-secondary-fixed-dim" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative z-10">
              {/* Event 1: 2008 */}
              <div className="group flex flex-col bg-surface p-6 rounded-sm shadow-sm transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 rounded-full bg-secondary text-surface-bright flex items-center justify-center font-data-mono text-data-mono font-bold shadow-sm ring-4 ring-surface">
                    08
                  </div>
                  <span className="font-display-md text-display-md text-secondary group-hover:text-primary transition-colors">
                    2008
                  </span>
                </div>
                <div className="w-full h-1 bg-secondary-fixed/50 mb-4 rounded-full" />
                <h3 className="font-title-md text-title-md text-on-surface mb-2">Spice Origin Foundation</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Founded as a specialized spice trading firm in Andhra Pradesh, supplying regional domestic markets with single-origin chili and turmeric.
                </p>
                <span className="mt-4 pt-3 font-data-mono text-data-mono text-secondary uppercase tracking-wider block">
                  Guntur Hub Inception
                </span>
              </div>
              {/* Event 2: 2013 */}
              <div className="group flex flex-col bg-surface p-6 rounded-sm shadow-sm transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 rounded-full bg-secondary text-surface-bright flex items-center justify-center font-data-mono text-data-mono font-bold shadow-sm ring-4 ring-surface">
                    13
                  </div>
                  <span className="font-display-md text-display-md text-secondary group-hover:text-primary transition-colors">
                    2013
                  </span>
                </div>
                <div className="w-full h-1 bg-secondary-fixed/50 mb-4 rounded-full" />
                <h3 className="font-title-md text-title-md text-on-surface mb-2">Maritime Grain Expansion</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Started direct rice, grain, and pulses exports to Southeast Asia and the Middle East, acquiring break-bulk maritime logistics handling capabilities.
                </p>
                <span className="mt-4 pt-3 font-data-mono text-data-mono text-secondary uppercase tracking-wider block">
                  ASEAN &amp; GCC Corridors
                </span>
              </div>
              {/* Event 3: 2018 */}
              <div className="group flex flex-col bg-surface p-6 rounded-sm shadow-sm transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 rounded-full bg-secondary text-surface-bright flex items-center justify-center font-data-mono text-data-mono font-bold shadow-sm ring-4 ring-surface">
                    18
                  </div>
                  <span className="font-display-md text-display-md text-secondary group-hover:text-primary transition-colors">
                    2018
                  </span>
                </div>
                <div className="w-full h-1 bg-secondary-fixed/50 mb-4 rounded-full" />
                <h3 className="font-title-md text-title-md text-on-surface mb-2">Modern Sorting Terminal</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Commissioned our modern 40,000 sq.ft packing, grading, and warehousing unit near Visakhapatnam, integrating optical color sortex technology.
                </p>
                <span className="mt-4 pt-3 font-data-mono text-data-mono text-secondary uppercase tracking-wider block">
                  Portside Clean Facility
                </span>
              </div>
              {/* Event 4: 2024 */}
              <div className="group flex flex-col bg-surface p-6 rounded-sm shadow-sm transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 rounded-full bg-primary text-secondary-fixed flex items-center justify-center font-data-mono text-data-mono font-bold shadow-sm ring-4 ring-surface">
                    24
                  </div>
                  <span className="font-display-md text-display-md text-primary group-hover:text-secondary transition-colors">
                    2024+
                  </span>
                </div>
                <div className="w-full h-1 bg-primary/40 mb-4 rounded-full" />
                <h3 className="font-title-md text-title-md text-on-surface mb-2">40+ Destination Global Reach</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Expanded product footprint into premium combed textiles, dry fruits, and established export channels in 40+ countries across Europe and the Americas.
                </p>
                <span className="mt-4 pt-3 font-data-mono text-data-mono text-primary font-semibold uppercase tracking-wider block">
                  Transcontinental Fleet
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Vision and Mission */}
      <section className="w-full bg-surface-container py-20 lg:py-28 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-eyebrow-bold text-eyebrow-bold text-secondary uppercase tracking-[0.2em] block mb-2">
              03 — INSTITUTIONAL MANDATE
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">
              The Standard of Indian Maritime Trade
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Vision Card */}
            <div className="relative bg-surface p-8 lg:p-12 rounded-sm shadow-sm overflow-hidden flex flex-col justify-between">
              <span className="font-display-lg select-none text-secondary-fixed/40 absolute -top-8 -right-2 text-[140px] leading-none pointer-events-none">
                “
              </span>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-8 h-8 rounded bg-primary text-secondary-fixed flex items-center justify-center">
                    <span className="material-symbols-outlined text-[18px]">visibility</span>
                  </span>
                  <span className="font-eyebrow-bold text-eyebrow-bold text-secondary uppercase tracking-[0.2em]">
                    OUR VISION
                  </span>
                </div>
                <p className="font-display-sm text-headline-sm text-on-surface leading-snug mb-8">
                  To be the most reliable, quality-driven Indian export partner for global food and textile buyers, celebrated for uncompromising integrity and consistency.
                </p>
              </div>
              <div className="relative z-10 pt-6 bg-surface-container-low p-4 rounded-sm">
                <span className="font-eyebrow-bold text-eyebrow-bold uppercase text-on-surface-variant block mb-1">
                  STRATEGIC GOAL
                </span>
                <span className="font-body-sm text-body-sm text-on-surface">
                  Zero-defect phytosanitary certification across 100% of outgoing maritime shipments.
                </span>
              </div>
            </div>
            {/* Mission Card */}
            <div className="relative bg-surface p-8 lg:p-12 rounded-sm shadow-sm overflow-hidden flex flex-col justify-between">
              <span className="font-display-lg select-none text-secondary-fixed/40 absolute -top-8 -right-2 text-[140px] leading-none pointer-events-none">
                ”
              </span>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-8 h-8 rounded bg-secondary text-surface-bright flex items-center justify-center">
                    <span className="material-symbols-outlined text-[18px]">anchor</span>
                  </span>
                  <span className="font-eyebrow-bold text-eyebrow-bold text-secondary uppercase tracking-[0.2em]">
                    OUR MISSION
                  </span>
                </div>
                <p className="font-display-sm text-headline-sm text-on-surface leading-snug mb-8">
                  Deliver consistent export-grade quality, competitive fair pricing, and transparent, delay-free logistics on every container shipped from Indian ports.
                </p>
              </div>
              <div className="relative z-10 pt-6 bg-surface-container-low p-4 rounded-sm">
                <span className="font-eyebrow-bold text-eyebrow-bold uppercase text-on-surface-variant block mb-1">
                  OPERATIONAL PLEDGE
                </span>
                <span className="font-body-sm text-body-sm text-on-surface">
                  Guaranteed forward contract pricing with live berth and sea route container tracking.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Global Export Footprint (Dark Green Band) */}
      <section className="w-full bg-on-primary-fixed text-surface-bright py-20 lg:py-28 relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col items-center text-center mb-16">
            <span className="font-eyebrow-bold text-eyebrow-bold uppercase tracking-[0.25em] text-secondary-fixed block mb-3">
              04 — GLOBAL NETWORK
            </span>
            <h2 className="font-display-md text-display-md text-surface-bright mb-4">
              Export Capacity in Numbers
            </h2>
            <p className="font-body-md text-body-md text-surface-bright/80 max-w-xl">
              Sustaining continuous bulk supply lines through major international sea corridors.
            </p>
          </div>
          {/* 4 Stat Counters Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-8 rounded-sm bg-surface-bright/5 backdrop-blur-sm flex flex-col justify-between">
              <div>
                <span className="font-display-lg text-display-lg text-secondary-fixed block mb-2">40+</span>
                <span className="font-headline-sm text-headline-sm text-surface-bright block mb-2">Destinations</span>
              </div>
              <p className="font-body-sm text-body-sm text-surface-bright/70 leading-relaxed">
                Countries served across Europe, Middle East, Africa &amp; the Americas with port-to-port tracking.
              </p>
            </div>
            <div className="p-8 rounded-sm bg-surface-bright/5 backdrop-blur-sm flex flex-col justify-between">
              <div>
                <span className="font-display-lg text-display-lg text-secondary-fixed block mb-2">120+</span>
                <span className="font-headline-sm text-headline-sm text-surface-bright block mb-2">Institutional Buyers</span>
              </div>
              <p className="font-body-sm text-body-sm text-surface-bright/70 leading-relaxed">
                Active industrial food processors, packaging houses, and international retail brand chains.
              </p>
            </div>
            <div className="p-8 rounded-sm bg-surface-bright/5 backdrop-blur-sm flex flex-col justify-between">
              <div>
                <span className="font-display-lg text-display-lg text-secondary-fixed block mb-2">15</span>
                <span className="font-headline-sm text-headline-sm text-surface-bright block mb-2">Product Lines</span>
              </div>
              <p className="font-body-sm text-body-sm text-surface-bright/70 leading-relaxed">
                Distinct certified export categories spanning Basmati, whole spices, pulses, cashews, and combed cotton.
              </p>
            </div>
            <div className="p-8 rounded-sm bg-surface-bright/5 backdrop-blur-sm flex flex-col justify-between">
              <div>
                <span className="font-display-lg text-display-lg text-secondary-fixed block mb-2">ISO 9001</span>
                <span className="font-headline-sm text-headline-sm text-surface-bright block mb-2">Certified Rigor</span>
              </div>
              <p className="font-body-sm text-body-sm text-surface-bright/70 leading-relaxed">
                Quality management accredited by APEDA, Spices Board of India, FSSAI, and global food authorities.
              </p>
            </div>
          </div>
          {/* Live Corridor Notification Ticker */}
          <div className="mt-12 p-4 rounded-sm bg-surface-bright/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-data-mono text-data-mono text-surface-bright/90">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-secondary-fixed animate-ping" />
              <span className="uppercase font-semibold">Active Port Corridor: Visakhapatnam to Jebel Ali (UAE)</span>
            </div>
            <div className="flex items-center gap-4 text-secondary-fixed">
              <span>Transit: 9-11 Days</span>
              <span>•</span>
              <span>Direct Ocean Route</span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Statutory Accreditations */}
      <section className="w-full bg-surface py-20 lg:py-28 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
            <div>
              <span className="font-eyebrow-bold text-eyebrow-bold text-secondary uppercase tracking-[0.2em] block mb-2">
                05 — COMPLIANCE REGISTER
              </span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface">
                Statutory Accreditations &amp; Global Standards
              </h2>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
              Full adherence to international phytosanitary, pesticide residue, and fair-labor protocols recognized by customs authorities worldwide.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {/* APEDA */}
            <div className="bg-surface-container-low p-6 rounded-sm shadow-sm flex flex-col items-start justify-between group hover:bg-surface-container transition-colors">
              <div className="w-14 h-14 rounded-full bg-secondary/10 text-secondary flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-[32px]">verified_user</span>
              </div>
              <div>
                <span className="font-eyebrow-bold text-eyebrow-bold text-secondary uppercase tracking-widest block mb-1">
                  GOVERNMENT OF INDIA
                </span>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">APEDA Registered</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Agricultural and Processed Food Products Export Development Authority registration for cereals, grains, and dry fruits.
                </p>
              </div>
            </div>

            {/* Spices Board */}
            <div className="bg-surface-container-low p-6 rounded-sm shadow-sm flex flex-col items-start justify-between group hover:bg-surface-container transition-colors">
              <div className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-[32px]">spa</span>
              </div>
              <div>
                <span className="font-eyebrow-bold text-eyebrow-bold text-secondary uppercase tracking-widest block mb-1">
                  MINISTRY OF COMMERCE
                </span>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">Spices Board Recognized</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Certified exporter of black pepper, turmeric, chilli, ginger, and cardamom meeting ASTA and ESA norms.
                </p>
              </div>
            </div>

            {/* ISO 9001 */}
            <div className="bg-surface-container-low p-6 rounded-sm shadow-sm flex flex-col items-start justify-between group hover:bg-surface-container transition-colors">
              <div className="w-14 h-14 rounded-full bg-secondary/10 text-secondary flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-[32px]">military_tech</span>
              </div>
              <div>
                <span className="font-eyebrow-bold text-eyebrow-bold text-secondary uppercase tracking-widest block mb-1">
                  QUALITY MANAGEMENT
                </span>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">ISO 9001:2015</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Audited quality management system covering sourcing, cleanroom processing, packaging, and logistics.
                </p>
              </div>
            </div>

            {/* US-FDA & Halal */}
            <div className="bg-surface-container-low p-6 rounded-sm shadow-sm flex flex-col items-start justify-between group hover:bg-surface-container transition-colors">
              <div className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-[32px]">security</span>
              </div>
              <div>
                <span className="font-eyebrow-bold text-eyebrow-bold text-secondary uppercase tracking-widest block mb-1">
                  GLOBAL SANITARY
                </span>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">US-FDA &amp; Halal</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Food facility registration and religious dietary compliance certificates for exports to North America and GCC nations.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom CTA Box */}
          <div className="bg-surface-container p-8 lg:p-12 rounded-sm border border-secondary/30 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center sm:text-left">
              <h3 className="font-headline-sm text-headline-sm text-on-surface">
                Ready to review our institutional compliance pack?
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Request phytosanitary records, lab certificates, and company incorporation files directly.
              </p>
            </div>
            <button
              type="button"
              onClick={() => openQuoteModal()}
              className="bg-secondary text-surface-bright font-label-md text-label-md px-8 py-3 rounded hover:bg-on-secondary-fixed-variant transition-colors shadow-sm shrink-0"
            >
              Contact Export Desk
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
