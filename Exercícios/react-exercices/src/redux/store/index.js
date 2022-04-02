import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import { B15d02Reducer, B15d03Reducer, B15d04Reducer } from "../reducers/B15d02Reducer";


const reducers = combineReducers({
  B15d02: B15d02Reducer,
  B15d03: B15d03Reducer,
  B15d04: B15d04Reducer,
});

const store = createStore(reducers, composeWithDevTools());

export default store;
