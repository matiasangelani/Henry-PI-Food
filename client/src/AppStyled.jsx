import { createGlobalStyle } from 'styled-components';
import img from './utils/img/background.jpg';

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
  }
`;

export default GlobalStyled;
