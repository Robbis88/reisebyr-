-- Seed-data: 6 skoletur-destinasjoner for VGS, NextStopTravel.
-- Trygt å kjøre flere ganger: sletter eksisterende seed-rader først.

-- Fjern gamle generiske pakketurer fra forrige seed (om de finnes).
delete from pakketurer
where slug in ('roma-helg','lofoten-eventyr','safari-tanzania');

-- Fjern gjeldende seed for å kunne re-kjøre.
delete from pakketurer
where slug in ('berlin-historie','krakow-holocaust','roma-antikken',
               'praha-kunst','london-engelsk','paris-kunst');

with nye as (
  insert into pakketurer
    (slug, tittel, destinasjon, land, kort_beskrivelse, beskrivelse,
     pris_nok, varighet_dager, hovedbilde_url, tags, avreisedatoer,
     klassetrinn, fag, laeringsmaal, gruppe_min, gruppe_max)
  values
    ('berlin-historie',
     'Berlin — der det 20. århundret møtes',
     'Berlin', 'Tyskland',
     'Fra Brandenburger Tor til Stasi-museet: 4 dager med 2. verdenskrig, kald krig og delt by.',
     'Få elevene tett på de største hendelsene i nyere europeisk historie. Vi besøker Holocaust-monumentet, Topographie des Terrors, deler av Berlinmuren, Stasi-museet og DDR-museet. Programmet er bygget for å koble læreplanen i Historie og Samfunnsfag til konkrete steder elevene husker resten av livet.',
     11900, 4,
     'https://images.unsplash.com/photo-1587330979470-3016b6702d89?w=1200',
     array['storby','europa','historie']::text[],
     array['2026-09-15','2026-10-13','2027-03-09']::date[],
     array['VGS']::text[],
     array['Historie','Samfunnsfag','Tysk']::text[],
     'Elevene skal kunne forklare sentrale hendelser i Tysklands 1900-tallshistorie, vurdere kilder kritisk og reflektere over totalitære regimers virkemidler.',
     20, 45),

    ('krakow-holocaust',
     'Krakow og Auschwitz — minne og ansvar',
     'Krakow', 'Polen',
     'Fire dager med fokus på Holocaust, etikk og menneskerettigheter.',
     'En tur som krever modenhet og forberedelse — og som gir tilsvarende dyp læring. Vi besøker Auschwitz-Birkenau med sertifisert guide, Schindlers fabrikk-museet, det jødiske kvarteret Kazimierz, og setter av god tid til refleksjon. Faglig formøte og etterarbeid på skolen anbefales sterkt.',
     10500, 4,
     'https://images.unsplash.com/photo-1606992894456-799462f80a7a?w=1200',
     array['storby','europa','historie','etikk']::text[],
     array['2026-09-22','2027-02-15','2027-04-12']::date[],
     array['VGS']::text[],
     array['Historie','Religion og etikk','Samfunnsfag']::text[],
     'Elevene skal kunne gjøre rede for Holocaust som historisk hendelse, drøfte etiske dilemmaer knyttet til folkemord, og reflektere over demokratiets sårbarhet.',
     20, 40),

    ('roma-antikken',
     'Roma — antikkens hovedstad',
     'Roma', 'Italia',
     'Fem dager der Colosseum, Forum Romanum og Vatikanet er klasserommet.',
     'En klassisk dannelsesreise med vekt på antikken, kristendommens utvikling og renessansens kunst. Vi kombinerer guidede omvisninger på de største stedene (Colosseum, Forum, Pantheon, Vatikanmuseene) med fagrelevante verksteder og tid på egen hånd. Egnet både for historie- og kunst-/religionsklasser.',
     13900, 5,
     'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=1200',
     array['storby','europa','historie','kultur']::text[],
     array['2026-10-06','2027-03-23','2027-04-20']::date[],
     array['VGS']::text[],
     array['Historie','Religion og etikk','Kunst og håndverk','Latin']::text[],
     'Elevene skal kunne plassere romersk historie i en større sammenheng, analysere kunst og arkitektur fra antikken og renessansen, og forstå kristendommens utvikling i Europa.',
     20, 45),

    ('praha-kunst',
     'Praha — arkitektur og kald krig',
     'Praha', 'Tsjekkia',
     'Fire dager med gotisk og barokk arkitektur, Kafka og fløyelsrevolusjonen.',
     'Praha er et utstillingsvindu for europeisk arkitektur og en levende lærebok i kald-krigshistorien. Vi går guidet runde i Gamlebyen og det jødiske kvarteret, besøker Kommunismens museum, og setter av en dag til Theresienstadt. Et godt valg for klasser med interesse for både kunst, samfunnsfag og litteratur.',
     9900, 4,
     'https://images.unsplash.com/photo-1541849546-216549ae216d?w=1200',
     array['storby','europa','kultur','historie']::text[],
     array['2026-10-20','2027-03-30']::date[],
     array['VGS']::text[],
     array['Historie','Samfunnsfag','Kunst og håndverk']::text[],
     'Elevene skal kunne gjenkjenne sentrale arkitektoniske stilarter, forklare overgangen fra kommunisme til demokrati i Sentral-Europa, og analysere kulturuttrykk i kontekst.',
     20, 40),

    ('london-engelsk',
     'London — språk, makt og kultur',
     'London', 'Storbritannia',
     'Fem dager med engelsk i praksis: parlament, museer og West End.',
     'En tur skreddersydd for engelskklasser og samfunnsfag. Programmet inkluderer omvisning i Parlamentet, British Museum, Tate Modern og en West End-forestilling — alt på engelsk, slik at elevene øver språk i autentiske situasjoner. Ettermiddager på egen hånd i mindre grupper med oppgaver knyttet til pensum.',
     14500, 5,
     'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200',
     array['storby','europa','språk','kultur']::text[],
     array['2026-11-03','2027-02-23','2027-04-13']::date[],
     array['VGS']::text[],
     array['Engelsk','Samfunnsfag','Historie']::text[],
     'Elevene skal kunne kommunisere muntlig og skriftlig på engelsk i autentiske situasjoner, gjøre rede for britiske politiske institusjoner, og analysere kunst- og kulturuttrykk.',
     20, 45),

    ('paris-kunst',
     'Paris — kunst og opplysningstid',
     'Paris', 'Frankrike',
     'Fem dager med Louvre, Versailles og fransk historie fra revolusjonen og fram.',
     'Paris er et naturlig valg for klasser med fokus på kunst, fransk og europeisk idéhistorie. Vi besøker Louvre, Musée d''Orsay, Versailles og bruker tid i Latinerkvarteret. Programmet inkluderer en guidet tur knyttet til den franske revolusjonen, og fransk-elever får ekstra muligheter for språkpraksis.',
     14900, 5,
     'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200',
     array['storby','europa','kunst','språk']::text[],
     array['2026-10-27','2027-03-16','2027-04-27']::date[],
     array['VGS']::text[],
     array['Fransk','Kunst og håndverk','Historie']::text[],
     'Elevene skal kunne analysere sentrale kunstverk i en historisk sammenheng, forklare den franske revolusjonens betydning, og kommunisere på fransk i enkle situasjoner.',
     20, 45)
  returning id, slug
)
insert into pakketur_bilder (pakketur_id, bilde_url, bildetekst, sort_order)
select n.id, b.url, b.tekst, b.ord
from nye n
join lateral (
  values
    ('berlin-historie', 'https://images.unsplash.com/photo-1560969184-10fe8719e047?w=1600', 'Brandenburger Tor', 1),
    ('berlin-historie', 'https://images.unsplash.com/photo-1599946347371-68eb71b16afc?w=1600', 'Holocaust-monumentet', 2),
    ('berlin-historie', 'https://images.unsplash.com/photo-1551867633-194f125bddfa?w=1600', 'Berlinmuren', 3),

    ('krakow-holocaust', 'https://images.unsplash.com/photo-1606992894456-799462f80a7a?w=1600', 'Auschwitz-Birkenau', 1),
    ('krakow-holocaust', 'https://images.unsplash.com/photo-1607427293702-036933bbf746?w=1600', 'Krakows gamleby', 2),
    ('krakow-holocaust', 'https://images.unsplash.com/photo-1518472867194-bff2c8b75083?w=1600', 'Wawel-borgen', 3),

    ('roma-antikken', 'https://images.unsplash.com/photo-1531572753322-ad063cecc140?w=1600', 'Colosseum', 1),
    ('roma-antikken', 'https://images.unsplash.com/photo-1525874684015-58379d421a52?w=1600', 'Forum Romanum', 2),
    ('roma-antikken', 'https://images.unsplash.com/photo-1525874684015-58379d421a52?w=1600', 'Vatikanet', 3),

    ('praha-kunst', 'https://images.unsplash.com/photo-1592906209472-a36b1f3782ef?w=1600', 'Karlsbroen', 1),
    ('praha-kunst', 'https://images.unsplash.com/photo-1518306727298-4c17e1bf6e69?w=1600', 'Gamlebyen', 2),
    ('praha-kunst', 'https://images.unsplash.com/photo-1568797629192-789acf8e4df3?w=1600', 'Praha slott', 3),

    ('london-engelsk', 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1600', 'Big Ben og Parlamentet', 1),
    ('london-engelsk', 'https://images.unsplash.com/photo-1486299267070-83823f5448dd?w=1600', 'Tower Bridge', 2),
    ('london-engelsk', 'https://images.unsplash.com/photo-1520986606214-8b456906c813?w=1600', 'British Museum', 3),

    ('paris-kunst', 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1600', 'Eiffeltårnet', 1),
    ('paris-kunst', 'https://images.unsplash.com/photo-1431274172761-fca41d930114?w=1600', 'Louvre', 2),
    ('paris-kunst', 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=1600', 'Seinen om kvelden', 3)
) as b(slug, url, tekst, ord) on b.slug = n.slug;

with nye as (
  select id, slug from pakketurer
  where slug in ('berlin-historie','krakow-holocaust','roma-antikken',
                 'praha-kunst','london-engelsk','paris-kunst')
)
insert into pakketur_dager (pakketur_id, dag_nummer, tittel, beskrivelse)
select n.id, d.dag, d.tittel, d.beskrivelse
from nye n
join lateral (
  values
    ('berlin-historie', 1, 'Ankomst og første møte med byen', 'Direktefly fra Oslo. Innsjekk på sentralt hotell, kort orienteringsrunde til fots gjennom Mitte. Felles kveldsmåltid.'),
    ('berlin-historie', 2, '2. verdenskrig og Holocaust', 'Guidet tematur: Brandenburger Tor, Holocaust-monumentet, Topographie des Terrors og restene av Reichstag-sokkelen. Refleksjonsoppgave på kvelden.'),
    ('berlin-historie', 3, 'Den delte byen', 'Berlinmuren ved East Side Gallery, Checkpoint Charlie, Stasi-museet i Lichtenberg. Ettermiddag i mindre grupper med pensumoppgaver.'),
    ('berlin-historie', 4, 'DDR-museet og hjemreise', 'Besøk på DDR-museet og avsluttende oppsummering. Hjemreise på ettermiddagen.'),

    ('krakow-holocaust', 1, 'Ankomst Krakow', 'Fly via København. Innsjekk og guidet kveldsvandring i Gamlebyen. Faglig forberedelse til neste dag.'),
    ('krakow-holocaust', 2, 'Auschwitz-Birkenau', 'Heldagsbesøk med sertifisert guide. Buss tur-retur. Tid avsatt til refleksjon på kvelden.'),
    ('krakow-holocaust', 3, 'Det jødiske Krakow', 'Schindlers fabrikk-museum, det jødiske kvarteret Kazimierz og synagogeomvisning. Klassesamtale på kvelden.'),
    ('krakow-holocaust', 4, 'Wawel og hjemreise', 'Kort besøk på Wawel-borgen før hjemreise.'),

    ('roma-antikken', 1, 'Ankomst og første smakebit', 'Fly fra Oslo. Innsjekk og kveldsvandring forbi Spansketrappen, Trevifontenen og Pantheon.'),
    ('roma-antikken', 2, 'Antikkens Roma', 'Guidet heldagstur: Colosseum, Forum Romanum og Palatinerhøyden. Tematisk oppgave i mindre grupper på kvelden.'),
    ('roma-antikken', 3, 'Vatikanet', 'Tidlig omvisning i Vatikanmuseene og Peterskirken. Ettermiddag på egenhånd i Trastevere.'),
    ('roma-antikken', 4, 'Renessanse og barokk', 'Borghese-galleriet og Piazza Navona. Ettermiddag fri.'),
    ('roma-antikken', 5, 'Hjemreise', 'Felles transport til Fiumicino. Hjemreise.'),

    ('praha-kunst', 1, 'Ankomst Praha', 'Fly fra Oslo. Innsjekk og guidet kveldsvandring over Karlsbroen.'),
    ('praha-kunst', 2, 'Gamlebyen og det jødiske kvarteret', 'Guidet tematur i Stare Mesto og Josefov. Astronomiske ur-klokken. Ettermiddag fri.'),
    ('praha-kunst', 3, 'Theresienstadt', 'Heldagstur til Theresienstadt med guide. Faglig oppsummering på kvelden.'),
    ('praha-kunst', 4, 'Slottet og hjemreise', 'Besøk på Praha slott. Hjemreise på ettermiddagen.'),

    ('london-engelsk', 1, 'Ankomst London', 'Fly fra Oslo. Innsjekk og kveldsvandring fra Westminster til Trafalgar Square.'),
    ('london-engelsk', 2, 'Politikk og historie', 'Omvisning i Parlamentet (på engelsk), Westminster Abbey og Churchill War Rooms.'),
    ('london-engelsk', 3, 'Museer og kunst', 'Heldags egenarbeid i grupper: British Museum og Tate Modern. Oppgaver knyttet til pensum.'),
    ('london-engelsk', 4, 'Teater og language in use', 'Dagstur til Greenwich. West End-forestilling på kvelden.'),
    ('london-engelsk', 5, 'Hjemreise', 'Kort tur til Camden Market før hjemreise.'),

    ('paris-kunst', 1, 'Ankomst Paris', 'Fly fra Oslo. Innsjekk og kveldsvandring fra Notre-Dame langs Seinen.'),
    ('paris-kunst', 2, 'Louvre og opplysningstiden', 'Guidet omvisning i Louvre med fokus på pensumrelevante verk. Ettermiddag i Latinerkvarteret.'),
    ('paris-kunst', 3, 'Versailles', 'Heldagsutflukt til Versailles med guide. Tema: enevelde og revolusjon.'),
    ('paris-kunst', 4, 'Impresjonisme og moderne kunst', 'Musée d''Orsay og Centre Pompidou. Ettermiddag fri.'),
    ('paris-kunst', 5, 'Hjemreise', 'Felles transport til Charles de Gaulle. Hjemreise.')
) as d(slug, dag, tittel, beskrivelse) on d.slug = n.slug;
