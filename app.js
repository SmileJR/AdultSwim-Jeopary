// ===================================VARIABLES=========================================================
//First I need to declare my global variables
txt = "You are correct!"
var audio = new Audio('timesUp.mp3');
points = 0;
var pointsBB = document.querySelector('.pointsBB')
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

function promptc6(){
    $("#c6").toggle()
    var c6answer = prompt("What is the capital of New York?", "enter your answer here")

//this if statement will allow the player to play the game after entering or not entering a word.
if (c6answer == "albany" || c6answer == "Albany" || c6answer == "ALBANY") {

    add100()

//if the answer is left blank points will be deducted from the point bank    
} else if (c6answer == null) {
    sub100();
    audio.play();
}
 else {
    swal("You are incorrect");
    sub100();
}
}
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function promptc7(){
    $("#c7").toggle()
    var c7answer = prompt("What is the capital of atlanta", "enter your answer here")

//this if statement will allow the player to start playing the game after entering or not entering a word.
if (c7answer == "you" || c7answer == "YOU" || c7answer == "You") {
    // if the player does not enter a word or leaves the prompt box blank the game will not play
    // console.log(points += 100)
    add100()

    
} else{
    audio.play();
}
}
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// $('#score').text(score);
// function foundMatchingBlocks(event, params) {
//       params.elements.remove();
//       score += 100;
//       $('#score').text(score);
// }






// trapped.addEventListener("load", playtime);
// //First and foremost I need a away to get the word that the player wants to use
// var playtime = prompt("Please enter the word you want to guess", "enter word here")

// //this if statement will allow the player to start playing the game after entering or not entering a word.
// if (playtime == null || playtime == "") {
//     // if the player does not enter a word or leaves the prompt box blank the game will not play
//     txt = "Come back when you want to play"
//     console.log(txt)
// } else {
//     //if the player enters a word the game begins
//     txt = "Let's play!"
//     console.log(txt)
// }

// //this is the word that the player has inputted and we will use to play the game
// console.log(playtime)


// // A want to be able to see the word split up into an array of characters
// var playtimeArray = playtime.split('')
// console.log(playtimeArray)


// //I need a space for the word to be revealed, thi
// var answer = []
// for (var i = 0; i < playtimeArray.length; i++) {
//     answer[i] = "_"
// }
// // what the frick!!
// function great() {
//       $('ul').append(`${answer}`)
// //    $('ul').append(answer)
// }
// console.log(great())



// // I need an area to show which letters have been used 
// var usedLetters = []



// // if all the balloons pop i want it to have an alert box that plays the sound file
// function lose() {
//     console.log('Mario died! Oh no!')

// } 
// //create prompt
// // var myPrompt = prompt("This is a prompt")
// // //confirmed that it works
// // console.log(myPrompt)


// // var word = ['t','e','e','t']

// // var selectedLetter = 'b'
// // //put into another variable but this is unnecessary
// // var userWord = myPrompt

// // var userWordArray = userWord.split('')


// // for(var i = 0; i < userWordArray.length; i++){
// //     if(selectedLetter == userWordArray[i]){
// //         document.getElementById('testing').innerHTML = userWordArray.join('')
// //     }
// // }
// STOPPED TRYING TO DO HANGMAN SWITCHING TO JEOPARDY

