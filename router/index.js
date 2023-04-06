import { createRouter, createWebHistory } from 'vue-router';
import RecipeSearch from '../src/components/RecipeSearch.vue';
import HomePage from '../src/components/HomePage.vue';
import RecipeCuisine from '../src/components/Cuisine/RecipeCuisine.vue';
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
