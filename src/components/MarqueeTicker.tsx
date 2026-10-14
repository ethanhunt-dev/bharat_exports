"use client";

import React from "react";

const TICKER_ITEMS = [
  "1121 STEAM BASMATI RICE",
  "SALEM HIGH-CURCUMIN TURMERIC",
  "TELLICHERRY GARBLED BLACK PEPPER",
  "GUNTUR S17 TEJA RED CHILLI",
  "100% COMBED COTTON EXPORT FABRICS",
  "W180 - W320 CASHEW KERNELS",
  "APEDA & SPICES BOARD OF INDIA RECOGNIZED",
  "VISAKHAPATNAM PORT DEEPWATER BERTH 04",
  "US-FDA REGISTERED & CODEX COMPLIANT",
  "40+ GLOBAL DESTINATION PORTS CONNECTED",
  "INCOTERMS 2020: CIF / FOB / CFR",
  "LOT-LEVEL SGS & BUREAU VERITAS VERIFIED",
];

export default function MarqueeTicker() {
  return (
    <div className="w-full bg-[#0B281D] border-y-2 border-[#C5A15B]/35 py-3.5 overflow-hidden shadow-inner select-none relative z-10">
      <div className="animate-marquee flex items-center gap-8 whitespace-nowrap">
        {/* First set */}
        {TICKER_ITEMS.map((item, idx) => (
          <div key={`item-1-${idx}`} className="flex items-center gap-6">
            <span className="font-sans text-xs uppercase tracking-[0.22em] text-[#F7F4EB] font-bold">
              {item}
            </span>
            <span className="text-[#E5B80B] text-xs font-serif font-black">✦</span>
          </div>
        ))}

        {/* Duplicate set for seamless continuous loop */}
        {TICKER_ITEMS.map((item, idx) => (
          <div key={`item-2-${idx}`} className="flex items-center gap-6">
            <span className="font-sans text-xs uppercase tracking-[0.22em] text-[#F7F4EB] font-bold">
              {item}
            </span>
            <span className="text-[#E5B80B] text-xs font-serif font-black">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
