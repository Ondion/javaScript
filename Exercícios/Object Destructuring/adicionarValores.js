// Default Destructuring para adicionar valores.


const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const { nationality = 'Brazilian' } = person;

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

const getNationality = ({ firstName, nationality = "Brazilian" }) => `${firstName} is ${nationality}`;

console.log(getNationality(otherPerson));
console.log(getNationality(person));
