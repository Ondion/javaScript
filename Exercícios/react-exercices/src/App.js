import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      valor: '',
      valor2: '',
    }
  }

  mudar = ({target: { value }}) => {
    this.setState({valor: value})
  }

  enviar = () => {
    const { valor } = this.state;
    this.setState({
      valor: '',
      valor2: valor
    })
  }

  render() {
    const { valor, valor2 } = this.state;
    return (
      <div>
        <label htmlFor='idInput'>
           Editar!!!
         <input id='idInput' type="email" />
        </label>
        <div>
          <p>Editar!</p>
        </div>
        <input data-testid="input-test" size="100" value={ valor } type='text' onChange={(e) => this.mudar(e)}/>
        <button  value="Enviar" data-testid="button-test" type='button' onClick={() => this.enviar()}>Enviar</button>
        <button type='button'> Apagar </button>
        <h2 data-testid="value-test">{ valor2 }</h2>
      </div>
    );
  }
}

export default App;

