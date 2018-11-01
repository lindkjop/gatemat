import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Restaurant
// Dish

const sanityClient = require('@sanity/client')
const client = sanityClient({
  projectId: 'ipbc353a',
  dataset: 'test',
  token: '', // or leave blank to be anonymous user
  useCdn: true // `false` if you want to ensure fresh data
})

const config = client.config()
console.log('dataset',config.dataset)
client.config()

const query = '*[_type==$type]'
const params = {type:'restaurant'}
const options = {includeResult: true};
//let restaurants;
let resList = [];
var restaurants = [];

const subscription = client.listen(query, params)
  .subscribe(change => {
    console.log('change', change)
    console.log('restaurants', restaurants);
  })
client.listen(query, params, options)

const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
  <li>{number}</li>
);

class App extends Component {
  componentDidMount() {
    const self = this;
    client.fetch(query, params).then(res => {
      //console.log(restaurants);
      restaurants = res.map(restaurant => {
        return <li key={restaurant.name}>{restaurant.name}</li>
      });
      
      self.setState({data: restaurants});
    });
  }
  render() {
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        { this.state && this.state.data && <ul>{restaurants}</ul>}
      </div>
    );
  }
}

export default App;
