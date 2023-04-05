import { createRouter, createWebHistory } from 'vue-router';
import RecipeSearch from './components/RecipeSearch.vue';
import PageHeader from './components/PageHeader.vue';
import TopRecipes from './components/Cuisine/TopRecipes.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: PageHeader,
  },
  {
    path: '/RecipeSearch',
    name: 'RecipeSearch',
    component: RecipeSearch,
  },
  {
    path: '/top-recipes/:cuisine',
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
