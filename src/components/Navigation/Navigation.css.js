import styled from 'styled-components';

export const StyledNavigationWrapper = styled.div`
   width: 100vw;
   height: 13vh;
   margin-top: 2vh;
   background: ${({ theme }) => theme.colors.black.normal};
   display: flex;
`;

export const StyledLogoWrapper = styled.div`
   flex: 1;
   margin-left: 15%;
   > img {
      width: 100%;
      height: 100%;
   }
`;

export const StyledMenuWrapper = styled.div`
   background: black;
   display: flex;
   align-items: center;
   justify-content: space-evenly;
   flex: 5;
   > a {
      position: relative;
      text-decoration: none;
      color: white;
      text-transform: uppercase;
      &:before {
         position: absolute;
         margin: auto;
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

      > .icon {
         font-size: 1.5em;
      }
   }
   > .active {
      :before {
         width: 100%;
      }
   }
   > .shoppingCartNav {
      width: 50px;
      &:before {
         border: 0;
      }
   }
`;

export const StyledNumberOfProductsInCart = styled.span`
   width: 1.5em;
   height: 1.5em;
   border-radius: 50%;
   background: ${({ theme }) => theme.colors.red.normal};
   color: ${({ theme }) => theme.colors.white.normal};
   position: absolute;
   margin: auto;
   right: 15%;
   top: 6%;
   display: flex;
   justify-content: center;
   align-items: center;
`;
