-- Tilbud til Metis videregående skole (Business vg1).
-- Legger til som en egen pakketur. Trygt å kjøre flere ganger.

delete from pakketurer where slug = 'kobenhavn-business-vg1';

with ny as (
  insert into pakketurer
    (slug, tittel, destinasjon, land, kort_beskrivelse, beskrivelse,
     pris_nok, varighet_dager, hovedbilde_url, tags, avreisedatoer,
     klassetrinn, fag, laeringsmaal, gruppe_min, gruppe_max,
     hotel_navn, hotel_beskrivelse, hotel_features)
  values
    ('kobenhavn-business-vg1',
     'København for Business vg1 — innovasjon, design og nordisk forretningskultur',
     'København', 'Danmark',
     'Fem dager der LEGO, Carlsberg og Pandora er klasserommet. Skreddersydd for Business vg1.',
     'Et komplett program der hver dag har et tydelig faglig anker i programfagene Markedsføring og innovasjon, Forretningsdrift og Kultur og samhandling. Vi besøker tre av Danmarks sterkeste merkevarer (LEGO House, Carlsberg, Pandora), kombinerer det med kulturelle høydepunkter (Tivoli, Christiania, Statens Museum for Kunst), og holder kostnadene nede via direktefly fra Bergen, sentralt hostell-hotell og smarte gruppeavtaler. Hele opplegget følges av en lokal koordinator på bakken — og det er rom for at klassen får kose seg sammen mellom programmet.',
     8290, 5,
     '/skoleturer/kobenhavn-business-vg1/nyhavn.png',
     array['storby','europa','business','innovasjon','skreddersydd']::text[],
     array[]::date[],
     array['VG1']::text[],
     array['Markedsføring og innovasjon','Forretningsdrift','Kultur og samhandling']::text[],
     'Elevene skal kunne analysere kjente nordiske merkevarer og deres markedsføringsstrategier, drøfte forretningsmodeller bak globale danske selskaper, og reflektere over hvordan kultur former forretningsdrift i Norden.',
     30, 32,
     'CABINN City København',
     'Sentralt budget-hotell rett ved Tivoli og Hovedbanegården. Velkjent kjede blant skoleklasser — rene og funksjonelle rom, enkel adgang til kollektivtransport, og veldig korte avstander til alle høydepunktene i programmet.',
     array[
       'Sentralt beliggende — 5 min til Tivoli og hovedstasjonen',
       '5-mannsrom for elever',
       'Enkeltrom for lærere',
       'Alle rom med eget bad og gratis WiFi',
       'Frokost inkludert hver dag',
       'Resepsjon 24/7 og gratis bagasjeoppbevaring'
     ]::text[])
  returning id
)
insert into pakketur_bilder (pakketur_id, bilde_url, bildetekst, sort_order)
select n.id, b.url, b.tekst, b.ord
from ny n
cross join (
  values
    ('/skoleturer/kobenhavn-business-vg1/nyhavn.png', 'Nyhavn — København sentrum', 1),
    ('/skoleturer/kobenhavn-business-vg1/lego-house.png', 'LEGO House interiør, Billund', 2),
    ('/skoleturer/kobenhavn-business-vg1/carlsberg.png', 'Carlsberg bryggeri-omvisning', 3),
    ('/skoleturer/kobenhavn-business-vg1/tivoli.png', 'Tivoli ved kveld', 4),
    ('/skoleturer/kobenhavn-business-vg1/christiania.png', 'Christiania', 5)
) as b(url, tekst, ord);

with ny as (select id from pakketurer where slug = 'kobenhavn-business-vg1')
insert into pakketur_dager (pakketur_id, dag_nummer, tittel, beskrivelse)
select n.id, d.dag, d.tittel, d.beskrivelse
from ny n
cross join (
  values
    (1, 'Ankomst og København som merkevareby',
     'Direktefly Bergen til København (avg. 10:00, ank. 11:30). Innsjekk på CABINN City — sentralt hotell med 5-mannsrom for elever og enkeltrom for lærere. Ettermiddag: guidet vandring "København som merkevareby" fra Strøget til Nyhavn med fokus på hva som gjør en by til en sterk merkevare. Felles middag i Kødbyen — gentrifisering og matkultur som forretningskonsept.'),
    (2, 'Innovasjon og merkevarebygging: LEGO',
     'Heldagsutflukt med chartret buss til Billund. På LEGO House: workshop om innovasjonsprosesser og omvisning med fokus på hvordan LEGO ble verdens sterkeste leketøysmerke. Pensumrelevant for Markedsføring og innovasjon. Retur til København på kvelden, egen middag.'),
    (3, 'Klassisk dansk markedsføring: Carlsberg og Pandora',
     'Formiddag: Carlsberg Brewery — verdens første bryggerimuseum, fokus på branding og produkthistorikk ("Probably the best beer in the world"). Lunsj på egenhånd. Ettermiddag: bedriftsbesøk hos Pandora — smykke-retail, fra Danmark til verdens største charm-merke. Felles gruppemiddag på kvelden med faglig oppsummering.'),
    (4, 'Kultur og kontrast',
     'Formiddag: Statens Museum for Kunst — kunstens rolle i dansk identitet og nasjonsbygging. Lunsj på egenhånd. Ettermiddag: guidet tur i Christiania med fokus på alternativ samfunnsmodell og samspill med dansk politikk. Kveld: Tivoli inkludert forestilling — verdens nest eldste fornøyelsespark, et levende casestudie i markedsføring siden 1843.'),
    (5, 'Refleksjon og hjemreise',
     'Frokost og felles oppsummering på hotellet. Kort vandring forbi Den lille havfrue og Amalienborg. Transport til Kastrup. Hjemreise på ettermiddagen.')
) as d(dag, tittel, beskrivelse);
