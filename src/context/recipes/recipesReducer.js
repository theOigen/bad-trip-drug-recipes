  import {
  GET_RECIPES,
  GET_RECIPES_SUCCESS,
  GET_MORE_RECIPES,
  GET_MORE_RECIPES_SUCCESS,
  GET_RECIPE_BY_ID,
  GET_RECIPE_BY_ID_SUCCESS,
  CREATE_RECIPE,
  CREATE_RECIPE_SUCCESS,
  UPDATE_RECIPE,
  UPDATE_RECIPE_SUCCESS,
  DELETE_RECIPE,
  DELETE_RECIPE_SUCCESS,
  RECIPES_ERROR,
  CLEAR_RECIPES_ERRORS,
  CLEAR_RECIPE
} from '../actionsTypes';

const reducer = (state, { type, payload }) => {
  switch (type) {
    case GET_RECIPES:
    case GET_MORE_RECIPES:
    case GET_RECIPE_BY_ID:
    case CREATE_RECIPE:
    case UPDATE_RECIPE:
    case DELETE_RECIPE:
      return {
        ...state,
        loading: true,
      };
    case GET_MORE_RECIPES_SUCCESS:
      return {
        ...state,
        loading: false,
        recipes: [...state.recipes, ...payload.recipes],
      }
    case GET_RECIPES_SUCCESS:
      return {
        ...state,
        loading: false,
        recipes: payload.recipes,
        totalAmount: payload.totalRows
      }
    case GET_RECIPE_BY_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        recipe: payload
      }
    case CREATE_RECIPE_SUCCESS:
      return {
        ...state,
        loading: false,
      }
    case UPDATE_RECIPE_SUCCESS:
      return {
        ...state,
        loading: false,
        recipes: state.recipes.map(recipe =>
          recipe.id === payload.id
            ? payload
            : recipe
        ),
      }
    case DELETE_RECIPE_SUCCESS:
      return {
        ...state,
        loading: false,
        recipes: state.recipes.filter(recipe => recipe.id !== payload),
      }
    case RECIPES_ERROR:
      return {
        ...state,
        loading: false,
        recipes: null,
        recipe: null,
        error: payload
      };
    case CLEAR_RECIPE:
      return {
        ...state,
        recipe: null
      }
    case CLEAR_RECIPES_ERRORS:
      return {
        ...state,
        error: null
      };
    default:
      return state;
  }
};

export default reducer;