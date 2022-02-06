/*-------------------------------- Constants --------------------------------*/
const winArray = [[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,4,6],[2,5,8],[3,4,5],[6,7,8]]




/*---------------------------- Variables (state) ----------------------------*/
let squArr, turn, winner




/*------------------------ Cached Element References ------------------------*/
const gameStat = document.querySelector('#message')
const board = document.querySelectorAll('.square')
const section = document.querySelector('.board')
const btn = document.querySelector('#reset-btn')

/*----------------------------- Event Listeners -----------------------------*/
section.addEventListener('click', handleClick)
btn.addEventListener('click', init)



/*-------------------------------- Functions --------------------------------*/

init()

function init(){
  squArr = [null, null, null, null, null, null, null, null, null]
  turn = 1
  winner = null
  render ();
}

function render(){
  squArr.forEach((elem, idx) => {
    if (elem === 1){
      board[idx].style.backgroundColor = 'green'
      board[idx].innerHTML = 'X'
    } else if (elem === -1){
      board[idx].style.backgroundColor = 'red'
      board[idx].innerHTML = 'O'
    } else { 
      board[idx].style.backgroundColor = 'white'
      board[idx].innerHTML = ''
    }
  })

  if (winner === null){ 
    gameStat.innerHTML = `${turn === 1 ? 'its player X turn' : 'its player O turn'}`
  } else {
    gameStat.innerHTML = `${winner === 'T' ? 'its a TIE' : 'congrats you win ' + winner }`
  }
}

function handleClick(evt){
  let index = parseInt(evt.target.id.replace('sq', ''))
  if (squArr[index] !== null){
    return
  } else if (winner !== null) {
    return 
  } else {
    squArr[index] = turn
    turn *= -1
  }
  getWinner()
  render()
}


function getWinner(){
  winArray.forEach(function(combo){
    let totalCheck = Math.abs(squArr[combo[0]] + squArr[combo[1]] + squArr[combo[2]])
    if (totalCheck === 3){
      winner = turn*-1
      return
    }
  })

  let tie = squArr.every(function(num){
    return num !== null
  })
  console.log(tie, 'tie')
  if (tie === true && winner === null){
    winner = 'T'
  }
}