<template>
  <ImgCarousel></ImgCarousel>
  <div class="container mt-3 pt-1">
    <div class="col-md-6 mt-5">
      <h2>Start off here!</h2>
      <p>
        Choose what you would like to do on this site
      </p>
    </div>
    <div class="row">

      <div class="col-12 col-md-4 mb-3">
        <router-link to="/recipe-search" class="btn m-3" >

        <div class="card fixed-height ">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">Search Recipes</h5>
              <i class="m-3"><img src="./../../assets/search.png" alt="Cuisine logo" height="150" /></i>
              <p class="card-text">Search for recipes by ingredients or by name</p>
          </div>
        
        </div>
      </router-link>
      </div>

      <div class="col-12 col-md-4 mb-3">
        <router-link to="/recipe-cuisine" class="btn m-3" >

        <div class="card fixed-height ">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">Our Cuisine</h5>
              <i class="m-3"><img src="./../../assets/cuisine.png" alt="Cuisine logo" height="150" /></i>
            <p class="card-text">We've picked out the top 3 dishes for each cuisine</p>
          </div>
        
        </div>
      </router-link>
      </div>

      <div class="col-12 col-md-4 mb-3">
        <router-link to="/my-recipes" class="btn m-3" >

        <div class="card fixed-height ">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">My Recipes</h5>
              <i class="m-3"><img src="./../../assets/recipe.png" alt="Cuisine logo" height="150" /></i>
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

<style scoped>
.custom-btn {
  transition: background-color 0.3s, color 0.3s;
}


.card {
  transition: border 0.3s, color 0.1s;
  border-radius: 10px;
  background-color: #00000031;
  border: 0px;
  box-shadow: 6px 7px 8px rgba(0, 0, 0, 0.3);

}

.card:hover{
  box-shadow: 0 0 11px rgba(33,33,33,0.5);
  border: 3px solid #ffffff;
}

.container {
  min-height: 50vh;
}

.card-title {
  text-align: center;
  color: #ffffff;
}

.card-text {
  text-align: center;
  color: #f5f5f5;
}

.card.fixed-height {
  height: 100%;
  min-height: 200px;
}

.card.fixed-height .card-body {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}
</style>