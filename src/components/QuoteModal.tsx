"use client";

import React, { useState, useEffect } from "react";
import { useQuoteModal } from "@/context/QuoteModalContext";
import { useData } from "@/context/DataContext";

export default function QuoteModal() {
  const { isOpen, prefilledCommodity, closeQuoteModal } = useQuoteModal();
  const { addEnquiry } = useData();
  const [commodity, setCommodity] = useState(prefilledCommodity || "1121-basmati");
  const [incoterm, setIncoterm] = useState("FOB");
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    destinationPort: "",
    quantity: "",
    notes: "",
  });

  useEffect(() => {
    if (prefilledCommodity) {
      setCommodity(prefilledCommodity);
    }
  }, [prefilledCommodity]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addEnquiry({
      fullName: formData.fullName || "International Buyer",
      email: formData.email,
      phone: formData.phone,
      company: formData.company,
      commodity: `${commodity} (${incoterm})`,
      destinationPort: formData.destinationPort,
      quantity: formData.quantity,
      notes: formData.notes,
    });
    setSubmitted(true);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    closeQuoteModal();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl bg-surface border border-secondary/40 rounded-lg shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-on-primary-fixed text-surface-bright px-6 py-5 flex items-center justify-between border-b border-secondary/30">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded bg-primary text-secondary-container flex items-center justify-center border border-secondary/40">
              <span className="material-symbols-outlined text-[20px]">request_quote</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-fixed animate-pulse"></span>
                <span className="font-eyebrow-bold text-eyebrow-bold uppercase tracking-widest text-secondary-fixed">
                  Visakhapatnam Port Trade Desk
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-surface-bright">Request Official Export Quote</h3>
            </div>
          </div>
          <button 
            type="button"
            onClick={handleResetAndClose}
            aria-label="Close modal"
            className="w-8 h-8 rounded-full bg-surface-bright/10 hover:bg-surface-bright/20 flex items-center justify-center text-surface-bright transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
          {submitted ? (
            <div className="py-8 text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-primary-container/20 text-primary flex items-center justify-center mb-4 border border-primary/30">
                <span className="material-symbols-outlined text-[36px]">verified</span>
              </div>
              <span className="font-eyebrow-bold text-eyebrow-bold uppercase tracking-widest text-secondary mb-1">
                DISPATCH REF: SVMR-QT-{Math.floor(100000 + Math.random() * 900000)}
              </span>
              <h4 className="font-headline-sm text-headline-sm text-on-surface mb-3">
                Commercial Inquiry Registered
              </h4>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-md mx-auto mb-6">
                Thank you, <span className="font-semibold text-on-surface">{formData.fullName || "valued partner"}</span>. Our marine dispatch desk at Visakhapatnam Port is preparing your formal proforma quotation sheet for <span className="font-semibold text-on-surface">{commodity}</span> under <span className="font-semibold text-on-surface">{incoterm}</span> terms. Guaranteed response within 24 hours.
              </p>
              <div className="bg-surface-container p-4 rounded border border-secondary/20 font-data-mono text-data-mono text-on-surface-variant text-sm mb-6 w-full max-w-md text-left">
                <div className="flex justify-between py-1 border-b border-outline-variant/30">
                  <span>Destination POD:</span>
                  <span className="font-semibold text-on-surface">{formData.destinationPort || "Rotterdam / Jebel Ali"}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-outline-variant/30">
                  <span>Target Volume:</span>
                  <span className="font-semibold text-on-surface">{formData.quantity || "1 x 40ft FCL"}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span>Inspection Protocol:</span>
                  <span className="font-semibold text-primary">SGS / APEDA Certified</span>
                </div>
              </div>
              <button
                type="button"
                onClick={handleResetAndClose}
                className="bg-primary text-on-primary font-label-md text-label-md px-6 py-2.5 rounded hover:bg-primary-container transition-colors shadow-sm"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Direct your cargo specifications to our maritime desk for firm proforma pricing and vessel slot reservation.
              </p>

              {/* Row 1: Name & Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-label-md text-label-md text-on-surface mb-1" htmlFor="modal-name">
                    Full Name *
                  </label>
                  <input
                    id="modal-name"
                    required
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Captain Marcus Vance"
                    className="w-full bg-surface-container-low px-3.5 py-2.5 border border-secondary/30 rounded focus:border-primary focus:outline-none font-body-md text-body-md text-on-surface"
                  />
                </div>
                <div>
                  <label className="block font-label-md text-label-md text-on-surface mb-1" htmlFor="modal-company">
                    Company / Organization *
                  </label>
                  <input
                    id="modal-company"
                    required
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Vance Trading B.V."
                    className="w-full bg-surface-container-low px-3.5 py-2.5 border border-secondary/30 rounded focus:border-primary focus:outline-none font-body-md text-body-md text-on-surface"
                  />
                </div>
              </div>

              {/* Row 2: Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-label-md text-label-md text-on-surface mb-1" htmlFor="modal-email">
                    Corporate Email *
                  </label>
                  <input
                    id="modal-email"
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="procurement@vance-trade.com"
                    className="w-full bg-surface-container-low px-3.5 py-2.5 border border-secondary/30 rounded focus:border-primary focus:outline-none font-body-md text-body-md text-on-surface"
                  />
                </div>
                <div>
                  <label className="block font-label-md text-label-md text-on-surface mb-1" htmlFor="modal-phone">
                    Phone / WhatsApp *
                  </label>
                  <input
                    id="modal-phone"
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+31 20 890 1234"
                    className="w-full bg-surface-container-low px-3.5 py-2.5 border border-secondary/30 rounded focus:border-primary focus:outline-none font-body-md text-body-md text-on-surface"
                  />
                </div>
              </div>

              {/* Row 3: Commodity Line */}
              <div>
                <label className="block font-label-md text-label-md text-on-surface mb-1" htmlFor="modal-commodity">
                  Commodity Requirement *
                </label>
                <select
                  id="modal-commodity"
                  value={commodity}
                  onChange={(e) => setCommodity(e.target.value)}
                  className="w-full bg-surface-container-low px-3.5 py-2.5 border border-secondary/30 rounded focus:border-primary focus:outline-none font-body-md text-body-md text-on-surface"
                >
                  <option value="1121-basmati">1121 Basmati Rice (Raw / Steam / Sella 8.35mm+)</option>
                  <option value="organic-turmeric">Organic Turmeric (Finger / Powder &gt;3.5% Curcumin)</option>
                  <option value="tellicherry-pepper">Malabar / Tellicherry Black Pepper (550-600 G/L)</option>
                  <option value="guntur-chilli">Guntur S17 / Teja Red Chilli (Stemless / Stem)</option>
                  <option value="cotton-fabrics">Indian Raw Cotton &amp; Grey Fabrics (Combed / Carded)</option>
                  <option value="cashews">W180 / W240 / W320 Cashew Kernels</option>
                  <option value="pulses-oilseeds">Non-GMO Soybeans, Sesame Seeds &amp; Pulses</option>
                  <option value="other-spices">Other Agro Commodities / Custom Export Specification</option>
                </select>
              </div>

              {/* Row 4: Incoterm & Volume */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-label-md text-label-md text-on-surface mb-1">
                    Target Incoterm (Incoterms 2020)
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {["FOB", "CIF", "CFR"].map((term) => (
                      <button
                        key={term}
                        type="button"
                        onClick={() => setIncoterm(term)}
                        className={`py-2 text-center rounded font-label-md text-label-md transition-colors border ${
                          incoterm === term
                            ? "bg-primary text-on-primary border-primary font-bold shadow-xs"
                            : "bg-surface-container text-on-surface-variant border-outline-variant/40 hover:border-secondary"
                        }`}
                      >
                        {term}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block font-label-md text-label-md text-on-surface mb-1" htmlFor="modal-quantity">
                    Target Volume / Container Load *
                  </label>
                  <input
                    id="modal-quantity"
                    required
                    type="text"
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    placeholder="e.g. 2 x 40ft FCL (56 MT)"
                    className="w-full bg-surface-container-low px-3.5 py-2.5 border border-secondary/30 rounded focus:border-primary focus:outline-none font-body-md text-body-md text-on-surface"
                  />
                </div>
              </div>

              {/* Row 5: Destination POD */}
              <div>
                <label className="block font-label-md text-label-md text-on-surface mb-1" htmlFor="modal-pod">
                  Destination Discharge Port &amp; Country *
                </label>
                <input
                  id="modal-pod"
                  required
                  type="text"
                  value={formData.destinationPort}
                  onChange={(e) => setFormData({ ...formData, destinationPort: e.target.value })}
                  placeholder="e.g. Port of Rotterdam, Netherlands or Jebel Ali Port, UAE"
                  className="w-full bg-surface-container-low px-3.5 py-2.5 border border-secondary/30 rounded focus:border-primary focus:outline-none font-body-md text-body-md text-on-surface"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="font-data-mono text-data-mono text-secondary flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px]">verified</span>
                  <span>Direct Quay INVTZ1 Dispatch Guarantee</span>
                </span>
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-secondary text-surface-container-lowest font-label-md text-label-md px-7 py-3 rounded hover:bg-on-secondary-fixed-variant transition-colors shadow-sm"
                >
                  <span>Submit Commercial Inquiry</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
