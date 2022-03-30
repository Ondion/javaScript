const change = (send1, send2) => ({
  type: 'CHANCE_TEST',
  payload: {
    valor1: 'string',
    valor2: 'outra string',
    send1,
    send2,
  }
});

export default change;