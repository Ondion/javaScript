const INITIAL_STATE = {
  test: true,
  value: 'string test!'
}

const B15d02Reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "CHANCE_TEST":
      return {
        ...state,
        test: !state.test,
        ...action.payload,
      }
    default:
      return state;
  }
};

export { B15d02Reducer }
