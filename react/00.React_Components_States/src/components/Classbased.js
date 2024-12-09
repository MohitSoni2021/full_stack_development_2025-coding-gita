import React, { Component } from "react";

// https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

class CounterClass extends Component {
  constructor(props) {
    console.log("Constructor");
    super(props);
    this.state = {
      count: 0,
      qty:0
    };
  }
  componentDidMount() {
    console.log("componentDidMount");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  increment = () => {
    if(this.state.qty < 25){
      this.setState({ qty: this.state.qty + 1 });
    }
  };

  decrement = () => {
    if(this.state.qty){
      this.setState({ qty: this.state.qty - 1 }); 
    }
  };

  render() {
    return (
      <div>
        <h2>Counter (Class-Based)</h2>
        <p>qty: {this.state.qty}</p>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}

export default CounterClass;
