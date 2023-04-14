<template>
  <ImgCarousel></ImgCarousel>
  <div class="container mt-3 pt-1">
    <div class="col-md-6 mt-5">
      <h1>Start off here!</h1>
      <p>
        Choose what you would like to do on this site
      </p>
    </div>
    <div class="row">

      <div class="col-12 col-md-4 mb-3">
        <router-link to="/recipe-search" class="btn m-3">

          <div class="card fixed-height ">
            <div class="card-body d-flex flex-column">
              <h2 class="card-title">Search Recipes</h2>
              <em class="m-3">
                <img src="./../../assets/search_icon.png" alt="Cuisine logo" height="150" />
              </em>
              <p class="card-text">Search for recipes by ingredients or by name</p>
            </div>

          </div>
        </router-link>
      </div>

      <div class="col-12 col-md-4 mb-3">
        <router-link to="/recipe-cuisine" class="btn m-3">

          <div class="card fixed-height ">
            <div class="card-body d-flex flex-column">
              <h2 class="card-title">Our Cuisine</h2>
              <em class="m-3">
                <img src="./../../assets/cuisine_icon.png" alt="Cuisine logo" height="150" />
              </em>
              <p class="card-text">We've picked out the top 3 dishes for each cuisine</p>
            </div>

          </div>
        </router-link>
      </div>

      <div class="col-12 col-md-4 mb-3">
        <router-link to="/my-recipes" class="btn m-3">

          <div class="card fixed-height ">
            <div class="card-body d-flex flex-column">
              <h2 class="card-title">My Recipes</h2>
              <em class="m-3">
                <img src="./../../assets/recipe_icon.png" alt="Cuisine logo" height="150" />
              </em>
              <p class="card-text">Add your own recipe to your cook book!</p>
            </div>

          </div>
        </router-link>
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

<style src="./home.css" scoped></style>
