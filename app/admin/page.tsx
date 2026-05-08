"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const presentationTools = [
  {
    href: "/presentasjon/metis-napoli-2026",
    badge: "Hovedverktøy",
    tittel: "Cinematic Napoli-presentasjon",
    beskrivelse:
      "Auto-spilt presentasjon med italiensk forteller, norske undertekster og ambient musikk. ~6 min totalt. Klikk «Spill av», og len deg tilbake.",
    image: "/skoleturer/napoli-business-vg1/hero.png",
    cta: "Spill av presentasjon",
    accent: "amber",
  },
  {
    href: "/min-tur/napoli-2026",
    badge: "Elev-app",
    tittel: "Din tur til Napoli",
    beskrivelse:
      "Elev-side med nedtelling, pakkeliste de huker av, kontakter og nødnumre, samt live værmelding for Napoli. Vis under finalen som ekstra wow.",
    image: "/skoleturer/napoli-business-vg1/pizza.png",
    cta: "Åpne elev-appen",
    accent: "amber",
  },
];

const otherLinks = [
  {
    href: "/skoleturer/napoli-business-vg1",
    tittel: "Napoli-tilbudet",
    beskrivelse: "Full turbeskrivelse med program, hotell, læringsmål",
    icon: "🇮🇹",
  },
  {
    href: "/skoleturer/kobenhavn-business-vg1",
    tittel: "København-tilbud",
    beskrivelse: "Alternativ #2 (8 290 kr/elev)",
    icon: "🇩🇰",
  },
  {
    href: "/skoleturer/berlin-business-vg1",
    tittel: "Berlin-tilbud",
    beskrivelse: "Alternativ #3 (7 790 kr/person)",
    icon: "🇩🇪",
  },
  {
    href: "/skoleturer/barcelona-business-vg1",
    tittel: "Barcelona-tilbud",
    beskrivelse: "Alternativ #4 (7 990 kr/person)",
    icon: "🇪🇸",
  },
  {
    href: "/markedsforing",
    tittel: "Markedsføringsside",
    beskrivelse: "Demonstrer hvordan vi når ut til skoler",
    icon: "📣",
  },
  {
    href: "/om-oss",
    tittel: "Om oss",
    beskrivelse: "Carmen og Robert — gründerne",
    icon: "👥",
  },
  {
    href: "/kontakt",
    tittel: "Kontaktskjema",
    beskrivelse: "Skjemaet skoler bruker for å bestille",
    icon: "✉️",
  },
  {
    href: "/",
    tittel: "Forsiden",
    beskrivelse: "Tilbake til hovedsiden",
    icon: "🏠",
  },
];

export default function AdminPage() {
  return (
    <div className="bg-zinc-950 text-white min-h-screen">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 py-12 sm:py-16">
        {/* HEADER */}
        <header className="mb-12 sm:mb-16 flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold tracking-tight">
              NextStop<span className="text-amber-400">Travel</span>
            </p>
            <p className="text-xs uppercase tracking-[0.3em] text-zinc-500 mt-1">
              Intern dashboard
            </p>
          </div>
          <Link
            href="/"
            className="text-sm text-zinc-400 hover:text-zinc-100 transition"
          >
            ← Forsiden
          </Link>
        </header>

        {/* WELCOME */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs uppercase tracking-[0.4em] text-amber-300 mb-3">
            Velkommen tilbake
          </p>
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight">
            Carmen <span className="text-zinc-500">og</span> Robert
            <span className="text-amber-400">.</span>
          </h1>
          <p className="mt-4 text-lg text-zinc-400 max-w-2xl">
            Alt du trenger til Metis-presentasjonen — én klikk unna.
          </p>
        </motion.section>

        {/* HOVEDVERKTØY */}
        <section className="mb-16">
          <p className="text-xs uppercase tracking-[0.4em] text-zinc-500 mb-6">
            For presentasjonen
          </p>
          <div className="grid lg:grid-cols-2 gap-6">
            {presentationTools.map((t, i) => (
              <motion.div
                key={t.href}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 + i * 0.15 }}
              >
                <Link
                  href={t.href}
                  target="_blank"
                  className="group block relative rounded-2xl overflow-hidden ring-1 ring-white/10 hover:ring-amber-400/60 transition aspect-[4/3]"
                >
                  <Image
                    src={t.image}
                    alt=""
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/10" />
                  <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-between">
                    <div>
                      <span className="inline-block text-[10px] uppercase tracking-[0.3em] text-amber-300 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md ring-1 ring-amber-300/30">
                        {t.badge}
                      </span>
                    </div>
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
                        {t.tittel}
                      </h2>
                      <p className="mt-2 text-sm sm:text-base text-zinc-300 max-w-md">
                        {t.beskrivelse}
                      </p>
                      <div className="mt-5 inline-flex items-center gap-2 text-amber-300 font-semibold group-hover:gap-3 transition-all">
                        <span>▶ {t.cta}</span>
                        <span>→</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ANDRE SIDER */}
        <section className="mb-16">
          <p className="text-xs uppercase tracking-[0.4em] text-zinc-500 mb-6">
            Andre sider
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {otherLinks.map((l, i) => (
              <motion.div
                key={l.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + i * 0.05 }}
              >
                <Link
                  href={l.href}
                  className="block rounded-xl ring-1 ring-white/10 hover:ring-amber-400/40 hover:bg-zinc-900/50 transition p-4 h-full"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{l.icon}</span>
                    <div className="min-w-0">
                      <p className="font-semibold text-sm truncate">
                        {l.tittel}
                      </p>
                      <p className="text-xs text-zinc-500 truncate">
                        {l.beskrivelse}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* QUICK TIPS */}
        <section className="rounded-2xl bg-amber-400/5 ring-1 ring-amber-300/20 p-6 sm:p-8">
          <p className="text-xs uppercase tracking-[0.4em] text-amber-300 mb-4">
            Tips for presentasjonen
          </p>
          <ul className="space-y-3 text-sm text-zinc-300">
            <li className="flex gap-3">
              <span className="text-amber-400 flex-shrink-0">1.</span>
              <span>
                Åpne <strong>presentasjonen i fullskjerm</strong> (F11) før
                dere starter — gir mest cinematic opplevelse.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-amber-400 flex-shrink-0">2.</span>
              <span>
                Test lyden på rommet før dere går opp. Ambient musikk er
                subtil; italiensk stemme er hovedsporet.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-amber-400 flex-shrink-0">3.</span>
              <span>
                Etter finale-sliden, klikk{" "}
                <strong>«Åpne elev-appen»</strong> for ekstra wow-faktor.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-amber-400 flex-shrink-0">4.</span>
              <span>
                Ha denne fanen åpen i en sidefane — så kommer dere alltid hit
                når dere skal bytte verktøy.
              </span>
            </li>
          </ul>
        </section>

        <p className="mt-12 text-xs text-zinc-600 text-center">
          NextStopTravel intern · Trykk <kbd className="px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-300">Ctrl+D</kbd> for å bokmerke siden
        </p>
      </div>
    </div>
  );
}
