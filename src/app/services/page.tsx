"use client";

import React from "react";
import Link from "next/link";
import { useQuoteModal } from "@/context/QuoteModalContext";

export default function ServicesPage() {
  const { openQuoteModal } = useQuoteModal();

  return (
    <div className="flex flex-col w-full">
      {/* 1. Inner Page Banner (Deep Forest Contrast Well) */}
      <section className="relative bg-on-primary-fixed text-surface-bright py-20 lg:py-24 overflow-hidden">
        {/* Subtle Background Navigational Arcs (Maritime SVG) */}
        <div className="absolute inset-0 pointer-events-none opacity-10 flex items-center justify-end pr-12">
          <svg className="text-secondary-fixed" fill="none" height="640" viewBox="0 0 640 640" width="640">
            <circle cx="320" cy="320" r="300" stroke="currentColor" strokeDasharray="6 6" strokeWidth="1" />
            <circle cx="320" cy="320" r="220" stroke="currentColor" strokeWidth="1" />
            <circle cx="320" cy="320" r="140" stroke="currentColor" strokeDasharray="3 3" strokeWidth="1" />
            <line stroke="currentColor" strokeWidth="1" x1="20" x2="620" y1="320" y2="320" />
            <line stroke="currentColor" strokeWidth="1" x1="320" x2="320" y1="20" y2="620" />
          </svg>
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 mb-4 font-data-mono text-data-mono uppercase tracking-widest text-secondary-container">
              <Link className="hover:text-surface-bright transition-colors" href="/">
                Home
              </Link>
              <span className="text-secondary/60">/</span>
              <span className="text-surface-bright">Export Services</span>
            </nav>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-px bg-secondary-container" />
              <span className="font-eyebrow-bold text-eyebrow-bold uppercase tracking-[0.25em] text-secondary-fixed">
                Institutional Capabilities
              </span>
            </div>
            <h1 className="font-display-lg text-display-lg tracking-tight text-surface-bright uppercase">
              Export Services
            </h1>
          </div>
          {/* Manifest & Port Meta Box */}
          <div className="bg-surface-container-highest/10 backdrop-blur-sm p-5 rounded-lg max-w-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="font-eyebrow-bold text-eyebrow-bold text-secondary-container uppercase">
                Operational Hub
              </span>
              <span className="font-data-mono text-data-mono text-primary-fixed">VPA Corridor • Active</span>
            </div>
            <p className="font-body-sm text-body-sm text-surface-bright/80">
              Integrated farm-to-berth export solutions compliant with US-FDA, EU phytosanitary norms, and Codex Alimentarius.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Alternating Zig-Zag Editorial Service Rows */}
      <section className="py-20 lg:py-28 space-y-24 lg:space-y-32 bg-surface">
        {/* Row 01: Sourcing & QC */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Visual (Col 1-6) */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-lg overflow-hidden shadow-xl bg-surface-container">
                <img
                  className="w-full aspect-[4/3] object-cover"
                  alt="Quality control inspection of whole spices and grains"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAg0WxHGAY99NBlaXyBWG5QjVUT8E18DiuZ9LARalxO0gech8dRP2QAwcNgmUZhteSV0isWj6c45Eh-ZDynjIOFaOLxj3YfyeeSHUvXll2O7JflZGrW7NmH89LMYYnBJLYsdX2q0lWP6C7amDbrSf9rgcQyr9MS17ulwg398g4ku7ZukQLTVyHaieIgTSt7E3EkQIbrMnbE404MscXHsv-g4nfCKMsIMQSWp5Y4trYut4hD6Mg939dq"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-on-primary-fixed/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-surface-bright">
                  <span className="font-data-mono text-data-mono bg-on-primary-fixed/80 px-3 py-1 rounded">
                    QC Station • Lab Lot SV-894
                  </span>
                  <span className="font-eyebrow-bold text-eyebrow-bold text-secondary-fixed uppercase tracking-wider">
                    APEDA Standard Compliant
                  </span>
                </div>
              </div>
              <div className="hidden sm:flex absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-surface-container-low shadow-md items-center justify-center p-2 text-center">
                <div className="w-full h-full rounded-full bg-secondary-fixed/20 flex flex-col items-center justify-center text-secondary">
                  <span className="material-symbols-outlined text-[20px]">verified</span>
                  <span className="font-eyebrow-bold text-[9px] uppercase tracking-tighter">Certified</span>
                </div>
              </div>
            </div>
            {/* Content (Col 7-12) */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-2">
                <span className="font-display-lg text-display-lg leading-none text-secondary font-bold select-none">
                  01
                </span>
                <div className="flex flex-col">
                  <span className="font-eyebrow-bold text-eyebrow-bold uppercase tracking-[0.25em] text-secondary">
                    ORIGIN TO PORT
                  </span>
                  <span className="w-12 h-0.5 bg-secondary/40 mt-1" />
                </div>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-6">
                Export Sourcing &amp; Quality Inspection
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 leading-relaxed">
                We source graded produce directly from trusted regional farms, agricultural cooperatives, and modernized textile mills across South India. Every incoming batch undergoes strict organoleptic and laboratory testing before aggregation.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded bg-secondary/15 flex items-center justify-center text-secondary shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-[16px]">check</span>
                  </div>
                  <span className="font-body-md text-body-md text-on-surface">
                    Batch-wise moisture, purity, and aflatoxin lab certificates
                  </span>
                </li>
                <li className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded bg-secondary/15 flex items-center justify-center text-secondary shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-[16px]">check</span>
                  </div>
                  <span className="font-body-md text-body-md text-on-surface">
                    Traceability records from farm gate to Visakhapatnam export warehouse
                  </span>
                </li>
                <li className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded bg-secondary/15 flex items-center justify-center text-secondary shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-[16px]">check</span>
                  </div>
                  <span className="font-body-md text-body-md text-on-surface">
                    Third-party inspection coordination (SGS, Intertek, Bureau Veritas)
                  </span>
                </li>
              </ul>
              <div className="flex flex-wrap items-center gap-2 pt-2">
                <span className="px-3 py-1 rounded bg-surface-container-high font-data-mono text-data-mono text-on-surface">
                  Moisture: ≤ 10-12%
                </span>
                <span className="px-3 py-1 rounded bg-surface-container-high font-data-mono text-data-mono text-on-surface">
                  Purity: 99.5% Min
                </span>
                <span className="px-3 py-1 rounded bg-surface-container-high font-data-mono text-data-mono text-on-surface">
                  Sortex: Double Cleaned
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Row 02: Packaging & Private Labelling (Inverted Layout) */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Content (Col 1-6 on Desktop) */}
            <div className="lg:col-span-6 flex flex-col justify-center order-2 lg:order-1">
              <div className="flex items-center gap-4 mb-2">
                <span className="font-display-lg text-display-lg leading-none text-secondary font-bold select-none">
                  02
                </span>
                <div className="flex flex-col">
                  <span className="font-eyebrow-bold text-eyebrow-bold uppercase tracking-[0.25em] text-secondary">
                    PACKAGING STANDARDS
                  </span>
                  <span className="w-12 h-0.5 bg-secondary/40 mt-1" />
                </div>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-6">
                Custom Packing &amp; Private Labelling
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 leading-relaxed">
                Bulk, retail, and private label packing engineered to protect cargo during harsh marine voyages and comply with destination market import regulations.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded bg-secondary/15 flex items-center justify-center text-secondary shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-[16px]">check</span>
                  </div>
                  <span className="font-body-md text-body-md text-on-surface">
                    Multi-wall Kraft paper bags, food-grade PP woven bags, and vacuum-sealed tins
                  </span>
                </li>
                <li className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded bg-secondary/15 flex items-center justify-center text-secondary shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-[16px]">check</span>
                  </div>
                  <span className="font-body-md text-body-md text-on-surface">
                    High-definition private label artwork printing and barcoding
                  </span>
                </li>
                <li className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded bg-secondary/15 flex items-center justify-center text-secondary shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-[16px]">check</span>
                  </div>
                  <span className="font-body-md text-body-md text-on-surface">
                    Desiccant bags and fumigation certificates for trans-oceanic freshness
                  </span>
                </li>
              </ul>
              <div className="p-4 bg-surface-container-low rounded-lg shadow-sm">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary text-[24px]">inventory_2</span>
                  <div>
                    <span className="font-title-md text-title-md text-on-surface block">Retail &amp; Bulk Readiness</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      From 250g retail pouches up to 1-ton jumbo bags with pallet stretch-wrapping.
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* Visual (Col 7-12) */}
            <div className="lg:col-span-6 relative order-1 lg:order-2">
              <div className="relative rounded-lg overflow-hidden shadow-xl bg-surface-container">
                <img
                  className="w-full aspect-[4/3] object-cover"
                  alt="Industrial packaging facility showing pallets of stacked export bags"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCelBRuAO-8F9Aa4H2vQcAJytjk_kW0v92s4eS2RuW1XBg4AQMD-vK_-1nNhP_Ja4ZuhbKmUuhPqPmCWmTrwaRmiTTkh7FQ8sKykI9RQkPc-yq8LepX1VnYQUotv-6r5vEjmgoED8-l8Wx-dEoT8rCepQw7AhcaVciQPqKADxBy_-218LQ1hth8jlV_tHdDC7r8Cv7eXaITOBPQZkUXNqTaLEouqK0A2xZWPuZGHen4TCE1sNtxE6Gg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-on-primary-fixed/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-surface-bright">
                  <span className="font-data-mono text-data-mono bg-on-primary-fixed/80 px-3 py-1 rounded">
                    Packing Floor #3 • Visakhapatnam
                  </span>
                  <span className="font-eyebrow-bold text-eyebrow-bold text-secondary-fixed uppercase tracking-wider">
                    ISPM 15 Heat-Treated Pallets
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Row 03: Maritime Logistics & Documentation */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Visual (Col 1-6) */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-lg overflow-hidden shadow-xl bg-surface-container">
                <img
                  className="w-full aspect-[4/3] object-cover"
                  alt="Visakhapatnam seaport international container terminal at sunrise"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBW-DP6lqgUDjDSAyRphB9UkZLM34MrmY9sz-3CT3fvrULM_-kuQw0n-5ISqgIwNkTv7iNBIgmuWDFCsacXOQe_T2mErNciy5q1T8lA-3KjYZVRUI_SSYculUaZCMWu7V-q4GtOGM59DucvzulzRFXdasRk9EV2IyMigOenfjXCDESPeTX7fbV_iX4agtH-i_HR98VKnnR5FqVxzgHGvQUif8_Dgve9OWz6zoNeqM-NBF40VVE0IQcu"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-on-primary-fixed/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-surface-bright">
                  <span className="font-data-mono text-data-mono bg-on-primary-fixed/80 px-3 py-1 rounded">
                    VPA Berth 04 • Vessel Loading
                  </span>
                  <span className="font-eyebrow-bold text-eyebrow-bold text-secondary-fixed uppercase tracking-wider">
                    Liner Direct Allocation
                  </span>
                </div>
              </div>
            </div>
            {/* Content (Col 7-12) */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-2">
                <span className="font-display-lg text-display-lg leading-none text-secondary font-bold select-none">
                  03
                </span>
                <div className="flex flex-col">
                  <span className="font-eyebrow-bold text-eyebrow-bold uppercase tracking-[0.25em] text-secondary">
                    GLOBAL SHIPPING
                  </span>
                  <span className="w-12 h-0.5 bg-secondary/40 mt-1" />
                </div>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-6">
                Maritime Logistics &amp; Trade Documentation
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 leading-relaxed">
                Container booking, port handling, customs clearance, and comprehensive export documentation managed end-to-end to ensure zero customs delays at destination ports.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded bg-secondary/15 flex items-center justify-center text-secondary shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-[16px]">check</span>
                  </div>
                  <span className="font-body-md text-body-md text-on-surface">
                    Direct container booking with leading liners (Maersk, MSC, CMA CGM)
                  </span>
                </li>
                <li className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded bg-secondary/15 flex items-center justify-center text-secondary shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-[16px]">check</span>
                  </div>
                  <span className="font-body-md text-body-md text-on-surface">
                    Certificates of Origin, Phytosanitary, Fumigation &amp; Non-GMO documentation
                  </span>
                </li>
                <li className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded bg-secondary/15 flex items-center justify-center text-secondary shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-[16px]">check</span>
                  </div>
                  <span className="font-body-md text-body-md text-on-surface">
                    Real-time container tracking from port departure to discharge
                  </span>
                </li>
              </ul>
              <div className="grid grid-cols-3 gap-2">
                <div className="bg-surface-container-high p-2.5 rounded text-center">
                  <span className="font-eyebrow-bold text-[10px] uppercase text-on-surface-variant block">
                    Bill of Lading
                  </span>
                  <span className="font-data-mono text-data-mono text-primary font-bold">
                    Express Air Courier
                  </span>
                </div>
                <div className="bg-surface-container-high p-2.5 rounded text-center">
                  <span className="font-eyebrow-bold text-[10px] uppercase text-on-surface-variant block">
                    Phyto Inspection
                  </span>
                  <span className="font-data-mono text-data-mono text-primary font-bold">
                    Govt. Certified
                  </span>
                </div>
                <div className="bg-surface-container-high p-2.5 rounded text-center">
                  <span className="font-eyebrow-bold text-[10px] uppercase text-on-surface-variant block">
                    Customs Clearance
                  </span>
                  <span className="font-data-mono text-data-mono text-primary font-bold">
                    EDI System Fast Track
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Four-Step Horizontal Process */}
      <section className="bg-surface-container py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-3 mb-2">
              <span className="w-6 h-px bg-secondary" />
              <span className="font-eyebrow-bold text-eyebrow-bold uppercase tracking-[0.25em] text-secondary">
                SEAMLESS TRADE WORKFLOW
              </span>
              <span className="w-6 h-px bg-secondary" />
            </div>
            <h2 className="font-display-md text-display-md text-on-surface tracking-tight mb-4">
              How We Fulfill International Orders
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              A disciplined, predictable export pipeline designed to de-risk high-volume trans-oceanic commodity procurement.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 01 */}
            <div className="bg-surface-container-lowest p-6 rounded-lg shadow-sm flex flex-col group hover:-translate-y-1 transition-transform">
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded bg-surface-container flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-surface-container-lowest transition-colors shadow-sm">
                  <span className="material-symbols-outlined text-[24px]">request_quote</span>
                </div>
                <span className="font-data-mono text-data-mono text-secondary font-bold">STEP 01</span>
              </div>
              <h3 className="font-title-md text-title-md text-on-surface mb-3">Enquiry &amp; Quotation</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Buyer shares specs, MOQ, target Incoterm (FOB/CIF). We issue proforma invoice with lab parameters.
              </p>
              <div className="mt-4 pt-3 flex items-center gap-1.5 text-secondary font-data-mono text-data-mono text-xs">
                <span className="material-symbols-outlined text-[14px]">schedule</span>
                <span>24h Turnaround</span>
              </div>
            </div>
            {/* Step 02 */}
            <div className="bg-surface-container-lowest p-6 rounded-lg shadow-sm flex flex-col group hover:-translate-y-1 transition-transform">
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded bg-surface-container flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-surface-container-lowest transition-colors shadow-sm">
                  <span className="material-symbols-outlined text-[24px]">biotech</span>
                </div>
                <span className="font-data-mono text-data-mono text-secondary font-bold">STEP 02</span>
              </div>
              <h3 className="font-title-md text-title-md text-on-surface mb-3">Sourcing &amp; QC</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Procurement from certified growers, lot sampling, and pre-shipment laboratory testing.
              </p>
              <div className="mt-4 pt-3 flex items-center gap-1.5 text-secondary font-data-mono text-data-mono text-xs">
                <span className="material-symbols-outlined text-[14px]">science</span>
                <span>SGS / Intertek Witness</span>
              </div>
            </div>
            {/* Step 03 */}
            <div className="bg-surface-container-lowest p-6 rounded-lg shadow-sm flex flex-col group hover:-translate-y-1 transition-transform">
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded bg-surface-container flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-surface-container-lowest transition-colors shadow-sm">
                  <span className="material-symbols-outlined text-[24px]">pallet</span>
                </div>
                <span className="font-data-mono text-data-mono text-secondary font-bold">STEP 03</span>
              </div>
              <h3 className="font-title-md text-title-md text-on-surface mb-3">Packing &amp; Stuffing</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Custom bagging, pallets, and container stuffing at our Visakhapatnam warehouse.
              </p>
              <div className="mt-4 pt-3 flex items-center gap-1.5 text-secondary font-data-mono text-data-mono text-xs">
                <span className="material-symbols-outlined text-[14px]">shield</span>
                <span>Desiccant + Fumigation</span>
              </div>
            </div>
            {/* Step 04 */}
            <div className="bg-surface-container-lowest p-6 rounded-lg shadow-sm flex flex-col group hover:-translate-y-1 transition-transform">
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded bg-surface-container flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-surface-container-lowest transition-colors shadow-sm">
                  <span className="material-symbols-outlined text-[24px]">forward_to_inbox</span>
                </div>
                <span className="font-data-mono text-data-mono text-secondary font-bold">STEP 04</span>
              </div>
              <h3 className="font-title-md text-title-md text-on-surface mb-3">Dispatch &amp; Clearance</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Port customs clearance, bill of lading issuance, and fast courier dispatch of original documents.
              </p>
              <div className="mt-4 pt-3 flex items-center gap-1.5 text-secondary font-data-mono text-data-mono text-xs">
                <span className="material-symbols-outlined text-[14px]">flight_takeoff</span>
                <span>DHL / FedEx Original Docs</span>
              </div>
            </div>
          </div>
          {/* Compliance Markers */}
          <div className="mt-16 pt-8 bg-surface-container-highest/30 rounded-lg p-6 flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary text-[26px]">gavel</span>
              <span className="font-label-md text-label-md text-on-surface">
                ICC Incoterms® 2020 Compliance (FOB • CIF • CFR • EXW)
              </span>
            </div>
            <div className="flex items-center gap-6 font-data-mono text-data-mono text-on-surface-variant text-xs">
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px] text-primary">check_circle</span> LC at Sight
              </span>
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px] text-primary">check_circle</span> Telegraphic Transfer (TT)
              </span>
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px] text-primary">check_circle</span> Escrow Available
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Closing CTA Band */}
      <section className="bg-on-primary-fixed text-surface-bright py-20 lg:py-24 relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <span className="font-eyebrow-bold text-eyebrow-bold uppercase tracking-[0.2em] text-secondary-container block mb-2">
              COMMENCE TRADE CONTRACT
            </span>
            <h2 className="font-display-md text-display-md text-surface-bright mb-3">
              Ready to ship your next container from Visakhapatnam?
            </h2>
            <p className="font-body-md text-body-md text-surface-bright/80 max-w-xl">
              Request proforma pricing, reserve vessel allocation, and verify specification compliance with our export desk.
            </p>
          </div>
          <button
            type="button"
            onClick={() => openQuoteModal()}
            className="bg-secondary text-surface-container-lowest font-label-md text-label-md px-8 py-3.5 rounded hover:bg-on-secondary-fixed-variant transition-colors shadow-lg shrink-0 flex items-center gap-2"
          >
            <span>Request Export Proforma</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </button>
        </div>
      </section>
    </div>
  );
}
