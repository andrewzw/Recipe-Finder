<template>
  <div class="container">
    <h1 class="text-center my-4">Recipe Finder</h1>
    <div class="mb-4">
      <div class="search-box">
        <input type="text" class="form-control rounded-pill" placeholder="Search for recipes" v-model="searchQuery" />
        <button class="btn btn-primary mt-2" @click="searchRecipes">
          Search
        </button>
      </div>
    </div>


    <!-- Displays recipe -->
    <div class="row">
      <div class="col-md-4 mb-4" v-for="recipe in recipes" :key="recipe.id">
        <div class="card">
          <img :src="recipe.image" class="card-img-top" alt="Recipe image" />
          <div class="card-body">
            <h5 class="card-title">{{ recipe.title }}</h5>

            <button class="btn btn-primary" @click="toggleDetails(recipe)">
              View Details
            </button>

            <div v-if="recipe.showDetails">
              <h6>Ingredients:</h6>
              <ul>
                <li v-for="ingredient in recipe.ingredients" :key="ingredient.id">{{ ingredient.name }}</li>
              </ul>

              <h6>Steps:</h6>
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
    };
  },
  methods: {
    async searchRecipes() {
      if (!this.searchQuery.trim()) {
        return;
      }

      const apiKey = 'a7b2f5842fb342eba158bc308e3cac8f';
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
      const apiKey = 'a7b2f5842fb342eba158bc308e3cac8f';
      const apiUrl = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}&includeNutrition=true`;

      try {
        const response = await axios.get(apiUrl);
        const recipe = this.recipes.find(r => r.id === id);
        recipe.ingredients = response.data.extendedIngredients;
        recipe.steps = response.data.analyzedInstructions[0].steps;

      } catch (error) {
        console.error('Failed to fetch ingredients:', error);
      }
    },

    toggleDetails(recipe) {
      recipe.showDetails = !recipe.showDetails;
    },
  },
};
</script>

<style scoped>
.search-box {
  display: flex;
  align-items: center;
  width: 550px;
  margin: auto;
  padding: 10px 10px 10px 40px;
}

.search-box input {
  border: none;
  font-size: 16px;
  outline: none;
  width: 100%;
}

.search-box button {
  margin-left: 10px;
}



</style>
