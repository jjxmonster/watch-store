import { act } from 'react-dom/test-utils';
import {
   SET_SELECTED_WATCH_ID,
   ADD_PRODUCT,
   INCREMENT_AMOUNT_OF_PRODUCT_ALREADY_IN_CART,
} from '../constants';

const commonState = {
   selectedWatchId: 1,
};

const shoppingCartState = {
   shoppingCart: [],
};

export const commonReducer = (state = commonState, action) => {
   switch (action.type) {
      case SET_SELECTED_WATCH_ID:
         return {
            ...state,
            selectedWatchId: action.payload,
         };

      default:
         return state;
   }
};

export const shoppingCart = (state = shoppingCartState, action) => {
   switch (action.type) {
      case ADD_PRODUCT:
         return {
            ...state,
            shoppingCart: [...state.shoppingCart, action.payload],
         };
      case INCREMENT_AMOUNT_OF_PRODUCT_ALREADY_IN_CART:
         return {
            ...state,
            shoppingCart: state.shoppingCart.map(currentProduct => {
               if (currentProduct.id !== action.payload.id) {
                  return currentProduct;
               }
               const { amount, price } = action.payload;
               const newAmount = currentProduct.amount + amount;
               return {
                  name: currentProduct.name,
                  price: newAmount * price,
                  amount: newAmount,
                  id: currentProduct.id,
               };
            }),
         };
      default:
         return state;
   }
};
