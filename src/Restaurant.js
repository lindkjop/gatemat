import React, { Component } from 'react';

class Restaurant extends Component {
    state = { color : 'white' }

    onClick = () => {
        this.setState({ color: 'red' });
    }
     render () {
          return (
           <li className="nameBox">
           <span>{this.props.children}</span>
           <button onClick={this.props.toggle}></button>
          </li>
      );
     }
}

export default Restaurant;