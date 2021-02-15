import React from 'react';
import { NavLink } from 'react-router-dom';
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
            <NavLink exact to='/'>
               Home
            </NavLink>
            <NavLink to='/collection'>Collection</NavLink>
            <NavLink to='/shopping-cart' className='shoppingCartNav'>
               {shoppingCartInStore.length > 0 ? (
                  <StyledNumberOfProductsInCart>
                     {shoppingCartInStore.length}
                  </StyledNumberOfProductsInCart>
               ) : null}
               <FontAwesomeIcon className='icon' icon={faShoppingCart} />
            </NavLink>
         </StyledMenuWrapper>
      </StyledNavigationWrapper>
   );
};

export default Navigation;
