"use client";

import React, { useState } from "react";

interface PortRoute {
  id: string;
  name: string;
  country: string;
  region: string;
  transitTime: string;
  coords: { x: number; y: number }; // Percentage on SVG map
  pathD: string; // SVG curve path from Vizag (x: 670, y: 260)
  commodities: string;
}

const ORIGIN = {
  name: "Port of Visakhapatnam (HQ)",
  country: "India",
  coords: { x: 672, y: 262 },
  status: "Primary Deepwater Transshipment Hub",
};

const ROUTES: PortRoute[] = [
  {
    id: "jebel-ali",
    name: "Port of Jebel Ali",
    country: "United Arab Emirates",
    region: "Middle East & GCC",
    transitTime: "7 - 9 Days",
    coords: { x: 558, y: 242 },
    // Quadratic bezier curve from Vizag (672, 262) to Jebel Ali (558, 242)
    pathD: "M 672 262 Q 610 280 558 242",
    commodities: "1121 Basmati Rice, Guntur S17 Chillies, Dry Fruits",
  },
  {
    id: "rotterdam",
    name: "Port of Rotterdam",
    country: "Netherlands",
    region: "European Union",
    transitTime: "22 - 25 Days",
    coords: { x: 472, y: 165 },
    // Route from Vizag around Arabian Sea & Red Sea corridor to North Sea
    pathD: "M 672 262 Q 520 250 485 200 T 472 165",
    commodities: "High-Curcumin Turmeric, Organic Black Pepper, Combed Cotton",
  },
  {
    id: "newark",
    name: "Port of New York / Newark",
    country: "United States",
    region: "North America",
    transitTime: "28 - 32 Days",
    coords: { x: 268, y: 182 },
    // Transatlantic corridor
    pathD: "M 672 262 Q 450 300 340 220 T 268 182",
    commodities: "US-FDA Approved Spices, Value-Added Extracts, W180 Cashews",
  },
  {
    id: "singapore",
    name: "Port of Singapore",
    country: "Singapore",
    region: "Southeast Asia & APAC",
    transitTime: "5 - 7 Days",
    coords: { x: 745, y: 310 },
    // Bay of Bengal & Malacca Strait
    pathD: "M 672 262 Q 700 290 745 310",
    commodities: "Raw Agro Commodities, Pulses, Refined Spices",
  },
  {
    id: "durban",
    name: "Port of Durban",
    country: "South Africa",
    region: "Southern Africa",
    transitTime: "14 - 16 Days",
    coords: { x: 526, y: 395 },
    // Indian Ocean south route
    pathD: "M 672 262 Q 610 340 526 395",
    commodities: "Parboiled Rice, Spices, Institutional Packing Goods",
  },
];

