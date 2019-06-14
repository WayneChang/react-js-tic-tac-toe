import React from 'react';
import ReactDOM from 'react-dom';
import Board from './components/board';
import MoveList from './components/move-list';
import ToggleSort from './components/toggle-sort';
import './index.css';

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
  for (let i = 0; i < lines.length; i += 1) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return [squares[a], lines[i]];
    }
  }
  return null;
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
      xIsNext: true,
      isMoveSortDesc: false,
      winner: null,
      winnerSquares: [],
    };
  }

  nextMark = () => {
    const { xIsNext } = this.state;
    return xIsNext ? 'X' : 'O';
  }

  handleClick = (i) => {
    const {
      stepNumber, history, winner, xIsNext,
    } = this.state;
    const historyToStep = history.slice(0, stepNumber + 1);
    const current = historyToStep[stepNumber];
    const squares = current.squares.slice();
    if (winner || squares[i]) {
      return;
    }
    squares[i] = this.nextMark();
    const winnerAndSquares = calculateWinner(squares);
    this.setState({
      history: historyToStep.concat([{
        squares,
        currMove: i,
      }]),
      stepNumber: historyToStep.length,
      xIsNext: !xIsNext,
      winner: winnerAndSquares ? winnerAndSquares[0] : null,
      winnerSquares: winnerAndSquares ? winnerAndSquares[1] : [],
    });
  }

  handleToggle = () => {
    const { isMoveSortDesc } = this.state;
    this.setState({ isMoveSortDesc: !isMoveSortDesc });
  }

  jumpTo = (step) => {
    const { history } = this.state;
    const winner = calculateWinner(history[step].squares);
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
      winner: winner ? winner[0] : null,
      winnerSquares: winner ? winner[1] : [],
    });
  }

  render() {
    const {
      history, stepNumber, winner, winnerSquares, isMoveSortDesc,
    } = this.state;
    const current = history[stepNumber];
    const isDraw = !current.squares.includes(null);

    let status;
    if (winner) {
      status = `Winner: ${winner}`;
    } else if (isDraw) {
      status = 'Draw';
    } else {
      status = `Next player: ${this.nextMark()}`;
    }
    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            winnerSquares={winnerSquares}
            onClick={this.handleClick}
          />
        </div>
        <div className="game-info">
          <div className="status">{status}</div>
          <ToggleSort
            onClick={this.handleToggle}
          />
          <MoveList
            history={history}
            stepNumber={stepNumber}
            isMoveSortDesc={isMoveSortDesc}
            onClick={this.jumpTo}
          />
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root'),
);
