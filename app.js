const PLAYER_X_CLASS = 'X'
const PLAYER_O_CLASS = 'O'
const WINNING_COMBINATIONS = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6]
]



document.getElementById('1').addEventListener('click', addXOrO)

function addXOrO(){
    document.getElementById('1').innerText='X'
}