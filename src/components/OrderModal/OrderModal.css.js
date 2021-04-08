import styled from 'styled-components';

export const StyledModalWrapper = styled.div`
   position: fixed;
   height: 100%;
   width: 100%;
   top: 0;
   left: 0;
   background: rgba(0, 0, 0, 0.8);
   z-index: 100;
   display: flex;
   justify-content: center;
   align-items: center;
`;

export const StyledOrderModal = styled.div`
   width: 80vw;
   height: 50vh;
   display: flex;
   flex-direction: column;
   > .modalHeader {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      > h1 {
         font-size: 3vh;
      }
   }
`;

export const StyledOrderInformationList = styled.ul`
   flex: 2;
   display: flex;
   flex-direction: column;

   > li {
      font-size: 2vh;
      flex: 1;
      display: flex;
      justify-content: space-between;
      align-items: center;
   }
`;
