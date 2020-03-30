import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
html{
  padding:0;
  margin: 0;
  box-sizing: border-box;
  font-size:62.5%;
  scroll-behavior: smooth;
  @media ${prop => prop.theme.mediLaptops}{
    font-size:59.5%;
  }
  @media ${prop => prop.theme.medihomeheadertitlemin} {
    font-size: 50.5%;
  }
  @media ${prop => prop.theme.medimobileLarg} {

  font-size: 47.5%;
  }
  @media ${prop => prop.theme.medimobilesmall} {
    font-size: 42.5%;
  }
  @media ${prop => prop.theme.medimobileshort} {
    font-size:40.5%;
  }
  
  

}
*{
  content:"";
  box-sizing: border-box;
  padding: 0;
  margin:0;
  outline: none;
}
body{
  font-family: 'Poppins', sans-serif;
  letter-spacing: .3rem;
}
`;
export default GlobalStyles;
