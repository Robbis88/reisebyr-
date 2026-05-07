import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-black/80 backdrop-blur">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-baseline gap-1">
          <span className="text-lg font-semibold tracking-tight">
            NextStop
          </span>
          <span className="text-lg font-semibold tracking-tight text-sky-600 dark:text-sky-400">
            Travel
          </span>
        </Link>
        <nav className="flex items-center gap-1 sm:gap-3 text-sm">
          <Link
            href="/#skoleturer"
            className="px-3 py-2 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-900"
          >
            Skoleturer
          </Link>
          <Link
            href="/om-oss"
            className="px-3 py-2 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-900"
          >
            Om oss
          </Link>
          <Link
            href="/markedsforing"
            className="hidden sm:inline-flex px-3 py-2 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-900"
          >
            Slik når vi ut
          </Link>
          <Link
            href="/kontakt"
            className="ml-1 inline-flex items-center rounded-md bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 font-medium"
          >
            Be om tilbud
          </Link>
        </nav>
      </div>
    </header>
  );
}
