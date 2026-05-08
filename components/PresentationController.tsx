"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Stop = {
  id: string;
  duration: number;
  subtitle: string;
};

const stops: Stop[] = [
  {
    id: "slide-1",
    duration: 25000,
    subtitle:
      "NextStopTravel presenterer en skreddersydd studietur til Napoli — for Metis videregående, Business vg1. Fem dager. Fire netter.",
  },
  {
    id: "slide-2",
    duration: 40000,
    subtitle:
      "Hvorfor Napoli? Fordi det er mer enn en skoletur. Pompeii og Vesuv kommer til live. Pizza napoletana er UNESCO-immateriell kulturarv. Hver opplevelse er forankret i pensum.",
  },
  {
    id: "dag-1",
    duration: 15000,
    subtitle:
      "Dag én: Direktefly fra Bergen, innsjekk på Hotel Partenopeo og velkomstmiddag — autentisk pizza napoletana.",
  },
  {
    id: "dag-2",
    duration: 15000,
    subtitle:
      "Dag to: Guidet byvandring i UNESCO-sentrum, Cappella Sansevero og lokale markeder.",
  },
  {
    id: "dag-3",
    duration: 15000,
    subtitle:
      "Dag tre: Heldagsutflukt til Pompeii og opp på Vesuv-krateret med fantastisk utsikt.",
  },
  {
    id: "dag-4",
    duration: 15000,
    subtitle:
      "Dag fire: Museo Archeologico, bedriftsbesøk hos lokal pizzeria — matkultur som forretningsmodell.",
  },
  {
    id: "dag-5",
    duration: 15000,
    subtitle:
      "Dag fem: Oppsummering, vandring til Castel dell'Ovo og hjemreise med minner for livet.",
  },
  {
    id: "slide-4",
    duration: 30000,
    subtitle:
      "Hotel Partenopeo Student Stay. Sentralt og trygt. 3- til 6-mannsrom for elever, enkeltrom for lærere. Fem minutter til metro.",
  },
  {
    id: "slide-5",
    duration: 50000,
    subtitle:
      "Det faglige er kjernen, ikke et tillegg. Læringsmål forankret i Markedsføring og innovasjon, Forretningsdrift, og Kultur og samhandling. Hver opplevelse bundet til pensum.",
  },
  {
    id: "slide-6",
    duration: 30000,
    subtitle:
      "Det elevene faktisk husker: pizza fra steinovn, solnedgang over Vesuv, Pompeii i morgenlys. Det de prater om når de kommer hjem.",
  },
  {
    id: "slide-7",
    duration: 30000,
    subtitle:
      "Trygghet hele veien. Carmen og Robert er kun en telefonsamtale unna. Norsk kontaktperson, døgnvakt, lokal reiseleder.",
  },
  {
    id: "slide-8",
    duration: 50000,
    subtitle:
      "Budsjett: 238 000 kroner. 7 438 kroner per person. Alt inkludert: fly, hotell, frokost, to middager, sightseeing, faglig program. Ingen skjulte kostnader.",
  },
  {
    id: "slide-9",
    duration: 25000,
    subtitle:
      "Mer enn en skoletur. En opplevelse elevene husker resten av livet. NextStopTravel — Bergen.",
  },
];

const TOTAL_DURATION = stops.reduce((s, x) => s + x.duration, 0);

type Mode = "idle" | "playing" | "paused" | "finished";

function smoothScrollTo(targetY: number, duration: number, signal: AbortSignal) {
  return new Promise<void>((resolve) => {
    if (signal.aborted) return resolve();
    const startY = window.scrollY;
    const distance = targetY - startY;
    const startTime = performance.now();
    let raf: number;

    const step = (now: number) => {
      if (signal.aborted) {
        cancelAnimationFrame(raf);
        return resolve();
      }
      const t = Math.min((now - startTime) / duration, 1);
      const eased =
        t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
      window.scrollTo(0, startY + distance * eased);
      if (t < 1) {
        raf = requestAnimationFrame(step);
      } else {
        resolve();
      }
    };
    raf = requestAnimationFrame(step);
    signal.addEventListener("abort", () => cancelAnimationFrame(raf));
  });
}

function sleep(ms: number, signal: AbortSignal) {
  return new Promise<void>((resolve) => {
    if (signal.aborted) return resolve();
    const t = setTimeout(resolve, ms);
    signal.addEventListener("abort", () => {
      clearTimeout(t);
      resolve();
    });
  });
}

