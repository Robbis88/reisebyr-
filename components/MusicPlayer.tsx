"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function MusicPlayer({
  src = "/audio/ambient.mp3",
}: {
  src?: string;
}) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [available, setAvailable] = useState(true);
  const [showInitialHint, setShowInitialHint] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowInitialHint(false), 8000);
    return () => clearTimeout(timer);
  }, []);

  const toggle = () => {
    setShowInitialHint(false);
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.volume = 0.35;
      audio
        .play()
        .then(() => setPlaying(true))
        .catch(() => setAvailable(false));
    }
  };

  if (!available) return null;

  return (
    <>
      <audio
        ref={audioRef}
        src={src}
        loop
        preload="auto"
        onError={() => setAvailable(false)}
      />

      <AnimatePresence>
        {showInitialHint && !playing && (
          <motion.button
            onClick={toggle}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 1, delay: 3 }}
            className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-full bg-black/70 backdrop-blur-md ring-1 ring-white/20 text-sm flex items-center gap-3 hover:ring-amber-400/60 transition"
          >
            <span className="text-amber-400 text-base">♪</span>
            <span className="text-white/90">Klikk for ambient musikk</span>
          </motion.button>
        )}
      </AnimatePresence>

      <button
        onClick={toggle}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-black/60 backdrop-blur-md ring-1 ring-white/20 hover:ring-amber-400/60 px-4 py-3 transition"
        aria-label={playing ? "Stopp musikk" : "Start musikk"}
      >
        <div className="flex items-end gap-[3px] h-4 w-5">
          {[0, 1, 2, 3].map((i) => (
            <motion.span
              key={i}
              className="block w-[2px] bg-amber-400 origin-bottom rounded-full"
              animate={
                playing
                  ? { scaleY: [0.3, 1, 0.4, 0.8, 0.3] }
                  : { scaleY: 0.3 }
              }
              transition={
                playing
                  ? {
                      duration: 1.1,
                      repeat: Infinity,
                      delay: i * 0.15,
                      ease: "easeInOut",
                    }
                  : { duration: 0.3 }
              }
              style={{ height: "100%" }}
            />
          ))}
        </div>
        <span className="text-xs uppercase tracking-widest text-white/80">
          {playing ? "Musikk på" : "Musikk av"}
        </span>
      </button>
    </>
  );
}
