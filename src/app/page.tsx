"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useQuoteModal } from "@/context/QuoteModalContext";
import { useData } from "@/context/DataContext";

// Skanda Export Banners (Clean, unobstructed for future GIFs / Graphic Banners)
const bannerSlides = [
  {
    id: 1,
    title: "Deepwater Port Berth & Cargo Gantry Cranes",
    image: "/images/banner_port_cranes.jpg",
    alt: "Mega container cargo ship berthed at deepwater port terminal with dock cranes and colorful containers",
  },
  {
    id: 2,
    title: "High-Tonnage Maritime Ocean Freight",
    image: "/images/banner_ocean_ship.jpg",
    alt: "Aerial view of large container ship loaded with export cargo sailing across deep blue ocean",
  },
  {
    id: 3,
    title: "Port Container Yard & Expedited Customs Transit",
    image: "https://images.unsplash.com/photo-1494412685616-a5d310fbb07d?auto=format&fit=crop&w=2000&q=85",
    alt: "Vibrant aerial view of shipping containers stacked at busy industrial maritime port",
  },
  {
    id: 4,
    title: "Quay Cranes & Port Cargo Handling",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=2000&q=85",
    alt: "Quay gantry cranes loading containers onto container ship at deepwater port",
  },
  {
    id: 5,
    title: "Export Pulses & Agricultural Grains",
    image: "/images/skanda/01.jpg",
    alt: "Indian agricultural pulses, grains, and commodities",
  },
  {
    id: 6,
    title: "Pure Indian Spices & Botanicals",
    image: "/images/skanda/02.jpg",
    alt: "Indian whole spices, turmeric, and black pepper",
  },
];

// Skanda 4 Core Overview Sectors
const overviewSectors = [
  {
    id: "pulses",
    icon: "/images/skanda/icon1.png",
    tag: "01 · PULSES",
    title: "Pulses & Grains",
    desc: "Superior quality chickpeas, green gram, toor dal, and black matpe processed under stringent grading standards.",
    link: "/products",
  },
  {
    id: "spices",
    icon: "/images/skanda/icon2.png",
    tag: "02 · SPICES",
    title: "Indian Spices",
    desc: "Salem high-curcumin turmeric, Malabar Tellicherry black pepper, and Guntur S17 red chilli graded to ASTA specifications.",
    link: "/products",
  },
  {
    id: "rice",
    icon: "/images/skanda/icon3.png",
    tag: "03 · RICE",
    title: "Premium Rice",
    desc: "1121 Steam, Sella & Golden Basmati, traditional black rice, and non-basmati IR64 with guaranteed low broken ratio.",
    link: "/products",
  },
  {
    id: "agriculture",
    icon: "/images/skanda/icon4.png",
    tag: "04 · AGRO & TEXTILES",
    title: "Agriculture & Goods",
    desc: "100% Combed Shankar-6 cotton greige, jumbo cashew kernels (W180-W320), white sesame seeds, and cocopeat.",
    link: "/services",
  },
];

// Skanda 6 Featured Products Grid
const featuredProducts = [
  {
    id: "spices",
    name: "Export & Import Spices",
    category: "Indian Spices",
    image: "/images/skanda/09.jpg",
    hsCode: "HS: 0910.30",
    spec: "Curcumin 4.8%+, Salem / Alleppey, Steam Cleaned",
    moq: "5 Metric Tons",
  },
  {
    id: "pulses",
    name: "Export & Import Pulses",
    category: "Pulses & Grains",
    image: "/images/skanda/10.jpg",
    hsCode: "HS: 0713.20",
    spec: "Machine Cleaned, Moisture < 10%, High Purity",
    moq: "20 MT (1 FCL)",
  },
  {
    id: "rice",
    name: "Export & Import Rice",
    category: "Rice & Basmati",
    image: "/images/skanda/11.jpg",
    hsCode: "HS: 1006.30",
    spec: "1121 Steam Extra Long (8.35mm+), Sortex Clean",
    moq: "20 MT (1 FCL)",
  },
  {
    id: "agriculture",
    name: "Agriculture & Raw Cotton",
    category: "Textiles & Seeds",
    image: "/images/skanda/12.jpg",
    hsCode: "HS: 5208.12",
    spec: "100% Shankar-6 Combed Cotton, Yarns & Greige",
    moq: "5,000 Running Meters",
  },
  {
    id: "manure",
    name: "Agriculture Manure",
    category: "Agro Solutions",
    image: "/images/skanda/13.jpg",
    hsCode: "HS: 3101.00",
    spec: "100% Natural Organic Compost & Bio-Fertilizers",
    moq: "10 Metric Tons",
  },
  {
    id: "cocopeat",
    name: "Agriculture Cocopeat",
    category: "Agro Solutions",
    image: "/images/skanda/14.jpg",
    hsCode: "HS: 5305.00",
    spec: "Low-EC 5kg Washed Blocks & High Expansion",
    moq: "24 MT (1 x 40ft HC)",
  },
];

