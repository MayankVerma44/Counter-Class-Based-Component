import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0, // Initial count
    };
  }

  // Method to increment the count
  incrementCount = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }));
  };

  // Method to decrement the count
  decrementCount = () => {
    this.setState(prevState => ({
      count: prevState.count - 1,
    }));
  };

  render() {
    return (
      <div>
        <h1> Count: {this.state.count}</h1> {/* Display the count */}
        <button onClick={this.incrementCount}>Increment</button> {/* Increment button */}
        <button onClick={this.decrementCount}>Decrement</button> {/* Decrement button */}
      </div>
    );
  }
}

export default Counter;
