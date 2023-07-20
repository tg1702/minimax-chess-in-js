//Uses the chess.js library to play a "random" game of chess

import { Chess } from './node_modules/chess.js/dist/chess.js'

var board1 = null
var game = new Chess()
var bitboards = {
  w_pawns: [
  0, 0 , 0, 0, 0, 0, 0, 0,
  0, 0 , 0, 0, 0, 0, 0, 0,
  0, 0 , 0, 0, 0, 0, 0, 0,
  0, 0 , 0, 0, 0, 0, 0, 0,
  0, 0 , 0, 0, 0, 0, 0, 0,
  0, 0 , 0, 0, 0, 0, 0, 0,
  1, 1 , 1, 1, 1, 1, 1, 1,
  0, 0 , 0, 0, 0, 0, 0, 0
                  ],
  w_rooks: [
  0, 0 , 0, 0, 0, 0, 0, 0,
  0, 0 , 0, 0, 0, 0, 0, 0,
  0, 0 , 0, 0, 0, 0, 0, 0,
  0, 0 , 0, 0, 0, 0, 0, 0,
  0, 0 , 0, 0, 0, 0, 0, 0,
  0, 0 , 0, 0, 0, 0, 0, 0,
  0, 0 , 0, 0, 0, 0, 0, 0,
  1, 0 , 0, 0, 0, 0, 0, 1
  ],

  w_knights: [
  0, 0 , 0, 0, 0, 0, 0, 0,
  0, 0 , 0, 0, 0, 0, 0, 0,
  0, 0 , 0, 0, 0, 0, 0, 0,
  0, 0 , 0, 0, 0, 0, 0, 0,
  0, 0 , 0, 0, 0, 0, 0, 0,
  0, 0 , 0, 0, 0, 0, 0, 0,
  0, 0 , 0, 0, 0, 0, 0, 0,
  0, 1 , 0, 0, 0, 0, 1, 0
  ],
                            
  w_bishops: [
  0, 0 , 0, 0, 0, 0, 0, 0,
  0, 0 , 0, 0, 0, 0, 0, 0,
  0, 0 , 0, 0, 0, 0, 0, 0,
  0, 0 , 0, 0, 0, 0, 0, 0,
  0, 0 , 0, 0, 0, 0, 0, 0,
  0, 0 , 0, 0, 0, 0, 0, 0,
  0, 0 , 0, 0, 0, 0, 0, 0,
  0, 0 , 1, 0, 0, 1, 0, 0
  ],
  
  w_queen: [
  0, 0 , 0, 0, 0, 0, 0, 0,
  0, 0 , 0, 0, 0, 0, 0, 0,
  0, 0 , 0, 0, 0, 0, 0, 0,
  0, 0 , 0, 0, 0, 0, 0, 0,
  0, 0 , 0, 0, 0, 0, 0, 0,
  0, 0 , 0, 0, 0, 0, 0, 0,
  0, 0 , 0, 0, 0, 0, 0, 0,
  0, 0 , 0, 1, 0, 0, 0, 0
  ],
                              
  w_king: [
  0, 0 , 0, 0, 0, 0, 0, 0,
  0, 0 , 0, 0, 0, 0, 0, 0,
  0, 0 , 0, 0, 0, 0, 0, 0,
  0, 0 , 0, 0, 0, 0, 0, 0,
  0, 0 , 0, 0, 0, 0, 0, 0,
  0, 0 , 0, 0, 0, 0, 0, 0,
  0, 0 , 0, 0, 0, 0, 0, 0,
  0, 0 , 0, 0, 1, 0, 0, 0
                                                                                                      ],
                                                                                                   all_pieces : [
                                                                                                    1, 1 , 1, 1, 1, 1, 1, 1,
                                                                                                    1, 1, 1, 1, 1, 1, 1, 1,
                                                                                                    0, 0 , 0, 0, 0, 0, 0, 0,
                                                                                                    0, 0 , 0, 0, 0, 0, 0, 0,
                                                                                                    0, 0 , 0, 0, 0, 0, 0, 0,
                                                                                                    0, 0 , 0, 0, 0, 0, 0, 0,
                                                                                                    1, 1, 1, 1, 1, 1, 1, 1,
                                                                                                    1, 1 , 1, 1, 1, 1, 1, 1                                                                                              
                                                                                                  ],

                                                                                                   white_pieces: [
                                                                                                    [0, 0 , 0, 0, 0, 0, 0, 0],
                                                                                                    [0, 0 , 0, 0, 0, 0, 0, 0],
                                                                                                    [0, 0 , 0, 0, 0, 0, 0, 0],
                                                                                                    [0, 0 , 0, 0, 0, 0, 0, 0],
                                                                                                    [0, 0 , 0, 0, 0, 0, 0, 0],
                                                                                                    [0, 0 , 0, 0, 0, 0, 0, 0],
                                                                                                    [1, 1, 1, 1, 1, 1, 1, 1],
                                                                                                    [1, 1 , 1, 1, 1, 1, 1, 1]                                                                                               
                                                                                                   ],
                                                                                                   black_pieces: [
                                                                                                    1, 1 , 1, 1, 1, 1, 1, 1,
                                                                                                    1, 1, 1, 1, 1, 1, 1, 1,
                                                                                                    0, 0 , 0, 0, 0, 0, 0, 0,
                                                                                                    0, 0 , 0, 0, 0, 0, 0, 0,
                                                                                                    0, 0 , 0, 0, 0, 0, 0, 0,
                                                                                                    0, 0 , 0, 0, 0, 0, 0, 0,
                                                                                                    0, 0 , 0, 0, 0, 0, 0, 0,
                                                                                                    0, 0 , 0, 0, 0, 0, 0, 0,
                                                                                                   ]
}

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
  
  game.move(value[1])
  console.log(value[0])
  
  board1.position(game.fen())
  
}

