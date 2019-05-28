import React, { Component } from 'react';
import './Die.css';

class Die extends Component {
  render() {
    return (
      <div>
        <i className={`Die fas fa-dice-${this.props.face}`} />
      </div>
    );
  }
}

export default Die;
