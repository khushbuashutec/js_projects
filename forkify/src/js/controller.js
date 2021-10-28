import * as model from './model.js';
import recipeView from './views/recipeView.js'

import { func } from 'assert-plus';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { resetRetrieveHandlers } from 'source-map-support';

// import { values } from 'core-js/core/array';


const recipeContainer = document.querySelector('.recipe');



// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////


const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    console.log(id);

    if (!id) return;
    recipeView.renderSpinner();

    //1) Loading recipe
    await model.loadRecipe(id);


    //2) rendering recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    console.error(err);
  }
};

['hashchange', 'load'].forEach(ev => window.addEventListener(ev, controlRecipes))

// window.addEventListener('hashchange', controlRecipes)
// window.addEventListener('load', controlRecipes)