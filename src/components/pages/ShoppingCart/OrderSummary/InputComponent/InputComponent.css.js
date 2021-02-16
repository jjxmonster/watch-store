import styled from 'styled-components';

export const StyledInputWrapper = styled.div`
   flex: 1;
   display: flex;
   flex-direction: column;
`;

export const StyledSingleInput = styled.input`
   outline: 0;
   border: 0;
   height: 50%;
   padding-left: 5%;
   //    border-bottom: red 3px solid;
   background: ${({ theme }) => theme.colors.grey.normal};
   color: ${({ theme }) => theme.colors.white.normal};
   &::placeholder {
      color: ${({ theme }) => theme.colors.grey.light};
   }
   ${({ error }) => (error ? `border-bottom:solid 2px red` : null)};
`;

export const StyledFormErrorSpan = styled.span`
   color: red;
   text-align: center;
`;
