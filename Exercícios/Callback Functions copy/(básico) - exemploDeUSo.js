// Exemplo de uso de funções com callback.

const nomeCompleto = ({ nome, sobrenome, propX }) => {
  return `Olá meu nome é ${nome} ${sobrenome}, ${propX}`;
};

const acharUsuario = (callback) => {
  const retornoUsuario = {
    nome: "NomeTeste",
    sobrenome: "SobreNomeTeste",
    propX: "elementoX",
  };
  return callback(retornoUsuario);
};

console.log(acharUsuario(nomeCompleto));
