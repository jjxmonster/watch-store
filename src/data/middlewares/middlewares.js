import { toast } from 'react-toastify';

import { ADD_PRODUCT } from '../constants';
const appMiddleware = store => next => action => {
   console.log('dispatching', action);

   if (action.type === ADD_PRODUCT) {
      toast.dark('Product has been successfully added', {
         progressClassName: 'toastProgressBar',
         position: toast.POSITION.TOP_CENTER,
      });
   }

   return next(action);
};
export default appMiddleware;
