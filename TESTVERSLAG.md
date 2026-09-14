Nieuwe TESTVERSLAG.md

Let op: op GitHub staat nu een nieuwere commit (63b69cd, "Delete .DS_Store"). Pas het bestand daarom aan via GitHub of doe eerst git pull op je Mac.

# Testverslag profielpagina

**Naam:** Saffier Boelijn  
**Datum:** 14 september 2026  
**Versie:** commit `7bffe56`  
**Website:** [saffierb.nl](https://saffierb.nl/)  

## Wat heb ik getest?

Ik heb mijn website getest op een laptop, een tablet en een telefoon. Ik keek of alles goed zichtbaar is, of de links werken en of ik de pagina ook met alleen het toetsenbord (Tab en Enter) kan gebruiken.

## Wat werkt goed

- Op de laptop past alles netjes op het scherm.
- Alle afbeeldingen laden.
- De gridachtergrond is op de hele website te zien.
- De menulinks gaan naar de goede sectie.
- GitHub, LinkedIn en mijn e-mail gaan naar de goede plek.
- Met Tab kom ik bij het menu, de knoppen en de contactlinks.
- De scrollanimaties, de draaiende vinylplaat en het knipperende bolletje werken.

## Wat werkt nog niet

### 1. Op tablet en telefoon is de pagina te breed
Op een tablet en een telefoon moet je naar opzij scrollen, omdat de pagina breder is dan het scherm.
**Wat ik ga doen:** de layout aanpassen zodat alles binnen het scherm past.

### 2. De themaknop doet nog niks
Als ik op de knop klik, verandert het thema niet.
**Wat ik ga doen:** dit pak ik later op.

### 3. "View projects" gaat niet naar Projects
De knop brengt je naar de bovenkant van de pagina in plaats van naar mijn projecten.
**Wat ik ga doen:** dit pak ik later op.

### 4. Apple Music en de icoontjes laden niet op de live site
Op saffierb.nl blokkeren de beveiligingsinstellingen van de server de Apple Music-speler en de icoontjes van Font Awesome. Lokaal werkt het wel.
**Wat ik ga doen:** de beveiligingsinstellingen aanpassen en de inline style van de iframe naar mijn CSS verplaatsen.

### 5. Toetsenbordgebruik kan beter
Mijn logo en de themaknop hebben geen naam voor schermlezers. Met Tab zie je ook niet altijd goed waar je bent.
**Wat ik ga doen:** `aria-label`s en een duidelijke focusstijl toevoegen.

## Conclusie

Op de laptop werkt de basis goed: de inhoud, de links en de animaties doen het. De belangrijkste verbeterpunten zijn de layout op tablet en telefoon en de muziek. Als ik die heb aangepast, test ik alles opnieuw en zet ik de nieuwe resultaten in dit verslag.
