<template>
  <div id="app">
    
    <Navbar />
    <router-view></router-view>

    <footer class="py-3 bg-primary text-white mt-4">
      <div class="container">
        <p class="text-center mb-0">Copyright &copy; 2023 - Playful & Casual</p>
      </div>
    </footer>

  </div>
</template>

<script>
import Navbar from "./components/NavBar.vue";
import router from '../router/index.js';

export default {
  name: 'MamaRecipe',
  router,

  components: {

    Navbar,
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
  color: #362F2F;
}

h1,
h2 {
  font-family: "Pacifico", cursive;
}

p {
  font-family: "Lato", sans-serif;
}
</style>
