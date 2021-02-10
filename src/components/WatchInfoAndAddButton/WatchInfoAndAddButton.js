import React, { useEffect, useState } from 'react';

import {
   addProduct,
   incrementAmountOfProductBeingAlreadyInCart,
} from '../../data/actions/actions';
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
import { useDispatch, useSelector } from 'react-redux';

export const WatchInfoAndAddButton = () => {
   const [amountOfWatches, setAmountOfWatches] = useState(1);
   const selectedWatchId = useSelector(store => store.watches.selectedWatchId);
   const shoppingCart = useSelector(store => store.shoppingCart.shoppingCart);
   const shoppingCartDispatch = useDispatch();

   const handleDecrementOfAmount = () => {
      if (amountOfWatches === 1) {
         return 0;
      } else {
         setAmountOfWatches(amountOfWatches - 1);
      }
   };
   const selectedWatch = products.filter(item => item.id === selectedWatchId);

   const SelectedWatchInformationComponent = selectedWatch.map(item => (
      <React.Fragment key={item.name}>
         <StyledProductName>{item.name}</StyledProductName>
         <StyledProductDesciption>{item.description}</StyledProductDesciption>
         <StyledProductPrice>
            {formatCurrency(item.price * amountOfWatches)}
         </StyledProductPrice>
      </React.Fragment>
   ));

   const handleAddProduct = () => {
      const selectedWatchObject = selectedWatch[0];

      const isProductAlreadyInCart =
         shoppingCart.filter(item => item.id === selectedWatchId).length > 0;

      if (isProductAlreadyInCart) {
         shoppingCartDispatch(
            incrementAmountOfProductBeingAlreadyInCart({
               amount: amountOfWatches,
               price: selectedWatchObject.price,
               id: selectedWatchId,
            })
         );
      } else {
         shoppingCartDispatch(
            addProduct({
               name: selectedWatchObject.name,
               price: selectedWatchObject.price * amountOfWatches,
               amount: amountOfWatches,
               id: selectedWatchObject.id,
            })
         );
      }
   };

   useEffect(() => {
      setAmountOfWatches(1);
   }, [selectedWatchId]);

   return (
      <StyledInformationWrapper>
         {SelectedWatchInformationComponent}
         <StyledAddProductButton onClick={handleAddProduct}>
            ADD TO CART
         </StyledAddProductButton>
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
