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


