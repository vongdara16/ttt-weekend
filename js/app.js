/*-------------------------------- Constants --------------------------------*/
// define 8 possible winning combos as an array of arrays (nested arrays)
  // each array will contain three indexes of the board that make a winner if they hold the same value
const winArray = [
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [1,4,7],
  [2,4,6],
  [2,5,8],
  [3,4,5],
  [6,7,8],
]


/*---------------------------- Variables (state) ----------------------------*/
let squArr, turn, winner
// winner will represent 3 different game states
  // player won | tie | game still in play
  // console.log(squArr, turn, winner)


/*------------------------ Cached Element References ------------------------*/
// const topL = document.querySelector('.square')
// const topM = document.querySelector('.square')
// const topR = document.querySelector('.square')
// const midL = document.querySelector('.square')
// const midM = document.querySelector('.square')
// const midR = document.querySelector('.square')
// const botL = document.querySelector('.square')
// const botM = document.querySelector('.square')
// const botR = document.querySelector('.square')
const gameStat = document.querySelector('#message')
const board = document.querySelectorAll('.square')

// console.log(board)


/*----------------------------- Event Listeners -----------------------------*/



/*-------------------------------- Functions --------------------------------*/

init()
// call init function
function init(){
  // init func. will init vars
  squArr = [1, null, null, 1, null, null, -1, -1, null,]
    //  init board array to 9 nulls
  let boardArray = squArr.map(function(elem, idx){
    return board[idx] = elem
  })
  // console.log(boardArray)
      // the 9 elems will map to each square
      // idx 0 is topL | idx 1 is topM | idx 8 is botR
  turn = -1
    // init whose turn it is to 1 (player X)
      // player O will be -1
  winner = null
    // init winner var to null
      // this reps that there is no winner or tie
      // the winner var will hold the player value (1 or -1)
      // winner will hold a 'T' for tie
  render (boardArray);
  // render those state vars to the page with render func
  // console.log(squArr, turn, winner)
}

function render(boardArray){
  // render func
  // console.log(boardArray, 'render func')
  //loop over the board array
  boardArray.forEach((elem, idx) => {
    console.log('elem', elem, 'idx', idx)
    // for each iteration
    // use the index of the iteration to access the square in the squares array that corresponds w/ the current cell being iterated over in the board array
    if (elem === 1){
      const randSq = document.querySelector(`#sq${idx}`)
      randSq.style.backgroundColor = 'blue'

    } else if (elem === -1){
      const randSq = document.querySelector(`#sq${idx}`)
      randSq.style.backgroundColor = 'red'
      
    } else { // may not need this else. only used for null. 
      const randSq = document.querySelector(`#sq${idx}`)
      randSq.style.backgroundColor = 'white'
      
    }
    // style that square however you wish, dependant on the value contained in the current cell being iterated over (-1, 1, or null)
  })

  if (winner === null){ // how i understand it, null means game is still in play. no winner is decided
    gameStat.innerHTML = `${turn === 1 ? 'its player X turn' : 'its player O turn'}`
    console.log(`${turn === 1 ? 'its player X turn' : 'its player O turn'}`)
  } else {
    gameStat.innerHTML = `${winner === 'T' ? 'its a TIE' : 'congrats you win ' + winner }`
    console.log(`${winner === 'T' ? 'its a TIE' : 'congrats you win ' + winner }`)
  }
  // render msg reflecting current state of the game
    // if winner has a value other than null (game is still in progress), render whose turn it is
      //use a ternary inside template literal to display the msg or choose whose turn it is.
    // if winner is equal to T, render msg tie. 
    // otherwise, render congrats for winning. 
      // use another ternary inside template literal
  
}
// after completing this step, you should be able to manually change the values held in the board array in the init func and see the style of the corresponding square change on your page. 

