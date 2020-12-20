// query for get recipes:
// n=5 — amount of recipes per page
// p=1 — page number

// am=5 — add more to the page
// 5 recipes
import React, { useReducer } from 'react';
import axios from 'axios';
import RecipesContext from './recipesContext';
import recipesReducer from './recipesReducer';
import {
  GET_RECIPES,
  GET_RECIPES_SUCCESS,
  GET_RECIPE_BY_ID,
  GET_RECIPE_BY_ID_SUCCESS,
  GET_MORE_RECIPES,
  GET_MORE_RECIPES_SUCCESS,
  RECIPES_ERROR,
  CLEAR_RECIPES_ERRORS,
  CREATE_RECIPE,
  CREATE_RECIPE_SUCCESS,
  UPDATE_RECIPE,
  UPDATE_RECIPE_SUCCESS,
  DELETE_RECIPE,
  DELETE_RECIPE_SUCCESS,
  CLEAR_RECIPE
} from '../actionsTypes';

import {
  DEFAULT_PAGE,
  DEFAULT_AMOUNT_PER_PAGE
} from '../constants'

const RecipesState = props => {
  const initialState = {
    recipes: [],
    recipe: null,
    page: DEFAULT_PAGE,
    amountPerPage: DEFAULT_AMOUNT_PER_PAGE,
    totalAmount: 0,
    loading: false,
    error: null
  };

  const [state, dispatch] = useReducer(recipesReducer, initialState);

  const getRecipes = async (page = DEFAULT_PAGE, amountPerPage = DEFAULT_AMOUNT_PER_PAGE) => {
    dispatch({
      type: GET_RECIPES
    })
    try {
      const res = await axios.get(`/api/recipe?PageSize=${amountPerPage}&PageNumber=${page}`)

      res.data && dispatch({
        type: GET_RECIPES_SUCCESS,
        payload: res.data
      })
    } catch (error) {
      dispatch({
        type: RECIPES_ERROR,
        payload: error
      })
    }
  }

  const getMoreRecipes = async (page = DEFAULT_PAGE, amountPerPage = DEFAULT_AMOUNT_PER_PAGE) => {
    dispatch({
      type: GET_MORE_RECIPES
    })
    try {
      const res = await axios.get(`/api/recipes/more?p=${page}&n=${amountPerPage}`)

      res.data && dispatch({
        type: GET_MORE_RECIPES_SUCCESS,
        payload: res.data
      })
    } catch (error) {
      dispatch({
        type: RECIPES_ERROR,
        payload: error
      })
    }
  }

  const getRecipeById = async (id) => {
    dispatch({ type: GET_RECIPE_BY_ID })
    try {
      const res = await axios.get(`/api/Recipe/${id}`)

      res.data && dispatch({
        type: GET_RECIPE_BY_ID_SUCCESS,
        payload: res.data
      })
    } catch (error) {
      dispatch({
        type: RECIPES_ERROR,
        payload: error
      })
    }
  }

  const clearRecipe = () => {
    dispatch({type: CLEAR_RECIPE})
  }

  const createRecipe = async (recipe) => {
    dispatch({ type: CREATE_RECIPE })
     const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    try {
      const res = await axios.post('/api/recipes', recipe, config)

      res.data && dispatch({
        type: CREATE_RECIPE_SUCCESS,
        payload: res.data
      })
    } catch (error) {
      dispatch({
        type: RECIPES_ERROR,
        payload: error
      })
    }
  }

  const updateRecipe = async (recipe) => {
    dispatch({ type: UPDATE_RECIPE })
     const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    try {
      const res = await axios.put(
        `/api/recipes/${recipe.id}`,
        recipe,
        config
      )

      res.data && dispatch({
        type: UPDATE_RECIPE_SUCCESS,
        payload: res.data
      })
    } catch (error) {
      dispatch({
        type: RECIPES_ERROR,
        payload: error
      })
    }
  }

  const deleteRecipe = async (id) => {
    dispatch({ type: DELETE_RECIPE })
    try {
      await axios.delete(`/api/recipe/${id}`)
      dispatch({
        type: DELETE_RECIPE_SUCCESS,
        payload: id
      })
    } catch (error) {
      dispatch({
        type: RECIPES_ERROR,
        payload: error
      })
    }
  }

  const clearErrors = () => {
    dispatch({ type: CLEAR_RECIPES_ERRORS });
  };

  return (
    <RecipesContext.Provider
      value={{
        ...state,
        getRecipes,
        getMoreRecipes,
        getRecipeById,
        createRecipe,
        updateRecipe,
        deleteRecipe,
        clearErrors,
        clearRecipe
      }}
    >
      {props.children}
    </RecipesContext.Provider>
  );
};

export default RecipesState;