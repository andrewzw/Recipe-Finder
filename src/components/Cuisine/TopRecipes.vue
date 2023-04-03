<template>
    <div class="container mt-5">
      <h2 class="text-center">{{ cuisine }} Top 20 Recipes</h2>
      <div class="row">
        <div v-for="recipe in recipes" :key="recipe.id" class="col-md-4 my-3">
          <RecipeCard :recipe="recipe" />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import RecipeCard from './CuisineCard.vue';
  
  export default {
    
    components: {
      RecipeCard,
    },
    props: {
      cuisine: {
        type: String,
        required: true,
      },
      recipes: {
        type: Array,
        required: true,
      },
    },
  };
  </script>
  