/*--------------------------------- Const ----------------------------------*/
const winArr = [
  [0, 1, 2, 3],
  [41, 40, 39, 38],
  [7, 8, 9, 10],
  [34, 33, 32, 31],
  [14, 15, 16, 17],
  [27, 26, 25, 24],
  [21, 22, 23, 24],
  [20, 19, 18, 17],
  [28, 29, 30, 31],
  [13, 12, 11, 10],
  [35, 36, 37, 38],
  [6, 5, 4, 3],
  [0, 7, 14, 21],
  [41, 34, 27, 20],
  [1, 8, 15, 22],
  [40, 33, 26, 19],
  [2, 9, 16, 23],
  [39, 32, 25, 18],
  [3, 10, 17, 24],
  [38, 31, 24, 17],
  [4, 11, 18, 25],
  [37, 30, 23, 16],
  [5, 12, 19, 26],
  [36, 29, 22, 15],
  [6, 13, 20, 27],
  [35, 28, 21, 14],
  [0, 8, 16, 24],
  [41, 33, 25, 17],
  [7, 15, 23, 31],
  [34, 26, 18, 10],
  [14, 22, 30, 38],
  [27, 19, 11, 3],
  [35, 29, 23, 17],
  [6, 12, 18, 24],
  [28, 22, 16, 10],
  [13, 19, 25, 31],
  [21, 15, 9, 3],
  [20, 26, 32, 38],
  [36, 30, 24, 18],
  [5, 11, 17, 23],
  [37, 31, 25, 19],
  [4, 10, 16, 22],
  [2, 10, 18, 26],
  [39, 31, 23, 15],
  [1, 9, 17, 25],
  [40, 32, 24, 16],
  [9, 17, 25, 33],
  [8, 16, 24, 32],
  [11, 17, 23, 29],
  [12, 18, 24, 30],
  [1, 2, 3, 4],
  [5, 4, 3, 2],
  [8, 9, 10, 11],
  [12, 11, 10, 9],
  [15, 16, 17, 18],
  [19, 18, 17, 16],
  [22, 23, 24, 25],
  [26, 25, 24, 23],
  [29, 30, 31, 32],
  [33, 32, 31, 30],
  [36, 37, 38, 39],
  [40, 39, 38, 37],
  [7, 14, 21, 28],
  [8, 15, 22, 29],
  [9, 16, 23, 30],
  [10, 17, 24, 31],
  [11, 18, 25, 32],
  [12, 19, 26, 33],
  [13, 20, 27, 34],
]
/*--------------------------------- State ----------------------------------*/
let winner, player, board


/*-------------------- Chached Element references --------------------------*/
const message = document.getElementById('message')
const gameBoard = document.querySelectorAll('section > div')
// const startBtn = document.getElementById('start-btn')
const rstBtn = document.getElementById('rst-btn')
const favacon =


/*------------------------------ Event Listener -----------------------------*/

gameBoard.forEach(function(elm) {
  elm.addEventListener('click', handleClick)
})

// startBtn.addEventListener('click', startGame)

rstBtn.addEventListener('click', reset)

/*--------------------------------- Functions ---------------------------------*/
// function startGame() {
// }

init()
function init() {
  board = new Array(42).fill(null)
  winner = null
  player = 1
  rstBtn.setAttribute('hidden', true)
  renderBoard()
}

function renderBoard() {
  board.forEach((num, idx) => {
    let bcgColor
    if(num === 1) {
      bcgColor = 'red'
    } else if(num === -1) {
      bcgColor = 'yellow'
    } else if(num === null) {
      bcgColor = ''
    } 
    gameBoard[idx].style.backgroundColor = bcgColor
  })
  if(!winner) {
    message.textContent = `It is ${player === 1 ? 'Red' : 'Yellow'}'s turn to choose`
  } else if(winner === 'tie') {
    message.textContent = `The game is a tie 😑`
  } else {
    message.textContent = `🤩 Congratulations!!! ${winner === 1 ? 'Red' : 'Yellow'} won 🥳`
  }
}

function handleClick(){
  let cirIdx = parseInt(this.id)
  if(board[cirIdx] || winner) {
    return
  } else {
    rowSub = 35
    while(board[cirIdx + rowSub] !== null) {
      rowSub -= 7
    }  
    board[cirIdx + rowSub] = player
  }
  player *= -1
  rstBtn.removeAttribute('hidden')
  winner = checkWinner()
  renderBoard()
}

function checkWinner() {
  for (let i = 0; i < winArr.length; i++) {
    let total = board[winArr[i][0]] + board[winArr[i][1]] + board[winArr[i][2]] + board[winArr[i][3]]
    if (Math.abs(total) === 4) {
      return board[winArr[i][0]]
    }
  }
  if(!board.includes(null)) {
    return 'tie'
  } else {
    return null
  }
}

function reset() {
  init()
  message.textContent = 'Click any circle to start game'
}