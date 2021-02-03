import React from 'react';
import { Link } from 'react-router-dom';

import {
   StyledNavigationWrapper,
   StyledLogoWrapper,
   StyledMenuWrapper,
} from './Navigation.css';

import logo from '../../images/logo.jpg';

const Navigation = () => {
   return (
      <StyledNavigationWrapper>
         <StyledLogoWrapper>
            <img src={logo} alt='logo' />
         </StyledLogoWrapper>
         <StyledMenuWrapper>
            <Link to='/'>Home</Link>
            <Link to='/collection'>Collection</Link>
            <Link to='/shopping-cart'>cart</Link>
         </StyledMenuWrapper>
      </StyledNavigationWrapper>
   );
};

export default Navigation;
