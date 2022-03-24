import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SideMenu extends Component {
  render() {
    return (
      <div className="sideClass">
        <Link to='/'> Main </Link>
        <Link to='/B15d01'> B15d01 </Link>
      </div>
    );
  }
}

export default SideMenu;
