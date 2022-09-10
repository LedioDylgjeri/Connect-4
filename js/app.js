import { winnersCombo } from "./combo.js"

/* ------------------------------- Constants ------------------------------------ */

/* --------------------------- Variables (state) -------------------------------- */
let player, winner, board


/* ----------------------- Cached Element Rererences ---------------------------- */
const message = document.getElementById('message')
const boardEl = document.querySelectorAll('section > div')
const rstButton = document.getElementById('rst-btn')

/* ------------------------------ Functions ------------------------------------- */
init()

function init() {
  board = [
    null, null, null, null, null, null, null, null, null, null, null,
    null, null, null, -1, null, null, 1, null, null, null, null,
    null, null, null, null, null, null, null, null, null, null, 
    null, null, null, null, null, null, null, null, null, null
  ]
  player = 1
  winner = null
  startGame()
}

function startGame() {
  board.forEach((circle, idx) => {
    let cirColor
    if(circle === 1) {
      cirColor = 'red'
    } else if(circle === -1) {
      cirColor = 'yellow'
    } else if(circle === null) {
      cirColor = ''
    }
    boardEl[idx].style.backgroundColor = cirColor
  })
  
  if(!winner) {
    message.textContent = `It is ${player === 1 ? 'Red' : 'Yellow'}'s turn to choose`
  } else if(winner === 'tie') {
    message.textContent = `It's a tie 😑`
  } else {
    message.textContent = `🤩 Congratulations!!! ${winner === 1 ? 'Red' : 'Yellow'} won 🥳`
  }
}

