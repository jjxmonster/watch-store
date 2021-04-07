import styled from 'styled-components';

export const StyledShoppingCartItems = styled.div`
   flex: 6;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   position: relative;
`;

export const StyledShoppingCartHeader = styled.div`
   width: 80%;
   height: 20%;
   top: 0;
   position: absolute;
   color: white;
   display: flex;
   justify-content: space-between;
   align-items: flex-end;
   padding-bottom: 3%;
   font-size: 2.5vh;
   border-bottom: 2px solid ${({ theme }) => theme.colors.red.normal};
   @media (max-width: 750px) {
      width: 100%;
      padding-left: 10px;
      padding-right: 10px;
      font-size: 2vh;
      height: 10%;
   }
`;

export const StyledBarOfItemsList = styled.div`
   width: 80%;
   height: 10%;
   top: 20%;
   position: absolute;
   font-weight: 500;
   color: ${({ theme }) => theme.colors.grey.light};
   display: flex;
   @media (max-width: 750px) {
      display: none;
   }
   > div {
      flex: 1;
   }
   > .barLeft {
      display: flex;
      align-items: center;
   }
   > .barRight {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-right: 5%;
      padding-left: 10%;
   }
`;

export const StyledShoppingItemsList = styled.ul`
   width: 80%;
   position: absolute;
   top: 30%;
   @media (max-width: 750px) {
      width: 100%;
      top: 15%;
      padding: 0 10px;
   }
`;

export const StyledShoppingListElement = styled.li`
   height: 20vh;
   width: 100%;
   border: 1px solid black;
   display: flex;
   padding: 1%;
   margin-bottom: 20px;

   @media (max-width: 750px) {
      position: relative;
      height: 15vh;
   }
   > .elementLeft {
      flex: 5;
      display: flex;

      > img {
         width: 170px;
         height: 100%;
         @media (max-width: 750px) {
            width: 130px;
         }
      }
      > h4 {
         color: ${({ theme }) => theme.colors.white.normal};
         font-size: 1.8vh;
         padding-top: 3%;
      }
   }
   > .elementRight {
      flex: 5;
      display: flex;
      justify-content: space-between;
      position: relative;
      @media (max-width: 750px) {
         flex-direction: column;
         position: static;
      }

      > span {
         padding-top: 1%;
         padding-right: 1%;
         font-size: 3vh;
         color: ${({ theme }) => theme.colors.white.normal};

         @media (max-width: 750px) {
            font-size: 2.5vh;
            position: absolute;
            right: 0;
         }
      }
      > span:nth-child(even) {
         @media (max-width: 750px) {
            display: none;
         }
      }
   }
`;

export const StyledDeleteProductButton = styled.button`
   color: white;
   width: 20%;
   height: 20%;
   font-size: 1.5vh;
   position: absolute;
   right: 0;
   bottom: 10%;
   margin: auto;
   border-bottom: solid 1px red;
   transition: 0.2s ease;
   &:hover {
      opacity: 0.7;
   }
`;

export const StyledAmountInput = styled.div`
   width: 25%;
   height: 30%;
   display: flex;
   @media (max-width: 750px) {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
   }

   > div {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 2.5vh;
   }
   > .amountIcon2 {
      cursor: pointer;
      color: ${({ theme }) => theme.colors.white.normal};
   }

   > .amountOfProductInCart {
      border: 1px solid ${({ theme }) => theme.colors.grey.normal};
      color: ${({ theme }) => theme.colors.white.normal};
   }
`;

export const StyledEmptyCartWrapper = styled.div`
   color: white;
   height: 20vh;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   > h2 {
      font-size: 3.5vh;
   }
   > a {
      margin-top: 2%;
      text-decoration: none;
      font-size: 3vh;
      position:relative;
      color: ${({ theme }) => theme.colors.red.normal};
      &:before {
         position: absolute;
         margin: auto;
         right:0;
         width: 0%;
         height: 100%;
         border-bottom: solid 4px ${({ theme }) => theme.colors.red.normal};
         content: '';
         transition: 0.3s ease;
      }
      &:hover {
         :before {
            width: 100%;
         }
   }
   
`;
