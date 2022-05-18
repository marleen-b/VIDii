# Procesverslag
Markdown is een simpele manier om HTML te schrijven.  
Markdown cheat cheet: [Hulp bij het schrijven van Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

## Jij

### Ontwerper:
Marleen Buchner

#### Mijn startniveau:
Mijn startniveau is: blauw

# Je plan

<details open>

### De eerste versie/schets:
  Mario Kart is een klassieker die bijna iedereen wel kent. En welke course komt in elke Mario Kart game terug? Jazeker, Rainbow Road. Wat ook één van mijn favoriete Mario Kart baan is.
  Voor sommigen spelers een baan vol trauma's, omdat je regelmatig van de baan vliegt en voor andere weer niet. 
  Ik heb er dus voor gekozen om een tijdlijn te maken van Rainbow Road. 

  #### Schets van eerste concept:
    Het scherm is verdeeld in de kleuren van de regenboog. Elke rij heeft een eigen kleur en Mario Kart versie. 
    Als je op één van de rijen klikt, klapt deze open en verschijnt er meer informatie.
    Zoals welke nieuwe karakters verschenen in deze Mario Kart serie of welke nieuwe items zijn toegevoegd aan de game. En natuurlijk een video waarin de baan te zien is.
   <img src="readme-images/schetsconcept1.png" width="1000px" alt="eerste concept/schets">


  #### Schets van tweede concept: 
   Het idee is om Mario te laten 'racen' door de versies van Rainbow Road heen. Bij elke mushroom veranderd Mario naar een andere game versie van Mario Kart. Ook zie je de achtergrond veranderen naar de Rainbow Road course uit dezelfde game. De mushroom is eigenlijk een soort van Easter egg verwijzing naar de Super Mario Bros game. Als Mario in het spel een mushroom pakte wordt hij groter. Het idee is dan op een leuke manier de upgrade te laten zien van Mario in Mario Kart en natuurlijk Rainbow Road zelf. Het lijkt er op dat Mario de finish gaat bereiken, maar dan vliegt er een Blue shell het scherm binnen. Waarna de gebruiker weer terug wordt gegooid naar het begin van de tijdlijn.  Dit is natuurlijk een verwijzing naar de bekende Blue shell uit de Mario Kart games. De Blue shell staat er om bekend om de race van de speler die op de eerste plaats rijdt te dwarsbomen. Met soms als resultaat dat de hele ranking wordt omgegooid. 
  <img src="readme-images/schetsconcept2.png" width="1000px" alt="tweede concept/schets"> 
 

  #### Schetsen van losse ideeën die te combineren zijn met concept 2:
  1. startscherm, waarbij je de bekende countdown ziet voordat de race begint. Of in dit geval de tijdlijn.
  2. De startopstelling voor de race, waarbij je 8 verschillende versies ziet van Mario uit de Mario Kart series. Als je op een Mario klikt veranderd de achtergrond naar hoe Rainbow Road eruit ziet in die game.
  3. Als de auto langs een mushroom rijdt, evolueert die naar volgende gelanceerde Mario Kart serie. Soort van paasei naar de klassieke Mario games.
  4. Zodra er op een knop wordt geklikt verschijnt er meer informatie.
  5. Een slider met verschillende consoles voor de Mario Kart games. De slider is te besturen met de muis of pijltjestoetsen. Na een klik naar rechts of links draaien de consoles als een echt stuur. Als op een console wordt geklikt veranderd de achtergrond naar de Rainbow Road baan in de desbetreffende game(bijv. Wii) en is er meer informatie te lezen over karakters, items en mogelijke game modus.
  <img src="readme-images/schetsenideetjes.png" width="1000px" alt="schetsen van losse ideeën">



### Mijn ambitie: 
  Aan deze technieken/punten wil ik werken:
  - Het vak halen ;)
  - Een voldoende halen
  - Meerdere elementen maken door het gebruik van animaties(keyframes) en interacties met Javascript.
  - Iets meer plezier hebben in coderen(knutselen) 
 
</details>


## Voortgang/Feedback 1

