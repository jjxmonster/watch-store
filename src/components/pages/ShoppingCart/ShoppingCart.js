import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
   faPlus,
   faMinus,
   faArrowLeft,
} from '@fortawesome/free-solid-svg-icons';

import { formatCurrency } from '../../../themes/index';

import {
   StyledShoppingCartWrapper,
   StyledShoppingCartItems,
   StyledOredSummaryWrapper,
   StyledShoppingCartHeader,
   StyledShoppingItemsList,
   StyledShoppingListElement,
   StyledEmptyCartWrapper,
   StyledBarOfItemsList,
   StyledAmountInput,
} from './ShoppingCart.css';

import { products } from '../../../products/products';

const AmountInputInCart = amount => {
   return (
      <StyledAmountInput>
         <div className='amountIcon2'>
            <FontAwesomeIcon icon={faMinus} />
         </div>
         <div className='amountOfProductInCart'>{amount.amount}</div>
         <div className='amountIcon2'>
            <FontAwesomeIcon icon={faPlus} />
         </div>
      </StyledAmountInput>
   );
};

const ShoppingCart = () => {
   const shoppingCartInStore = useSelector(
      store => store.shoppingCart.shoppingCart
   );

   const ShoppingCartListElement =
      shoppingCartInStore.length > 0 ? (
         shoppingCartInStore.map(element => {
            const elementImage = products.filter(
               item => item.id === element.id
            )[0].images[0];

            return (
               <StyledShoppingListElement key={element.id}>
                  <div className='elementLeft'>
                     <img src={elementImage} />
                     <h4>{element.name}</h4>
                  </div>
                  <div className='elementRight'>
                     <AmountInputInCart amount={element.amount} />
                     <span>{formatCurrency(element.price)}</span>
                     <span>
                        {formatCurrency(element.price * element.amount)}
                     </span>
                  </div>
               </StyledShoppingListElement>
            );
         })
      ) : (
         <StyledEmptyCartWrapper>
            <h2> YOUR SHOPPING CART IS EMPTY</h2>
            <Link to='/collection'>
               {' '}
               <FontAwesomeIcon icon={faArrowLeft} /> Back to collection
            </Link>
         </StyledEmptyCartWrapper>
      );

   return (
      <StyledShoppingCartWrapper>
         <StyledShoppingCartItems>
            <StyledShoppingCartHeader>
               <h2>Shopping Cart</h2>
               <h2>{shoppingCartInStore.length} Items</h2>
            </StyledShoppingCartHeader>
            <StyledBarOfItemsList>
               <div className='barLeft'>
                  <p>PRODUCT DETAILS</p>
               </div>
               <div className='barRight'>
                  <p>AMOUNT</p>
                  <p>PRICE</p>
                  <p>TOTAL</p>
               </div>
            </StyledBarOfItemsList>
            <StyledShoppingItemsList>
               {/* <StyledShoppingListElement>
                  <div className='elementLeft'>
                     <img src={img} />
                     <h4>TISSOT SEASTAR 1000 POWERMATIC 80</h4>
                  </div>
                  <div className='elementRight'>
                     <AmountInputInCart />
                     <span>200</span>
                     <span>500</span>
                  </div>
               </StyledShoppingListElement> */}
               {ShoppingCartListElement}
            </StyledShoppingItemsList>
         </StyledShoppingCartItems>
         <StyledOredSummaryWrapper></StyledOredSummaryWrapper>
      </StyledShoppingCartWrapper>
   );
};

export default ShoppingCart;
