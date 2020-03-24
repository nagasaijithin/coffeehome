import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
html{
  padding:0;
  margin: 0;
  box-sizing: border-box;
  font-size:62.5%;
  scroll-behavior: smooth;
}
*,
*:after,
*:before{
  content:"";
  box-sizing: border-box;
  padding: 0;
  margin:0;
}
body{
  font-family: 'Poppins', sans-serif;
  letter-spacing: .3rem;
}
`;
export default GlobalStyles;
