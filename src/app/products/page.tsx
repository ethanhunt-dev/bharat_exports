"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { useQuoteModal } from "@/context/QuoteModalContext";
import PageBanner from "@/components/PageBanner";
import { useData } from "@/context/DataContext";

interface Product {
  id: string;
  name: string;
  category: "spices" | "grains" | "textiles" | "dry-fruits" | "pulses";
  categoryLabel: string;
  categoryColor: string;
  hsCode: string;
  description: string;
  imgUrl: string;
  grade: string;
  specs: { label: string; value: string }[];
  packaging: string;
  moq: string;
  isOrganic?: boolean;
}

const PRODUCTS: Product[] = [
  {
    id: "1121-basmati",
    name: "Basmati Rice (1121 Steam)",
    category: "grains",
    categoryLabel: "Rice & Grains",
    categoryColor: "text-primary",
    hsCode: "HS: 1006.30.20",
    description: "Authentic Himalayan-fed long grain rice celebrated for exceptional elongation and delicate floral aroma.",
    imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAXQB_uAwcUxEQ3J4a2im6mDV2f3vNL13-ckns1EIDdVLBkHpCjSC1Zw6pSyb9NUd9m2Qo0on5QO11R0bOjo6vKMCkAEEoUMg5xmNEDpHqMI-gsDegEUNWsOyx9OtFTd282Xs3Xjmco7irfqk5hIwSompc2irpeJbIPdS54KF3-zGEMXqtTQ1HzzQ6gOoHhi09vBx96ATGl6VEnPVaflBvSQvmYUCwCX63ClKHXtWsyytZMzKk0hgb9",
    grade: "sortex",
    specs: [
      { label: "Avg Grain Length:", value: "8.35 mm+ (Extra Long)" },
      { label: "Moisture Content:", value: "< 12.5% Max" },
      { label: "Purity Index:", value: "100% Sortex Clean" },
    ],
    packaging: "25 kg & 50 kg PP / Jute Bags",
    moq: "20 MT (1 x 20ft FCL)",
  },
  {
    id: "organic-turmeric",
    name: "Turmeric Powder & Fingers",
    category: "spices",
    categoryLabel: "Spices",
    categoryColor: "text-secondary",
    hsCode: "HS: 0910.30.20",
    description: "High-potency golden turmeric ground under cold cryogenic conditions from selected Indian Alleppey & Salem fingers.",
    imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCWj0oj3BiHUGLOb3ooKiP_77oFfCggM2i95NN4WPQvnrzZU8y11NrMd7rvXuXi6VpthJi7_KPQu-mZ5I3koOC4hOLML8J3CmvvCWrCXnNZWmZtsEvje4Z432y5jfsSlI4c8VAwmNZapMOZ6E0dn7lseFdqN4kKnhEO489wfJt6ZTtwVT3z9pthFslLqzGp2fjEdq6NLr-KIrewCuHP-gVaibaULccZyht6rdWx57J4RjEPJF02FRXr",
    grade: "prime",
    isOrganic: true,
    specs: [
      { label: "Curcumin Active:", value: "3.5% – 5.2% Standard" },
      { label: "Regional Grade:", value: "Alleppey / Salem Select" },
      { label: "Lab Testing:", value: "Heavy Metals < 0.1ppm" },
    ],
    packaging: "25 kg Multi-ply Kraft & PP",
    moq: "5 MT (Air/Sea Consolidation)",
  },
  {
    id: "tellicherry-pepper",
    name: "Malabar Black Pepper (Tellicherry)",
    category: "spices",
    categoryLabel: "Spices",
    categoryColor: "text-secondary",
    hsCode: "HS: 0904.11.20",
    description: "Kerala estate-grown whole black peppercorns offering bold pungent heat, rich essential oils, and high piperine concentration.",
    imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCqs9kPDlWf3u3LfNSfJY68a77tQWlO7YDEUGLxTmbNP4DPHejc-6YoB3aJvoossSluD0oSQ441Tmr-Uo9YGfTWF4XuT8mDjAyV9UyRBa0JaitqSPOTr40kqXH2GnobLOSA7M-2iyzDvs7ARfIZ6FR_bRtnsogJT3cjgPQINDjlYit20R-MgvBAD_bV5aQSes4JJTfDA9ARQhj-zMAl0aTw7osi0NQq3HWNEw92api0EQz7ms_LCHTA",
    grade: "sortex",
    specs: [
      { label: "Density / Spec:", value: "550 – 580 G/L (GL Rating)" },
      { label: "Sterilisation:", value: "Steam Cleaned (ETO Free)" },
      { label: "Piperine Level:", value: "> 5.5% HPLC Tested" },
    ],
    packaging: "25 kg / 50 kg Food-Grade Jute",
    moq: "5 MT",
  },
  {
    id: "cotton-fabrics",
    name: "Combed Cotton Fabrics & Yarns",
    category: "textiles",
    categoryLabel: "Textiles",
    categoryColor: "text-primary",
    hsCode: "HS: 5208.12.00",
    description: "Institutional apparel-grade woven raw greige and finished pure Indian cotton fabrics woven from Gujarat Shankar-6 bales.",
    imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAvvxIWrEefF6mGCC-rlPPthfOOmMyxR21jM_yEeuRhKqpQSOAb0pxGMRlbMZZAquiaXAiRbBx4YIJzXq0mY5pRdjdG0dTnf8p529lFwMXu0IVrLt6xUydpE-0tvoGcn3NAbu0Uo9KeRdVmjYcZpFXS04L_fc1GCeFbvSE_ZABeP6K34S7R7H92S3cT5U07P9tKdxtY4DCKrNibge8AmgYn5yDc1cT6jxxvJd05Bhq2WDgB52a8Ia4e",
    grade: "prime",
    specs: [
      { label: "Yarn Count:", value: "40s x 40s / 60s Compact" },
      { label: "Weave Types:", value: "Plain, Twill, Oxford Weave" },
      { label: "Fibre Origin:", value: "100% Shankar-6 Cotton" },
    ],
    packaging: "Water-tight Polythene Tube Rolls",
    moq: "5,000 Running Meters",
  },
  {
    id: "cashews",
    name: "Cashew Kernels (W320 & W240)",
    category: "dry-fruits",
    categoryLabel: "Dry Fruits",
    categoryColor: "text-secondary",
    hsCode: "HS: 0801.32.10",
    description: "Sortex-processed, nitrogen-flushed white whole cashew nuts sourced from coastal groves, vacuum sealed for trans-oceanic shelf life.",
    imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuC0UzSMLad3rUjESVTex5E_LqQf9C_iKNTh23QzXvQ5V3Tl7Y3psUrbrYSH85rGof5TsG75yEwBTkZ3CBXumYfZMRd4me1kRbI0mrTQW-YQ-tnt-u0589eJ_iYwwKjASt_QKji51KyrJngY-jAMyAS5ojKhffkBLZ7EiocMccxtqFaYyEwRfNPGt0WHshR8-DseXVrdZlJVZICGaCoKMbs9LUE2KG6wetc1uCShtxdHnqCMT7YWJvra",
    grade: "sortex",
    specs: [
      { label: "Kernels / lb:", value: "300 – 320 Wholes / lb" },
      { label: "Moisture Max:", value: "< 4.8% Controlled" },
      { label: "Quality Standard:", value: "CEPC & AFI Grade Compliant" },
    ],
    packaging: "2 x 10kg Vacuum Tins / Carton",
    moq: "3 MT",
  },
  {
    id: "guntur-chilli",
    name: "Guntur Red Chilli (S17 & Teja)",
    category: "spices",
    categoryLabel: "Spices",
    categoryColor: "text-secondary",
    hsCode: "HS: 0904.21.10",
    description: "Fiery Andhra red chillies known worldwide for high capsaicin content, glossy scarlet pods, and natural red ASTA hue.",
    imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDpm1-aj0m9mF7ymDL5IzH1J7Q8F9z37Mc7JOxWfbpRol1tB4h-do3ysqar_IyMo4kMAPghByL7ZxAcx4QTqzAaJIGir6SSc-yGR3SbTpV0zrL6bR1Q5AYBW5Dg5qT0sK5mBVAIv0XjZe1i5960z-DyVv5U9mgUGQsrBq8bttRWTWxbK-JLvQYZjEDiz_hoDPN-TMMfyeyaiobNup-sa3IkjnbysEA2J1aOgRNqlmYWl_TDwDxkNNS-",
    grade: "sortex",
    specs: [
      { label: "Heat Level:", value: "50,000 – 75,000 SHU (Teja)" },
      { label: "Color ASTA:", value: "60 – 80 ASTA Units" },
      { label: "Stem Form:", value: "Stemless / With Stem Option" },
    ],
    packaging: "20 kg & 25 kg Compressed Jute",
    moq: "10 MT (1 x 40ft HC FCL)",
  },
  {
    id: "sona-masoori",
    name: "Sona Masoori Rice (Raw / Steam)",
    category: "grains",
    categoryLabel: "Rice & Grains",
    categoryColor: "text-primary",
    hsCode: "HS: 1006.30.10",
    description: "Medium-grain aromatic rice grown along the Krishna and Godavari river basins, lightweight, low-starch, and double Sortex cleaned.",
    imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCKfLO8J-9TjPcSiEDKLZy74vhjr1NLr2F-6TvXFM1jI93X1EPdVptVQhuyClmkxJVF5ZRhz56Kh38wgxtr9wEAw9Wz-LSrTGRVRI9lVLNSzEWT8uJNm8OAJ_GgkAbHBdgzN1tapv2sSf_w1hhtzHJ3-avEUCm9h9AavOGbx18-HMJ4TVHgLCI4AhciLJyfMIScbbrdHiYMfXqchPkNNt_2gpLEKOAyLWXSzyu4xGnl1_cKHzRYv2Hw",
    grade: "machine-cleaned",
    specs: [
      { label: "Grain Type:", value: "Medium Slender Raw / Steam" },
      { label: "Broken Ratio:", value: "< 5.0% Max" },
      { label: "Moisture:", value: "< 13.0% Certified" },
    ],
    packaging: "25kg / 50kg BOPP & PP Bags",
    moq: "25 MT (1 x 20ft FCL)",
  },
  {
    id: "pulses-oilseeds",
    name: "Non-GMO Soybeans & Sesame Seeds",
    category: "pulses",
    categoryLabel: "Pulses & Oilseeds",
    categoryColor: "text-secondary",
    hsCode: "HS: 1201.90.00",
    description: "Premium oilseeds and machine cleaned split pulses with verified protein content, phytosanitary fumigation, and zero genetic modification.",
    imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBFTT4b8SjJu_8477qcjkbGCBo4VlfDFzTmgkzPqu5mwLYeSLxla7dRmKLD1-Qs7TvTvMUqFYEiRlsWtGzdIDKo17s-w4GtZFStBDMTPl77S4w9lwm2Zc7uO7tRSbcc0iALC-ZjtUWz0mNLcLFDSPpftDUoQ_kWcHqVWXz49P1w_c4iS5iofQPXkx2alJf39X5vZNuPY_Tq3KDCtDQxrW8uqsN0olwpIZazyso8SfI52S_FXCpdzGyt",
    grade: "sortex",
    isOrganic: true,
    specs: [
      { label: "Purity Level:", value: "99.5% Minimum Purity" },
      { label: "Oil Content:", value: "> 18.5% Oil / > 38% Protein" },
      { label: "Moisture:", value: "< 10.0% Cold Storage" },
    ],
    packaging: "50kg Jute Bags / Bulk Liners",
    moq: "20 MT",
  },
];

