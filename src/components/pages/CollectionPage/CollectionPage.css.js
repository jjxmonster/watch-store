import styled from 'styled-components';

export const StyledCollectionWrapper = styled.div`
   width: 100%;
   height: 85vh;
   display: flex;
   flex-direction: row;
   background: ${({ theme }) => theme.colors.black.light}; ;
`;

export const StyledCollectionList = styled.ul`
   flex: 2;
   display: flex;
   flex-direction: column;

   > li {
      flex: 1;
      position: relative;
      overflow: hidden;
      cursor: pointer;
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
      background: ${({ theme }) => theme.colors.grey.normal};
      width: 120%;
   }
`;

export const StyledProductWrapper = styled.div`
   flex: 8;
   display: flex;
   justify-content: center;
   align-items: center;
`;

export const StyledWatchImages = styled.div`
   flex: 10;
   background: yellow;
`;

export const StyledNumberOfProduct = styled.h1`
   position: absolute;
   font-size: 12vw;
   top: 25%;
   color: white;
   margin: auto;
   color: ${({ theme }) => theme.colors.grey.light};
   opacity: 0.25;
`;
