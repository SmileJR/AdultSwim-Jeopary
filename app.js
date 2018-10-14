// ===================================VARIABLES=========================================================
//First I need to declare my global variables
txt = "You are correct!"
points = 0;
var pointsBB = document.querySelector('.pointsBB')
var audio = new Audio('sound/timesUp.mp3');
var audio2 = new Audio('sound/correct.mp3')
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

//this if statement will whether the players answer is correct or not
if (c6answer == "albany" || c6answer == "Albany" || c6answer == "ALBANY") {
//if the players answer is equivilant to any of the option above 100 points will be added to their point bank
    add100()
//a sound will play    
    audio2.play()
// and a sweet alert indicating that they are correct will display    
    swal(
        'Nice!',
        'You are correct!',
        'success'
      )

    
} else {
//if the players answer is anything besides the 3 options above 100 points will be deducted from thier point bank    
    sub100()
//a different sound will play    
    audio.play()
// and a sweet alert indicating that the answer was incorrect will display    
    swal({
        type: 'error',
        title: 'Sorry, thats incorrect.',
        text: 'Better luck next time!'
      })
}
}
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //
// DONE
function promptc7(){
    $("#c7").toggle()
    var c7answer = prompt("How old is Meatwad?", "enter your answer here")
if (c7answer == "6" || c7answer == "6 years old") {
    add100()
    audio2.play()
    swal(
        'Nice!',
        'You are correct!',
        'success'
      )    
} else {
    sub100()
    audio.play()
    swal({
        type: 'error',
        title: 'Sorry, thats incorrect.',
        text: 'Better luck next time!'
      })
}
}
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //
// DONE
function promptc8(){
    $("#c8").toggle()
    var c8answer = prompt("Who is the mad scientist, Ricky or Morty?", "enter your answer here")
if (c8answer == "rick" || c8answer == "RICK" || c8answer == "Rick") {
    add100()
    audio2.play()   
    swal(
        'Nice!',
        'You are correct!',
        'success'
      )

} else {
    sub100()
    audio.play()
    swal({
        type: 'error',
        title: 'Sorry, thats incorrect.',
        text: 'Better luck next time!'
      })
}
}
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
// DONE
function promptc9(){
    $("#c9").toggle()
    var c9answer = prompt("What was the original title for the show Metalocalypse?", "enter your answer here")

if (c9answer == "deathclock" || c9answer == "Deathclock" || c9answer == "DEATHCLOCK") {
    add100()
    audio2.play()
    swal(
        'Nice!',
        'You are correct!',
        'success'
      )
    
} else {
    sub100()
    audio.play()
    swal({
        type: 'error',
        title: 'Sorry, thats incorrect.',
        text: 'Better luck next time!'
      })
}
}
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
//DONE
function promptc10(){
    $("#c10").toggle()
    var c10answer = prompt("How many years has [adult swim] been on air?", "enter your answer here")

if (c10answer == "17" || c10answer == "17 years" || c10answer == "17 YEARS") {
    add100()
    audio2.play()
    swal(
        'Nice!',
        'You are correct!',
        'success'
      )
    
} else {
    sub100()
    audio.play()
    swal({
        type: 'error',
        title: 'Sorry, thats incorrect.',
        text: 'Better luck next time!',
      })
}
}