<details>
  <summary>Mijn bevindingen + wijzigingen</summary>

  ### Bevinding 1:
  Tijdens de eerste feedbacksessie had ik meerdere schetsen gemaakt van concepten. Ik had twee hoofdconcepten en een aantal losse ideeën die ik kan combineren met de hoofdconcepten. Nu stond ik dus wel op het punt dat ik een keuze moest maken tussen de twee concepten.
  Ik had dus nog geen keuze gemaakt welk concept ik ga uitwerken. En welke losse ideeën ik ga toepassen.
 
  #### oplossing:
  Tijdens het toelichten van mijn concepten aan mijn medestudenten merkte ik dat ik enthousiaster werd over het tweede concept. Het concept waarbij ik Mario laat racen door de versies van Rainbow Road. We kwamen ook tot de conclusie dat het eerste concept een beetje statisch is. Waardoor het minder leuk kan zijn om deze te maken. Bovendien past het tweede concept meer bij Mario Kart
  

  ### Bevinding 2:
  <img src="readme-images/schetsenideetjes.png" width="1000px" alt="schetsen van losse ideeën">
  Een keuze maken uit losse ideeën. Ik had natuurlijk veel losse ideeën, maar het was niet haalbaar en mooi voor het ontwerp om alles te gaan uitwerken. 

  #### oplossing:
  Ik kreeg als feedback om niet alle functies te kiezen om uit te gaan werken. Zodat het niet teveel wordt. 
  Ik kwam tot de conclusie dat de besturing verwarrend kan zijn als ik de racelijn en slider met verschillende consoles uitwerk. 
  Omdat beide elementen bijna op dezelfde plek komen te staan. Op basis van mijn niveau vond ik zelf de racelijn het meest haalbare om te gaan maken. 
  Informatie weergeven over de game platform zoals welke nieuwe karakters en items uitkwamen is leuk, maar niet essentieel. Het paste naar mijn mening meer bij Mario Kart in het algemeen. 

  ### Bevinding 3:
  Final concept schets om overzicht te krijgen wat ik ga maken.

  #### oplossing:
  Het is natuurlijk handig om een schets te hebben van je eindconcept, zodat je weet wat je wilt gaan maken. Daarnaast helpt het mij ook om meer overzicht te krijgen. Zo gaat het makkelijk om te bepalen met welk element ik ga starten. 
  <img src="readme-images/finalconcept.jpg" width="1000px" alt="schets van eindconcept">

  ### Bevinding 4:
  Schaakbord pattern maken voor finishlijn

  #### oplossing:
  Ik wilde als racelijn een finishlijn patroon te maken. Ik ben toen gaan zoeken naar een css code met een schaakpatroon.
  Ik vond uiteindelijk de volgende bron: https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/repeating-conic-gradient - CSS code om een schaakbord pattern te maken voor de finishlijn. 
  Met hulp van Sanne heb ik de CSS code geperfectioneerd. Daarvoor is gebruikt gemaakt van repeating-conic-gradient. 

  ### Bevinding 5:
  Verkeerslicht voor countdown 
  Voor het beginscherm leek het mij heel leuk om een countdown te laten zien met de bekende cloudguy uit de Mario Kart Game.
  En natuurlijk moet er dan een verkeerslicht in voorkomen. Maar ik wilde voor het verkeerslicht geen image gebruiken.

</details>
  Dus om het verkeerslicht te maken ben ik op zoek gegaan naar de juiste CSS code. Ik vond deze bron hiervoor: https://codesandbox.io/s/6h6jg?file=/index.html. Dankzij een tip van een klasgenoot koos ik ervoor om de cloudguy te editten in Photoshop, zodat alleen de cloudguy en de vishaak overblijft. Het verkeerslicht heb ik uiteindelijk zo gepositioneerd dat hij lijkt als of het aan het haakje hangt. 
<img src="readme-images/cloudguy.png" width="500px" alt="formulier van feedbackformulier">



## Voortgang/Feedback 2