export default function WorldTradeRoutes() {
  const [activeRoute, setActiveRoute] = useState<string>("rotterdam");
  const selected = ROUTES.find((r) => r.id === activeRoute) || ROUTES[0];

  return (
    <section className="w-full py-24 bg-gradient-to-b from-[#0B281D] via-[#123D2B] to-[#0B281D] border-y border-[#C5A15B]/30 relative overflow-hidden text-surface">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[500px] bg-[#E5B80B]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#1C543B]/60 border border-[#C5A15B]/40 text-[#E5B80B] text-xs font-bold uppercase tracking-[0.25em] mb-4">
            <span className="w-2 h-2 rounded-full bg-[#E5B80B] animate-ping" />
            Global Maritime Reach
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F7F4EB] leading-[1.18]">
            Strategic Transshipment Across <span className="text-[#E5B80B]">40+ Global Ports</span>
          </h2>
          <p className="mt-4 text-[#DDD4BF] text-base sm:text-lg font-light leading-relaxed">
            Operating from the deepwater terminal of Visakhapatnam Port with guaranteed cold-chain integrity,
            FMC-bonded bill of lading, and verified customs pre-clearance worldwide.
          </p>
        </div>

        {/* Interactive SVG Maritime Map Container */}
        <div className="w-full bg-[#081F16]/90 border border-[#C5A15B]/30 rounded-2xl p-4 sm:p-8 shadow-2xl relative">
          {/* Top Controls / Ports Selector Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-[#C5A15B]/20 mb-6">
            <div className="flex items-center gap-3">
              <span className="inline-block w-3 h-3 rounded-full bg-[#E5B80B] shadow-[0_0_10px_#E5B80B]" />
              <span className="text-xs uppercase tracking-widest text-[#F7F4EB] font-bold">
                Origin Anchor: Visakhapatnam Deepwater Port (17.68° N, 83.21° E)
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
              {ROUTES.map((route) => (
                <button
                  key={route.id}
                  onClick={() => setActiveRoute(route.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-300 ${
                    activeRoute === route.id
                      ? "bg-[#E5B80B] text-[#0B281D] font-bold shadow-md shadow-[#E5B80B]/20 scale-105"
                      : "bg-[#123D2B]/80 text-[#DDD4BF] hover:text-white hover:bg-[#1C543B] border border-[#C5A15B]/20"
                  }`}
                >
                  {route.country}
                </button>
              ))}
            </div>
          </div>

          {/* SVG Map Canvas */}
          <div className="relative w-full aspect-[2/1] sm:aspect-[2.2/1] max-h-[500px] overflow-hidden rounded-xl bg-[#061710] border border-[#C5A15B]/15">
            <svg
              viewBox="0 0 1000 500"
              className="w-full h-full select-none"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                {/* Nautical Grid Pattern */}
                <pattern
                  id="trade-grid"
                  width="50"
                  height="50"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 50 0 L 0 0 0 50"
                    fill="none"
                    stroke="#1C543B"
                    strokeWidth="0.5"
                    strokeOpacity="0.4"
                  />
                </pattern>

                {/* Glowing Trade Route Gradient */}
                <linearGradient id="routeGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#C5A15B" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#E5B80B" stopOpacity="1" />
                  <stop offset="100%" stopColor="#FDE047" stopOpacity="0.8" />
                </linearGradient>

                {/* Inactive Route Gradient */}
                <linearGradient id="inactiveRoute" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#C5A15B" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#C5A15B" stopOpacity="0.25" />
                </linearGradient>
              </defs>

              {/* Grid Background */}
              <rect width="1000" height="500" fill="url(#trade-grid)" />

              {/* Stylized Continents Outlines */}
              {/* North America */}
              <path
                d="M 120 100 Q 180 80 250 110 T 320 180 Q 280 260 220 280 T 160 230 Z"
                fill="#123D2B"
                fillOpacity="0.45"
                stroke="#C5A15B"
                strokeWidth="0.8"
                strokeOpacity="0.3"
              />
              {/* South America */}
              <path
                d="M 280 290 Q 330 330 340 400 T 290 470 Q 260 410 270 330 Z"
                fill="#123D2B"
                fillOpacity="0.4"
                stroke="#C5A15B"
                strokeWidth="0.8"
                strokeOpacity="0.25"
              />
              {/* Europe & Scandinavia */}
              <path
                d="M 450 120 Q 520 100 550 150 T 470 210 Q 430 180 450 120 Z"
                fill="#123D2B"
                fillOpacity="0.45"
                stroke="#C5A15B"
                strokeWidth="0.8"
                strokeOpacity="0.3"
              />
              {/* Africa */}
              <path
                d="M 460 220 Q 540 210 560 280 T 530 420 Q 470 410 450 310 Z"
                fill="#123D2B"
                fillOpacity="0.4"
                stroke="#C5A15B"
                strokeWidth="0.8"
                strokeOpacity="0.25"
              />
              {/* Asia & India */}
              <path
                d="M 560 140 Q 720 110 840 180 T 800 320 Q 710 340 650 310 T 570 240 Z"
                fill="#123D2B"
                fillOpacity="0.5"
                stroke="#C5A15B"
                strokeWidth="0.8"
                strokeOpacity="0.35"
              />
              {/* Australia */}
              <path
                d="M 790 350 Q 860 340 890 380 T 840 450 Q 780 430 790 350 Z"
                fill="#123D2B"
                fillOpacity="0.4"
                stroke="#C5A15B"
                strokeWidth="0.8"
                strokeOpacity="0.25"
              />

              {/* Inactive Maritime Routes (subtle background arcs) */}
              {ROUTES.filter((r) => r.id !== activeRoute).map((route) => (
                <g key={`inactive-${route.id}`}>
                  <path
                    d={route.pathD}
                    fill="none"
                    stroke="url(#inactiveRoute)"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                  />
                  <circle
                    cx={route.coords.x}
                    cy={route.coords.y}
                    r="4"
                    fill="#C5A15B"
                    fillOpacity="0.4"
                  />
                </g>
              ))}

              {/* Active Animated Maritime Trade Route */}
              <path
                d={selected.pathD}
                fill="none"
                stroke="url(#routeGlow)"
                strokeWidth="2.8"
                className="animate-trade-route"
                style={{
                  filter: "drop-shadow(0 0 6px rgba(229, 184, 11, 0.75))",
                }}
              />

              {/* Origin Hub (Visakhapatnam, India) */}
              <g transform={`translate(${ORIGIN.coords.x}, ${ORIGIN.coords.y})`}>
                {/* Pulsing ring */}
                <circle
                  r="14"
                  fill="none"
                  stroke="#E5B80B"
                  strokeWidth="1.5"
                  opacity="0.6"
                  className="animate-ping"
                />
                <circle
                  r="7"
                  fill="#E5B80B"
                  className="shadow-kdm-gold"
                />
                <circle r="3" fill="#0B281D" />
                <text
                  x="12"
                  y="-10"
                  fill="#FDE047"
                  fontSize="11"
                  fontWeight="bold"
                  letterSpacing="1"
                  className="font-sans"
                >
                  VISAKHAPATNAM (PORT HQ)
                </text>
              </g>

              {/* Active Destination Port Node */}
              <g transform={`translate(${selected.coords.x}, ${selected.coords.y})`}>
                <circle
                  r="12"
                  fill="none"
                  stroke="#FDE047"
                  strokeWidth="1.5"
                  opacity="0.8"
                  className="animate-ping"
                />
                <circle r="6" fill="#FDE047" />
                <circle r="2.5" fill="#0B281D" />
                <text
                  x="12"
                  y="-8"
                  fill="#F7F4EB"
                  fontSize="11"
                  fontWeight="bold"
                  className="font-sans"
                >
                  {selected.name.toUpperCase()}
                </text>
              </g>
            </svg>

            {/* Float Info Badge inside map */}
            <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-md bg-[#0B281D]/95 border border-[#C5A15B]/40 backdrop-blur-md rounded-xl p-4 shadow-xl">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#E5B80B]">
                    Active Transit Corridor
                  </span>
                  <h4 className="font-serif text-lg font-bold text-[#F7F4EB]">
                    {selected.name}
                  </h4>
                  <p className="text-xs text-[#DDD4BF] mt-0.5">
                    {selected.country} • {selected.region}
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-[10px] uppercase tracking-wider text-[#DDD4BF]">
                    Est. Ocean Transit
                  </span>
                  <div className="text-base font-bold text-[#E5B80B] font-mono">
                    {selected.transitTime}
                  </div>
                </div>
              </div>
              <div className="mt-2.5 pt-2 border-t border-[#C5A15B]/20 text-xs text-[#DDD4BF]">
                <strong className="text-[#F7F4EB]">Priority Cargo:</strong> {selected.commodities}
              </div>
            </div>
          </div>

          {/* Quick Route Highlights Footer */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <div className="bg-[#123D2B]/60 border border-[#C5A15B]/20 rounded-xl p-3.5 text-center">
              <span className="text-[10px] uppercase tracking-widest text-[#DDD4BF] block">
                Vessel Clearance
              </span>
              <span className="font-serif text-base font-bold text-[#E5B80B]">
                Pre-Berthing Priority
              </span>
            </div>
            <div className="bg-[#123D2B]/60 border border-[#C5A15B]/20 rounded-xl p-3.5 text-center">
              <span className="text-[10px] uppercase tracking-widest text-[#DDD4BF] block">
                Bill of Lading
              </span>
              <span className="font-serif text-base font-bold text-[#E5B80B]">
                FMC & FIATA Bonded
              </span>
            </div>
            <div className="bg-[#123D2B]/60 border border-[#C5A15B]/20 rounded-xl p-3.5 text-center">
              <span className="text-[10px] uppercase tracking-widest text-[#DDD4BF] block">
                Cargo Tracking
              </span>
              <span className="font-serif text-base font-bold text-[#E5B80B]">
                Real-Time Telematics
              </span>
            </div>
            <div className="bg-[#123D2B]/60 border border-[#C5A15B]/20 rounded-xl p-3.5 text-center">
              <span className="text-[10px] uppercase tracking-widest text-[#DDD4BF] block">
                Container Security
              </span>
              <span className="font-serif text-base font-bold text-[#E5B80B]">
                ISO 17712 High-Security Bolt
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
