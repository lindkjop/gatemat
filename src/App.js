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

const query = '*'
const params = {}
const options = {includeResult: true};

const subscription = client.listen(query, params)
  .subscribe(change => {
    console.log('change', change)
  })
client.listen(query, params, options)
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
        Introintro
        </p>
      </div>
    );
  }
}

export default App;
