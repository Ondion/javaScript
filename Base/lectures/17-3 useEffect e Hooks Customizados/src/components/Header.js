import React, { Component } from 'react';
import Coordinates from './Coordinates';
import IssContext from '../context/IssContext';

class Header extends Component {
  render() {
    const { latitude, longitude } = this.context;

    return (
      <header>
        <h1>
          Space Station
          {' '}
          <span className="purple-font">Tracker</span>
        </h1>
        <Coordinates latitude={ latitude } longitude={ longitude } />
      </header>
    );
  }
}

Header.contextType = IssContext;

export default Header;
