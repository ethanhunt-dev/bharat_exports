"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { useQuoteModal } from "@/context/QuoteModalContext";
import PageBanner from "@/components/PageBanner";
import AnimatedCounter from "@/components/AnimatedCounter";

interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  category: "products" | "warehouse" | "shipping" | "quality";
  badge: string;
  meta: string;
  description: string;
  imgUrl: string;
  alt: string;
  spanClass: string;
  minHeight: string;
  lot?: string;
  extraMeta?: string[];
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "Visakhapatnam Port Container Terminal at Dawn",
    subtitle: "BERTH 04 / EAST COAST WATERWAY",
    category: "shipping",
    badge: "TERMINAL 01 · SEA DISPATCH",
    meta: "GATE-IN: 04:30 IST · APM CRANE LOT 14",
    description: "Heavy-lift dual gantry cranes staging 40ft high-cube temperature-controlled reefers for direct voyages to Jebel Ali, Rotterdam, and Newark.",
    imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDpxJGLbLp5jFDaLPoTWeRdVW0tgSvXrdL5IrgzPqLFCfolQaMQHI8WVHIW7b36PDOy3rBYFdqnX75rb3BeLOpezs3N7bBoNXsWAxO8y4NtKS-np7IwleKE12ayTzIKm7yhpH5XTSn13caIZWp3-NfbOMNMbVSBGQhnfRK_PvpW0pwfenWZ2yMUMbhDrbwiVKe5XvbPRAnyA8VFMs7Rup8ASk-yaeMzFEZm7ppEJZs2H_WGJ9Z3emVP",
    alt: "Visakhapatnam Port Container Terminal at golden dawn with gantry cranes",
    spanClass: "lg:col-span-7 lg:row-span-2",
    minHeight: "min-h-[520px]",
    extraMeta: ["GATE-IN TIME: 04:30 IST", "TERMINAL VELOCITY: 32 MOVES/HR", "APM CRANE LOT 14"],
  },
  {
    id: "g2",
    title: "Turmeric Curcumin & Pesticide Screen",
    subtitle: "SPECTROMETRY & CHROMATOGRAPHY",
    category: "quality",
    badge: "ISO/IEC 17025 LAB",
    meta: "HPLC Lot Screen: 4.8% Curcumin Verified",
    description: "Batch-by-batch HPLC verification ensuring active curcumin concentration holds strictly between 4.8% and 5.2% without detectable pesticide residues.",
    imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAq2G0aEfrE2fMr4IHF8kZ4kICoc-CuINFhjlt2jX2BjmxmPwo7flNVyXqDpaRypP5z1wJt5OoV-KMEaFr3t2RwpCxDemdcQ8Rr5lH-q60l5xn9M1VYCyC0HxASYcJ69CJYRVMIBBheuPzlMjrZAin0013KR3cbTXK15pAHYGgwEnHT2rbabZsWX4SgdixrbxUAwZhXVKlvPEwnKwLAXGyYeI_EaUflLVwdN1xqIYBK_Ai-reLN4F1k",
    alt: "Analytical quality testing laboratory for agricultural commodities",
    spanClass: "lg:col-span-5",
    minHeight: "min-h-[290px]",
  },
  {
    id: "g3",
    title: "Steam Cleaned Basmati Rice Macro Inspection",
    subtitle: "GRAIN UNIFORMITY ANALYSIS",
    category: "products",
    badge: "LOT SV-894 · SORTEX 100% CLEAN",
    meta: "Average Length 8.35mm · Moisture 12.1%",
    description: "Extreme macro optical evaluation of premium 1121 Steam Basmati Raw grains, confirming needle-sharp tips, zero chalkiness, and high elongation ratio.",
    imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCKfLO8J-9TjPcSiEDKLZy74vhjr1NLr2F-6TvXFM1jI93X1EPdVptVQhuyClmkxJVF5ZRhz56Kh38wgxtr9wEAw9Wz-LSrTGRVRI9lVLNSzEWT8uJNm8OAJ_GgkAbHBdgzN1tapv2sSf_w1hhtzHJ3-avEUCm9h9AavOGbx18-HMJ4TVHgLCI4AhciLJyfMIScbbrdHiYMfXqchPkNNt_2gpLEKOAyLWXSzyu4xGnl1_cKHzRYv2Hw",
    alt: "Extreme macro photograph of premium 1121 Steam Basmati Rice grains",
    spanClass: "lg:col-span-5",
    minHeight: "min-h-[300px]",
  },
  {
    id: "g4",
    title: "Palletized 25kg Kraft Stacks",
    subtitle: "CLIMATE STABILIZED INVENTORY",
    category: "warehouse",
    badge: "WAREHOUSE NO. 03",
    meta: "55% Controlled RH · Euro-Pallet Certified",
    description: "Stretch-hood wrapped under 55% controlled relative humidity ready for export container stuffing and zero-moisture condensation during sea transit.",
    imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAjuJuyW5mGBJgAP5N7qqymtUuK_0QYM_25inTdlzKJ8xuFX1ouCbe30zracMYUq6D4ejncnyCCzOVjqcmpsBf-miPdQdyLFU6nDNxtGYR-tisU04lGEPXrSKLYMhtKDHFomgpysRvb6wL9ELN_0uZVihnuzSs5OW4Q35rtTeWuVsN7I2HbewfmBzE14QStCKnqTKY382U0s_T5ls867B8zz9TvhaAlMYgb3YGCww1AWFYw1bXfncYJ",
    alt: "Export warehouse with pallets of 25kg multi-wall Kraft paper sacks",
    spanClass: "lg:col-span-4",
    minHeight: "min-h-[320px]",
  },
  {
    id: "g5",
    title: "Guntur Teja S17 Sun Drying",
    subtitle: "SOLAR CURING PROCESS",
    category: "products",
    badge: "HARVEST YARDS · GUNTUR",
    meta: "Natural Solar Desiccation · 10.5% Equilibrium",
    description: "Traditional solar moisture reduction on food-grade cement terraces achieving 10-11% optimal equilibrium before mechanical sorting.",
    imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBIRNEbMX2u_m_kK0P8TdRW9YNsCXDuX6ZVSD9H_RGs0qvHZH5ghpa0RnzCc1A6OEh-h_mXOcH3imDXIustc_7M5HUAvU0EBAvtKub3ZVTI7pgnU5gEkel3s8VWWP6CExViUu3qDkx12Rs8oN0hitWJG-km1Ie9GoLNAQGqtCba0A0qU4DCByak85AyyeJb98fF1rVug1n6IOqHAItk6hB6qxou6OQHUCGNgov99_y7Bg9YbJceKvlm",
    alt: "Paved rural drying yards in Andhra Pradesh covered in Guntur Teja red dried chillies",
    spanClass: "lg:col-span-4",
    minHeight: "min-h-[320px]",
  },
  {
    id: "g6",
    title: "Combed Long-Staple Rolls",
    subtitle: "ORGANIC OEKO-TEX WEAVE",
    category: "products",
    badge: "TEXTILE MILL DIVISION",
    meta: "Shankar-6 Cotton · 40s x 40s Count",
    description: "Batch export packaging for European apparel manufacturers with certified zero optical brighteners and high tensile yarn structure.",
    imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBJzsQxYgu6iFyi8l5p2CbiAB8oEJJUtSQybIo-JOtqT4ulwviGbjmQICXx2_X10Zjh7fM59nn70V1GRr__TkJA1N5LfCw6d68gP6tZfg53Lb70RFAfQvwa9dgFnIjbUc8EJBsTzVHi8WvwspMbztfC7ODFyvjurz7j8bAP1kz8BOq_5nOoau6DkRRqcWkpUCyTRROWiHabYd9cgWfzBIe8t0x0V3q8unqYnInjOGu6GDX5fOp8uZiG",
    alt: "Rolls of natural woven raw cotton textiles stacked on steel racks",
    spanClass: "lg:col-span-4",
    minHeight: "min-h-[320px]",
  },
  {
    id: "g7",
    title: "W320 White Cashew Sorting",
    subtitle: "AFI GRADE COMPLIANCE",
    category: "warehouse",
    badge: "SORTEX AUTOMATION",
    meta: "Infrared CCD Camera · 99.8% Sorting Accuracy",
    description: "Infrared optical sorting ejecting damaged kernels with 99.8% perfection before vacuum nitrogen flushes and tin packaging.",
    imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAkbxmezA4oHmO0h6hncbNJULPc3sIaToEiZnPSCLJamYBNvAsFZRe3FXlkBLxFt5kIb-WQ10FRj1l28hsuDMF3sceduLgpByKo5HSVm-uqGOP7U-AM6oNDQUVdsAQH-677F3m_SPWhMioSU2HJB9ypaLaO6ZAmvldynZRtH47sH12UPQhilupIFcxmNYZlaoxPtrUhkSZdzBM0DKgqI2TJf1b78F5zmEe15eGY53HdtES-NNjpanfH",
    alt: "High speed optical sortex machinery inspection chute with cashew kernels",
    spanClass: "lg:col-span-4",
    minHeight: "min-h-[300px]",
  },
  {
    id: "g8",
    title: "Container Vessel Loading at Berth 04",
    subtitle: "LINER ALLIANCES DIRECT",
    category: "shipping",
    badge: "VESSEL BERTH 04",
    meta: "Visakhapatnam Port Quay · Weekly Gulf Sailings",
    description: "Direct weekly sailings chartered through Maersk, MSC, and Hapag-Lloyd straight to Gulf, Mediterranean, and European continental hubs.",
    imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuD2sgE0umX5ISdKQ-CZK6zNbWgrKLI6iE5s5rbrnvoSYS-bVqwzIQYYGQy0297yNwq-D83viW_cBY_WoyuQ6J_L3aF9B4U9ROyd6Fcfol_6E3XjdOwTJCNZDB2cV8txFyVVJSvTeabgoBSWEfYjD1uUQ8zORZde36G7SLJZPwIMXNHvPWfzXGxPCb7xLACIjHQlovYUA07QYmau4oP9owTEVKpw4nrw_mNT_qR_uuyEQS96SSGwyp2M",
    alt: "Container ships berthed at deepwater seaport terminal in Visakhapatnam",
    spanClass: "lg:col-span-4",
    minHeight: "min-h-[300px]",
  },
  {
    id: "g9",
    title: "Tellicherry Garbled Vine Origin Audit",
    subtitle: "BOTANICAL PROVENANCE",
    category: "quality",
    badge: "ORIGIN AUDIT · WESTERN GHATS",
    meta: "Piperine > 5.5% · Single Estate Harvest",
    description: "In-situ agronomist audits evaluating berry density and piperine content prior to whole-bunch harvesting in the biodiverse rainforests of Wayanad.",
    imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAFHMhAaMvspXSGPS-6SFiUuqBlkqOW5rWKOb64s6ag3WQLP0II20kAkd5LjC9ubSNfAJnD9P6ZJnh62sLJj6K-FUHjC5k0DaRpvOirItksDpkjQmFFRXvWCnZFPO1hyhLF0cOMlXpjUZvMPui4Du9yzI-FBpgcSVAyRbPllJCzEIdwRMlqmmRefJtyfjP4A9xhe1ze3mOzpb90e_hwFBSO8AFmpw3zLX_YR12MHr7EmqvLtdkRCGR-",
    alt: "Agronomist examining ripe green peppercorn clusters in Western Ghats",
    spanClass: "lg:col-span-4",
    minHeight: "min-h-[300px]",
  },
  {
    id: "g10",
    title: "Hermetic Packaging & Nitrogen Purging Line",
    subtitle: "GMP & HACCP COMPLIANT",
    category: "warehouse",
    badge: "LINE 02 VISAKHAPATNAM",
    meta: "OUTPUT: 1,800 BAGS / HR · RESIDUAL O₂: < 0.5%",
    description: "Operating dual-stage automated vacuum chamber sealers with inert nitrogen gas injection, guaranteeing zero insect infestation and preserving essential volatile oil aromatics over multi-week ocean crossings.",
    imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCM02MF9_VFmhUVufFUrb3rjpod-7j9yp_DQGtXPxjt9jbbShl3sZBDjbBLAG4Uf98FFgVtOTYkRk4QN_-LvYhcZBBte9927wQjMaYnB5zb2Kb4UpwAt0FWCSHo0axMUOMMQ97oHWFSRP1zqwprJJrus0usWlLg53A4_gRSOoTnZG3taNUNjVApRRe6iJABXruiD9t2Z7cw3LOImWJ59DcU5SkGhXMadYUTwNAmiC98_aPL9BnRCFkO",
    alt: "Sanitized cleanroom packaging workforce operating thermo-sealing line",
    spanClass: "lg:col-span-12",
    minHeight: "min-h-[260px]",
  },
];

