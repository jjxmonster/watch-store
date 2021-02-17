import React from 'react';

import ShoppingCartItems from './ShoppingCartItems';
import OrderSummary from './OrderSummary';

import { StyledShoppingCartWrapper } from './ShoppingCart.css';

const ShoppingCart = () => {
   return (
      <>
         <StyledShoppingCartWrapper>
            <ShoppingCartItems />
            <OrderSummary />
         </StyledShoppingCartWrapper>
      </>
   );
};

export default ShoppingCart;
