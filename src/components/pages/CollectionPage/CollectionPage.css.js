import styled from 'styled-components';

export const StyledCollectionWrapper = styled.div`
   width: 100%;
   height: 85vh;
   display: flex;
   flex-direction: row;
   background: ${({ theme }) => theme.colors.black.light};
   @media (max-width: 750px) {
      flex-direction: column;
   }
`;

export const StyledCollectionList = styled.ul`
   flex: 2;
   display: flex;
   flex-direction: column;

   @media (max-width: 750px) {
      flex: 5;
      flex-direction: row;
   }

   > li {
      flex: 1;
      position: relative;
      overflow: hidden;
      cursor: pointer;
      transition: 0.3s ease;
   }
   > li:hover img {
      transform: scale(1.3);
   }
   > li:hover {
      border: 1px solid ${({ theme }) => theme.colors.grey.normal};
   }
   > li:nth-child(even) {
      background: ${({ theme }) => theme.colors.white.normal};
   }
   > li:nth-child(odd) {
      background: ${({ theme }) => theme.colors.white.normal};
   }
   > li img {
      transition: 0.3s ease;
      width: 100%;
      height: 100%;
      position: absolute;
      object-fit: scale-down;
   }

   > .activeProduct {
      opacity: 0.7;
      > img {
         transform: scale(1.3);
      }

      &:hover {
         border: 0;
      }
   }
`;

export const StyledProductWrapper = styled.div`
   flex: 8;
   display: flex;
   justify-content: center;
   align-items: center;
   @media (max-width: 750px) {
      flex: 6;
   }
`;

export const StyledWatchImages = styled.div`
   flex: 10;
   overflow: hidden;
   position: relative;
   background: yellow;
   @media (max-width: 750px) {
      flex: 10;
   }
`;

export const StyledNumberOfProduct = styled.h1`
   position: absolute;
   font-size: 12vw;
   top: 25%;
   color: white;
   margin: auto;
   color: ${({ theme }) => theme.colors.grey.light};
   opacity: 0.25;
   @media (max-width: 750px) {
      display: none;
   }
`;
