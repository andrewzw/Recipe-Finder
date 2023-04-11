
<template>
  <div class="container-fluid mt-5 pt-3">
    <h2 class="text-center my-3">Recipe Finder</h2>
    <div class="mb-4 row justify-content-center">
      <div class="col-lg-6 col-md-8 col-sm-10">
        <div class="search-box">
          <input type="text" class="form-control rounded-pill " placeholder="Search for recipes" v-model="searchQuery" />

          <button type="submit" class="btn btn-primary rounded-pill " @click="searchRecipes">
            Search
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
      // const apiKey = 'df35115937e9449ba6c9f2fc60eaeb6f';
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
      // const apiKey = 'df35115937e9449ba6c9f2fc60eaeb6f';
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
  },
};
</script>

<style scoped>
.container-fluid {
  height: fit-content;

}
.card {
  border: none;
  margin-bottom: 2rem;
}

.card-img-top {
  height: 200px;
  object-fit: cover;
  border-radius: 0.5rem 0.5rem 0 0;
}

.card-title {
  font-size: 1.2rem;
}

.btn-primary {
  border-radius: 0;
}

.search-box {
  display: flex;
  align-items: center;
  width: 550px;
  margin: auto;
  padding: 10px 10px 10px 40px;
}

.search-box input {
  background-color: #fff6e4;
  border: none;
  font-size: 16px;
  outline: none;
  width: 100%;
  box-shadow: 4px 6px 8px rgba(0, 0, 0, 0.3);
}

.search-box button {
  background-color: #D4A373;
  border: 0;
  margin-left: 10px;
  box-shadow: 4px 6px 8px rgba(0, 0, 0, 0.3);
}

@media (max-width: 768px) {
  .search-box {
    width: 100%;
    padding: 10px;
  }

  .search-box input {
    font-size: 14px;
  }

  .row {
    margin: 0 -10px;
  }

  .col-md-4 {
    padding: 10px;
  }
}

@media (max-width: 820px) {
  .search-box {
    width: 100%;
    padding: 10px;
  }

  .search-box input {
    font-size: 14px;
  }

  .row {
    margin: 0 -10px;
  }

  .col-md-4 {
    padding: 10px;
  }
}
</style>
