import styled from 'styled-components';
import Icon from '../../utils/img/ChefHat.png';

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
`;
