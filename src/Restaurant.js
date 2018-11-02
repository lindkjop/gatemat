import React, { Component } from 'react';

class Restaurant extends Component {
    state = { color : 'white' }

    onClick = () => {
        this.setState({ color: 'red' });
    }
     render () {
          return (
           <li className="nameBox">
           {this.props.children}
            <div onClick={this.onClick} style={{backgroundColor: this.state.color}} 
       className="clickBox">
           </div>
          </li>
      );
     }
}

export default Restaurant;