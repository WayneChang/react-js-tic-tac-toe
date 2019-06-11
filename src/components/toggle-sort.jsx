/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import PropTypes from 'prop-types';
import './toggle-sort.scss';

function ToggleSort(props) {
  const { onClick } = props;
  return (
    <div>
      <input id="tgBtn" className="tgl tgl-skewed" type="checkbox" onClick={onClick} />
      <label htmlFor="tgBtn" className="tgl-btn" data-tg-off="Ascending" data-tg-on="Descending" />
    </div>
  );
}

ToggleSort.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ToggleSort;
