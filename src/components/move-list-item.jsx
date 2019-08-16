import React from 'react';
import PropTypes from 'prop-types';
import './move-list.scss';

class MoveListItems extends React.PureComponent {
  render() {
    const {
      onClick, move, desc, isBold,
    } = this.props;
    const resultDesc = isBold ? <b>{desc}</b> : desc;
    return (
      <li className="move-list-item">
        <button
          type="button"
          onClick={() => onClick(move)}
        >
          {resultDesc}
        </button>
      </li>
    );
  }
}

MoveListItems.propTypes = {
  onClick: PropTypes.func.isRequired,
  move: PropTypes.number.isRequired,
  desc: PropTypes.string.isRequired,
  isBold: PropTypes.bool.isRequired,
};

export default MoveListItems;
