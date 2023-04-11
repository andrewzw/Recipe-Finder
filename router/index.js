import { createRouter, createWebHistory } from 'vue-router';
import RecipeSearch from '../src/components/RecipeSearch.vue';
import HomePage from '../src/components/Home/HomePage.vue';
import RecipeCuisine from '../src/components/Cuisine/RecipeCuisine.vue';
import MyRecipes from '../src/components/Recipes/MyRecipes.vue';
import AddRecipes from '../src/components/Recipes/ViewRecipes.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/recipe-search',
    name: 'RecipeSearch',
    component: RecipeSearch,
  },
  {
    path: '/recipe-cuisine/:cuisine?',
    name: 'TopRecipes',
    component: RecipeCuisine,
    props: true,
  },

  {
    path: '/my-recipes',
    name: 'MyRecipes',
    component: MyRecipes
  },
  {
    path: '/my-recipes/:slug',
    name: 'AddRecipe',
    component: AddRecipes,
  }

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      };
    }
    return { top: 0 };
  },
});

export default router;
