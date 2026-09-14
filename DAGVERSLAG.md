# Dagplanning en dagreflecties portfolio

---

## Vrijdag 4 september

**Planning**
- 20:00 – 20:30 · Repository opzetten met `.gitignore`, `README.md`, `index.html` en `style.css`
- 21:00 – 23:00 · HTML-skelet bouwen: header met logo "SB.", navigatie, vijf lege secties en een footer

**Reflectie**
- **Wat ging goed:** de hele structuur van de pagina stond er in één avond: Home, Projecten, Expertise, Over mij en Contact.
- **Wat kan beter:** ik typte `<lu>` in plaats van `<ul>` en in de footer stond nog 2023. Mijn twee commits hadden ook allebei de naam "feat: HTML basis". Ik moet mijn code beter nalezen en duidelijkere commitberichten schrijven.
- **Morgen:** navigatie en home-sectie opmaken.

---

## Zaterdag 5 september (avond/nacht)

**Planning**
- 00:30 – 03:15 · `<lu>` repareren, de navigatie als lijst opmaken, een Dark Mode-knop plaatsen en de home-tekst met knop maken
- Eerste CSS: kleurvariabelen in `:root`, header, navigatie, home en footer

**Reflectie**
- **Wat ging goed:** ik heb met CSS-variabelen voor mijn kleuren gewerkt, zodat ik ze later makkelijk kan aanpassen.
- **Wat kan beter:** ik schreef `.secton` in plaats van `.section`, waardoor die stijl niet werkte. Ik werkte tot 3 uur 's nachts en zat in een call, dus ik was snel afgeleid.
- **Morgen:** header en home afmaken.

---

## Zondag 6 september

**Planning**
- 13:30 – 16:30 · Header en home afmaken
  - Kleuren kiezen: grijsgroen `#9aa39d` en mintgroen `#67b99a`
  - Een ronde themaknop en hover-effecten op het logo en de menulinks
  - Home in twee kolommen met een grote naam en profielfoto
  - De knop "Bekijk projecten" een echte link naar `#projects` maken
- 19:30 – 21:30 · Header en home verbeteren
  - Header vast bovenaan met een blur-effect (`position: sticky`, `backdrop-filter`)
  - Vaste marges van 125px vervangen door `max-width` en `margin-inline: auto`
  - Naam laten meeschalen met `clamp()`
  - Jaartal in de footer naar 2026
- 23:00 – 01:10 · Expertise-sectie bouwen met twee lijsten: "Wat ik nu kan" en "Wat ik ontwikkel"
- 01:10 – 02:15 · Over mij-sectie schrijven en begin maken aan Contact
- 02:15 – 02:45 · Contact afmaken met een mailknop en meer ruimte tussen de secties

**Reflectie**
- **Wat ging goed:** mijn meest productieve dag. Ik heb vier secties gebouwd en de layout flexibeler gemaakt met `max-width` en `clamp()`.
- **Wat kan beter:** ik zette eerst vaste marges van 125px neer en moest die later vervangen. Ik ging ook weer door tot bijna 3 uur 's nachts.
- **Morgen:** projectensectie opzetten.

---

## Maandag 7 september (avond/nacht)

**Planning**
- 22:00 – 01:00 · Projectensectie bouwen: vijf kaarten met afbeelding, nummer, label CONCEPT, beschrijving en technieken als tags

**Reflectie**
- **Wat ging goed:** de kaarten hebben een duidelijke opbouw en de tags zien er netjes uit.
- **Wat kan beter:** ik plakte "Gesture World" twee keer, en de afbeelding heette in mijn code `projextimg.jpg` in plaats van `projectimg.jpg`. Ik begon ook pas laat.
- **Morgen:** projecten afmaken en animaties toevoegen.

---

## Dinsdag 8 september (avond/nacht)

**Planning**
- 22:30 – 01:40 · Projecten afmaken en animaties toevoegen
  - Kaarten omzetten naar `<article>`
  - Kaarten als een waaier schuin over elkaar leggen, met `rotate` per kaart en een negatieve marge
  - Bij hover komt een kaart omhoog en verschijnt de beschrijving
  - De dubbele Gesture World vervangen door Code Typespeed en Webshop
  - Scrollanimatie maken met een `IntersectionObserver` in `script.js`

**Reflectie**
- **Wat ging goed:** mijn eerste JavaScript voor de site. Onderdelen schuiven nu in beeld tijdens het scrollen, en de waaier van kaarten ziet er goed uit.
- **Wat kan beter:** weer tot laat doorgewerkt terwijl ik in een call zat.
- **Morgen:** afbeeldingen toevoegen.

---

## Woensdag 9 september

