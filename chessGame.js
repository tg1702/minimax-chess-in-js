//Uses the chess.js library to play a "random" game of chess

import { Chess } from './node_modules/chess.js/dist/chess.js'

var board1 = null
var game = new Chess()

function onDragStart (source, piece, position, orientation) {
  // do not pick up pieces if the game is over
  if (game.isGameOver()){ 
    console.log(game.pgn())
    return false
  }

  // only pick up pieces for White
  if (piece.search(/^b/) !== -1) return false
}



function makeComputerMove(){
  let value = minimax(4, game, null, -999999, 999999)
  console.log(value)
  game.move(value[1])
  
  board1.position(game.fen())
  
}

function minimax(depth, state, best_move, alpha, beta, maxPlayer=true){
 
  let possibleMoves = state.moves()
  let mates = []
  let checks = []
  let captures = []
  let normal = []
  let sorted = []
  let child = null
  
 
  for (let i = 0; i< possibleMoves.length; i++){
    if (possibleMoves[i].indexOf('x') != -1){
      captures.push(possibleMoves[i])
    }
    
    else if (possibleMoves[i].indexOf('+') != -1 ){
      checks.push(possibleMoves[i])
    }
    else if (possibleMoves[i].indexOf('#') != -1){
      mates.push(possibleMoves[i])
    }

    else{
      normal.push(possibleMoves[i])
    }

  }
  sorted = [].concat(mates, checks, captures, normal)

  
  
  if (possibleMoves.length == 0 || depth <= 0){
    return evaluatedPos(state, maxPlayer)
  }

  
  
  if (maxPlayer){

    let value = -9999999

 
    for(let i=0; i< sorted.length; i++){
      child = new Chess(state.fen())
      child.move(sorted[i])
      
      let calcVal = minimax(depth - 1, child, best_move, alpha, beta, !maxPlayer)[0]

      if (calcVal > value){
        best_move = sorted[i]
      }
       

      value = Math.max(calcVal, value )
  
     
      alpha = Math.max(alpha, value);
      
      if(beta <= alpha) 
          break
      
    }
   
   
      

    return [alpha, best_move]
  }
  else{

    let value = 9999999

    for(let i=0; i< sorted.length; i++){
      
      child = new Chess(state.fen())
      child.move(sorted[i])


      let calcVal = minimax(depth - 1, child, best_move, alpha, beta, !maxPlayer)[0]

      if (calcVal < value)
        best_move = sorted[i]

      value = Math.min(calcVal, value )
  
      
      beta = Math.min(beta, value);
      

      if(beta <= alpha) 
          break  

      
    }
    
    
      
    
    return [beta, best_move]
  }

  

}

function evaluatedPos(state, maxPlayer){
  let n = state.fen().split(' ')[0]
  let FEN = n.split('')

  let whiteEval = 0
  let blackEval = 0
  let legalMoves = state.moves()
  



    FEN.forEach( function(char){

      switch(char){
        case "p":
          blackEval += 1
          break
        case "n":
          blackEval += 3
          break
        case "q":
          blackEval += 9
          break
        case "b":
          blackEval += 3.1
          break
        case "r":
          blackEval += 5
          break
        case "k":
          blackEval += 100
          break

          case "P":
            whiteEval += 1
            break
          case "N":
            whiteEval += 3
            break
          case "Q":
            whiteEval += 9
            break
          case "B":
            whiteEval += 3.1
            break
          case "R":
            whiteEval += 5
            break
          case "K":
            whiteEval += 100
            break
      }
        
    })
  

  //console.log(state._history)

  legalMoves.forEach(function(legalMove){
    if (legalMove.indexOf("B")){
      blackEval += 0.01
    }
    if (legalMove.indexOf("N")){
      blackEval += 0.01
    }
    if (legalMove.indexOf("R")){
      blackEval += 0.01
    }
  
    
  })

  if (state.get('e8').type == 'r' && state.get('g8').type == 'k'){
    blackEval += 1
  }

  if (state.get('e1').type == 'r' && state.get('g1').type == 'k'){
    whiteEval += 1
  }

  if (state.isCheckmate()){
   
    maxPlayer ? whiteEval = 1000 : blackEval = 1000
  }
  

  return [(blackEval - whiteEval), state] 


}

function onDrop (source, target) {
  // see if the move is legal
  var move = game.move({
    from: source,
    to: target,
    promotion: 'q' // NOTE: always promote to a queen for example simplicity
  })



  // illegal move
  if (move === null) return 'snapback'

  window.setTimeout(makeComputerMove, 1000)
  
}


// update the board position after the piece snap
// for castling, en passant, pawn promotion
function onSnapEnd () {
  board1.position(game.fen())
}

function onMoveEnd(){
  console.log("end")
  
}

var config = {
  draggable: true,
  position: 'start',
  onDragStart: onDragStart,
  onDrop: onDrop,
  onSnapEnd: onSnapEnd,
  onMoveEnd: onMoveEnd,
}



board1 = Chessboard('board1', config)  //first parameter must contain a number??
