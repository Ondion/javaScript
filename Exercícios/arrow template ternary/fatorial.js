// Crie uma função que receba um número e retorne seu fatorial.

const fatorial = number => number > 1 ? number * fatorial(number - 1) : 1;

console.log(fatorial(125));
