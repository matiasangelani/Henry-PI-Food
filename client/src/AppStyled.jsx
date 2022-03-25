import { createGlobalStyle } from 'styled-components';
import img from './utils/img/background.jpg';
import img2 from './utils/img/footer.png';

const GlobalStyled = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  background-image : url(${img});
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  min-height: 100vh;
  top: 0;
  left: 0;
  /* width: 100vh; */
  //background-image :linear-gradient(to right, #54586896, #4f3d5070), url(${img}); 
  }
`;

export default GlobalStyled;
