import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Takk for henvendelsen — NextStopTravel",
};

export default function TakkPage() {
  return (
    <div className="bg-white dark:bg-black">
      <div className="mx-auto max-w-2xl px-6 py-24 text-center">
        <div className="mx-auto h-16 w-16 rounded-full bg-sky-100 dark:bg-sky-950 flex items-center justify-center">
          <svg
            className="h-8 w-8 text-sky-600 dark:text-sky-400"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <path d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="mt-6 text-3xl font-semibold tracking-tight">
          Takk for henvendelsen!
        </h1>
        <p className="mt-4 text-zinc-600 dark:text-zinc-400">
          Vi har mottatt meldingen din og tar kontakt normalt innen 1-2
          virkedager. Sjekk gjerne søppelpost-mappen i tilfelle svaret havner
          der.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center rounded-md ring-1 ring-zinc-300 dark:ring-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-900 px-5 py-2.5 font-medium"
        >
          Tilbake til forsiden
        </Link>
      </div>
    </div>
  );
}
