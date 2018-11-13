import React, { Component } from 'react';

class Restaurant extends Component {

    render () {
        if (this.props.expanded) {
            console.log('props was exp-anded');
            return (
                <li className="nameBox">
                <span>{this.props.name}</span>
                <ul>{
                    this.props.dishes.map((dish, index) => {
                    return <span key={dish._key}>{dish.title}</span>
                    })
                }</ul>
                <button onClick={this.props.toggle}></button>
                </li>
                )
        } else {
            return (
                <li className="nameBox">
                <span>{this.props.name}</span>
                <button onClick={this.props.toggle}></button>
                </li>
        );
        }
    }
}

export default Restaurant;