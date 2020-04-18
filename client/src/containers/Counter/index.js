import React, { Component } from 'react';
class Counter extends Component {
    state = {
        counter: 0
    };
    handleIncrement = () => {
        this.setState({ counter: this.state.counter + 1 });
    };
      // Create a function for setting the state of counter to decrement by 1
    handleDecrement = () => {
        this.setState({ counter: this.state.counter - 1 });
    };
    render() {
        return (
            <div>
                <p>{this.state.counter}</p>
                <button onClick={this.handleIncrement}>Increment</button>
                <button onClick={this.handleDecrement}>Decrement</button>
            </div>
        );
    }
}
export default Counter;