import React, { useState } from 'react';

const UseStateObject = () => {
  const object = {
      id: 6,
      name: "Charizard",
      source:
        "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",
    };
  
  const [info, setInfo] = useState(object);
  let [trocar, setTrocar] = useState(1);
  
  const manu = () => {
    trocar += 1;
    setTrocar(trocar)

    if (trocar < 10) {
      setInfo({...info, source: `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/00${trocar}.png`})

    } if (trocar >= 10 && trocar < 100) {
      setInfo({...info, source: `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/0${trocar}.png`})

    } if (trocar >= 100) {
      setInfo({...info, source: `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${trocar}.png`})
    }
  }

  return (
    <>
    <button className="btn btn-primary" type='button' onClick={manu}>Trocar</button>
    <h1>
      {trocar}
      <img src={info.source} alt="" />
    </h1>
    
    </>
  );
}

export default UseStateObject;
