import React from 'react';
import { Link } from 'react-router-dom';
import imgNotFound from '../../utils/img/FoodNotFound.png';
import {
  RecipeContainer,
  ImageContainer,
  Image,
  TextContainer,
  RecipeTitle,
  DietsContainer,
  Diet,
} from './RecipeStyled';

const Recipe = ({ image, title, diets, id }) => {
  let key = 0;
  return (
    <RecipeContainer>
      <Link to={`/recipe/${id}`}>
        <ImageContainer>
          {image ? (
            <Image src={image} alt='img' />
          ) : (
            <Image src={imgNotFound} alt='img' />
          )}
        </ImageContainer>
      </Link>

      <TextContainer>
        <RecipeTitle> {title} </RecipeTitle>
        <DietsContainer>
          {diets?.map((d) => {
            const split = d.split(' ');

            for (let i = 0; i < split.length; i++)
              split[i] = split[i].charAt(0).toUpperCase() + split[i].slice(1);

            const diet = split.join(' ');
            key++;

            return <Diet key={key}> {diet} </Diet>;
          })}
        </DietsContainer>
      </TextContainer>
    </RecipeContainer>
  );
};

export default Recipe;
