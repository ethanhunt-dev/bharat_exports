"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";

interface Article {
  id: string;
  slug: string;
  title: string;
  category: "regulations" | "logistics" | "quality";
  categoryLabel: string;
  tag: string;
  date: string;
  readTime: string;
  description: string;
  imgUrl: string;
  alt: string;
}

const ARTICLES: Article[] = [
  {
    id: "art-1",
    slug: "export-documentation-guide",
    title: "Understanding Incoterms: FOB vs CIF for Indian Port Dispatches",
    category: "regulations",
    categoryLabel: "Trade Regulations",
    tag: "INCOTERMS 2020",
    date: "08 OCT 2026",
    readTime: "6 min read",
    description: "What each term means for risk transfer, marine freight insurance, and buyer liability when shipping from Visakhapatnam.",
    imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCd__6GnhuwsK458gey_IRpVk3xiBGmV8WONCsrOUyJ9pUuiVPJHmcPCW59Tfny8m5IxgCHplr3NTUWdczFKttOZrv5WgjYo3vS9T6x3Xc2s1EAdWP4pSlnOESvzTJrwPo5pN6Q9NpbPubIdqRkbwQa3nEaigK8FgJBEmzbZpH4eyGYLeNkVJc6jxmZa1INNg3ZHy6iCWJpkLZK24KUmiYymOajFtT0BQc7FBzQHdRPop9OPtnihqRQ",
    alt: "Container cargo ship berthed at a deep-water ocean terminal",
  },
  {
    id: "art-2",
    slug: "export-documentation-guide",
    title: "Packaging Spices for Long Sea Voyages: Moisture Management",
    category: "quality",
    categoryLabel: "Quality & Logistics",
    tag: "BULK MOISTURE MGMT",
    date: "01 OCT 2026",
    readTime: "5 min read",
    description: "Engineering moisture barriers, silica desiccants, and container ventilation for tropical transits through Suez and the Indian Ocean.",
    imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDoErkVZ9KnlWpVO_fPPl5X3eQ2GiL6T-jIVrtJdsEsOMGR8FORSUkoByq94NvbxdUgASYzSGy1s5uO5dOLwte8Uss1hBqLyx0Msynp6IihkwnAPr4Ob3XVKL6wdeskOx8p_M2NL58FRgm3yl1Hjs5bP1I1tSh6VYDYkjeDwE7KUdFwIjI_S7TDP-G_V71ARzc9Rk--T0H8L3BdxWMEqaJWoHxynZ0XNK8GCe4AlcitQh6l4AkPqf2v",
    alt: "Burlap sacks filled with Indian whole spices inside an ocean container",
  },
  {
    id: "art-3",
    slug: "export-documentation-guide",
    title: "Top Export Destinations for Basmati Rice & European Import Quotas",
    category: "logistics",
    categoryLabel: "Market Intelligence",
    tag: "GLOBAL CORRIDORS",
    date: "24 SEP 2026",
    readTime: "7 min read",
    description: "Analyzing growing institutional demand across the GCC, EU, and North American consumer markets under prevailing tariff regimes.",
    imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDdMQw_KmCJvik_QKYuLzjelUSU4TphdJ2gSkwJCKA8Xjukp56gy89Udme7Wvrl4CejPHyXz0jld-SbTH3ZCceKfofpIDcBMCcR2eKxRphEh0RAkUiTjZBRtw1skDzvOcae8ihwij3eEyyoKHl1jqZ4K1kE8uczV2pwo6X6GWNva34R3ztzdx8ft9rDDgEBYOy10Ro3fJEIGUI0LiJW4gO8MwKtPvxscZSQwtIWS9BmssT7IgF-gK3e",
    alt: "Golden long-grain 1121 Basmati rice cascading from inspection scoop",
  },
  {
    id: "art-4",
    slug: "export-documentation-guide",
    title: "What Is an IEC Code and Why You Need One for Indian Clearance",
    category: "regulations",
    categoryLabel: "Compliance",
    tag: "DGFT LICENSING",
    date: "18 SEP 2026",
    readTime: "4 min read",
    description: "The fundamentals of Importer Exporter Code registration, ICEGATE portal integration, and statutory export compliance.",
    imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBhuAuBICEabSF3JVp9YR0ypiSgpMaVWII8bDdPQjhqvwLz2SEhJ0LhZuYtSfUuZ2vMqQ-ixN0SEE5ZwbIDrFROrTNCqkgAKIDJ0KElAfb0boZ9bAyGIl6Ub_yR2M_lW_bDR_rGXYlR6BmzAY0dxm_95hiMPzFMqMkyU32gj_vBDHyMZWOFBe4--C9M2BbDHXOOt9vfAcsogYqQ9MH1G_nUoXeXdxeHeq3TgyEJPStwi2hLb5XRvGRF",
    alt: "Official Indian foreign trade certification document with embossed stamp",
  },
  {
    id: "art-5",
    slug: "export-documentation-guide",
    title: "Choosing Between Sea and Air Freight for High-Value Spices",
    category: "logistics",
    categoryLabel: "Logistics",
    tag: "MODAL ECONOMICS",
    date: "11 SEP 2026",
    readTime: "6 min read",
    description: "Comparing velocity, volume economics, and shelf-life suitability for high-value organic spices and delicate cotton shipments.",
    imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAeL89_QfPBR6G5Mehd_OuyV0JKjWD3y1qYVMMqpMXIj-SgPoIxQgyH8IDjQkxn_QY12AxZQgxmEhxbV6vyrtJjB3oNDuEmscxnJYqKPm0j6KDKFJeAlxI1KS3vKmUgs_NddTLazay3KvBtq6jPD05_gFI8rvPQ-9_1VhU6OknQTHeslmFynA_TIOlKtW0lekLmrSiiuy6n76s9YTlxcJBwAM6tIdCxjKYwDzS2UUxuGchIZLUAbsLd",
    alt: "Composite of container ship and cargo air freighter loading agricultural cargo",
  },
  {
    id: "art-6",
    slug: "export-documentation-guide",
    title: "Global Phytosanitary Standards for Turmeric: MRL Protocols",
    category: "quality",
    categoryLabel: "Quality & Safety",
    tag: "EU STANDARDS / MRL",
    date: "03 SEP 2026",
    readTime: "8 min read",
    description: "Navigating maximum residue limits (MRL), ethylene oxide (ETO) testing, and lab validation for European food safety compliance.",
    imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBe33vlLMLzBfW1VUQCpZky1JdZ89DwG0hPN31taPUQbwtC7o7WkGW6kK7h1fLvoX-eWJ8SF7i00hRwyr1uuLvYtQ409hVWLiq_8TGbsf_zrNxyA259PExXNTwqothEjNMhPkGZcgvi52y9-WFKpebzQ-npn7pdX-mhja3vlF1er2wuv8T5O7h4I4htlDrMDg1gvW5HWtqIaALH_FReYIZuz9fOgfpiddBduH4dPA0X3emRm_7Pj4QR",
    alt: "Laboratory quality testing of organic turmeric fingers with pipettes",
  },
];