// +++++++++++++++++++++++++++++++++++++ $300 Questions +++++++++++++++++++++++++++++++++++++++++++++++ //
function promptc11(){
    $("#c11").toggle()
    var c11answer = prompt("Do you like gangster shit?", "enter your answer here")

if (c11answer == "yes" || c11answer == "Yes" || c11answer == "YES") {
    add300()
    audio2.play()
    swal(
        'Nice!',
        'You are correct!',
        'success'
      )
    
} else {
    sub300()
    audio.play()
    swal({
        type: 'error',
        title: 'Sorry, thats incorrect.',
        text: 'Better luck next time!'
      })
}
}
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //
function promptc12(){
    $("#c12").toggle()
    var c12answer = prompt("Do you like gangster shit?", "enter your answer here")

if (c12answer == "yes" || c12answer == "Yes" || c12answer == "YES") {
    add300()
    audio2.play()
    swal(
        'Nice!',
        'You are correct!',
        'success'
      )
    
} else {
    sub300()
    audio.play()
    swal({
        type: 'error',
        title: 'Sorry, thats incorrect.',
        text: 'Better luck next time!'
      })
}
}
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //
function promptc13(){
    $("#c13").toggle()
    var c13answer = prompt("Do you like gangster shit?", "enter your answer here")

if (c13answer == "yes" || c13answer == "Yes" || c13answer == "YES") {
    add300()
    audio2.play()
    swal(
        'Nice!',
        'You are correct!',
        'success'
      )
    
} else {
    sub300()
    audio.play()
    swal({
        type: 'error',
        title: 'Sorry, thats incorrect.',
        text: 'Better luck next time!'
      })
}
}
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //
function promptc14(){
    $("#c14").toggle()
    var c14answer = prompt("Do you like gangster shit?", "enter your answer here")

if (c14answer == "yes" || c14answer == "Yes" || c14answer == "YES") {
    add300()
    audio2.play()
    swal(
        'Nice!',
        'You are correct!',
        'success'
      )
    
} else {
    sub300()
    audio.play()
    swal({
        type: 'error',
        title: 'Sorry, thats incorrect.',
        text: 'Better luck next time!'
      })
}
}
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //
// DONE
function promptc15(){
    $("#c15").toggle()
    var c15answer = prompt("What message displayed on the first [as] bump?", "enter your answer here")

if (c15answer == "Hello" || c15answer == "HELLO" || c15answer == "hello") {
    add300()
    audio2.play()
    swal(
        'Nice!',
        'You are correct!',
        'success'
      )
    
} else {
    sub300()
    audio.play()
    swal({
        type: 'error',
        title: 'Sorry, thats incorrect.',
        text: 'Better luck next time!'
      })
}
}

// ++++++++++++++++++++++++++++++++++++++ $900 Questions +++++++++++++++++++++++++++++++++++++++++++++ //
function promptc16(){
    $("#c16").toggle()
    var c16answer = prompt("Do you like gangster shit?", "enter your answer here")

if (c16answer == "yes" || c16answer == "Yes" || c16answer == "YES") {
    add900()
    audio2.play()
    swal(
        'Nice!',
        'You are correct!',
        'success'
      )
    
} else {
    sub900()
    audio.play()
    swal({
        type: 'error',
        title: 'Sorry, thats incorrect.',
        text: 'Better luck next time!'
      })
}
}
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //
function promptc17(){
    $("#c17").toggle()
    var c17answer = prompt("Do you like gangster shit?", "enter your answer here")
if (c17answer == "yes" || c17answer == "Yes" || c17answer == "YES") {
    add900()
    audio2.play()
    swal(
        'Nice!',
        'You are correct!',
        'success'
      )
    
} else {
    sub900()
    audio.play()
    swal({
        type: 'error',
        title: 'Sorry, thats incorrect.',
        text: 'Better luck next time!'
      })
}
}
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //
function promptc18(){
    $("#c18").toggle()
    var c8answer = prompt("Do you like gangster shit?", "enter your answer here")

if (c18answer == "yes" || c18answer == "Yes" || c18answer == "YES") {
    add900()
    audio2.play()
    swal(
        'Nice!',
        'You are correct!',
        'success'
      )
    
} else {
    sub900()
    audio.play()
    swal({
        type: 'error',
        title: 'Sorry, thats incorrect.',
        text: 'Better luck next time!'
      })
}
}
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //
function promptc19(){
    $("#c19").toggle()
    var c8answer = prompt("Do you like gangster shit?", "enter your answer here")

if (c19answer == "yes" || c19answer == "Yes" || c19answer == "YES") {
    add900()
    audio2.play()
    swal(
        'Nice!',
        'You are correct!',
        'success'
      )
    
} else {
    sub900()
    audio.play()
    swal({
        type: 'error',
        title: 'Sorry, thats incorrect.',
        text: 'Better luck next time!'
      })
}
}
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //
// DONE
function promptc20(){
    $("#c20").toggle()
    var c20answer = prompt("Will you ever outgrow watching [adult swim] programming?", "enter your answer here")

if (c20answer == "no" || c20answer == "NO" || c20answer == "No") {
    add900()
    audio2.play()
    swal(
        'Nice!',
        'You are correct!',
        'success'
      )
    
} else {
    sub900()
    audio.play()
    swal({
        type: 'error',
        title: 'Sorry, thats incorrect.',
        text: 'Better luck next time!'
      })
}
}
// +++++++++++++++++++++++++++++++++++++++END OF QUESTION CODE+++++++++++++++++++++++++++++++++++++++++++++++++++++++ //
