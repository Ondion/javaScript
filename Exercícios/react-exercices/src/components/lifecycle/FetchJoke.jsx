import React from "react";

class FetchJoke extends React.Component { // Componente que faz requisição de pidas via API e renderiza conforme regra de negócio.
  constructor() {
    super();

    this.renderJokeElement = this.renderJokeElement.bind(this);
    this.fetchJoke = this.fetchJoke.bind(this);

    this.state = { // Declaração do default do state.
      jokeObj: '',
      loading: true,
      storedJokes: [],
    };
  }

  async fetchJoke() {
    const header = { headers: { Accept: 'application/json' } }
    const response = await fetch('https://icanhazdadjoke.com/', header);
    const jokeJson = await response.json();
    this.setState({
      jokeObj: jokeJson,
    });
  
  }

  saveJoke = () => {
    this.setState((prev) => ({
      storedJokes: [...prev.storedJokes, prev.jokeObj]
    }))
  }



  componentDidMount() {
    this.fetchJoke();
  }

  renderJokeElement() {
    return(
      <div>
        <button type="button" onClick={this.saveJoke}>
          Salvar
        </button>
      </div>
    );
  }


  render() {
    const { storedJokes } = this.state;
    const loadingElement = <span>Loading...</span>; 

    return(
      <>
       <span>
        { this.state.jokeObj.joke }
        <br />
        <button onClick={this.fetchJoke}>Trocar</button>
        {this.renderJokeElement()}
        { storedJokes.map(({ id, joke }) => (<p key={ id }>{ joke }</p>)) }
      </span>
      </>
    )
  }
}

export default FetchJoke;