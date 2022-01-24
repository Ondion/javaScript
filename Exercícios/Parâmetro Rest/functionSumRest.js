// Função que realiza a soma de n parâmetros fazendo uso do elemento Rest.

const somatoria = (...parametros) => parametros.reduce((accumulator, current) => accumulator + current, 0);

console.log(somatoria(1,2,3,4,5,6))
