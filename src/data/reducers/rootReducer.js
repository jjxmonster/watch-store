import { combineReducers } from 'redux';

import { commonReducer, shoppingCart } from './reducer';

export const rootReducer = combineReducers({
   watches: commonReducer,
   shoppingCart: shoppingCart,
});
