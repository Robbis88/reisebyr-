"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function MetisNapoliPresentation() {
  return (
    <div className="bg-black text-white overflow-x-hidden">
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

      {/* Placeholder for slides 4-9 */}
      <section className="h-screen flex items-center justify-center bg-black border-t border-zinc-900">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-zinc-600 mb-4">
            Steg 2 av 8 ferdig
          </p>
          <p className="text-2xl text-zinc-500">
            Slide 4-9 kommer fortløpende
          </p>
        </div>
      </section>
    </div>
  );
}

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
