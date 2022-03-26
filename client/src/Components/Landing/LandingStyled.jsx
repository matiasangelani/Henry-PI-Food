import styled from 'styled-components';
//import { ReactComponent as Icon } from '../../utils/img/ChefHat.svg';
import Icon from '../../utils/img/ChefHat.png';

// export const IconContainer = styled.div`
//   height: 80%;
//   width: 100%;
//   top: 10%;
//   position: absolute;
//   text-align: center;
//   //display: inline-block;
//   background-image: url(${Icon});
//   background-position: 50% 50%;
//   //background-attachment: fixed;
//   background-size: 600px;
//   background-repeat: no-repeat;
// `;

// export const ContentContainer = styled.div`
//   position: absolute;
//   width: 100%;
//   height: 80%;
//   top: 10%;
// `;

// export const TitleContainer = styled.h1`
//   position: relative;
//   width: 30%;
//   top: 61%;
//   left: 39%;
//   color: white;
//   font-size: 35px;
//   font-style: italic;
//   transform: rotate(40deg);
// `;

// export const ButtonContainer = styled.div`
//   width: 100%;
//   position: absolute;
//   top: 85%;
//   color: white;
//   font-size: 20px;
//   font-style: italic;

//   //text-decoration: none;
// `;

//export const ChefSVG = styled(Icon)``;

export const LandingContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentConteiner = styled.div`
  width: 650px;
  height: 650px;
  background-image: url(${Icon});
  background-position: center;
  background-attachment: fixed;
  background-size: 700px;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  row-gap: 300px;
`;

export const MainTitle = styled.h1`
  color: #ffffff;
  margin: 0;
  height: 150px;
  font-family: monospace;
  font-style: italic;
  font-size: 35px;
  text-shadow: 10px 10px 10px #000000;
  position: relative;
  top: 275px;
  right: 50px;
  transform: rotate(41deg);
`;

export const AccessButton = styled.button`
  color: #ffffff;
  background: none;
  border: none;
  font-size: 25px;
  font-family: monospace;
  font-style: italic;
  text-shadow: 10px 10px 5px #000000;
  cursor: pointer;
  &:hover {
    color: #000000;
  }

  /* position: relative;
  bottom: 0; */
  //margin-top: 50px;
  //padding-top: 50px;
`;
