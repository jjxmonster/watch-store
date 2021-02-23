import React from 'react';
import { Route } from 'react-router-dom';

import { useSelector } from 'react-redux';

import OrderForm from './OrderForm';
import OrderModal from '../../../OrderModal';

import { sumBy } from 'lodash';

import { formatCurrency } from '../../../../themes/index';

import {
   StyledOredSummaryWrapper,
   StyledOrderSummaryHeader,
   StyledFormWrapper,
   StyledBottomWrapper,
   StyledTotalCostWrapper,
   StyledCheckoutButton,
   StyledEmptyShoppingCartMessage,
} from './OrderSummary.css';

const OrderSummary = () => {
   const shoppingCartInStore = useSelector(
      store => store.shoppingCart.shoppingCart
   );

   const totalCost = sumBy(shoppingCartInStore, 'totalPrice');

   const isShoppingCartEmpty = shoppingCartInStore.length > 0 ? false : true;

   return (
      <>
         <StyledOredSummaryWrapper>
            <StyledOrderSummaryHeader>
               <h2>Order Summary</h2>
            </StyledOrderSummaryHeader>
            <StyledFormWrapper empty={isShoppingCartEmpty ? true : false}>
               {isShoppingCartEmpty ? (
                  <StyledEmptyShoppingCartMessage>
                     EMPTY SHOPPING CART :(
                  </StyledEmptyShoppingCartMessage>
               ) : (
                  <OrderForm
                     order={shoppingCartInStore}
                     totalCost={totalCost}
                  />
               )}
            </StyledFormWrapper>
            <StyledBottomWrapper>
               <StyledTotalCostWrapper>
                  <p>TOTAL COST</p>
                  <p>{formatCurrency(totalCost)}</p>
               </StyledTotalCostWrapper>
               <StyledCheckoutButton
                  type='submit'
                  disabled={isShoppingCartEmpty ? true : false}
                  form='clientForm'
               >
                  <span>CHECKOUT</span>
               </StyledCheckoutButton>
            </StyledBottomWrapper>
         </StyledOredSummaryWrapper>
         <Route path='/shopping-cart/order'>
            <OrderModal />
         </Route>
      </>
   );
};

export default OrderSummary;
