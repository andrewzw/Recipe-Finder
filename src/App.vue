<template>
  <div id="app">
    <header class="py-4 bg-primary text-white">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <h1><i class="fas fa-utensils"></i> Mama's Recipe Cuisine</h1>
          </div>
        </div>
      </div>
    </header>

    <main>
      <div class="container">
        <div class="row">
          <PageHeader></PageHeader>
          <RecipeSearch></RecipeSearch>
          <RecipeCuisine></RecipeCuisine>
          
        </div>
      </div>
    </main>

    <footer class="py-3 bg-primary text-white mt-4">
      <div class="container">
        <p class="text-center mb-0">Copyright &copy; 2023 - Playful & Casual</p>
      </div>
    </footer>

  </div>
</template>

<script>
import PageHeader from "./components/PageHeader.vue";
import RecipeSearch from "./components/RecipeSearch.vue";
import RecipeCuisine from "./components/Cuisine/RecipeCuisine.vue";
import router from './router.js';

export default {
  name: 'MamaRecipe',
  router,

  components: {
    PageHeader,
    RecipeSearch,
    RecipeCuisine,
  },
  data() {
    return {

    };
  },
  methods: {

  },
};
</script>


<style scoped>
#app {
  background-color: #ffecc5;
}

h1,
h2 {
  font-family: "Pacifico", cursive;
}

p {
  font-family: "Lato", sans-serif;
}
</style>
