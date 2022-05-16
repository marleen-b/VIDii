// WEGVLIEGEN 
var startButton = document.querySelector("header button");
var cloudGuy = document.querySelector("section.cloudguy");
var verkeerslicht = document.querySelector("div.verkeerslicht");

/*Spreekt de button aan in de header */
startButton.addEventListener("click", startenEnWegvliegen );

/* Dit om de cloudguy weg te laten vliegen */ 
function startenEnWegvliegen (){
    verkeerslicht.classList.add("verkeerslichtAan");
    cloudGuy.classList.add("cloudGuyWegVliegen");
}
var marioKarakter = document.querySelector("img.mario");
var mushroomButton1992 = document.querySelector("li:nth-of-type(1) button");
mushroomButton1992.addEventListener("click", naar1992);

function naar1992(){
 marioKarakter.classList.add("y1992");   
}
/*Met class y1992 in css positioneren animeren*/