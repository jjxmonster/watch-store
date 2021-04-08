import React from 'react';

import ShoppingCartItems from './ShoppingCartItems';
import OrderSummary from './OrderSummary';
import MobileButtonToOrderSummary from './MobileButtonToOrderSummary';

import { StyledShoppingCartWrapper } from './ShoppingCart.css';

const ShoppingCart = () => {
   return (
      <>
         <StyledShoppingCartWrapper>
            <ShoppingCartItems />
            <OrderSummary />
            <MobileButtonToOrderSummary />
         </StyledShoppingCartWrapper>
      </>
   );
};

export default ShoppingCart;