export function PresentationController() {
  const [mode, setMode] = useState<Mode>("idle");
  const [currentIndex, setCurrentIndex] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);
  const abortRef = useRef<AbortController | null>(null);

  const runFromIndex = useCallback(async (startIndex: number) => {
    abortRef.current?.abort();
    const ac = new AbortController();
    abortRef.current = ac;

    for (let i = startIndex; i < stops.length; i++) {
      if (ac.signal.aborted) return;
      setCurrentIndex(i);

      const el = document.getElementById(stops[i].id);
      if (el) {
        const headerOffset = 0;
        const targetY = el.offsetTop - headerOffset;
        await smoothScrollTo(targetY, 1800, ac.signal);
      }
      if (ac.signal.aborted) return;
      await sleep(stops[i].duration, ac.signal);
    }

    if (!ac.signal.aborted) {
      setMode("finished");
    }
  }, []);

  const start = () => {
    setMode("playing");
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {});
    }
    runFromIndex(0);
  };

  const pause = () => {
    setMode("paused");
    audioRef.current?.pause();
    abortRef.current?.abort();
  };

  const resume = () => {
    setMode("playing");
    audioRef.current?.play().catch(() => {});
    runFromIndex(currentIndex);
  };

  const skip = () => {
    abortRef.current?.abort();
    runFromIndex(Math.min(currentIndex + 1, stops.length - 1));
  };

  const exit = () => {
    abortRef.current?.abort();
    audioRef.current?.pause();
    setMode("idle");
    setCurrentIndex(0);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const restart = () => {
    setMode("idle");
    setCurrentIndex(0);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => () => abortRef.current?.abort(), []);

  const elapsedBeforeCurrent = stops
    .slice(0, currentIndex)
    .reduce((s, x) => s + x.duration, 0);
  const progressPct = Math.min(
    100,
    ((elapsedBeforeCurrent + stops[currentIndex].duration / 2) / TOTAL_DURATION) * 100,
  );

  return (
    <>
      <audio
        ref={audioRef}
        src="/audio/ambient.mp3"
        loop
        preload="auto"
      />

      {/* Idle: big play button overlay on hero */}
      <AnimatePresence>
        {mode === "idle" && (
          <motion.div
            className="fixed bottom-12 left-1/2 -translate-x-1/2 z-40"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 1, delay: 2.5 }}
          >
            <button
              onClick={start}
              className="group relative inline-flex items-center gap-3 rounded-full bg-amber-400 hover:bg-amber-300 text-zinc-950 px-7 py-4 font-semibold shadow-2xl shadow-amber-500/30 transition"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-950 text-amber-400">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4 ml-0.5"
                  aria-hidden
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
              <span className="text-base sm:text-lg">
                Spill av presentasjon
              </span>
              <span className="text-xs uppercase tracking-widest text-zinc-700 hidden sm:inline">
                ≈ 6 min
              </span>
            </button>
            <p className="mt-3 text-xs text-zinc-500 text-center">
              eller scroll selv for å utforske
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Playing/Paused: progress bar at top */}
      <AnimatePresence>
        {(mode === "playing" || mode === "paused") && (
          <motion.div
            className="fixed top-0 left-0 right-0 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="h-1 bg-black/50 backdrop-blur">
              <motion.div
                className="h-full bg-amber-400"
                animate={{ width: `${progressPct}%` }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </div>
            <div className="flex items-center justify-between px-6 py-3 bg-black/50 backdrop-blur-md text-xs uppercase tracking-widest">
              <span className="text-amber-400">
                {String(currentIndex + 1).padStart(2, "0")} / {stops.length}
              </span>
              <span className="text-zinc-400">
                {mode === "paused" ? "Pauset" : "Spiller"}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Subtitle bar at bottom */}
      <AnimatePresence mode="wait">
        {(mode === "playing" || mode === "paused") && (
          <motion.div
            key={currentIndex}
            className="fixed bottom-24 left-0 right-0 z-40 px-6 sm:px-12 pointer-events-none"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.6 }}
          >
            <div className="max-w-3xl mx-auto text-center">
              <p className="inline-block px-6 py-3 rounded-xl bg-black/70 backdrop-blur-md ring-1 ring-white/10 text-base sm:text-xl text-white leading-relaxed">
                {stops[currentIndex].subtitle}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Controls bottom-right */}
      <AnimatePresence>
        {(mode === "playing" || mode === "paused") && (
          <motion.div
            className="fixed bottom-6 right-6 z-50 flex gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.5 }}
          >
            <button
              onClick={mode === "playing" ? pause : resume}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-black/70 backdrop-blur-md ring-1 ring-white/20 hover:ring-amber-400/60 text-white transition"
              aria-label={mode === "playing" ? "Pause" : "Spill"}
            >
              {mode === "playing" ? (
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden>
                  <rect x="6" y="5" width="4" height="14" />
                  <rect x="14" y="5" width="4" height="14" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 ml-0.5" aria-hidden>
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>
            <button
              onClick={skip}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-black/70 backdrop-blur-md ring-1 ring-white/20 hover:ring-amber-400/60 text-white transition"
              aria-label="Hopp til neste"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden>
                <path d="M6 18l8.5-6L6 6v12zm10-12v12h2V6h-2z" />
              </svg>
            </button>
            <button
              onClick={exit}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-black/70 backdrop-blur-md ring-1 ring-white/20 hover:ring-red-400/60 text-white transition"
              aria-label="Avslutt"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5" aria-hidden>
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Finished: replay button */}
      <AnimatePresence>
        {mode === "finished" && (
          <motion.div
            className="fixed bottom-12 left-1/2 -translate-x-1/2 z-50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <button
              onClick={restart}
              className="inline-flex items-center gap-3 rounded-full bg-amber-400 hover:bg-amber-300 text-zinc-950 px-6 py-3 font-semibold shadow-2xl shadow-amber-500/30 transition"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="h-4 w-4" aria-hidden>
                <path d="M3 12a9 9 0 1 0 3-6.7M3 4v5h5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Spill av igjen
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
