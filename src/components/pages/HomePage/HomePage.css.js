import styled from 'styled-components';

export const StyledLandingWrapper = styled.div`
   width: 100%;
   height: 85vh;
   display: flex;
   flex-direction: row;
`;

export const StyledSloganWrapper = styled.div`
   flex: 1;
   display: flex;
   justify-content: center;
   align-items: center;
   background: ${({ theme }) => theme.colors.black.light};
   position: relative;
`;
export const StyledTitleWrapper = styled.div`
   width: 80%;
   height: 80%;
   > h1 {
      line-height: 6vw;
      width: 70%;
      color: ${({ theme }) => theme.colors.white.normal};
      text-transform: uppercase;
      font-size: 4vw;
      border-bottom: 5px solid ${({ theme }) => theme.colors.red.normal};
   }
`;

export const StyledLandingPageButton = styled.a`
   width: 25vh;
   height: 5vh;
   display: flex;
   justify-content: center;
   align-items: center;
   background: transparent;
   border: 1px solid ${({ theme }) => theme.colors.red.normal};
   font-size: 1.7vh;
   position: relative;
   cursor: pointer;
   transition: 0.3s ease;
   > .landingButtonIcon {
      color: ${({ theme }) => theme.colors.white.normal};
      position: absolute;
      right: 20%;
      top: 0;
      bottom: 0;
      margin: auto;
      transition: 0.3s ease;
      opacity: 0;
   }
   > span {
      color: ${({ theme }) => theme.colors.white.normal};
      font-weight: 500;
      transition: 0.3s ease;
   }
   &:hover {
      background: ${({ theme }) => theme.colors.red.normal};
   }
   &:hover span {
      padding-right: 20px;
   }
   &:hover .landingButtonIcon {
      opacity: 1;
      right: 15%;
   }
`;

export const StyledLandingImageWrapper = styled.div`
   flex: 1;
   > img {
      height: 100%;
      width: 100%;
   }
`;
