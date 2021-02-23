import styled, { keyframes } from 'styled-components';

export const StyledLoadingWrapper = styled.div`
   position: absolute;
   z-index: 1;
   width: 100vw;
   height: 85vh;
   background-color: ${({ theme }) => theme.colors.black.normal};
   color: ${({ theme }) => theme.colors.red.normal};
   display: flex;
   justify-content: center;
   align-items: center;
`;

const load = keyframes`
    0% {
        opacity: 0.08;
        filter: blur(5px);
        letter-spacing: 3px;
    }

    100% {}
  `;

export const StyledLoadingContent = styled.h2`
   animation: ${load} 1.2s infinite 0s ease-in-out;
   animation-direction: alternate;
   text-shadow: 0 0 1px rgb(150, 0, 0);
`;
