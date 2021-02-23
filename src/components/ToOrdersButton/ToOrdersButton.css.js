import styled from 'styled-components';

export const StyledToOrderButtonWrapper = styled.div`
   transition: 0.4s ease;
   position: absolute;
   margin: auto;
   width: 200px;
   height: 50px;
   display: flex;
   flex-direction: row;
   ${({ visible }) => (visible ? 'margin-left:0' : 'margin-left:-150px')};
   > span {
      display: flex;
      align-items: center;
      justify-content: center;
   }
   > span:nth-child(odd) {
      position: relative;
      flex: 3;
      overflow: hidden;
      > .toOrderButton {
         padding: 50px;
         z-index: 2;
      }
      &:before {
         position: absolute;
         content: '';
         width: 0;
         height: 0;
         background: ${({ theme }) => theme.colors.red.normal};
         z-index: 1;
         transition: 0.3s ease;
      }
      &:hover:before {
         width: 100%;
         height: 100%;
      }
   }

   > span:nth-child(even) {
      flex: 1;
      color: ${({ theme }) => theme.colors.red.normal};
      font-size: 2em;
      cursor: pointer;
      transition: 0.3s ease;
      ${({ visible }) =>
         visible ? 'transform:rotate(540deg)' : 'transform:rotate(0deg)'};
   }
`;
