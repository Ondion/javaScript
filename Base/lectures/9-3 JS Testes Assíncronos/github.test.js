require('./fetchSimulator');
const { getGitHubUserInfos, getUserReposUrl } = require('./github');

expectedInfo = {
  name: 'Matheus Alexandre',
  company: '@betrybe',
  twitter: undefined,
  bio:
    'Web Development Student and \r\n' +
    'Summer Student at Trybe. Front-end: React, HTML, JS e CSS. #openToWork',
  location: 'Brazil',
};

describe('quando chamada, a função getGitHubUserInfos', () => {
  
  test('deve retornar um objeto contendo name, company, twitter, bio, location', async () => {
    expect.assertions(1);
    userInfo = await getGitHubUserInfos('alexandremhm');
    expect(userInfo).toEqual(expectedInfo);
  });

  test('deve chamar a função fetch', async () => {
    expect.assertions(2);
    await getGitHubUserInfos('alexandremhm');
    expect(fetch).toHaveBeenCalled();
    const user = 'alexandremhm';
    const url = `https://api.github.com/users/${user}`;
    expect(fetch).toHaveBeenCalledWith(url);
  });

  test('com usuário inexistente, deve retornar um erro \'Usuário inválido\'', async () => {
    expect.assertions(1); // <- isso aqui é importante
    try {
      await getGitHubUserInfos('usuario-inexistente');
    } catch (error) {
      expect(error).toEqual(new Error('Usuário inválido'));
    }
    // await expect(getGitHubUserInfos('usuario-inexistente')).rejects
    //   .toEqual(new Error('Usuário inválido'));
  });

});
