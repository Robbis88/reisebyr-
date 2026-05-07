import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPakketurBySlug } from "@/lib/queries";

export const dynamic = "force-dynamic";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const tur = await getPakketurBySlug(slug);
  if (!tur) return { title: "Skoletur ikke funnet — NextStopTravel" };
  return {
    title: `${tur.tittel} — NextStopTravel`,
    description: tur.kort_beskrivelse,
  };
}

export default async function SkoleturDetalj({ params }: Props) {
  const { slug } = await params;
  const tur = await getPakketurBySlug(slug);
  if (!tur) notFound();

  return (
    <article className="bg-white dark:bg-black">
      <div className="mx-auto max-w-5xl px-6 py-10">
        <Link
          href="/#skoleturer"
          className="text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100"
        >
          ← Alle skoleturer
        </Link>

        <header className="mt-6">
          <p className="text-sm font-medium uppercase tracking-widest text-sky-600 dark:text-sky-400">
            {tur.destinasjon}, {tur.land}
          </p>
          <h1 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight">
            {tur.tittel}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            {tur.kort_beskrivelse}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {tur.klassetrinn.map((k) => (
              <span
                key={k}
                className="rounded-full bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 px-3 py-1 text-xs font-semibold"
              >
                {k}
              </span>
            ))}
            {tur.fag.map((f) => (
              <span
                key={f}
                className="rounded-full bg-sky-50 dark:bg-sky-950/40 text-sky-800 dark:text-sky-300 px-3 py-1 text-xs"
              >
                {f}
              </span>
            ))}
          </div>
        </header>

        <div className="mt-8 relative aspect-[16/9] overflow-hidden rounded-lg bg-zinc-100 dark:bg-zinc-900">
          <Image
            src={tur.hovedbilde_url}
            alt={tur.tittel}
            fill
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-cover"
            priority
          />
        </div>

        <dl className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-6 border-y border-zinc-200 dark:border-zinc-800 py-6">
          <div>
            <dt className="text-xs uppercase tracking-wider text-zinc-500">
              Varighet
            </dt>
            <dd className="mt-1 text-lg font-semibold">
              {tur.varighet_dager} dager
            </dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wider text-zinc-500">
              Pris fra
            </dt>
            <dd className="mt-1 text-lg font-semibold">
              {formatPris(tur.pris_nok)}
            </dd>
            <p className="text-xs text-zinc-500">per elev</p>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wider text-zinc-500">
              Gruppestørrelse
            </dt>
            <dd className="mt-1 text-lg font-semibold">
              {tur.gruppe_min && tur.gruppe_max
                ? `${tur.gruppe_min}–${tur.gruppe_max}`
                : "Etter avtale"}
            </dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wider text-zinc-500">
              Avreiser
            </dt>
            <dd className="mt-1 text-lg font-semibold">
              {tur.avreisedatoer.length}
            </dd>
          </div>
        </dl>

        <section className="mt-10">
          <h2 className="text-xl font-semibold">Om turen</h2>
          <p className="mt-3 text-zinc-700 dark:text-zinc-300 leading-relaxed whitespace-pre-line">
            {tur.beskrivelse}
          </p>
        </section>

        {tur.laeringsmaal && (
          <section className="mt-10 rounded-lg bg-sky-50 dark:bg-sky-950/30 ring-1 ring-sky-100 dark:ring-sky-900 p-6">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-sky-800 dark:text-sky-300">
              Læringsmål
            </h2>
            <p className="mt-2 text-zinc-800 dark:text-zinc-200 leading-relaxed">
              {tur.laeringsmaal}
            </p>
          </section>
        )}

        {tur.dager.length > 0 && (
          <section className="mt-12">
            <h2 className="text-xl font-semibold">Reiseplan</h2>
            <ol className="mt-4 space-y-4">
              {tur.dager.map((dag) => (
                <li
                  key={dag.id}
                  className="rounded-lg border border-zinc-200 dark:border-zinc-800 p-5"
                >
                  <p className="text-xs uppercase tracking-wider text-zinc-500">
                    Dag {dag.dag_nummer}
                  </p>
                  <h3 className="mt-1 font-semibold">{dag.tittel}</h3>
                  <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                    {dag.beskrivelse}
                  </p>
                </li>
              ))}
            </ol>
          </section>
        )}

        {tur.bilder.length > 0 && (
          <section className="mt-12">
            <h2 className="text-xl font-semibold">Bilder</h2>
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-3">
              {tur.bilder.map((b) => (
                <div
                  key={b.id}
                  className="relative aspect-square overflow-hidden rounded-md bg-zinc-100 dark:bg-zinc-900"
                >
                  <Image
                    src={b.bilde_url}
                    alt={b.bildetekst ?? tur.tittel}
                    fill
                    sizes="(max-width: 640px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {tur.avreisedatoer.length > 0 && (
          <section className="mt-12">
            <h2 className="text-xl font-semibold">Avreiser</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {tur.avreisedatoer.map((d) => (
                <li
                  key={d}
                  className="rounded-md border border-zinc-200 dark:border-zinc-800 px-3 py-1.5 text-sm"
                >
                  {formatDato(d)}
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className="mt-16 mb-12 rounded-xl bg-zinc-900 dark:bg-sky-950 text-white p-8 sm:p-12">
          <h2 className="text-2xl font-semibold">Klar for å ta klassen din hit?</h2>
          <p className="mt-3 text-zinc-300 max-w-xl">
            Vi setter opp et tilbud tilpasset klassens størrelse, ønsker og
            tidspunkt. Be om tilbud så hører du fra oss innen kort tid.
          </p>
          <Link
            href={`/kontakt?destinasjon=${encodeURIComponent(tur.tittel)}`}
            className="mt-6 inline-flex items-center rounded-md bg-sky-500 hover:bg-sky-400 text-zinc-950 px-6 py-3 font-semibold"
          >
            Be om tilbud
          </Link>
        </section>
      </div>
    </article>
  );
}

function formatPris(nok: number): string {
  return new Intl.NumberFormat("nb-NO", {
    style: "currency",
    currency: "NOK",
    maximumFractionDigits: 0,
  }).format(nok);
}

function formatDato(iso: string): string {
  return new Intl.DateTimeFormat("nb-NO", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(iso));
}
