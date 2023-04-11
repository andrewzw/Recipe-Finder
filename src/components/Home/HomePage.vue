<template>
  <ImgCarousel></ImgCarousel>
  <div class="container mt-5 pt-1">

    <div class="col-md-6">
      <h2 class="mt-5">Start off here!</h2>
      <p>
        Choose what you would like to do on this site
      </p>
    </div>
    <div class="row">
      <div class="col-md-2">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Search Recipes</h5>
            <p class="card-text">Search for recipes by ingredients or by name</p>
            <router-link to="/recipe-search" class="btn btn-primary">Search</router-link>
          </div>
        </div>
      </div>

      <div class="col-md-2">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">My Recipe</h5>
            <p class="card-text">Add your own recipe</p>
            <router-link to="/my-recipes" class="btn btn-primary">Add</router-link>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
  
<script>
import ImgCarousel from './ImgCarousel.vue';
export default {
  components: {
    ImgCarousel,
  },
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>

<style scoped>
.container {
  min-height: 100vh;
}
</style>
