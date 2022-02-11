// Faça uma função que retorne o array oddsAndEvens em ordem crescente.

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const ordenar = (array) => array.sort((a, b) => a - b);

console.log(`Os números ${oddsAndEvens}, foram ordenados para ${ordenar(oddsAndEvens)} de forma crescente!`);
