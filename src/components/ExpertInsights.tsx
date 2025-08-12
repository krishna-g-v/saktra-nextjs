"use client";
import { useRef, useState, useEffect } from "react";
import gsap from "gsap";

export default function ScrollableCardCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [maxScroll, setMaxScroll] = useState(0);
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const updateScrollValues = () => {
      setMaxScroll(container.scrollWidth - container.clientWidth);
      setScrollPos(container.scrollLeft);
    };

    updateScrollValues();
    window.addEventListener("resize", updateScrollValues);
    return () => window.removeEventListener("resize", updateScrollValues);
  }, []);

  const scrollAmount = 300; // px to scroll per click

  const handleScroll = (direction: "left" | "right") => {
    const container = containerRef.current;
    if (!container) return;

    const newScroll =
      direction === "left"
        ? Math.max(0, container.scrollLeft - scrollAmount)
        : Math.min(maxScroll, container.scrollLeft + scrollAmount);

    gsap.to(container, {
      duration: 0.5,
      scrollLeft: newScroll,
      onUpdate: () => {
        setScrollPos(container.scrollLeft);
      },
    });
  };

  return (
    <div className="relative w-full">
      {/* Scroll buttons */}
      <button
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 shadow"
        onClick={() => handleScroll("left")}
        disabled={scrollPos === 0}
      >
        ⬅️
      </button>
      <button
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 shadow"
        onClick={() => handleScroll("right")}
        disabled={scrollPos >= maxScroll}
      >
        ➡️
      </button>

      {/* Card container */}
      <div
        ref={containerRef}
        className="overflow-x-hidden flex space-x-4 px-12 py-4 scrollbar-hide"
      >
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="min-w-[200px] h-[150px] bg-blue-500 text-white flex items-center justify-center rounded-lg shadow-md"
          >
            Card {i + 1}
          </div>
        ))}
      </div>
    </div>
  );
}
