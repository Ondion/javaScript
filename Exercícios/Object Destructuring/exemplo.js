// Exemplo de uso do Object Destructuring em conjunto com o Spread Operator.

const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

const allValues =  {
  ...user,
  ...jobInfos,
};

const {name, age, nationality, profession, squad, squadInitials} = allValues

console.log(`Hi, my name is ${name}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squad} - ${squadInitials}.`);
