//Função para calculo de potências fazendo uso de valores como default.

const potencia = (number = 6, value = 2) => {
  return number ** value;
};

console.log(potencia());
