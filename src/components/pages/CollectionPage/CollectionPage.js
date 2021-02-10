import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setSelectedWatchId } from '../../../data/actions/actions';

import { WatchInfoAndAddButton, Slider } from '../../../components';

import {
   StyledCollectionWrapper,
   StyledCollectionList,
   StyledProductWrapper,
   StyledWatchImages,
   StyledNumberOfProduct,
} from './CollectionPage.css';

import { products } from '../../../products/products';

const CollectionPage = () => {
   const reduxDispatch = useDispatch();
   const selectedWatchId = useSelector(store => store.watches.selectedWatchId);

   const productsList = products.map((item, id) => {
      if (item.id === selectedWatchId) {
         return (
            <li
               className='activeProduct'
               key={item.id}
               onClick={() => reduxDispatch(setSelectedWatchId(id + 1))}
            >
               <img src={item.images[0]} />
            </li>
         );
      } else {
         return (
            <li
               key={item.id}
               onClick={() => reduxDispatch(setSelectedWatchId(id + 1))}
            >
               <img src={item.images[0]} />
            </li>
         );
      }
   });

   return (
      <StyledCollectionWrapper>
         <StyledCollectionList>{productsList}</StyledCollectionList>
         <StyledProductWrapper>
            <StyledNumberOfProduct>0{selectedWatchId}/05</StyledNumberOfProduct>
            <WatchInfoAndAddButton />
         </StyledProductWrapper>
         <StyledWatchImages>
            <Slider />
         </StyledWatchImages>
      </StyledCollectionWrapper>
   );
};

export default CollectionPage;
