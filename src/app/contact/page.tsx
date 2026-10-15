"use client";

import React, { useState } from "react";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import { useData } from "@/context/DataContext";

export default function ContactPage() {
  const { addEnquiry } = useData();
  const [incoterm, setIncoterm] = useState<string>("FOB");
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    fullName: "",
    organization: "",
    corporateEmail: "",
    phoneWhatsApp: "",
    destinationPort: "",
    commodityRequired: "1121-basmati",
    orderVolume: "",
    messageNotes: "",
    phytoAgreement: true,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addEnquiry({
      fullName: formData.fullName || "Prospective Buyer",
      email: formData.corporateEmail,
      phone: formData.phoneWhatsApp,
      company: formData.organization,
      commodity: `${formData.commodityRequired} (${incoterm})`,
      destinationPort: formData.destinationPort,
      quantity: formData.orderVolume,
      notes: formData.messageNotes,
    });
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col w-full">
      {/* 1. Cinematic Luxury Page Banner */}
      <PageBanner
        title="Contact Us"
        eyebrow="SVMR EXPORTS · GLOBAL TRADE DESK"
        breadcrumbCurrent="Contact Us"
        bgImage="/images/banner_port_cranes.jpg"
        description="Direct international procurement queries, charter reservations, and sample dispatch requests to our Visakhapatnam maritime desk."
        metaBadge={{
          label: "TRADE DESK",
          value: "INVTZ1 · 24H SLA ACTIVE",
        }}
      />
      {/* Quick Registry Sub-bar */}
      <div className="w-full bg-[#0B281D] border-b border-[#C5A15B]/20 py-4 px-6 lg:px-12 text-[#E7EDE6]/70">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[15px] text-[#C5A15B]">anchor</span>{" "}
              <span>Visakhapatnam Port Quay (INVTZ1)</span>
            </span>
            <span className="hidden sm:inline-block w-px h-3 bg-[#C5A15B]/30" />
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[15px] text-[#C5A15B]">schedule</span>{" "}
              <span>Desk Clearance: &lt; 24h Proforma Guarantee</span>
            </span>
          </div>
          <div className="flex items-center gap-2 text-[#FDE047] font-sans text-xs font-bold">
            <span className="w-2 h-2 rounded-full bg-[#86D7A9] animate-ping" />
            <span>Commercial Enquiries Live</span>
          </div>
        </div>
      </div>

      {/* 2. Two-Column Layout (Form + Contacts) */}
      <section className="w-full bg-surface py-16 lg:py-24" id="inquiry">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column (7 cols): Direct B2B Trade Enquiry Form */}
            <div className="lg:col-span-7 flex flex-col">
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-3">
                  <span className="font-eyebrow-bold text-eyebrow-bold text-secondary uppercase tracking-[0.2em] text-xs">
                    01 — TRADE INQUIRY
                  </span>
                  <span className="h-px w-10 bg-secondary/30" />
                </div>
                <h2 className="font-headline-lg text-headline-lg text-on-surface mb-3">
                  Speak with our Visakhapatnam Export Desk
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl leading-relaxed">
                  Share your commodity requirements, target Incoterm (FOB/CIF), and port of discharge for a detailed proforma quote within 24 hours.
                </p>
              </div>

              {submitted ? (
                <div className="bg-surface-container-low/90 p-8 rounded border border-primary/40 shadow-sm flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-primary-fixed/30 text-primary flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined text-[36px]">verified</span>
                  </div>
                  <span className="font-eyebrow-bold text-eyebrow-bold uppercase tracking-widest text-secondary mb-1">
                    REFERENCE NO: SVMR-INQ-2026-9481
                  </span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface mb-3">
                    Commercial Enquiry Registered
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant max-w-md mx-auto mb-6">
                    Thank you, <span className="font-bold text-on-surface">{formData.fullName}</span> from <span className="font-bold text-on-surface">{formData.organization}</span>. Your enquiry has been received by our commercial export liaison. Official proforma pricing and phytosanitary parameters will be emailed to <span className="font-bold text-on-surface">{formData.corporateEmail}</span> within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="bg-primary text-on-primary font-label-md text-label-md px-6 py-2.5 rounded hover:bg-primary-container transition-colors"
                  >
                    Submit Additional Specification
                  </button>
                </div>
              ) : (
                <form className="flex flex-col gap-8 bg-surface-container-low/70 p-8 lg:p-10 rounded-sm shadow-sm relative" onSubmit={handleSubmit}>
                  <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none overflow-hidden">
                    <div className="w-24 h-24 bg-secondary/10 -rotate-45 transform origin-bottom-right translate-x-12 -translate-y-12" />
                  </div>

                  {/* Row 1: Full Name & Organization */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="relative flex flex-col">
                      <label className="font-label-md text-label-md text-on-surface mb-1 flex items-center justify-between" htmlFor="contact-fullName">
                        <span>Full Name</span>
                        <span className="font-data-mono text-data-mono text-on-surface-variant/70 text-xs">Mandatory</span>
                      </label>
                      <input
                        className="bg-transparent border-b-2 border-outline-variant/60 focus:border-primary px-0 py-2.5 font-body-md text-body-md text-on-surface outline-none transition-colors placeholder:text-outline/40"
                        id="contact-fullName"
                        placeholder="e.g. Marcus Vance"
                        required
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      />
                    </div>
                    <div className="relative flex flex-col">
                      <label className="font-label-md text-label-md text-on-surface mb-1 flex items-center justify-between" htmlFor="contact-organization">
                        <span>Legal Organization / Company</span>
                        <span className="font-data-mono text-data-mono text-on-surface-variant/70 text-xs">Required</span>
                      </label>
                      <input
                        className="bg-transparent border-b-2 border-outline-variant/60 focus:border-primary px-0 py-2.5 font-body-md text-body-md text-on-surface outline-none transition-colors placeholder:text-outline/40"
                        id="contact-organization"
                        placeholder="e.g. Vance Trading B.V."
                        required
                        type="text"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      />
                    </div>
                  </div>

                  {/* Row 2: Corporate Email & Phone/WhatsApp */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="relative flex flex-col">
                      <label className="font-label-md text-label-md text-on-surface mb-1 flex items-center justify-between" htmlFor="contact-corporateEmail">
                        <span>Corporate Email</span>
                        <span className="font-data-mono text-data-mono text-on-surface-variant/70 text-xs">Institutional</span>
                      </label>
                      <input
                        className="bg-transparent border-b-2 border-outline-variant/60 focus:border-primary px-0 py-2.5 font-body-md text-body-md text-on-surface outline-none transition-colors placeholder:text-outline/40"
                        id="contact-corporateEmail"
                        placeholder="procurement@vance-trade.com"
                        required
                        type="email"
                        value={formData.corporateEmail}
                        onChange={(e) => setFormData({ ...formData, corporateEmail: e.target.value })}
                      />
                    </div>
                    <div className="relative flex flex-col">
                      <label className="font-label-md text-label-md text-on-surface mb-1 flex items-center justify-between" htmlFor="contact-phoneWhatsApp">
                        <span>Phone / WhatsApp with Country Code</span>
                        <span className="font-data-mono text-data-mono text-on-surface-variant/70 text-xs">+1 / +44 / +971</span>
                      </label>
                      <input
                        className="bg-transparent border-b-2 border-outline-variant/60 focus:border-primary px-0 py-2.5 font-body-md text-body-md text-on-surface outline-none transition-colors placeholder:text-outline/40"
                        id="contact-phoneWhatsApp"
                        placeholder="+31 20 890 1234"
                        required
                        type="tel"
                        value={formData.phoneWhatsApp}
                        onChange={(e) => setFormData({ ...formData, phoneWhatsApp: e.target.value })}
                      />
                    </div>
                  </div>

                  {/* Row 3: Destination Port & Commodity */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="relative flex flex-col">
                      <label className="font-label-md text-label-md text-on-surface mb-1 flex items-center justify-between" htmlFor="contact-destinationPort">
                        <span>Destination Port &amp; Country</span>
                        <span className="font-data-mono text-data-mono text-on-surface-variant/70 text-xs">POD</span>
                      </label>
                      <input
                        className="bg-transparent border-b-2 border-outline-variant/60 focus:border-primary px-0 py-2.5 font-body-md text-body-md text-on-surface outline-none transition-colors placeholder:text-outline/40"
                        id="contact-destinationPort"
                        placeholder="Rotterdam Port, Netherlands"
                        required
                        type="text"
                        value={formData.destinationPort}
                        onChange={(e) => setFormData({ ...formData, destinationPort: e.target.value })}
                      />
                    </div>
                    <div className="relative flex flex-col">
                      <label className="font-label-md text-label-md text-on-surface mb-1 flex items-center justify-between" htmlFor="contact-commodityRequired">
                        <span>Commodity Required</span>
                        <span className="font-data-mono text-data-mono text-on-surface-variant/70 text-xs">Select line</span>
                      </label>
                      <div className="relative">
                        <select
                          className="w-full bg-transparent border-b-2 border-outline-variant/60 focus:border-primary px-0 py-2.5 font-body-md text-body-md text-on-surface outline-none appearance-none cursor-pointer pr-8"
                          id="contact-commodityRequired"
                          value={formData.commodityRequired}
                          onChange={(e) => setFormData({ ...formData, commodityRequired: e.target.value })}
                        >
                          <option value="1121-basmati">1121 Basmati Rice (Raw / Steam / Sella)</option>
                          <option value="organic-turmeric">Organic Turmeric (Finger / Powder &gt;3.5% Curcumin)</option>
                          <option value="tellicherry-pepper">Malabar / Tellicherry Black Pepper (550-600 G/L)</option>
                          <option value="guntur-chilli">Guntur S17 / Teja Red Chilli (Stemless / Stem)</option>
                          <option value="cotton-fabrics">Indian Raw Cotton &amp; Grey Fabrics (Combed/Carded)</option>
                          <option value="cashews">W180 / W240 / W320 Cashew Kernels</option>
                          <option value="other-spices">Other Agricultural Products / Custom Blend</option>
                        </select>
                        <span className="material-symbols-outlined absolute right-0 top-3 pointer-events-none text-on-surface-variant text-[20px]">
                          expand_more
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Row 4: Volume & Incoterm */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="relative flex flex-col">
                      <label className="font-label-md text-label-md text-on-surface mb-1 flex items-center justify-between" htmlFor="contact-orderVolume">
                        <span>Order Volume / Container Load</span>
                        <span className="font-data-mono text-data-mono text-on-surface-variant/70 text-xs">FCL / MT</span>
                      </label>
                      <input
                        className="bg-transparent border-b-2 border-outline-variant/60 focus:border-primary px-0 py-2.5 font-body-md text-body-md text-on-surface outline-none transition-colors placeholder:text-outline/40"
                        id="contact-orderVolume"
                        placeholder="e.g. 2 x 40ft FCL (56 Metric Tons)"
                        type="text"
                        value={formData.orderVolume}
                        onChange={(e) => setFormData({ ...formData, orderVolume: e.target.value })}
                      />
                    </div>
                    <div className="relative flex flex-col">
                      <label className="font-label-md text-label-md text-on-surface mb-2 flex items-center justify-between">
                        <span>Target Incoterm</span>
                        <span className="font-data-mono text-data-mono text-on-surface-variant/70 text-xs">Incoterms 2020</span>
                      </label>
                      <div className="grid grid-cols-3 gap-2 pt-1">
                        {["FOB", "CIF", "CFR"].map((term) => (
                          <button
                            key={term}
                            type="button"
                            onClick={() => setIncoterm(term)}
                            className={`p-2 rounded font-label-md text-label-md uppercase transition-colors text-center border ${
                              incoterm === term
                                ? "bg-primary text-on-primary border-primary font-bold shadow-xs"
                                : "bg-surface border-outline-variant/50 text-on-surface hover:border-secondary"
                            }`}
                          >
                            {term}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Row 5: Detailed Message */}
                  <div className="relative flex flex-col">
                    <label className="font-label-md text-label-md text-on-surface mb-1 flex items-center justify-between" htmlFor="contact-messageNotes">
                      <span>Detailed Message / Specification Notes</span>
                      <span className="font-data-mono text-data-mono text-on-surface-variant/70 text-xs">Custom Packaging / Phytosanitary</span>
                    </label>
                    <textarea
                      className="bg-transparent border-b-2 border-outline-variant/60 focus:border-primary px-0 py-2.5 font-body-md text-body-md text-on-surface outline-none transition-colors placeholder:text-outline/40 resize-y"
                      id="contact-messageNotes"
                      placeholder="Include moisture threshold, packaging type (25kg PP bags, vacuum tins, bulk jumbo totes), inspection agencies required (SGS / Bureau Veritas), or target arrival deadline..."
                      rows={4}
                      value={formData.messageNotes}
                      onChange={(e) => setFormData({ ...formData, messageNotes: e.target.value })}
                    />
                  </div>

                  {/* Quality Agreement Check */}
                  <div className="flex items-start gap-3 pt-2">
                    <input
                      checked={formData.phytoAgreement}
                      onChange={(e) => setFormData({ ...formData, phytoAgreement: e.target.checked })}
                      className="mt-1 w-4 h-4 rounded text-primary focus:ring-0 accent-primary cursor-pointer"
                      id="phytoAgreement"
                      type="checkbox"
                    />
                    <label className="font-body-sm text-body-sm text-on-surface-variant select-none cursor-pointer" htmlFor="phytoAgreement">
                      I require preliminary laboratory Certificates of Analysis (COA) along with the commercial proforma invoice.
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <button
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-secondary text-surface-container-lowest font-label-md text-label-md px-10 py-4 rounded hover:bg-on-secondary-fixed-variant transition-all duration-200 shadow-md group cursor-pointer"
                      type="submit"
                    >
                      <span>Send enquiry</span>
                      <span className="material-symbols-outlined text-[18px] transform group-hover:translate-x-1 transition-transform">
                        arrow_forward
                      </span>
                    </button>
                    <div className="flex items-center gap-2 text-on-surface-variant/70 font-data-mono text-data-mono text-xs">
                      <span className="material-symbols-outlined text-[16px] text-primary">verified_user</span>
                      <span>Encrypted Enterprise Transmission</span>
                    </div>
                  </div>
                </form>
              )}
            </div>

            {/* Right Column (5 cols): Institutional Contact Card */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="bg-surface-container p-8 lg:p-10 rounded-sm shadow-sm relative overflow-hidden">
                <div className="flex items-center gap-2 mb-4">
                  <span className="font-eyebrow-bold text-eyebrow-bold text-secondary uppercase tracking-[0.2em] text-xs">
                    02 — HEADQUARTERS &amp; PORT OFFICE
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-6">
                  SVMR Global Maritime Desk
                </h3>
                <div className="flex flex-col gap-6 divide-y divide-secondary/20">
                  {/* Registered Address */}
                  <div className="pt-2 first:pt-0 flex items-start gap-4">
                    <div className="w-10 h-10 rounded bg-surface flex items-center justify-center text-primary shrink-0 shadow-sm">
                      <span className="material-symbols-outlined text-[20px]">location_on</span>
                    </div>
                    <div>
                      <span className="block font-eyebrow-bold text-eyebrow-bold uppercase tracking-wider text-on-surface-variant mb-1 text-xs">
                        Registered Address &amp; Wharf
                      </span>
                      <p className="font-body-md text-body-md text-on-surface leading-snug">
                        12 Port Road, Visakhapatnam, Andhra Pradesh 530035, India
                      </p>
                      <span className="inline-block mt-1 font-data-mono text-data-mono text-secondary text-xs">
                        Port Corridor: INVTZ1 · Visakhapatnam Port Authority (VPA)
                      </span>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="pt-6 flex items-start gap-4">
                    <div className="w-10 h-10 rounded bg-surface flex items-center justify-center text-primary shrink-0 shadow-sm">
                      <span className="material-symbols-outlined text-[20px]">call</span>
                    </div>
                    <div className="flex-1">
                      <span className="block font-eyebrow-bold text-eyebrow-bold uppercase tracking-wider text-on-surface-variant mb-1 text-xs">
                        Direct Desk &amp; Instant Messaging
                      </span>
                      <div className="flex items-center flex-wrap gap-2.5">
                        <a className="font-data-mono text-title-md text-on-surface hover:text-primary transition-colors" href="tel:+919876543210">
                          +91 98765 43210
                        </a>
                        <span className="inline-flex items-center gap-1 bg-surface-container-high px-2 py-0.5 rounded text-primary font-label-md text-label-md text-xs">
                          <span className="material-symbols-outlined text-[13px] text-primary">chat</span>
                          <span>WhatsApp Active</span>
                        </span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant/80 mt-1">
                        Multi-lingual desk: English, Hindi, Telugu, Arabic liaison support.
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="pt-6 flex items-start gap-4">
                    <div className="w-10 h-10 rounded bg-surface flex items-center justify-center text-primary shrink-0 shadow-sm">
                      <span className="material-symbols-outlined text-[20px]">alternate_email</span>
                    </div>
                    <div>
                      <span className="block font-eyebrow-bold text-eyebrow-bold uppercase tracking-wider text-on-surface-variant mb-1 text-xs">
                        Commercial Correspondence
                      </span>
                      <a className="font-mono text-base text-primary hover:underline font-semibold" href="mailto:export@svmrexports.com">
                        export@svmrexports.com
                      </a>
                      <p className="font-body-sm text-body-sm text-on-surface-variant/80 mt-1">
                        RFQ attachments, certificates &amp; purchase orders.
                      </p>
                    </div>
                  </div>

                  {/* Operational Hours */}
                  <div className="pt-6 flex items-start gap-4">
                    <div className="w-10 h-10 rounded bg-surface flex items-center justify-center text-primary shrink-0 shadow-sm">
                      <span className="material-symbols-outlined text-[20px]">alarm</span>
                    </div>
                    <div>
                      <span className="block font-eyebrow-bold text-eyebrow-bold uppercase tracking-wider text-on-surface-variant mb-1 text-xs">
                        Operational Hours
                      </span>
                      <p className="font-body-md text-body-md text-on-surface">
                        Monday – Saturday: 08:30 – 18:30 IST
                      </p>
                      <div className="mt-2 p-2.5 rounded bg-surface-container-high/80 text-on-surface-variant font-body-sm text-body-sm flex items-start gap-2">
                        <span className="material-symbols-outlined text-[16px] text-secondary shrink-0 mt-0.5">info</span>
                        <span>Direct port liaison available 24/7 for container vessel dispatches.</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div className="mt-8 pt-6 border-t border-secondary/20 flex flex-col sm:flex-row gap-3.5">
                  <a
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-[#C5A15B] text-[#0B281D] font-sans text-xs font-bold uppercase tracking-wider px-5 py-3 rounded-xl hover:bg-[#E5B80B] transition-all shadow-sm text-center"
                    href="https://wa.me/919876543210"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span className="material-symbols-outlined text-[18px]">chat</span>
                    <span>Chat on WhatsApp</span>
                  </a>
                  <a
                    className="flex-1 inline-flex items-center justify-center gap-2 border-2 border-[#123D2B] text-[#123D2B] font-sans text-xs font-bold uppercase tracking-wider px-5 py-3 rounded-xl hover:bg-[#123D2B] hover:text-white transition-all text-center"
                    href="mailto:export@svmrexports.com?subject=Trade%20Inquiry%20-%20SVMR%20Exports"
                  >
                    <span className="material-symbols-outlined text-[18px]">mail</span>
                    <span>Email Trade Desk</span>
                  </a>
                </div>
              </div>

              {/* Accreditations Badge */}
              <div className="bg-surface-container-low p-6 rounded-sm shadow-sm border border-secondary/20">
                <div className="flex items-center gap-3 mb-3">
                  <span className="material-symbols-outlined text-primary text-[22px]">verified</span>
                  <h4 className="font-title-md text-title-md text-on-surface">Official Accreditations</h4>
                </div>
                <div className="grid grid-cols-2 gap-3 font-data-mono text-data-mono text-on-surface-variant text-xs">
                  <div className="p-2.5 bg-surface rounded">
                    <span className="block text-secondary text-[10px] uppercase font-bold">Registration</span>
                    <span>APEDA #183920</span>
                  </div>
                  <div className="p-2.5 bg-surface rounded">
                    <span className="block text-secondary text-[10px] uppercase font-bold">Council</span>
                    <span>Spices Board India</span>
                  </div>
                  <div className="p-2.5 bg-surface rounded">
                    <span className="block text-secondary text-[10px] uppercase font-bold">Standard</span>
                    <span>ISO 22000:2018</span>
                  </div>
                  <div className="p-2.5 bg-surface rounded">
                    <span className="block text-secondary text-[10px] uppercase font-bold">Export House</span>
                    <span>Govt. 3-Star Status</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Stylized Maritime Map Block */}
      <section className="w-full bg-on-primary-fixed text-surface-bright py-16 lg:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-secondary/30">
            <div>
              <span className="font-eyebrow-bold text-eyebrow-bold text-secondary-container uppercase tracking-[0.25em] block mb-2 text-xs">
                03 — MARITIME CORRIDOR &amp; LOGISTICS TOPOGRAPHY
              </span>
              <h2 className="font-display-md text-display-md text-surface-bright tracking-tight">
                Visakhapatnam Deepwater Harbour
              </h2>
            </div>
            <div className="flex flex-col md:items-end font-data-mono text-data-mono text-secondary-fixed text-xs">
              <span>PORT COORDINATES: 17°41&apos;48.7&quot;N · 83°17&apos;40.9&quot;E</span>
              <span className="text-surface-bright/60 text-xs">East Coast of India · Bay of Bengal Sea Lanes</span>
            </div>
          </div>

          {/* Cartographic Map Canvas */}
          <div className="relative w-full h-[400px] md:h-[480px] rounded bg-[#032011] overflow-hidden shadow-xl border border-secondary/40">
            <svg className="absolute inset-0 w-full h-full object-cover" fill="none" preserveAspectRatio="none" viewBox="0 0 1200 500">
              <defs>
                <linearGradient id="bayGradient" x1="0%" x2="100%" y1="0%" y2="100%">
                  <stop offset="0%" stopColor="#02160b" />
                  <stop offset="100%" stopColor="#05301a" />
                </linearGradient>
              </defs>
              <rect fill="url(#bayGradient)" height="500" width="1200" />
              <path d="M0,0 L520,0 C540,110 500,180 580,240 C650,290 680,340 640,430 C620,470 590,500 560,500 L0,500 Z" fill="#073a20" opacity="0.9" />
              <path d="M540,0 C570,120 530,200 620,260 C690,310 720,360 680,500" stroke="#feb963" strokeDasharray="6 4" strokeOpacity="0.25" strokeWidth="1" />
              <path d="M590,0 C630,130 580,220 670,280 C740,330 770,390 730,500" stroke="#feb963" strokeOpacity="0.18" strokeWidth="0.8" />
              <path d="M580,240 L880,180 L1200,160" stroke="#feb963" strokeDasharray="8 6" strokeOpacity="0.6" strokeWidth="1.8" />
              <path d="M580,240 L920,320 L1200,380" stroke="#feb963" strokeDasharray="8 6" strokeOpacity="0.6" strokeWidth="1.8" />
              <text fill="#feb963" fontFamily="DM Sans" fontSize="11" letterSpacing="2" opacity="0.8" x="800" y="150">
                SUBCONTINENTAL &amp; ROTTERDAM ROUTE (WEST)
              </text>
              <text fill="#feb963" fontFamily="DM Sans" fontSize="11" letterSpacing="2" opacity="0.8" x="800" y="370">
                STRAIT OF MALACCA / FAR EAST CORRIDOR
              </text>
              <circle cx="580" cy="240" fill="#feb963" r="8" className="animate-pulse" />
            </svg>

            {/* Terminal Card Overlay */}
            <div className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="bg-surface text-on-surface px-4 py-3 rounded shadow-xl border-2 border-secondary/50 max-w-xs">
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  <span className="font-eyebrow-bold text-eyebrow-bold text-secondary uppercase tracking-wider text-[10px]">
                    PRIMARY DISPATCH HUB
                  </span>
                </div>
                <span className="font-title-md text-title-md font-bold block leading-tight text-sm">
                  SVMR Exports Port Office &amp; Aggregation Terminal
                </span>
                <span className="font-data-mono text-data-mono text-on-surface-variant text-xs mt-1 block">
                  12 Port Road · Visakhapatnam Inner Quay
                </span>
              </div>
            </div>

            {/* Bottom Status Box */}
            <div className="absolute bottom-5 left-5 z-20 hidden sm:flex flex-col gap-1.5 bg-on-primary-fixed/90 backdrop-blur-md p-4 rounded border border-secondary/40 text-surface-bright max-w-sm">
              <div className="flex items-center justify-between gap-4">
                <span className="font-eyebrow-bold text-eyebrow-bold text-secondary-container uppercase text-xs">
                  ACTIVE HARBOUR STATUS
                </span>
                <span className="font-data-mono text-data-mono text-primary-fixed text-xs">
                  TIDE NORMAL · 14.5M DRAFT
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-surface-bright/80 text-xs">
                Continuous Reefer Plug-in Facility &amp; Heavy Breakbulk Gantry Access on East Coast Wharf 4.
              </p>
            </div>
          </div>

          {/* Key Stats Beneath Map */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-secondary/30">
            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded bg-surface/10 border border-secondary/40 flex items-center justify-center text-secondary-container shrink-0">
                <span className="material-symbols-outlined text-[20px]">near_me</span>
              </div>
              <div>
                <span className="font-title-md text-title-md text-surface-bright font-bold">3.2 km to VCTPL</span>
                <p className="font-body-sm text-body-sm text-surface-bright/70 mt-0.5">
                  Direct corridor transit to Visakhapatnam Container Terminal Pvt Ltd without arterial city traffic delay.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded bg-surface/10 border border-secondary/40 flex items-center justify-center text-secondary-container shrink-0">
                <span className="material-symbols-outlined text-[20px]">warehouse</span>
              </div>
              <div>
                <span className="font-title-md text-title-md text-surface-bright font-bold">40,000 sq.ft CFS</span>
                <p className="font-body-sm text-body-sm text-surface-bright/70 mt-0.5">
                  Customs bonded container freight station with dedicated covered bays for Sortex grading and packing.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded bg-surface/10 border border-secondary/40 flex items-center justify-center text-secondary-container shrink-0">
                <span className="material-symbols-outlined text-[20px]">speed</span>
              </div>
              <div>
                <span className="font-title-md text-title-md text-surface-bright font-bold">&lt; 24h Turnaround</span>
                <p className="font-body-sm text-body-sm text-surface-bright/70 mt-0.5">
                  From commercial invoice endorsement to gate-in and vessel loading clearance at Quay Berth 04.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
