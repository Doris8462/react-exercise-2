import React, { Component } from 'react';
import './App.scss';
import Products from './components/Products';

class App extends Component {
  render() {
    return (
      <main className="app">
        <Products></Products>
      </main>
    );
  }
}

export default App;
