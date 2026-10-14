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
    <section className="relative w-full overflow-hidden bg-[#081710] border-b border-[#C5A15B]/30 shadow-2xl">
      {/* Background Photographic Image with Dark Vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgImage}
          alt={title}
          className="w-full h-full object-cover object-center scale-105 filter brightness-70 contrast-115"
        />
        {/* Layered cinematic dark gradient overlay matching Skanda reference */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#081710] via-transparent to-black/60" />
      </div>

      {/* Skanda-Style Concentric Geometric Wave Lines on Left */}
      <div className="absolute top-0 bottom-0 left-0 w-full md:w-2/3 pointer-events-none z-[1] opacity-25">
        <svg
          viewBox="0 0 700 350"
          className="w-full h-full object-cover"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="M -100 0 C 150 120, 320 200, 480 350"
            stroke="#C5A15B"
            strokeWidth="1.2"
          />
          <path
            d="M -100 50 C 160 160, 340 230, 520 350"
            stroke="#FFFFFF"
            strokeWidth="0.8"
            strokeDasharray="4 4"
          />
          <path
            d="M -100 100 C 180 200, 360 260, 560 350"
            stroke="#E5B80B"
            strokeWidth="1.2"
          />
          <path
            d="M -100 150 C 200 240, 380 290, 600 350"
            stroke="#FFFFFF"
            strokeWidth="0.7"
          />
          <path
            d="M -100 200 C 220 280, 400 320, 640 350"
            stroke="#C5A15B"
            strokeWidth="1.2"
            strokeDasharray="6 6"
          />
        </svg>
      </div>

      {/* Content Container (starts at top, padded to sit below 80px transparent navbar) */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-28 pb-14 sm:pt-32 sm:pb-16 lg:pt-36 lg:pb-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          {/* Left: Large Bold Title (Matching Skanda Demo Style) */}
          <div className="max-w-2xl">
            {eyebrow && (
              <div className="flex items-center gap-2.5 mb-2">
                <span className="w-5 h-0.5 bg-[#E5B80B]" />
                <span className="font-sans text-xs uppercase tracking-[0.22em] text-[#E5B80B] font-bold">
                  {eyebrow}
                </span>
              </div>
            )}
            <h1 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight drop-shadow-lg">
              {title}
            </h1>
            {description && (
              <p className="mt-2.5 text-xs sm:text-sm text-[#DDD4BF] font-sans leading-relaxed max-w-xl">
                {description}
              </p>
            )}
          </div>

          {/* Right: Breadcrumb & Meta Badge (Matching Skanda Demo 'Home — Services') */}
          <div className="flex flex-col md:items-end gap-3">
            <nav
              aria-label="Breadcrumb"
              className="flex items-center text-sm sm:text-base font-sans font-semibold drop-shadow-md"
            >
              <Link
                href="/"
                className="text-[#BA1A1A] sm:text-[#E5B80B] hover:text-[#FDE047] transition-colors"
              >
                Home
              </Link>
              <span className="text-white/60 mx-2.5 font-bold">—</span>
              {parentBreadcrumb && (
                <>
                  <Link
                    href={parentBreadcrumb.href}
                    className="text-[#BA1A1A] sm:text-[#E5B80B] hover:text-[#FDE047] transition-colors"
                  >
                    {parentBreadcrumb.label}
                  </Link>
                  <span className="text-white/60 mx-2.5 font-bold">—</span>
                </>
              )}
              <span className="text-white font-bold">{breadcrumbCurrent}</span>
            </nav>

            {metaBadge && (
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded bg-black/50 backdrop-blur-md border border-[#C5A15B]/30 text-xs font-mono">
                <span className="w-2 h-2 rounded-full bg-[#86D7A9] animate-pulse" />
                <span className="text-[#E5B80B] font-bold uppercase">{metaBadge.label}:</span>
                <span className="text-white font-medium">{metaBadge.value}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
