console.log("Ijsjes")

// querySelector wordt gebruikt voor het aanroepen van het eerst element wat de website tegenkomet waar de selector om vraagt

var cone = document.querySelector("#cone");
var conemedium = document.querySelector("#conemedium");

var strawberry = document.querySelector("#strawberryice");
var chocolate = document.querySelector("#chocolateice");
var lemon = document.querySelector("#lemonice");
var oragne = document.querySelector("#orangeice");
var pistache = document.querySelector("#pistacheice");
var vanilla = document.querySelector("#vanillaice");
var yoghurtberry = document.querySelector("#yoghurtberryice");

var defaultice = document.querySelector("#defaultice")
var defaultcone = document.querySelector("#defaultcone")

var tekstInput = document.querySelector('#tekstinput')
var tekstP = document.querySelector('#tekst') ;

// console log voor het controleren of hij de functie aanroept als je er op clickt

function smaakaardbei(){
    console.log("aardbeiijs")
    defaultice.src = "img/strawberry.png";
    strawberry.src = "img/strawberry.png";
    tekstP.textContent = 'Dit is mijn favoriete smaak!'
}

// textContent gedaan voor dom manipulatie. Elke keer wordt de tekst in een p verandert naar die tekst tussen de ""
// DOM manipulatie van het veranderen van het Image.src
// addEventListener betekend dat er een actie moet worden uitgevoerdt voordat de computer de functie uitvoert. 
// Dus pas als je clickt op de smaak verandet hij

strawberry.addEventListener("click", smaakaardbei);

function smaakcitroen(){
    console.log("citroenijs")
    defaultice.src = "img/lemon.png";
    lemon.src = "img/lemon.png";
    tekstP.textContent = 'Ieuw, dit is zuur!'
}
lemon.addEventListener("click", smaakcitroen);

function smaaksinasappel(){
    console.log("sinasappelijs")
    defaultice.src = "img/orange.png";
    oragne.src = "img/orange.png";
    tekstP.textContent = 'Ik wist niet dat deze smaak bestond'
}
oragne.addEventListener("click", smaaksinasappel);

function smaakgroen(){
    console.log("pistache")
    defaultice.src = "img/pistache.png";
    pistache.src = "img/pistache.png";
    tekstP.textContent = 'Misterieus groen, maar wel lekker!'
}
pistache.addEventListener("click", smaakgroen);

function smaakvanielle(){
    console.log("vanille")
    defaultice.src = "img/vanilla.png";
    vanilla.src = "img/vanilla.png";
    tekstP.textContent = 'Jij bent classy!'
}
vanilla.addEventListener("click", smaakvanielle);

function smaakyoghurtberry(){
    console.log("yoghurtberry")
    defaultice.src = "img/yoghurtberry.png";
    yoghurtberry.src = "img/yoghurtberry.png";
    tekstP.textContent = 'Het mooiste ijsje, kijk die kleuren!'
}
yoghurtberry.addEventListener("click", smaakyoghurtberry);

function middelhoorntje(){
    console.log("middelhoorntje")
    defaultcone.src = "img/conemedium.png";
    conemedium.src = "img/conemedium.png";
    tekstP.textContent = 'Niet groot, niet klein, precies goed!'
}
conemedium.addEventListener("click", middelhoorntje);

function hoorntje(){
    console.log("hoorntje")
    defaultcone.src = "img/cone.png";
    cone.src = "img/cone.png";
    tekstP.textContent = 'Iedereen zijn favoriet!'
}
cone.addEventListener("click", hoorntje);

function smaken() {
    console.log('smaken')
    tekstP.textContent = 'Yummy!' + tekstInput.value +'. Dat is een lekkere smaak!'
}

tekstInput.addEventListener('change' , smaken) ; 

// // slagoom
var slagroom = document.querySelector("#whipped");
var bus = document.querySelector("#bus");
// hidden attribute in html maakt afbeelding onzichtbaar
// Dubbelklik zorgt voor slagroom verwijderen

bus.addEventListener("dragend", function room() {
    var roomAudio = document.querySelector('#room')
    slagroom.hidden = false;
    roomAudio.play() ;
})
bus.addEventListener("click", function () {
    slagroom.hidden = true;
})

// functie array alle plaatjes erin, door de functie randomsmaak wordt er een random getal genomen van 
// o tot 6 ceil betekend dat het afgerond wordt naar boven. randomimg wordt gekozen uit de array door 
// een nummertje die de randomsmaak genereerd.

var ijsfoto = document.querySelector("#foto");
var randomImg = ["img/defaultice.png", "img/lemon.png", "img/orange.png", "img/pistache.png", "img/strawberry.png", "img/vanilla.png", "img/yoghurtberry.png"];

function randomsmaak() {

    var randomSmaak = Math.random()*7;
    console.log(randomSmaak)
    randomSmaak = Math.floor(randomSmaak);
    console.log(randomSmaak);
    var ijsAfbeelding = randomImg[randomSmaak]
    console.log(ijsAfbeelding)
    defaultice.src = ijsAfbeelding

    // ClassList property gebruikt om de functie add() te gebruiken
// als de randomsmaak het nummer wat hij genereerd gelijk is aan 3,4,6 dan wordt de p aangepast met 
// Geleficiteerd u krijgt dit ijsje gratis maar als een van die nummers niet uit de math.random is gekomen
// dan moet je 2,50 betalen de == betekend gelijk aan

    if (randomSmaak == 3 || randomSmaak == 4 || randomSmaak == 6) {
        document.querySelector('p').textContent ='Gefeliciteerd u krijgt dit ijsje gratis!';
        document.body.classList.add("Gefeliciteerd!");
        }
    
    else {
        document.querySelector('p').textContent ='Dit wordt dan 2,50';
        document.body.classList.add("betalen");
    }
}
ijsfoto.addEventListener("click", randomsmaak );