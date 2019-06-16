import React from 'react';
import PropTypes from 'prop-types';
import ToggleSort from './toggle-sort';
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
    const { isMoveSortDesc } = this.state;
    const { children } = this.props;
    const className = isMoveSortDesc ? 'move-list move-list-reverse' : 'move-list';

    return (
      <div>
        <ToggleSort onClick={this.handleToggle} />
        <ol className={className}>
          {children}
        </ol>
      </div>
    );
  }
}

MoveList.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MoveList;
