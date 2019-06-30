import React, { Component } from 'raect';

class DisplayResult extends Component {
  calculate() {
    var userScore= this.props.userScore;
    var compUser= this.props.compUser
  }
  render() {
    return (
      <div id='response'>
        {this.calculate}
      </div>
    )
  }
}

export default DisplayResult
