import React, { Component } from 'react';
import './FetchRickAndMorty.css';

class FetchRickAndMorty extends Component {
  constructor(props){
    super(props);

    this.fetchCharacters = this.fetchCharacters.bind(this)

    this.state = {
        characters: [],
    };
  }

  fetchCharacters = () => {
    fetch('https://rickandmortyapi.com/api/character?page=01')
    .then(response => response.json())
    .then(data => {
      this.setState({
        characters: data.results,
      })
    })
  }

  componentDidMount() {
    this.fetchCharacters()
  }
  

  render() {



    return (
      <div className="FetchRickAndMorty">
        <h1>
          Ricky and Morty Characters
        </h1>
        <div className="divao">
        {this.state.characters.map(({ image, name, status, species, type, gender }) => (
          <div key={ name }>
            <img src={ image } alt="" />
            <p><strong>Name: { name }</strong></p>
            <p><strong>Status: { status }</strong></p>
            <p><strong>Species: { species }</strong></p>
            <p><strong>Type: { type }</strong></p>
            <p><strong>Gender: { gender }</strong></p>
          </div>
        ))}
      </div>
      </div>
    );
  }
}

export default FetchRickAndMorty;
