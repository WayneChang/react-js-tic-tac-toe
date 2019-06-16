/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import Square from './square';
import './board.scss';

class Board extends React.PureComponent {
  renderSquare = (i) => {
    const { squares, winnerSquares, onClick } = this.props;
    return (
      <Square
        key={`square${i}`}
        value={squares[i]}
        isWinner={winnerSquares.includes(i)}
        onClick={() => onClick(i)}
      />
    );
  }

  render() {
    const cols = 3;
    const rows = 3;
    const board = [];
    for (let row = 0; row <= rows; row += 1) {
      const rowComps = [];
      for (let col = 0; col <= cols; col += 1) {
        if (row === 0 && col === 0) {
          rowComps.push(<label key="row\col" className="col-row-category">row\col</label>);
        } else if (row === 0) {
          rowComps.push(<label key={col} className="col-title">{col}</label>);
        } else if (col === 0) {
          rowComps.push(<label key={row} className="row-title">{row}</label>);
        } else {
          rowComps.push(this.renderSquare((row - 1) * 3 + col - 1));
        }
      }
      board.push(<div key={row} className="board-row">{rowComps}</div>);
    }
    return (
      <div>{board}</div>
    );
  }
}

Board.propTypes = {
  squares: PropTypes.arrayOf(PropTypes.string).isRequired,
  winnerSquares: PropTypes.arrayOf(PropTypes.number).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Board;
