import React from 'react';
import ReactDOM from 'react-dom';
import Board from './components/board';
import ToggleMoveList from './components/toggle-move-list';
import './index.css';

function getWinnerAndwinSquares(squares) {
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
  const winLine = lines.find((line) => {
    const [a, b, c] = line;
    return (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]);
  });
  return {
    winner: winLine ? squares[winLine[0]] : null,
    winSquares: winLine || [],
  };
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
        currMove: -1,
      }],
      stepNumber: 0,
      isNextTurnPlayerX: true,
      winner: null,
      winnerSquares: [],
    };
  }

  nextPlayer = () => {
    const { isNextTurnPlayerX } = this.state;
    return isNextTurnPlayerX ? 'X' : 'O';
  }

  handleBoardClick = (i) => {
    const {
      stepNumber, history, winner, isNextTurnPlayerX,
    } = this.state;
    const historyToStep = history.slice(0, stepNumber + 1);
    const squares = historyToStep[stepNumber].squares.slice();
    if (winner || squares[i]) {
      return;
    }
    squares[i] = this.nextPlayer();
    const winnerAndwinSquares = getWinnerAndwinSquares(squares);
    this.setState({
      history: historyToStep.concat([{
        squares,
        currMove: i,
      }]),
      stepNumber: historyToStep.length,
      isNextTurnPlayerX: !isNextTurnPlayerX,
      winner: winnerAndwinSquares.winner,
      winnerSquares: winnerAndwinSquares.winSquares,
    });
  }

  handleMoveListClick = (step) => {
    const { stepNumber, history } = this.state;
    if (stepNumber === step) return;
    const winnerAndwinSquares = getWinnerAndwinSquares(history[step].squares);
    this.setState({
      stepNumber: step,
      isNextTurnPlayerX: (step % 2) === 0,
      winner: winnerAndwinSquares.winner,
      winnerSquares: winnerAndwinSquares.winSquares,
    });
  }

  render() {
    const {
      history, stepNumber, winner, winnerSquares,
    } = this.state;
    const current = history[stepNumber];
    const isDraw = !current.squares.includes(null);

    let status;
    if (winner) {
      status = `Winner: ${winner}`;
    } else if (isDraw) {
      status = 'Draw';
    } else {
      status = `Next player: ${this.nextPlayer()}`;
    }
    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            winnerSquares={winnerSquares}
            onClick={this.handleBoardClick}
          />
        </div>
        <div className="game-info">
          <div className="status">{status}</div>
          <ToggleMoveList {...{ history, stepNumber }} onClick={this.handleMoveListClick} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Game />,
  document.getElementById('root'),
);
