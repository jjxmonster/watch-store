import React from 'react';
import { useSelector } from 'react-redux';

import { sumBy } from 'lodash';

import { formatCurrency } from '../../../../themes/index';

import {
   StyledOredSummaryWrapper,
   StyledOrderSummaryHeader,
   StyledFormWrapper,
   StyledBottomWrapper,
   StyledTotalCostWrapper,
   StyledCheckoutButton,
} from './OrderSummary.css';

const OrderSummary = () => {
   const shoppingCartInStore = useSelector(
      store => store.shoppingCart.shoppingCart
   );

   const totalCost = sumBy(shoppingCartInStore, 'totalPrice');

   return (
      <StyledOredSummaryWrapper>
         <StyledOrderSummaryHeader>
            <h2>Order Summary</h2>
         </StyledOrderSummaryHeader>
         <StyledFormWrapper></StyledFormWrapper>
         <StyledBottomWrapper>
            <StyledTotalCostWrapper>
               <p>TOTAL COST</p>
               <p>{formatCurrency(totalCost)}</p>
            </StyledTotalCostWrapper>
            <StyledCheckoutButton>
               <span>CHECKOUT</span>
            </StyledCheckoutButton>
         </StyledBottomWrapper>
      </StyledOredSummaryWrapper>
   );
};

export default OrderSummary;