export default function BlogPage() {
  const [selectedTopic, setSelectedTopic] = useState<string>("all");
  const [newsletterEmail, setNewsletterEmail] = useState<string>("");
  const [subscribed, setSubscribed] = useState<boolean>(false);

  const filteredArticles = useMemo(() => {
    if (selectedTopic === "all") return ARTICLES;
    return ARTICLES.filter((art) => art.category === selectedTopic);
  }, [selectedTopic]);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setNewsletterEmail("");
    }
  };

  return (
    <div className="flex flex-col w-full">
      {/* 1. Inner Page Banner (Contrast Well: Deep Forest Green #05301A) */}
      <section className="relative w-full bg-on-primary-fixed text-surface-bright py-16 px-6 lg:px-12 overflow-hidden shadow-sm">
        <div className="absolute inset-0 pointer-events-none opacity-15 overflow-hidden flex items-center justify-end">
          <svg className="w-[720px] h-[720px] -mr-32 -mt-16 text-secondary-container" fill="none" stroke="currentColor" viewBox="0 0 600 600">
            <circle cx="300" cy="300" r="120" strokeDasharray="3 3" strokeWidth="1" />
            <circle cx="300" cy="300" r="190" strokeWidth="1" />
            <circle cx="300" cy="300" r="260" strokeDasharray="6 4" strokeWidth="1" />
            <circle cx="300" cy="300" r="330" strokeWidth="0.75" />
            <line strokeDasharray="2 4" strokeWidth="0.75" x1="300" x2="300" y1="0" y2="600" />
            <line strokeDasharray="2 4" strokeWidth="0.75" x1="0" x2="600" y1="300" y2="300" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-label-md text-label-md text-secondary-fixed tracking-wider">
              <Link className="hover:text-surface-bright transition-colors" href="/">
                Home
              </Link>
              <span className="text-secondary-fixed/50">/</span>
              <span className="text-surface-bright">Blog &amp; Trade Insights</span>
            </div>
            <h1 className="font-display-lg text-display-lg tracking-tight text-surface-bright uppercase">
              Blog &amp; Trade Insights
            </h1>
          </div>
          <div className="flex items-center gap-3 bg-tertiary/40 px-4 py-2.5 rounded shadow-inner">
            <span className="material-symbols-outlined text-secondary-container text-[20px]">verified</span>
            <span className="font-eyebrow-bold text-eyebrow-bold tracking-widest text-secondary-fixed uppercase text-xs">
              Directorate General of Foreign Trade (DGFT) Desk Updates
            </span>
          </div>
        </div>
      </section>

      {/* 2. Featured Lead Article */}
      <section className="w-full bg-surface py-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 bg-secondary rounded-full" />
              <span className="font-eyebrow-bold text-eyebrow-bold uppercase tracking-[0.2em] text-secondary">
                Primary Dispatch Analysis
              </span>
            </div>
            <span className="font-data-mono text-data-mono text-on-surface-variant text-xs">
              ARCHIVE REF: VPA/EXP/2026-Q4
            </span>
          </div>
          {/* Featured Article Box */}
          <article className="bg-surface-container rounded shadow-md overflow-hidden grid grid-cols-1 lg:grid-cols-12 group transition-all duration-300">
            {/* Left Visual */}
            <div className="lg:col-span-7 relative min-h-[380px] lg:min-h-[460px] overflow-hidden">
              <img
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                alt="Commercial maritime container terminal at Visakhapatnam port during golden hour"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIZNrL09ZgYVrA5bh1pdc-vqHdipd6P6EptpGjxSrDlkXKvM20mwsY3znbQD-bVuC3FvmoOSzatxBkSA_j0q1CbrpZd5oF4eBTFLmB6gBkJTqG49wtBDrCEVBCtzooPW9710EhWcBh8UMejJaHtYWnIFky6fiVfctZyvhKH2dVmZayavViExVJu-yMClCBLvzJlOm_PmcJigAgzdTACH_fXsmKOaGHIX3ZTSPOu1iYPkg0fotBb9fF"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-on-primary-fixed/80 via-transparent to-transparent lg:hidden" />
              <div className="absolute top-4 left-4 bg-on-primary-fixed/90 backdrop-blur-sm text-surface-bright px-3 py-1.5 rounded shadow-sm flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary-container text-[16px]">anchor</span>
                <span className="font-eyebrow-bold text-eyebrow-bold tracking-widest uppercase text-secondary-fixed text-xs">
                  Export Manifest Guide
                </span>
              </div>
            </div>
            {/* Right Panel */}
            <div className="lg:col-span-5 bg-surface-container-high p-8 sm:p-10 lg:p-12 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-eyebrow-bold text-eyebrow-bold text-secondary uppercase tracking-[0.2em] text-xs">
                    FEATURED ANALYSIS · 12 OCT 2026
                  </span>
                  <span className="font-data-mono text-data-mono text-on-surface-variant bg-surface px-2.5 py-1 rounded text-xs">
                    8 MIN READ
                  </span>
                </div>
                <h2 className="font-headline-lg text-headline-lg text-on-surface leading-tight group-hover:text-primary transition-colors">
                  How to Prepare Documents for Your First Export Shipment
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed pt-2">
                  A comprehensive operational checklist covering commercial invoices, packing lists, bills of lading, and mandatory phytosanitary certifications to avoid harbor demurrage.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="bg-surface text-tertiary font-label-md text-label-md px-2.5 py-1 rounded shadow-xs text-xs">
                    Customs EDI Clearance
                  </span>
                  <span className="bg-surface text-tertiary font-label-md text-label-md px-2.5 py-1 rounded shadow-xs text-xs">
                    Phytosanitary Protocol
                  </span>
                  <span className="bg-surface text-tertiary font-label-md text-label-md px-2.5 py-1 rounded shadow-xs text-xs">
                    Port Demurrage Avoidance
                  </span>
                </div>
              </div>
              <div className="pt-8">
                <Link
                  className="inline-flex items-center gap-2 font-label-md text-label-md text-secondary hover:text-on-secondary-fixed-variant transition-colors group/link pb-1 shadow-[0_1px_0_0_currentColor]"
                  href="/blog/export-documentation-guide"
                >
                  <span className="font-bold tracking-wider uppercase">Read full article</span>
                  <span className="material-symbols-outlined text-[18px] group-hover/link:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* 3. 2x3 Editorial Grid of Insights Cards */}
      <section className="w-full bg-surface-container-low py-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Header & Filter Chips */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 shadow-[0_1px_0_0_rgba(134,83,0,0.15)]">
            <div>
              <span className="font-eyebrow-bold text-eyebrow-bold uppercase tracking-[0.25em] text-secondary block mb-1">
                Global Trade Knowledge Hub
              </span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface">
                Commercial Bulletins &amp; Compliance Files
              </h2>
            </div>
            <div className="flex items-center flex-wrap gap-2">
              {[
                { id: "all", label: "All Topics" },
                { id: "regulations", label: "Trade Regulations" },
                { id: "logistics", label: "Logistics & Freight" },
                { id: "quality", label: "Quality Compliance" },
              ].map((topic) => {
                const active = selectedTopic === topic.id;
                return (
                  <button
                    key={topic.id}
                    onClick={() => setSelectedTopic(topic.id)}
                    type="button"
                    className={`font-label-md text-label-md px-3.5 py-1.5 rounded transition-colors ${
                      active
                        ? "bg-primary text-on-primary shadow-sm font-bold"
                        : "bg-surface text-on-surface-variant hover:text-primary shadow-xs"
                    }`}
                  >
                    {topic.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <article
                key={article.id}
                className="bg-surface-container rounded shadow-md overflow-hidden flex flex-col justify-between group hover:shadow-xl transition-all duration-300"
              >
                <div>
                  <div className="relative h-56 overflow-hidden">
                    <img
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      alt={article.alt}
                      src={article.imgUrl}
                    />
                    <div className="absolute top-3 left-3 bg-surface/95 backdrop-blur-sm px-2.5 py-1 rounded shadow-sm">
                      <span className="font-eyebrow-bold text-eyebrow-bold text-secondary uppercase tracking-widest text-xs">
                        {article.categoryLabel}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 space-y-3">
                    <div className="flex items-center justify-between font-data-mono text-data-mono text-on-surface-variant text-xs">
                      <span>{article.tag}</span>
                      <span>{article.date}</span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors leading-snug">
                      {article.title}
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      {article.description}
                    </p>
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <Link
                    className="inline-flex items-center gap-1.5 font-label-md text-label-md text-secondary hover:text-on-secondary-fixed-variant transition-colors shadow-[0_1px_0_0_currentColor] pb-0.5"
                    href={`/blog/${article.slug}`}
                  >
                    <span>Read more ({article.readTime})</span>
                    <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Trade Intelligence Subscription Strip */}
      <section className="w-full bg-on-primary-fixed text-surface-bright py-16 px-6 lg:px-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <span className="font-eyebrow-bold text-eyebrow-bold uppercase tracking-[0.2em] text-secondary-fixed block mb-2">
              COMMERCIAL INTELLIGENCE
            </span>
            <h2 className="font-headline-lg text-headline-lg text-surface-bright mb-2">
              Stay ahead of DGFT regulatory changes
            </h2>
            <p className="font-body-md text-body-md text-surface-bright/80 max-w-xl">
              Receive fortnightly updates on ocean container freight rate indices, APEDA certification alerts, and agricultural export quotas.
            </p>
          </div>
          <div className="w-full md:w-auto">
            {subscribed ? (
              <div className="p-4 bg-primary/40 rounded border border-secondary text-primary-fixed flex items-center gap-2 font-data-mono">
                <span className="material-symbols-outlined text-[20px]">verified</span>
                <span>Thank you. You are subscribed to SVMR Trade Intelligence.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter corporate email..."
                  className="bg-surface-bright/10 border border-secondary/40 rounded px-4 py-3 font-body-sm text-body-sm text-surface-bright placeholder:text-surface-bright/50 focus:outline-none focus:border-secondary-fixed min-w-[280px]"
                />
                <button
                  type="submit"
                  className="bg-secondary text-surface-container-lowest font-label-md text-label-md px-6 py-3 rounded hover:bg-on-secondary-fixed-variant transition-colors shrink-0"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
