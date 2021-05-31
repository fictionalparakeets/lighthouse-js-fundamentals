/* Write a number guessing game. After every guess the program tells the user if their guess was too high/too low.
Once done, print the number of tries. Inputting the same number multiple times should only count as one try. 
If the user provides an answer which isn't a number, print an error message and do not count this as a try. */

// prompt code given (from prompt-practice.js file)
let prompt = require("prompt-sync")();

const instructions = "\nEnter any number from 0 to 10. \nIf your guess is too low or high, you keep guessing. \nType 'x' to quit during gameplay. \nGood luck!\n"
const invalidInputMessage = "That's not a valid entry. Please try again";

const invalidInput = function(guessInput) {
  if (guessInput === '0') return true;
  return parseInt(guessInput, 10) ? true : false;
};

const correctGuessCheck = function(guessInput) {
  return guessInput == gameOverReport.secretNumber ? true : false;
};

const guessTooLow = function(guessInput) {
  return guessInput < gameOverReport.secretNumber ? true : false;
};

const guessTooHigh = function(guessInput) {
  return guessInput > gameOverReport.secretNumber ? true : false;
};

const alreadyGuessed = function(guessInput) {
  return gameOverReport.incorrectTries.includes(guessInput) ? true : false;
};

const logBadGuesses = function(guessInput) {
  gameOverReport.incorrectTries.push(guessInput);
  gameOverReport.numberOfAttempts += 1;
};

const userInputToBool = function(input) {
  let lowCaseInput = input.toLowerCase();
  if (lowCaseInput[0] === 'n') return false;
  if (lowCaseInput === 'false') return false;
  if (lowCaseInput[0] === 'y') return true;
  if (lowCaseInput === 'true') return true;
  console.log('failure');
};

const gameReset = function() {
  gameOverReport = {
    secretNumber: Math.floor(Math.random() * 10),
    incorrectTries: [],
    numberOfAttempts: 0,
  };
};

const createOutputMessage = function(guessInput) {
  let outputMessage = '';
  if (!invalidInput(guessInput)) return invalidInputMessage;
  if (correctGuessCheck(guessInput)) return gameOverOutput;
  if (alreadyGuessed(guessInput)) {
    outputMessage = "You've already guessed that number. Try again.";
  } else {
    logBadGuesses(guessInput);
    if (guessTooLow(guessInput)) {
      outputMessage = 'Your guess was too low.';
    } else if (guessTooHigh(guessInput)) {
      outputMessage = 'Your guess was too high.';
    };
  }
  return outputMessage;
};

const gameOverOutput = function() {
  console.log(`You guessed the secret number! It took you ${gameOverReport.numberOfAttempts + 1} tries.`);
  runGame = false;
  console.log(`Here are all of your incorrect guesses: ${gameOverReport.incorrectTries}`);
  return 'Thanks for playing';
};

let gameOverReport = {};
let runGame = true;
let playAgain = true;

// MAIN GAME LOOP
do {
  console.log('Starting a new round of the number guesser game. Get Guessing!');
  gameReset();
  let readInstructions = prompt('Read instructions? (y/n): ')
  if (userInputToBool(readInstructions)) console.log(instructions);

  do {
    runGame = true;
    let answer = prompt("Guess a number: ");
    console.log(correctGuessCheck(answer) ? gameOverOutput() : createOutputMessage(answer));
    console.log("\n");
    // failsafe for quitting loop:
    if (answer === 'x' || answer === 'X') { break; };
  } while (runGame);  

  let playAgainCheck = prompt("Would you like to play again? (y/n)");
  playAgain = userInputToBool(playAgainCheck);
} while (playAgain);

console.log('Goodbye');
