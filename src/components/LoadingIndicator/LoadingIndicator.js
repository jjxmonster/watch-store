import React from 'react';

import {
   StyledLoadingWrapper,
   StyledLoadingContent,
} from './LoadingIndicator.css';

const LoadingIndicator = () => {
   return (
      <StyledLoadingWrapper>
         <StyledLoadingContent>Loading...</StyledLoadingContent>
      </StyledLoadingWrapper>
   );
};

export default LoadingIndicator;
