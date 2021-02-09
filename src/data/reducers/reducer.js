import { SET_SELECTED_WATCH_ID } from '../constants';

const initialState = {
   selectedWatchId: 1,
};

const appReducer = (state = initialState, action) => {
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

export default appReducer;
