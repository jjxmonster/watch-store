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
   > button {
      cursor: pointer;
      background: transparent;
      color: ${({ theme }) => theme.colors.white.normal};
      outline: 0;
      border: 1px solid ${({ theme }) => theme.colors.red.normal};
      width: 200px;
      height: 40px;
      transition: 0.2s ease;
      &:hover {
         background: ${({ theme }) => theme.colors.red.normal};
      }
   }
`;

export const StyledLandingImageWrapper = styled.div`
   flex: 1;
   > img {
      height: 100%;
      width: 100%;
   }
`;
