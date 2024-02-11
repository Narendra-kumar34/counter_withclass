import React, {Component} from 'react';
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      cnt : 0,
    };
  }

  handleInc = () => {
    this.setState((prevState) => ({
      cnt : prevState.cnt + 1
    }))
  }

  handleDec = () => {
    this.setState((prevState) => ({
      cnt : prevState.cnt - 1
    }))
  }

  render() {
    const {cnt} = this.state;
    return (
      <div>
        <h1>Counter App</h1>
        <p>Count: {cnt}</p>
        <button onClick={this.handleInc}>Increment</button>
        <button onClick={this.handleDec}>Decrement</button>
      </div>
    );
  }
}

export default App;
