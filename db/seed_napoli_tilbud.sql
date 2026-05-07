-- Tilbud til Metis videregående skole — alternativ #2: Napoli, Italia.
-- Krever migration_002_overnatting.sql kjørt først.
-- Trygt å kjøre flere ganger.

delete from pakketurer where slug = 'napoli-business-vg1';

with ny as (
  insert into pakketurer
    (slug, tittel, destinasjon, land, kort_beskrivelse, beskrivelse,
     pris_nok, varighet_dager, hovedbilde_url, tags, avreisedatoer,
     klassetrinn, fag, laeringsmaal, gruppe_min, gruppe_max,
     hotel_navn, hotel_beskrivelse, hotel_features)
  values
    ('napoli-business-vg1',
     'Napoli for Business vg1 — historie, matkultur og italiensk forretningssjel',
     'Napoli', 'Italia',
     'Fem dager der Pompeii, Vesuv og pizza-tradisjon møter italiensk forretningskultur. Skreddersydd for Business vg1.',
     'Opplev pulserende Napoli — en by full av historie, kultur, lidenskap og ekte italiensk stemning. Vi kombinerer Pompeii og Vesuv som dramatiske eksempler på natur- og menneskehistorie, Cappella Sansevero og Museo Archeologico for kunst og kultur, og lokal pizza-tradisjon som case på matkultur som forretningskonsept. Hver dag har et tydelig faglig anker, og elevene møter italiensk hverdag — fra byens marked til Vesuvs krater. Rom for både faglig fokus og at elevene får kose seg sammen som klasse.',
     7438, 5,
     '/skoleturer/napoli-business-vg1/napoli-sentrum.png',
     array['storby','europa','business','historie','matkultur','skreddersydd']::text[],
     array[]::date[],
     array['VG1']::text[],
     array['Markedsføring og innovasjon','Forretningsdrift','Kultur og samhandling']::text[],
     'Elevene skal kunne forklare hvordan historie, kultur og næringsliv henger sammen i en europeisk storby, analysere matkultur (pizza napoletana) som forretningskonsept og immateriell kulturarv, og reflektere over arkeologi som kilde til samfunnsforståelse.',
     30, 32,
     'Hotel Partenopeo Student Stay',
     'Moderne og trygt hotell midt i Napoli, perfekt for skoleturer. Kort vei til kollektivtransport, historiske severdigheter og strandpromenaden.',
     array[
       'Sentralt beliggende i hjertet av Napoli',
       '3- til 6-mannsrom for elever',
       'Enkeltrom for lærere',
       'Alle rom med eget bad, WiFi og aircondition',
       'Frokost inkludert hver dag',
       'Felles lounge, studieområder og gratis WiFi'
     ]::text[])
  returning id
)
insert into pakketur_bilder (pakketur_id, bilde_url, bildetekst, sort_order)
select n.id, b.url, b.tekst, b.ord
from ny n
cross join (
  values
    ('/skoleturer/napoli-business-vg1/napoli-sentrum.png', 'Napoli sentrum med Vesuv i bakgrunnen', 1),
    ('/skoleturer/napoli-business-vg1/pompeii.png', 'Pompeii — UNESCO-verdensarv', 2),
    ('/skoleturer/napoli-business-vg1/vesuv.png', 'Vesuv-krateret med utsikt over bukta', 3),
    ('/skoleturer/napoli-business-vg1/pizza.png', 'Pizza napoletana — UNESCO-immateriell kulturarv', 4),
    ('/skoleturer/napoli-business-vg1/museo.png', 'Museo Archeologico Nazionale', 5),
    ('/skoleturer/napoli-business-vg1/hotel-3-4.png', 'Eksempel: 3- til 4-mannsrom', 6),
    ('/skoleturer/napoli-business-vg1/hotel-5-6.png', 'Eksempel: 5- til 6-mannsrom', 7),
    ('/skoleturer/napoli-business-vg1/hotel-enkelt.png', 'Enkeltrom for lærere', 8)
) as b(url, tekst, ord);

with ny as (select id from pakketurer where slug = 'napoli-business-vg1')
insert into pakketur_dager (pakketur_id, dag_nummer, tittel, beskrivelse)
select n.id, d.dag, d.tittel, d.beskrivelse
from ny n
cross join (
  values
    (1, 'Reise og velkommen til Napoli',
     'Flyreise fra Bergen via Oslo til Napoli (Capodichino). Transport til sentralt hotell og innsjekk. Velkomstmøte med kort introduksjon til programmet og praktisk informasjon. Ettermiddag: kveldstur gjennom sentrumsgatene Spaccanapoli og Via Toledo for å bli kjent med byen. Felles velkomstmiddag — klassisk napolitansk pizza på en av byens eldste pizzerier.'),
    (2, 'Historie, kultur og byen Napoli',
     'Formiddag: guidet byvandring i Napolis historiske sentrum (UNESCO-verdensarv). Besøk i Cappella Sansevero med "Cristo velato" — et av Italias mest berømte kunstverk. Lokale markeder, Pio Monte della Misericordia og Spaccanapoli. Lunsj på egenhånd. Faglig oppgave i grupper: hvordan har Napolis historie formet byens identitet og næringsliv? Felles oppsummering på kvelden.'),
    (3, 'Pompeii og Vesuv',
     'Heldagsutflukt med buss til Pompeii — den arkeologiske byen som ble begravet under Vesuvs utbrudd i 79 e.Kr. Guidet omvisning med fokus på dagligliv, økonomi og handel i en romersk by. Lunsj. Ettermiddag: vandring opp på Vesuv-krateret med guide og fantastisk utsikt over Napoli-bukta. Tilbake til hotellet på kvelden, egen middag.'),
    (4, 'Museer, kunst og lokalt næringsliv',
     'Formiddag: Museo Archeologico Nazionale — verdens største samling av Pompeii-funn og romersk kunst. Ettermiddag: bedriftsbesøk hos en lokal pizzeria eller pasta-produksjon — matkultur som forretningsmodell og immateriell kulturarv (pizza napoletana er beskyttet av UNESCO). Lunsj og refleksjon. Tid på egen hånd. Felles avskjedsmiddag.'),
    (5, 'Oppsummering og hjemreise',
     'Frokost og felles oppsummering på hotellet. Kort vandring langs sjøkanten ved Castel dell''Ovo for siste utsikt over bukta. Transport til Capodichino lufthavn. Hjemreise via Oslo til Bergen.')
) as d(dag, tittel, beskrivelse);
