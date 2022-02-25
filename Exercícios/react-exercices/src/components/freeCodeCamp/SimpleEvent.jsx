import React, { Component } from 'react';


class SimpleEvent extends Component {
  
  alertFunc() {
      alert("outra vez?");
  }
  
  render() {
    return (
      <>
      <button type='button' className="btn btn-primary" onClick={this.alertFunc}>Simple</button>
      </>
    );
  }
}

export default SimpleEvent;
