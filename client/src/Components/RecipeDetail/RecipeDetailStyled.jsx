import styled, { keyframes } from 'styled-components';
import {
  RecipeContainer,
  ImageContainer,
  Image,
  TextContainer,
  RecipeTitle,
  DietsContainer,
  Diet,
} from '../Recipe/RecipeStyled';

const move = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const GeneralContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const RecipeDetailContainer = styled(RecipeContainer)`
  flex-direction: column;
  width: 700px;
  margin-top: 50px;
  margin-bottom: 50px;

  padding: 50px;
  color: #ffffff;
  font-family: monospace;
  font-size: 15px;
  /* width: 100%;
  height: 100%;
  display: grid;
  grid-auto-flow: row;
  color: #ffffff; */
`;

export const ImageDetail = styled(Image)`
  //justify-self: center;
  width: 300px;
  height: 300px;
`;

export const TitleDitail = styled(RecipeTitle)`
  //justify-self: center;
  font-size: 25px;
  font-style: italic;
`;

export const DietsDitail = styled(DietsContainer)`
  //justify-self: center;
`;

export const Diets = styled(Diet)`
  padding-left: 20px;
  padding-right: 20px;
`;

export const SummaryDetail = styled.p`
  //justify-self: center;
  color: #ffffff;
  font-size: 15px;
  //font-family: monospace;
  text-align: justify;
  padding-top: 60px;
  line-height: 2.5;
  a {
    //text-decoration: none;
    color: #e29971;
    font-style: italic;
  }
`;

export const Points = styled.span`
  padding: 0 100px 0 100px;
`;

export const StepsContainer = styled.div`
  margin-top: 40px;
  text-align: center;
`;

export const LoadingDetail = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding-top: 0px;
    top: 0px;
    margin-left: 0px; */
  //top: 50vh;
  //left: 25%;
  /* width: 80px;
  height: 80px; */
  &:after {
    content: ' ';
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: ${move} 1.2s linear infinite;
  }
`;
