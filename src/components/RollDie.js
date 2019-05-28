import React, { Component } from 'react';
import Die from './Die';
import './RollDie.css';

class RollDie extends Component {
  static defaultProps = {
    sides: ['one', 'two', 'three', 'four', 'five', 'six']
  };
  constructor(props) {
    super(props);
    this.state = {
      die1: 'one',
      die2: 'one',
      rolling: false
    };
    this.roll = this.roll.bind(this);
  }
  roll() {
    // pick two random numbers
    const die1 = this.props.sides[
      Math.floor(Math.random() * this.props.sides.length)
    ];
    const die2 = this.props.sides[
      Math.floor(Math.random() * this.props.sides.length)
    ];
    // set new dice state
    this.setState({
      die1: die1,
      die2: die2,
      rolling: true
    });
    //reset button
    setTimeout(() => {
      this.setState({ rolling: false });
    }, 1000);
  }
  render() {
    return (
      <div>
        <div className="RollDie">
          <Die face={this.state.die1} />
          <Die face={this.state.die2} />
        </div>
        <button onClick={this.roll} disabled={this.state.rolling}>
          {this.state.rolling ? 'Rolling' : 'Roll'}
        </button>
      </div>
    );
  }
}

export default RollDie;
