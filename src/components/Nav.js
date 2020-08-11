import React, { Component } from 'react';
import '../styles/Nav.scss';

export default class Nav extends Component {
  render() {
    return (
      <div className="navBar">
        <span className="store">Store</span>
        <div className="shoppingCart">
          <img
            className="cart"
            src={require('../assets/cart.jpg')}
            alt="cart"
          ></img>
          <div className="cartNumber">{this.props.addNumber}</div>
        </div>
      </div>
    );
  }
}
