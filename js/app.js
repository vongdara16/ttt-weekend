/*-------------------------------- Constants --------------------------------*/
const winArray = [[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,4,6],[2,5,8],[3,4,5],[6,7,8]]




/*---------------------------- Variables (state) ----------------------------*/
let squArr, turn, winner, windex




/*------------------------ Cached Element References ------------------------*/
const gameStat = document.querySelector('#message')
const board = document.querySelectorAll('.square')
const section = document.querySelector('#board')
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
      playerX(idx)
    } else if (elem === -1){
      playerO(idx)
    } else { 
      board[idx].style.backgroundColor = ''
      board[idx].style.opacity = ''
      board[idx].innerHTML = ''
    }
  })
  renderMsg()

  if (winner !== null && winner !== 'T'){
    confetti.start(3000);
  }
}

function playerX(idx){
  board[idx].style.backgroundColor = 'white'
  board[idx].style.opacity = 0.7
  board[idx].style.color = 'blue'
  board[idx].innerHTML = 'X'
}

function playerO(idx){
  board[idx].style.backgroundColor = 'white'
  board[idx].style.opacity = 0.7
  board[idx].style.color = 'red'
  board[idx].innerHTML = 'O'
}

function renderMsg(){
  let status = squArr.every(function(square){
    return square === null
  })
  if (status === true && winner === null){
    gameStat.innerHTML = 'Player 1 Start!'
  } else if (status === false && winner === null){
    gameStat.innerHTML = `${turn === 1 ? 'Turn: Player 1' : 'Turn: Player 2'}`
  } else if (winner === 'T'){
    gameStat.innerHTML = 'Tie Game! Play again!'
  } else {
    gameStat.innerHTML = `${turn === 1 ? 'Player 2 wins!' : 'Player 1 wins!'}`
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
  getTie()
  render()
  winColor(windex)
}


function getWinner(){
  winArray.forEach(function(combo){
    let totalCheck = Math.abs(squArr[combo[0]] + squArr[combo[1]] + squArr[combo[2]])
    if (totalCheck === 3){
      winner = turn*-1
      windex = [combo[0], combo[1], combo[2]]
      return
    }
  })
}

function winColor(windex){
  if (winner !== null && winner !== 'T'){
    board[windex[0]].style.backgroundColor = 'limegreen'
    board[windex[1]].style.backgroundColor = 'limegreen'
    board[windex[2]].style.backgroundColor = 'limegreen'
  }
}

function getTie(){
  let tie = squArr.every(function(square){
    return square !== null
  })
  if (tie === true && winner === null){
    winner = 'T'
  }
  
}