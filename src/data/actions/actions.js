import {
   SET_SELECTED_WATCH_ID,
   ADD_PRODUCT,
   REMOVE_PRODUCT,
   INCREMENT_AMOUNT_OF_PRODUCT_ALREADY_IN_CART,
   DECREMENT_AMOUNT_OF_PRODUCT_ALREADY_IN_CART,
   REMOVE_ALL_PRODUCTS,
   ADD_ORDER,
} from '../constants';

export const setSelectedWatchId = id => {
   return {
      type: SET_SELECTED_WATCH_ID,
      payload: id,
   };
};

export const addProduct = ({ name, price, amount, id }) => {
   return {
      type: ADD_PRODUCT,
      payload: {
         name,
         price,
         amount,
         totalPrice: price * amount,
         id,
      },
   };
};

export const removeProduct = id => {
   return {
      type: REMOVE_PRODUCT,
      payload: { id },
   };
};

export const incrementAmountOfProductBeingAlreadyInCart = ({
   price,
   amount,
   id,
}) => {
   return {
      type: INCREMENT_AMOUNT_OF_PRODUCT_ALREADY_IN_CART,
      payload: {
         price,
         amount,
         id,
      },
   };
};

export const decrementAmountOfProductBeingAlreadyInCart = ({
   price,
   amount,
   id,
}) => {
   return {
      type: DECREMENT_AMOUNT_OF_PRODUCT_ALREADY_IN_CART,
      payload: {
         price,
         amount,
         id,
      },
   };
};

export const addOrderToReduxStore = data => {
   return { type: ADD_ORDER, payload: data };
};

export const removeAllProductsFromShoppingCart = () => {
   return { type: REMOVE_ALL_PRODUCTS, payload: {} };
};
