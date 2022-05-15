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