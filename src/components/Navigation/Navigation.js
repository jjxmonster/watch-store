import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import {
   StyledNavigationWrapper,
   StyledLogoWrapper,
   StyledMenuWrapper,
   StyledNumberOfProductsInCart,
} from './Navigation.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import logo from '../../images/logo.jpg';

const Navigation = () => {
   const shoppingCartInStore = useSelector(
      store => store.shoppingCart.shoppingCart
   );
   return (
      <StyledNavigationWrapper>
         <StyledLogoWrapper>
            <img src={logo} alt='logo' />
         </StyledLogoWrapper>
         <StyledMenuWrapper>
            <Link to='/'>Home</Link>
            <Link to='/collection'>Collection</Link>
            <Link to='/shopping-cart' className='shoppingCartNav'>
               {shoppingCartInStore.length > 0 ? (
                  <StyledNumberOfProductsInCart>
                     {shoppingCartInStore.length}
                  </StyledNumberOfProductsInCart>
               ) : null}
               <FontAwesomeIcon className='icon' icon={faShoppingCart} />
            </Link>
         </StyledMenuWrapper>
      </StyledNavigationWrapper>
   );
};

export default Navigation;
