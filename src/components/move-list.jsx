import React from 'react';
import PropTypes from 'prop-types';

function MoveList(props) {
  const {
    history, isMoveSortDesc, stepNumber, onClick,
  } = props;
  let moves = history.map((step, move) => {
    let desc = move ? `Go to move # ${move},
                  ${step.squares[step.currMove]} at
                  (col, row) = (${(step.currMove % 3) + 1}, ${Math.floor(step.currMove / 3) + 1})`
      : 'Go to game start';
    desc = move === stepNumber ? <b>{desc}</b> : desc;
    return (
      <li key={step.currMove}>
        <button
          type="button"
          onClick={() => onClick(move)}
        >
          {desc}
        </button>
      </li>
    );
  });
  if (isMoveSortDesc) {
    moves = moves.reverse();
  }
  return (
    <div><ol>{moves}</ol></div>
  );
}

MoveList.propTypes = {
  history: PropTypes.arrayOf(PropTypes.shape({ squares: PropTypes.array })).isRequired,
  isMoveSortDesc: PropTypes.bool.isRequired,
  stepNumber: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default MoveList;