**Planning**
- 15:30 – 16:40 · `saffier.jpg` en `projectimg.jpg` toevoegen en de foutieve bestandsnaam in de HTML repareren
- 23:00 – 00:35 · Opschonen: eigen logo (`logo.png`) in de header en als favicon, logo groter bij hover, overbodige header-CSS weghalen
- 00:35 – 00:40 · Plan in mijn README zetten: doel, doelgroep, indeling, vormgeving, techniek en testaanpak

**Reflectie**
- **Wat ging goed:** mijn site heeft nu een eigen logo, en in de README staat duidelijk wat ik wil bouwen en hoe ik ga testen.
- **Wat kan beter:** ik schreef mijn plan pas op nadat ik al het meeste had gebouwd. Dat had ik vóór het bouwen moeten doen.
- **Morgen:** contactgedeelte uitbreiden.

---

## Donderdag 10 september
Niet aan mijn portfolio gewerkt.
- **Reflectie:** ik had geen tijd ingepland. Een kort blok had me al verder geholpen.

---

## Vrijdag 11 september

**Planning**
- 12:00 – 13:45 · Feedback van Ties noteren en verwerken, contact uitbreiden
  - Feedback in de README gezet
  - Over mij bovenaan de pagina en in het menu gezet
  - "Leerdoelen, nog geen beheerste vaardigheden" weggehaald en de kop veranderd in "Wat ik wil leren"
  - Knop "Bekijk projecten" uitgeschakeld (link naar `#`)
  - Contact uitgebreid met profielfoto, naam, een groen knipperend "available"-label en knoppen voor LinkedIn en GitHub met Font Awesome-iconen
  - Soepel scrollen naar secties (`scroll-behavior: smooth`)

**Reflectie**
- **Wat ging goed:** ik heb de feedback van Ties direct verwerkt, en de contactsectie ziet er veel persoonlijker uit.
- **Wat kan beter:** de LinkedIn-knop wees nog naar `#`. Mijn profielfoto `pfp.JPG` is 6 MB, wat veel te groot is voor een klein rondje van 80px.
- **Morgen:** Music-sectie maken.

---

## Zaterdag 12 september
Niet aan mijn portfolio gewerkt.

---

## Zondag 13 september

**Planning**
- 20:00 – 22:10 · Music-sectie maken
  - Apple Music-afspeellijst en een draaiende vinylplaat (`@keyframes vinyl`)
  - Afspeelknoppen als decoratie
  - Music toegevoegd aan het menu
  - Echte LinkedIn-link ingevuld en kleuren gegeven aan de GitHub- en LinkedIn-knoppen
  - Knoppen worden kleiner bij hover
  - "Software development" uit mijn leerdoelen gehaald

**Reflectie**
- **Wat ging goed:** de vinylanimatie werkt en past bij mijn stijl, en de LinkedIn-link klopt nu.
- **Wat kan beter:** er kwam per ongeluk een `.DS_Store` in mijn repo, en ik uploadde dezelfde afbeelding twee keer onder verschillende namen. In de sectie gebruikte ik een `<h1>`, terwijl er maar één `<h1>` op de pagina hoort.
- **Morgen:** laatste feedback verwerken en de site afmaken.

---

## Maandag 14 september

**Planning**
- 18:30 – 20:20 · Feedback verwerken en de site afmaken
  - Hele website vertaald naar het Engels (`lang="en"`)
  - "Over mij" hernoemd naar About, ook in de id's en classes
  - About uitgebreid met mijn verhaal: in 2021 zag ik mijn broer programmeren en wilde ik zelf een Discord-bot bouwen
  - Losse `<h1>`'s omgezet naar `<h2>`
  - Scrollanimatie toegevoegd aan Music en Contact
  - Nieuwe coming-soon-afbeelding voor de projecten en een nieuwe vinylafbeelding, dubbele afbeeldingen verwijderd
  - Digitaal ontwerp toegevoegd (`Portfolio VB.png`)
  - Hover-effect op de muziekknoppen
  - Ongebruikte CSS-variabele weggehaald
  - In de README de verwerkte feedback gemarkeerd als gedaan
- 20:20 – 20:55 · Gridachtergrond over de hele site en dikkere lijnen tussen de secties
- 21:00 – 21:10 · Testverslag toegevoegd en `.DS_Store` verwijderd
- 21:40 – 22:05 · Testverslag herschreven in mijn eigen woorden

**Reflectie**
- **Wat ging goed:** alle feedback van Ties is verwerkt, en mijn About vertelt nu echt waarom ik ben begonnen. De koppen zijn logischer opgebouwd, en door het testen weet ik wat nog niet werkt.
- **Wat kan beter:** ik heb pas de dag voor de review getest. Daardoor vond ik de problemen op mobiel te laat. Volgende keer test ik tussendoor.
- **Morgen:** layout op mobiel repareren, papieren schets maken en de review voorbereiden.
