import React from 'react';
import ReactDOM from 'react-dom';
import Board from './components/board';
import MoveList from './components/move-list'
import ToggleSort from './components/toggle-sort'
import './index.css';

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
    }
  }
  nextMark() {
    return this.state.xIsNext ? 'X' : 'O';
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[this.state.stepNumber];
    const squares = current.squares.slice();
    if (this.state.winner || squares[i]) {
      return;
    }
    squares[i] = this.nextMark();
    const winner = calculateWinner(squares);
    this.setState({
      history: history.concat([{
        squares: squares,
        currMove: i,
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
      winner: winner ? winner[0] : null,
      winnerSquares: winner ? winner[1] : [],
    });
  }

  handleToggle() {
    this.setState({ isMoveSortDesc: !this.state.isMoveSortDesc });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = this.state.winner;

    let status;
    if (winner) {
      status = `Winner: ${winner}`;
    } else {
      status = `Next player: ${this.nextMark()}`
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            winnerSquares={this.state.winnerSquares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div className="status">{status}</div>
          <ToggleSort
            onClick={() => this.handleToggle()} />
          <MoveList
            history={history}
            stepNumber={this.state.stepNumber}
            isMoveSortDesc={this.state.isMoveSortDesc}
            onClick={(step) => this.jumpTo(step)} />
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

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
      return [squares[a], lines[i]];
    }
  }
  return null;
}
