import { SET_SELECTED_WATCH_ID } from '../constants';

export const setSelectedWatchId = id => {
   return {
      type: SET_SELECTED_WATCH_ID,
      payload: id,
   };
};
