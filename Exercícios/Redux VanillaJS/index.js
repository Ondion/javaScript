const INITIAL_STATE = {
  test1: true,
  test2: false,
  test3: "string",
  test4: null,
  test5: undefined,
  test6: 45,
};

const action = { type: "TEST_VALUE" };

const reducer = (state = INITIAL_STATE, action) => {
  if(action.type === "TEST_VALUE") {
    const { test1 } = state;
    return {
      ...state,
      test1: !test1,
    };
  }  
  return state;
};

const store = Redux.createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const button = document.getElementById("idTest");

button.addEventListener("click", () => {
  store.dispatch(action);
});


store.subscribe(() => {
  const state = store.getState();
  console.log(state);
});