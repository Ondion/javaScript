import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import { B15d02Reducer } from "../reducers/B15d02Reducer";


const reducers = combineReducers({
  B15d02: B15d02Reducer,
})

const store = createStore(reducers, composeWithDevTools());

export default store;
