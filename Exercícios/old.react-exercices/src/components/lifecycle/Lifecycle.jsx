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

  shouldComponentUpdate() {
    return true
  }

  render() {
    console.log('render');
    return(
      <>
        <button>Aqui</button>
      </>
    )
  }
}

export default Lifecycle;