import React, { Component } from "react";

import trybeLogo from "../images/trybe.png";

import "../css/Header.css";

class Header extends Component {
  render() {
    return (
      <header>
        <div>
          <img src={trybeLogo} alt="Trybe logo" className="header-img logo" />
        </div>
        <input type="text" placeholder="Buscar tópicos" />
      </header>
    );
  }
}

export default Header;
