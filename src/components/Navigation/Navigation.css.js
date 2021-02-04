import styled from 'styled-components';

export const StyledNavigationWrapper = styled.div`
   width: 100vw;
   height: 13vh;
   margin-top: 2vh;
   background: ${({ theme }) => theme.colors.black.normal};
   display: flex;
`;

export const StyledLogoWrapper = styled.div`
   background: red;
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
`;