function minimax(depth, state, best_move, alpha, beta, maxPlayer=true){
 
  let possibleMoves = state.moves()
  let mates = []
  let checks = []
  let captures = []
  let normal = []
  let sorted = []
  
  
 
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

      state.move(sorted[i])

      let calcVal = minimax(depth - 1, state, best_move, alpha, beta, !maxPlayer)[0]

      if (calcVal > value){
        best_move = sorted[i]
      }
       

      value = Math.max(calcVal, value )
  
     
      alpha = Math.max(alpha, value);
      
      state.undo()

      if(beta <= alpha) 
          break
      
      
      
    }
   
   
      

    return [alpha, best_move]
  }
  else{

    let value = 9999999

    for(let i=0; i< sorted.length; i++){
      
      state.move(sorted[i])

      let calcVal = minimax(depth - 1, state, best_move, alpha, beta, !maxPlayer)[0]

      if (calcVal < value)
        best_move = sorted[i]

      value = Math.min(calcVal, value )
  
      
      beta = Math.min(beta, value);
      
      state.undo()
      
      if(beta <= alpha) {
        break 
      }
           

      

    }
    
      
    
    return [beta, best_move]
  }

  

}

function evaluatedPos(state, maxPlayer){
  let ascii_board = Array.from(state.ascii())
  let whiteEval = 0
  let blackEval = 0
  let charList = [' ', '|', '-', '+', '\n', '1', '2', '3', '4', '5', '6', '7', '8', 'a', 'c', 'd', 'e', 'f', 'g', 'h']


  const pst_opening_w = {
    w_rooks : [
      0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0.3, 0.3, 0.35, 0.5, 0, 0,
    ],
    w_knights : [
      0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0.2, 0, 0, 0, 0,
      0, 0, 0, 0.25, 0.25, 0, 0, 0,
      0, 0, 0, 0.4, 0.4, 0.4, 0, 0,
      -0.4, 0, 0.3, 0, 0, 0.3, 0, -0.4,
      0, 0, 0, 0, 0, 0, 0, 0,
      0, -0.1, 0, 0, 0, 0, -0.1, 0,
    ],
    w_king: [
      0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0,
      0, 0.2, 0.1, -0.2, 0, -0.2, 0.4, 0.2,
    ],
    w_queen: [
      0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, -0.5, -0.5, -0.5, -0.5, 0, 0,
      0, 0, -0.5, -0.5, -0.5, -0.5, 0, 0,
      0, 0, -0.1, 0, 0, -0.1, 0, 0,
      0, 0, 0.2, 0.3, 0, 0.2, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0,
    ],
    w_bishops: [
      0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0,
      0, 0.25, 0, 0, 0, 0, 0.25, 0,
      0, 0, 0.25, 0, 0, 0.25, 0, 0,
      0, 0, 0, 0, 0.2, 0, 0, 0,
      0, 0.25, 0, 0, 0, 0, 0.25, 0,
      0, 0, 0, 0, 0, 0, 0, 0,
    ],
    w_pawns: [
      0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0.22, 0.22, 0, 0, 0,
      0, 0, 0.2, 0.3, 0.3, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0,
    ],

  }

  const pst_opening_b = {
    b_rooks: pst_opening_w.w_rooks.reverse(),
    b_bishops: pst_opening_w.w_bishops.reverse(),
    b_knights: pst_opening_w.w_knights.reverse(),
    b_king: pst_opening_w.w_king.reverse(),
    b_pawns: pst_opening_w.w_pawns.reverse(),
    b_queen: pst_opening_w.w_queen.reverse(),

  }

  let board = ascii_board.filter(function(char){
      return charList.includes(char) == false
  })

  board.pop()

    board.forEach( function(char){

      switch(char){
        case "p":
          blackEval += 1
          blackEval += pst_opening_b.b_pawns[index]
          break
        case "n":
          blackEval += 3
          blackEval += pst_opening_b.b_knights[index]
          break
        case "q":
          blackEval += 9
          blackEval += pst_opening_b.b_queen[index]
          break
        case "b":
          blackEval += pst_opening_b.b_bishops[index]
          blackEval += 3.1
          break
        case "r":
          blackEval += pst_opening_b.b_rooks[index]
          blackEval += 5
          break
        case "k":
          blackEval += pst_opening_b.b_king[index]
          blackEval += 100
          break

          case "P":
            whiteEval += pst_opening_w.w_pawns[index]
            whiteEval += 1
            break
          case "N":
            whiteEval += pst_opening_w.w_knights[index]
            whiteEval += 3
            break
          case "Q":
            whiteEval += pst_opening_w.w_queen[index]
            whiteEval += 9
            break
          case "B":
            whiteEval += pst_opening_w.w_bishops[index]
            whiteEval += 3.1
            break
          case "R":
            whiteEval += pst_opening_w.w_rooks[index]
            whiteEval += 5
            break
          case "K":
            whiteEval += pst_opening_w.w_king[index]
            whiteEval += 100
            break
      }
        
    })



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

  window.setTimeout(makeComputerMove, 500)
  
}


// update the board position after the piece snap
// for castling, en passant, pawn promotion
function onSnapEnd () {
  board1.position(game.fen())
}


var config = {
  draggable: true,
  position: 'start',
  onDragStart: onDragStart,
  onDrop: onDrop,
  onSnapEnd: onSnapEnd,
}



board1 = Chessboard('board1', config)  //first parameter must contain a number??
