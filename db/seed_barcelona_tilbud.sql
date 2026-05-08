-- Tilbud til Metis videregående skole — alternativ #3: Barcelona, Spania.
-- Krever migration_002_overnatting.sql kjørt først.
-- Trygt å kjøre flere ganger.

delete from pakketurer where slug = 'barcelona-business-vg1';

with ny as (
  insert into pakketurer
    (slug, tittel, destinasjon, land, kort_beskrivelse, beskrivelse,
     pris_nok, varighet_dager, hovedbilde_url, tags, avreisedatoer,
     klassetrinn, fag, laeringsmaal, gruppe_min, gruppe_max,
     hotel_navn, hotel_beskrivelse, hotel_features)
  values
    ('barcelona-business-vg1',
     'Barcelona for Business vg1 — arkitektur, byidentitet og bærekraftig næringsliv',
     'Barcelona', 'Spania',
     'Fem dager der Sagrada Família, Gaudí og La Boqueria er klasserommet. Skreddersydd for Business vg1.',
     'Barcelona er et utstillingsvindu for hvordan kultur, arkitektur og merkevarer kan løfte en hel by til å bli en av Europas mest besøkte destinasjoner. Vi ser hvordan Gaudís arkitektur er blitt katalansk identitet og global merkevare, hvordan La Boqueria-markedet er en levende lærebok i lokal handel, og hvordan moderne bydeler som Poblenou kombinerer bærekraft og næringsliv. Hver dag har faglig anker i programfagene, og det er rom for at klassen får kose seg sammen mellom programmet.',
     7438, 5,
     '/skoleturer/barcelona-business-vg1/sagrada-familia.png',
     array['storby','europa','business','arkitektur','kultur','skreddersydd']::text[],
     array[]::date[],
     array['VG1']::text[],
     array['Markedsføring og innovasjon','Forretningsdrift','Kultur og samhandling']::text[],
     'Elevene skal kunne analysere hvordan arkitektur og kulturarv (Gaudí, Sagrada Família) bygges til kommersielle merkevarer, drøfte sammenhengen mellom byutvikling, turisme og næringsliv, og reflektere over hvordan Barcelona kombinerer historie, kultur og moderne forretningsdrift.',
     30, 32,
     'Twentytú Student Hostel — Poblenou',
     'Bærekraftig hostell i den moderne bydelen Poblenou, populært blant skoleklasser. Få minutters gange til metroen og enkel adgang til Sagrada Família, Gotiske kvarter og strendene.',
     array[
       'Sentralt i bærekraftige Poblenou',
       '4- til 6-mannsrom for elever',
       'Enkeltrom for lærere',
       'Alle rom med eget bad og gratis WiFi',
       'Frokost inkludert hver dag',
       'Felles studieområder, lounge og roof terrace'
     ]::text[])
  returning id
)
insert into pakketur_bilder (pakketur_id, bilde_url, bildetekst, sort_order)
select n.id, b.url, b.tekst, b.ord
from ny n
cross join (
  values
    ('/skoleturer/barcelona-business-vg1/sagrada-familia.png', 'Sagrada Família — Gaudís uferdige mesterverk', 1),
    ('/skoleturer/barcelona-business-vg1/park-guell.png', 'Park Güell — modernisme i bypark-format', 2),
    ('/skoleturer/barcelona-business-vg1/gotiske-kvarter.png', 'Gotiske kvarter — middelalderens Barcelona', 3),
    ('/skoleturer/barcelona-business-vg1/la-boqueria.png', 'La Boqueria — markedet som lokal handelsarena', 4),
    ('/skoleturer/barcelona-business-vg1/montjuic.png', 'Montjuïc — utsikt over byen', 5)
) as b(url, tekst, ord);

with ny as (select id from pakketurer where slug = 'barcelona-business-vg1')
insert into pakketur_dager (pakketur_id, dag_nummer, tittel, beskrivelse)
select n.id, d.dag, d.tittel, d.beskrivelse
from ny n
cross join (
  values
    (1, 'Reise og introduksjon til Barcelona',
     'Flyreise fra Bergen til Barcelona. Lokaltransport (metro/buss) til hostellet i Poblenou, innsjekk og velkomstmøte. Ettermiddag: kveldsvandring i nærområdet og felles introduksjon — Barcelona som europeisk storby, med fokus på geografi og urbanisering. Felles velkomstmiddag.'),
    (2, 'Gaudí, arkitektur og identitet',
     'Heldags fokus på Gaudís arkitektur og hvordan den er blitt katalansk identitet og global merkevare. Besøk i Sagrada Família med guidet omvisning, byvandring i Eixample-området med Casa Batlló og Casa Milà, og ettermiddag i Park Güell. Elevoppgave i grupper: hvordan kan arkitektur forme en bys merkevare og næringsliv?'),
    (3, 'Historie, demokrati og kultur',
     'Formiddag: guidet byvandring i Gotiske kvarter — middelaldernes Barcelona, katedralen og det historiske jødiske kvarteret. Lunsj og besøk på La Boqueria-markedet: mat, handel og lokal kultur som forretningsmodell. Kveld: kulturell begivenhet — flamenco-forestilling eller lokal konsert. Felles middag inkludert.'),
    (4, 'Kunst, samfunn og moderne Europa',
     'Formiddag: besøk på MACBA (Museum of Contemporary Art) med skoleformidler — kunst som kommentar til samfunn og politikk. Gruppeoppgave på stedet. Ettermiddag: Montjuïc med kabelbane, utsiktspunkt og refleksjonsoppgave om byutvikling og bærekraft. Tid på egen hånd om kvelden.'),
    (5, 'Oppsummering og hjemreise',
     'Frokost og kort elevpresentasjon i grupper: hva lærte vi om Barcelona som by og merkevare? Hva skiller Barcelona fra norske byer? Hva kan vi ta med oss om byutvikling, kultur og historie? Utsjekk og transport til flyplassen. Hjemreise til Bergen.')
) as d(dag, tittel, beskrivelse);
