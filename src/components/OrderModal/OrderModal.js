import React from 'react';
import { createPortal } from 'react-dom';

import { StyledModalWrapper, StyledOrderModal } from './OrderModal.css';

const OrderModal = () => {
   return createPortal(
      <StyledModalWrapper style={{ color: 'white' }}>
         <StyledOrderModal></StyledOrderModal>
      </StyledModalWrapper>,
      document.querySelector('#modal')
   );
};

export default OrderModal;
