// JavaScript Document
var startButton = document.querySelector("header button")
/*Spreekt de button aan in de header */

var cloudGuy = document.querySelector("main article:nth-of-type(1) img")
startButton.addEventListener("click", wegvliegen )

var verkeerslicht = document.querySelector("main article:nth-of-type(2)")

startButton.addEventListener("click", wegvliegen )
/* Dit om de cloudguy weg te laten vliegen */ 

function wegvliegen (){
    cloudGuy.classList.add("cloudguy2");
}
/* Aan de cloudguy img wordt een class toegevoegd */ 

startButton.addEventListener("click", verkeerslichtAan)
/* Om de verkeerslicht animatie te starten */

 function verkeerslichtAan(){
    verkeerslicht.classList.add("verkeerslichtAan");
 }

