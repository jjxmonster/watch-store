import React, { useState } from 'react';

import { formatCurrency } from '../../themes/index';

import {
   StyledInformationWrapper,
   StyledAmountInput,
   StyledProductName,
   StyledProductDesciption,
   StyledAddProductButton,
   StyledProductPrice,
} from './WatchInfoAndAddButton.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';

import { products } from '../../products/products';
import { useSelector } from 'react-redux';

export const WatchInfoAndAddButton = () => {
   const [amountOfWatches, setAmountOfWatches] = useState(1);
   const selectedWatchId = useSelector(store => store.watches.selectedWatchId);

   const handleDecrementOfAmount = () => {
      if (amountOfWatches === 1) {
         return 0;
      } else {
         setAmountOfWatches(amountOfWatches - 1);
      }
   };
   const selectedWatch = products.filter(item => item.id === selectedWatchId);

   const SelectedWatchInformationComponent = selectedWatch.map(item => (
      <>
         <StyledProductName>{item.name}</StyledProductName>
         <StyledProductDesciption>{item.description}</StyledProductDesciption>
         <StyledProductPrice>
            {formatCurrency(item.price * amountOfWatches)}
         </StyledProductPrice>
      </>
   ));

   return (
      <StyledInformationWrapper>
         {SelectedWatchInformationComponent}
         <StyledAddProductButton>ADD TO CART</StyledAddProductButton>
         <StyledAmountInput>
            <span className='amount'>{amountOfWatches}</span>
            <span
               className='amountIcon up'
               onClick={() => setAmountOfWatches(amountOfWatches + 1)}
            >
               <FontAwesomeIcon icon={faAngleUp} />
            </span>
            <span className='amountIcon down' onClick={handleDecrementOfAmount}>
               <FontAwesomeIcon icon={faAngleDown} />
            </span>
         </StyledAmountInput>
      </StyledInformationWrapper>
   );
};

export default WatchInfoAndAddButton;
