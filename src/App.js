import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <>  
        <div>
          <label>userScore</label>
          <input name="userScore" value={this.state.UserScore} onChange={ (e) => this.setState({ userScore: e.target.value })} />
        </div>

        <div>
          <label>compScore</label>
          <input name="compScore" value={this.state.compScore} onChange={ (e) => this.setState({ compScore: e.target.value })} />
        </div>
      </>
    );
  }
}

export default App;

