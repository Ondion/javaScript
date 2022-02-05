function append(data) {
  const ul = document.querySelector('ul');

  const li = document.createElement('li');
  const divNome = document.createElement('div');
  const divImage = document.createElement('div');
  const img = document.createElement('img');

  divNome.innerHTML = data.name;
  img.src = data.imageUrl;
  divImage.appendChild(img);

  li.appendChild(divNome);
  li.appendChild(divImage);

  ul.appendChild(li);
}

// function fetchPokemon(pokemonName) {
//   fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
//     .then((response) => response.json())
//     .then((object) =>
//       append({ name: object.name, imageUrl: object.sprites.front_default })
//     )
//     .catch((error) => {
//       console.log('Deu ruim! Ao capturar ' + pokemonName);
//     });
// }

const fetchPokemon = async (pokemonName) => {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );
    const object = await response.json();
    append({ name: object.name, imageUrl: object.sprites.front_default });
  } catch (error) {
    console.log('Deu ruim! Ao capturar ' + pokemonName);
  }
};

async function catchThemAll() {
  // await Promise.all([
  //   fetchPokemon('eevee'),
  //   fetchPokemon('kakuna'),
  //   fetchPokemon('charmander'),
  //   fetchPokemon('abra'),
  //   fetchPokemon('bulbasaur'),
  //   fetchPokemon('espeon'),
  // ]);
  // const pokedex = [
  //   'charizard',
  //   'blastoise',
  //   'venusaur',
  //   'dragonite',
  //   'gengar',
  //   'alakazam',
  // ];

  const pokedex = [];
  let i = 1;

  while(i <= 151) {
    pokedex.push(i);
    console.log(i);
    i +=1
    
  }

  for (const pokemon of pokedex) {
    await fetchPokemon(pokemon);
  }
}

window.onload = catchThemAll;
