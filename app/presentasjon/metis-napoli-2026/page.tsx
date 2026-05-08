"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function MetisNapoliPresentation() {
  return (
    <div className="bg-black text-white overflow-x-hidden">
      {/* Slide 1 — Hero */}
      <section className="relative h-screen w-full overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1, opacity: 0 }}
          animate={{ scale: 1.18, opacity: 1 }}
          transition={{
            opacity: { duration: 2.5, ease: "easeOut" },
            scale: { duration: 30, ease: "linear" },
          }}
        >
          <Image
            src="/skoleturer/napoli-business-vg1/hero.png"
            alt=""
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/10" />
        </motion.div>

        {/* Brand mark */}
        <motion.div
          className="absolute top-8 left-8 sm:left-12 text-sm font-semibold tracking-tight z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          NextStop<span className="text-sky-400">Travel</span>
        </motion.div>

        {/* Top right meta */}
        <motion.div
          className="absolute top-8 right-8 sm:right-12 text-xs tracking-widest uppercase text-zinc-400 z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Studietur · Forslag
        </motion.div>

        {/* Foreground content */}
        <div className="relative h-full flex flex-col justify-end items-start max-w-6xl mx-auto px-8 sm:px-12 pb-20 sm:pb-32 z-10">
          <motion.p
            className="text-xs sm:text-sm uppercase tracking-[0.4em] text-amber-300 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            For Metis videregående · Business vg1
          </motion.p>
          <motion.h1
            className="text-5xl sm:text-7xl lg:text-8xl font-semibold tracking-tight leading-[0.95]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 1.4, ease: "easeOut" }}
          >
            Metis i Napoli
            <span className="text-amber-400">.</span>
          </motion.h1>
          <motion.p
            className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-light tracking-tight text-zinc-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 1 }}
          >
            5 dager · 4 netter · 2026
          </motion.p>
          <motion.p
            className="mt-8 text-lg sm:text-xl text-zinc-400 max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.7, duration: 1 }}
          >
            En skreddersydd studietur som kobler Pompeii, Vesuv og pizza-kultur
            til Business vg1-pensum — innenfor budsjettet på 238 000 kr.
          </motion.p>

          <motion.div
            className="mt-16 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-zinc-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2, duration: 1.5 }}
          >
            <span>Scroll</span>
            <motion.span
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="text-amber-400"
            >
              ↓
            </motion.span>
          </motion.div>
        </div>
      </section>

      {/* Placeholder for slides 2-9 */}
      <section className="h-screen flex items-center justify-center bg-zinc-950 border-t border-zinc-900">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-zinc-600 mb-4">
            Steg 1 av 8 ferdig
          </p>
          <p className="text-2xl text-zinc-500">
            Slide 2-9 kommer fortløpende fram til mandag
          </p>
        </div>
      </section>
    </div>
  );
}
