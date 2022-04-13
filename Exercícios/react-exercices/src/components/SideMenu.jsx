import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class SideMenu extends Component {
  render() {
    return (
      <aside className="sideClass">
        <Link className="linkClass" to="/">Main</Link>
        <Link className="linkClass" to="/B15d01">B15d01</Link>
        <Link className="linkClass" to="/B15d02">B15d02</Link>
        <Link className="linkClass" to="/B15d03">B15d03</Link>
        <Link className="linkClass" to="/B15d04">B15d04</Link>
        <Link className="linkClass" to="/B17d01">B17d01</Link>
      </aside>
    );
  }
}

function mapStateToProps(state) {
  return {
    state,
  }
}

export default connect(mapStateToProps)(SideMenu);
