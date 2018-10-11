//First and foremost I need a away to get the word that the player wants to use
var playtime = prompt("Please enter the word you want to guess", "enter word here")

//this if statement will allow the player to start playing the game after entering or not entering a word.
if (playtime == null || playtime == "") {
    // if the player does not enter a word or leaves the prompt box blank the game will not play
    txt = "Come back when you want to play"
    console.log(txt)
} else {
    //if the player enters a word the game begins
    txt = "Let's play!"
    console.log(txt)
}

//this is the word that the player has inputted and we will use to play the game
console.log(playtime)


// A want to be able to see the word split up into an array of characters
var playtimeArray = playtime.split('')
console.log(playtime)


//I need a space for the word to be revealed, thi
var answer = []
for (var i = 0; i < playtimeArray.length; i++) {
    answer[i] = "_ "
}
// what the frick
function great() {
    $('ul').append(answer)
}


// I need an area to show which letters have been used 
var usedLetters = []



// if all the balloons pop i want it to have an alert box that plays the sound file
function lose() {
    console.log('Mario fell! Oh no!')

}