import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Restaurant from './restaurant/restaurant';
import './restaurant_list.css';

export default class RestaurantList extends Component {

  renderRestaurants() {
    return this.props.restaurants.map((restaurant, idx) => {
      return <Restaurant key={idx} restaurant={restaurant} />;
    })
  }

  render() {
    const restaurants = this.renderRestaurants();

    return (
      <Container id='restaurant-list'>
        {restaurants}
      </Container>
    );
  }

}
