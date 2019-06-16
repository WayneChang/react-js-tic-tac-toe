import React from 'react';
import PropTypes from 'prop-types';
import './move-list.scss';

class MoveListItems extends React.PureComponent {
  render() {
    const { history, stepNumber, onClick } = this.props;
    const moves = history.map((step, move) => {
      let desc;
      if (move) {
        desc = `Go to move # ${move},
                ${step.squares[step.currMove]} at
                (col, row) = (${(step.currMove % 3) + 1}, ${Math.floor(step.currMove / 3) + 1})`;
      } else {
        desc = 'Go to game start';
      }
      desc = move === stepNumber ? <b>{desc}</b> : desc;
      return (
        <li className="move-list-item" key={step.currMove}>
          <button
            type="button"
            onClick={() => onClick(move)}
          >
            {desc}
          </button>
        </li>
      );
    });
    return moves;
  }
}

MoveListItems.propTypes = {
  history: PropTypes.arrayOf(PropTypes.shape({ squares: PropTypes.array })).isRequired,
  stepNumber: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default MoveListItems;
