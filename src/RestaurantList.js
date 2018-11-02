import React, { Component } from 'react';
import logo from './logo.svg';
//import './Restaurant.css';
import './App.css';
import Restaurant from './Restaurant';

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

class RestaurantList extends Component {
    componentDidMount() {
      const self = this;
      client.fetch(query, params).then(res => {
        console.log('result', res);
        self.setState({restaurants: res});
      });
    }
    render() {
      
      return (
        <div className="RestaurantList">
          { this.state && this.state.restaurants && <ul>{
            this.state.restaurants.map((restaurant) => {
              return <Restaurant>{restaurant.name}</Restaurant>
            })
          }</ul>}
        </div>
      );
    }
  }
  
  export default RestaurantList;