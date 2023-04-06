import { createApp } from 'vue';
import App from './App.vue';
import router from '../router/index.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/umd/popper.min.js';

const app = createApp(App);
app.use(router);
app.mount('#app');