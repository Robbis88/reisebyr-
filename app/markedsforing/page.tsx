import type { Metadata } from "next";
import Link from "next/link";
import {
  PlattformIkon,
  SOSIALE_KONTOER,
  SosialeIkoner,
} from "@/components/SosialeMedier";

export const metadata: Metadata = {
  title: "Slik markedsfører vi oss — NextStopTravel",
  description:
    "Hvordan vi når lærere, rektorer og elever som nystartet reisebyrå — fra TikTok til direkte skole-dialog.",
};

const plattformer = [
  {
    plattform: "tiktok" as const,
    handle: "@nextstoptravel",
    url: SOSIALE_KONTOER.tiktok,
    folgere: "4 700",
    fargeKlasse: "bg-zinc-900 text-white",
    overskrift: "Der elevene allerede er",
    innhold:
      "Korte videoer som inspirerer elevene til å foreslå tur for klassen. Faglig substans pakket i et format som fungerer på algoritmen.",
    eksempler: [
      "5 fakta du ikke visste om Pompeii",
      "Hva spiser man egentlig på Napoli-tur?",
      "Stille øyeblikk på Auschwitz — uklippet",
    ],
  },
  {
    plattform: "instagram" as const,
    handle: "@nextstoptravel",
    url: SOSIALE_KONTOER.instagram,
    folgere: "2 300",
    fargeKlasse: "bg-gradient-to-br from-amber-400 via-pink-500 to-purple-600 text-white",
    overskrift: "Visuell historiefortelling",
    innhold:
      "Reels og stories fra pågående turer, kulissebilder og lærer-takeovers. Bygger tillit gjennom åpenhet om hvordan turene faktisk ser ut.",
    eksempler: [
      "Reels fra Berlin Wall ved soloppgang",
      "Lærer-takeover under København-tur",
      "Før/etter-bilder fra Pompeii",
    ],
  },
  {
    plattform: "facebook" as const,
    handle: "NextStopTravel",
    url: SOSIALE_KONTOER.facebook,
    folgere: "890",
    fargeKlasse: "bg-[#1877F2] text-white",
    overskrift: "Lengre innhold for lærere",
    innhold:
      "Artikler om læreplan-kobling, faglige dybdesaker og praktisk informasjon. Plattformen der fagdiskusjoner faktisk skjer.",
    eksempler: [
      "Slik bruker du Berlin-turen i samfunnsfag",
      "10 spørsmål fagleder bør stille reisebyrået",
      "Foreldre-FAQ for klassetur til utlandet",
    ],
  },
];

const testimonials = [
  {
    sitat:
      "Klassen vår snakker fortsatt om Berlin-turen et halvt år senere. Carmen og Robert var tett på fra start til slutt — vi følte aldri at vi var alene med 30 ungdommer i en fremmed by.",
    navn: "Lise Hansen",
    rolle: "Lærer, samfunnsfag og historie",
  },
  {
    sitat:
      "Endelig en aktør som forstår at en skoletur er undervisning, ikke ferie. Det faglige innholdet var bygget rundt læreplanen — ikke utenpå.",
    navn: "Pål Eriksen",
    rolle: "Fagleder, videregående",
  },
  {
    sitat:
      "Som ny lærer var jeg nervøs for å arrangere klassetur. NextStopTravel tok all praktisk planlegging — jeg kunne fokusere på det pedagogiske.",
    navn: "Ida Sørensen",
    rolle: "Kontaktlærer VG1",
  },
];

const kanaler = [
  {
    tittel: "SEO og blogginnlegg",
    beskrivelse:
      "Vi optimaliserer siden for søkeord lærere bruker — «skoletur Berlin», «klassetur København pris» — og publiserer artikler som svarer konkret på det de lurer på.",
  },
  {
    tittel: "Direkte til skolene",
    beskrivelse:
      "Skreddersydde tilbud sendes direkte til skoler vi har vært i kontakt med. Vi deltar på skole-arenaer og fagleder-treff i Bergens-regionen.",
  },
  {
    tittel: "Samarbeid med faglag",
    beskrivelse:
      "Partnerskap med faglag og lærerforeninger gir oss tilgang til fagrelevante kanaler — der lærere allerede leter etter idéer.",
  },
  {
    tittel: "Word-of-mouth",
    beskrivelse:
      "Fornøyde lærere er våre beste ambassadører. Vi tar oppfølgingssamtale med hver klasse etter tur og spør konkret hvem de tipser videre.",
  },
];

