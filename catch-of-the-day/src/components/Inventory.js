import React from 'react';
import PropTypes from 'prop-types';
import AddFishForm from './AddFishForm';

class Inventory extends React.Component {
  static propTypes = {
    addFish: PropTypes.func.isRequired
  };

  render() {
    return (
      <div className="inventory">
        <h2>Inventory</h2>
        <AddFishForm addFish={this.props.addFish} />
      </div>
    );
  }
}

export default Inventory;
