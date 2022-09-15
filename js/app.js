import { winArr } from './data.js';

/*--------------------------------- State ----------------------------------*/
let winner, player, board


/*-------------------- Chached Element references --------------------------*/
const message = document.getElementById('message')
const gameBoard = document.querySelectorAll('section > div')
const rstBtn = document.getElementById('rst-btn')
const mediaQuery = window.matchMedia('(max-width: 600px)')
const redSound = new Audio('../assets/audio/red.mp3')
const yellowSound = new Audio('../assets/audio/yellow.mp3')
const gameOver = new Audio('../assets/audio/gameover.wav')
const playAgain = new Audio('../assets/audio/playagain.mp3')

/*------------------------------ Event Listener -----------------------------*/
gameBoard.forEach(function(elm) {
  elm.addEventListener('click', handleClick)
})

rstBtn.addEventListener('click', reset)


/*--------------------------------- Functions --------------------------------*/
init()

function init() {
  board = new Array(42).fill(null)
  winner = null
  player = 1
  rstBtn.setAttribute('hidden', true)
  renderBoard()
  message.textContent = 'Click any ⚪️ to start game'
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
    if(mediaQuery.matches) {
      if(num === 1) {
        bcgColor = 'magenta'
      }
      if(num === -1) {
        bcgColor = 'lime'
      }
      if(num === null) {
        bcgColor = ''
      }
    }
    gameBoard[idx].style.backgroundColor = bcgColor
  })
  if(!winner) {
    message.textContent = `It is ${player === 1 ? 'Red' : 'Yellow'}'s turn to choose`
  } else if(winner === 'tie') {
    message.textContent = `The game is a tie 😑`
  } else {
    message.textContent = `🤩 Congratulations‼️ ${winner === 1 ? 'Red' : 'Yellow'} won 🥳`
  }
  if(mediaQuery.matches) {
    if(!winner) {
      message.textContent = `It is ${player === 1 ? 'Magenta' : 'Lime'}'s turn to choose`
    } else if(winner === 'tie') {
      message.textContent = `The game is a tie 😤`
    } else {
      message.textContent = `✨ Congratulations‼️ ${winner === 1 ? 'Magenta' : 'Lime'} won 😎`
    }
  }
}

function handleClick(){
  let cirIdx = parseInt(this.id)
  if(board[cirIdx] || winner) { return }
  else {
    let circles = 35
    while (board[cirIdx + circles] !== null) {
      circles -= 7
    }  
    board[cirIdx + circles] = player
  }
  player *= -1
  if(player === 1) {
    redSound.volume = .50
    redSound.currentTime = 1
    redSound.play()
  }
  if(player === -1) {
    yellowSound.volume = .50
    yellowSound.currentTime = 1
    yellowSound.play()
  }
  if(mediaQuery.matches) {
    if(player === 1) {
      redSound.volume = .10
      redSound.currentTime = .2
      redSound.play()
    }
    if(player === -1) {
      yellowSound.volume = .10
      yellowSound.currentTime = .2
      yellowSound.play()
    }
  }
  rstBtn.removeAttribute('hidden')
  winner = checkWinner()
  renderBoard()
}

function checkWinner() {
  for (let i = 0; i < winArr.length; i++) {
    let total = board[winArr[i][0]] + board[winArr[i][1]] + board[winArr[i][2]] + board[winArr[i][3]]
    if(Math.abs(total) === 4) {
      gameOver.volume = .10
      gameOver.play()
      confetti.start(4000)
      if(mediaQuery.matches){
      gameOver.volume = .10
      gameOver.currentTime = .4
      gameOver.play()
      confetti.start(4000)
      }
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
  playAgain.volume = .10
  playAgain.play()
  if(mediaQuery.matches) {
    playAgain.volume = .10
    playAgain.currentTime = .1
    playAgain.play()
  }
  init()
}
