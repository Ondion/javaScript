// Este array simula uma coleção em um banco de dados não-relacional.

const db = [
  {
    id: 123,
    name: "Xuxa",
    favoriteFood: "algodão doce",
    greeting: "Oi galerinha!",
  },
  {
    id: 321,
    name: "João Corça",
    favoriteFood: "churrasco",
    greeting: "Salve!",
  },
  {
    id: 404,
    name: "Faustina O'Missing",
    favoriteFood: null,
    greeting: "Oi.",
  },
];

// Esta variável abaixo, juntamente com as duas funções, hackTheDb() e restartDb() permitem controlar a simulação de uma falha.

let isDbHacked = false;

function hackTheDb() {
  isDbHacked = true;
}

function restartDb() {
  isDbHacked = false;
}

// Esta função simula uma busca no banco de dados e monta uma string a partir da pessoa usuária recuperada desse "banco de dados".

function createPresentationMessage(personName, callback) {
  setTimeout(() => {
    if (isDbHacked) {
      return callback(new Error('Explodiu'), null);
    }

    const queryResult = db.find(({ name }) => name === personName);
  
    const { greeting, name, favoriteFood } = queryResult;

    const greetingString = `${greeting} Meu nome é ${name} e minha comida favorita é ${favoriteFood}.`;

    callback(null, greetingString);
  }, 300);

  return "Agendei a consulta!";
}

// hackTheDb();
function trataresultado(erro, result) {
  if (erro === null) {
    console.log(result);
  } else {
    console.error(erro);
  }
}

console.log(createPresentationMessage("Xuxa", trataresultado));
console.log("Fim");

module.exports = {
  createPresentationMessage,
  hackTheDb,
  restartDb,
};
