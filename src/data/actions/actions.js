import {
   SET_SELECTED_WATCH_ID,
   ADD_PRODUCT,
   INCREMENT_AMOUNT_OF_PRODUCT_ALREADY_IN_CART,
   DECREMENT_AMOUNT_OF_PRODUCT_ALREADY_IN_CART,
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
