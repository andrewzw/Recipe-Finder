<template>
  <div id="app">
    <header class="py-4 bg-primary text-white">
      <div class="container">
        <h1 class="text-center">Playful & Casual Homepage</h1>
      </div>
    </header>

    <main>
      <div class="container">
        <div class="row">
          <PageHeader></PageHeader>
          <RecipeSearch></RecipeSearch>
          <RecipeCuisine @top-recipes-fetched="updateTopRecipes"></RecipeCuisine>
        </div>
        <TopRecipes v-if="topRecipes" :cuisine="selectedCuisine" :recipes="topRecipes" />
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
import TopRecipes from './components/Cuisine/TopRecipes.vue';

export default {
  components: {
    PageHeader,
    RecipeSearch,
    RecipeCuisine,
    TopRecipes
  },
  data() {
    return {
      selectedCuisine: null,
      topRecipes: null,
    };
  },
  methods: {
    updateTopRecipes(cuisine, recipes) {
      this.selectedCuisine = cuisine;
      this.topRecipes = recipes;
    },
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
