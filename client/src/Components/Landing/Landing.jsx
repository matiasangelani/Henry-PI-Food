import React from 'react';
import { Link } from 'react-router-dom';
import {
  LandingContainer,
  ContentConteiner,
  MainTitle,
  AccessButton,
} from './LandingStyled';

const Landing = () => {
  return (
    <LandingContainer>
      <ContentConteiner>
        <MainTitle>Henry Food</MainTitle>
        <Link to='/recipes'>
          <AccessButton>Acceder</AccessButton>
        </Link>
      </ContentConteiner>
    </LandingContainer>
  );
};

export default Landing;
