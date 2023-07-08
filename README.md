# minimax-chess-in-js
 Primitive computer chess player in JavaScript. Uses the chess.js and chessboard.js libraries.
 
 The user always plays as white, with black being the computer player. I used the Minimax algorithm with alpha-beta pruning. The maximum depth of the program is 4. The computer player understands the basic concepts of chess, evaluating positions based on the amount of pieces each side has (this is normally called "material" in chess). In modern chess engines, the evaluation is given as (white material - black material), but for convenience the program calculates the evaluation as (black material - white material), with black being the "maximising player" and white the "minimising player". Notably, the computer player will also evaluate positions with checkmate as desirable, and will avoid checkmate on itself for as long as it can. It also has some understanding of "activity" in chess, meaning it will put its pieces where they have the most mobility.
 
 
 
 The computer player can take a maximum of 50s to make a move at times. I'm working on various speedups to allow the computer player to run faster, including implementing the Most Valuable Victim, Least Valuable Agressor technique. Another consideration to increase the speed is to recode the entire project in C++. It also allows me to implement techniques such as bitboards, which will aid the computer player understand more advanced chess concepts such as square control and positional dominance.
 
 You must run it using a live server.
