const INITIAL_STATE = {};

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

const B15d03Reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_FORM":
      return {
        ...state,
        ...action.payload,
      }
      
    default:
      return state;
  }
};

export { B15d02Reducer, B15d03Reducer }
