import React from 'react';
import { useState } from 'react';

import { WatchInfoAndAddButton } from '../../../components';

import {
   StyledCollectionWrapper,
   StyledCollectionList,
   StyledProductWrapper,
   StyledWatchImages,
   StyledNumberOfProduct,
} from './CollectionPage.css';

import { products } from '../../../products/products';

const CollectionPage = () => {
   const [selectedWatchId, setSelectedWatchId] = useState(1);

   const productsList = products.map((item, id) => (
      <li onClick={() => setSelectedWatchId(id + 1)}>
         <img src={item.images[0]} />
      </li>
   ));

   return (
      <StyledCollectionWrapper>
         <StyledCollectionList>{productsList}</StyledCollectionList>
         <StyledProductWrapper>
            <StyledNumberOfProduct>0{selectedWatchId}/05</StyledNumberOfProduct>
            <WatchInfoAndAddButton selectedWatchId={selectedWatchId} />
         </StyledProductWrapper>
         <StyledWatchImages />
      </StyledCollectionWrapper>
   );
};

export default CollectionPage;
