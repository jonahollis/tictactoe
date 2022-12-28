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

localStorage.clear()

localStorage.setItem("Player's Turn", PLAYER_X_CLASS)

document.getElementById('1').addEventListener('click', addXOrO)

function addXOrO(){
	if((localStorage.getItem("Player's Turn") === PLAYER_X_CLASS)){
		console.log('it works!')
		document.getElementById('1').innerText = PLAYER_X_CLASS
		localStorage.setItem("Player's Turn", PLAYER_O_CLASS)
	}else if((localStorage.getItem("Player's Turn") === PLAYER_O_CLASS)){
		console.log('it works!')
		document.getElementById('1').innerText = PLAYER_O_CLASS
		localStorage.setItem("Player's Turn", PLAYER_X_CLASS)
	}
	

}