export default function HomePage() {
  const { openQuoteModal } = useQuoteModal();
  const { addEnquiry } = useData();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Products Carousel Horizontal Scroll Reference & Handler
  const productScrollRef = useRef<HTMLDivElement>(null);
  const scrollProducts = (direction: "left" | "right") => {
    if (productScrollRef.current) {
      const scrollDistance = 380;
      productScrollRef.current.scrollBy({
        left: direction === "left" ? -scrollDistance : scrollDistance,
        behavior: "smooth",
      });
    }
  };

  // Commercial RFQ State
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [inquiryData, setInquiryData] = useState({
    fullName: "",
    email: "",
    phone: "",
    commodity: "",
    destinationPort: "",
    quantity: "",
    incoterm: "CIF",
    notes: "",
  });

  // Auto-advance banner slides every 5s
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryData.fullName || !inquiryData.email || !inquiryData.commodity) return;

    addEnquiry({
      fullName: inquiryData.fullName,
      email: inquiryData.email,
      phone: inquiryData.phone,
      commodity: inquiryData.commodity,
      destinationPort: inquiryData.destinationPort,
      quantity: inquiryData.quantity,
      notes: `Incoterm: ${inquiryData.incoterm}. Notes: ${inquiryData.notes}`,
    });

    setFormSubmitted(true);
  };

  return (
    <div className="flex flex-col w-full bg-[#FFFFFF] text-[#2A2833] font-sans">
      {/* =========================================================================
          SEGMENT 1: ATTRACTIVE BANNER SECTION WITH EXPORT BUSINESS BRANDING
          (Per user strict instruction: Clean banner visual with NO overlay text,
           NO overlay buttons so client can freely place GIFs/banners with full clarity)
         ========================================================================= */}
      <section
        className="relative w-full bg-[#000000] overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        aria-label="Export Business Banner Carousel"
      >
        <div className="relative w-full aspect-[21/9] min-h-[360px] sm:min-h-[480px] lg:min-h-[600px] xl:min-h-[660px] bg-[#0B281D] overflow-hidden">
          {bannerSlides.map((slide, idx) => (
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

          {/* Minimalist Slide Navigation Indicators (At bottom center) */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
            {bannerSlides.map((slide, idx) => (
              <button
                key={slide.id}
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Switch to banner slide ${idx + 1}`}
                className={`transition-all duration-300 rounded-full ${
                  idx === currentSlide
                    ? "w-8 h-2.5 bg-[#F7C600] shadow-[0_0_8px_#F7C600]"
                    : "w-2.5 h-2.5 bg-white/60 hover:bg-white"
                }`}
              />
            ))}
          </div>

          {/* Slide Arrow Controls */}
          <button
            onClick={() =>
              setCurrentSlide((prev) => (prev === 0 ? bannerSlides.length - 1 : prev - 1))
            }
            aria-label="Previous Slide"
            className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/60 hover:bg-[#BB1515] text-white flex items-center justify-center border border-white/20 transition-all shadow-lg hover:scale-110"
          >
            <span className="material-symbols-outlined text-[24px]">arrow_back</span>
          </button>
          <button
            onClick={() =>
              setCurrentSlide((prev) => (prev + 1) % bannerSlides.length)
            }
            aria-label="Next Slide"
            className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/60 hover:bg-[#BB1515] text-white flex items-center justify-center border border-white/20 transition-all shadow-lg hover:scale-110"
          >
            <span className="material-symbols-outlined text-[24px]">arrow_forward</span>
          </button>
        </div>


      </section>

      {/* =========================================================================
          SECTION 2: COMPANY INTRODUCTION
         ========================================================================= */}
      <section className="w-full py-20 lg:py-28 bg-[#FAF8F3] text-[#2A2833] border-b border-[#ECE6D8] relative overflow-hidden" id="company-introduction">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Visual Column: Container Yard & Cargo Handling (Col 1-6) */}
            <div className="lg:col-span-6 relative pb-6 sm:pb-8 pr-0 sm:pr-6">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group border-2 border-[#D9D9D9] hover:border-[#F7C600] transition-all duration-500 aspect-[4/3]">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  alt="Maritime shipping container terminal and reach stacker handling"
                  src="/images/container_terminal_handling.jpg"
                />
              </div>

              {/* Overlapping Floating Inset Image - Cargo Handling & Container Stuffing */}
              <div className="hidden sm:block absolute -bottom-4 -right-4 w-3/5 rounded-2xl overflow-hidden shadow-2xl border-4 border-white group-hover:scale-105 transition-all duration-500">
                <img
                  className="w-full aspect-[4/3] object-cover"
                  alt="Export cargo handling, pallet stuffing and container loading"
                  src="/images/cargo_container_stuffing.jpg"
                />
              </div>
            </div>

            {/* Narrative Column (Col 7-12) */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <span className="font-sans text-xs uppercase tracking-widest text-[#BB1515] font-bold block mb-2">
                COMPANY INTRODUCTION
              </span>

              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#2A2833] mb-3 leading-tight">
                Company Introduction
              </h2>

              <h3 className="font-display text-xl sm:text-2xl text-[#BB1515] font-semibold mb-6">
                Exports And Imports Seeds, Indian Spices, Rice and Pulses
              </h3>

              <p className="font-sans text-sm sm:text-base text-[#767676] mb-6 leading-relaxed">
                The organization proclaimed it with their sprightly transaction in Exports and Imports. We discover resolutions very preciously, pleasing customers’ needs—both existing and underlying, bridging Indian farm gates directly with global commercial importers.
              </p>

              {/* Values & Beliefs Dual Cards (Skanda Content) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
                <div className="p-5 rounded-xl bg-[#F7F4EB] border-l-4 border-[#BB1515]">
                  <h4 className="font-display text-lg font-bold text-[#2A2833] mb-2">
                    Values &amp; Beliefs
                  </h4>
                  <p className="font-sans text-xs text-[#767676] leading-relaxed">
                    Customer-centric approach ensuring every procurement partner receives verified batch consistency and prompt logistics support.
                  </p>
                </div>
                <div className="p-5 rounded-xl bg-[#F7F4EB] border-l-4 border-[#F7C600]">
                  <h4 className="font-display text-lg font-bold text-[#2A2833] mb-2">
                    Export Excellence
                  </h4>
                  <p className="font-sans text-xs text-[#767676] leading-relaxed">
                    High importance to product purity, 100% Sortex optical cleaning, and internationally recognized phytosanitary testing.
                  </p>
                </div>
              </div>

              <div>
                <Link
                  className="inline-flex items-center gap-3 px-7 py-4 rounded-xl bg-[#BB1515] hover:bg-[#2A2833] text-white font-sans text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-lg hover:scale-105"
                  href="/about-us"
                >
                  <span>Discover More</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: SERVICES (With Container Shipment & Maritime Elements)
         ========================================================================= */}
      <section className="relative w-full py-20 lg:py-28 bg-[#FAF6EE] text-[#2A2833] border-b border-[#ECE6D8] overflow-hidden [background-image:radial-gradient(#E8DFC9_1.2px,transparent_1.2px)] [background-size:24px_24px]" id="services">
        {/* Container Shipment & Marine Logistics PNG Elements */}
        {/* 1. Container Shipment: Stacked Shipping Containers (Bottom Left) */}
        <img
          src="/images/skanda/container_stack.png"
          alt="International Export Shipping Containers"
          className="absolute bottom-2 left-2 sm:left-6 w-36 sm:w-48 lg:w-56 object-contain pointer-events-none drop-shadow-2xl z-20 block opacity-95"
        />
        {/* 2. Container Shipment: Port Gantry Crane Lifting Cargo (Bottom Right) */}
        <img
          src="/images/skanda/container_crane.png"
          alt="Quayside Port Gantry Crane Lifting Cargo Container"
          className="absolute bottom-2 right-2 sm:right-6 w-36 sm:w-52 lg:w-64 object-contain pointer-events-none drop-shadow-2xl z-20 block opacity-95"
        />
        {/* 3. Shipment Element: 3D Cargo Container Vessel Illustration (Top Right) */}
        <img
          src="/images/skanda/shipment_shape.png"
          alt="Export Container Ship Illustration"
          className="absolute top-6 right-4 sm:right-8 w-28 sm:w-36 lg:w-44 object-contain pointer-events-none drop-shadow-2xl z-10 block animate-pulse"
        />
        {/* 4. Container Logistics: 3D Port Container Reach Stacker (Top Left) */}
        <img
          src="/images/skanda/container_reach_stacker.png"
          alt="Port Container Reach Stacker Vehicle"
          className="absolute top-4 sm:top-6 left-4 sm:left-8 w-28 sm:w-36 lg:w-44 object-contain pointer-events-none drop-shadow-2xl z-10 block animate-pulse"
        />

        <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-12">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-1.5 font-sans text-xs uppercase tracking-widest text-[#BB1515] font-bold mb-2">
              <span className="material-symbols-outlined text-[18px]">anchor</span>
              <span>OUR SERVICES</span>
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#2A2833] leading-tight">
              Services
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#767676] mt-4 leading-relaxed">
              End-to-end agro commodity sourcing, quality processing, phytosanitary testing, and coastal maritime transshipment.
            </p>
          </div>

          {/* Skanda 4 Service/Product Icon Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {overviewSectors.map((sector) => (
              <div
                key={sector.id}
                className="bg-white rounded-2xl p-8 text-center shadow-[0_10px_35px_rgba(0,0,0,0.06)] hover:shadow-2xl border-2 border-[#D9D9D9] hover:border-[#F7C600] transition-all duration-300 flex flex-col justify-between group hover:-translate-y-2 relative z-10"
              >
                <div>
                  {/* Circular Icon with Skanda Hover Glow */}
                  <div className="w-28 h-28 mx-auto rounded-full bg-[#FEE6CC] group-hover:bg-[#BB1515] flex items-center justify-center p-5 mb-6 transition-all duration-500 shadow-md">
                    <img
                      src={sector.icon}
                      alt={sector.title}
                      className="w-14 h-14 object-contain transition-transform duration-300 group-hover:scale-110 group-hover:brightness-0 group-hover:invert"
                    />
                  </div>

                  <span className="font-mono text-xs text-[#BB1515] font-bold block mb-1 uppercase tracking-wider">
                    {sector.tag}
                  </span>
                  <h3 className="font-display text-2xl font-bold text-[#2A2833] mb-3 group-hover:text-[#BB1515] transition-colors">
                    {sector.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-[#767676] leading-relaxed mb-6">
                    {sector.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#F0EBE0]">
                  <Link
                    href={sector.link}
                    className="inline-flex items-center gap-1.5 font-sans text-xs font-bold text-[#2A2833] group-hover:text-[#BB1515] uppercase tracking-wider transition-colors"
                  >
                    <span>Explore Specifications</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: KEY HIGHLIGHTS / WHY CHOOSE US
         ========================================================================= */}
      <section className="w-full py-20 lg:py-28 bg-[#191820] text-white relative overflow-hidden border-b border-[#373737]" id="key-highlights">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Narrative & 4 Export Highlights */}
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-1.5 font-sans text-xs uppercase tracking-widest text-[#F7C600] font-bold mb-2">
                <span className="material-symbols-outlined text-[18px]">anchor</span>
                <span>WHY CHOOSE SVMR EXPORTS</span>
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight mb-4">
                Global Export Infrastructure &amp; <br />
                <span className="text-[#F7C600]">Maritime Supply Reliability</span>
              </h2>
              <p className="font-sans text-sm sm:text-base text-[#BFBFBF] mb-8 leading-relaxed">
                SVMR Exports operates as a premier Indian B2B export house bridging farm-gate agricultural wealth directly with international commercial sea routes. With certified institutional standards, streamlined port customs clearance, and verified global ocean freight networks, we ensure guaranteed lot integrity and scheduled dispatches worldwide.
              </p>

              {/* 4 Feature Highlights Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#F7C600] transition-colors">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#BB1515] to-[#F7C600] flex items-center justify-center text-white shrink-0 shadow-md">
                    <span className="material-symbols-outlined text-[22px]">workspace_premium</span>
                  </div>
                  <div>
                    <h4 className="font-display text-base font-bold text-white mb-1">
                      Certified Export Standards
                    </h4>
                    <p className="font-sans text-xs text-[#BFBFBF] leading-relaxed">
                      APEDA, US-FDA &amp; Spices Board registered with 100% optical Sortex cleaning and SGS lab inspection.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#F7C600] transition-colors">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#BB1515] to-[#F7C600] flex items-center justify-center text-white shrink-0 shadow-md">
                    <span className="material-symbols-outlined text-[22px]">anchor</span>
                  </div>
                  <div>
                    <h4 className="font-display text-base font-bold text-white mb-1">
                      Direct Port Transshipment
                    </h4>
                    <p className="font-sans text-xs text-[#BFBFBF] leading-relaxed">
                      Quay-side dispatch from Visakhapatnam Port (INVTZ1) with rapid customs clearance within 48 hours.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#F7C600] transition-colors">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#BB1515] to-[#F7C600] flex items-center justify-center text-white shrink-0 shadow-md">
                    <span className="material-symbols-outlined text-[22px]">public</span>
                  </div>
                  <div>
                    <h4 className="font-display text-base font-bold text-white mb-1">
                      40+ Global Sea Route Ports
                    </h4>
                    <p className="font-sans text-xs text-[#BFBFBF] leading-relaxed">
                      Scheduled FCL &amp; LCL container dispatches to major ports across GCC, Europe, Americas, and SE Asia.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#F7C600] transition-colors">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#BB1515] to-[#F7C600] flex items-center justify-center text-white shrink-0 shadow-md">
                    <span className="material-symbols-outlined text-[22px]">handshake</span>
                  </div>
                  <div>
                    <h4 className="font-display text-base font-bold text-white mb-1">
                      Flexible Incoterms 2020
                    </h4>
                    <p className="font-sans text-xs text-[#BFBFBF] leading-relaxed">
                      Direct farmgate pricing, competitive ocean freight (CIF / FOB / CFR), and verified trade documentation.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Export Vessel Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-[#373737] group">
                <img
                  src="/images/global_export_shipping.jpg"
                  alt="Trans-oceanic container cargo vessel loaded for international export"
                  className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-lg bg-black/75 backdrop-blur-md border border-[#F7C600]/40 text-[#F7C600] font-mono text-[11px] font-bold tracking-wider flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[15px]">sailing</span>
                  <span>TRANS-OCEANIC EXPORT FREIGHT</span>
                </div>
                <div className="absolute bottom-4 right-4 px-3.5 py-2 rounded-lg bg-[#0B281D]/90 backdrop-blur-md border border-[#C5A15B]/40 text-white font-sans text-xs font-semibold shadow-xl">
                  <span className="text-[#F7C600] font-bold">40+</span> Global Port Corridors
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: PRODUCTS (Horizontal Scrolling Carousel with On-Hover Black Film)
         ========================================================================= */}
      <section className="relative w-full py-20 lg:py-28 bg-[#FAF5EC] text-[#2A2833] border-b border-[#ECE6D8] overflow-hidden" id="products">
        {/* Subtle Decorative Shapes in Background (No Plain White) */}
        <img
          src="/images/skanda/shape.png"
          alt="Decorative Shape"
          className="absolute top-10 left-6 w-24 sm:w-32 object-contain pointer-events-none opacity-40 z-0"
        />
        <img
          src="/images/skanda/c-shape-3.png"
          alt="Decorative Shape"
          className="absolute bottom-10 right-6 w-28 sm:w-36 object-contain pointer-events-none opacity-40 z-0"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section Header with Carousel Scrolling Controls */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="inline-flex items-center gap-1.5 font-sans text-xs uppercase tracking-widest text-[#BB1515] font-bold mb-2">
                <span className="material-symbols-outlined text-[18px]">anchor</span>
                <span>EXPORT COMMODITIES</span>
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#2A2833] leading-tight">
                Products
              </h2>
              <p className="font-sans text-sm sm:text-base text-[#767676] mt-3 max-w-2xl leading-relaxed">
                We offer a diverse range of agricultural and industrial commodities graded to international export standards. Scroll horizontally through our certified trade lines below.
              </p>
            </div>

            {/* Horizontal Scrolling Manner Navigation Controls */}
            <div className="flex items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={() => scrollProducts("left")}
                aria-label="Scroll products left"
                className="w-12 h-12 rounded-full border-2 border-[#D9D9D9] hover:border-[#BB1515] bg-white hover:bg-[#BB1515] text-[#2A2833] hover:text-white flex items-center justify-center transition-all duration-300 shadow-md active:scale-95 group"
              >
                <span className="material-symbols-outlined text-[24px] group-hover:-translate-x-0.5 transition-transform">arrow_back</span>
              </button>
              <button
                type="button"
                onClick={() => scrollProducts("right")}
                aria-label="Scroll products right"
                className="w-12 h-12 rounded-full border-2 border-[#D9D9D9] hover:border-[#BB1515] bg-white hover:bg-[#BB1515] text-[#2A2833] hover:text-white flex items-center justify-center transition-all duration-300 shadow-md active:scale-95 group"
              >
                <span className="material-symbols-outlined text-[24px] group-hover:translate-x-0.5 transition-transform">arrow_forward</span>
              </button>
            </div>
          </div>

          {/* Scrolling Manner Product Track */}
          <div
            ref={productScrollRef}
            className="flex gap-7 overflow-x-auto scrollbar-none snap-x snap-mandatory py-4 px-1 scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {featuredProducts.map((p) => (
              <div
                key={p.id}
                className="min-w-[310px] sm:min-w-[350px] lg:min-w-[370px] max-w-[380px] shrink-0 snap-start group relative rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.12)] border-2 border-[#D9D9D9] hover:border-[#F7C600] bg-black h-[480px] transition-all duration-500 hover:-translate-y-2 cursor-pointer"
              >
                {/* Full Bleed Commodity Image */}
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />

                {/* Top Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10 pointer-events-none">
                  <span className="bg-black/80 backdrop-blur-md text-[#F7C600] font-mono text-xs px-3 py-1 rounded-md font-bold border border-[#F7C600]/40 shadow-md flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">anchor</span>
                    <span>{p.hsCode}</span>
                  </span>
                  <span className="bg-[#0B281D]/90 backdrop-blur-md text-white font-mono text-[11px] px-2.5 py-1 rounded-md font-semibold border border-[#C5A15B]/40 shadow-md">
                    APEDA Graded
                  </span>
                </div>

                {/* RESTING STATE: Red Angled Trapezoid Banner (100% Round Unclipped Button) */}
                <div className="absolute bottom-0 left-0 right-0 z-10 transition-transform duration-500 ease-in-out group-hover:translate-y-full pointer-events-none">
                  {/* Clipped Red Background Layer */}
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-[#BB1515] via-[#B81414] to-[#990D0D] shadow-2xl"
                    style={{
                      clipPath: "polygon(0 0, calc(100% - 36px) 0, 100% 100%, 0 100%)",
                    }}
                  />
                  {/* Content Layer (Button sits safely unclipped) */}
                  <div className="relative px-5 py-4 flex items-center justify-between">
                    <div className="pr-3">
                      <span className="text-[11px] font-sans font-medium text-white/90 block uppercase tracking-wider">
                        Export &amp; Import
                      </span>
                      <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-wide">
                        {p.category.split(" ")[0]}
                      </h3>
                    </div>
                    {/* Perfectly Round White Arrow Button - 100% Crisp & Unclipped */}
                    <div className="w-11 h-11 rounded-full bg-white text-[#BB1515] flex items-center justify-center shadow-xl shrink-0 group-hover:bg-[#F7C600] group-hover:text-[#2A2833] transition-colors border border-black/10">
                      <span className="material-symbols-outlined text-[20px] font-bold">arrow_forward</span>
                    </div>
                  </div>
                </div>

                {/* ON HOVER: Black Film Scrolling Overlay (Smooth Slide-Up Film Curtain) */}
                <div className="absolute inset-0 bg-[#0A0C10]/92 backdrop-blur-md p-6 text-white flex flex-col justify-between translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-20 overflow-y-auto">
                  <div>
                    <div className="flex items-center justify-between mb-3 border-b border-white/15 pb-2">
                      <span className="font-mono text-xs text-[#F7C600] font-bold flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">anchor</span>
                        <span>{p.hsCode}</span>
                      </span>
                      <span className="font-sans text-[11px] uppercase tracking-wider text-[#C5A15B] font-bold">
                        {p.category}
                      </span>
                    </div>

                    <h3 className="font-display text-2xl font-bold text-white mb-2 leading-tight">
                      {p.name}
                    </h3>
                    <p className="font-sans text-xs text-[#D9D9D9] mb-4 leading-relaxed">
                      {p.spec}
                    </p>

                    {/* Specifications & Export Parameters Grid */}
                    <div className="space-y-2 bg-white/5 rounded-xl p-3 border border-white/10 mb-4 font-mono text-xs">
                      <div className="flex justify-between items-center text-[#BFBFBF]">
                        <span>Standard:</span>
                        <span className="text-white font-semibold">100% Optical Sortex</span>
                      </div>
                      <div className="flex justify-between items-center text-[#BFBFBF]">
                        <span>MOQ:</span>
                        <span className="text-[#F7C600] font-bold">{p.moq}</span>
                      </div>
                      <div className="flex justify-between items-center text-[#BFBFBF]">
                        <span>Incoterms:</span>
                        <span className="text-white font-semibold">CIF / FOB / CFR</span>
                      </div>
                      <div className="flex justify-between items-center text-[#BFBFBF]">
                        <span>Discharge Origin:</span>
                        <span className="text-white font-semibold">Visakhapatnam (INVTZ1)</span>
                      </div>
                    </div>
                  </div>

                  {/* Action Triggers */}
                  <div className="flex items-center gap-2 pt-2 border-t border-white/15">
                    <button
                      type="button"
                      onClick={() => openQuoteModal(p.id)}
                      className="flex-1 py-3 px-3 rounded-xl bg-[#BB1515] hover:bg-[#D92525] text-white font-sans text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-1.5 shadow-lg active:scale-95"
                    >
                      <span>Enquire Price</span>
                      <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                    </button>

                    <a
                      href={`https://wa.me/919876543210?text=Hello%20SVMR%20Exports%2C%20I%20am%20interested%20in%20pricing%20and%20specifications%20for%20${encodeURIComponent(
                        p.name
                      )}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Direct WhatsApp Inquiry"
                      className="w-11 h-11 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white flex items-center justify-center transition-all shadow-lg shrink-0"
                    >
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.966.527 1.947.818 2.796.819 3.18 0 5.766-2.587 5.767-5.767.001-3.18-2.584-5.765-5.767-5.765zm3.385 8.169c-.145.408-.737.769-1.02.812-.279.043-.642.062-1.922-.469-1.579-.654-2.593-2.261-2.671-2.366-.079-.105-.639-.851-.639-1.624 0-.773.407-1.154.551-1.311.145-.157.316-.197.421-.197.105 0 .21.002.302.007.098.005.229-.037.359.274.132.316.452 1.104.492 1.184.039.08.065.172.013.276-.052.105-.078.172-.157.263-.079.092-.167.205-.238.275-.08.079-.163.165-.07.324.093.159.412.68 0.884 1.101.607.541 1.119.708 1.277.787.158.079.25.066.342-.04.092-.105.394-.459.499-.616.105-.157.21-.131.355-.079.145.052.92.434 1.077.513.158.079.263.118.302.184.039.066.039.382-.106.79z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Catalog Link */}
          <div className="text-center mt-12">
            <Link
              href="/products"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-[#BB1515] hover:bg-[#2A2833] text-white font-sans text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-lg hover:scale-105"
            >
              <span className="material-symbols-outlined text-[18px]">anchor</span>
              <span>Explore Complete Commodity Catalogue</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: CONTACT SECTION
         ========================================================================= */}
      <section className="w-full py-20 lg:py-28 bg-[#FAF6EE] text-[#2A2833] border-b border-[#ECE6D8]" id="enquiry-contact-section">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section Header with Increased Font Size and Anchor Icon */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 font-sans text-sm sm:text-base uppercase tracking-[0.22em] text-[#BB1515] font-extrabold mb-3">
              <span className="material-symbols-outlined text-[22px]">anchor</span>
              <span>COMMERCIAL INQUIRY &amp; CONTACT</span>
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2A2833] leading-tight">
              Contact Section
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#767676] mt-4 leading-relaxed">
              Direct your sourcing inquiry to our maritime desk for official FOB / CIF quotation sheets and certified laboratory specifications.
            </p>
          </div>

          {/* Main Grid: RFQ Form (7 Cols) + Direct Port Facility Desk (5 Cols) */}
          <div className="rounded-3xl overflow-hidden shadow-2xl border-2 border-[#D9D9D9] grid grid-cols-1 lg:grid-cols-12 bg-white mb-12">
            {/* Left: RFQ Form (7 Cols) */}
            <div className="lg:col-span-7 p-8 lg:p-12">
              <span className="font-sans text-xs uppercase tracking-widest text-[#BB1515] font-bold block mb-2">
                COMMERCIAL DESK
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-semibold text-[#2A2833] mb-3">
                Request an Official Export Quote
              </h3>
              <p className="font-sans text-sm text-[#767676] mb-8 leading-relaxed">
                Provide cargo details for firm proforma pricing and vessel slot reservation. Guaranteed response within 24 hours.
              </p>

              {formSubmitted ? (
                <div className="p-8 rounded-2xl bg-[#E8F5E9] border-2 border-[#00813D] text-[#00813D] flex flex-col gap-4">
                  <div className="flex items-center gap-3 font-display text-2xl font-bold">
                    <span className="material-symbols-outlined text-[32px]">verified</span>
                    <span>Inquiry Registered Successfully</span>
                  </div>
                  <p className="font-sans text-sm text-[#2A2833] leading-relaxed">
                    Thank you, <span className="font-bold">{inquiryData.fullName || "Partner"}</span>. Our export desk has received your inquiry for <span className="font-bold">{inquiryData.commodity || "commodities"}</span>. A formal proforma quotation will be dispatched to <span className="font-bold">{inquiryData.email}</span> within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setFormSubmitted(false);
                      setInquiryData({
                        fullName: "",
                        email: "",
                        phone: "",
                        commodity: "",
                        destinationPort: "",
                        quantity: "",
                        incoterm: "CIF",
                        notes: "",
                      });
                    }}
                    className="self-start text-xs font-mono text-[#BB1515] font-bold hover:underline pt-2"
                  >
                    ← Submit another inquiry
                  </button>
                </div>
              ) : (
                <form className="space-y-5" onSubmit={handleInquirySubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="flex flex-col">
                      <label className="font-sans text-xs font-bold uppercase tracking-wider text-[#2A2833] mb-2" htmlFor="skanda-name">
                        Full Name *
                      </label>
                      <input
                        className="w-full bg-[#F8F9FA] px-4 py-3 border border-[#D9D9D9] rounded-xl focus:border-[#BB1515] focus:ring-2 focus:ring-[#BB1515]/20 focus:outline-none font-sans text-sm text-[#2A2833] transition-all"
                        id="skanda-name"
                        placeholder="e.g. David Vance"
                        required
                        type="text"
                        value={inquiryData.fullName}
                        onChange={(e) => setInquiryData({ ...inquiryData, fullName: e.target.value })}
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="font-sans text-xs font-bold uppercase tracking-wider text-[#2A2833] mb-2" htmlFor="skanda-email">
                        Corporate Email *
                      </label>
                      <input
                        className="w-full bg-[#F8F9FA] px-4 py-3 border border-[#D9D9D9] rounded-xl focus:border-[#BB1515] focus:ring-2 focus:ring-[#BB1515]/20 focus:outline-none font-sans text-sm text-[#2A2833] transition-all"
                        id="skanda-email"
                        placeholder="name@company.com"
                        required
                        type="email"
                        value={inquiryData.email}
                        onChange={(e) => setInquiryData({ ...inquiryData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="flex flex-col">
                      <label className="font-sans text-xs font-bold uppercase tracking-wider text-[#2A2833] mb-2" htmlFor="skanda-phone">
                        Phone &amp; WhatsApp Number *
                      </label>
                      <input
                        className="w-full bg-[#F8F9FA] px-4 py-3 border border-[#D9D9D9] rounded-xl focus:border-[#BB1515] focus:ring-2 focus:ring-[#BB1515]/20 focus:outline-none font-sans text-sm text-[#2A2833] transition-all"
                        id="skanda-phone"
                        placeholder="+971 50 123 4567"
                        required
                        type="tel"
                        value={inquiryData.phone}
                        onChange={(e) => setInquiryData({ ...inquiryData, phone: e.target.value })}
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="font-sans text-xs font-bold uppercase tracking-wider text-[#2A2833] mb-2" htmlFor="skanda-commodity">
                        Sourcing Commodity *
                      </label>
                      <select
                        className="w-full bg-[#F8F9FA] px-4 py-3 border border-[#D9D9D9] rounded-xl focus:border-[#BB1515] focus:ring-2 focus:ring-[#BB1515]/20 focus:outline-none font-sans text-sm text-[#2A2833] transition-all"
                        id="skanda-commodity"
                        required
                        value={inquiryData.commodity}
                        onChange={(e) => setInquiryData({ ...inquiryData, commodity: e.target.value })}
                      >
                        <option value="">Select Commodity Line</option>
                        <option value="Export Spices">Export Spices (Turmeric, Pepper, Chilli)</option>
                        <option value="Export Pulses">Export Pulses (Chickpeas, Moong, Toor)</option>
                        <option value="Export Rice">Export Rice (1121 Basmati &amp; Non-Basmati)</option>
                        <option value="Raw Cotton & Textiles">Raw Cotton &amp; Finished Textiles</option>
                        <option value="Agriculture Manure">Agriculture Manure &amp; Compost</option>
                        <option value="Agriculture Cocopeat">Agriculture Cocopeat Blocks</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    <div className="flex flex-col">
                      <label className="font-sans text-xs font-bold uppercase tracking-wider text-[#2A2833] mb-2" htmlFor="skanda-port">
                        Destination Port *
                      </label>
                      <input
                        className="w-full bg-[#F8F9FA] px-4 py-3 border border-[#D9D9D9] rounded-xl focus:border-[#BB1515] focus:ring-2 focus:ring-[#BB1515]/20 focus:outline-none font-sans text-sm text-[#2A2833] transition-all"
                        id="skanda-port"
                        placeholder="e.g. Jebel Ali / Rotterdam"
                        required
                        type="text"
                        value={inquiryData.destinationPort}
                        onChange={(e) => setInquiryData({ ...inquiryData, destinationPort: e.target.value })}
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="font-sans text-xs font-bold uppercase tracking-wider text-[#2A2833] mb-2" htmlFor="skanda-qty">
                        Target Quantity *
                      </label>
                      <input
                        className="w-full bg-[#F8F9FA] px-4 py-3 border border-[#D9D9D9] rounded-xl focus:border-[#BB1515] focus:ring-2 focus:ring-[#BB1515]/20 focus:outline-none font-sans text-sm text-[#2A2833] transition-all"
                        id="skanda-qty"
                        placeholder="e.g. 50 MT (2 FCL)"
                        required
                        type="text"
                        value={inquiryData.quantity}
                        onChange={(e) => setInquiryData({ ...inquiryData, quantity: e.target.value })}
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="font-sans text-xs font-bold uppercase tracking-wider text-[#2A2833] mb-2" htmlFor="skanda-incoterm">
                        Incoterm
                      </label>
                      <select
                        className="w-full bg-[#F8F9FA] px-4 py-3 border border-[#D9D9D9] rounded-xl focus:border-[#BB1515] focus:ring-2 focus:ring-[#BB1515]/20 focus:outline-none font-sans text-sm text-[#2A2833] transition-all"
                        id="skanda-incoterm"
                        value={inquiryData.incoterm}
                        onChange={(e) => setInquiryData({ ...inquiryData, incoterm: e.target.value })}
                      >
                        <option value="CIF">CIF (Discharge Port)</option>
                        <option value="FOB">FOB (Indian Port)</option>
                        <option value="CFR">CFR (Cost &amp; Freight)</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <label className="font-sans text-xs font-bold uppercase tracking-wider text-[#2A2833] mb-2" htmlFor="skanda-notes">
                      Packaging / Quality Notes
                    </label>
                    <textarea
                      rows={3}
                      className="w-full bg-[#F8F9FA] px-4 py-3 border border-[#D9D9D9] rounded-xl focus:border-[#BB1515] focus:ring-2 focus:ring-[#BB1515]/20 focus:outline-none font-sans text-sm text-[#2A2833] transition-all"
                      id="skanda-notes"
                      placeholder="Specify packing requirements, delivery timeline, or lab specs..."
                      value={inquiryData.notes}
                      onChange={(e) => setInquiryData({ ...inquiryData, notes: e.target.value })}
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      className="inline-flex items-center gap-3 bg-[#BB1515] hover:bg-[#2A2833] text-white font-sans text-sm font-bold uppercase tracking-wider px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:scale-105"
                      type="submit"
                    >
                      <span className="material-symbols-outlined text-[18px]">anchor</span>
                      <span>Submit Export Quotation Request</span>
                      <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Right: Direct Port Desk Details (5 Cols) */}
            <div className="lg:col-span-5 bg-[#2A2833] text-white p-8 lg:p-12 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-[#373737]">
              <div>
                <span className="inline-flex items-center gap-1.5 font-sans text-xs font-bold uppercase tracking-widest text-[#F7C600] mb-2">
                  <span className="material-symbols-outlined text-[18px]">anchor</span>
                  <span>PORT FACILITY DESK</span>
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-semibold text-white mb-4">
                  Visakhapatnam Maritime Operations
                </h3>
                <p className="font-sans text-sm text-[#BFBFBF] mb-8 leading-relaxed">
                  Direct quay transshipment, refrigerated container staging, and priority customs liaison at Berth 04 (INVTZ1).
                </p>

                <div className="space-y-4 font-sans text-xs text-[#BFBFBF] pt-2">
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[20px] text-[#F7C600] shrink-0 mt-0.5">location_on</span>
                    <span>12 Port Road, Visakhapatnam, Andhra Pradesh 530035, India</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[20px] text-[#F7C600] shrink-0">call</span>
                    <span>+91 98765 43210 / +91 891 234 5678</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[20px] text-[#F7C600] shrink-0">mail</span>
                    <span>export@svmrexports.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[20px] text-[#F7C600] shrink-0">schedule</span>
                    <span>Mon – Sat: 08:30 – 18:30 IST (24/7 Vessel Loading Operations)</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 mt-8">
                <div className="flex items-center gap-2 font-mono text-xs text-[#F7C600] mb-1 font-bold">
                  <span className="w-2 h-2 rounded-full bg-[#00813D] inline-block animate-pulse" />
                  <span>24-HR PROFORMA SLA GUARANTEE</span>
                </div>
                <p className="font-sans text-[11px] text-[#BFBFBF] leading-relaxed">
                  We reply with verified FOB or CIF quotation sheets and certified lab specs within 24 hours of commercial inquiry.
                </p>
              </div>
            </div>
          </div>

          {/* Corridor Bottom Bar */}
          <div className="pt-8 border-t border-[#D9D9D9] max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#767676]">
            <div className="flex items-center gap-2 text-[#BB1515] font-bold">
              <span className="material-symbols-outlined text-[16px]">anchor</span>
              <span>Visakhapatnam Sea Port (VPA) Quay · INVTZ1 Berth 04</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00813D]" />
              <span>APEDA, DGFT &amp; Spices Board of India Registered</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
