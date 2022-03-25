import styled from 'styled-components';
//import { ReactComponent as Icon } from '../../utils/img/ChefHat.svg';
import Icon from '../../utils/img/ChefHat.png';

export const IconContainer = styled.div`
  height: 80%;
  width: 100%;
  top: 10%;
  position: absolute;
  text-align: center;
  //display: inline-block;
  background-image: url(${Icon});
  background-position: 50% 50%;
  //background-attachment: fixed;
  background-size: 600px;
  background-repeat: no-repeat;
`;

export const ContentContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 80%;
  top: 10%;
`;

export const TitleContainer = styled.h1`
  position: relative;
  width: 30%;
  top: 61%;
  left: 39%;
  color: white;
  font-size: 35px;
  font-style: italic;
  transform: rotate(40deg);
`;

export const ButtonContainer = styled.div`
  width: 100%;
  position: absolute;
  top: 85%;
  color: white;
  font-size: 20px;
  font-style: italic;

  //text-decoration: none;
`;

//export const ChefSVG = styled(Icon)``;
