"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let animId: number;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Move dot instantly
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      }
      if (!isVisible) setIsVisible(true);
    };

    // Smooth ring follow using rAF
    const animate = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px)`;
      }
      animId = requestAnimationFrame(animate);
    };
    animId = requestAnimationFrame(animate);

    // Hover detection on interactive elements
    const addHover = () => setIsHovering(true);
    const removeHover = () => setIsHovering(false);
    const onDown = () => setIsClicking(true);
    const onUp = () => setIsClicking(false);
    const onLeave = () => setIsVisible(false);
    const onEnter = () => setIsVisible(true);

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("mouseup", onUp);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    const interactives = document.querySelectorAll(
      "a, button, [role='button'], input, textarea, select, label"
    );
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    // Watch for new DOM nodes (for dynamic elements)
    const observer = new MutationObserver(() => {
      document.querySelectorAll(
        "a, button, [role='button'], input, textarea, select, label"
      ).forEach((el) => {
        el.removeEventListener("mouseenter", addHover);
        el.removeEventListener("mouseleave", removeHover);
        el.addEventListener("mouseenter", addHover);
        el.addEventListener("mouseleave", removeHover);
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      cancelAnimationFrame(animId);
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", addHover);
        el.removeEventListener("mouseleave", removeHover);
      });
      observer.disconnect();
    };
  }, []);

  // Hide on touch devices
  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <>
      {/* Main dot — follows instantly */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999] -translate-x-1/2 -translate-y-1/2"
        style={{ willChange: "transform" }}
      >
        <div
          className="transition-all duration-150"
          style={{
            width: isHovering ? "10px" : isClicking ? "6px" : "8px",
            height: isHovering ? "10px" : isClicking ? "6px" : "8px",
            borderRadius: "50%",
            background: isHovering ? "#22d3ee" : "#06b6d4",
            boxShadow: "0 0 8px rgba(6,182,212,0.9)",
            opacity: isVisible ? 1 : 0,
          }}
        />
      </div>

      {/* Trailing ring — lags behind with smooth interpolation */}
      <div
        ref={ringRef}
        className="pointer-events-none fixed top-0 left-0 z-[9998] -translate-x-1/2 -translate-y-1/2"
        style={{ willChange: "transform" }}
      >
        <div
          className="transition-all duration-200"
          style={{
            width: isHovering ? "44px" : isClicking ? "24px" : "36px",
            height: isHovering ? "44px" : isClicking ? "24px" : "36px",
            borderRadius: "50%",
            border: `1.5px solid ${isHovering ? "#22d3ee" : "#06b6d4"}`,
            boxShadow: isHovering
              ? "0 0 16px rgba(34,211,238,0.5), inset 0 0 8px rgba(34,211,238,0.1)"
              : "0 0 8px rgba(6,182,212,0.3)",
            background: isHovering ? "rgba(6,182,212,0.06)" : "transparent",
            opacity: isVisible ? 1 : 0,
          }}
        />
      </div>
    </>
  );
}
