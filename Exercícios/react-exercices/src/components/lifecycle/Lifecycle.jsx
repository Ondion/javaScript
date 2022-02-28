import React from "react";

class Lifecycle extends React.Component {
  constructor() {
    super();
    console.log('constructor');

    this.state = {
      piada: 'myJoke',
    }
  }

  componentDidMount() {
    console.log('componentDidMount');
    this.setState({
      piada: 'mudou!'
    })
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
    
  }

  

  render() {
    console.log('render');
    return(
      <>
      <p>{this.state.piada}</p>
      <button onClick={this.componentDidUpdate}>Aqui</button>
      </>
    )
  }
}

export default Lifecycle;