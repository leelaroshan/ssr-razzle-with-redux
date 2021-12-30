import { applyMiddleware, createStore } from 'redux';
import allReducers from './reducers/index';
import logger from 'redux-logger';


const store = createStore(
  allReducers,
  applyMiddleware(logger)
  
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


export default store;