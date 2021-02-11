import { toast } from 'react-toastify';

import {
   ADD_PRODUCT,
   INCREMENT_AMOUNT_OF_PRODUCT_ALREADY_IN_CART,
} from '../constants';
const appMiddleware = store => next => action => {
   console.log('dispatching', action);

   if (
      action.type === ADD_PRODUCT ||
      action.type === INCREMENT_AMOUNT_OF_PRODUCT_ALREADY_IN_CART
   ) {
      toast.dark('Product has been successfully added', {
         progressClassName: 'toastProgressBar',
         position: toast.POSITION.TOP_CENTER,
      });
   }

   return next(action);
};
export default appMiddleware;
