import React from 'react';

import {
   StyledLandingWrapper,
   StyledLandingImageWrapper,
   StyledSloganWrapper,
   StyledTitleWrapper,
} from './HomePage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import WatchImage from '../../../images/landing.jpg';

const HomePage = () => {
   return (
      <StyledLandingWrapper>
         <StyledSloganWrapper>
            <StyledTitleWrapper>
               <h1>Innovators by Tradition</h1>
               <button>
                  SHOP COLLECTION <FontAwesomeIcon icon={faCaretRight} />
               </button>
            </StyledTitleWrapper>
         </StyledSloganWrapper>

         <StyledLandingImageWrapper>
            <img src={WatchImage} alt='watch' />
         </StyledLandingImageWrapper>
      </StyledLandingWrapper>
   );
};

export default HomePage;
