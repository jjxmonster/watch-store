import styled from 'styled-components';

export const StyledInformationWrapper = styled.div`
   width: 70%;
   height: 50%;
   z-index: 1;
   display: grid;
   grid-template-columns: 1fr 1fr 1fr 1fr;
   grid-template-rows: 1fr 20px 1fr 0.5fr 1fr 65px;
   @media (max-width: 750px) {
      grid-template-rows: 1fr 0px 1fr 0.5fr 1fr 50px;
   }
`;

export const StyledAmountInput = styled.div`
   background: ${({ theme }) => theme.colors.grey.light};
   position: relative;
   grid-column-start: 3;
   grid-row-start: 6;
   grid-row-end: 6;
   margin-left: 20px;
   @media (max-width: 750px) {
      grid-column-end: 5;
   }
   > .amount {
      position: absolute;
      left: 0;
      margin: auto;
      width: 70%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.5em;

      border-right: 1px solid ${({ theme }) => theme.colors.black.light};
   }
   > .amountIcon {
      width: 30%;
      height: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      position: absolute;
      margin: auto;
      color: ${({ theme }) => theme.colors.grey.normal};
      transition: 0.2s ease;
      &:hover {
         color: ${({ theme }) => theme.colors.black.normal};
      }
   }

   > .up {
      right: 0;
      top: 0;
      border-bottom: 2px solid ${({ theme }) => theme.colors.black.light};
   }
   > .down {
      margin-top: 50px;
      right: 0;
      bottom: 0;
      border-top: 2px solid ${({ theme }) => theme.colors.black.light};
   }
`;

export const StyledProductName = styled.h2`
   grid-column-start: 1;
   grid-column-end: 5;
   grid-row-start: 1;
   grid-row-end: 1;
   display: flex;
   align-items: flex-end;
   justify-content: flex-start;
   font-size: 4vh;
   color: #fffafa;
   @media (max-width: 750px) {
      font-size: 3vh;
   }
`;

export const StyledProductDesciption = styled.p`
   grid-column-start: 1;
   grid-column-end: 5;
   grid-row-start: 3;
   grid-row-end: 3;
   display: flex;
   color: ${({ theme }) => theme.colors.white.normal};
   @media (max-width: 750px) {
      display: none;
   }
`;

export const StyledProductPrice = styled.p`
   grid-column-start: 1;
   grid-column-end: 3;
   grid-row-start: 5;
   grid-row-end: 5;
   display: flex;
   align-items: flex-start;
   justify-content: flex-start;
   font-size: 4vh;
   color: ${({ theme }) => theme.colors.white.normal};
   @media (max-width: 750px) {
      font-size: 3vh;
   }
`;

export const StyledAddProductButton = styled.button`
   grid-column-start: 1;
   grid-column-end: 3;
   grid-row-start: 6;
   grid-row-end: 6;
   background: ${({ theme }) => theme.colors.red.normal};
   outline: none;
   border: none;
   color: ${({ theme }) => theme.colors.grey.light};
   cursor: pointer;
   font-weight: bold;
   font-size: 1.2em;
   transition: 0.2s ease;
   &:hover {
      color: white;
   }
`;
