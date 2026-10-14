"use client";

import React, { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isFinePointer, setIsFinePointer] = useState(false);

  useEffect(() => {
    // Only activate for fine pointer devices (mouse/trackpad, not touchscreens)
    if (typeof window === "undefined") return;
    const mediaQuery = window.matchMedia("(pointer: fine)");
    setIsFinePointer(mediaQuery.matches);

    if (!mediaQuery.matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (
        target?.closest("a") ||
        target?.closest("button") ||
        target?.closest("input") ||
        target?.closest("select") ||
        target?.closest("[role='button']")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isVisible]);

  // Smooth trailing effect for outer ring
  useEffect(() => {
    if (!isFinePointer) return;
    let animationFrameId: number;

    const updateTrailing = () => {
      setTrailingPos((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.18,
        y: prev.y + (position.y - prev.y) * 0.18,
      }));
      animationFrameId = requestAnimationFrame(updateTrailing);
    };

    animationFrameId = requestAnimationFrame(updateTrailing);
    return () => cancelAnimationFrame(animationFrameId);
  }, [position, isFinePointer]);

  if (!isFinePointer || !isVisible) return null;

  return (
    <>
      {/* Small Precision Center Dot */}
      <div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#E5B80B] pointer-events-none z-[100] transition-transform duration-75 shadow-[0_0_8px_#E5B80B]"
        style={{
          transform: `translate3d(${position.x - 4}px, ${position.y - 4}px, 0)`,
        }}
      />

      {/* Elegant Trailing Gold Ring with Hover Expansion */}
      <div
        className={`fixed top-0 left-0 rounded-full border border-[#C5A15B]/60 pointer-events-none z-[99] transition-[width,height,border-color,background-color] duration-300 ease-out ${
          isHovered
            ? "w-11 h-11 border-[#E5B80B] bg-[#E5B80B]/10 shadow-[0_0_15px_rgba(229,184,11,0.35)]"
            : "w-8 h-8"
        }`}
        style={{
          transform: `translate3d(${trailingPos.x - (isHovered ? 22 : 16)}px, ${
            trailingPos.y - (isHovered ? 22 : 16)
          }px, 0)`,
        }}
      />
    </>
  );
}
