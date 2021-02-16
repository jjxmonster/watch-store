import React from 'react';

import {
   StyledInputWrapper,
   StyledSingleInput,
   StyledFormErrorSpan,
} from './InputComponent.css';

const InputComponent = ({ input, meta, placeholder }) => {
   return (
      <StyledInputWrapper>
         <StyledSingleInput
            {...input}
            error={meta.error && meta.touched ? true : false}
            type='text'
            placeholder={placeholder}
         />
         {meta.error && meta.touched && (
            <StyledFormErrorSpan>{meta.error}</StyledFormErrorSpan>
         )}
      </StyledInputWrapper>
   );
};

export default InputComponent;
