import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <label>userScore</label>
          <input name="userScore" />
        </div>

        <div>
          <label>compScore</label>
          <input name="compScore" />
        </div>
      </div>
    );
  }
}

export default App;

