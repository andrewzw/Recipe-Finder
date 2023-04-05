import { createRouter, createWebHistory } from 'vue-router';
import RecipeSearch from '../src/components/RecipeSearch.vue';
import PageHeader from '../src/components/PageHeader.vue';
import TopRecipes from '../src/components/Cuisine/TopRecipes.vue';

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: PageHeader,
  },
  {
    path: '/recipe-search',
    name: 'RecipeSearch',
    component: RecipeSearch,
  },
  {
    path: '/top3-recipes/:cuisine?',
    name: 'TopRecipes',
    component: TopRecipes,
    props: true,
  },
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
