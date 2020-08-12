/* eslint-disable react/jsx-key */
import React, { Component } from 'react';
import fetchJsonp from 'fetch-jsonp';
import Product from '../components/Product';
import Nav from '../components/Nav';
import '../styles/products.scss';

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      iPhoneList: [],
      HUAWEIList: [],
      addNumber: 0,
    };
  }

  increaseAddNumbers() {
    this.setState({
      // eslint-disable-next-line react/no-direct-mutation-state
      addNumber: ++this.state.addNumber,
    });
  }
  addCategory(category, list) {
    return (
      <div className="{category}">
        <span className="category">{category}</span>
        <div className="productsList">
          {list.map((value, key) => {
            return (
              <div className="productItem">
                <Product
                  key={key}
                  category={value.price}
                  price={value.price}
                  name={value.name}
                ></Product>
                <button
                  className="addButton"
                  type="button"
                  onClick={() => {
                    this.increaseAddNumbers();
                  }}
                >
                  add to cart
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  componentDidMount() {
    fetchJsonp('http://localhost:3000/products')
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        console.log(result);
        this.setState({
          list: result,
          iPhoneList: result.filter((item) => item.category === 'iPhone'),
          HUAWEIList: result.filter((item) => item.category === 'HUAWEI'),
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="Products">
        <Nav addNumber={this.state.addNumber}></Nav>
        {this.addCategory('HUAWEI', this.state.iPhoneList)}
        {this.addCategory('iPhone', this.state.HUAWEIList)}
      </div>
    );
  }
}

export default Products;
