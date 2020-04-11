import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      string: 'Hello Yihua Zhang'
    }
  }

  render() {
    return (
      <div>
        <p>{this.state.string }</p>
        <button onClick={() => this.setState({ string: 'Hello Andrei'})  }></button>
        
      </div>
    );
  }
}

export default App;
