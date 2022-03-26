import React from 'react';
import { Link } from 'react-router-dom';
import {
  IconContainer,
  ContentContainer,
  TitleContainer,
  ButtonContainer,
  ChefSVG,
  LandingContainer,
  ContentConteiner,
  MainTitle,
  AccessButton,
} from './LandingStyled';

const Landing = () => {
  return (
    // <>
    //   <IconContainer />
    //   <ChefSVG />
    //   <ContentContainer>
    //     <TitleContainer>Henry Food</TitleContainer>
    //     <Link to='/recipes'>
    //       <ButtonContainer>Acceder</ButtonContainer>
    //     </Link>
    //   </ContentContainer>
    // </>
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
