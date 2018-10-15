// ===================================VARIABLES=========================================================
//First I need to declare my global variables
txt = "You are correct!"
points = 0;
// points is the starting score on the scoreboard, the counter starts at 0
var pointsBB = document.querySelector('.pointsBB')
// pointsBB is whre the points get added to and manipulte the DOM
var audio = new Audio('sound/timesUp.mp3');
// audio is the sound that plays if you get an answer wrong or dont enter an answer
var audio2 = new Audio('sound/correct.mp3')
// audio2 is the sound that plays if you get an answer correct
// ===================================VARIABLES=========================================================


// ========================================GLOBAL FUNCTIONS====================================================
//this function will add $100 to the players point bank by manipulating the DOM
function add100() {
    points += 100;
    console.log(points)
    pointsBB.innerHTML = `<center>$${points}</center>`
 }
//this function will subtract $100 from the players point bank by manipulating the DOM
 function sub100() {
    points -= 100;
    console.log(points)
    pointsBB.innerHTML = `<center>$${points}</center>`
 }
//this function will add $300 to the players point bank by manipulating the DOM
 function add300() {
    points += 300;
    console.log(points)
    pointsBB.innerHTML = `<center>$${points}</center>`
 }
//this function will subtract $300 from the players point bank by manipulating the DOM
 function sub300() {
    points -= 300;
    console.log(points)
    pointsBB.innerHTML = `<center>$${points}</center>`
 }

 //this function will add $900 to the players point bank by manipulating the DOM
 function add900() {
    points += 900;
    console.log(points)
    pointsBB.innerHTML = `<center>$${points}</center>`
 }
//this function will subtract $900 from the players point bank by manipulating the DOM
 function sub900() {
    points -= 900;
    console.log(points)
    pointsBB.innerHTML = `<center>$${points}</center>`
 }


// ======================================== END GLOBAL FUNCTIONS====================================================

// +++++++++++++++++++++++++++++++++++ $100 Questions +++++++++++++++++++++++++++++++++++++++++++++
// DONE
function promptc6(){
    $("#c6").toggle()
    var c6answer = prompt("Who is the main protagonist of superjail?", "enter your answer here")

//this if statement will whether the players answer is correct or not
if (c6answer == "The Warden" || c6answer == "the warden" || c6answer == "Warden" || c6answer == "warden") {
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
// DONE
function promptc11(){
    $("#c11").toggle()
    var c11answer = prompt("The theme song 'Comin' Home' is performed by whom?", "enter your answer here")

if (c11answer == "Cheeseburger" || c11answer == "cheesburger" || c11answer == "CHEESEBURGER") {
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
function promptc12(){
    $("#c12").toggle()
    var c12answer = prompt("In the episode Drewbacca, what did need help blowing up?", "enter your answer here")

if (c12answer == "moon" || c12answer == "The moon" || c12answer == "THE MOON") {
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
function promptc13(){
    $("#c13").toggle()
    var c13answer = prompt("SHOW ME WHAT YOU...", "enter your answer here")

if (c13answer == "got" || c13answer == "GOT" || c13answer == "Got") {
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
function promptc14(){
    $("#c14").toggle()
    var c14answer = prompt("Who are the brutal overseers of the band's various properties and the roadies for their concerts", "enter your answer here")

if (c14answer == "Klokateers" || c14answer == "klokateers" || c14answer == "KLOKATEERS") {
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
// DONE
function promptc16(){
    $("#c16").toggle()
    var c16answer = prompt("All of the humans on SuperJail are drawn with 5 fingers, except for this character", "enter your answer here")

if (c16answer == "Jared" || c16answer == "jared" || c16answer == "JARED") {
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
function promptc17(){
    $("#c17").toggle()
    var c17answer = prompt("Aqua Teen Hunger Force is a spin-off of what tv show?", "enter your answer here")

if (c17answer == "Space Ghost Coast to Coast" || c17answer == "Space Ghost" || c17answer == "space ghost") {
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
function promptc18(){
    $("#c18").toggle()
    var c8answer = prompt("What is the occupation of Ricks daughter Beth?", "enter your answer here")

if (c18answer == "veterinary surgeon" || c18answer == "surgeon" || c18answer == "veterinarian" || c18answer == "vet") {
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
function promptc19(){
    $("#c19").toggle()
    var c8answer = prompt("What is the name of the animated version of the Dethklok logo", "enter your answer here")

if (c19answer == "facebones" || c19answer == "Facebones" || c19answer == "FACEBONES") {
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
