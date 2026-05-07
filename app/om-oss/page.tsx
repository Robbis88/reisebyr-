import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Om oss — NextStopTravel",
  description:
    "Carmen Toro og Robert Leganger har startet NextStopTravel — et nystartet reisebyrå for VGS-skoleturer på budsjett.",
};

export default function OmOssPage() {
  return (
    <div className="bg-white dark:bg-black">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <p className="text-sm font-medium uppercase tracking-widest text-sky-600 dark:text-sky-400">
          Om oss
        </p>
        <h1 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight">
          Et nystartet reisebyrå med ett mål: bedre skoleturer til lavere pris
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
          NextStopTravel er Carmen og Robert — to gründere som nettopp har
          startet eget reisebyrå. Vi konsentrerer oss om én ting — skoleturer
          for videregående — og ett løfte: god faglig kvalitet til en pris
          flest mulig klasser har råd til.
        </p>

        <section className="mt-10 rounded-xl bg-sky-50 dark:bg-sky-950/30 ring-1 ring-sky-100 dark:ring-sky-900 p-6 sm:p-8">
          <h2 className="text-lg font-semibold text-sky-900 dark:text-sky-200">
            Hvorfor budsjett-fokus?
          </h2>
          <p className="mt-3 text-zinc-800 dark:text-zinc-200">
            Vi ser at gode skoleturer ofte velges bort fordi prisen blir for
            høy for klassekassen. Vår filosofi er at en velplanlagt tur ikke
            trenger å koste skjorta — kunsten er å vite hvor man skal kutte
            (luksusdetaljer) og hvor man <em>ikke</em> skal kutte (faglig
            kvalitet, sikkerhet og lokal guide).
          </p>
        </section>

        <div className="mt-12 grid gap-10 sm:grid-cols-2">
          <Gründer
            navn="Carmen Toro"
            tittel="Reiserådgiver"
            bio="Carmen har brent for gode skoleturer helt siden hun selv gikk linjen for reiseliv på videregående. Som reiserådgiver er det hun som setter sammen programmene og sørger for at hver dag på turen har faglig substans — og at det praktiske faktisk fungerer når dere er på plass."
          />
          <Gründer
            navn="Robert Leganger"
            tittel="Daglig leder"
            bio="Robert har bakgrunn fra forretningsdrift og brenner for å bygge opp nye virksomheter. I NextStopTravel har han ansvaret for det operative — leverandøravtaler, økonomi og dialog med skolene — og bruker erfaringen til å holde kostnadene lave så tilbudet til klassen blir så godt som mulig."
          />
        </div>

        <section className="mt-16 rounded-xl bg-zinc-50 dark:bg-zinc-950 ring-1 ring-zinc-200 dark:ring-zinc-800 p-8 sm:p-10">
          <h2 className="text-xl font-semibold">Slik holder vi prisen nede</h2>
          <ul className="mt-4 space-y-3 text-zinc-700 dark:text-zinc-300">
            <li className="flex gap-3">
              <span className="text-sky-600 dark:text-sky-400 font-semibold">
                01
              </span>
              <p>
                <strong>Smarte avreisetidspunkt.</strong> Vi velger uker og
                dager der både fly og hotell er rimeligere — uten at det går
                ut over programmet.
              </p>
            </li>
            <li className="flex gap-3">
              <span className="text-sky-600 dark:text-sky-400 font-semibold">
                02
              </span>
              <p>
                <strong>Sentralt, men nøkternt overnatting.</strong> Hoteller
                og hostels vi har testet selv — alltid sentralt, alltid trygt,
                men uten unødvendig luksus.
              </p>
            </li>
            <li className="flex gap-3">
              <span className="text-sky-600 dark:text-sky-400 font-semibold">
                03
              </span>
              <p>
                <strong>Faglig forankring først.</strong> Hver tur er bygget
                rundt konkrete kompetansemål — ikke bare severdigheter. Det er
                her vi ikke kutter.
              </p>
            </li>
            <li className="flex gap-3">
              <span className="text-sky-600 dark:text-sky-400 font-semibold">
                04
              </span>
              <p>
                <strong>Direkte med klassen, uten mellomledd.</strong> Som
                liten aktør slipper vi unna store agentavgifter. Den
                besparelsen havner i tilbudet du får.
              </p>
            </li>
          </ul>
        </section>

        <section className="mt-16">
          <h2 className="text-xl font-semibold">Klar for å snakke?</h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-400 max-w-xl">
            Vi tar gjerne en uforpliktende prat om hva som passer for klassen
            din — og hva budsjettet faktisk strekker til.
          </p>
          <Link
            href="/kontakt"
            className="mt-6 inline-flex items-center rounded-md bg-sky-600 hover:bg-sky-700 text-white px-6 py-3 font-medium"
          >
            Be om tilbud
          </Link>
        </section>
      </div>
    </div>
  );
}

function Gründer({
  navn,
  tittel,
  bio,
}: {
  navn: string;
  tittel: string;
  bio: string;
}) {
  return (
    <div className="rounded-lg ring-1 ring-zinc-200 dark:ring-zinc-800 p-6">
      <div className="aspect-square rounded-md bg-gradient-to-br from-sky-100 to-zinc-100 dark:from-sky-950 dark:to-zinc-900 mb-5 flex items-center justify-center text-zinc-400 text-sm">
        Bilde kommer
      </div>
      <h3 className="text-lg font-semibold">{navn}</h3>
      <p className="text-sm text-sky-700 dark:text-sky-400">{tittel}</p>
      <p className="mt-3 text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
        {bio}
      </p>
    </div>
  );
}
