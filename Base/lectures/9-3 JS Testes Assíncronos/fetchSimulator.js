const VALID_USERNAME = 'alexandremhm';
const VALID_URL = `https://api.github.com/users/${VALID_USERNAME}`;

const data = {
  name: 'Matheus Alexandre',
  company: '@betrybe',
  twitter: undefined,
  bio: 'Web Development Student and \r\n' +
    'Summer Student at Trybe. Front-end: React, HTML, JS e CSS. #openToWork',
  location: 'Brazil',
};

const fetchSimulator = (url) => {
  if (!url || url !== VALID_URL) {
    return Promise.reject(new Error('Usuário inválido'));
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        json: () => Promise.resolve(data),
      });
    }, 200);
  });
};

global.fetch = jest.fn(fetchSimulator);
afterEach(jest.clearAllMocks);


module.exports = fetchSimulator;