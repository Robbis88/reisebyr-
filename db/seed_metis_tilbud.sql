-- Tilbud til Metis videregående skole (Business vg1).
-- Legger til som en egen pakketur. Trygt å kjøre flere ganger.

delete from pakketurer where slug = 'kobenhavn-business-vg1';

with ny as (
  insert into pakketurer
    (slug, tittel, destinasjon, land, kort_beskrivelse, beskrivelse,
     pris_nok, varighet_dager, hovedbilde_url, tags, avreisedatoer,
     klassetrinn, fag, laeringsmaal, gruppe_min, gruppe_max)
  values
    ('kobenhavn-business-vg1',
     'København for Business vg1 — innovasjon, design og nordisk forretningskultur',
     'København', 'Danmark',
     'Fem dager der LEGO, Carlsberg og Pandora er klasserommet. Skreddersydd for Business vg1.',
     'Et komplett program der hver dag har et tydelig faglig anker i programfagene Markedsføring og innovasjon, Forretningsdrift og Kultur og samhandling. Vi besøker tre av Danmarks sterkeste merkevarer (LEGO House, Carlsberg, Pandora), kombinerer det med kulturelle høydepunkter (Tivoli, Christiania, Statens Museum for Kunst), og holder kostnadene nede via direktefly fra Bergen, sentralt hostell-hotell og smarte gruppeavtaler. Lærerne har enkeltrom; elevene bor på 5-mannsrom på CABINN City. Hele opplegget følges av en lokal koordinator på bakken.',
     7933, 5,
     'https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=1200',
     array['storby','europa','business','innovasjon','skreddersydd']::text[],
     array[]::date[],
     array['VG1']::text[],
     array['Markedsføring og innovasjon','Forretningsdrift','Kultur og samhandling']::text[],
     'Elevene skal kunne analysere kjente nordiske merkevarer og deres markedsføringsstrategier, drøfte forretningsmodeller bak globale danske selskaper, og reflektere over hvordan kultur former forretningsdrift i Norden.',
     30, 32)
  returning id
)
insert into pakketur_bilder (pakketur_id, bilde_url, bildetekst, sort_order)
select n.id, b.url, b.tekst, b.ord
from ny n
cross join (
  values
    ('https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=1600', 'Nyhavn — København sentrum', 1),
    ('https://images.unsplash.com/photo-1559683882-f4ea3a90e8b9?w=1600', 'LEGO House i Billund', 2),
    ('https://images.unsplash.com/photo-1543340904-0b1d843bccda?w=1600', 'Tivoli om kvelden', 3),
    ('https://images.unsplash.com/photo-1568797629192-789acf8e4df3?w=1600', 'Strøget shoppinggate', 4),
    ('https://images.unsplash.com/photo-1599321955726-b1de4d2db20a?w=1600', 'Christiania', 5)
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
