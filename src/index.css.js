import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export default createGlobalStyle`
  ${normalize}
  
  *{
    padding:0;
    margin:0;
    box-sizing:border-box;
  }
  body{
    background-color:black;
    font-family: 'Heebo', sans-serif;
  }
  ul{
    list-style:none;
    margin:0;
    padding:0;
  }
`;
