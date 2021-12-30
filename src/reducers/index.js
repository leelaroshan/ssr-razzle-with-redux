import { productReducer} from "./ProductReducer";

import { combineReducers } from 'redux';

const allReducers = combineReducers({
  productsarray: productReducer,
//   : selectProductReducer,
});

export default allReducers; 