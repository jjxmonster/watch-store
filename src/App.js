import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import {
   HomePage,
   CollectionPage,
   ShoppingCart,
   Navgation,
} from './components';

import GlobalStyles from './index.css';
import theme from './themes/theme';

function App() {
   return (
      <ThemeProvider theme={theme}>
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
      </ThemeProvider>
   );
}

export default App;
