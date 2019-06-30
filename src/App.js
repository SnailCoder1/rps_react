import React, { Component } from 'react';
import DisplayResult from './Components/displayResult';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userScore: '',
      compScore: ''
    }
  }

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

        <DisplayResult
        userScore={this.state.userScore}
        compScore={this.state.compScore}
        />
      </>
    );
  }
}

export default App;

