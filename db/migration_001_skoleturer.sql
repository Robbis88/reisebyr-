-- Migrasjon: utvid pakketurer for skoletur-spesifikk info, og legg til kontakt-tabell.
-- Trygt å kjøre flere ganger.

alter table pakketurer
  add column if not exists klassetrinn text[] not null default '{}',
  add column if not exists fag text[] not null default '{}',
  add column if not exists laeringsmaal text not null default '',
  add column if not exists gruppe_min integer,
  add column if not exists gruppe_max integer;

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
