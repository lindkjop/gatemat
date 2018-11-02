import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RestaurantList from './RestaurantList'

// Restaurant
// Dish

class App extends Component {
  render() {
    
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">GATEMAT</h1>
        </header>
        <RestaurantList />
      </div>
    );
  }
}

export default App;
