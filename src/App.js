import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import configureStore from './data/store';
import { saveState } from './data/localStorage';
import {
   HomePage,
   CollectionPage,
   ShoppingCart,
   Navgation,
   LoadingIndicator,
} from './components';

import GlobalStyles from './index.css';
import theme from './themes/theme';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const OrdersPage = React.lazy(() => import('./components/pages/OrdersPage'));
toast.configure();

const store = configureStore();

store.subscribe(() => {
   saveState(store.getState());
});

function App() {
   const client = new QueryClient({
      defaultOptions: {
         queries: {
            suspense: true,
         },
      },
   });
   return (
      <QueryClientProvider client={client}>
         <Provider store={store}>
            <ThemeProvider theme={theme}>
               <GlobalStyles />
               <Router>
                  <Link to='/orders'>LINK KURWA</Link>
                  <Navgation />
                  <Switch>
                     <Route path='/collection'>
                        <CollectionPage />
                     </Route>
                     <Route path='/shopping-cart'>
                        <ShoppingCart />
                     </Route>
                     <Route path='/orders'>
                        <React.Suspense fallback={<LoadingIndicator />}>
                           <OrdersPage />
                        </React.Suspense>
                     </Route>
                     <Route path='/' exact>
                        <HomePage />
                     </Route>
                  </Switch>
               </Router>
            </ThemeProvider>
         </Provider>
      </QueryClientProvider>
   );
}

export default App;
