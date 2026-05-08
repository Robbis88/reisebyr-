"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Stop = {
  id: string;
  duration: number;
  voice?: string;
  subtitle: string;
};

const stops: Stop[] = [
  {
    id: "slide-1",
    duration: 25000,
    voice: "/audio/voice/01.mp3",
    subtitle:
      "Hei, og takk for at vi får muligheten til å presentere vårt forslag til studietur for Metis. Vi har skapt mer enn en skoletur — en opplevelse som kombinerer faglig innhold, kultur, historie og minner for livet.",
  },
  {
    id: "slide-2",
    duration: 35000,
    voice: "/audio/voice/02.mp3",
    subtitle:
      "Napoli er en av Europas mest autentiske og historiske storbyer. Byen kombinerer spektakulær natur, italiensk kultur, historie og moderne storbyliv på en helt unik måte — romersk historie, Vesuv, Pompeii, matkultur, urbanisering, kunst og arkitektur.",
  },
  {
    id: "dag-1",
    duration: 20000,
    voice: "/audio/voice/03.mp3",
    subtitle:
      "Dag én reiser gruppen fra Bergen til Napoli. Etter innsjekk starter turen med en rolig kveldsvandring langs havneområdet og gamlebyen — elevenes første møte med Napoli som historisk middelhavsby.",
  },
  {
    id: "dag-2",
    duration: 18000,
    voice: "/audio/voice/04.mp3",
    subtitle:
      "Dag to viet til Napolis historiske sjel: Cappella Sansevero med det berømte «Cristo velato», guidet vandring gjennom Spaccanapoli, lokale markeder og UNESCO-sentrum.",
  },
  {
    id: "dag-3",
    duration: 30000,
    voice: "/audio/voice/05.mp3",
    subtitle:
      "Dag tre fokuserer på historie, naturkrefter og romersk kultur. Gruppen besøker Pompeii — en av verdens mest kjente arkeologiske byer — og opplever hvordan livet i Romerriket så ut før Vesuvs utbrudd i år 79.",
  },
  {
    id: "dag-4",
    duration: 20000,
    voice: "/audio/voice/06.mp3",
    subtitle:
      "Dag fire kombinerer arkeologi og næringsliv. Museo Archeologico Nazionale med verdens største Pompeii-samling, og bedriftsbesøk hos lokal pizzeria — matkultur som forretningsmodell.",
  },
  {
    id: "dag-5",
    duration: 16000,
    voice: "/audio/voice/07.mp3",
    subtitle:
      "Dag fem er refleksjonsdagen. Frokost, felles oppsummering, kort vandring forbi Castel dell'Ovo, og deretter hjemreise — med minner som varer.",
  },
  {
    id: "slide-4",
    duration: 28000,
    voice: "/audio/voice/08.mp3",
    subtitle:
      "Vi har valgt sentral og skolevennlig gruppeovernatting. Elevene bor på 4-, 5- eller 6-mannsrom, lærerne får egne enkeltrom. Frokost inkludert hver dag, og kort avstand til kollektivtransport og byens severdigheter.",
  },
  {
    id: "slide-5",
    duration: 28000,
    voice: "/audio/voice/09.mp3",
    subtitle:
      "Det faglige innholdet er en sentral del av hele reisen. Hver dag inneholder temaer knyttet til historie, samfunnsfag, geografi, kulturforståelse, urbanisering og kommunikasjon — refleksjonsoppgaver, gruppearbeid og presentasjoner underveis.",
  },
  {
    id: "slide-6",
    duration: 26000,
    voice: "/audio/voice/10.mp3",
    subtitle:
      "Dag tre og fire kombinerer kultur og moderne storbyliv: Napolis historiske sentrum, lokale markeder, italiensk matkultur, arkitektur og kirker, livet langs middelhavskysten — pluss en kulturell aktivitet på kvelden.",
  },
  {
    id: "slide-7",
    duration: 22000,
    voice: "/audio/voice/11.mp3",
    subtitle:
      "Trygghet og organisering er avgjørende. Reisen er planlagt med sentral beliggenhet, trygg transport, tydelig dagsprogram, enkel logistikk og tilgjengelig kontaktperson — tilpasset skolegrupper.",
  },
  {
    id: "slide-8",
    duration: 26000,
    voice: "/audio/voice/12.mp3",
    subtitle:
      "Totalbudsjettet er 238 000 kroner. Inkludert: flyreise, lokaltransport, overnatting, frokost hver dag, to middager, aktiviteter, museumsbesøk og kulturelle opplevelser. Størst mulig verdi innenfor budsjettet.",
  },
  {
    id: "slide-9",
    duration: 26000,
    voice: "/audio/voice/13.mp3",
    subtitle:
      "Vi ønsker å skape en studietur som kombinerer læring, kultur og opplevelser elevene husker lenge etter at reisen er over. Napoli gir en unik kombinasjon — og en opplevelse som skiller seg ut. Takk for tiden deres.",
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

function playVoice(
  audio: HTMLAudioElement,
  src: string,
  signal: AbortSignal,
): Promise<"ended" | "errored" | "aborted"> {
  return new Promise((resolve) => {
    if (signal.aborted) return resolve("aborted");

    const cleanup = () => {
      audio.removeEventListener("ended", onEnded);
      audio.removeEventListener("error", onError);
      signal.removeEventListener("abort", onAbort);
    };
    const onEnded = () => {
      cleanup();
      resolve("ended");
    };
    const onError = () => {
      cleanup();
      resolve("errored");
    };
    const onAbort = () => {
      cleanup();
      audio.pause();
      resolve("aborted");
    };

    audio.addEventListener("ended", onEnded);
    audio.addEventListener("error", onError);
    signal.addEventListener("abort", onAbort);

    audio.src = src;
    audio.currentTime = 0;
    audio.volume = 1;
    audio.play().catch(() => {
      cleanup();
      resolve("errored");
    });
  });
}

export function PresentationController() {
  const [mode, setMode] = useState<Mode>("idle");
  const [currentIndex, setCurrentIndex] = useState(0);
  const bgMusicRef = useRef<HTMLAudioElement>(null);
  const voiceRef = useRef<HTMLAudioElement>(null);
  const abortRef = useRef<AbortController | null>(null);

  const duckMusic = (down: boolean) => {
    const music = bgMusicRef.current;
    if (!music) return;
    const target = down ? 0.03 : 0.08;
    const start = music.volume;
    const startTime = performance.now();
    const duration = 400;
    const step = (now: number) => {
      const t = Math.min((now - startTime) / duration, 1);
      music.volume = start + (target - start) * t;
      if (t < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  const runFromIndex = useCallback(async (startIndex: number) => {
    abortRef.current?.abort();
    const ac = new AbortController();
    abortRef.current = ac;
    const voice = voiceRef.current;

    for (let i = startIndex; i < stops.length; i++) {
      if (ac.signal.aborted) return;
      const stop = stops[i];
      setCurrentIndex(i);

      const el = document.getElementById(stop.id);
      if (el) {
        const targetY = el.offsetTop;
        await smoothScrollTo(targetY, 1800, ac.signal);
      }
      if (ac.signal.aborted) return;

      if (stop.voice && voice) {
        duckMusic(true);
        const result = await playVoice(voice, stop.voice, ac.signal);
        if (ac.signal.aborted) return;
        duckMusic(false);
        if (result === "ended") {
          await sleep(1500, ac.signal);
        } else {
          await sleep(stop.duration, ac.signal);
        }
      } else {
        await sleep(stop.duration, ac.signal);
      }
    }

    if (!ac.signal.aborted) {
      setMode("finished");
      bgMusicRef.current?.pause();
    }
  }, []);

  const start = () => {
    setMode("playing");
    if (bgMusicRef.current) {
      bgMusicRef.current.volume = 0.06;
      bgMusicRef.current.currentTime = 0;
      bgMusicRef.current.play().catch(() => {});
    }
    runFromIndex(0);
  };

  const pause = () => {
    setMode("paused");
    bgMusicRef.current?.pause();
    voiceRef.current?.pause();
    abortRef.current?.abort();
  };

  const resume = () => {
    setMode("playing");
    bgMusicRef.current?.play().catch(() => {});
    runFromIndex(currentIndex);
  };

  const skip = () => {
    abortRef.current?.abort();
    voiceRef.current?.pause();
    runFromIndex(Math.min(currentIndex + 1, stops.length - 1));
  };

  const exit = () => {
    abortRef.current?.abort();
    bgMusicRef.current?.pause();
    voiceRef.current?.pause();
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
    ((elapsedBeforeCurrent + stops[currentIndex].duration / 2) / TOTAL_DURATION) *
      100,
  );

  return (
    <>
      <audio ref={bgMusicRef} src="/audio/ambient.mp3" loop preload="auto" />
      <audio ref={voiceRef} preload="auto" />

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
              <p className="inline-block px-6 py-3 rounded-xl bg-black/75 backdrop-blur-md ring-1 ring-white/10 text-base sm:text-lg text-white leading-relaxed">
                {stops[currentIndex].subtitle}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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