export default function MarkedsforingPage() {
  return (
    <div className="bg-white dark:bg-black">
      <section className="border-b border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
          <p className="text-sm font-medium uppercase tracking-widest text-sky-600 dark:text-sky-400">
            Slik når vi ut
          </p>
          <h1 className="mt-3 text-3xl sm:text-5xl font-semibold tracking-tight">
            Markedsføringen vår — i åpen versjon
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            Som nystartet reisebyrå har vi ikke råd til store annonsekampanjer.
            Det vi har er en tydelig målgruppe og en klar strategi: møte
            skolene der de allerede er — og levere innhold som er verdt å
            følge.
          </p>
          <div className="mt-8">
            <SosialeIkoner size="lg" />
          </div>
        </div>
      </section>

      <section className="border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950">
        <div className="mx-auto max-w-5xl px-6 py-10 grid grid-cols-2 sm:grid-cols-4 gap-6">
          <Stat tall="7 900" tekst="følgere på tvers av kanaler" />
          <Stat tall="42 000" tekst="månedlige visninger" />
          <Stat tall="6,3 %" tekst="engasjement (snitt)" />
          <Stat tall="14" tekst="skoler i dialog" />
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-2xl sm:text-3xl font-semibold">
          Plattformene våre — hver med sin rolle
        </h2>
        <p className="mt-3 max-w-2xl text-zinc-600 dark:text-zinc-400">
          Vi tror ikke på å være "overalt". Hver plattform har en spesifikk
          jobb i salgstrakten — fra inspirasjon til beslutning.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {plattformer.map((p) => (
            <article
              key={p.plattform}
              className="rounded-xl ring-1 ring-zinc-200 dark:ring-zinc-800 overflow-hidden flex flex-col"
            >
              <div className={`p-6 ${p.fargeKlasse}`}>
                <div className="flex items-center justify-between">
                  <PlattformIkon plattform={p.plattform} className="h-7 w-7" />
                  <span className="text-xs uppercase tracking-wider opacity-80">
                    {p.handle}
                  </span>
                </div>
                <p className="mt-6 text-3xl font-semibold">{p.folgere}</p>
                <p className="text-xs uppercase tracking-wider opacity-80">
                  følgere
                </p>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-semibold">{p.overskrift}</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  {p.innhold}
                </p>
                <p className="mt-5 text-xs uppercase tracking-wider text-zinc-500">
                  Eksempler på innhold
                </p>
                <ul className="mt-2 space-y-1.5 text-sm text-zinc-700 dark:text-zinc-300">
                  {p.eksempler.map((e) => (
                    <li key={e} className="flex gap-2">
                      <span className="text-sky-500">›</span>
                      <span>{e}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 text-sm font-medium text-sky-700 dark:text-sky-400 hover:underline"
                >
                  Følg oss på {p.plattform === "facebook" ? "Facebook" : p.plattform === "instagram" ? "Instagram" : "TikTok"} →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-zinc-50 dark:bg-zinc-950 border-y border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <h2 className="text-2xl sm:text-3xl font-semibold">
            Innhold som lærer — og selger
          </h2>
          <p className="mt-3 max-w-2xl text-zinc-600 dark:text-zinc-400">
            Hver tur vi setter sammen er også en innholdsserie. Det betyr at
            markedsføring og leveranse går hånd i hånd — vi trenger ikke å
            "produsere innhold" som ekstraarbeid.
          </p>

          <div className="mt-8 grid sm:grid-cols-3 gap-6">
            <ProsessKort
              steg="01"
              tittel="Under turen"
              tekst="En kort video per dag på TikTok og Reels. Kulissebilder fra programmet — autentisk, ikke iscenesatt."
            />
            <ProsessKort
              steg="02"
              tittel="Etter turen"
              tekst="Et lengre album på Instagram og en blogartikkel om faglig utbytte — lærere kan dele direkte med foreldre og fagledelse."
            />
            <ProsessKort
              steg="03"
              tittel="Mellom turer"
              tekst="Månedlig nyhetsbrev til lærere med pensum-tips, ferdig-laget undervisningsmateriell og inspirasjon til neste tur."
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-2xl sm:text-3xl font-semibold">Andre kanaler</h2>
        <p className="mt-3 max-w-2xl text-zinc-600 dark:text-zinc-400">
          Sosiale medier er der vi inspirerer — men en skoletur bookes sjelden
          fra TikTok. Disse kanalene gjør den faktiske jobben med å konvertere
          interesse til avtaler.
        </p>

        <div className="mt-8 grid sm:grid-cols-2 gap-6">
          {kanaler.map((k) => (
            <div
              key={k.tittel}
              className="rounded-lg ring-1 ring-zinc-200 dark:ring-zinc-800 p-6"
            >
              <h3 className="font-semibold">{k.tittel}</h3>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                {k.beskrivelse}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-zinc-50 dark:bg-zinc-950 border-y border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <h2 className="text-2xl sm:text-3xl font-semibold">
            Hva lærerne sier
          </h2>
          <div className="mt-8 grid sm:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <figure
                key={t.navn}
                className="rounded-lg bg-white dark:bg-black ring-1 ring-zinc-200 dark:ring-zinc-800 p-6"
              >
                <blockquote className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                  «{t.sitat}»
                </blockquote>
                <figcaption className="mt-4 text-sm">
                  <p className="font-semibold">{t.navn}</p>
                  <p className="text-zinc-500">{t.rolle}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold">
          Bli kjent med oss på sosiale medier
        </h2>
        <p className="mt-3 text-zinc-600 dark:text-zinc-400">
          Følg oss for inspirasjon, faglig innhold og oppdateringer fra
          pågående turer. Du finner oss her:
        </p>
        <div className="mt-6 flex justify-center">
          <SosialeIkoner size="lg" />
        </div>
        <div className="mt-10">
          <Link
            href="/kontakt"
            className="inline-flex items-center rounded-md bg-sky-600 hover:bg-sky-700 text-white px-6 py-3 font-medium"
          >
            Be om tilbud til klassen din
          </Link>
        </div>
      </section>
    </div>
  );
}

function Stat({ tall, tekst }: { tall: string; tekst: string }) {
  return (
    <div>
      <p className="text-2xl sm:text-3xl font-semibold">{tall}</p>
      <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-1">
        {tekst}
      </p>
    </div>
  );
}

function ProsessKort({
  steg,
  tittel,
  tekst,
}: {
  steg: string;
  tittel: string;
  tekst: string;
}) {
  return (
    <div className="rounded-lg bg-white dark:bg-black ring-1 ring-zinc-200 dark:ring-zinc-800 p-6">
      <p className="text-sky-600 dark:text-sky-400 font-semibold">{steg}</p>
      <h3 className="mt-2 font-semibold">{tittel}</h3>
      <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">{tekst}</p>
    </div>
  );
}
