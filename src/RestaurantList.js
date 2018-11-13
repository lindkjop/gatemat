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

    // Should use the state to cause a rerender
    
    toggle = (index, event) => {
        const restaurants = Object.assign([], this.state.restaurants);
        restaurants[index].expanded = !restaurants[index].expanded;
        console.log('You clicked the element at index', index, restaurants[index].expanded);
        this.setState(restaurants: restaurants);
    }

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
            this.state.restaurants.map((restaurant, index) => {
              return <Restaurant 
              expanded = {restaurant.expanded || false}
              toggle={this.toggle.bind(this, index)}
              name = {restaurant.name}
              dishes = {restaurant.dishes}
              key = {restaurant._id}>
              </Restaurant>
            })
          }</ul>}
        </div>
      );
    }
  }
  
  export default RestaurantList;