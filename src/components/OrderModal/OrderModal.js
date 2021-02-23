import React from 'react';
import { createPortal } from 'react-dom';
import { useHistory } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import {
   StyledModalWrapper,
   StyledOrderModal,
   StyledOrderInformationList,
} from './OrderModal.css';
import { useSelector } from 'react-redux';
import { formatCurrency } from '../../themes/index.js';

const OrderModal = () => {
   const order = useSelector(store => store.orderInStore.orderInStore);
   const history = useHistory();

   const handleClose = () => {
      history.goBack();
   };
   console.log(order);

   return createPortal(
      <StyledModalWrapper style={{ color: 'white' }} onClick={handleClose}>
         <StyledOrderModal>
            <div className='modalHeader'>
               <FontAwesomeIcon
                  style={{ color: '#00FF00', fontSize: '6vh' }}
                  icon={faCheckCircle}
               />
               <h1>Your order has been placed!</h1>
            </div>

            <StyledOrderInformationList>
               <li>
                  <span>Name:</span>
                  <span>{order.name}</span>
               </li>
               <li>
                  <span>Email:</span>
                  <span>{order.email}</span>
               </li>
               <li>
                  <span>Address:</span>
                  <span>{order.address}</span>
               </li>
               <li>
                  <span>Date:</span>
                  <span>{order.date}</span>
               </li>
               <li>
                  <span>Cost:</span>
                  <span>{formatCurrency(order.totalCost)}</span>
               </li>
               <li>
                  <span>Items:</span>
                  <span>
                     {order.order.map(item => (
                        <p>{`${item.amount}x ${item.name}`}</p>
                     ))}
                  </span>
               </li>
            </StyledOrderInformationList>
         </StyledOrderModal>
      </StyledModalWrapper>,
      document.querySelector('#modal')
   );
};

export default OrderModal;
