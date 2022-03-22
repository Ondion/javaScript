import React from 'react';
import { useState } from 'react';

const UseStateArray = () => {
  const array = [
    {
      id: 1,
      name: "Bulbasaur",
      source:
        "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",
    },
    {
      id: 2,
      name: "Ivysaur",
      source:
        "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/002.png",
    },
    {
      id: 3,
      name: "Venusaur",
      source:
        "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/003.png",
    },
    {
      id: 4,
      name: "Charmander",
      source:
        "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png",
    },
    {
      id: 5,
      name: "Charmeleon",
      source:
        "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/005.png",
    },
    {
      id: 6,
      name: "Charizard",
      source:
        "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/006.png",
    },
    {
      id: 7,
      name: "Squirtle",
      source:
        "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png",
    },
    {
      id: 8,
      name: "Wartortle",
      source:
        "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/008.png",
    },
    {
      id: 9,
      name: "Blastoise",
      source:
        "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/009.png",
    },
  ];
  
  const [info, setInfo] = useState(array);  

  const removeAll = () => setInfo([])

  const removeOne = (id) => {
    setInfo(info.filter((pokemon) => pokemon.id !== id))
  } 

  return (
    <>
    <button className="btn btn-danger" onClick={removeAll}>Remove All</button>
    {info.map((pokemon) => {
      const {id, name, source} = pokemon;
      return (
        <div className='card' key={id}>
          <p className="text-light bg-dark">{`Number: ${id}`}</p>
          <p className="text-info bg-dark">{name}</p>
          <img src={source} alt={name} height="150px" width="150px" />
          <button className="btn btn-warning" onClick={() => removeOne(id)}>Remove</button>
        </div>
      );
    })}
  
    </>
  );
}

export default UseStateArray;
