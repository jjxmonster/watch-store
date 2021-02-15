import React from 'react';
import { useSelector } from 'react-redux';

import { sumBy } from 'lodash';
import { Form, Field } from 'react-final-form';

import { formatCurrency } from '../../../../themes/index';

import {
   StyledOredSummaryWrapper,
   StyledOrderSummaryHeader,
   StyledFormWrapper,
   StyledBottomWrapper,
   StyledTotalCostWrapper,
   StyledCheckoutButton,
} from './OrderSummary.css';

const OrderForm = () => {
   return (
      <Form
         onSubmit={console.log}
         validate={values => {
            const errors = {};
            if (!values.name) {
               errors.name = 'Required';
            } else if (values.name.length < 3) {
               errors.name = 'Your name is too short';
            }
            if (!values.email) {
               errors.email = 'Required';
            } else if (!values.email.includes('@')) {
               errors.email = 'Email address must contain "@"';
            }
            if (!values.address) {
               errors.address = 'Required';
            }
            return errors;
         }}
         render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
               <Field name='name'>
                  {({ input, meta }) => (
                     <div>
                        <input
                           {...input}
                           type='text'
                           placeholder='Enter your name'
                        />
                        {meta.error && meta.touched && (
                           <span>{meta.error}</span>
                        )}
                     </div>
                  )}
               </Field>
               <Field name='email'>
                  {({ input, meta }) => (
                     <div>
                        <input
                           {...input}
                           type='text'
                           placeholder='Enter your email address'
                        />
                        {meta.error && meta.touched && (
                           <span>{meta.error}</span>
                        )}
                     </div>
                  )}
               </Field>
               <Field name='address'>
                  {({ input, meta }) => (
                     <div>
                        <input
                           {...input}
                           type='text'
                           placeholder='Enter your address'
                        />
                        {meta.error && meta.touched && (
                           <span>{meta.error}</span>
                        )}
                     </div>
                  )}
               </Field>
            </form>
         )}
      />
   );
};

const OrderSummary = () => {
   const shoppingCartInStore = useSelector(
      store => store.shoppingCart.shoppingCart
   );

   const totalCost = sumBy(shoppingCartInStore, 'totalPrice');

   return (
      <StyledOredSummaryWrapper>
         <StyledOrderSummaryHeader>
            <h2>Order Summary</h2>
         </StyledOrderSummaryHeader>
         <StyledFormWrapper>
            <OrderForm />
         </StyledFormWrapper>
         <StyledBottomWrapper>
            <StyledTotalCostWrapper>
               <p>TOTAL COST</p>
               <p>{formatCurrency(totalCost)}</p>
            </StyledTotalCostWrapper>
            <StyledCheckoutButton>
               <span>CHECKOUT</span>
            </StyledCheckoutButton>
         </StyledBottomWrapper>
      </StyledOredSummaryWrapper>
   );
};

export default OrderSummary;
