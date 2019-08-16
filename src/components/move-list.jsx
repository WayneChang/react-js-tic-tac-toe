import React from 'react';
import PropTypes from 'prop-types';
import MoveListItems from './move-list-item';
import './move-list.scss';

class MoveList extends React.Component {
  render() {
    const { history, stepNumber, onClick } = this.props;
    const moves = history.map((step, move) => {
      let desc;
      if (move) {
        desc = `Go to move # ${move}, `
          + `${step.squares[step.currMove]} at `
          + `(col, row) = (${(step.currMove % 3) + 1}, ${Math.floor(step.currMove / 3) + 1})`;
      } else {
        desc = 'Go to game start';
      }
      return (
        <MoveListItems
          key={step.currMove}
          {...{
            onClick, move, desc,
          }}
          isBold={move === stepNumber}
        />
      );
    });
    return moves;
  }
}

MoveList.propTypes = {
  history: PropTypes.arrayOf(PropTypes.shape({ squares: PropTypes.array })).isRequired,
  stepNumber: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default MoveList;