<details>
  <summary>Mijn bevindingen + wijzigingen</summary>
  <img src="readme-images/feedback2deel1.jpg" width="500px" alt="formulier van feedbackformulier">
  <img src="readme-images/feedback2deel1.jpg" width="500px" alt="formulier van feedbackformulier">


  ### Bevinding 1:
  Let wel even op de leesbaarheid en voldoende contrast. Even testen met inspect. Ook als het darkmode is.
  Is het handig om bij custom properties om de kleur zwart apart te maken en die weer gebruiken in bijvoorbeeld de drop shadow. Dus een custom propertie in een custom propertie.  

  #### oplossing:
  Beschrijving hoe je het hebt hebt opgelost of als het niet gelukt is hoe je het zou oplossen (tekst en afbeelding(en)).



  ### Bevinding 2:
  Omschrijving van wat er nog niet orde was (tekst en afbeelding(en)).

    - Gebruik maken van Fonts. Kijken wel past naar het design. 

  #### oplossing:
  Beschrijving hoe je het hebt hebt opgelost of als het niet gelukt is hoe je het zou oplossen (tekst en afbeelding(en)).



  ### Bevinding 3:
    - Bij de buttons nog meerdere states uitwerken.

  ### Bevinding 4:
  - Handige shortcut voor netjes inspringen alt shift F
  - Netjes structuur in CSS zelfde volgorde HTML 
  - Welke onderbouwing heb ik om classes met camelCase te schrijven en de custom properties met-streepjes in de namen

  ### Bevinding 5:
  - Misschien van verkeerslicht een ul/li maken.

</details>



## Voortgang/Feedback 3

<details>
  <summary>Mijn bevindingen + wijzigingen </summary>
  We kwamen tot de conclusie dat alle punten wel voldoende waren uitgewerkt.
  De interface is een beetje responsive
  - Terug kan gaan op de tijdlijn
  - 
  
  ### Bevinding 1:
  Tekstwolkje popup

  #### oplossing:
  Beschrijving hoe je het hebt hebt opgelost of als het niet gelukt is hoe je het zou oplossen (tekst en afbeelding(en)).
  Ik wilde het tekstwolkje als een popup laten 



  ### Bevinding 2:
  Omschrijving van wat er nog niet orde was (tekst en afbeelding(en)).

  #### oplossing:
  Beschrijving hoe je het hebt hebt opgelost of als het niet gelukt is hoe je het zou oplossen (tekst en afbeelding(en)).



  ### Bevinding 3:
  ...

</details>




## Reflectie

<details>
  <summary>Mijn eindresultaat & persoonlijke ontwikkeling</summary>

  ### Je uitkomst - karakteristiek screenshot(s):
  <img src="readme-images/finalconcept.jpg" width="1000px" alt="schets van eindconcept">
  <img src="readme-images/finalconcept.jpg" width="375px" alt="screenshot van final ontwerp deel 1">
  <img src="readme-images/finalconcept.jpg" width="375px" alt="screenshot van final ontwerp deel 2"


  ### Dit ging goed/Heb ik geleerd: 
  Korte omschrijving met plaatje(s)
  - Javascript code schrijven voor het maken van een interactie. Voor mij is Javascript heel lastig en deze code lukte mij helemaal zelf te schrijven na de les over JS. 
 - Gebruik maken van custom properties en root.
 - Hoe je position absolute kan gebruiken. Het is belangrijk dat de parent position relative krijgt. Bij position absolute wordt het element relatief gepositioneerd op basis van de parent met position relative.



  ### Dit was lastig/Is niet gelukt:
  Korte omschrijving met plaatje(s)
  Het idee was om voor de countdown niet alleen het stoplicht te gebruiken, maar net zoals in de game de aftelling zien in cijfers. bron die ik hiervoor wilde gebruiken: https://codepen.io/raulsuescun/pen/dwLWyw
  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="bummer">
  Vanwege tijdgebrek heb ik ervoor gekozen om dit achterwege te laten en alleen het stoplicht met de cloudguy uit te werken. Daarnaast is het belangrijker om de Evolutie van Mario Kart Rainbow Road te laten zien. 

  Andere dingen die niet gelukt zijn. Was leuk geweest om erin te hebben, maar niet essentieel zoals countdown geluid uit de game. Of blue shell 
  bron geluid: https://quicksounds.com/sound/23/mario-kart-race-start

  Blue shell ontploft zoals de oefening met de kikker en Mario staat weer bij het beginpunt. 

  https://codepen.io/pulpexploder/pen/MJRPKE?editors=1100 voor bounce effect 

  Vooral evalueren dit kan de volgende beter.
</details>





## Bronnenlijst afbeeldingen

<details open>
- Veel afbeeldingen heb ik nog wel aangepast in Photoshop, zodat de afbeeldingen geen achtergrond hebben.

