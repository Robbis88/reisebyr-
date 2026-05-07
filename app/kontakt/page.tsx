import type { Metadata } from "next";
import { KontaktSkjema } from "./KontaktSkjema";

export const metadata: Metadata = {
  title: "Kontakt — NextStopTravel",
  description:
    "Be om tilbud på skoletur. Vi svarer normalt innen 1-2 virkedager.",
};

type Props = {
  searchParams: Promise<{ destinasjon?: string }>;
};

export default async function KontaktPage({ searchParams }: Props) {
  const sp = await searchParams;

  return (
    <div className="bg-white dark:bg-black">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <p className="text-sm font-medium uppercase tracking-widest text-sky-600 dark:text-sky-400">
          Kontakt oss
        </p>
        <h1 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight">
          Be om tilbud på skoletur
        </h1>
        <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
          Fyll ut skjemaet, så hører du fra oss normalt innen 1-2 virkedager
          med et forslag tilpasset klassen din.
        </p>

        <div className="mt-10">
          <KontaktSkjema defaultDestinasjon={sp.destinasjon} />
        </div>
      </div>
    </div>
  );
}
