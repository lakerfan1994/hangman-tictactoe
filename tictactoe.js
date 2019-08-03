const readline = require('readline');
var randomWords = require('random-words');
var readlineSync = require('readline-sync');
var colors = require('colors');


let board = ['____', '____','____','____','____','____','____','____','____',];
let player1Turn = false;
let position = ['top left', 'top middle', 'top right', 'middle left', 'middle', 'middle right', 'bottom left', 'bottom middle', 'bottom right'];

function displayBoard(){
	let tempBoard1 = [board[0], board[1], board[2]];
	let tempBoard2 = [board[3], board[4], board[5]];
	let tempBoard3 = [board[6], board[7], board[8]];

	console.log(tempBoard1);
	console.log('');
	console.log(tempBoard2);
	console.log('')
	console.log(tempBoard3);
}


function startGame(){
  if(readlineSync.keyInYNStrict("Welcome to Tic Tac Toe! Are you ready to play? Please say 'Y' for"
    + " yes or 'N' for no        ")){
  		console.log("Alright!!! Lets begin!!! Player 1 is 'X's and Player 2 is 'O's ");
  		runGame();
  }
  else {
  	console.log('Well..... HURRY UP AND GET READY!!!')
  	startGame();
  }
}

function runGame(){
	displayBoard();
	runTurn();
	if(checkIfSomeoneWon()){
		if(player1Turn){
			displayBoard();
			console.log('Congratulations Player 1!! You beat them');
		}
		else{
			displayBoard();
			console.log('Congratulations Player 2!! You beat them');
		}
	}
	else {
		runGame();
	}



}

function runTurn(){
	if(player1Turn){
		player1Turn = false;
	}
	else{
		player1Turn = true;
	}

	let userChoice;


	if(player1Turn){
		userChoice = (readlineSync.keyInSelect(position, 'Player 1, please select where to put your next X'));	
	}
	else{
		 userChoice = (readlineSync.keyInSelect(position, 'Player 2, please select where to put your next O'));
	}
	console.log(userChoice);
	switch(userChoice){
		case 0: addPiece(0);
		break
		case 1: addPiece(1);
		break
		case 2: addPiece(2);
		break
		case 3: addPiece(3);
		break
		case 4: addPiece(4);
		break
		case 5: addPiece(5);
		break
		case 6: addPiece(6);
		break
		case 7: addPiece(7);
		break
		case 8: addPiece(8);
		break
	}
}


function addPiece(num){
	if(position[num] !== 'taken'){
		if(player1Turn){
			board[num] = '  X  ';
			position.splice(num, 1, 'taken');
		}
		else{
			board[num] = '  O  ';
			position.splice(num, 1, 'taken');
		}
	}
	else{
		console.log('You cant take that spot! Try again!')
		if(player1Turn){
			player1Turn = false;
		}
		else{
			player1Turn = true;
		}	
	}
}


function checkIfSomeoneWon(){
	console.log()
	if(board[0] === '  X  ' && board[3] === '  X  ' && board[6] === '  X  ' ||
		board[1] === '  X  ' && board[4] === '  X  ' && board[7] === '  X  ' ||
		board[2] === '  X  ' && board[5] === '  X  ' && board[8] === '  X  ' ||
		board[0] === '  X  ' && board[1] === '  X  ' && board[2] === '  X  ' ||
		board[3] === '  X  ' && board[4] === '  X  ' && board[5] === '  X  ' ||
		board[6] === '  X  ' && board[7] === '  X  ' && board[8] === '  X  ' ||
		board[0] === '  X  ' && board[4] === '  X  ' && board[8] === '  X  ' ||
		board[2] === '  X  ' && board[4] === '  X  ' && board[6] === '  X  '){
		return true;
	}
	else if(
		board[0] === '  O  ' && board[3] === '  O  ' && board[6] === '  O  ' ||
		board[1] === '  O  ' && board[4] === '  O  ' && board[7] === '  O  ' ||
		board[2] === '  O  ' && board[5] === '  O  ' && board[8] === '  O  ' ||
		board[0] === '  O  ' && board[1] === '  O  ' && board[2] === '  O  ' ||
		board[3] === '  O  ' && board[4] === '  O  ' && board[5] === '  O  ' ||
		board[6] === '  O  ' && board[7] === '  O  ' && board[8] === '  O  ' ||
		board[0] === '  O  ' && board[4] === '  O  ' && board[8] === '  O  ' ||
		board[2] === '  O  ' && board[4] === '  O  ' && board[6] === '  O  '
	){
		return true;
	}

	return false;

}




startGame();


