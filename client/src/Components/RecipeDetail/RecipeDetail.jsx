import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getRecipeDetails } from '../../redux/actions';
import imgNotFound from '../../utils/img/FoodNotFound.png';
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
      return false;
    });

    let created;
    findCreatedInDb ? (created = true) : (created = '');

    dispatch(getRecipeDetails(parseInt(params.id), created));
  }, [dispatch, params.id, recipes]);

  return (
    <GeneralContainer>
      {Object.keys(recipeDetail).includes('title') ? (
        <RecipeDetailContainer>
          {/* <ImageDetail src={image} alt='img' /> */}
          {image ? (
            <ImageDetail src={image} alt='img' />
          ) : (
            <ImageDetail src={imgNotFound} alt='img' />
          )}
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

          <SummaryDetail dangerouslySetInnerHTML={{ __html: summary }} />

          <div>
            <Points>Points: {weightWatcherSmartPoints}</Points>
            <Points>Healthy Level: {healthScore}</Points>
          </div>
          {recipeDetail.hasOwnProperty('analyzedInstructions') &&
            analyzedInstructions[0].steps.map((s) => {
              const { number, step } = s;

              return (
                <StepsContainer key={number}>
                  <p> Step {number} </p>
                  <p> {step} </p>
                </StepsContainer>
              );
            })}
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
