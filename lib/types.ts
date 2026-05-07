export type Pakketur = {
  id: number;
  slug: string;
  tittel: string;
  destinasjon: string;
  land: string;
  kort_beskrivelse: string;
  beskrivelse: string;
  pris_nok: number;
  varighet_dager: number;
  hovedbilde_url: string;
  tags: string[];
  avreisedatoer: string[];
  klassetrinn: string[];
  fag: string[];
  laeringsmaal: string;
  gruppe_min: number | null;
  gruppe_max: number | null;
  opprettet_at: string;
};

export type PakketurBilde = {
  id: number;
  pakketur_id: number;
  bilde_url: string;
  bildetekst: string | null;
  sort_order: number;
};

export type PakketurDag = {
  id: number;
  pakketur_id: number;
  dag_nummer: number;
  tittel: string;
  beskrivelse: string;
};

export type PakketurDetalj = Pakketur & {
  bilder: PakketurBilde[];
  dager: PakketurDag[];
};

export type Henvendelse = {
  skole: string;
  kontaktperson: string;
  epost: string;
  telefon?: string;
  klassetrinn?: string;
  antall_elever?: number;
  destinasjon?: string;
  melding: string;
};
