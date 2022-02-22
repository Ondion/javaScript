import React, { Component } from 'react';

class ConstructorThis extends Component {
  constructor() {
    super()
    this.funcConst = this.funcConst.bind(this)
  }

  funcConst() {
    alert("Constructor")
  }

  render() {
    return (
      <>
        <button type='button' className="btn btn-primary" onClick={this.funcConst}>
          Constructor
        </button>
      </>
    );
  }
}

export default ConstructorThis;
