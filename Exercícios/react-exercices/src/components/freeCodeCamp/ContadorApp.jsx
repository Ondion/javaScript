import React, { Component } from 'react';


class ContadorApp extends Component {

  constructor() {
    super()
    this.count = this.count.bind(this)
    this.state = {
      cliques: 0,
      status: "btn btn-success",
    }
  }

  // count() {
  //   this.setState({
  //     cliques: (this.state.cliques + 1),
  //   })
  // }

  count() {
    this.setState((antes, _props) => ({cliques: antes.cliques + 1}))

    if(this.state.cliques % 2 === 0) {
      this.setState((antes, _props) => ({status: "btn btn-danger"}))
    } else {
      this.setState((antes, _props) => ({status: "btn btn-success"}))
    }

  }



  render() {

    return (
      <button className={this.state.status} onClick={this.count}>{this.state.cliques}</button>
    );
  }
  
}

export default ContadorApp;
