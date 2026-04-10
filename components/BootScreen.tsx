"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import huromataMark from "@/images/huromata-mark.png";
import { playBoot } from "@/lib/sounds";

const STATUS_LINES = [
  "Loading engineering stack",
  "Initializing software core",
  "Calibrating systems",
];

export default function BootScreen() {
  const [mounted, setMounted] = useState(false);
  const [shouldShow, setShouldShow] = useState(false);
  const [phase, setPhase] = useState<"idle" | "booting">("idle");
  const [lines, setLines] = useState([false, false, false]);
  const [progress, setProgress] = useState(0);
  const [showReady, setShowReady] = useState(false);
  const [exiting, setExiting] = useState(false);
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    setMounted(true);
    const booted = sessionStorage.getItem("huro_boot");
    if (!booted) setShouldShow(true);
  }, []);

  useEffect(() => {
    return () => {
      timersRef.current.forEach(clearTimeout);
    };
  }, []);

  function handleEnter() {
    setPhase("booting");
    playBoot();

    const push = (fn: () => void, ms: number) => {
      const timer = setTimeout(fn, ms);
      timersRef.current.push(timer);
    };

    push(() => setLines([true, false, false]), 1000);
    push(() => setLines([true, true, false]), 2000);
    push(() => setLines([true, true, true]), 3000);
    push(() => setProgress(100), 3200);
    push(() => setShowReady(true), 3800);
    push(() => setExiting(true), 4300);
    push(() => {
      sessionStorage.setItem("huro_boot", "1");
      setShouldShow(false);
    }, 5000);
  }

  if (!mounted || !shouldShow) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black transition-opacity duration-700 ${
        exiting ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
      aria-modal="true"
      role="dialog"
      aria-label="System initializing"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, #fff 2px, #fff 3px)",
        }}
        aria-hidden="true"
      />

      {phase === "idle" ? (
        <div className="flex flex-col items-center gap-6 text-center font-mono">
          <Image
            src={huromataMark}
            alt=""
            width={64}
            height={70}
            className="h-[70px] w-auto animate-pulse object-contain opacity-80"
            aria-hidden="true"
            priority
          />

          <div>
            <p className="text-3xl font-bold tracking-[0.3em] text-white sm:text-4xl">
              HUROMATA
            </p>
            <p className="mt-2 text-xs uppercase tracking-widest text-white/40">
              Product Engineering Studio
            </p>
          </div>

          <div className="h-px w-48 bg-white/10" aria-hidden="true" />

          <p className="text-xs uppercase tracking-widest text-white/30">Est. 2019</p>

          <button
            onClick={handleEnter}
            className="mt-4 rounded border border-white/20 px-8 py-3 text-xs font-bold uppercase tracking-[0.25em] text-white/70 transition-all duration-300 hover:border-white/60 hover:text-white hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/50"
            style={{
              animation: "bootPulse 2.5s ease-in-out infinite",
            }}
          >
            Initialize System
          </button>

          <p className="text-[10px] uppercase tracking-widest text-white/20">
            Click to enter
          </p>
        </div>
      ) : (
        <div className="w-full max-w-sm px-8 font-mono">
          <div className="mb-10 flex flex-col items-center gap-3 text-center">
            <Image
              src={huromataMark}
              alt=""
              width={44}
              height={48}
              className="h-12 w-auto animate-pulse object-contain opacity-80"
              aria-hidden="true"
              priority
            />
            <p className="text-xl font-bold tracking-[0.3em] text-white">HUROMATA</p>
          </div>

          <div className="space-y-3" role="log" aria-live="polite">
            {STATUS_LINES.map((line, i) => (
              <div
                key={line}
                className={`flex items-center justify-between text-xs transition-opacity duration-500 ${
                  lines[i] ? "opacity-100" : "opacity-0"
                }`}
              >
                <span className="text-white/50">
                  <span className="mr-2 text-white/30">&gt;</span>
                  {line}...
                </span>
                {lines[i] && (
                  <span className="text-[10px] text-green-400">OK</span>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 h-px w-full bg-white/10" aria-hidden="true">
            <div
              className="h-full bg-white/70"
              style={{
                width: `${progress}%`,
                transition: "width 0.8s ease-out",
              }}
            />
          </div>

          <div
            className={`mt-8 text-center transition-opacity duration-500 ${
              showReady ? "opacity-100" : "opacity-0"
            }`}
            aria-live="polite"
          >
            <p className="text-xs font-bold uppercase tracking-[0.4em] text-white">
              System Ready
            </p>
          </div>
        </div>
      )}

      <style>{`
        @keyframes bootPulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
