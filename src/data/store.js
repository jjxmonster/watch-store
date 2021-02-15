import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './reducers/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

import appMiddleware from './middlewares/middlewares';

import { loadState } from './localStorage';

export default function configureStore() {
   const persistedState = loadState();
   const middlewares = [appMiddleware];
   const middlewareEnhancer = applyMiddleware(...middlewares);

   const enhancers = [middlewareEnhancer];
   const composedEnhancers = composeWithDevTools(...enhancers);
   const store = createStore(rootReducer, persistedState, composedEnhancers);

   return store;
}
