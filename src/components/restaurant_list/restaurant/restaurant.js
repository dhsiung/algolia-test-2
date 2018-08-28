import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import Stars from 'react-stars';
import './restaurant.css';

export default class Restaurant extends Component {

  render() {
    const r = this.props.restaurant;
    return (
      <Row className='restaurant mb-4'>
        <Col md='3' className='p-0'>
          <img className='rounded' src={r.image_url} alt={`${r.name}-thumbnail`}/>

        </Col>
        <Col md='9'>
          <Row>

            <Col xs='12' md='8'>
              <div className='rest-attributes'>
                <Row>
                  {r.name}
                </Row>
                <Row>
                  <span className='pr-3'>{Number.parseFloat(r.stars_count).toFixed(1)} </span>
                  <span className='pr-3'>
                    <Stars className='d-inline-block align-text-bottom'
                      edit={false}
                      value={Math.round(r.stars_count * 2) / 2}
                    />
                  </span>
                  <span className='pr-3'> ({r.reviews_count} reviews)</span>
                </Row>
                <Row>
                  {r.price_range} | {r.food_type} | {r.dining_style}
                </Row>
              </div>
            </Col>

            <Col xs='12' md='4'>
              <div className='text-right'> {r.phone_number} </div>
              <div className='text-right'> {r.address} </div>
              <div className='text-right'> {r.neighborhood} </div>
            </Col>

          </Row>
        </Col>
      </Row>
    );
  }

}
