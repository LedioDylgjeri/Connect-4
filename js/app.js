/*--------------------------------- Const ----------------------------------*/
const winArr = [
  [0,1,2,3],
  [6,7,8,9],
  [12,13,14,15],
  [18,19,20,21],
  [24,25,26,27],
  [30,31,32,33],
  [1,2,3,4],
  [7,8,9,10],
  [13,14,15,16],
  [19,20,21,22],
  [25,26,27,28],
  [31,32,33,34],
  [2,3,4,5],
  [8,9,10,11],
  [14,15,16,17],
  [20,21,22,23],
  [26,27,28,29],
  [32,33,34,35],
  [0,6,12,18],
  [1,7,13,19],
  [2,8,14,20],
  [3,9,15,21],
  [4,10,16,22],
  [5,11,17,23],
  [6,12,18,24],
  [7,13,19,25],
  [8,14,20,26],
  [9,15,21,27],
  [10,16,22,28],
  [11,17,23,29],
  [12,18,24,30],
  [13,19,25,31],
  [14,20,26,32],
  [15,21,27,33],
  [16,22,28,34],
  [17,23,29,35],
  [8,13,3,18],
  [24,19,14,9],
  [19,14,9,4],
  [30,25,20,15],
  [25,20,15,10],
  [20,15,10,5],
  [11,16,21,26],
  [16,21,26,31],
  [17,22,27,32],
  [2,9,16,23],
  [1,8,15,22],
  [8,15,22,29],
  [0,7,14,21],
  [7,14,21,28],
  [14,21,28,35],
  [6,13,20,27],
  [13,20,27,34],
  [12,19,26,33],
]
/*--------------------------------- State ----------------------------------*/
let winner, player, board


/*-------------------- Chached Element references --------------------------*/
const message = document.getElementById('message')
const gameBoard = document.querySelectorAll('section > div')
const rstBtn = document.getElementById('rst-btn')


/*------------------------------ Event Listener -----------------------------*/
gameBoard.forEach(function(elm) {
  elm.addEventListener('click', handleClick)
})


/*--------------------------------- Functions ---------------------------------*/
init()
function init() {
  board = [
    null, null, null, null, null, null, null, 
    null, null, null, null, null, null, null, 
    null, null, null, null, null, null, null, 
    null, null, null, null, null, null, null, 
    null, null, null, null, null, null, null, 
    null, null, null, null, null, null, null, 
    null, null, null, null, null, null, null 
  ]
  winner = false
  player = 1
  rstBtn.setAttribute('hidden', true)
  renderBoard()
}

function renderBoard() {
  board.forEach(function(num, idx) {
    if(num === 1) {
      gameBoard[idx].style.backgroundColor = 'red'
    } else if(num === -1) {
      gameBoard[idx].style.backgroundColor = 'yellow'
    }  
  })
  
  if(!winner) {
    message.textContent = `It is ${player === 1 ? 'Red' : 'Yellow'}'s turn to choose`
  } else if(winner === 'tie') {
    message.textContent = `It's a tie 😑`
  } else {
    message.textContent = `🤩 Congratulations!!! ${winner === player ? 'Red' : 'Yellow'} won 🥳`
  }
}

function handleClick(){
  let cirIdx = parseInt(this.id)
  if(board[cirIdx] || winner) {
    return
  } else {
    cellAddSub = 35
    while(board[cirIdx + cellAddSub] !== null) {
      cellAddSub -= 7
    }  
    board[cirIdx + cellAddSub] = player
  }
  player *= -1
  rstBtn.removeAttribute('hidden')
  renderBoard()
  player = checkWinner()
}

function checkWinner() {
  let winCombo = []
  winArr.forEach(function(arr) {
    let comboVal = board[arr[0]] + board[arr[1]] + board[arr[2]] + board[arr[3]]
    winCombo.push(Math.abs(comboVal))
  })
  let winnersCombo = winCombo.some(function(value){
    return value === 4
  })
  if (winnersCombo === true) {
    return turn * -1
  } else if (!board.some(function(value){return value === null})){
    return 'T' 
  }
    return null
}
