/* eslint-disable no-undef */
import React, { Component } from 'react';
import '../styles/product.scss';

export default class Product extends Component {
  render() {
    return (
      <div>
        <span className="productName">{this.props.name}</span>
        <img
          className="productPhoto"
          src={require('../assets/product_image_placeholder.png')}
          alt="productPhoto"
        ></img>
        <span className="productPrice">{this.props.price}</span>
      </div>
    );
  }
}
