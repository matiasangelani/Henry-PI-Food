import React from 'react';
import { Link } from 'react-router-dom';
import {
  IconContainer,
  ContentContainer,
  TitleContainer,
  ButtonContainer,
  ChefSVG,
} from './LandingStyled';

const Landing = () => {
  return (
    <>
      <IconContainer />
      {/* <ChefSVG /> */}
      <ContentContainer>
        <TitleContainer>Henry Food</TitleContainer>
        <Link to='/recipes'>
          <ButtonContainer>Acceder</ButtonContainer>
        </Link>
      </ContentContainer>
    </>
  );
};

export default Landing;
