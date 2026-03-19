"use client";
import { useState, useRef, useEffect } from "react";

const reels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function ReelDeck() {
  const [active, setActive] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Pause all, play active
  useEffect(() => {
    videoRefs.current.forEach((vid, i) => {
      if (!vid) return;
      if (i === active) {
        vid.play().catch(() => {});
      } else {
        vid.pause();
        vid.currentTime = 0;
      }
    });
  }, [active]);

  const prev = () => setActive((a) => (a - 1 + reels.length) % reels.length);
  const next = () => setActive((a) => (a + 1) % reels.length);

  return (
    <div className="flex flex-col items-center gap-10">
      {/* DECK */}
      <div className="relative w-full flex items-center justify-center h-[620px] md:h-[740px]">
        {reels.map((n, i) => {
          const offset = i - active;

          // Only render cards that are close to active
          if (Math.abs(offset) > 3) return null;

          const isActive = offset === 0;
          const isLeft = offset < 0;

          // Stacking math
          const absOffset = Math.abs(offset);
          const xShift = offset * 100; // how far left/right (px)
          const scale = isActive ? 1 : 1 - absOffset * 0.08;
          const zIndex = 10 - absOffset;
          const brightness = isActive
            ? "grayscale(0%)"
            : `grayscale(${absOffset * 35}%)`;
          const opacity = absOffset > 2 ? 0 : 1 - absOffset * 0.25;
          const rotateY = isActive
            ? 0
            : isLeft
              ? 8 * absOffset
              : -8 * absOffset;

          return (
            <div
              key={n}
              onClick={() => !isActive && setActive(i)}
              style={{
                position: "absolute",
                transform: `translateX(${xShift}px) scale(${scale}) rotateY(${rotateY}deg)`,
                zIndex,
                opacity,
                transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                transformOrigin: isLeft ? "right center" : "left center",
                cursor: isActive ? "default" : "pointer",
              }}
              className="w-[300px] md:w-[360px] h-[533px] md:h-[640px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <video
                ref={(el) => {
                  videoRefs.current[i] = el;
                }}
                src={`/videos/video${n}.mp4`}
                muted
                loop
                playsInline
                preload="metadata"
                style={{ filter: brightness }}
                className="w-full h-full object-cover transition-all duration-500"
              />

              {/* Active: no overlay. Inactive: dark overlay */}
              {!isActive && (
                <div
                  className="absolute inset-0 bg-black/40 flex items-center justify-center"
                  style={{ transition: "opacity 0.5s" }}
                >
                  <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center bg-black/30 backdrop-blur-sm">
                    <svg
                      className="w-4 h-4 text-white ml-0.5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              )}

              {/* Number badge */}
              <div className="absolute bottom-3 left-4 text-white/30 text-xs tracking-widest font-mono">
                {String(n).padStart(2, "0")}
              </div>
            </div>
          );
        })}
      </div>

      {/* CONTROLS */}
      <div className="flex items-center gap-8">
        <button
          onClick={prev}
          className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-foreground/60 hover:text-foreground hover:border-primary transition-all duration-300"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Dots */}
        <div className="flex gap-2">
          {reels.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="transition-all duration-300 rounded-full"
              style={{
                width: i === active ? "24px" : "6px",
                height: "6px",
                background:
                  i === active ? "var(--primary)" : "rgba(255,255,255,0.2)",
              }}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-foreground/60 hover:text-foreground hover:border-primary transition-all duration-300"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Counter */}
      <p className="text-foreground/30 text-sm tracking-widest uppercase font-mono">
        {String(active + 1).padStart(2, "0")} /{" "}
        {String(reels.length).padStart(2, "0")}
      </p>
    </div>
  );
}
