const readline = require('readline');
var randomWords = require('random-words');
var readlineSync = require('readline-sync');
var colors = require('colors');

let hangMan = [`
  +---+
  |   |
      |
      |
      |
      |
=========
`, `
  +---+
  |   |
  O   |
      |
      |
      |
=========
`, `
  +---+
  |   |
  O   |
  |   |
      |
      |
=========
`, `
  +---+
  |   |
  O   |
 /|   |
      |
      |
=========
`, `
  +---+
  |   |
  O   |
 /|\\\  |
      |
      |
=========
`, `
  +---+
  |   |
  O   |
 /|\\\  |
 /    |
      |
=========
`, `
  +---+
  |   |
  O   |
 /|\\\  |
 / \\\  |
      |
=========
`];

let theWord = randomWords().split('');
let spacesForWord = theWord.map(elem => {
  return '_';
});
let counter = 0;
let wordsUsed = [];

console.log(spacesForWord);
console.clear();

//show which letters were used already 
//add colors to the game
//



// check if game is won or lost, and then write a cover function to cover the game itself called runGame
function startGame(){
    if(readlineSync.keyInYNStrict("Welcome to Hangman! Are you ready to play? Please say 'Y' for"
    + " yes or 'N' for no        ")){
      let choices = ['SinglePlayer', 'Multiplayer'];
      let userChoice = (readlineSync.keyInSelect(choices, 'Would you like to play single player or multiplayer?'));
      if(userChoice === 0){
        console.log('Cool, lets begin!');
        runGame();
      }
      else if(userChoice === 1){
          getWordFromPlayer1(); 
          runMultiplayerGame();
      }
    }
    else{
      console.log('Why arent you ready yet');
      startGame();
    }
}

function runGame(){
  displayBoard();
  isItInWord(askForLetter());
  if(checkIfUserWon()){
    displayBoard();
    console.log(`Congratulations!!! You won! The word was ${theWord.reduce((word, current) =>{
      return word + current;
    })} `);
  }
  else if(checkIfuserLost()){
    displayBoard();
    console.log(`Oof, you lost, better luck next time! The word was ${theWord.reduce((word, current) =>{
      return word + current;
    })}`);
  }
  else{
    runGame();
  }
}

function runMultiplayerGame(){
  displayBoard();
  isItInWord(askForLetter());
  if(checkIfUserWon()){
    displayBoard();
    console.log(`Congratulations Player 2!!! You won! The word was ${theWord.reduce((word, current) =>{
      return word + current;
    })} `);
  }
  else if(checkIfuserLost()){
    displayBoard();
    console.log(`Wow Player 1, that was a hard word! You win! The word was  ${theWord.reduce((word, current) =>{
      return word + current;
    })}`);
  }
  else{
    runMultiplayerGame();
  }
}

function getWordFromPlayer1(){
  let player1 = readlineSync.question('Alright! Player 1, please give me a word that is larger than 3 letters' 
          + ' but is less than 15 letters        ', {hideEchoBack: true}).toLowerCase().trim();
        if(player1.length < 3 || player1 > 15){
          console.log('Hey Pay attention to my instructions!');
          getWordFromPlayer1();
        }
        theWord = player1.split('');
        spacesForWord = theWord.map(elem => {
          return '_';
        });
        console.log('Alright Player 2, try to guess the word!');



}


function displayBoard(){
  console.log(hangMan[counter]);
  console.log(spacesForWord);
  console.log(`Words used ${wordsUsed}`);
}

function askForLetter(){
  let currentLet = readlineSync.question('Guess a letter please    ').toLowerCase().trim();
  if(currentLet.split('').length > 1){
    console.log('You input too many letters!! please only guess 1 letter');
    askForLetter();
  }
  else if(wordsUsed.indexOf(currentLet) !== -1){
    console.log('You already used that letter! Pick another one!')
    askForLetter();
  }
  else{
    wordsUsed.push(currentLet);
    return currentLet;
  }
}

function isItInWord(letter){
  let input = theWord.indexOf(letter);
  let indexes = [];
  for(let i = 0; i < theWord.length; i++){
    if(letter === theWord[i]){
      indexes.push(i);
    }
  }
  if(input === -1){
    wrongInput();
    console.log('you guessed wrong hue'); 
  }
  else{
    for(let i = 0; i< indexes.length; i++){
      spacesForWord[indexes[i]] = theWord[indexes[i]]
    }
  }
}

function wrongInput(){
  counter++;
}

function checkIfuserLost(){
    return counter === 7;
}

function checkIfUserWon(){
  return spacesForWord.indexOf('_') === -1;
}
  



  startGame();

