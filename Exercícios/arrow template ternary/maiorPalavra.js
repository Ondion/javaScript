// Crie uma função que receba uma frase e retorne qual a maior palavra.

const retornaMaior = (palavra) => {
  const palavrasQuebradas = palavra.split(' ');
  let count = 0
  let retorno = ''

  palavrasQuebradas.forEach(element => element.length >= retorno.length ? retorno = element : retorno = retorno);

  return `A maior palavra da frase passada é: ${retorno}`;
}

console.log(retornaMaior('Programa que retorna a maior palavra da frase passada'));
