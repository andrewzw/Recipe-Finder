import { createApp } from 'vue';
import App from './App.vue';
import router from '../router/index.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/umd/popper.min.js';
import recipes_data from './components/MyRecipes/recipes_data';
const app = createApp(App);
app.use(router);
app.use(recipes_data);
app.mount('#app');