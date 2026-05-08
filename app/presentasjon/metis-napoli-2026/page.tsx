"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MusicPlayer } from "@/components/MusicPlayer";

export default function MetisNapoliPresentation() {
  return (
    <div className="bg-black text-white overflow-x-hidden">
      <MusicPlayer src="/audio/ambient.mp3" />
      {/* SLIDE 1 — Hero */}
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

        <motion.div
          className="absolute top-8 left-8 sm:left-12 text-sm font-semibold tracking-tight z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          NextStop<span className="text-sky-400">Travel</span>
        </motion.div>

        <motion.div
          className="absolute top-8 right-8 sm:right-12 text-xs tracking-widest uppercase text-zinc-400 z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Studietur · Forslag
        </motion.div>

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

      {/* SLIDE 2 — Hvorfor denne turen */}
      <section className="relative min-h-screen flex items-center py-24 px-8 sm:px-12 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/skoleturer/napoli-business-vg1/pizza.png"
            alt=""
            fill
            className="object-cover opacity-20 blur-sm"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="relative max-w-6xl mx-auto w-full z-10">
          <motion.p
            className="text-xs sm:text-sm uppercase tracking-[0.4em] text-amber-300 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            Hvorfor Napoli
          </motion.p>
          <motion.h2
            className="text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Mer enn en skoletur.
            <br />
            <span className="text-zinc-500">
              Det er minner for livet.
            </span>
          </motion.h2>
          <motion.p
            className="mt-8 text-lg sm:text-xl text-zinc-400 max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            5 dager der elevene møter en europeisk storby med ekte historie,
            smaker, lyder og samhold — i en pakke som henger 100 % sammen med
            Business vg1-pensum.
          </motion.p>

          <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                className="relative aspect-[3/4] rounded-2xl overflow-hidden ring-1 ring-white/10 group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.1 * i }}
              >
                <Image
                  src={p.image}
                  alt=""
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-xl mb-2">{p.icon}</p>
                  <h3 className="text-lg font-semibold tracking-tight">
                    {p.title}
                  </h3>
                  <p className="text-sm text-zinc-400 mt-1">{p.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SLIDE 3 — Dag-for-dag */}
      <section className="relative py-32 px-8 sm:px-12 bg-zinc-950 border-t border-zinc-900">
        <div className="max-w-6xl mx-auto">
          <motion.p
            className="text-xs sm:text-sm uppercase tracking-[0.4em] text-amber-300 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            Programmet
          </motion.p>
          <motion.h2
            className="text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            5 dager.
            <br />
            <span className="text-zinc-500">Hver dag teller.</span>
          </motion.h2>
          <motion.p
            className="mt-6 text-lg text-zinc-400 max-w-2xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Hvert program-element er valgt for å koble en ekte opplevelse til
            et konkret pensumpunkt. Ingen tilfeldige severdigheter.
          </motion.p>

          <div className="mt-20 space-y-24">
            {days.map((day, i) => (
              <motion.article
                key={day.number}
                className={`grid lg:grid-cols-2 gap-10 items-center ${
                  i % 2 === 1 ? "lg:[&>:first-child]:order-2" : ""
                }`}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden ring-1 ring-white/10">
                  <Image
                    src={day.image}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <div>
                  <p className="text-7xl sm:text-8xl font-light text-amber-400/80 leading-none">
                    {day.number}
                  </p>
                  <h3 className="mt-6 text-3xl sm:text-4xl font-semibold tracking-tight leading-tight">
                    {day.title}
                  </h3>
                  <ul className="mt-8 space-y-3">
                    {day.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-zinc-300 text-base sm:text-lg"
                      >
                        <span className="mt-2 inline-block h-1 w-6 bg-amber-400/80 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* SLIDE 4 — Hotell */}
      <section className="relative py-32 px-8 sm:px-12 bg-black border-t border-zinc-900 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <motion.p
            className="text-xs sm:text-sm uppercase tracking-[0.4em] text-amber-300 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            Overnatting
          </motion.p>
          <motion.h2
            className="text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Hotel Partenopeo
            <br />
            <span className="text-zinc-500">Student Stay.</span>
          </motion.h2>
          <motion.p
            className="mt-6 text-lg sm:text-xl text-zinc-400 max-w-2xl leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Moderne, trygt og sentralt — midt i hjertet av Napoli. Korte
            avstander til metro, severdigheter og strandpromenaden.
          </motion.p>

          <div className="mt-16 grid sm:grid-cols-3 gap-4">
            {hotelImages.map((h, i) => (
              <motion.div
                key={h.label}
                className="relative aspect-[4/5] rounded-2xl overflow-hidden ring-1 ring-white/10"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.1 * i }}
              >
                <Image
                  src={h.src}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-sm uppercase tracking-widest text-amber-300/90">
                    Eksempel
                  </p>
                  <p className="text-xl font-semibold mt-1">{h.label}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-16 grid sm:grid-cols-2 gap-x-12 gap-y-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1 }}
          >
            {hotelFeatures.map((f) => (
              <div key={f} className="flex items-start gap-4">
                <svg
                  className="mt-1 h-5 w-5 flex-shrink-0 text-amber-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-lg text-zinc-200">{f}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SLIDE 5 — Det faglige */}
      <section className="relative min-h-screen py-32 px-8 sm:px-12 bg-zinc-950 border-t border-zinc-900 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <Image
            src="/skoleturer/napoli-business-vg1/museo.png"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>

        <div className="relative max-w-6xl mx-auto z-10">
          <motion.p
            className="text-xs sm:text-sm uppercase tracking-[0.4em] text-amber-300 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            Det faglige
          </motion.p>
          <motion.h2
            className="text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Et undervisningsopplegg
            <br />
            <span className="text-zinc-500">— ikke bare en tur.</span>
          </motion.h2>

          <motion.div
            className="mt-12 rounded-2xl bg-amber-400/10 ring-1 ring-amber-300/30 p-8 sm:p-10 max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1 }}
          >
            <p className="text-sm uppercase tracking-[0.3em] text-amber-300 mb-4">
              Læringsmål
            </p>
            <p className="text-lg sm:text-xl text-zinc-100 leading-relaxed">
              Elevene skal kunne forklare hvordan historie, kultur og næringsliv
              henger sammen i en europeisk storby, analysere matkultur (pizza
              napoletana) som forretningskonsept og immateriell kulturarv, og
              reflektere over arkeologi som kilde til samfunnsforståelse.
            </p>
          </motion.div>

          <div className="mt-16 grid sm:grid-cols-3 gap-6">
            {programfag.map((f, i) => (
              <motion.div
                key={f.title}
                className="rounded-2xl ring-1 ring-white/10 p-7 bg-zinc-900/40"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.1 * i }}
              >
                <p className="text-3xl mb-4">{f.icon}</p>
                <h3 className="text-xl font-semibold tracking-tight">
                  {f.title}
                </h3>
                <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                  {f.text}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-16 max-w-4xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1 }}
          >
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-500 mb-6">
              Eksempel: opplevelse → pensum-kobling
            </p>
            <ul className="space-y-3">
              {koblinger.map((k) => (
                <li
                  key={k.fra}
                  className="flex items-center gap-4 sm:gap-6 text-base sm:text-lg"
                >
                  <span className="text-zinc-300 font-medium">{k.fra}</span>
                  <span className="text-amber-400">→</span>
                  <span className="text-zinc-400">{k.til}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* SLIDE 6 — Kultur & opplevelser */}
      <section className="relative py-32 px-8 sm:px-12 bg-black border-t border-zinc-900 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <motion.p
            className="text-xs sm:text-sm uppercase tracking-[0.4em] text-amber-300 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            Kultur og opplevelser
          </motion.p>
          <motion.h2
            className="text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Det elevene
            <br />
            <span className="text-zinc-500">faktisk husker.</span>
          </motion.h2>
          <motion.p
            className="mt-6 text-lg sm:text-xl text-zinc-400 max-w-2xl leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Det de prater om når de kommer hjem. Det de viser foreldrene på
            mobilen. Det som gjør at en skoletur blir et minne — ikke bare en
            uke borte fra skolen.
          </motion.p>

          <div className="mt-16 grid grid-cols-2 lg:grid-cols-3 gap-4">
            {opplevelser.map((o, i) => (
              <motion.div
                key={o.title}
                className={`relative rounded-2xl overflow-hidden ring-1 ring-white/10 group ${
                  o.span ? "lg:col-span-2 lg:row-span-2 aspect-square lg:aspect-auto" : "aspect-square"
                }`}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: 0.05 * i }}
              >
                <Image
                  src={o.image}
                  alt=""
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className={`font-semibold tracking-tight ${o.span ? "text-2xl sm:text-3xl" : "text-base sm:text-lg"}`}>
                    {o.title}
                  </h3>
                  <p className="text-sm text-zinc-400 mt-1">{o.tag}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SLIDE 7 — Trygghet */}
      <section className="relative py-32 px-8 sm:px-12 bg-zinc-950 border-t border-zinc-900 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <motion.p
            className="text-xs sm:text-sm uppercase tracking-[0.4em] text-amber-300 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            Trygghet
          </motion.p>
          <motion.h2
            className="text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Vi er der.
            <br />
            <span className="text-zinc-500">Hele veien.</span>
          </motion.h2>
          <motion.p
            className="mt-6 text-lg sm:text-xl text-zinc-400 max-w-2xl leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Som lite Bergen-byrå har vi tid til å være tett på. Det betyr at
            lærere får oss på telefonen direkte — ikke et call center.
          </motion.p>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {trygghet.map((t, i) => (
              <motion.div
                key={t.title}
                className="rounded-2xl ring-1 ring-white/10 p-7 bg-black/40"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: 0.07 * i }}
              >
                <div className="flex items-center gap-3">
                  <span className="text-amber-400 text-2xl">{t.icon}</span>
                </div>
                <h3 className="mt-4 text-lg font-semibold tracking-tight">
                  {t.title}
                </h3>
                <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                  {t.text}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-16 rounded-2xl ring-1 ring-amber-300/30 bg-amber-400/5 p-8 sm:p-10 max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1 }}
          >
            <p className="text-sm uppercase tracking-[0.3em] text-amber-300 mb-3">
              Din kontakt
            </p>
            <p className="text-2xl sm:text-3xl font-semibold tracking-tight">
              Carmen Toro · Robert Leganger
            </p>
            <p className="mt-3 text-zinc-400">
              Vi tar telefonen. Hver gang. Også når dere er midt i Pompeii og
              en elev har glemt passet.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SLIDE 8 — Budsjett */}
      <section className="relative py-32 px-8 sm:px-12 bg-black border-t border-zinc-900 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <motion.p
            className="text-xs sm:text-sm uppercase tracking-[0.4em] text-amber-300 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            Budsjett
          </motion.p>
          <motion.h2
            className="text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Alt inkludert.
            <br />
            <span className="text-zinc-500">Ingen overraskelser.</span>
          </motion.h2>

          <div className="mt-16 grid lg:grid-cols-2 gap-10 items-start">
            <motion.div
              className="rounded-3xl bg-gradient-to-br from-amber-400/20 via-amber-400/5 to-transparent ring-1 ring-amber-300/30 p-10"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <p className="text-sm uppercase tracking-[0.3em] text-amber-300 mb-3">
                Total
              </p>
              <p className="text-6xl sm:text-7xl lg:text-8xl font-semibold tracking-tight">
                238 000
                <span className="text-3xl sm:text-4xl font-light text-zinc-400 ml-2">
                  kr
                </span>
              </p>
              <div className="mt-8 pt-8 border-t border-white/10">
                <p className="text-sm uppercase tracking-[0.3em] text-zinc-500 mb-2">
                  Per person
                </p>
                <p className="text-4xl sm:text-5xl font-semibold tracking-tight">
                  7 438
                  <span className="text-xl font-light text-zinc-400 ml-2">
                    kr
                  </span>
                </p>
                <p className="mt-1 text-sm text-zinc-500">
                  Basert på 32 personer · 30 elever + 2 lærere
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <p className="text-sm uppercase tracking-[0.3em] text-zinc-500 mb-6">
                Dette er inkludert
              </p>
              <ul className="space-y-4">
                {inkludert.map((i) => (
                  <li key={i.label} className="flex items-start gap-4">
                    <svg
                      className="mt-1 h-5 w-5 flex-shrink-0 text-amber-400"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <p className="text-lg font-medium">{i.label}</p>
                      <p className="text-sm text-zinc-500">{i.detalj}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div
            className="mt-20 max-w-4xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1 }}
          >
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-500 mb-6">
              Slik fordeler 238 000 kr seg
            </p>
            <div className="space-y-3">
              {fordeling.map((f) => (
                <div key={f.post}>
                  <div className="flex justify-between items-baseline mb-1.5">
                    <span className="text-zinc-300">{f.post}</span>
                    <span className="text-zinc-100 font-medium">
                      {f.belop.toLocaleString("nb-NO")} kr
                    </span>
                  </div>
                  <div className="h-1.5 rounded-full bg-zinc-900 overflow-hidden">
                    <div
                      className="h-full bg-amber-400/70"
                      style={{ width: `${(f.belop / 238000) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SLIDE 9 — Finale */}
      <section className="relative h-screen w-full overflow-hidden border-t border-zinc-900">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.15, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            opacity: { duration: 2, ease: "easeOut" },
            scale: { duration: 25, ease: "linear" },
          }}
        >
          <Image
            src="/skoleturer/napoli-business-vg1/hero.png"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
        </motion.div>

        <div className="relative h-full flex flex-col items-center justify-center text-center px-8 sm:px-12 z-10">
          <motion.p
            className="text-xs sm:text-sm uppercase tracking-[0.4em] text-amber-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
          >
            Klar for å snakke?
          </motion.p>
          <motion.h2
            className="text-5xl sm:text-7xl lg:text-9xl font-semibold tracking-tight leading-[0.95] max-w-5xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.4, ease: "easeOut", delay: 0.3 }}
          >
            Mer enn en skoletur
            <span className="text-amber-400">.</span>
          </motion.h2>
          <motion.p
            className="mt-8 text-xl sm:text-2xl lg:text-3xl text-zinc-300 font-light max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            En opplevelse elevene husker
            <br />
            resten av livet.
          </motion.p>
          <motion.div
            className="mt-16 flex flex-col sm:flex-row gap-4 items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1, delay: 1.1 }}
          >
            <a
              href="/kontakt?destinasjon=Napoli for Business vg1"
              className="inline-flex items-center rounded-full bg-amber-400 hover:bg-amber-300 text-zinc-950 px-8 py-4 font-semibold text-lg transition"
            >
              Bestill turen
            </a>
            <a
              href="/skoleturer/napoli-business-vg1"
              className="inline-flex items-center rounded-full ring-1 ring-white/30 hover:ring-white/60 text-white px-8 py-4 font-medium text-lg transition"
            >
              Se full turbeskrivelse
            </a>
          </motion.div>

          <motion.div
            className="absolute bottom-12 left-1/2 -translate-x-1/2 text-sm font-semibold tracking-tight"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <span className="text-zinc-400">NextStop</span>
            <span className="text-amber-400">Travel</span>
            <span className="text-zinc-600 ml-3">· Bergen</span>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

const hotelImages = [
  {
    src: "/skoleturer/napoli-business-vg1/hotel-3-4.png",
    label: "3- til 4-mannsrom",
  },
  {
    src: "/skoleturer/napoli-business-vg1/hotel-5-6.png",
    label: "5- til 6-mannsrom",
  },
  {
    src: "/skoleturer/napoli-business-vg1/hotel-enkelt.png",
    label: "Enkeltrom for lærere",
  },
];

const hotelFeatures = [
  "Sentralt beliggende i hjertet av Napoli",
  "5 min til metro og kollektivtransport",
  "Frokost inkludert hver dag",
  "Eget bad, WiFi og aircondition på rom",
  "Felles lounge, studieområder og roof terrace",
  "Resepsjon og 24/7 tilgjengelig kontaktperson",
];

const programfag = [
  {
    icon: "📊",
    title: "Markedsføring og innovasjon",
    text: "Pizza napoletana som case på UNESCO-merkevare. Hvordan kultur skaper kommersielle differensiatorer.",
  },
  {
    icon: "🏢",
    title: "Forretningsdrift",
    text: "Lokale pizzeria-bedriftsbesøk. Familieforetak, drift, leverandørkjede og oppskalering.",
  },
  {
    icon: "🌍",
    title: "Kultur og samhandling",
    text: "Italiensk forretningskultur, samspill mellom historie og næringsliv, normer for gjestfrihet.",
  },
];

const koblinger = [
  { fra: "Pompeii", til: "Arkeologi som kilde til samfunnsforståelse" },
  { fra: "Pizza napoletana", til: "Matkultur som forretningskonsept" },
  { fra: "Cappella Sansevero", til: "Kunst som identitet og merkevare" },
  { fra: "Lokale markeder", til: "Handel, økonomi og urbanisering" },
  { fra: "Vesuv", til: "Geografi, risiko og næringslivets sårbarhet" },
];

const trygghet = [
  {
    icon: "📞",
    title: "Norsk kontaktperson",
    text: "Carmen og Robert er tilgjengelige hele turen. Du forholder deg til oss — på norsk.",
  },
  {
    icon: "🕐",
    title: "Døgnvakt under turen",
    text: "Akutt-telefon 24/7 fra avgang Bergen til ankomst hjemme. Vi sover lett.",
  },
  {
    icon: "👥",
    title: "Lokal reiseleder",
    text: "Italiensk-talende guide fra ankomst til avgang. Hjelper med alt fra metro til legevakt.",
  },
  {
    icon: "🗺️",
    title: "Ferdig kollektivplan",
    text: "All lokaltransport bestilt og pakket inn. Læreren slipper å lese italiensk skiltning.",
  },
  {
    icon: "📋",
    title: "Tydelig dagsprogram",
    text: "Trykt + digitalt program med klokkeslett, adresser og samlingspunkter for hele turen.",
  },
  {
    icon: "🚨",
    title: "Nødnummer og rutiner",
    text: "Lokale nødnumre, nærmeste sykehus, ambassadekontakt — alt klart før avgang.",
  },
];

const inkludert = [
  { label: "Flyreise tur/retur Bergen–Napoli", detalj: "Direktefly med gruppepris" },
  { label: "All lokal transport", detalj: "Metro, buss, chartret buss til Pompeii og Vesuv" },
  { label: "Overnatting 4 netter", detalj: "Hotel Partenopeo Student Stay, sentralt" },
  { label: "Frokost hver dag", detalj: "Inkludert på hotellet" },
  { label: "2 middager", detalj: "Velkomstpizza + felles avskjedsmiddag" },
  { label: "Sightseeing og omvisninger", detalj: "Pompeii, Vesuv, museer, byvandring" },
  { label: "Faglig opplegg og workshops", detalj: "Bedriftsbesøk og oppgaver med formidler" },
  { label: "Reiseleder fra start til slutt", detalj: "Norsk + italiensk-talende lokal guide" },
];

const fordeling = [
  { post: "Flyreise tur/retur", belop: 82000 },
  { post: "Overnatting (4 netter)", belop: 68000 },
  { post: "Mat (frokost + 2 middager)", belop: 27000 },
  { post: "Aktiviteter og omvisninger", belop: 33000 },
  { post: "Lokal transport", belop: 18000 },
  { post: "Reiseleder og diverse", belop: 10000 },
];

const opplevelser = [
  {
    title: "Pizza napoletana fra steinovn",
    tag: "Velkomstmiddag",
    image: "/skoleturer/napoli-business-vg1/pizza.png",
    span: true,
  },
  {
    title: "Solnedgang over Vesuv",
    tag: "Kveldsstemning",
    image: "/skoleturer/napoli-business-vg1/hero.png",
  },
  {
    title: "Pompeii ved morgentime",
    tag: "Mindre folk, bedre lys",
    image: "/skoleturer/napoli-business-vg1/pompeii.png",
  },
  {
    title: "Spaccanapoli",
    tag: "Lokale markeder og smaker",
    image: "/skoleturer/napoli-business-vg1/napoli-sentrum.png",
  },
  {
    title: "Museo Archeologico",
    tag: "Verdens største Pompeii-samling",
    image: "/skoleturer/napoli-business-vg1/museo.png",
  },
  {
    title: "Vesuv-krateret",
    tag: "Heldagsutflukt med utsikt",
    image: "/skoleturer/napoli-business-vg1/vesuv.png",
  },
];

const pillars = [
  {
    icon: "🏛️",
    title: "Historie som kommer til live",
    text: "Pompeii, Vesuv og 2 000 år gammel romersk dagligliv.",
    image: "/skoleturer/napoli-business-vg1/pompeii.png",
  },
  {
    icon: "🍕",
    title: "Smaker av Italia",
    text: "Pizza napoletana — UNESCO-immateriell kulturarv. Lærerikt og deilig.",
    image: "/skoleturer/napoli-business-vg1/pizza.png",
  },
  {
    icon: "📚",
    title: "Faglig forankring",
    text: "Hver dag kobles til Markedsføring, Forretningsdrift, Kultur og samhandling.",
    image: "/skoleturer/napoli-business-vg1/museo.png",
  },
  {
    icon: "🤝",
    title: "Klassens samhold",
    text: "Felles middager, gruppeoppgaver og opplevelser de prater om i månedsvis etter.",
    image: "/skoleturer/napoli-business-vg1/napoli-sentrum.png",
  },
];

const days = [
  {
    number: "01",
    title: "Reise og velkomst til Napoli",
    image: "/skoleturer/napoli-business-vg1/napoli-sentrum.png",
    items: [
      "Direktefly Bergen → Napoli",
      "Innsjekk på Hotel Partenopeo Student Stay",
      "Kveldsvandring Spaccanapoli og Via Toledo",
      "Felles velkomstmiddag — autentisk pizza napoletana",
    ],
  },
  {
    number: "02",
    title: "Historie, kultur og byen Napoli",
    image: "/skoleturer/napoli-business-vg1/pompeii.png",
    items: [
      "Guidet byvandring i UNESCO-sentrum",
      "Cappella Sansevero med «Cristo velato»",
      "Pio Monte della Misericordia og lokale markeder",
      "Faglig oppgave: hva former en bys identitet?",
    ],
  },
  {
    number: "03",
    title: "Pompeii og Vesuv",
    image: "/skoleturer/napoli-business-vg1/vesuv.png",
    items: [
      "Heldagsutflukt med chartret buss",
      "Guidet omvisning i Pompeii — dagligliv og handel",
      "Vandring opp på Vesuv-krateret",
      "Refleksjon: arkeologi som kilde til samfunnsforståelse",
    ],
  },
  {
    number: "04",
    title: "Museer, kunst og lokalt næringsliv",
    image: "/skoleturer/napoli-business-vg1/museo.png",
    items: [
      "Museo Archeologico Nazionale",
      "Bedriftsbesøk: pizzeria eller pasta-produksjon",
      "Pizza som forretningsmodell og kulturarv",
      "Felles avskjedsmiddag",
    ],
  },
  {
    number: "05",
    title: "Oppsummering og hjemreise",
    image: "/skoleturer/napoli-business-vg1/pizza.png",
    items: [
      "Frokost og felles oppsummering",
      "Vandring forbi Castel dell'Ovo",
      "Transport til Capodichino lufthavn",
      "Hjemreise til Bergen",
    ],
  },
];
