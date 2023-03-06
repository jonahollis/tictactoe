document.querySelectorAll('button').forEach(button => {
	button.addEventListener('click', () => {
	  play(button, button.id);
	});
});


let currentPlayer = 'X';
const board = ['', '', '', '', '', '', '', '', ''];
const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];


function play(cell, index) {
	if(cell.id !== 'reset'){
		board[index] = currentPlayer;
		cell.innerText = currentPlayer;
		document.getElementById('player-turn').innerText = `Player ${currentPlayer}'s Turn`
		cell.disabled = true;

		if (checkWin()) {
			alert(currentPlayer + ' wins!');
			reset();
		} else if (board.every(cell => cell !== '')) {
			alert('Tie game!');
			reset();
		} else {
			currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
		}
	}else{
		reset()
	}
  
}

function checkWin() {
  return winningConditions.some(condition => {
	return condition.every(index => {
	  return board[index] === currentPlayer;
	});
  });
}

function reset() {
  board.fill('');
  currentPlayer = 'X';
  document.querySelectorAll('button').forEach(button => {
	button.innerText = '';
	button.disabled = false;
  })
  document.getElementById('reset').innerText = 'Reset';
}






// window.addEventListener('DOMContentLoaded', () => {
// 	const tiles = Array.from(document.querySelectorAll('.tile'))
// 	const playerDisplay = document.querySelector('.display-player')
// 	const resetButton = document.querySelector('#reset')
// 	const announcer = document.querySelector('.announcer')
// 	const PLAYER_X_CLASS = 'X'
// 	const PLAYER_O_CLASS = 'O'
// 	const winningConditions = [
// 		[0, 1, 2],
// 		[3, 4, 5],
// 		[6, 7, 8],
// 		[0, 3, 6],
// 		[1, 4, 7],
// 		[2, 5, 8],
// 		[0, 4, 8],
// 		[2, 4, 6]
// 	]
// 	const TIE = 'TIE'
// 	let board = ['', '', '', '', '', '', '', '', '']
// 	let currentPlayer = 'X';
// 	let isGameActive = true;

// 	const isValidAction = (tile) => {
// 		if (tile.innerText === 'X' || tile.innerText === 'O'){
// 			return false;
// 		}
	
// 		return true;
// 	};

// 	const updateBoard =  (index) => {
// 		board[index] = currentPlayer;
// 	}

// 	const changePlayer = () => {
// 		playerDisplay.classList.remove(`player${currentPlayer}`);
// 		currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
// 		playerDisplay.innerText = currentPlayer;
// 		playerDisplay.classList.add(`player${currentPlayer}`);
// 	}

// 	const announce = (type) => {
// 		switch(type){
// 		   case PLAYER_O_CLASS:
// 				announcer.innerHTML = 'Player <span class="playerO">O</span> Won';
// 				break;
// 		   case PLAYER_X_CLASS:
// 				announcer.innerHTML = 'Player <span class="playerX">X</span> Won';
// 				break;
// 		   case TIE:
// 				announcer.innerText = 'Tie';
// 			}
// 		announcer.classList.remove('hide');
// 	}

// 	function handleResultValidation() {
// 		let roundWon = false;
// 		for (let i = 0; i <= 7; i++) {
// 		  const winCondition = winningConditions[i];
// 		  const a = board[winCondition[0]];
// 		  const b = board[winCondition[1]];
// 		  const c = board[winCondition[2]];
// 		  if (a === "" || b === "" || c === "") {
// 			continue;
// 		  }
// 		  if (a === b && b === c) {
// 			roundWon = true;
// 			break;
// 		  }
// 		}
	  
// 		if (roundWon) {
// 		  announce(currentPlayer === "X" ? PLAYER_X_CLASS : PLAYER_O_CLASS);
// 		  isGameActive = false;
// 		  return;
// 		}
	  
// 		if (!board.includes("")) announce(TIE);
// 	  }

// 	  const userAction = (tile, index) => {
// 		if (isValidAction(tile) && isGameActive) {
// 		  tile.innerText = currentPlayer;
// 		  tile.classList.add(`player${currentPlayer}`);
// 		  updateBoard(index);
// 		  handleResultValidation();
// 		  changePlayer();
// 		}
// 	  }

// 	  tiles.forEach( (tile, index) => {
// 		tile.addEventListener('click', () => userAction(tile, index));
// 	})

// 	const resetBoard = () => {
// 		board = ['', '', '', '', '', '', '', '', ''];
// 		isGameActive = true;
// 		announcer.classList.add('hide');
	
// 		if (currentPlayer === 'O') {
// 			changePlayer();
// 		}
	
// 		tiles.forEach(tile => {
// 			tile.innerText = '';
// 			tile.classList.remove('playerX');
// 			tile.classList.remove('playerO');
// 		});
// 	}

// 	resetButton.addEventListener('click', resetBoard)


// })






// const PLAYER_X_CLASS = 'X'
// const PLAYER_O_CLASS = 'O'
// const WINNING_COMBINATIONS = [
// 	[0, 1, 2],
// 	[3, 4, 5],
// 	[6, 7, 8],
// 	[0, 3, 6],
// 	[1, 4, 7],
// 	[2, 5, 8],
// 	[0, 4, 8],
// 	[2, 4, 6]
// ]

// localStorage.clear()

// localStorage.setItem("Player's Turn", PLAYER_X_CLASS)

// document.getElementById('1').addEventListener('click', addXOrO)
// document.getElementById('reset').addEventListener('click', clearBoard)

// function addXOrO(){
// 	if((localStorage.getItem("Player's Turn") === PLAYER_X_CLASS)){
// 		console.log('Player X makes move!')
// 		document.getElementById('1').innerText = PLAYER_X_CLASS
// 		localStorage.setItem("Player's Turn", PLAYER_O_CLASS)
// 	}else if((localStorage.getItem("Player's Turn") === PLAYER_O_CLASS)){
// 		console.log('Player O makes move!')
// 		document.getElementById('1').innerText = PLAYER_O_CLASS
// 		localStorage.setItem("Player's Turn", PLAYER_X_CLASS)
// 	}
	

// }

// function clearBoard(){
// 	localStorage.clear()
// 	document.getElementById('1').innerHTML = ''
// 	console.log('reset clicked')
// 	localStorage.setItem("Player's Turn", PLAYER_X_CLASS)
// }

