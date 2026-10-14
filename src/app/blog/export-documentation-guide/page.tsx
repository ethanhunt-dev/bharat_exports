"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useQuoteModal } from "@/context/QuoteModalContext";
import PageBanner from "@/components/PageBanner";

export default function BlogDetailPage() {
  const { openQuoteModal } = useQuoteModal();
  const [copied, setCopied] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  const handleCopy = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard?.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleDownloadPdf = () => {
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
  };

  return (
    <div className="flex flex-col w-full">
      {/* 1. Cinematic Luxury Page Banner */}
      <PageBanner
        title="EXPORT DOCUMENTATION DOSSIER"
        eyebrow="BHARAT GLOBAL EXPORTS · TRADE ADVISORY #48"
        breadcrumbCurrent="Documentation & Customs"
        parentBreadcrumb={{ label: "Blog", href: "/blog" }}
        bgImage="/images/banner_port_cranes.jpg"
        description="Comprehensive compliance guide for Indian port customs clearing, Bill of Lading execution, and phytosanitary verification."
        metaBadge={{
          label: "PORT CUSTOMS",
          value: "ICEGATE & DGFT READY",
        }}
      />

      {/* 2. Centered Editorial Article Column */}
      <section className="w-full bg-surface py-12 md:py-20">
        <div className="max-w-[760px] mx-auto px-5 sm:px-6">
          {/* Metadata Row */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-secondary/20">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-secondary" />
              <span className="font-eyebrow-bold text-eyebrow-bold uppercase tracking-[0.2em] text-secondary text-xs">
                12 OCT 2026 · DOCUMENTATION &amp; CUSTOMS · 6 MIN READ
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-on-surface-variant font-data-mono text-data-mono bg-surface-container px-2.5 py-1 rounded text-xs">
              <span className="material-symbols-outlined text-[15px] text-primary">schedule</span>
              <span>Manifest Series 26/V</span>
            </div>
          </div>
          {/* Editorial H1 */}
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mt-6 mb-8 tracking-tight leading-[1.12]">
            How to Prepare Documents for Your First Export Shipment
          </h1>

          {/* Visual Frame Device */}
          <div className="relative my-8 group">
            <div className="absolute -inset-2.5 bg-surface-container-high rounded pointer-events-none transform -rotate-0.5 transition-transform group-hover:rotate-0" />
            <div className="relative bg-surface-container-low p-2 rounded shadow-sm">
              <div className="relative overflow-hidden aspect-[16/10] bg-surface-variant rounded">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  alt="Authentic Indian maritime trade shipping documents and customs stamps"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPlDAvgf5uWLpBC5NnvSxLrhrKdn0vXQnUNGmxx2b_cSe3tav3A2RA2eN-LlDG9AAsopV3aE0ya_kNtHNP8bcfBAdcf2Elx6P_B8rl0P7ZJ7yE0VAXyUTaR-lhde9ZkzN2ONUQ_UBS53DTNQaxdLcvNj981LcGND6ff7KjsTpRh9X53chw5xHfxPF-uN32uTCuwrPYOvH-f3QgZQ4m9hWoFmVF2sKDOhqPEAxs5dqHJSf9sVJcNvOQ"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-on-tertiary-fixed/90 via-on-tertiary-fixed/40 to-transparent p-4 text-surface-bright flex items-center justify-between">
                  <span className="font-data-mono text-data-mono text-secondary-fixed text-xs">
                    Visakhapatnam Port Quay 4 · Consignment Dispatch Registry
                  </span>
                  <span className="font-eyebrow-bold text-eyebrow-bold tracking-widest uppercase bg-primary-container px-2 py-0.5 rounded text-surface-bright text-[10px]">
                    APEDA Verified
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Editorial Article Body */}
          <article className="flex flex-col gap-8 text-on-surface">
            {/* Drop Cap Lead Paragraph */}
            <p className="font-body-lg text-body-lg text-on-surface leading-relaxed text-justify first-letter:float-left first-letter:font-display-lg first-letter:text-[72px] first-letter:leading-[0.8] first-letter:pr-4 first-letter:pt-1 first-letter:text-primary first-letter:font-semibold">
              Every export shipment needs a commercial invoice, packing list, bill of lading and, for most food products, a certificate of origin and phytosanitary certificate. Check the buyer country requirements early, keep digital copies of everything, and confirm details with your freight forwarder before the cargo is loaded.
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              For emerging enterprise exporters dispatching agricultural commodities, dry pulses, or mill-finished yarn from India’s eastern littoral ports, bureaucratic compliance is not merely an administrative checkbox. It is the core financial instrument underlying letter-of-credit settlements, clearance velocities, and demurrage mitigation across destination docks.
            </p>

            {/* Styled Editorial Pull-Quote */}
            <blockquote className="my-3 p-7 md:p-8 bg-surface-container rounded shadow-sm relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-secondary" />
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-secondary text-[36px] -mt-1 select-none">
                  format_quote
                </span>
                <div className="flex flex-col gap-3">
                  <p className="font-headline-sm text-headline-sm text-on-surface italic font-normal leading-snug">
                    “In international maritime trade, a single typographic discrepancy between the Bill of Lading and the Letter of Credit can delay cargo release by weeks. Precision at the origin port is your greatest commercial asset.”
                  </p>
                  <footer className="font-label-md text-label-md text-secondary font-semibold uppercase tracking-wider text-xs">
                    — Captain R. K. Varma, Chief Marine Surveyor &amp; Port Superintendent (Retd.)
                  </footer>
                </div>
              </div>
            </blockquote>

            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Prior to cargo consolidation inside container freight stations (CFS), customs officials assess harmonized HS classification codes, exporter credential numbers (IEC), and verified gross mass (VGM) certification. Missing or loosely transcribed tare weights remain the single largest cause of portside clearance detentions.
            </p>

            {/* Section: Structured Document Checklist */}
            <div className="mt-4 bg-surface-container-low p-6 md:p-8 rounded-lg shadow-sm">
              <div className="flex items-center justify-between pb-4 border-b border-secondary/20">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded bg-primary text-surface-bright flex items-center justify-center">
                    <span className="material-symbols-outlined text-[18px]">rule</span>
                  </div>
                  <div>
                    <span className="font-eyebrow-bold text-eyebrow-bold uppercase tracking-widest text-secondary block text-xs">
                      Compliance Matrix
                    </span>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface">
                      The Mandatory Export Document Checklist
                    </h3>
                  </div>
                </div>
                <span className="font-data-mono text-data-mono bg-surface px-2.5 py-1 rounded text-primary font-medium text-xs">
                  5 Core Instruments
                </span>
              </div>
              <ul className="mt-6 flex flex-col gap-4 font-body-md text-body-md">
                <li className="flex items-start gap-3.5 p-3.5 bg-surface rounded hover:bg-surface-container-highest transition-colors">
                  <span className="material-symbols-outlined text-secondary shrink-0 mt-0.5 font-bold text-[22px]">
                    check_circle
                  </span>
                  <div className="flex flex-col">
                    <span className="font-title-md text-title-md text-on-surface">
                      Commercial Invoice &amp; Detailed Packing List
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      Must itemize exact net/gross metric weights, pallet marks, HS codes, packaging batch tallies, and agreed Incoterms 2020 terms.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3.5 p-3.5 bg-surface rounded hover:bg-surface-container-highest transition-colors">
                  <span className="material-symbols-outlined text-secondary shrink-0 mt-0.5 font-bold text-[22px]">
                    check_circle
                  </span>
                  <div className="flex flex-col">
                    <span className="font-title-md text-title-md text-on-surface">Bill of Lading (B/L)</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      Clean on Board ocean manifest or Sea Waybill officially endorsed by carrier line confirming freight prepaid or collect status.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3.5 p-3.5 bg-surface rounded hover:bg-surface-container-highest transition-colors">
                  <span className="material-symbols-outlined text-secondary shrink-0 mt-0.5 font-bold text-[22px]">
                    check_circle
                  </span>
                  <div className="flex flex-col">
                    <span className="font-title-md text-title-md text-on-surface">Certificate of Origin (COO)</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      Preferential or non-preferential certificates authorized via FIEO, Spices Board, or designated regional Chambers of Commerce.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3.5 p-3.5 bg-surface rounded hover:bg-surface-container-highest transition-colors">
                  <span className="material-symbols-outlined text-secondary shrink-0 mt-0.5 font-bold text-[22px]">
                    check_circle
                  </span>
                  <div className="flex flex-col">
                    <span className="font-title-md text-title-md text-on-surface">
                      Phytosanitary &amp; Fumigation Certificates
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      Issued under Govt. Directorate of Plant Protection, Quarantine &amp; Storage; verified methyl bromide or phosphine dosage details.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3.5 p-3.5 bg-surface rounded hover:bg-surface-container-highest transition-colors">
                  <span className="material-symbols-outlined text-secondary shrink-0 mt-0.5 font-bold text-[22px]">
                    check_circle
                  </span>
                  <div className="flex flex-col">
                    <span className="font-title-md text-title-md text-on-surface">
                      Certificate of Analysis / Quality Inspection Report
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      Independent accredited surveyor lot reports (e.g., SGS, Bureau Veritas, Intertek) evaluating moisture, aflatoxin, count, and purity.
                    </span>
                  </div>
                </li>
              </ul>
              <div className="mt-5 p-3 bg-tertiary-container/20 rounded flex items-center justify-between text-on-surface">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px] text-primary">download</span>
                  <span className="font-label-md text-label-md">
                    {downloaded ? "Spec Manifest Downloaded (PDF)" : "Download Standard Export Master Manifest (PDF)"}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleDownloadPdf}
                  className="font-eyebrow-bold text-eyebrow-bold uppercase tracking-wider text-primary hover:text-secondary transition-colors underline decoration-secondary"
                >
                  {downloaded ? "Ready ✓" : "2.4 MB Sample"}
                </button>
              </div>
            </div>

            {/* Digital ICEGATE Single Window */}
            <div className="space-y-4">
              <h3 className="font-headline-sm text-headline-sm text-on-surface">
                Digital Single-Window Clearance &amp; Escrow Governance
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                India’s centralized ICEGATE platform streamlines the filing of electronic Shipping Bills through integrated customs clearance engines. Digital generation of the Let Export Order (LEO) triggers real-time vessel allotment, locking your export compliance status into the international banking grid before physical ship-loading commences.
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                For uninitiated buyers and novel trade partners, uniting ICEGATE shipping bill milestones with irrevocable documentary credits (UCP 600 standards) eliminates counterparty remittance anxiety. When documentary hygiene is immaculate from origin to quay, your consignment transitions seamlessly through global port terminals.
              </p>
            </div>

            {/* Author Tag */}
            <div className="mt-4 p-5 bg-surface-container rounded flex flex-col sm:flex-row items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-surface-bright shrink-0 shadow-sm">
                <span className="material-symbols-outlined text-[30px]">assignment_ind</span>
              </div>
              <div className="flex flex-col text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <span className="font-title-md text-title-md text-on-surface">
                    SVMR Commercial Logistics Desk
                  </span>
                  <span className="material-symbols-outlined text-secondary text-[16px]">verified</span>
                </div>
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  Prepared in coordination with Visakhapatnam Port Maritime Operations and Regional Customs House Agents (CHA).
                </span>
              </div>
            </div>

            {/* Share Row & Navigation */}
            <div className="mt-6 pt-6 border-t border-secondary/20 flex flex-col sm:flex-row items-center justify-between gap-5">
              <div className="flex items-center gap-3">
                <span className="font-eyebrow-bold text-eyebrow-bold uppercase tracking-widest text-on-surface-variant text-xs">
                  Distribute:
                </span>
                <div className="flex items-center gap-2">
                  <a
                    href="https://www.linkedin.com/sharing/share-offsite/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded bg-surface-container-high hover:bg-secondary hover:text-surface-bright text-on-surface transition-colors flex items-center justify-center shadow-sm"
                    title="Share on LinkedIn"
                  >
                    <span className="material-symbols-outlined text-[18px]">hub</span>
                  </a>
                  <a
                    href="https://wa.me/?text=Check+out+this+Export+Documentation+Guide"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded bg-surface-container-high hover:bg-secondary hover:text-surface-bright text-on-surface transition-colors flex items-center justify-center shadow-sm"
                    title="Share via WhatsApp"
                  >
                    <span className="material-symbols-outlined text-[18px]">chat</span>
                  </a>
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="w-9 h-9 rounded bg-surface-container-high hover:bg-secondary hover:text-surface-bright text-on-surface transition-colors flex items-center justify-center shadow-sm"
                    title="Copy Document Link"
                  >
                    <span className="material-symbols-outlined text-[18px]">link</span>
                  </button>
                </div>
                {copied && (
                  <span className="font-data-mono text-data-mono text-primary text-xs animate-pulse">
                    Copied!
                  </span>
                )}
              </div>
              <Link
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-surface-container text-primary hover:bg-primary hover:text-surface-bright font-label-md text-label-md transition-all shadow-sm"
                href="/blog"
              >
                <span className="material-symbols-outlined text-[16px]">arrow_back</span>
                <span>Back to Trade Blog</span>
              </Link>
            </div>
          </article>
        </div>
      </section>

      {/* 3. Related Articles Section */}
      <section className="w-full bg-surface-container py-16 md:py-20 shadow-inner">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-4 border-b border-secondary/20">
            <div>
              <span className="font-eyebrow-bold text-eyebrow-bold uppercase tracking-[0.25em] text-secondary block mb-1">
                FURTHER READING
              </span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface">
                Related Trade Analyses
              </h2>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant max-w-md">
              Actionable technical briefs and maritime logistical benchmarks curating operational clarity for international buyers.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Related 1 */}
            <article className="bg-surface rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all group flex flex-col">
              <div className="relative overflow-hidden aspect-[16/10] bg-surface-variant">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  alt="Container ship loaded with cargo cranes at sunset"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWtukcNU0L72Ft9pD-rrugBqFvRWj11NhhqmslOjt7_MhWfpAWGi0VECTLcbsonfl4pOexZ_mzTakuRiRw_RQQjmebb5zTBjk3EIDYMBQfFcJsNDs-R36fSp5VeggqrnW7PyaXQbcFS5sxUgBF0DgvpSlILowvCiVES4ne1hI8ZQv9jakThs5kMckQ5l3A94l10cLFWV32i9Km9PyR1R90x_QKdMbZC-h3DTwD9uYhTzuVr6QOlh64"
                />
                <div className="absolute top-3 left-3 bg-surface/90 backdrop-blur px-2.5 py-1 rounded">
                  <span className="font-eyebrow-bold text-eyebrow-bold uppercase tracking-wider text-secondary text-xs">
                    COMMERCIAL TERMS
                  </span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1 justify-between gap-4">
                <div className="space-y-2">
                  <span className="font-data-mono text-data-mono text-on-surface-variant text-xs">
                    4 MIN READ · INCOTERMS 2020
                  </span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors leading-snug">
                    Understanding Incoterms: FOB vs CIF
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                    Demystifying risk transfer, sea freight liabilities, and marine insurance protocols between Visakhapatnam Port and European destinations.
                  </p>
                </div>
                <Link
                  className="inline-flex items-center gap-1.5 font-label-md text-label-md text-secondary group-hover:text-primary transition-colors mt-2"
                  href="/blog/export-documentation-guide"
                >
                  <span>Read Analysis</span>
                  <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </article>

            {/* Related 2 */}
            <article className="bg-surface rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all group flex flex-col">
              <div className="relative overflow-hidden aspect-[16/10] bg-surface-variant">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  alt="Burlap sacks of peppercorns and whole turmeric with moisture packaging"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAuIMs1BcNjt5qujOdgVkkK9W6SsZ_ZmLtCnuYf2FmlyPZHbFfVCy759fvof5J6NZfEaP51DtaqiAs4p_Gd5D0slfHzL0sLZWz3VFzgl50tT4TY2Q-lisNn98SLZx2yKGSDyz10w4-BRS8j2x6lrD1-COjO2ApginfXWUDpKDxVjlgz0XNncvRA2Z9OvDl_ivnpl6ADnzxOj9Wft3sjJU0PYMSLXRO619jQGmYP4KSaslbxpdEpt8km"
                />
                <div className="absolute top-3 left-3 bg-surface/90 backdrop-blur px-2.5 py-1 rounded">
                  <span className="font-eyebrow-bold text-eyebrow-bold uppercase tracking-wider text-secondary text-xs">
                    QUALITY CONTROL
                  </span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1 justify-between gap-4">
                <div className="space-y-2">
                  <span className="font-data-mono text-data-mono text-on-surface-variant text-xs">
                    7 MIN READ · CARGO PRESERVATION
                  </span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors leading-snug">
                    Packaging Spices for Long Sea Voyages
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                    Mitigating container sweat and preserving volatile oil profiles across prolonged tropical maritime transit routes.
                  </p>
                </div>
                <Link
                  className="inline-flex items-center gap-1.5 font-label-md text-label-md text-secondary group-hover:text-primary transition-colors mt-2"
                  href="/blog/export-documentation-guide"
                >
                  <span>Read Analysis</span>
                  <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </article>

            {/* Related 3 */}
            <article className="bg-surface rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all group flex flex-col">
              <div className="relative overflow-hidden aspect-[16/10] bg-surface-variant">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  alt="Aged extra long grain 1121 Basmati rice grains next to wooden scoop"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCli3ceVTpFUe_yX6j-AtEBsD4c1zRQJFwYCp502Smevvp80PI-E4NC8f34V8KMI00NZXVYuxRWlJxfNBaW-9lWPOloGCv6uAFjc5tMY9vOsqFVMnxl9yDIBk5px5WHdNMP2fBxukVuxtSk--9W2Q2ZxlbSHphR-vMLLSmrURzEsir3w7B4OAystt0eP8ggP3rt_eqASqeww5JSZtMjxN_s5bzdQpZ5-8hMhax36vUgW-kSUL4R17UD"
                />
                <div className="absolute top-3 left-3 bg-surface/90 backdrop-blur px-2.5 py-1 rounded">
                  <span className="font-eyebrow-bold text-eyebrow-bold uppercase tracking-wider text-secondary text-xs">
                    MARKET INTELLIGENCE
                  </span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1 justify-between gap-4">
                <div className="space-y-2">
                  <span className="font-data-mono text-data-mono text-on-surface-variant text-xs">
                    5 MIN READ · AGRI EXPORTS
                  </span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors leading-snug">
                    Top Export Destinations for Basmati Rice
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                    Evaluating procurement trends, pesticide tolerance caps, and container demand in GCC nations and the North American corridor.
                  </p>
                </div>
                <Link
                  className="inline-flex items-center gap-1.5 font-label-md text-label-md text-secondary group-hover:text-primary transition-colors mt-2"
                  href="/blog/export-documentation-guide"
                >
                  <span>Read Analysis</span>
                  <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </article>
          </div>

          {/* Bottom Desk CTA */}
          <div className="mt-12 p-6 md:p-8 bg-surface rounded-lg shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 border border-secondary/20">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[26px]">support_agent</span>
              </div>
              <div>
                <h4 className="font-title-md text-title-md text-on-surface">
                  Need custom export documentation advice?
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Our Visakhapatnam Port documentation managers will guide you through customs and quarantine specifics.
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => openQuoteModal()}
              className="bg-secondary text-surface-container-lowest font-label-md text-label-md px-6 py-2.5 rounded hover:bg-on-secondary-fixed-variant transition-colors shadow-sm shrink-0"
            >
              Consult Trade Desk
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