1. https://www.deviantart.com/betatus/art/Mario-Kart-ICON-412302604 - afbeelding voor fav icon
2. https://static.wikia.nocookie.net/mariokart/images/2/20/Fishin'_Lakitu_(Mario_Kart_7).png/revision/latest/scale-to-width-down/1000?cb=20131229194833 - Afbeelding van Latiku(cloudguy) voor de countdown. De afbeelding wel aangepast in Photoshop, omdat ik het verkeerslicht met CSS wilde maken.
3. https://mariokart.fandom.com/wiki/Spiny_Shell  - Afbeelding van Blue Shell
4. https://mariokart.fandom.com/wiki/Mushroom_(item) - Afbeelding van rode mushroom
5. https://mariokart.fandom.com/wiki/Mushroom_(item)  - Alle mushroom afbeeldingen. Deze wel aangepast in Photoshop.
6. https://nintendoeverything.com/horis-mario-kart-8-accessories-will-be-available-in-north-america/ - Stuurwiel voor cursor:hover


7. https://commons.wikimedia.org/wiki/File:Super-Mario-Kart-Logo.png - Logo van Super Mario Kart 1992
8. https://www.pngkey.com/maxpic/u2q8i1u2o0q8i1e6/ - Logo van Mario Kart Super Circuit 2001
9. https://www.deviantart.com/ringostarr39/art/Mario-Kart-DS-logo-738743863 - Logo van Mario Kart DS 2005
10. https://commons.wikimedia.org/wiki/File:Mariokartwiilogo.png - Logo van Mario Kart Wii 2008
11. https://logos.fandom.com/wiki/Mario_Kart_7 - Logo van Mario Kart 7 2011
12. https://logos.fandom.com/wiki/Mario_Kart_8_Deluxe - Logo van Mario Kart 8 Deluxe 2017


13. https://4.bp.blogspot.com/-K2FuO2FjJHk/UwEyZTWL7BI/AAAAAAAAApg/dEf-azZKXcM/s1600/SMK4.png - Rainbow Road 1992 voor achtergrond
14. https://saveupdata.com/news/every-version-of-mario-karts-rainbow-road-ranked/ - Rainbow Road 2001 voor achtergrond
15. https://www.sporcle.com/games/Bowserdude/mario-kart-rainbow-road-medley - Rainbow Road 2005 voor achtergrond
16. https://www.wallpaperup.com/318535/screenshots_Mario_Kart_rainbow_road.html - Rainbow Road Wii 2008 voor achtergrond
17. https://mariokart.fandom.com/wiki/Rainbow_Road_(3DS) - Rainbow Road 3DS 2011 voor achtergrond
18. https://mariokart.fandom.com/wiki/Rainbow_Road_(N64) - Rainbow Road 2017 voor achtergrond

19. https://www.deviantart.com/betatus/art/Mario-Kart-ICON-412302604 - Mario karakter SNES 1992
20. https://kuribo64.net/get.php?id=YJEUvarXYe9J1Ygn - Mario karakter DS 2005 
21. https://www.youtube.com/watch?v=jr3EZPOthSo - Mario karakter GBA 2001
22. https://www.youtube.com/watch?v=MKnNYX3E8dI - Mario karakter Wii 2008
23. https://www.youtube.com/watch?v=VRrcXQb-TrM  - Mario karakter kart 7 2011
24. https://www.youtube.com/watch?v=zfd6vKg0f6s - Mario karakter kart 8 deluxe 2017

25. https://www.youtube.com/watch?v=-jqqHOF89b8 - Informatie voor content tijdlijn
26. https://appdevelopermagazine.com/the-evolution-of-mario-kart/ - Informatie voor content tijdlijn
27. https://9gag.com/gag/aADYAE9 - Informatie voor content tijdlijn
28. https://www.dafont.com/super-mario-256.font - Mario kart fonts
29. https://fontmeme.com/fonts/mario-kart-f2-font/#previewtool - Mario kart font nr 2
30. https://www.fontsquirrel.com/tools/webfont-generator - Voor omzetten Font-types van ttf naar woff & woff2.


## Bronnenlijst voor code
1. https://codesandbox.io/s/6h6jg?file=/index.html - CSS code voor het maken en animeren van het verkeerslicht. 
2. https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/repeating-conic-gradient - CSS code om een schaakbord pattern te maken voor de finishlijn.
3. https://css-tricks.com/css3-gradients/ - Om een Regenboog gradient te maken voor de achtergrond.
4. https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_popup - Voor popup effect voor tekstwolkje.
5. https://alistapart.com/article/now-you-see-me/ - Waarvoor visibility of display:none gebruiken.
6. En tijdens de les natuurlijk uitleg en hulp gekregen door Sanne met het schrijven van code.

