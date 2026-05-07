-- Komplett skjema for NextStopTravel. Kjør i Neon SQL Editor på en frisk database.
-- For eksisterende database: bruk db/migration_001_skoleturer.sql i stedet.

create table if not exists pakketurer (
  id              bigserial primary key,
  slug            text not null unique,
  tittel          text not null,
  destinasjon     text not null,
  land            text not null,
  kort_beskrivelse text not null,
  beskrivelse     text not null,
  pris_nok        integer not null,
  varighet_dager  integer not null,
  hovedbilde_url  text not null,
  tags            text[] not null default '{}',
  avreisedatoer   date[] not null default '{}',
  klassetrinn     text[] not null default '{}',
  fag             text[] not null default '{}',
  laeringsmaal    text not null default '',
  gruppe_min      integer,
  gruppe_max      integer,
  opprettet_at    timestamptz not null default now()
);

create table if not exists pakketur_bilder (
  id            bigserial primary key,
  pakketur_id   bigint not null references pakketurer(id) on delete cascade,
  bilde_url     text not null,
  bildetekst    text,
  sort_order    integer not null default 0
);

create index if not exists pakketur_bilder_pakketur_idx
  on pakketur_bilder (pakketur_id, sort_order);

create table if not exists pakketur_dager (
  id            bigserial primary key,
  pakketur_id   bigint not null references pakketurer(id) on delete cascade,
  dag_nummer    integer not null,
  tittel        text not null,
  beskrivelse   text not null,
  unique (pakketur_id, dag_nummer)
);

create table if not exists kontakt_henvendelser (
  id              bigserial primary key,
  skole           text not null,
  kontaktperson   text not null,
  epost           text not null,
  telefon         text,
  klassetrinn     text,
  antall_elever   integer,
  destinasjon     text,
  melding         text not null,
  opprettet_at    timestamptz not null default now()
);

create index if not exists kontakt_henvendelser_opprettet_idx
  on kontakt_henvendelser (opprettet_at desc);
