import styled from 'styled-components';

export const StyledButtonToOrderSummary = styled.button`
   position: fixed;
   bottom: 0;
   width: 100%;
   height: 10%;
   background: ${({ theme }) => theme.colors.red.normal};
   font-size: 2.7vh;
   font-weight: bold;
`;
