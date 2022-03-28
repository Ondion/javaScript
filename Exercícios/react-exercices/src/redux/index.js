import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import appReducer from './reducers/appReducer';

const reducers = combineReducers({
  appReducer,
  arrowReducer: (state = {test2: true}) => state, 
});

const store = createStore(reducers, composeWithDevTools());

export default store;
