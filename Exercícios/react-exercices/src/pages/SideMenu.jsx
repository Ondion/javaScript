import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SideMenu extends Component {
  render() {
    return (
      <aside className="sideClass">
        <Link className="linkClass" to="/">Main</Link>
        <Link className="linkClass" to="/B15d01">B15d01</Link>
      </aside>
    );
  }
}

export default SideMenu;
