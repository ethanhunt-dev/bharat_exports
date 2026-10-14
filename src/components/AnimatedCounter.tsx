"use client";

import React, { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  target: number;
  duration?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export default function AnimatedCounter({
  target,
  duration = 2000,
  decimals = 0,
  prefix = "",
  suffix = "",
  className = "",
}: AnimatedCounterProps) {
  const [currentValue, setCurrentValue] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          const startTime = performance.now();

          const updateCount = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Ease out expo: 1 - Math.pow(2, -10 * progress)
            const easedProgress =
              progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

            const nextVal = easedProgress * target;
            setCurrentValue(nextVal);

            if (progress < 1) {
              requestAnimationFrame(updateCount);
            } else {
              setCurrentValue(target);
            }
          };

          requestAnimationFrame(updateCount);
        }
      },
      { threshold: 0.15 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [target, duration]);

  const formattedValue =
    decimals > 0
      ? currentValue.toFixed(decimals)
      : Math.floor(currentValue).toLocaleString();

  return (
    <span ref={elementRef} className={`tabular-nums ${className}`}>
      {prefix}
      {formattedValue}
      {suffix}
    </span>
  );
}
