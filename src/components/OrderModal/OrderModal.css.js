import { divide } from 'lodash';
import styled from 'styled-components';

export const StyledModalWrapper = styled.div`
   position: fixed;
   height: 100%;
   width: 100%;
   top: 0;
   left: 0;
   background: rgba(0, 0, 0, 0.5);
   z-index: 100;
   display: flex;
   justify-content: center;
   align-items: center;
`;

export const StyledOrderModal = styled.div`
   width: 20vw;
   height: 50vh;
   background: red;
`;
