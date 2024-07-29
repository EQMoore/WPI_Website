// GUIDELINES:
//  1. Give every variable/const smallest scope
//  2. Grab HTML elements by tag and store in const
//  3. Put all other code inside functions

var myConfetti = confetti.create(null, {
    resize: true,
    useWorker: true
});

const body = document.body;
const numfield = document.getElementById("numfield");
const maxfield = document.getElementById("max");
const minfield = document.getElementById("min");
const feedbackText = document.getElementById("feedback-text");
const score = document.getElementById("score");
var guesses;
let secret;

function restartGame() {
    if(minfield == NaN || maxfield == NaN){
        secret = randInt(1, 100);
        numfield.min = 1;
        numfield.max = 100;
        numfield.value = 1;
    }
    else{
    secret = randInt(parseInt(minfield.value), parseInt(maxfield.value));
    numfield.min = parseInt(minfield.value);
    numfield.max = parseInt(maxfield.value);
    numfield.value = parseInt(minfield.value);
    }
    guesses = 0;
    score.innerHTML="Number of guesses made: " + guesses;
}

function makeGuess() {
    let guess = parseInt(numfield.value);
    if (guess === secret) {
        feedbackText.innerHTML = `${guess} is correct!`;
        myConfetti({particleCount: 600, spread: 0});
        body.style.backgroundColor = "green";
    } else if (guess < secret) {
        feedbackText.innerHTML = `${guess} is too small`;
        guesses++;
        score.innerHTML="Number of guesses made: " + guesses;
    } else {
        feedbackText.innerHTML = `${guess} is too large`;
        guesses++;
        score.innerHTML="Number of guesses made: " + guesses;
    }
}

/**
* Generate a random integer within min and max
* @param {number} min 
* @param {number} max 
* @returns a random integer between min and max, inclusive
*/
function randInt(min, max) {
    let rand = Math.random();
    rand = rand * (max - min + 1);
    rand = rand + min;
    rand = Math.floor(rand);
    return rand;
}