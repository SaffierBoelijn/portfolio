# Testverslag profielpagina

**Naam:** Saffier Boelijn  
**Testdatum:** 14 september 2026  
**Geteste versie:** commit `7bffe56`  
**Website:** [saffierb.nl](https://saffierb.nl/)  
**Browser:** Chromium  
**Schermformaten:** desktop (1440 × 1000), tablet (768 × 1024) en mobiel (390 × 844)

## Doel

Ik heb mijn profielpagina getest om te controleren of de inhoud zichtbaar is, de navigatie en contactlinks kloppen en de pagina op verschillende schermformaten werkt. Ook heb ik de bediening met het toetsenbord, de animaties en de knoppen gecontroleerd.

## Wat goed werkt

- De website opent met HTTP-status 200.
- Op desktop past de pagina binnen het scherm zonder horizontale overflow.
- Alle afbeeldingen laden op desktop, tablet en mobiel.
- Het raster is zichtbaar als achtergrond over de hele website.
- De pagina bevat de secties Home, About, Projects, Expertise, Music en Contact.
- De vijf navigatielinks gaan naar de juiste sectie.
- GitHub, LinkedIn en de e-maillink verwijzen naar de juiste adressen.
- De navigatie, themaknop, projectknop, Apple Music-iframe en contactlinks zijn met de Tab-toets bereikbaar.
- De scrollanimaties worden uitgevoerd wanneer de onderdelen in beeld komen.
- De vinylanimatie en de animatie van de beschikbaarheidsindicator zijn in de CSS aanwezig en actief.
- Er trad geen JavaScript-paginafout op tijdens de test.

## Gevonden problemen

### 1. Tablet en mobiel zijn breder dan het scherm

Op een tablet van 768 pixels breed is de pagina 997 pixels breed. Op een mobiel van 390 pixels breed is de pagina 808 pixels breed. Daardoor valt inhoud buiten het scherm en moet de gebruiker horizontaal scrollen.

**Status:** nog oplossen.

### 2. De themaknop verandert het thema niet

De knop met het halve-cirkelsymbool is bereikbaar en aanklikbaar, maar de achtergrondkleur verandert niet. In `script.js` staat alleen code voor de scrollanimaties.

**Status:** nog oplossen of de knop verwijderen totdat deze werkt.

### 3. De knop “View projects” gaat niet naar Projects

De knop gebruikt `href="#"`. Daardoor gaat hij naar de bovenkant van de pagina in plaats van naar de projectsectie.

**Status:** nog oplossen door de link naar `#projects` te laten verwijzen.

### 4. De muziekbediening werkt niet

De vorige-, afspeel- en volgende-iconen zijn gewone `<i>`-elementen. Ze zijn niet met de Tab-toets bereikbaar en hebben geen JavaScriptfunctionaliteit. De Apple Music-embed kan bovendien niet met de muis worden bediend, omdat `.apple-music` de instelling `pointer-events: none` heeft.

**Status:** nog oplossen of duidelijk als decoratie tonen.

### 5. Live beveiliging blokkeert delen van Music

Op de live website blokkeert de Content Security Policy de externe Font Awesome-stylesheet en de Apple Music-embed. Daardoor laden de muziekiconen en de afspeellijst niet zoals bedoeld. De inline stijl van de embed wordt eveneens geblokkeerd.

**Status:** nog oplossen in de website of serverinstellingen.

### 6. Toegankelijke namen en zichtbare focus ontbreken deels

De logolink heeft geen tekst of `aria-label`. De themaknop heeft ook geen `aria-label`. In de CSS staat geen eigen `:focus-visible`-stijl, waardoor toetsenbordgebruikers niet overal een duidelijke focusmarkering krijgen.

**Status:** nog verbeteren.

## Conclusie

De inhoud, afbeeldingen, achtergrond, sectienavigatie, contactlinks en scrollanimaties werken op de geteste versie. De desktopindeling past goed. De belangrijkste verbeterpunten zijn de horizontale overflow op tablet en mobiel en de onderdelen die eruitzien als bediening maar nog niet werken. Na deze aanpassingen test ik dezelfde onderdelen opnieuw en voeg ik de nieuwe resultaten aan dit verslag toe.
