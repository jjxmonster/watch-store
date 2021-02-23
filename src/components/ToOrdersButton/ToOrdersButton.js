import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';

import { StyledToOrderButtonWrapper } from './ToOrdersButton.css';

const ToOrderButton = () => {
   const [isButtonVisible, setIsButtonVisible] = useState(false);

   return (
      <StyledToOrderButtonWrapper visible={isButtonVisible ? true : false}>
         <span>
            <Link
               className='toOrderButton'
               style={{ color: 'white' }}
               to='/orders'
            >
               ORDERS
            </Link>
         </span>
         <span>
            <FontAwesomeIcon
               className='doubleArrowIcon'
               onClick={() => setIsButtonVisible(!isButtonVisible)}
               icon={faAngleDoubleRight}
            />
         </span>
      </StyledToOrderButtonWrapper>
   );
};

export default ToOrderButton;
