/* ------------------------------- Constants ------------------------------------ */


/* --------------------------- Variables (state) -------------------------------- */
let player, winner, board, redPlayer, yellowPlayer
let currentPlayer = redPlayer
let rows 
let columns



/* ----------------------- Cached Element Rererences ---------------------------- */
const message = document.getElementById('message')
const boardEl = document.getElementById('game-board')
const rstButton = document.getElementById('rst-btn')

/* --------------------------- Event Listeners ---------------------------------- */



/* ------------------------------ Functions ------------------------------------- */
init()

function init() {
  currentPlayer
  winner = false
  readyBoard()
  // startGame()
}

function readyBoard() {
  board = []
  for(let rowNum = 0; rowNum < 6; rowNum++) {
    let row = []
    for(let colNum = 0; colNum < 7; colNum++) {
      row.push(' ')
      let divEl = document.createElement('div')
      divEl.id = `${rowNum.toString()}  ${colNum.toString()}`
      boardEl.append(divEl)
    }
    board.push(row)
  }
}
console.log(boardEl);


// function startGame() {
//   board.forEach(function(cir, idx) {
//     let elColor
//     boardEl[idx].textContent = num
//     if(board[idx] === 1) {
//       elColor = 'red'
//     } if (board[idx] === -1) {
//       elColor = 'yellow'
//     } if (board[idx] === null) {
//       elColor = ''
//     }
//     boardEl[idx].style.backgroundColor = elColor
//   }) 
//   if(!winner) {
//     message.textContent = `It is ${player === currentPlayer ? 'Red' : 'Yellow'}'s turn to choose`
//   } else if(winner === 'tie') {
//     message.textContent = `It's a tie 😑`
//   } else {
//     message.textContent = `🤩 Congratulations!!! ${winner === currentPlayer ? 'Red' : 'Yellow'} won 🥳`
//   }
// }

// function chooseCir (evt) {
//   let boardIndex = parseInt(evt.target.id)
//   // let rowIdx = parseInt(boardIndex[0])
//   // let colIdx = parseInt(boardIndex[1])
//   console.log(boardIndex);
// }
