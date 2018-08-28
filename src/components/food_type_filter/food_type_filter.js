import React, { Component } from 'react';
import PropTypes from "prop-types";
import { ListGroup, ListGroupItem } from 'reactstrap';

export default class FoodTypeFilter extends Component {

  constructor(props) {
   super(props);

   this.state = { activeFoodType: null }
   this.updateFoodType = this.updateFoodType.bind(this);
  }

  updateFoodType = (name) => {
    if (this.state.activeFoodType === name) {
      // Resets the payment filter if already active
      this.setState({activeFoodType: null});
      this.props.updateFoodType('');
    } else {
      this.setState({activeFoodType: name});
      this.props.updateFoodType(name);
    }
  }

  active = (name) => {
    if (this.state.activeFoodType === name) {
      return 'active';
    }
  }

  renderFoodTypeFilter = () => {
    return this.props.foodTypeCounter.map((foodTypeObj, idx) => {
      const name = foodTypeObj.name;
      return (
        <li className={this.active(name) + ' text-left'} onClick={() => {this.updateFoodType(name)}} key={idx}>
          {name} ({foodTypeObj.count})
        </li>
      )
    });
  }

  render() {
    const foodTypeFilter = this.renderFoodTypeFilter();
    return (
      <div>
        <h4> Cuisine/Food Type </h4>
        <ul> {foodTypeFilter} </ul>
      </div>
    );
  }

}

FoodTypeFilter.propTypes = {
  foodTypeCounter: PropTypes.array.isRequired,
  updateFoodType: PropTypes.func.isRequired,
};