import { React, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getRecipeDetails } from '../../redux/actions';

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
    if (findCreatedInDb) created = findCreatedInDb.created;

    dispatch(getRecipeDetails(parseInt(params.id), created));
  }, [dispatch]);

  return (
    <div>
      <img src={image} alt='img' />
      <p> {title} </p>
      {diets?.map((d) => {
        const split = d.split(' ');

        for (let i = 0; i < split.length; i++)
          split[i] = split[i].charAt(0).toUpperCase() + split[i].slice(1);

        const diet = split.join(' ');
        key++;

        return <p key={key}> {diet} </p>;
      })}

      {/* <p> {summary?.replace(/<[^>]*>/g, '')} </p> */}

      <p dangerouslySetInnerHTML={{ __html: summary }} />

      <p> {weightWatcherSmartPoints} </p>
      <p> {healthScore} </p>
      {recipeDetail.hasOwnProperty('analyzedInstructions') &&
        analyzedInstructions[0].steps.map((s) => {
          const { number, step, ingredients } = s;

          return (
            <div key={number}>
              <p> {number} </p>
              <p> {step} </p>
              {/* <p> {ingredients} </p> */}
            </div>
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
    </div>
  );
};

export default RecipeDetail;
