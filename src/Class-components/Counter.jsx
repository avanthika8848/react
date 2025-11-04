import React, { Component } from 'react'

export default class Counter extends Component {

    // step1.initilaize state
    constructor(props){ //accept prpos is a parameter 
        super(props); // used to invoke parent component
        this.state = {count: 0};

    }

    // step2 : define method to modify state 

    increment =() => {
        this.setState({ count: this.state.count + 1});

    }

    decrement = ()=> {
        this.setState({ count: this. state.count - 1})
    }

    // step3: render u
  render() {
    return (
      <div>
        <h2>Count: {this.state.count}</h2>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </div>
    )
  }
}
