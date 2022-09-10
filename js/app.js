/* ------------------------------- Constants ------------------------------------ */


/* --------------------------- Variables (state) -------------------------------- */
const message = document.getElementById('#meesage')
const boardEl = document.querySelector('section')
console.log(boardEl);
const rstButton = document.getElementById('#rst-btn')


/* ----------------------- Cached Element Rererences ---------------------------- */
boardEl.addEventListener('click', function(evt) {
  console.log(evt.target);
})


/* ------------------------------ Functions ------------------------------------- */


