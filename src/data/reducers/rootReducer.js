import { combineReducers } from 'redux';

import { commonReducer, shoppingCart, orderReducer } from './reducer';

export const rootReducer = combineReducers({
   watches: commonReducer,
   shoppingCart: shoppingCart,
   orderInStore: orderReducer,
});
