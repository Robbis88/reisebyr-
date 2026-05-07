import { sql } from "./db";
import type {
  Pakketur,
  PakketurBilde,
  PakketurDag,
  PakketurDetalj,
} from "./types";

export async function getAllePakketurer(): Promise<Pakketur[]> {
  const rows = await sql`
    select id, slug, tittel, destinasjon, land,
           kort_beskrivelse, beskrivelse, pris_nok, varighet_dager,
           hovedbilde_url, tags, avreisedatoer,
           klassetrinn, fag, laeringsmaal, gruppe_min, gruppe_max,
           opprettet_at
    from pakketurer
    order by opprettet_at desc
  `;
  return rows as Pakketur[];
}

export async function getPakketurBySlug(
  slug: string,
): Promise<PakketurDetalj | null> {
  const turRows = await sql`
    select id, slug, tittel, destinasjon, land,
           kort_beskrivelse, beskrivelse, pris_nok, varighet_dager,
           hovedbilde_url, tags, avreisedatoer,
           klassetrinn, fag, laeringsmaal, gruppe_min, gruppe_max,
           opprettet_at
    from pakketurer
    where slug = ${slug}
    limit 1
  `;
  const tur = turRows[0] as Pakketur | undefined;
  if (!tur) return null;

  const [bilder, dager] = await Promise.all([
    sql`
      select id, pakketur_id, bilde_url, bildetekst, sort_order
      from pakketur_bilder
      where pakketur_id = ${tur.id}
      order by sort_order asc
    ` as Promise<PakketurBilde[]>,
    sql`
      select id, pakketur_id, dag_nummer, tittel, beskrivelse
      from pakketur_dager
      where pakketur_id = ${tur.id}
      order by dag_nummer asc
    ` as Promise<PakketurDag[]>,
  ]);

  return { ...tur, bilder, dager };
}
