import React, { useState } from 'react';

import { StyledButtonToOrderSummary } from './MobileButtonToOrderSummary.css';

const MobileButtonToOrderSummary = () => {
   const [showOrHideSummary, setShowOrHideSummary] = useState('show');

   const handleMobileButtonClick = () => {
      setShowOrHideSummary(showOrHideSummary === 'show' ? 'hide' : 'show');
      const orderSummaryWrapper = document.querySelector('.order-summary');

      switch (showOrHideSummary) {
         case 'show':
            return (orderSummaryWrapper.style = 'margin-left:0%');
         case 'hide':
            return (orderSummaryWrapper.style = 'margin-left:100%');
         default:
            break;
      }
   };
   return (
      <StyledButtonToOrderSummary onClick={handleMobileButtonClick}>
         {showOrHideSummary === 'show'
            ? 'ORDER SUMMARY'
            : 'BACK TO SHOPPING CART'}
      </StyledButtonToOrderSummary>
   );
};

export default MobileButtonToOrderSummary;
