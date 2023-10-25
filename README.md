# Chess Bot in Node.js

A primitive computer chess player implemented in JavaScript using the chess.js and chessboard.js libraries.

## Introduction

This project features a chess-playing bot that allows users to play as the white side while competing against a computer-controlled black player. The bot employs the Minimax algorithm with alpha-beta pruning to make its moves, with a maximum search depth of 5.

## Features

- **User-Friendly Gameplay:** You play as white, and the computer controls the black pieces.
- **AI Strategy:** The computer evaluates positions based on the concept of material (how many pieces each side has on the board), in order to maximize its advantage. The evaluation function calculates (black material - white material) for convenient understanding, with black as the maximizing player.
- **Checkmate Awareness:** The bot recognizes checkmate as a desirable outcome and avoids getting checkmated for as long as possible.
- **Activity Evaluation:** It places its pieces where they have the most mobility, considering the concept of "activity" in chess.


## Future Enhancements

The project is under active development, and there are plans to improve its performance and capabilities:

- **Speed Optimizations:** Ongoing efforts to make the computer player run faster. The computer player may take a maximum of 50 seconds to make a move but improves in speed the less pieces on the board
- **Algorithmic Improvements:** Implementing techniques such as the Most Valuable Victim, Least Valuable Aggressor, and considering recoding in C++ for further speed enhancements.
Future updates may also include techniques like bitboards to help the computer player understand advanced chess concepts like square control and positional dominance.

## Getting Started

To run the chess bot, you must host it using a live server. Ensure you have Node.js installed.

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Start a live server to host the game.
