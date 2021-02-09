import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import configureStore from './data/store';
import {
   HomePage,
   CollectionPage,
   ShoppingCart,
   Navgation,
} from './components';

import GlobalStyles from './index.css';
import theme from './themes/theme';

const store = configureStore();

function App() {
   return (
      <Provider store={store}>
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
      </Provider>
   );
}

export default App;
