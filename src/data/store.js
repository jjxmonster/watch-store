import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './reducers/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

import appMiddleware from './middlewares/middlewares';

export default function configureStore(preloadedState) {
   const middlewares = [appMiddleware];
   const middlewareEnhancer = applyMiddleware(...middlewares);

   const enhancers = [middlewareEnhancer];
   const composedEnhancers = composeWithDevTools(...enhancers);
   const store = createStore(rootReducer, preloadedState, composedEnhancers);

   return store;
}
