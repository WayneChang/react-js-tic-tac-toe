import React from 'react';
import PropTypes from 'prop-types';
import './square.scss';

class Square extends React.PureComponent {
  render() {
    const { isWinner, onClick, value, i,
    } = this.props;
    const clasname = isWinner ? 'square square-winner' : 'square';
    return (
      <button className={clasname} onClick={() => onClick(i)} type="button">
        {value}
      </button>
    );
  }
}

Square.propTypes = {
  isWinner: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string,
  i: PropTypes.number.isRequired,
};

Square.defaultProps = {
  value: '',
};

export default Square;
