import { createRouter, createWebHistory } from 'vue-router';
import RecipeSearch from './components/RecipeSearch.vue';
import PageHeader from './components/PageHeader.vue';


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

  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
