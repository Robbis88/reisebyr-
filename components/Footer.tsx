"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SosialeIkoner } from "./SosialeMedier";

export function Footer() {
  const pathname = usePathname();
  if (pathname?.startsWith("/presentasjon")) return null;

  return (
    <footer className="mt-auto border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black">
      <div className="mx-auto max-w-6xl px-6 py-12 grid gap-8 sm:grid-cols-3">
        <div>
          <p className="text-base font-semibold">
            NextStop<span className="text-sky-600 dark:text-sky-400">Travel</span>
          </p>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 max-w-xs">
            Skoleturer for videregående til europeiske storbyer — på budsjett,
            tilpasset læreplanen.
          </p>
          <div className="mt-4">
            <SosialeIkoner size="sm" />
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold">Lenker</p>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li>
              <Link href="/#skoleturer" className="hover:underline">
                Skoleturer
              </Link>
            </li>
            <li>
              <Link href="/om-oss" className="hover:underline">
                Om oss
              </Link>
            </li>
            <li>
              <Link href="/markedsforing" className="hover:underline">
                Slik markedsfører vi oss
              </Link>
            </li>
            <li>
              <Link href="/kontakt" className="hover:underline">
                Kontakt
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold">Kontakt</p>
          <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
            For tilbud og spørsmål, ta kontakt via{" "}
            <Link href="/kontakt" className="text-sky-700 dark:text-sky-400 hover:underline">
              kontaktskjemaet
            </Link>
            .
          </p>
        </div>
      </div>
      <div className="border-t border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-6xl px-6 py-4 text-xs text-zinc-500">
          © {new Date().getFullYear()} NextStopTravel. Alle rettigheter
          reservert.
        </div>
      </div>
    </footer>
  );
}
