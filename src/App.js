import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
   HomePage,
   CollectionPage,
   ShoppingCart,
   Navgation,
} from './components';

import GlobalStyles from './index.css';

function App() {
   return (
      <>
         <GlobalStyles />
         <Router>
            <Navgation />
            <Switch>
               <Route path='/collection'>
                  <CollectionPage />
               </Route>
               <Route path='/shopping-cart'>
                  <ShoppingCart />
               </Route>
               <Route path='/' exact>
                  <HomePage />
               </Route>
            </Switch>
         </Router>
      </>
   );
}

export default App;
