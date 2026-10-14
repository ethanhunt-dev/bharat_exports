"use client";

import React from "react";
import Link from "next/link";

interface PageBannerProps {
  title: string;
  eyebrow?: string;
  breadcrumbCurrent: string;
  parentBreadcrumb?: { label: string; href: string };
  bgImage: string;
  description?: string;
  metaBadge?: {
    label: string;
    value: string;
  };
}

export default function PageBanner({
  title,
  eyebrow,
  breadcrumbCurrent,
  parentBreadcrumb,
  bgImage,
  description,
  metaBadge,
}: PageBannerProps) {
  return (
    <section className="relative w-full overflow-hidden border-b-2 border-[#C5A15B]/40 shadow-[0_4px_25px_rgba(197,161,91,0.2)] bg-[#0B281D]">
      {/* Background Photographic Image with Dark Vignette & Emerald Tint */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgImage}
          alt={title}
          className="w-full h-full object-cover object-center scale-105 filter brightness-75 contrast-110"
        />
        {/* Layered cinematic gradient overlays for high text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B281D]/95 via-[#0B281D]/80 to-[#123D2B]/90 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B281D] via-transparent to-black/40" />
      </div>

      {/* Ambient subtle grid pattern */}
      <div
        className="absolute inset-0 z-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#C5A15B 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-16 md:py-20 lg:py-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          {/* Left: Eyebrow + Large Editorial Page Title */}
          <div className="max-w-2xl">
            {eyebrow && (
              <div className="flex items-center gap-2.5 mb-3">
                <span className="w-6 h-0.5 bg-[#C5A15B]" />
                <span className="font-sans text-xs uppercase tracking-[0.25em] text-[#FDE047] font-bold">
                  {eyebrow}
                </span>
              </div>
            )}
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-white drop-shadow-md">
              {title}
            </h1>
            {description && (
              <p className="mt-3 text-sm sm:text-base text-[#F7F4EB]/85 font-sans leading-relaxed max-w-xl">
                {description}
              </p>
            )}
          </div>

          {/* Right: Breadcrumb & Optional Meta Badge */}
          <div className="flex flex-col md:items-end gap-4">
            {/* Breadcrumb matching reference site style */}
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs sm:text-sm font-sans">
              <Link
                href="/"
                className="text-[#E5B80B] hover:text-[#FDE047] font-bold transition-colors flex items-center gap-1 group"
              >
                <span>Home</span>
              </Link>
              <span className="text-[#C5A15B]/70 font-semibold">—</span>
              {parentBreadcrumb && (
                <>
                  <Link
                    href={parentBreadcrumb.href}
                    className="text-[#E5B80B] hover:text-[#FDE047] font-bold transition-colors"
                  >
                    {parentBreadcrumb.label}
                  </Link>
                  <span className="text-[#C5A15B]/70 font-semibold">—</span>
                </>
              )}
              <span className="text-white font-semibold">{breadcrumbCurrent}</span>
            </nav>

            {/* Optional Port Corridor Status Badge */}
            {metaBadge && (
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-lg bg-[#0B281D]/80 backdrop-blur-md border border-[#C5A15B]/40 shadow-sm text-xs font-mono">
                <span className="w-2 h-2 rounded-full bg-[#86D7A9] animate-pulse" />
                <span className="text-[#C5A15B] font-bold uppercase">{metaBadge.label}:</span>
                <span className="text-white font-medium">{metaBadge.value}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
