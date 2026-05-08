"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const AVGANG = new Date("2026-09-15T10:00:00+02:00");

const pakkelisteItems = [
  { kategori: "Reisedokumenter", items: ["Pass (gyldig 6 mnd etter hjemreise)", "Europeisk helsetrygdkort", "Reiseforsikring-kort", "Kopi av billetter"] },
  { kategori: "Klær", items: ["Komfortable joggesko (mye gåing!)", "Lett jakke / windbreaker", "Solbriller og solkrem", "Badetøy hvis dere skal i sjøen", "Pene klær til middag"] },
  { kategori: "Elektronikk", items: ["Telefon og lader", "Adapter for italiensk strømuttak (type C/F)", "Powerbank", "Hodetelefoner"] },
  { kategori: "Praktisk", items: ["Vannflaske", "Liten dagsekk", "Lommebok med litt euro", "Personlig medisin"] },
  { kategori: "Faglig", items: ["Notatbok og penn", "iPad/laptop hvis du har", "Kamera for oppgavebilder"] },
];

const program = [
  { dag: "Dag 1", tittel: "Reise og velkomst", aktivitet: "Fly Bergen → Napoli, innsjekk, kveldsvandring, velkomstpizza" },
  { dag: "Dag 2", tittel: "Historie og kultur", aktivitet: "Cappella Sansevero, Spaccanapoli, lokale markeder" },
  { dag: "Dag 3", tittel: "Pompeii og Vesuv", aktivitet: "Heldagsutflukt med buss, vandring opp Vesuv-krateret" },
  { dag: "Dag 4", tittel: "Museer og næringsliv", aktivitet: "Museo Archeologico, bedriftsbesøk pizzeria" },
  { dag: "Dag 5", tittel: "Hjemreise", aktivitet: "Oppsummering, Castel dell'Ovo, fly hjem" },
];

const kontakter = [
  { navn: "Carmen Toro", rolle: "Reiserådgiver", tlf: "+47 — under tur 24/7" },
  { navn: "Robert Leganger", rolle: "Daglig leder", tlf: "+47 — under tur 24/7" },
  { navn: "Lokal reiseleder Napoli", rolle: "På bakken hele turen", tlf: "+39 — informeres ved avgang" },
  { navn: "Norsk ambassade Roma", rolle: "Konsulær bistand", tlf: "+39 06 8537 1700" },
  { navn: "Italiensk nødnummer", rolle: "Politi / ambulanse / brann", tlf: "112" },
];

