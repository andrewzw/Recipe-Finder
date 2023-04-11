<template>
  <div id="app">
    <NavBar></NavBar>
    <router-view></router-view>
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

h1{
  font-family: "Lato", sans-serif;
}

p {
  font-family: "Lato", sans-serif;
}
</style>
