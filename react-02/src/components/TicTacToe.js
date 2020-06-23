import React from 'react';

function Square(props) {
    return (
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
    );
  }
  
  
  class Board extends React.Component {
    renderSquare(i) {
      return (
        <Square
          value={this.props.squares[i]}
          onClick={() => this.props.onClick(i)}
        />
      );
    }
  
    render() {
      return (
        <div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        history: [{
          squares: Array(9).fill(null),
        }],
        stepNumber: 0,
        xIsNext: true,
      };
    }


// function bestMove(board) {
//     //AI to make its turn
//     let bestScore = -Infinity;
//     let move;
//     for (let i = 0; i < 9; i++) {
//         //is the spot available
//         if (board[i] == '') {
//             board[i] = ai;
//             let score = minimax(board, 0, false);
//             board[i] = '';
//             if (score > bestScore) {
//                 bestScore = score;
//                 move = { i };
//             }
//         }

//     }
//     board[move.i] = ai;
//     currentPlayer = human;
// };

// function minimax(board, depth, isMaximizing) {
//     let result = calculateWinner(squares);
//     if (result !== null) {
//         return scores[result];
//     }

//     if (isMaximizing) {
//         let bestScore = -Infinity;
//         for (let i = 0; i < 9; i++) {
//             //is the spot available
//             if (board[i] == '') {
//                 board[i] = ai;
//                 let score = minimax(board, depth + 1, false);
//                 board[i] = '';
//                 bestScore = Math.max(score, bestScore);
//             }
//         }
//         return bestScore;
//     } else {
//         let bestScore = Infinity;
//         for (let i = 0; i < 9; i++) {
//             //is the spot available
//             if (board[i] == '') {
//                 board[i] = human;
//                 let score = minimax(board, depth + 1, true);
//                 board[i] = '';
//                 bestScore = Math.min(score, bestScore);
//             }
//         }
//         return bestScore;
//     }
// };

// class Game extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             history: [{
//                 squares: Array(9).fill(null),
//             }],
//             stepNumber: 0,
//             xIsNext: true,
//             scores : {
//                 X: 1,
//                 O: -1,
//                 tie: 0
//             },
//             ai: 'X',
//             human: 'O'
//         };
//     }
  
    handleClick(i) {
      const history = this.state.history.slice(0, this.state.stepNumber + 1);
      const current = history[history.length - 1];
      const squares = current.squares.slice();

      //
      
      if (calculateWinner(squares) || squares[i]) {
        return;
      }
      squares[i] = this.state.xIsNext ? 'X' : 'O';
//try to build in random ai move instead of MINIMAX
//to understand AI movement better

      this.setState({
        history: history.concat([{
          squares: squares,
        }]),
        stepNumber: history.length,
        xIsNext: !this.state.xIsNext,
      });
    }
  
    jumpTo(step) {
      this.setState({
        stepNumber: step,
        xIsNext: (step % 2) === 0
      });
    }
  
    render() {
      const history = this.state.history;
      const current = history[this.state.stepNumber];
      const winner = calculateWinner(current.squares);
  
      const moves = history.map((step, move) => {
        const desc = move ?
          'Go to move #' + move :
          'Go to game start';
        return (
          <li key={move}>
            <button onClick={() => this.jumpTo(move)}>{desc}</button>
          </li>
        );
      });
  
      let status;
      if (winner) {
        status = 'Winner: ' + winner;
      } else {
        status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
      }
  
      return (
        <div className="game">
          <div className="game-board">
            <Board
              squares={current.squares}
              onClick={(i) => this.handleClick(i)}
            />
          </div>
          <div className="game-info">
            <div role='status'>{status}</div>
            <ol>{moves}</ol>
          </div>
        </div>
      );
    }
  }
  
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

//   function randomBoardMove (squares){
// for(let i=0; i<squares.length; i++){

// }
//   };
// squares: Array(9).fill(null),
  export default  Game;