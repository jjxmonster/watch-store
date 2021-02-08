import React, { useState } from 'react';

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

export const WatchInfoAndAddButton = ({ selectedWatchId }) => {
   const [amountOfWatches, setAmountOfWatches] = useState(1);

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
         <StyledProductPrice>${item.price}</StyledProductPrice>
      </>
   ));
   console.log(SelectedWatchInformationComponent);
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

// <StyledProductName>TISSOT</StyledProductName>
//          <StyledProductDesciption>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//             eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
//             ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//             aliquip ex ea commodo consequat. Duis aute irure dolor in
//             reprehenderit.
//          </StyledProductDesciption>
//          <StyledProductPrice>$2000,00</StyledProductPrice>
