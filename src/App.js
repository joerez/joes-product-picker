import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import MyComponent from './my-component';
import inventory, { categories } from './inventory'

import Body from './components/body';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="title">Joes Product Picker</h1>
        <Body />
      </div>
    );
  }
}

export default App;