export default function ProductsPage() {
  const { openQuoteModal } = useQuoteModal();
  const { products } = useData();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedGrade, setSelectedGrade] = useState<string>("all");
  const [organicOnly, setOrganicOnly] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("popularity");
  const [specDownloaded, setSpecDownloaded] = useState<boolean>(false);

  const categories = [
    { id: "all", label: "All Commodities", count: products.length },
    { id: "spices", label: "Spices", count: products.filter((p) => p.category === "spices").length },
    { id: "grains", label: "Rice & Grains", count: products.filter((p) => p.category === "grains").length },
    { id: "textiles", label: "Textiles & Cotton", count: products.filter((p) => p.category === "textiles").length },
    { id: "dry-fruits", label: "Dry Fruits & Nuts", count: products.filter((p) => p.category === "dry-fruits").length },
    { id: "pulses", label: "Pulses & Oilseeds", count: products.filter((p) => p.category === "pulses").length },
  ];

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      if (selectedCategory !== "all" && p.category !== selectedCategory) {
        return false;
      }
      if (selectedGrade !== "all" && p.grade !== selectedGrade) {
        return false;
      }
      if (organicOnly && !p.isOrganic) {
        return false;
      }
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const match =
          p.name.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query) ||
          p.hsCode.toLowerCase().includes(query) ||
          p.categoryLabel.toLowerCase().includes(query);
        if (!match) return false;
      }
      return true;
    });
  }, [products, selectedCategory, selectedGrade, organicOnly, searchQuery]);

  const handleDownloadSpec = () => {
    setSpecDownloaded(true);
    setTimeout(() => setSpecDownloaded(false), 4000);
  };

  const handleResetFilters = () => {
    setSelectedCategory("all");
    setSelectedGrade("all");
    setOrganicOnly(false);
    setSearchQuery("");
  };

  return (
    <div className="flex flex-col w-full">
      {/* 1. Cinematic Luxury Agricultural Page Banner */}
      <PageBanner
        title="Products"
        eyebrow="BHARAT GLOBAL EXPORTS · INSTITUTIONAL CATALOGUE"
        breadcrumbCurrent="Products"
        bgImage="/images/products_banner_spices.jpg"
        description="Government Recognized Three-Star Export House providing institutional grades, guaranteed phytosanitary compliance, and direct Visakhapatnam port transshipment."
        metaBadge={{
          label: "PORT CLEARANCE",
          value: "INVTZ1 · SGS & APEDA VERIFIED",
        }}
      />

      {/* 2. Main Catalog Layout */}
      <section className="w-full bg-surface py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-10 items-start">
            {/* STICKY LEFT SIDEBAR */}
            <aside className="w-full lg:w-[280px] shrink-0 lg:sticky lg:top-[140px] flex flex-col gap-8">
              {/* Search Box */}
              <div className="bg-surface-container-low rounded p-4 shadow-sm">
                <label htmlFor="search-input" className="font-label-md text-label-md text-on-surface block mb-1.5">
                  Search Commodities
                </label>
                <div className="relative">
                  <input
                    id="search-input"
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="e.g. Pepper, Basmati, S17..."
                    className="w-full bg-surface border border-secondary/30 rounded px-3 py-2 text-sm text-on-surface focus:outline-none focus:border-primary pr-8"
                  />
                  {searchQuery ? (
                    <button
                      type="button"
                      onClick={() => setSearchQuery("")}
                      className="absolute right-2.5 top-2.5 text-on-surface-variant hover:text-on-surface"
                    >
                      <span className="material-symbols-outlined text-[16px]">close</span>
                    </button>
                  ) : (
                    <span className="material-symbols-outlined absolute right-2.5 top-2.5 text-on-surface-variant text-[16px] pointer-events-none">
                      search
                    </span>
                  )}
                </div>
              </div>

              {/* Category Filter Module (Gleaming 916 KDM Gold Accents) */}
              <div className="bg-[#FAF5EC] border-2 border-[#E5B80B]/40 rounded-2xl p-6 shadow-sm flex flex-col">
                <div className="flex items-center justify-between pb-3 mb-5 border-b border-[#E5B80B]/30">
                  <h2 className="font-headline-sm text-headline-sm text-on-surface tracking-tight font-bold">
                    Categories
                  </h2>
                  <span className="w-12 h-1.5 bg-gradient-to-r from-[#FFE873] via-[#E5B80B] to-[#C59318] rounded-full shadow-xs" />
                </div>
                <ul className="flex flex-col gap-2.5 font-body-md text-body-md">
                  {categories.map((cat) => {
                    const active = selectedCategory === cat.id;
                    return (
                      <li key={cat.id}>
                        <button
                          type="button"
                          onClick={() => setSelectedCategory(cat.id)}
                          className={`w-full group flex items-center justify-between px-4 py-3.5 rounded-xl font-bold transition-all duration-300 shadow-xs border-2 ${
                            active
                              ? "bg-[#004f22] text-white border-[#E5B80B] shadow-[0_4px_20px_rgba(229,184,11,0.35)] scale-[1.02]"
                              : "bg-white text-on-surface border-[#D8CEBC] hover:bg-[#004f22] hover:text-white hover:border-[#E5B80B] hover:shadow-[0_4px_18px_rgba(229,184,11,0.3)] hover:scale-[1.02]"
                          }`}
                        >
                          <div className="flex items-center gap-2.5">
                            <span className="text-sm tracking-wide">
                              {cat.label}
                            </span>
                            <span
                              className={`font-data-mono text-xs px-2.5 py-0.5 rounded-full transition-all font-black shadow-xs ${
                                active
                                  ? "bg-gradient-to-r from-[#FFE873] via-[#E5B80B] to-[#C59318] text-[#0A1E13]"
                                  : "bg-[#F3EDE0] text-on-surface-variant group-hover:bg-gradient-to-r group-hover:from-[#FFE873] group-hover:via-[#E5B80B] group-hover:to-[#C59318] group-hover:text-[#0A1E13]"
                              }`}
                            >
                              {cat.count}
                            </span>
                          </div>
                          <span
                            className={`material-symbols-outlined text-[19px] transition-all duration-300 font-bold ${
                              active
                                ? "text-[#E5B80B] translate-x-1"
                                : "text-on-surface-variant/60 group-hover:text-[#E5B80B] group-hover:translate-x-1.5"
                            }`}
                          >
                            arrow_forward
                          </span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Secondary Filters */}
              <div className="bg-surface-container-low rounded p-6 shadow-sm flex flex-col gap-6">
                <div className="flex items-center justify-between pb-2">
                  <span className="font-eyebrow-bold text-eyebrow-bold uppercase tracking-widest text-secondary">
                    Export Refinements
                  </span>
                  <button
                    onClick={handleResetFilters}
                    className="font-label-md text-label-md text-on-surface-variant hover:text-primary underline"
                    type="button"
                  >
                    Reset
                  </button>
                </div>
                {/* Grade Selector */}
                <div className="flex flex-col gap-2">
                  <label className="font-label-md text-label-md text-on-surface font-semibold" htmlFor="filter-grade">
                    Processing Grade
                  </label>
                  <select
                    className="w-full bg-surface-container text-on-surface font-body-sm text-body-sm px-3 py-2 rounded focus:outline-none focus:bg-surface"
                    id="filter-grade"
                    value={selectedGrade}
                    onChange={(e) => setSelectedGrade(e.target.value)}
                  >
                    <option value="all">All Export Grades</option>
                    <option value="sortex">Sortex 100% Clean</option>
                    <option value="machine-cleaned">Machine Cleaned (99% Purity)</option>
                    <option value="prime">Prime Select Institutional</option>
                  </select>
                </div>

                {/* Certified Organic Checkbox */}
                <div className="pt-2 bg-surface-container-high/50 p-3 rounded flex flex-col gap-2">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      checked={organicOnly}
                      onChange={(e) => setOrganicOnly(e.target.checked)}
                      className="w-4 h-4 rounded accent-primary cursor-pointer"
                      type="checkbox"
                    />
                    <div className="flex flex-col">
                      <span className="font-label-md text-label-md text-primary font-bold">
                        100% Certified Organic
                      </span>
                      <span className="font-data-mono text-data-mono text-on-surface-variant text-xs">
                        NPOP / USDA / EU Equivalency
                      </span>
                    </div>
                  </label>
                </div>
              </div>

              {/* Spec Sheet Download Button */}
              <div>
                <button
                  type="button"
                  onClick={handleDownloadSpec}
                  className="w-full bg-surface-container text-primary hover:bg-secondary hover:text-surface-container-lowest transition-all p-4 rounded flex items-center justify-between group shadow-sm text-left"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded bg-secondary-fixed/50 group-hover:bg-surface-bright/20 flex items-center justify-center text-secondary group-hover:text-surface-bright transition-colors">
                      <span className="material-symbols-outlined text-[22px]">picture_as_pdf</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-label-md text-label-md font-bold uppercase tracking-wider leading-snug">
                        Product Spec Sheets
                      </span>
                      <span className="font-data-mono text-data-mono opacity-80 text-xs">
                        {specDownloaded ? "Downloaded 2026 Matrix ✓" : "Full 2026 Export Matrix (8.4 MB)"}
                      </span>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-[18px] group-hover:translate-y-0.5 transition-transform">
                    {specDownloaded ? "check" : "download"}
                  </span>
                </button>
                {specDownloaded && (
                  <p className="text-xs text-primary font-data-mono mt-1.5 px-2">
                    ✓ Official SVMR technical specification matrix generated.
                  </p>
                )}
              </div>

              {/* Dispatch Compliance Badge */}
              <div className="bg-surface-container-highest p-4 rounded text-on-surface-variant flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary text-[26px]">verified</span>
                <div className="flex flex-col">
                  <span className="font-eyebrow-bold text-eyebrow-bold uppercase tracking-wider text-on-surface">
                    APEDA &amp; Spices Board
                  </span>
                  <span className="font-data-mono text-data-mono text-xs">
                    Government RCMC Certified Exporter
                  </span>
                </div>
              </div>
            </aside>

            {/* RIGHT MAIN CONTENT */}
            <main className="flex-1 w-full flex flex-col">
              {/* Top Utility Bar */}
              <div className="w-full bg-surface-container-low rounded p-4 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm">
                <div className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-primary" />
                  <span className="font-body-md text-body-md text-on-surface font-medium">
                    Showing <strong className="text-primary font-bold">{filteredProducts.length}</strong> export commodities ready for vessel booking
                  </span>
                </div>
                {/* Sort By Dropdown */}
                <div className="flex items-center gap-2 self-end sm:self-auto">
                  <label className="font-label-md text-label-md text-on-surface-variant shrink-0" htmlFor="catalog-sort">
                    Sort By:
                  </label>
                  <div className="relative">
                    <select
                      className="bg-surface text-on-surface font-label-md text-label-md px-3 py-1.5 rounded focus:outline-none cursor-pointer pr-8"
                      id="catalog-sort"
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                    >
                      <option value="popularity">Popularity (Most Inquired)</option>
                      <option value="grade">Processing Grade (Sortex First)</option>
                      <option value="moq-asc">MOQ: Low to High</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-2 top-2 text-[16px] pointer-events-none text-on-surface-variant">
                      expand_more
                    </span>
                  </div>
                </div>
              </div>

              {/* Product Grid */}
              {filteredProducts.length === 0 ? (
                <div className="p-12 text-center bg-surface-container-low rounded-lg border border-outline-variant/30">
                  <span className="material-symbols-outlined text-[48px] text-secondary mb-3">search_off</span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">
                    No matching commodities found
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                    Try adjusting your category selection, removing the organic filter, or resetting search keywords.
                  </p>
                  <button
                    type="button"
                    onClick={handleResetFilters}
                    className="bg-primary text-on-primary font-label-md text-label-md px-6 py-2 rounded"
                  >
                    Reset All Filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
                  {filteredProducts.map((product) => (
                    <article
                      key={product.id}
                      className="bg-surface-container-low rounded flex flex-col h-full shadow-sm hover:shadow-md transition-shadow group relative border border-secondary/20 hover:border-secondary/50"
                    >
                      <div className="relative w-full h-56 overflow-hidden rounded-t bg-surface-dim">
                        <img
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          alt={product.name}
                          src={product.imgUrl}
                        />
                        <div className="absolute top-3 left-3 bg-surface-bright/95 backdrop-blur-sm px-2.5 py-1 rounded shadow-xs">
                          <span className={`font-eyebrow-bold text-eyebrow-bold uppercase tracking-wider ${product.categoryColor}`}>
                            {product.categoryLabel}
                          </span>
                        </div>
                        <div className="absolute bottom-3 right-3 bg-on-primary-fixed/90 text-surface-bright px-2 py-0.5 rounded font-data-mono text-data-mono text-xs">
                          {product.hsCode}
                        </div>
                      </div>
                      <div className="p-6 flex flex-col flex-1 justify-between gap-5">
                        <div>
                          <div className="flex items-center justify-between">
                            <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors">
                              {product.name}
                            </h3>
                          </div>
                          <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                            {product.description}
                          </p>
                          <div className="mt-4 pt-4 bg-surface-container/60 p-3 rounded flex flex-col gap-2 font-body-sm text-body-sm">
                            {product.specs.map((spec, idx) => (
                              <div key={idx} className="flex justify-between items-center text-on-surface">
                                <span className="text-on-surface-variant font-label-md text-label-md">
                                  {spec.label}
                                </span>
                                <span className="font-data-mono text-data-mono font-bold">
                                  {spec.value}
                                </span>
                              </div>
                            ))}
                          </div>
                          <div className="mt-4 flex flex-col gap-1.5 font-body-sm text-body-sm">
                            <p className="flex items-start gap-1.5 text-on-surface">
                              <span className="material-symbols-outlined text-[16px] text-secondary shrink-0 mt-0.5">
                                inventory_2
                              </span>
                              <span>
                                <strong>Packaging:</strong> {product.packaging}
                              </span>
                            </p>
                            <p className="flex items-start gap-1.5 text-on-surface">
                              <span className="material-symbols-outlined text-[16px] text-secondary shrink-0 mt-0.5">
                                local_shipping
                              </span>
                              <span>
                                <strong>Order MOQ:</strong> {product.moq}
                              </span>
                            </p>
                          </div>
                        </div>
                        <div className="pt-2">
                          <button
                            type="button"
                            onClick={() => openQuoteModal(product.id)}
                            className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded bg-surface-container text-primary font-label-md text-label-md hover:bg-secondary hover:text-surface-bright transition-colors shadow-xs"
                          >
                            <span>Enquire Specification</span>
                            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                          </button>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </main>
          </div>
        </div>
      </section>
    </div>
  );
}
