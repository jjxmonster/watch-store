import React from 'react';
import { useMutation } from 'react-query';
import { useDispatch } from 'react-redux';
import { Form, Field } from 'react-final-form';
import { useHistory } from 'react-router';

import { addOrder } from '../../../../../data/fetch/order.fetch';
import InputComponent from './InputComponent';
import {
   removeAllProductsFromShoppingCart,
   addOrderToReduxStore,
} from '../../../../../data/actions/actions.js';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const OrderForm = ({ order, totalCost }) => {
   const { push } = useHistory();
   const { mutate } = useMutation(addOrder, {
      onSuccess: data => {
         dispatch(addOrderToReduxStore(data));
         dispatch(removeAllProductsFromShoppingCart());
      },
   });
   const dispatch = useDispatch();

   const getOrderDate = () => {
      const date = new Date();
      const orderTime = `${date.getDate()}/${
         date.getMonth() + 1
      }/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

      return orderTime;
   };

   const onSubmit = async values => {
      await sleep(100);
      values.order = order;
      values.totalCost = totalCost;
      values.date = getOrderDate();
      const data = values;
      addTransaction(data);
      push('/shopping-cart/order');
   };

   const addTransaction = data => {
      mutate(data);
   };

   return (
      <Form
         onSubmit={onSubmit}
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
         render={({ handleSubmit, form }) => (
            <form
               id='clientForm'
               onSubmit={event => {
                  const promise = handleSubmit(event);
                  promise &&
                     promise.then(() => {
                        form.reset();
                     });

                  return promise;
               }}
            >
               <Field name='name'>
                  {({ input, meta }) => (
                     <InputComponent
                        input={input}
                        meta={meta}
                        placeholder='Enter your name'
                     />
                  )}
               </Field>
               <Field name='email'>
                  {({ input, meta }) => (
                     <InputComponent
                        input={input}
                        meta={meta}
                        placeholder='Enter your email address'
                     />
                  )}
               </Field>
               <Field name='address'>
                  {({ input, meta }) => (
                     <InputComponent
                        input={input}
                        meta={meta}
                        placeholder='Enter your address'
                     />
                  )}
               </Field>
            </form>
         )}
      />
   );
};

export default OrderForm;
