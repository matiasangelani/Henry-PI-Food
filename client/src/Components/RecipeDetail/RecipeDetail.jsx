import { React, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getRecipeDetails } from '../../redux/actions';
import {
  GeneralContainer,
  RecipeDetailContainer,
  ImageDetail,
  TitleDitail,
  DietsDitail,
  SummaryDetail,
  Diets,
  Points,
  StepsContainer,
  LoadingDetail,
} from './RecipeDetailStyled';

const RecipeDetail = () => {
  const recipeDetail = useSelector((state) => state.recipeDetail);
  const recipes = useSelector((state) => state.recipes);
  const dispatch = useDispatch();
  const params = useParams();
  const {
    image,
    title,
    diets,
    summary,
    weightWatcherSmartPoints,
    healthScore,
    analyzedInstructions,
  } = recipeDetail;
  let key = 0;

  useEffect(() => {
    const findCreatedInDb = recipes.find((r) => {
      if (r.id === parseInt(params.id))
        return Object.keys(r).includes('created');
    });

    let created;
    findCreatedInDb ? (created = true) : (created = '');

    dispatch(getRecipeDetails(parseInt(params.id), created));
  }, [dispatch]);

  return (
    <GeneralContainer>
      {Object.keys(recipeDetail).includes('image') ? (
        <RecipeDetailContainer>
          <ImageDetail src={image} alt='img' />
          <TitleDitail> {title} </TitleDitail>
          <DietsDitail>
            {diets?.map((d) => {
              const split = d.split(' ');

              for (let i = 0; i < split.length; i++)
                split[i] = split[i].charAt(0).toUpperCase() + split[i].slice(1);

              const diet = split.join(' ');
              key++;

              return <Diets key={key}> {diet} </Diets>;
            })}
          </DietsDitail>

          {/* <p> {summary?.replace(/<[^>]*>/g, '')} </p> */}

          <SummaryDetail dangerouslySetInnerHTML={{ __html: summary }} />

          <div>
            <Points>Points: {weightWatcherSmartPoints}</Points>
            <Points>Healthy Level: {healthScore}</Points>
          </div>
          {recipeDetail.hasOwnProperty('analyzedInstructions') &&
            analyzedInstructions[0].steps.map((s) => {
              const { number, step, ingredients } = s;

              return (
                <StepsContainer key={number}>
                  <p> Step {number} </p>
                  <p> {step} </p>
                  {/* <p> {ingredients} </p> */}
                </StepsContainer>
              );
            })}
          {/* {recipeDetail.hasOwnProperty('instructions') &&
        recipeDetail.instructions?.map((s) => {
          const { number, step, ingredients } = s;
          
          return (
            <div key={number}>
              <p> {number} </p>
              <p> {step} </p>
              <p> {ingredients} </p>
            </div>
          );
        }) */}
          {recipeDetail.hasOwnProperty('instructions') && (
            <p> {recipeDetail.instructions} </p>
          )}
        </RecipeDetailContainer>
      ) : (
        <LoadingDetail />
      )}
    </GeneralContainer>
  );
};

export default RecipeDetail;
