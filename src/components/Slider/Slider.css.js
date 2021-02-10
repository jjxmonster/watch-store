import styled from 'styled-components';

export const StyledSliderWrapper = styled.div`
   width: 300%;
   height: 100%;
   background: ${({ theme }) => theme.colors.grey.light};

   transition: 0.5s ease;
   > .image {
      object-fit: scale-down;
      float: left;
      width: ${100 / 3}%;
      height: 100%;
   }
`;

export const StyledNextSlideButton = styled.button`
   width: 40px;
   height: 70px;
   position: absolute;
   background: ${({ theme }) => theme.colors.white.normal};
   right: 0;
   top: 0;
   bottom: 0;
   margin: auto;
   border-top-left-radius: 20px;
   border-bottom-left-radius: 20px;
   font-size: 15px;
   transition: 0.2s ease;

   ${props =>
      props.disabled
         ? `
             opacity:0.7;
           `
         : `
             opacity:1;
             &:hover {
               transform: scale(1.1);
            }
           `};
`;

export const StyledPrevSlideButton = styled.button`
   width: 40px;
   height: 70px;
   background: ${({ theme }) => theme.colors.white.normal};
   position: absolute;
   left: 0;
   top: 0;
   bottom: 0;
   margin: auto;
   border-top-right-radius: 20px;
   border-bottom-right-radius: 20px;
   font-size: 15px;
   transition: 0.2s ease;

   ${props =>
      props.disabled
         ? `
             opacity:0.7;
           `
         : `
             opacity:1;
             &:hover {
               transform: scale(1.1);
            }
           `};
`;
