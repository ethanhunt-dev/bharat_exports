"use client";

import React, { useState } from "react";

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
      {/* Expanded Quick Options */}
      {isOpen && (
        <div className="flex flex-col items-end gap-2.5 animate-fadeIn mb-1">
          {/* Email Button */}
          <a
            href="mailto:export@bharatglobalexports.com?subject=Export%20Commodity%20Inquiry%20-%20Bharat%20Global%20Exports"
            className="flex items-center gap-3 bg-[#0B281D] text-white px-4 py-2.5 rounded-full shadow-2xl border border-[#C5A15B]/50 hover:bg-[#123D2B] hover:scale-105 transition-all text-xs font-semibold group"
            title="Email Trade Desk"
          >
            <span className="font-sans text-[11px] uppercase tracking-wider text-[#F7F4EB] hidden sm:inline">
              Email Desk
            </span>
            <div className="w-8 h-8 rounded-full bg-[#1C543B] flex items-center justify-center text-[#E5B80B]">
              <span className="material-symbols-outlined text-[18px]">mail</span>
            </div>
          </a>

          {/* WhatsApp Direct Chat */}
          <a
            href="https://wa.me/919876543210?text=Hello%20Bharat%20Global%20Exports%20Team%2C%20I%20would%20like%20to%20inquire%20about%20your%20export%20commodities%20and%20shipping%20specs."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[#25D366] text-white px-4 py-2.5 rounded-full shadow-2xl hover:brightness-110 hover:scale-105 transition-all text-xs font-semibold group"
            title="Chat on WhatsApp"
          >
            <span className="font-sans text-[11px] uppercase tracking-wider text-white hidden sm:inline font-bold">
              WhatsApp Desk
            </span>
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.966.527 1.947.818 2.796.819 3.18 0 5.766-2.587 5.767-5.767.001-3.18-2.584-5.765-5.767-5.765zm3.385 8.169c-.145.408-.737.769-1.02.812-.279.043-.642.062-1.922-.469-1.579-.654-2.593-2.261-2.671-2.366-.079-.105-.639-.851-.639-1.624 0-.773.407-1.154.551-1.311.145-.157.316-.197.421-.197.105 0 .21.002.302.007.098.005.229-.037.359.274.132.316.452 1.104.492 1.184.039.08.065.172.013.276-.052.105-.078.172-.157.263-.079.092-.167.205-.238.275-.08.079-.163.165-.07.324.093.159.412.68 0.884 1.101.607.541 1.119.708 1.277.787.158.079.25.066.342-.04.092-.105.394-.459.499-.616.105-.157.21-.131.355-.079.145.052.92.434 1.077.513.158.079.263.118.302.184.039.066.039.382-.106.79z" />
              </svg>
            </div>
          </a>
        </div>
      )}

      {/* Primary Toggle Floating Orb */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 ${
          isOpen
            ? "bg-[#0B281D] text-[#E5B80B] border-2 border-[#C5A15B] rotate-90"
            : "bg-gradient-to-tr from-[#128C7E] to-[#25D366] text-white hover:scale-110 shadow-[0_4px_25px_rgba(37,211,102,0.45)]"
        }`}
        aria-label="Contact via WhatsApp or Email"
      >
        {isOpen ? (
          <span className="material-symbols-outlined text-[26px]">close</span>
        ) : (
          <div className="relative flex items-center justify-center">
            <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.966.527 1.947.818 2.796.819 3.18 0 5.766-2.587 5.767-5.767.001-3.18-2.584-5.765-5.767-5.765zm3.385 8.169c-.145.408-.737.769-1.02.812-.279.043-.642.062-1.922-.469-1.579-.654-2.593-2.261-2.671-2.366-.079-.105-.639-.851-.639-1.624 0-.773.407-1.154.551-1.311.145-.157.316-.197.421-.197.105 0 .21.002.302.007.098.005.229-.037.359.274.132.316.452 1.104.492 1.184.039.08.065.172.013.276-.052.105-.078.172-.157.263-.079.092-.167.205-.238.275-.08.079-.163.165-.07.324.093.159.412.68 0.884 1.101.607.541 1.119.708 1.277.787.158.079.25.066.342-.04.092-.105.394-.459.499-.616.105-.157.21-.131.355-.079.145.052.92.434 1.077.513.158.079.263.118.302.184.039.066.039.382-.106.79z" />
            </svg>
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-[#E5B80B] rounded-full animate-ping" />
          </div>
        )}
      </button>
    </div>
  );
}
