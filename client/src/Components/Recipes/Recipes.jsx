import React from 'react';
import Recipe from '../Recipe/Recipe';
import { TitleRecipes } from './RecipesStyled';
import { useSelector } from 'react-redux';

const Recipes = ({ currentRecipes }) => {
  const recipes = useSelector((state) => state.recipes);

  return (
    <>
      <TitleRecipes>Recipes</TitleRecipes>
      {/* {typeof recipes === 'object'
        ? alert(recipes.message)
        : */}
      {!currentRecipes.length
        ? alert('Does not exist recipes')
        : currentRecipes?.map((r) => <Recipe key={r.id} {...r} />)}
    </>
  );
};

export default Recipes;
