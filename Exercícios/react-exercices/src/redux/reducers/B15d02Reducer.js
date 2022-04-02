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

const B15d04Reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GPS_TEST":
      return {
        ...state,
        ...action.payload,
      }
      
    default:
      return {
        ...state,
        iss_position: {
          longitude: 0,
          latitude: 0,
        }
      }
  }
};


export { B15d02Reducer, B15d03Reducer, B15d04Reducer }
