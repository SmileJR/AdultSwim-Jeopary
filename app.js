// ===================================VARIABLES=========================================================
//First I need to declare my global variables
txt = "You are correct!"
points = 0;
var pointsBB = document.querySelector('.pointsBB')
var audio = new Audio('timesUp.mp3');
//let pointsBB = document.querySelector("h2")
//score is the point system that I will be using
console.log(pointsBB.innerHTML)
// ===================================VARIABLES=========================================================
// ========================================GLOBAL FUNCTIONS====================================================
//this function will add $100 to the players point bank by manipulating the DOM
function add100() {
    points += 100;
    console.log(points)
    pointsBB.innerHTML = `$${points}`
 }
//this function will subtract $100 from the players point bank by manipulating the DOM
 function sub100() {
    points -= 100;
    console.log(points)
    pointsBB.innerHTML = `$${points}`
 }
//this function will add $300 to the players point bank by manipulating the DOM
 function add300() {
    points += 300;
    console.log(points)
    pointsBB.innerHTML = `$${points}`
 }
//this function will subtract $300 from the players point bank by manipulating the DOM
 function sub300() {
    points -= 300;
    console.log(points)
    pointsBB.innerHTML = `$${points}`
 }

 //this function will add $900 to the players point bank by manipulating the DOM
 function add900() {
    points += 900;
    console.log(points)
    pointsBB.innerHTML = `$${points}`
 }
//this function will subtract $900 from the players point bank by manipulating the DOM
 function sub900() {
    points -= 900;
    console.log(points)
    pointsBB.innerHTML = `$${points}`
 }

// ========================================GLOBAL FUNCTIONS====================================================

// +++++++++++++++++++++++++++++++++++ $100 Questions +++++++++++++++++++++++++++++++++++++++++++++
function promptc6(){
    $("#c6").toggle()
    var c6answer = prompt("What is the capital of New York?", "enter your answer here")

//this if statement will allow the player to start playing the game after entering or not entering a word.
if (c6answer == "albany" || c6answer == "Albany" || c6answer == "ALBANY") {
    // if the player does not enter a word or leaves the prompt box blank the game will not play
    // console.log(points += 100)
    add100()

    
} else {
    sub100()
    audio.play()
}
}
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //
function promptc7(){
    $("#c7").toggle()
    var c7answer = prompt("Do you like gangster shit?", "enter your answer here")

//this if statement will allow the player to start playing the game after entering or not entering a word.
if (c7answer == "yes" || c7answer == "Yes" || c7answer == "YES") {
    add100()
    
} else {
    sub100()
    audio.play()
}
}
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //
function promptc8(){
    $("#c8").toggle()
    var c8answer = prompt("Do you like gangster shit?", "enter your answer here")

//this if statement will allow the player to start playing the game after entering or not entering a word.
if (c8answer == "yes" || c8answer == "Yes" || c8answer == "YES") {
    add100()
    
} else {
    sub100()
    audio.play()
}
}
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
function promptc9(){
    $("#c8").toggle()
    var c8answer = prompt("Do you like gangster shit?", "enter your answer here")

//this if statement will allow the player to start playing the game after entering or not entering a word.
if (c8answer == "yes" || c8answer == "Yes" || c8answer == "YES") {
    add100()
    
} else {
    sub100()
    audio.play()
}
}
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
function promptc10(){
    $("#c8").toggle()
    var c8answer = prompt("Do you like gangster shit?", "enter your answer here")

//this if statement will allow the player to start playing the game after entering or not entering a word.
if (c8answer == "yes" || c8answer == "Yes" || c8answer == "YES") {
    add100()
    
} else {
    sub100()
    audio.play()
}
}
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
