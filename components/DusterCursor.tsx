"use client";

import { useEffect, useRef } from "react";

/**
 * Custom duster cursor that trails falling "dust" as it moves.
 * - Desktop only (fine pointer); on touch devices it does nothing.
 * - Respects prefers-reduced-motion (cursor shows, dust is disabled).
 * - Particle DOM nodes self-remove on animationend; spawn is throttled.
 */
export function DusterCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    if (!finePointer) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cursor = cursorRef.current;
    const layer = layerRef.current;
    if (!cursor || !layer) return;

    document.body.classList.add("duster-active");

    let lastSpawn = 0;
    let lastX = -100;
    let lastY = -100;

    const spawn = (px: number, py: number, count: number) => {
      for (let i = 0; i < count; i++) {
        const p = document.createElement("span");
        p.className = `duster-particle s${Math.floor(Math.random() * 4)}`;
        const size = 36 + Math.random() * 74;
        const drift = (Math.random() - 0.5) * 130;
        const fall = 6 + Math.random() * 52;
        const rot = (Math.random() - 0.5) * 140;
        p.style.setProperty("--x", `${px + (Math.random() - 0.5) * 22}px`);
        p.style.setProperty("--y", `${py + (Math.random() - 0.5) * 18}px`);
        p.style.setProperty("--dx", `${drift}px`);
        p.style.setProperty("--dy", `${fall}px`);
        p.style.setProperty("--rot", `${rot}deg`);
        p.style.setProperty("--peak", `${0.48 + Math.random() * 0.28}`);
        p.style.width = `${size}px`;
        p.style.height = `${size}px`;
        p.style.animationDuration = `${1100 + Math.random() * 950}ms`;
        layer.appendChild(p);
        p.addEventListener("animationend", () => p.remove(), { once: true });
      }
    };

    const onMove = (e: PointerEvent) => {
      const { clientX: x, clientY: y } = e;
      cursor.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      cursor.style.opacity = "1";
      if (reduce) return;
      const now = performance.now();
      const dist = Math.hypot(x - lastX, y - lastY);
      if (now - lastSpawn > 58 && dist > 5) {
        spawn(x, y, Math.min(2, 1 + Math.floor(dist / 42)));
        lastSpawn = now;
        lastX = x;
        lastY = y;
      }
    };

    const onDown = (e: PointerEvent) => {
      if (!reduce) spawn(e.clientX, e.clientY, 8);
    };
    const onLeave = () => {
      cursor.style.opacity = "0";
    };
    const onEnter = () => {
      cursor.style.opacity = "1";
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onDown, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      document.body.classList.remove("duster-active");
    };
  }, []);

  return (
    <>
      {/* Turbulence filters that warp each puff into organic smoke */}
      <svg className="duster-defs" width="0" height="0" aria-hidden="true">
        <defs>
          {[0, 1, 2, 3].map((i) => (
            <filter key={i} id={`dsmoke${i}`} x="-80%" y="-80%" width="260%" height="260%">
              <feTurbulence
                type="fractalNoise"
                baseFrequency={0.013 + i * 0.004}
                numOctaves={2}
                seed={i * 7 + 3}
                result="noise"
              />
              <feDisplacementMap
                in="SourceGraphic"
                in2="noise"
                scale={26 + i * 8}
                xChannelSelector="R"
                yChannelSelector="G"
              />
              <feGaussianBlur stdDeviation={2.8} />
            </filter>
          ))}
        </defs>
      </svg>
      <div ref={layerRef} className="duster-layer" aria-hidden="true" />
      <div ref={cursorRef} className="duster-cursor" aria-hidden="true">
        <svg width="92" height="92" viewBox="0 0 92 92" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="dust-head" x1="20" y1="14" x2="60" y2="58" gradientUnits="userSpaceOnUse">
              <stop stopColor="#D7D5DE" />
              <stop offset="1" stopColor="#9C99A8" />
            </linearGradient>
            <linearGradient id="dust-handle" x1="48" y1="48" x2="84" y2="84" gradientUnits="userSpaceOnUse">
              <stop stopColor="#E2E2E8" />
              <stop offset="1" stopColor="#A6A6B0" />
            </linearGradient>
          </defs>
          <g transform="rotate(-30 46 48)">
            {/* telescopic handle */}
            <rect x="42" y="44" width="8" height="42" rx="4" fill="url(#dust-handle)" />
            <rect x="43.2" y="58" width="5.6" height="1.6" rx="0.8" fill="#7E7E8A" opacity="0.6" />
            <rect x="43.2" y="64" width="5.6" height="1.6" rx="0.8" fill="#7E7E8A" opacity="0.6" />
            {/* grip */}
            <rect x="41" y="74" width="10" height="14" rx="5" fill="#8B8997" />
            {/* fluffy head: solid core + fuzzy dashed edges */}
            <ellipse cx="46" cy="27" rx="20" ry="25" fill="url(#dust-head)" />
            <ellipse
              cx="46"
              cy="27"
              rx="22.5"
              ry="27.5"
              fill="none"
              stroke="#C6C3CE"
              strokeWidth="6"
              strokeLinecap="round"
              strokeDasharray="0.5 7"
            />
            <ellipse
              cx="46"
              cy="27"
              rx="25"
              ry="30"
              fill="none"
              stroke="#B9B6C4"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray="0.5 9"
              opacity="0.8"
            />
            {/* soft inner highlights / texture bands */}
            <path d="M33 20c8 4 18 4 26 0" stroke="#EDECF1" strokeWidth="2.4" strokeLinecap="round" opacity="0.6" />
            <path d="M31 30c10 4 20 4 30 0" stroke="#86838F" strokeWidth="2.2" strokeLinecap="round" opacity="0.45" />
            <path d="M34 38c7 3 15 3 24 0" stroke="#EDECF1" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
          </g>
        </svg>
      </div>
    </>
  );
}
