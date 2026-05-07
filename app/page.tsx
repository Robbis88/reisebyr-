import Image from "next/image";
import Link from "next/link";
import { getAllePakketurer } from "@/lib/queries";

export const dynamic = "force-dynamic";

export default async function Home() {
  const pakketurer = await getAllePakketurer();

  return (
    <div className="bg-zinc-50 dark:bg-zinc-950">
      <section className="bg-white dark:bg-black">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <p className="text-sm font-medium uppercase tracking-widest text-sky-600 dark:text-sky-400">
            Skoleturer for videregående · på budsjett
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight">
            Storbyopplevelser klassen{" "}
            <span className="text-sky-600 dark:text-sky-400">faktisk</span> har
            råd til.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            NextStopTravel er et nystartet reisebyrå som spesialiserer seg på
            skoleturer for videregående — der programmet henger sammen med
            læreplanen, og prisen henger sammen med skolens budsjett.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="#skoleturer"
              className="inline-flex items-center rounded-md bg-sky-600 hover:bg-sky-700 text-white px-5 py-3 font-medium"
            >
              Se alle skoleturer
            </Link>
            <Link
              href="/kontakt"
              className="inline-flex items-center rounded-md ring-1 ring-zinc-300 dark:ring-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-900 px-5 py-3 font-medium"
            >
              Be om tilbud
            </Link>
          </div>
        </div>
      </section>

      <section
        id="skoleturer"
        className="mx-auto w-full max-w-6xl px-6 py-12 sm:py-16 scroll-mt-20"
      >
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold">Våre skoleturer</h2>
          <p className="hidden sm:block text-sm text-zinc-500">
            {pakketurer.length} destinasjoner
          </p>
        </div>

        {pakketurer.length === 0 ? (
          <p className="text-zinc-600 dark:text-zinc-400">
            Ingen skoleturer publisert ennå.
          </p>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {pakketurer.map((tur) => (
              <Link
                key={tur.id}
                href={`/skoleturer/${tur.slug}`}
                className="group block overflow-hidden rounded-lg bg-white dark:bg-black ring-1 ring-zinc-200 dark:ring-zinc-800 transition hover:ring-zinc-400 dark:hover:ring-zinc-600"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-zinc-100 dark:bg-zinc-900">
                  <Image
                    src={tur.hovedbilde_url}
                    alt={tur.tittel}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                    {tur.destinasjon}, {tur.land}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold leading-snug">
                    {tur.tittel}
                  </h3>
                  <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2">
                    {tur.kort_beskrivelse}
                  </p>
                  {tur.fag.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {tur.fag.slice(0, 3).map((f) => (
                        <span
                          key={f}
                          className="rounded-full bg-sky-50 dark:bg-sky-950/40 text-sky-800 dark:text-sky-300 px-2 py-0.5 text-xs"
                        >
                          {f}
                        </span>
                      ))}
                      {tur.fag.length > 3 && (
                        <span className="text-xs text-zinc-500 self-center">
                          +{tur.fag.length - 3}
                        </span>
                      )}
                    </div>
                  )}
                  <div className="mt-4 flex items-baseline justify-between text-sm border-t border-zinc-100 dark:border-zinc-900 pt-3">
                    <span className="text-zinc-500">
                      {tur.varighet_dager} dager
                    </span>
                    <span className="font-semibold">
                      fra {formatPris(tur.pris_nok)}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

function formatPris(nok: number): string {
  return new Intl.NumberFormat("nb-NO", {
    style: "currency",
    currency: "NOK",
    maximumFractionDigits: 0,
  }).format(nok);
}
