import React from 'react';
import PropTypes from 'prop-types';
import ToggleSort from './toggle-sort';
import MoveList from './move-list';
import './move-list.scss';

class ToggleMoveList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMoveSortDesc: false,
    };
  }

  handleToggle = () => {
    const { isMoveSortDesc } = this.state;
    this.setState({ isMoveSortDesc: !isMoveSortDesc });
  }

  render() {
    const { isMoveSortDesc } = this.state;
    const { history, stepNumber, onClick } = this.props;
    const className = isMoveSortDesc ? 'move-list move-list-reverse' : 'move-list';

    return (
      <div>
        <ToggleSort onClick={this.handleToggle} />
        <ol className={className}>
          <MoveList {...{ history, stepNumber, onClick }} />
        </ol>
      </div>
    );
  }
}

ToggleMoveList.propTypes = {
  history: PropTypes.arrayOf(PropTypes.shape({ squares: PropTypes.array })).isRequired,
  stepNumber: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ToggleMoveList;
