<template>
  <div id="recipe-search" class="container-fluid">
    <h1 class="text-center ">Search Recipes</h1>
    <p>You can start off by searching the recipe that you want</p>
    <div class="mb-4 row justify-content-center">
      <div class="col-lg-6 col-md-8 col-sm-10">
        <div class="search-box">
          <label for="search_form">Search: </label>
          <input type="text" class="form-control rounded-pill " placeholder="Pizza, Soup, etc." id="search_form"
            v-model="searchQuery" />
          <button type="submit" class="btn btn-primary rounded-pill " @click="searchRecipes">
            Submit
          </button>

        </div>
      </div>
    </div>

    <!-- Displays recipe -->
    <div class="row justify-content-center mb-5">
      <div class="col-lg-3 col-md-4 col-sm-6 mb-4 " v-for="recipe in recipes" :key="recipe.id">

        <div class="card pb-0">
          <img :src="recipe.image" class="card-img-top" alt="Recipe image" />
          <div class="card-body">
            <h2 class="card-title">{{ recipe.title }}</h2>

            <div class="d-flex justify-content-center"> 
              <button class="btn btn-outline-primary"
                @click="toggleIngredients(recipe)">
                View Ingredients
              </button>
              <button class="btn btn-outline-danger" @click="toggleSteps(recipe)">
                View Steps
              </button>
            </div>

            <div v-if="recipe.showIngredients">
              <h3>Ingredients:</h3>
              <ul>
                <li v-for="ingredient in recipe.ingredients" :key="ingredient.id">{{ ingredient.name }}</li>
              </ul>
            </div>


            <div v-if="recipe.showSteps">
              <h3>Steps:</h3>
              <ol>
                <li v-for="(step, index) in recipe.steps" :key="index">{{ step.step }}</li>
              </ol>
            </div>

          </div>
        </div>


      </div>
    </div>


  </div>
</template>


<script>
import axios from 'axios';

export default {
  data() {
    return {
      searchQuery: '',
      recipes: [],
      showDetails: false,
      showIngredients: false,
      showSteps: false,
    };
  },
  methods: {
    async searchRecipes() {
      if (!this.searchQuery.trim()) {
        return;
      }
      //const apiKey = 'a7b2f5842fb342eba158bc308e3cac8f';
      const apiKey = 'df35115937e9449ba6c9f2fc60eaeb6f';
      const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${this.searchQuery}&number=20`;


      try {
        const response = await axios.get(apiUrl);
        this.recipes = response.data.results;
        // Get ingredients for each recipe
        for (let recipe of this.recipes) {
          this.getIngredients(recipe.id);
        }
      } catch (error) {
        console.error('Failed to fetch recipes:', error);
      }
    },

    async getIngredients(id) {
      //const apiKey = 'a7b2f5842fb342eba158bc308e3cac8f';
      const apiKey = 'df35115937e9449ba6c9f2fc60eaeb6f';
      const apiUrl = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}&includeNutrition=true`;

      try {
        const response = await axios.get(apiUrl); // Get recipe details
        const recipe = this.recipes.find(r => r.id === id); // Find recipe in recipes array
        recipe.ingredients = response.data.extendedIngredients; // Add ingredients to recipe
        recipe.steps = response.data.analyzedInstructions[0].steps; // Add steps to recipe

      } catch (error) {
        console.error('Failed to fetch ingredients:', error);
      }
    },

    toggleDetails(recipe) {
      recipe.showDetails = !recipe.showDetails;
    },

    toggleIngredients(recipe) {
      recipe.showIngredients = !recipe.showIngredients;
    },

    toggleSteps(recipe) {
      recipe.showSteps = !recipe.showSteps;
    },
  },

};
</script>

<style scoped src="./recipesearch.css"></style>