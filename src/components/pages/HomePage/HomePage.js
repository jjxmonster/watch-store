import React from 'react';

import { Link } from 'react-router-dom';

import {
   StyledLandingWrapper,
   StyledLandingImageWrapper,
   StyledSloganWrapper,
   StyledTitleWrapper,
   StyledLandingPageButton,
} from './HomePage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import WatchImage from '../../../images/landing.jpg';

const HomePage = () => {
   return (
      <StyledLandingWrapper>
         <StyledSloganWrapper>
            <StyledTitleWrapper>
               <h1>Innovators by Tradition</h1>
               <Link to='/collection'>
                  <StyledLandingPageButton>
                     <span>SHOP COLLECTION</span>
                     <FontAwesomeIcon
                        icon={faArrowRight}
                        className='landingButtonIcon'
                     />
                  </StyledLandingPageButton>
               </Link>
            </StyledTitleWrapper>
         </StyledSloganWrapper>

         <StyledLandingImageWrapper>
            <img src={WatchImage} alt='watch' />
         </StyledLandingImageWrapper>
      </StyledLandingWrapper>
   );
};

export default HomePage;
