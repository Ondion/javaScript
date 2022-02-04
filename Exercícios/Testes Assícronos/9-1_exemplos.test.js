// Exemplo de teste no Jest com uso de funções assíncronas.

test('Não deveria passar!', () => {
  setTimeout(() => {
    expect(10).toBe(5); // Testa se 10 é igual a 5, deveria falhar, porém, como é um teste assíncrono o teste irar passar.
  }, 500);
});

test('Não deveria passar!', (done) => {
  setTimeout(() => {
    expect(10).toBe(5); // Testa se 10 é igual a 5, logo, o teste irar falhar, porém por motivo de timeout.
    done();
  }, 500);
});

test('Não deveria passar!', (done) => {
  setTimeout(() => {
    try {
      expect(10).toBe(5); // Esse teste também deveria falhar, porém recebemos outro falso positivo.
      done();
    } catch (error) {
      done();
    }
  }, 500);
});

test('Não deveria passar!', (done) => {
  setTimeout(() => {
    try {
      expect(10).toBe(0);
      done();
    } catch (error) {
      done(error); // Aqui foi adicionado a ação de erro, agora sim o teste ira falhar corretamente.
    }
  }, 500);
});

function asyncSum(a, b, callback){
  setTimeout(() => {
    const result = a + b;
    callback(result);
  }, 500);
};

test('Teste da função asyncSum, onde 5 é somado com 10.', (done) => {
  asyncSum(5, 10, (result) => {
    try {
      expect(result).toBe(15);
      done();
    } catch (error) {
      done(error);
    }
  });
});
