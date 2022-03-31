import * as actions from '../actions';

const initialState = {
  getRecipes: [],
  recipes: [],
  recipeDetail: {},
  newRecipe: {},
  typeDiets: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_ALL_RECIPES:
      return {
        ...state,
        getRecipes: action.payload,
        recipes: action.payload,
      };

    case actions.GET_SEARCH_RECIPES:
      return {
        ...state,
        recipes: action.payload,
      };

    case actions.ORDER_RECIPES_ASCENDING:
      let ascendingRecipes = state.recipes.slice().sort((r1, r2) => {
        const title1 = r1.title.toLowerCase();
        const title2 = r2.title.toLowerCase();

        if (title1 < title2) {
          return -1;
        } else if (title2 > title1) {
          return 1;
        } else {
          return 0;
        }
      });
      return {
        ...state,
        recipes: ascendingRecipes,
      };

    case actions.ORDER_RECIPES_DESCENDING:
      let descendingRecipes = state.recipes
        .slice()
        .sort((r1, r2) => {
          const title1 = r1.title.toLowerCase();
          const title2 = r2.title.toLowerCase();

          if (title1 < title2) {
            return -1;
          } else if (title2 > title1) {
            return 1;
          } else {
            return 0;
          }
        })
        .reverse();
      return {
        ...state,
        recipes: descendingRecipes,
      };

    case actions.ORDER_RECIPES_BY_HIGH_SCORE:
      let highScoreRecipe = state.recipes.slice().sort((r1, r2) => {
        const score1 = r1.weightWatcherSmartPoints;
        const score2 = r2.weightWatcherSmartPoints;

        if (score2 < score1) {
          return -1;
        } else if (score1 > score2) {
          return 1;
        } else {
          return 0;
        }
      });
      return {
        ...state,
        recipes: highScoreRecipe,
      };

    case actions.ORDER_RECIPES_BY_LOW_SCORE:
      let lowScoreRecipe = state.recipes.slice().sort((r1, r2) => {
        const score1 = r1.weightWatcherSmartPoints;
        const score2 = r2.weightWatcherSmartPoints;

        if (score1 < score2) {
          return -1;
        } else if (score2 > score1) {
          return 1;
        } else {
          return 0;
        }
      });
      return {
        ...state,
        recipes: lowScoreRecipe,
      };

    case actions.FILTER_BY_DIET:
      const recipesMod = state.getRecipes.map((r) => {
        if (r.vegetarian && !r.diets.includes('vegetarian'))
          r.diets.push('vegetarian');
        if (r.glutenFree && !r.diets.includes('gluten free'))
          r.diets.push('gluten free');
        if (r.dairyFree && !r.diets.includes('dairy free'))
          r.diets.push('dairy free');

        return r;
      });

      let filterRecipes;

      Object.values(action.payload).includes(true)
        ? (filterRecipes = recipesMod.filter((r) => {
            let count = 0;
            const find = r.diets.some((d) => {
              let countTrueProperties = 0;
              for (let property in action.payload) {
                if (action.payload[property]) countTrueProperties++;
                if (d === property && action.payload[property]) count++;
              }

              if (countTrueProperties === count) {
                return true;
              }
              return false;
            });
            if (find) return r;
            return false;
          }))
        : (filterRecipes = recipesMod);
      return {
        ...state,
        recipes: filterRecipes,
      };

    case actions.GET_RECIPE_DETAILS:
      return {
        ...state,
        recipeDetail: action.payload,
      };

    case actions.POST_RECIPE:
      return {
        ...state,
        newRecipe: action.payload,
      };

    case actions.GET_DIETS:
      return {
        ...state,
        typeDiets: action.payload,
      };

    default:
      return state;
  }
};

export default rootReducer;