export default function GalleryPage() {
  const { openQuoteModal } = useQuoteModal();
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const filterTabs = [
    { id: "all", label: "All Manifests", count: 10 },
    { id: "products", label: "Products & Spices", count: 3 },
    { id: "warehouse", label: "Warehouse & Packing", count: 3 },
    { id: "shipping", label: "Shipping & Port Operations", count: 3 },
    { id: "quality", label: "Quality Lab & Team", count: 2 },
  ];

  const filteredItems = useMemo(() => {
    if (activeFilter === "all") return GALLERY_ITEMS;
    return GALLERY_ITEMS.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  return (
    <div className="flex flex-col w-full">
      {/* 1. Cinematic Luxury Page Banner */}
      <PageBanner
        title="FACILITY & PORT GALLERY"
        eyebrow="BHARAT GLOBAL EXPORTS · OPERATIONAL ARCHIVE"
        breadcrumbCurrent="Gallery"
        bgImage="/images/banner_port_cranes.jpg"
        description="Documenting our farm-gate provenance, automated Sortex cleaning units, ISO/IEC analytical testing labs, and deep-water container vessel loadings at Visakhapatnam Port."
        metaBadge={{
          label: "PORT CORRIDOR",
          value: "INVTZ1 · TERMINAL 02 QUAY",
        }}
      />

      {/* 2. Filter Bar */}
      <section className="sticky top-20 z-30 bg-surface border-b border-secondary/20 shadow-sm backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-center sm:justify-between overflow-x-auto py-3 gap-2 no-scrollbar">
            <div className="flex items-center gap-1 sm:gap-2 min-w-max mx-auto sm:mx-0">
              {filterTabs.map((tab) => {
                const active = activeFilter === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveFilter(tab.id)}
                    className={`relative px-4 py-2 font-label-md text-label-md transition-colors ${
                      active ? "text-secondary font-bold" : "text-on-surface-variant hover:text-secondary"
                    }`}
                    type="button"
                  >
                    <span>{tab.label} ({tab.count})</span>
                    {active && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-secondary" />
                    )}
                  </button>
                );
              })}
            </div>
            <div className="hidden lg:flex items-center gap-3 font-data-mono text-data-mono text-on-surface-variant/70 pl-6 border-l border-secondary/20 shrink-0">
              <span className="material-symbols-outlined text-[16px] text-secondary">verified</span>
              <span>Phytosanitary &amp; SGS Inspected</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Editorial Masonry Grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-16 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {filteredItems.map((item) => (
            <article
              key={item.id}
              onClick={() => setLightboxItem(item)}
              className={`gallery-tile ${item.spanClass} group relative overflow-hidden bg-surface-container border border-secondary/30 rounded flex flex-col justify-between shadow-sm ${item.minHeight} cursor-pointer transition-all hover:border-secondary`}
            >
              <div className="absolute inset-0 overflow-hidden">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  alt={item.alt}
                  src={item.imgUrl}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-on-primary-fixed/90 via-on-primary-fixed/30 to-transparent" />
              </div>
              {/* Top metadata stamp */}
              <div className="relative z-10 p-5 flex items-start justify-between">
                <span className="px-2.5 py-1 bg-on-primary-fixed/90 text-secondary-fixed text-[11px] font-eyebrow-bold uppercase tracking-wider rounded border border-secondary/30 backdrop-blur-sm">
                  {item.badge}
                </span>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxItem(item);
                  }}
                  aria-label="Expand image"
                  className="w-9 h-9 rounded bg-on-primary-fixed/80 text-surface-bright flex items-center justify-center border border-secondary/40 hover:bg-secondary transition-colors"
                >
                  <span className="material-symbols-outlined text-[18px]">zoom_in</span>
                </button>
              </div>
              {/* Bottom details */}
              <div className="relative z-10 p-5 sm:p-6 text-surface-bright">
                <div className="flex items-center gap-2 text-secondary-fixed font-data-mono text-data-mono mb-1.5 text-xs">
                  <span className="material-symbols-outlined text-[14px]">anchor</span>
                  <span>{item.subtitle}</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-surface-bright mb-1.5 leading-snug">
                  {item.title}
                </h3>
                <p className="font-body-sm text-body-sm text-surface-bright/80 line-clamp-2">
                  {item.description}
                </p>
                {item.extraMeta && (
                  <div className="flex flex-wrap items-center gap-3 pt-3 mt-2 border-t border-secondary/30 text-surface-bright/70 font-data-mono text-[11px]">
                    {item.extraMeta.map((em, idx) => (
                      <span key={idx}>{em}</span>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 4. Interactive Lightbox Modal */}
      {lightboxItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-6"
          onClick={() => setLightboxItem(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-on-primary-fixed border-2 border-secondary rounded overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Lightbox Header */}
            <div className="bg-secondary px-5 py-3 flex items-center justify-between text-surface-container-lowest">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px]">photo_library</span>
                <span className="font-eyebrow-bold text-eyebrow-bold uppercase tracking-wider">
                  LIGHTBOX INSPECTION VIEW · {lightboxItem.badge}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => openQuoteModal(lightboxItem.id)}
                  className="bg-on-primary-fixed text-surface-bright px-3 py-1 rounded text-xs font-semibold hover:bg-black transition-colors"
                >
                  Request Lot Sample
                </button>
                <button
                  type="button"
                  onClick={() => setLightboxItem(null)}
                  className="p-1 hover:bg-on-secondary-fixed-variant rounded transition-colors"
                >
                  <span className="material-symbols-outlined text-[22px]">close</span>
                </button>
              </div>
            </div>

            {/* Lightbox Image Container */}
            <div className="relative aspect-[16/10] w-full bg-black flex items-center justify-center overflow-hidden">
              <img
                src={lightboxItem.imgUrl}
                alt={lightboxItem.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-on-primary-fixed/80 via-transparent to-transparent pointer-events-none" />
              {/* Inspection Reticle */}
              <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-30">
                <div className="w-24 h-24 border border-secondary rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-secondary" />
                </div>
              </div>
            </div>

            {/* Lightbox Footer Details */}
            <div className="p-6 bg-on-primary-fixed text-surface-bright border-t border-secondary/40">
              <div className="flex items-center justify-between text-secondary-fixed font-data-mono text-xs mb-1">
                <span>{lightboxItem.subtitle}</span>
                <span className="text-primary-fixed">SGS INSPECTED ✓</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-surface-bright mb-2">
                {lightboxItem.title}
              </h3>
              <p className="font-body-sm text-body-sm text-surface-bright/80 leading-relaxed mb-4">
                {lightboxItem.description}
              </p>
              <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-secondary/20 font-data-mono text-xs text-surface-bright/70">
                <span>TERMINAL CORRIDOR: INVTZ1 · VISAKHAPATNAM PORT</span>
                <button
                  type="button"
                  onClick={() => {
                    setLightboxItem(null);
                    openQuoteModal(lightboxItem.id);
                  }}
                  className="text-secondary-fixed hover:text-secondary-container font-semibold flex items-center gap-1"
                >
                  <span>Inquire on this consignment</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 5. Port Infrastructure Callout Strip */}
      <section className="w-full bg-surface-container-high border-y border-secondary/30 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 flex flex-col gap-3">
              <div className="flex items-center gap-2 text-secondary">
                <span className="material-symbols-outlined text-[20px]">directions_boat</span>
                <span className="font-eyebrow-bold text-eyebrow-bold uppercase tracking-[0.2em]">
                  DIRECT MARITIME ADVANTAGE
                </span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface">
                Direct Vessel Berthing at Visakhapatnam Port — 36hr turnaround from gate-in to sea dispatch.
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
                Our strategic waterfront location inside the VPA port corridor cuts customs dwell time and bypasses road congestion, ensuring cold-chain and dry freight containers clear direct to international shipping lanes without secondary inland handling.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4 justify-end">
              <div className="p-4 bg-surface-bright rounded border border-secondary/20 shadow-sm flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="font-eyebrow-bold text-[10px] text-secondary uppercase tracking-widest">
                    Average Turnaround
                  </span>
                  <span className="font-headline-sm text-headline-sm text-primary font-bold">
                    <AnimatedCounter target={36.2} decimals={1} suffix=" Hours" />
                  </span>
                </div>
                <span className="material-symbols-outlined text-secondary text-[32px]">schedule</span>
              </div>
              <div className="p-4 bg-surface-bright rounded border border-secondary/20 shadow-sm flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="font-eyebrow-bold text-[10px] text-secondary uppercase tracking-widest">
                    Container Berth Draft
                  </span>
                  <span className="font-headline-sm text-headline-sm text-primary font-bold">
                    <AnimatedCounter target={16.5} decimals={1} suffix="m Deep-Draft" />
                  </span>
                </div>
                <span className="material-symbols-outlined text-secondary text-[32px]">water</span>
              </div>
            </div>
          </div>
          {/* Quick Metrics Strip */}
          <div className="mt-10 pt-8 border-t border-secondary/20 grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
            <div>
              <span className="font-data-mono text-data-mono text-secondary uppercase block mb-1">PORT CAPACITY</span>
              <p className="font-title-md text-title-md text-on-surface font-bold">
                <AnimatedCounter target={1.2} decimals={1} suffix="M TEUs Annual" />
              </p>
            </div>
            <div>
              <span className="font-data-mono text-data-mono text-secondary uppercase block mb-1">RAIL SIDING ACCESS</span>
              <p className="font-title-md text-title-md text-on-surface font-bold">Dedicated CONCOR Spur</p>
            </div>
            <div>
              <span className="font-data-mono text-data-mono text-secondary uppercase block mb-1">CUSTOMS PROTOCOL</span>
              <p className="font-title-md text-title-md text-on-surface font-bold">Single-Window E-Sanchit</p>
            </div>
            <div>
              <span className="font-data-mono text-data-mono text-secondary uppercase block mb-1">REEFER PLUG POINTS</span>
              <p className="font-title-md text-title-md text-on-surface font-bold">
                <AnimatedCounter target={750} suffix="+ Points" />
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
