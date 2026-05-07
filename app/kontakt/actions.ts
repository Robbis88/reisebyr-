"use server";

import { sql } from "@/lib/db";
import { redirect } from "next/navigation";

export type KontaktState = { error?: string };

export async function lagreHenvendelse(
  _prevState: KontaktState,
  formData: FormData,
): Promise<KontaktState> {
  const skole = String(formData.get("skole") ?? "").trim();
  const kontaktperson = String(formData.get("kontaktperson") ?? "").trim();
  const epost = String(formData.get("epost") ?? "").trim();
  const telefon = String(formData.get("telefon") ?? "").trim() || null;
  const klassetrinn = String(formData.get("klassetrinn") ?? "").trim() || null;
  const antallStr = String(formData.get("antall_elever") ?? "").trim();
  const antall = antallStr ? Number(antallStr) : null;
  const destinasjon = String(formData.get("destinasjon") ?? "").trim() || null;
  const melding = String(formData.get("melding") ?? "").trim();

  if (!skole || !kontaktperson || !epost || !melding) {
    return { error: "Vennligst fyll ut alle påkrevde felter." };
  }
  if (!epost.includes("@") || !epost.includes(".")) {
    return { error: "Ugyldig e-postadresse." };
  }
  if (antall !== null && (!Number.isFinite(antall) || antall < 1)) {
    return { error: "Antall elever må være et positivt tall." };
  }

  await sql`
    insert into kontakt_henvendelser
      (skole, kontaktperson, epost, telefon, klassetrinn,
       antall_elever, destinasjon, melding)
    values
      (${skole}, ${kontaktperson}, ${epost}, ${telefon}, ${klassetrinn},
       ${antall}, ${destinasjon}, ${melding})
  `;

  redirect("/kontakt/takk");
}
