import styled from 'styled-components';

export const StyledOredSummaryWrapper = styled.div`
   flex: 2;
   background: ${({ theme }) => theme.colors.grey.dark};
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   position: relative;
`;

export const StyledOrderSummaryHeader = styled.div`
   width: 80%;
   height: 20%;
   top: 0;
   position: absolute;
   color: white;
   display: flex;
   justify-content: space-between;
   align-items: flex-end;
   padding-bottom: 7%;
   font-size: 2vh;
`;

export const StyledFormWrapper = styled.div`
   margin-top: 15%;
   width: 80%;
   height: 50%;
   border-bottom: 2px solid ${({ theme }) => theme.colors.red.normal};
   border-top: 2px solid ${({ theme }) => theme.colors.red.normal};
   > form span {
      color: red;
   }
`;

export const StyledBottomWrapper = styled.div`
   width: 80%;
   height: 20%;
`;

export const StyledTotalCostWrapper = styled.div`
   width: 100;
   height: 50%;
   color: ${({ theme }) => theme.colors.white.normal};
   font-weight: 500;
   display: flex;
   justify-content: space-between;
   align-items: center;
`;

export const StyledCheckoutButton = styled.button`
   width: 100%;
   height: 30%;
   color: ${({ theme }) => theme.colors.white.normal};
   background: ${({ theme }) => theme.colors.red.normal};
   border: 1px solid ${({ theme }) => theme.colors.red.normal};
   position: relative;
   overflow: hidden;
   & span {
      z-index: 2;
      position: relative;
   }
   &:after {
      z-index: 1;
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      margin: auto;
      height: 100%;
      width: 0%;
      transition: 0.3s ease;
      background: ${({ theme }) => theme.colors.grey.dark};
   }
   &:hover:after {
      width: 100%;
   }
`;
