import styled, { keyframes } from 'styled-components';
import {
  RecipeContainer,
  Image,
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
`;

export const ImageDetail = styled(Image)`
  width: 300px;
  height: 300px;
`;

export const TitleDitail = styled(RecipeTitle)`
  font-size: 25px;
  font-style: italic;
`;

export const DietsDitail = styled(DietsContainer)``;

export const Diets = styled(Diet)`
  padding-left: 20px;
  padding-right: 20px;
`;

export const SummaryDetail = styled.p`
  color: #ffffff;
  font-size: 15px;
  text-align: justify;
  padding-top: 60px;
  line-height: 2.5;
  a {
    color: #e29971;
    font-style: italic;
  }
`;

export const PointsContainer = styled.div`
  display: flex;
`;

export const Points = styled.span`
  padding: 50px 100px 0 100px;
  //margin-top: 100px;
`;

export const StepsContainer = styled.div`
  margin-top: 80px;
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
