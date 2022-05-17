// WEGVLIEGEN 
var startButton = document.querySelector("header button");
// Spreekt de button aan in de header 
var cloudGuy = document.querySelector("section.cloudguy");
var verkeerslicht = document.querySelector("div.verkeerslicht");
var marioKarakter = document.querySelector("img.mario");
var bodyBackground = document.querySelector("body");

//Speel functie startenEnWegVliegen na klik op button
startButton.addEventListener("click", startenEnWegvliegen);

// functie om cloudguy en verkeerslicht weg te laten vliegen 
function startenEnWegvliegen (){
    verkeerslicht.classList.add("verkeerslichtAan");
    cloudGuy.classList.add("cloudGuyWegVliegen");

    // stukje op weg en veranderd achtergrond
    marioKarakter.classList.add("y1992");
    bodyBackground.classList.add("y1992");
}

// Mario verplaatst na klik op een mushroom button
var mushroomButton2001 = document.querySelector("li:nth-of-type(2) button");
var mushroomButton2005 = document.querySelector("li:nth-of-type(3) button");
var mushroomButton2008 = document.querySelector("li:nth-of-type(4) button");
var mushroomButton2011 = document.querySelector("li:nth-of-type(5) button");
var mushroomButton2017 = document.querySelector("li:nth-of-type(6) button");


// Na klik op mushroom speel functie naarJAARTAL af 
// Background veranderd na klik op mushroom button
// Mario verplaatst na klik op een mushroom button
mushroomButton2001.addEventListener("click", naar2001);
mushroomButton2005.addEventListener("click", naar2005);
mushroomButton2008.addEventListener("click", naar2008);
mushroomButton2011.addEventListener("click", naar2011);
mushroomButton2017.addEventListener("click", naar2017);

function naar2001(){
    marioKarakter.classList.add("y2001");   
    bodyBackground.classList.add("y2001");
}

function naar2005(){
    marioKarakter.classList.add("y2005");   
}

function naar2008(){
    marioKarakter.classList.add("y2008");   
}

function naar2011(){
    marioKarakter.classList.add("y2011");   
}

function naar2017(){
    marioKarakter.classList.add("y2017");   
}