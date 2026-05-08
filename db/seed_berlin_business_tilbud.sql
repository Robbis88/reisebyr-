-- Tilbud til Metis videregående skole — alternativ #4: Berlin, Tyskland.
-- Krever migration_002_overnatting.sql kjørt først.
-- Trygt å kjøre flere ganger.

delete from pakketurer where slug = 'berlin-business-vg1';

with ny as (
  insert into pakketurer
    (slug, tittel, destinasjon, land, kort_beskrivelse, beskrivelse,
     pris_nok, varighet_dager, hovedbilde_url, tags, avreisedatoer,
     klassetrinn, fag, laeringsmaal, gruppe_min, gruppe_max,
     hotel_navn, hotel_beskrivelse, hotel_features)
  values
    ('berlin-business-vg1',
     'Berlin for Business vg1 — historie, demokrati og europeisk gjenoppbygning',
     'Berlin', 'Tyskland',
     'Fem dager der Berlinmuren, Brandenburger Tor og moderne Kreuzberg er klasserommet. Skreddersydd for Business vg1.',
     'Berlin er en levende lærebok i hvordan en by gjenoppbygger seg selv. Vi følger byens reise fra delt hovedstad i kald krig til Europas viktigste kreative og kommersielle senter — og ser hvordan historie, politikk og næringsliv henger uløselig sammen. Hver dag har et tydelig faglig anker, og rom for at klassen får kose seg sammen mellom programmet.',
     7790, 5,
     '/skoleturer/berlin-business-vg1/brandenburger-tor.png',
     array['storby','europa','business','historie','politikk','skreddersydd']::text[],
     array[]::date[],
     array['VG1']::text[],
     array['Markedsføring og innovasjon','Forretningsdrift','Kultur og samhandling']::text[],
     'Elevene skal kunne forklare hvordan Berlins historie har formet byens kulturuttrykk og merkevare i dag, drøfte hvordan en delt by gjenoppbygde sin økonomi etter 1989, og reflektere over sammenhengen mellom politikk, kultur og næringsliv i en europeisk hovedstad.',
     30, 32,
     'a&o Berlin Mitte Hostel',
     'Sentralt skole-hostell i Berlin Mitte / Alexanderplatz-området. Velkjent kjede blant skoleklasser i Europa, med korte avstander til alle severdighetene og direkte adgang til U-Bahn.',
     array[
       'Sentralt i Berlin Mitte / Alexanderplatz',
       '4- til 6-mannsrom for elever',
       'Enkeltrom for lærere',
       'Frokost inkludert hver dag',
       'Gratis WiFi og fellesområder for grupper',
       'Kort vei til U-Bahn og severdigheter'
     ]::text[])
  returning id
)
insert into pakketur_bilder (pakketur_id, bilde_url, bildetekst, sort_order)
select n.id, b.url, b.tekst, b.ord
from ny n
cross join (
  values
    ('/skoleturer/berlin-business-vg1/brandenburger-tor.png', 'Brandenburger Tor — symbolet på et samlet Tyskland', 1),
    ('/skoleturer/berlin-business-vg1/east-side-gallery.png', 'East Side Gallery — Berlinmuren som kunstverk', 2),
    ('/skoleturer/berlin-business-vg1/berlin-mitte.png', 'Berlin Mitte — sentrum og hostell-kvarteret', 3),
    ('/skoleturer/berlin-business-vg1/markthalle-neun.png', 'Markthalle Neun — moderne markedskultur', 4),
    ('/skoleturer/berlin-business-vg1/fernsehturm.png', 'Fernsehturm og Berlin ved solnedgang', 5),
    ('/skoleturer/berlin-business-vg1/hotel-4-mann.png', 'Eksempel: 4-mannsrom', 6),
    ('/skoleturer/berlin-business-vg1/hotel-6-mann.png', 'Eksempel: 6-mannsrom', 7),
    ('/skoleturer/berlin-business-vg1/hotel-enkelt.png', 'Enkeltrom for lærere', 8)
) as b(url, tekst, ord);

with ny as (select id from pakketurer where slug = 'berlin-business-vg1')
insert into pakketur_dager (pakketur_id, dag_nummer, tittel, beskrivelse)
select n.id, d.dag, d.tittel, d.beskrivelse
from ny n
cross join (
  values
    (1, 'Reise og introduksjon til Berlin',
     'Flyreise fra Bergen til Berlin. Lokaltransport (S-Bahn) til hostellet i Berlin Mitte, innsjekk og velkomstmøte. Ettermiddag: kveldsvandring i Berlin Mitte og introduksjon til Berlin som delt by under den kalde krigen. Besøk ved Alexanderplatz og TV-tårnet (utvendig). Felles velkomstmiddag.'),
    (2, 'Berlinmuren og den kalde krigen',
     'Heldags fokus på Berlins delte historie. Besøk ved East Side Gallery — den lengste bevarte delen av Berlinmuren med kunstverk. Checkpoint Charlie og guidet byvandring om den kalde krigen. Elevoppgave i grupper: hvordan påvirket delingen av Berlin Europa, og hvordan former politikk menneskers hverdag og næringsliv? Kveldsrefleksjon og gruppearbeid.'),
    (3, 'Tysk historie, kultur og demokrati',
     'Formiddag: besøk på Museumsinsel (Pergamonmuseet eller Panorama). Brandenburger Tor og Holocaust-minnesmerket — refleksjon om historiens vekt i moderne politikk. Ettermiddag: Regierungsviertel med Forbundsdagen (utvendig). Kveld: kulturell begivenhet — klassisk konsert eller tysk teateropplevelse. Felles middag inkludert.'),
    (4, 'Moderne Berlin — kunst, bærekraft og næringsliv',
     'Formiddag: samtidskunstmuseum eller guidet street art-tour i Kreuzberg/Friedrichshain — Berlin som kreativ hovedstad. Lunsj på Markthalle Neun: lokal mat, småprodusenter og handel som forretningsmodell. Gruppearbeid: hvordan har Berlin utviklet seg etter murens fall? Sammenligning mellom Berlin og norske storbyer. Ettermiddag: utsiktspunkt ved Spree.'),
    (5, 'Oppsummering og hjemreise',
     'Frokost og kort elevpresentasjon i grupper: hva lærte vi om Berlin som by og merkevare? Hvordan påvirker historie dagens samfunn og næringsliv? Hva skiller Berlin fra norske byer? Utsjekk og transport til flyplassen. Hjemreise til Bergen.')
) as d(dag, tittel, beskrivelse);
