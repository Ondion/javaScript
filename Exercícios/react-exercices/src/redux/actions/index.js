const change = (send1, send2) => ({
  type: 'CHANCE_TEST',
  payload: {
    valor1: 'string',
    valor2: 'outra string',
    send1,
    send2,
  }
});

const sendForm = (state) => ({
  type: 'SET_FORM',
  payload: {
    ...state,
  }
}) 

const sendGPS = (state) => ({
  type: "GPS_TEST",
  payload: state,
})

export { change, sendForm, sendGPS };