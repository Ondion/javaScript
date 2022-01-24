// Mais um uso de O.D. com array.

const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];
saudacoes[1](saudacoes[0]);

//Reprodução do código acima, com o uso de O.D.

const [saudação, função] = saudacoes;
função(saudação);
