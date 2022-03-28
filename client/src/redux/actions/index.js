import axios from 'axios';
export const GET_ALL_RECIPES = 'GET_ALL_RECIPES';
export const GET_SEARCH_RECIPES = 'GET_SEARCH_RECIPES';
export const ORDER_RECIPES_DEFAULT = 'ORDER_RECIPES_DEFAULT';
export const ORDER_RECIPES_ASCENDING = 'ORDER_RECIPES_ASCENDING';
export const ORDER_RECIPES_DESCENDING = 'ORDER_RECIPES_DESCENDING';
export const ORDER_RECIPES_BY_HIGH_SCORE = 'ORDER_RECIPES_BY_HIGH_SCORE';
export const ORDER_RECIPES_BY_LOW_SCORE = 'ORDER_RECIPES_BY_LOW_SCORE';
export const FILTER_BY_DIET = 'FILTER_BY_DIET';
export const GET_RECIPE_DETAILS = 'GET_RECIPE_DETAILS';
export const POST_RECIPE = 'POST_RECIPE';
export const GET_DIETS = 'GET_DIETS';

export const getAllRecipes = () => async (dispatch) => {
  try {
    const payload = await axios.get('http://localhost:3001/');

    dispatch({
      type: GET_ALL_RECIPES,
      payload: payload.data,
    });
  } catch (error) {
    alert(error);
  }
};

export const getSearchRecipes = (input) => async (dispatch) => {
  try {
    const payload = await axios.get(
      `http://localhost:3001/recipes?name=${input}`
    );

    dispatch({
      type: GET_SEARCH_RECIPES,
      payload: payload.data,
    });
  } catch (error) {
    alert(error);
  }
};

export const orderRecipesAscending = () => {
  return {
    type: ORDER_RECIPES_ASCENDING,
  };
};

export const orderRecipesDescending = () => {
  return {
    type: ORDER_RECIPES_DESCENDING,
  };
};

export const orderRecipesByHighScore = () => {
  return {
    type: ORDER_RECIPES_BY_HIGH_SCORE,
  };
};

export const orderRecipesByLowScore = () => {
  return {
    type: ORDER_RECIPES_BY_LOW_SCORE,
  };
};

export const filterByDiet = (filter) => {
  return {
    type: FILTER_BY_DIET,
    payload: filter,
  };
};

export const getRecipeDetails = (id, boolean) => async (dispatch) => {
  try {
    const payload = await axios.get(
      `http://localhost:3001/recipes/${id}?created=${boolean}`
    );

    dispatch({
      type: GET_RECIPE_DETAILS,
      payload: payload.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const postRecipe = (recipe) => async (dispatch) => {
  const { name, dishSummary, points, healthy, instructions, diets } = recipe;
  try {
    const response = await axios.post('http://localhost:3001/recipe', {
      name,
      dishSummary,
      points,
      healthy,
      instructions,
      diets,
    });
    dispatch({
      type: POST_RECIPE,
      payload: response,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getDiets = () => async (dispatch) => {
  try {
    const payload = await axios.get('http://localhost:3001/types');

    dispatch({
      type: GET_DIETS,
      payload: payload.data,
    });
  } catch (error) {
    console.log(error);
  }
};
