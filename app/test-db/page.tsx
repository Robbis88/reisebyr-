import { getAllePakketurer } from "@/lib/queries";

export const dynamic = "force-dynamic";

export default async function TestDbPage() {
  let rows;
  let error: string | null = null;
  try {
    rows = await getAllePakketurer();
  } catch (e) {
    error = e instanceof Error ? e.message : String(e);
  }

  return (
    <main className="mx-auto max-w-4xl p-8">
      <h1 className="text-2xl font-semibold mb-4">DB-test</h1>
      <p className="text-sm text-zinc-500 mb-6">
        Verifiserer at <code>DATABASE_URL</code> fungerer og at{" "}
        <code>pakketurer</code>-tabellen er på plass.
      </p>

      {error && (
        <div className="rounded border border-red-300 bg-red-50 dark:bg-red-950/30 p-4">
          <h2 className="font-semibold text-red-800 dark:text-red-300">Feil</h2>
          <pre className="text-xs whitespace-pre-wrap mt-2">{error}</pre>
        </div>
      )}

      {!error && rows && (
        <>
          <p className="mb-4">
            Fant <strong>{rows.length}</strong> pakketur(er).
          </p>
          <pre className="text-xs bg-zinc-100 dark:bg-zinc-900 p-4 rounded overflow-auto">
            {JSON.stringify(rows, null, 2)}
          </pre>
        </>
      )}
    </main>
  );
}
