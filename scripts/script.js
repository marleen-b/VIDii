// WEGVLIEGEN 
// Spreekt de button aan in de header 
var startButton = document.querySelector("aside button");
var startScherm = document.querySelector("aside");
var cloudGuy = document.querySelector("section.cloudguy");
var verkeerslicht = document.querySelector("div.verkeerslicht");
var marioKarakter = document.querySelector("img.mario");
var bodyBackground = document.body;

//Speel functie startenEnWegVliegen na klik op startbutton
startButton.addEventListener("click", startenEnWegvliegen);

// functie om cloudguy en verkeerslicht weg te laten vliegen 
function startenEnWegvliegen (){
    verkeerslicht.classList.add("verkeerslichtAan");
    cloudGuy.classList.add("cloudGuyWegVliegen");

    // stukje op weg en achtergrond image veranderd
    marioKarakter.classList.add("y1992");

    // Class pas toevoegen na 3.5s 
    setTimeout(() => {
        bodyBackground.classList.add("y1992");
    }, 3500)

    // aside weg der mee
    startScherm.classList.add("wegDerMee");

    // Mushrooms buttons zijn klikbaar met tab na klik op startknop
    // Omdat tabindex al in HTML bestaat wordt de waarde aangepast
    mushroomButton2001.setAttribute("tabindex",0);
    mushroomButton2005.setAttribute("tabindex",0);
    mushroomButton2008.setAttribute("tabindex",0);
    mushroomButton2011.setAttribute("tabindex",0);
    mushroomButton2017.setAttribute("tabindex",0);

    //Na klik op start is deze knop niet meer klikbaar via tab
    startButton.setAttribute("tabindex", -1);
}

var mushroomButton2001 = document.querySelector("li:nth-of-type(2) button");
var mushroomButton2005 = document.querySelector("li:nth-of-type(3) button");
var mushroomButton2008 = document.querySelector("li:nth-of-type(4) button");
var mushroomButton2011 = document.querySelector("li:nth-of-type(5) button");
var mushroomButton2017 = document.querySelector("li:nth-of-type(6) button");

var marioKartLogo = document.querySelector("header img");

// Elk p tekstwolkje wordt apart aangesproken
var tekstWolkje2001 = document.querySelector("li:nth-of-type(2) p");
var tekstWolkje2005 = document.querySelector("li:nth-of-type(3) p");
var tekstWolkje2008 = document.querySelector("li:nth-of-type(4) p");
var tekstWolkje2011 = document.querySelector("li:nth-of-type(5) p");
var tekstWolkje2017 = document.querySelector("li:nth-of-type(6) p");

// Na klik op mushroom speel functie naarJAARTAL af 
mushroomButton2001.addEventListener("click", naar2001);
mushroomButton2005.addEventListener("click", naar2005);
mushroomButton2008.addEventListener("click", naar2008);
mushroomButton2011.addEventListener("click", naar2011);
mushroomButton2017.addEventListener("click", naar2017);


// Background veranderd na klik op mushroom button
// Mario verplaatst na klik op een mushroom button
// Logo veranderd na klik op mushroom button
function naar2001(){
    //verander Mario karakter image
    marioKarakter.classList.add("y2001");   
    // Verander background image
    bodyBackground.classList.add("y2001");
    // Verander Mario Kart Logo
    marioKartLogo.classList.add("y2001");
    // Popup voor tekstwolkje
    tekstWolkje2001.classList.add("showTekst");
    // Mushroom is niet meer klikbaar na 1x klikken
    mushroomButton2001.setAttribute("tabindex",-1);;
}

// Herhaling vorige functie code, maar met ander jaartal
function naar2005(){
    marioKarakter.classList.add("y2005");   
    bodyBackground.classList.add("y2005");
    marioKartLogo.classList.add("y2005");
    tekstWolkje2005.classList.add("showTekst");
    mushroomButton2005.setAttribute("tabindex",-1);
}

function naar2008(){
    marioKarakter.classList.add("y2008");   
    bodyBackground.classList.add("y2008");
    marioKartLogo.classList.add("y2008");  
    tekstWolkje2008.classList.add("showTekst");
    // Je kan alleen maar vooruit klikken
    mushroomButton2005.setAttribute("tabindex",-1); 
    mushroomButton2008.setAttribute("tabindex",-1);   
}

function naar2011(){
    marioKarakter.classList.add("y2011");   
    bodyBackground.classList.add("y2011");
    marioKartLogo.classList.add("y2011"); 
    tekstWolkje2011.classList.add("showTekst");
    mushroomButton2005.setAttribute("tabindex",-1); 
    mushroomButton2008.setAttribute("tabindex",-1)
    mushroomButton2011.setAttribute("tabindex",-1);
}

function naar2017(){
    marioKarakter.classList.add("y2017");   
    bodyBackground.classList.add("y2017");
    marioKartLogo.classList.add("y2017"); 
    tekstWolkje2017.classList.add("showTekst");
    mushroomButton2005.setAttribute("tabindex",-1); 
    mushroomButton2008.setAttribute("tabindex",-1)
    mushroomButton2011.setAttribute("tabindex",-1);
    mushroomButton2017.setAttribute("tabindex",-1);   
}