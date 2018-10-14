// ===================================VARIABLES=========================================================
//First I need to declare my global variables
txt = "You are correct!"
points = 0;
var pointsBB = document.querySelector('.pointsBB')
var audio = new Audio('sound/timesUp.mp3');
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
// DONE
function promptc9(){
    $("#c9").toggle()
    var c9answer = prompt("What was the original title for the show Metalocalypse?", "enter your answer here")

//this if statement will allow the player to start playing the game after entering or not entering a word.
if (c9answer == "deathclock" || c9answer == "Deathclock" || c9answer == "DEATHCLOCK") {
    add100()
    
} else {
    sub100()
    audio.play()
}
}
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
//DONE
function promptc10(){
    $("#c10").toggle()
    var c8answer = prompt("How many years has [adult swim] been on air?", "enter your answer here")

//this if statement will allow the player to start playing the game after entering or not entering a word.
if (c10answer == "17" || c10answer == "17 years" || c10answer == "17 YEARS") {
    add100()
    
} else {
    sub100()
    audio.play()
}
}

// +++++++++++++++++++++++++++++++++++++ $300 Questions +++++++++++++++++++++++++++++++++++++++++++++++ //
function promptc8(){
    $("#c8").toggle()
    var c8answer = prompt("Do you like gangster shit?", "enter your answer here")

//this if statement will allow the player to start playing the game after entering or not entering a word.
if (c8answer == "yes" || c8answer == "Yes" || c8answer == "YES") {
    add300()
    
} else {
    sub300()
    audio.play()
}
}
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //
function promptc8(){
    $("#c8").toggle()
    var c8answer = prompt("Do you like gangster shit?", "enter your answer here")

//this if statement will allow the player to start playing the game after entering or not entering a word.
if (c8answer == "yes" || c8answer == "Yes" || c8answer == "YES") {
    add300()
    
} else {
    sub300()
    audio.play()
}
}
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //
function promptc8(){
    $("#c8").toggle()
    var c8answer = prompt("Do you like gangster shit?", "enter your answer here")

//this if statement will allow the player to start playing the game after entering or not entering a word.
if (c8answer == "yes" || c8answer == "Yes" || c8answer == "YES") {
    add300()
    
} else {
    sub300()
    audio.play()
}
}
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //
function promptc8(){
    $("#c8").toggle()
    var c8answer = prompt("Do you like gangster shit?", "enter your answer here")

//this if statement will allow the player to start playing the game after entering or not entering a word.
if (c8answer == "yes" || c8answer == "Yes" || c8answer == "YES") {
    add300()
    
} else {
    sub300()
    audio.play()
}
}
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //
// DONE
function promptc15(){
    $("#c15").toggle()
    var c15answer = prompt("What message displayed on the first [as] bump?", "enter your answer here")

//this if statement will allow the player to start playing the game after entering or not entering a word.
if (c15answer == "Hello" || c15answer == "HELLO" || c15answer == "hello") {
    add300()
    
} else {
    sub300()
    audio.play()
}
}

// ++++++++++++++++++++++++++++++++++++++ $900 Questions +++++++++++++++++++++++++++++++++++++++++++++ //
function promptc8(){
    $("#c8").toggle()
    var c8answer = prompt("Do you like gangster shit?", "enter your answer here")

//this if statement will allow the player to start playing the game after entering or not entering a word.
if (c8answer == "yes" || c8answer == "Yes" || c8answer == "YES") {
    add900()
    
} else {
    sub900()
    audio.play()
}
}
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //
function promptc8(){
    $("#c8").toggle()
    var c8answer = prompt("Do you like gangster shit?", "enter your answer here")

//this if statement will allow the player to start playing the game after entering or not entering a word.
if (c8answer == "yes" || c8answer == "Yes" || c8answer == "YES") {
    add900()
    
} else {
    sub900()
    audio.play()
}
}
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //
function promptc8(){
    $("#c8").toggle()
    var c8answer = prompt("Do you like gangster shit?", "enter your answer here")

//this if statement will allow the player to start playing the game after entering or not entering a word.
if (c8answer == "yes" || c8answer == "Yes" || c8answer == "YES") {
    add900()
    
} else {
    sub900()
    audio.play()
}
}
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //
function promptc8(){
    $("#c8").toggle()
    var c8answer = prompt("Do you like gangster shit?", "enter your answer here")

//this if statement will allow the player to start playing the game after entering or not entering a word.
if (c8answer == "yes" || c8answer == "Yes" || c8answer == "YES") {
    add900()
    
} else {
    sub900()
    audio.play()
}
}
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //
// DONE
function promptc20(){
    $("#c20").toggle()
    var c20answer = prompt("Will you ever outgrow watching [adult swim] programming?", "enter your answer here")

//this if statement will allow the player to start playing the game after entering or not entering a word.
if (c20answer == "no" || c20answer == "NO" || c20answer == "No") {
    add900()
    
} else {
    sub900()
    audio.play()
}
}
// +++++++++++++++++++++++++++++++++++++++END OF QUESTION CODE+++++++++++++++++++++++++++++++++++++++++++++++++++++++ //
