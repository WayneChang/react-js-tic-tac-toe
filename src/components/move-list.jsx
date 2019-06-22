import React from 'react';
import PropTypes from 'prop-types';
import ToggleSort from './toggle-sort';
import MoveListItems from './move-list-items';
import './move-list.scss';

class MoveList extends React.PureComponent {
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
    const { history, stepNumber, onClick } = this.props;
    const { isMoveSortDesc } = this.state;
    const className = isMoveSortDesc ? 'move-list move-list-reverse' : 'move-list';

    return (
      <div>
        <ToggleSort onClick={this.handleToggle} />
        <ol className={className}>
          <MoveListItems {...{ history, stepNumber, onClick }} />
        </ol>
      </div>
    );
  }
}

MoveList.propTypes = {
  history: PropTypes.arrayOf(PropTypes.shape({ squares: PropTypes.array })).isRequired,
  stepNumber: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default MoveList;