export default function MinTurNapoli() {
  return (
    <div className="bg-zinc-950 text-white min-h-screen">
      {/* HERO med nedtelling */}
      <section className="relative h-[70vh] sm:h-[80vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/skoleturer/napoli-business-vg1/hero.png"
            alt=""
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-zinc-950/10" />
        </div>

        <div className="relative h-full flex flex-col justify-end items-start max-w-5xl mx-auto px-6 sm:px-10 pb-16 z-10">
          <motion.p
            className="text-xs sm:text-sm uppercase tracking-[0.4em] text-amber-300 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Min tur · Metis Business vg1
          </motion.p>
          <motion.h1
            className="text-5xl sm:text-7xl lg:text-8xl font-semibold tracking-tight leading-[0.95]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            Din tur til
            <br />
            <span className="text-amber-400">Napoli.</span>
          </motion.h1>

          <Nedtelling target={AVGANG} />
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 sm:px-10 py-16 space-y-16">
        {/* PRAKTISK INFO */}
        <section>
          <h2 className="text-xs uppercase tracking-[0.4em] text-amber-300 mb-4">
            Praktisk informasjon
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <InfoCard
              tittel="Avgang Bergen"
              verdi="15. september 2026"
              detalj="Kl. 10:00 · Bergen lufthavn Flesland"
            />
            <InfoCard
              tittel="Ankomst Napoli"
              verdi="Capodichino"
              detalj="Kl. 11:30 lokal tid · transfer til hotell"
            />
            <InfoCard
              tittel="Overnatting"
              verdi="Hotel Partenopeo Student Stay"
              detalj="Sentralt Napoli · 5 min til metro"
            />
            <InfoCard
              tittel="Hjemreise"
              verdi="19. september 2026"
              detalj="Avgang ettermiddag · ankomst Bergen kveld"
            />
          </div>
        </section>

        {/* PAKKELISTE */}
        <section>
          <Pakkeliste />
        </section>

        {/* DAGLIG PROGRAM */}
        <section>
          <h2 className="text-xs uppercase tracking-[0.4em] text-amber-300 mb-4">
            Programmet
          </h2>
          <ol className="space-y-3">
            {program.map((p) => (
              <li
                key={p.dag}
                className="rounded-xl ring-1 ring-white/10 bg-zinc-900/50 px-5 py-4 flex gap-5 items-center"
              >
                <span className="text-2xl font-light text-amber-400/80 w-16 flex-shrink-0">
                  {p.dag}
                </span>
                <div>
                  <p className="font-semibold">{p.tittel}</p>
                  <p className="text-sm text-zinc-400 mt-0.5">{p.aktivitet}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* KONTAKTER & NØDNUMMER */}
        <section>
          <h2 className="text-xs uppercase tracking-[0.4em] text-amber-300 mb-4">
            Kontakt og nødnummer
          </h2>
          <p className="text-sm text-zinc-400 mb-4">
            Lagre disse i mobilen før avreise. Ring NextStopTravel først hvis
            noe haster — vi bistår med tolkning og oppfølging.
          </p>
          <div className="space-y-2">
            {kontakter.map((k) => (
              <div
                key={k.navn}
                className="rounded-lg ring-1 ring-white/10 bg-zinc-900/50 px-5 py-4 flex items-center justify-between gap-4"
              >
                <div>
                  <p className="font-semibold">{k.navn}</p>
                  <p className="text-xs text-zinc-500">{k.rolle}</p>
                </div>
                <p className="text-sm text-amber-300 font-mono text-right">
                  {k.tlf}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* VÆRMELDING */}
        <section>
          <h2 className="text-xs uppercase tracking-[0.4em] text-amber-300 mb-4">
            Vær i Napoli akkurat nå
          </h2>
          <Vaer />
        </section>

        {/* PRO TIPS */}
        <section className="rounded-2xl bg-amber-400/10 ring-1 ring-amber-300/30 p-6 sm:p-8">
          <h2 className="text-xs uppercase tracking-[0.4em] text-amber-300 mb-3">
            Carmen og Roberts beste tips
          </h2>
          <ul className="space-y-3 text-zinc-200">
            <li className="flex gap-3">
              <span className="text-amber-400 flex-shrink-0">→</span>
              <span>
                Lær 10 italienske ord før avreise — Napoli-folk elsker når
                turister prøver. <em>Grazie, Buongiorno, Per favore</em> tar
                deg langt.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-amber-400 flex-shrink-0">→</span>
              <span>
                Ta med litt kontanter (euro). Mange små pizzeriaer aksepterer
                ikke kort.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-amber-400 flex-shrink-0">→</span>
              <span>
                Vesuv-vandringen er bratt og solrik — ta med vann, solkrem og
                solbriller.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-amber-400 flex-shrink-0">→</span>
              <span>
                Pompeii er enormt — komfortable sko er ikke valgfritt, det er
                obligatorisk.
              </span>
            </li>
          </ul>
        </section>

        {/* TILBAKE */}
        <div className="text-center pt-8">
          <Link
            href="/skoleturer/napoli-business-vg1"
            className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-100 transition"
          >
            <span>← Tilbake til turbeskrivelse</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

function Nedtelling({ target }: { target: Date }) {
  const [tid, setTid] = useState({ d: 0, t: 0, m: 0, s: 0 });

  useEffect(() => {
    const tick = () => {
      const diff = target.getTime() - Date.now();
      if (diff <= 0) {
        setTid({ d: 0, t: 0, m: 0, s: 0 });
        return;
      }
      const d = Math.floor(diff / 86400000);
      const t = Math.floor((diff / 3600000) % 24);
      const m = Math.floor((diff / 60000) % 60);
      const s = Math.floor((diff / 1000) % 60);
      setTid({ d, t, m, s });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target]);

  return (
    <motion.div
      className="mt-10 grid grid-cols-4 gap-3 max-w-md"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.6 }}
    >
      {[
        { v: tid.d, l: "Dager" },
        { v: tid.t, l: "Timer" },
        { v: tid.m, l: "Min" },
        { v: tid.s, l: "Sek" },
      ].map((x) => (
        <div
          key={x.l}
          className="rounded-xl bg-black/50 backdrop-blur-md ring-1 ring-white/10 px-2 sm:px-4 py-3 text-center"
        >
          <p className="text-2xl sm:text-4xl font-semibold tabular-nums">
            {String(x.v).padStart(2, "0")}
          </p>
          <p className="text-[10px] uppercase tracking-widest text-zinc-400 mt-1">
            {x.l}
          </p>
        </div>
      ))}
    </motion.div>
  );
}

function Pakkeliste() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("napoli-pakkeliste");
    if (stored) {
      try {
        setChecked(JSON.parse(stored));
      } catch {}
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) {
      localStorage.setItem("napoli-pakkeliste", JSON.stringify(checked));
    }
  }, [checked, hydrated]);

  const toggle = (key: string) =>
    setChecked((c) => ({ ...c, [key]: !c[key] }));

  const totalItems = pakkelisteItems.reduce((s, k) => s + k.items.length, 0);
  const checkedCount = Object.values(checked).filter(Boolean).length;
  const pct = Math.round((checkedCount / totalItems) * 100);

  return (
    <>
      <div className="flex items-end justify-between mb-4">
        <h2 className="text-xs uppercase tracking-[0.4em] text-amber-300">
          Pakkeliste
        </h2>
        <p className="text-sm text-zinc-400 tabular-nums">
          {checkedCount} / {totalItems} ferdig
        </p>
      </div>
      <div className="h-1.5 rounded-full bg-zinc-900 overflow-hidden mb-6">
        <motion.div
          className="h-full bg-amber-400"
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.4 }}
        />
      </div>
      <div className="space-y-6">
        {pakkelisteItems.map((kat) => (
          <div key={kat.kategori}>
            <p className="text-sm font-semibold text-zinc-300 mb-3">
              {kat.kategori}
            </p>
            <ul className="space-y-1.5">
              {kat.items.map((item) => {
                const key = `${kat.kategori}-${item}`;
                const isChecked = !!checked[key];
                return (
                  <li key={key}>
                    <button
                      onClick={() => toggle(key)}
                      className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-zinc-900/50 transition text-left"
                    >
                      <span
                        className={`flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md border transition ${
                          isChecked
                            ? "border-amber-400 bg-amber-400"
                            : "border-zinc-600"
                        }`}
                      >
                        {isChecked && (
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="black"
                            strokeWidth={3}
                            className="h-3.5 w-3.5"
                          >
                            <path
                              d="M5 13l4 4L19 7"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        )}
                      </span>
                      <span
                        className={`text-sm sm:text-base ${
                          isChecked
                            ? "text-zinc-500 line-through"
                            : "text-zinc-200"
                        }`}
                      >
                        {item}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}

type Wx = {
  current?: { temperature_2m: number; weather_code: number };
  daily?: {
    time: string[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    weather_code: number[];
  };
};

function vaerKodeTekst(c: number): string {
  if (c === 0) return "Klart";
  if (c <= 2) return "Lettskyet";
  if (c === 3) return "Skyet";
  if (c >= 45 && c <= 48) return "Tåke";
  if (c >= 51 && c <= 67) return "Regn";
  if (c >= 71 && c <= 77) return "Snø";
  if (c >= 80 && c <= 82) return "Regnbyge";
  if (c >= 95) return "Tordenvær";
  return "—";
}

function vaerKodeIkon(c: number): string {
  if (c === 0) return "☀️";
  if (c <= 2) return "🌤️";
  if (c === 3) return "☁️";
  if (c >= 45 && c <= 48) return "🌫️";
  if (c >= 51 && c <= 67) return "🌧️";
  if (c >= 71 && c <= 77) return "❄️";
  if (c >= 80 && c <= 82) return "🌦️";
  if (c >= 95) return "⛈️";
  return "—";
}

function Vaer() {
  const [data, setData] = useState<Wx | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=40.85&longitude=14.27&current=temperature_2m,weather_code&daily=temperature_2m_max,temperature_2m_min,weather_code&timezone=Europe%2FRome&forecast_days=4",
    )
      .then((r) => r.json())
      .then(setData)
      .catch(() => setError(true));
  }, []);

  if (error) {
    return (
      <p className="text-sm text-zinc-500">
        Klarer ikke hente vær akkurat nå. Prøv igjen senere.
      </p>
    );
  }
  if (!data) {
    return (
      <p className="text-sm text-zinc-500">Henter værmelding…</p>
    );
  }

  const c = data.current;
  return (
    <div className="rounded-2xl ring-1 ring-white/10 bg-zinc-900/50 p-6 sm:p-8">
      {c && (
        <div className="flex items-baseline gap-4 mb-6">
          <span className="text-5xl">{vaerKodeIkon(c.weather_code)}</span>
          <div>
            <p className="text-4xl font-semibold tabular-nums">
              {Math.round(c.temperature_2m)}°
            </p>
            <p className="text-sm text-zinc-400">
              {vaerKodeTekst(c.weather_code)} · Napoli
            </p>
          </div>
        </div>
      )}
      {data.daily && (
        <div className="grid grid-cols-4 gap-3 pt-4 border-t border-white/10">
          {data.daily.time.slice(0, 4).map((d, i) => (
            <div key={d} className="text-center">
              <p className="text-xs text-zinc-500 mb-1">
                {new Date(d).toLocaleDateString("nb-NO", { weekday: "short" })}
              </p>
              <p className="text-2xl mb-1">
                {vaerKodeIkon(data.daily!.weather_code[i])}
              </p>
              <p className="text-sm tabular-nums">
                {Math.round(data.daily.temperature_2m_max[i])}°
                <span className="text-zinc-500 ml-1">
                  {Math.round(data.daily.temperature_2m_min[i])}°
                </span>
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function InfoCard({
  tittel,
  verdi,
  detalj,
}: {
  tittel: string;
  verdi: string;
  detalj: string;
}) {
  return (
    <div className="rounded-xl ring-1 ring-white/10 bg-zinc-900/50 px-5 py-4">
      <p className="text-xs uppercase tracking-widest text-zinc-500">
        {tittel}
      </p>
      <p className="mt-1 text-lg font-semibold">{verdi}</p>
      <p className="text-sm text-zinc-400 mt-0.5">{detalj}</p>
    </div>
  );
}
