const { describe, expect, it } = require('@jest/globals');
const { call } = require('function-bind');
const {
  createPresentationMessage,
  hackTheDb,
  restartDb,
} = require('./callbacks');

describe('A função createPresentationMessage', () => {
  
  beforeEach(() => {
    restartDb();
  });

  it('retorna erro quando falha', (done) => {
    // restartDb();

    const expectedError = new Error('Explodiu');
    
    function callback(err, _result) {
      try {
        expect(err).toEqual(expectedError);
        done();
      } catch (testError) {
        done(testError);
      }
    }
    
    hackTheDb();
    createPresentationMessage('Xuxa', callback);
  });

  it('retorna corretamente a string', (done) => {
    // restartDb();

    const expectedString =
      'Oi galerinha! Meu nome é Xuxa e minha comida favorita é algodão doce.';

    function callback(_err, result) {
      try {
        expect(result).toBe(expectedString);
        done();
      } catch (testError) {
        done(testError);
      }
    }
    createPresentationMessage('Xuxa', callback);
  });
});


