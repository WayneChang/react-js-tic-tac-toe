/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import Square from './square';
import './board.scss';

class Board extends React.Component {
  renderSquare = (i) => {
    const { squares, winnerSquares, onClick } = this.props;
    return (
      <Square
        key={`square${i}`}
        value={squares[i]}
        isWinner={winnerSquares.includes(i)}
        i={i}
        onClick={onClick}
      />
    );
  }

  render() {
    const cols = 3;
    const rows = 3;
    const board = [];
    for (let row = 0; row <= rows; row += 1) {
      for (let col = 0; col <= cols; col += 1) {
        if (row === 0 && col === 0) {
          board.push(<label key="row\col" className="board-category">row\col</label>);
        } else if (row === 0) {
          board.push(<label key={`col${col}`} className="board-col-title">{col}</label>);
        } else if (col === 0) {
          board.push(<label key={`row${row}`} className="board-row-title">{row}</label>);
        } else {
          board.push(this.renderSquare((row - 1) * 3 + col - 1));
        }
      }
    }
    return (
      <div className="board">{board}</div>
    );
  }
}

Board.propTypes = {
  squares: PropTypes.arrayOf(PropTypes.string).isRequired,
  winnerSquares: PropTypes.arrayOf(PropTypes.number).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Board;
