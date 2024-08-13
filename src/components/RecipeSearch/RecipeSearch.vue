<template>
  <div id="recipe-search" class="container-fluid">
    <h1 class="text-center ">Search Recipes</h1>
    <p>You can start off by searching the recipe that you want</p>
    <div class="mb-4 row justify-content-center">
      <div class="col-lg-6 col-md-8 col-sm-10">
        <div class="searchBox">
          <label for="search_form">Search: </label>
          <input type="text" class="form-control rounded-pill " placeholder="Pizza, Soup, etc." id="search_form"
            v-model="searchQuery" aria-label="Search for recipes" />
          <button type="submit" class="btn btn-primary rounded-pill " @click="searchRecipes">
            Submit
          </button>

        </div>
      </div>
    </div>

    <!-- Displays recipe -->
    <div class="row justify-content-center mb-5">
      <div class="col-lg-3 col-md-4 col-sm-6 mb-4 "
        v-for="recipe in paginatedItems(recipes, currentCardPage, cardsPerPage)" :key="recipe.id">
        <div class="card pb-0">
          <img :src="recipe.image" class="card-img-top" alt="Recipe image" />
          <div class="card-body">
            <h2 class="card-title">{{ recipe.title }}</h2>

            <div class="d-flex justify-content-center">
              <!-- Display ingredients on toggle-->
              <button class="btn btn-outline-primary" @click="toggleIngredients(recipe)">
                View Ingredients
              </button>

              <!-- Display steps on toggle-->
              <button class="btn btn-outline-danger" @click="toggleSteps(recipe)">
                View Steps
              </button>
            </div>

            <!-- Prints ingredients -->
            <div v-if="recipe.showIngredients" class="mt-3">
              <h3>Ingredients:</h3>
              <table class="table">
                <caption>List of Ingredients</caption>
                <thead>
                  <tr>
                    <th id="ingredient-num" scope="col">#</th>
                    <th id="ingredient-name" scope="col">Ingredient Name</th>
                  </tr>
                </thead>
                <tbody>

                  <!-- Loops paginatedIngredients array, derived from full ingredients list -->
                  <tr v-for="(ingredient, index) in paginatedItems(recipe.ingredients, recipe.currentPage, rowsPerPage)"
                    :key="ingredient.id">

                    <!-- Calculate and display ingredient number based on the currentPage and rowsPerPage -->
                    <td headers="ingredient-num">{{ (recipe.currentPage - 1) * rowsPerPage + index + 1 }}</td>
                    <td headers="ingredient-name">{{ ingredient.name }}</td>
                  </tr>
                </tbody>
              </table>

              <!-- View Ingredients Pagination -->
              <nav aria-label="Page navigation">
                <ul class="pagination">
                  <li class="page-item" v-for="n in totalPages(recipe.ingredients, rowsPerPage)"
                    :key="`recipe-${recipe.id}-page-${n}`" :class="{ 'active': n === recipe.currentPage }">
                    <a class="page-link" href="#" @click.prevent="setCurrentPage(n, recipe)">{{ n }}</a>
                  </li>
                </ul>
              </nav>
            </div>


            <!-- Prints steps -->
            <div v-if="recipe.showSteps" class="mt-3 steps">
              <h3>Steps:</h3>
              <ol>
                <li v-for="(step, index) in recipe.steps" :key="index">{{ step.step }}
                  <hr>
                </li>

              </ol>
            </div>

          </div>
        </div>


      </div>
      <!-- Recipe Cards Pagination -->
      <nav aria-label="Recipe card page navigation">
        <ul class="pagination justify-content-center">
          <li class="page-item" v-for="n in totalPages(recipes, cardsPerPage)" :key="`recipe-card-page-${n}`"
            :class="{ 'active': n === currentCardPage }">
            <a class="page-link" href="#" @click.prevent="setCurrentPage(n, 'recipe-cards')">{{ n }}</a>
          </li>
        </ul>
      </nav>
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
      rowsPerPage: 5, // Pagination for ingredients
      cardsPerPage: 8, // Pagination for recipe cards
      currentCardPage: 1, // Current page for recipe cards
    };
  },
  methods: {
    // Sets the current page for the given context (recipe or recipe cards)
    setCurrentPage(pageNumber, context) {
      if (context === 'recipe-cards') {
        this.currentCardPage = pageNumber;
      } else {
        context.currentPage = pageNumber;
      }
    },

    // Calculates the total number of pages required to display all items
    totalPages(items, itemsPerPage) {
      return Math.ceil(items.length / itemsPerPage);
    },

    // Returns a slice of the items array for the current page
    paginatedItems(items, currentPage, itemsPerPage) {
      const start = (currentPage - 1) * itemsPerPage;
      const end = start + itemsPerPage;
      return items.slice(start, end);
    },


    // Search for recipes using the search query
    async searchRecipes() {
      if (!this.searchQuery.trim()) {
        return;
      }
      const apiKey = process.env.VUE_APP_SPOONACULAR_API_KEY_1;
      const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${this.searchQuery}&number=20`;


      try {
        const response = await axios.get(apiUrl); // Fetch recipes
        this.recipes = response.data.results; // Set recipes

        for (let recipe of this.recipes) { // Get ingredients for each recipe
          this.getIngredients(recipe.id);
          recipe.currentPage = 1; // Initialize currentPage for each recipe
        }
      } catch (error) {
        console.error('Failed to fetch recipes:', error);
      }
    },

    // Get ingredients for a recipe
    async getIngredients(id) {
      const apiKey = process.env.VUE_APP_SPOONACULAR_API_KEY_1;
      const apiUrl = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}&includeNutrition=true`;

      try {
        const response = await axios.get(apiUrl); // Fetch recipe details
        const recipe = this.recipes.find(r => r.id === id); // Find recipe in recipes array
        recipe.ingredients = response.data.extendedIngredients; // Add ingredients to recipe
        recipe.steps = response.data.analyzedInstructions[0].steps; // Add steps to recipe

      } catch (error) {
        console.error('Failed to fetch ingredients:', error);
      }
    },

    //Toggle the showing of ingredients and steps
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