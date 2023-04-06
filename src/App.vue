<template>
  <div id="app">
    <NavBar></NavBar>
    <router-view></router-view>

    <footer class="py-2 bg-white text-black mt-4">
      <div class="container">
        <p class="text-center mb-0"><i>Website made by Yap Zhe Wei 103508895</i></p>
      </div>
    </footer>

  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import router from '../router/index.js';

export default {
  name: 'MamaRecipe',
  router,

  components: {
    NavBar,
  },
  data() {
    return {

    };
  },
  methods: {

  },
};
</script>


<style>
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
