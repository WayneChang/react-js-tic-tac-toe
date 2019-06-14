import React from 'react';
import PropTypes from 'prop-types';
import './square.scss';

function Square(props) {
  const { isWinner, onClick, value } = props;
  const clasname = isWinner ? 'square square-winner' : 'square';
  return (
    <button className={clasname} onClick={onClick} type="button">
      {value}
    </button>
  );
}

Square.propTypes = {
  isWinner: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string,
};

Square.defaultProps = {
  value: '',
};

export default Square;