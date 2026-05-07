-- Migrasjon: legg til hotell-info på pakketurer.
-- Trygt å kjøre flere ganger.

alter table pakketurer
  add column if not exists hotel_navn text not null default '',
  add column if not exists hotel_beskrivelse text not null default '',
  add column if not exists hotel_features text[] not null default '{}';
