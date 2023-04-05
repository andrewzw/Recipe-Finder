<template>
  <div id="recipe-cuisine-specific">
    <div v-if="selectedCuisine">

      <router-link class="btn mt-3 rounded-pill border border-dark custom-btn" style="border-color: black;" @click="goBack"
        :to="{ path: '/home', hash: '#recipe-cuisine' }">
        <i class="gg-arrow-left-o"></i>
      </router-link>

      <div class="mt-1 row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        <!-- loops through the filteredDishes array and displays the name, image, description, ingredients, and instructions -->
        <div v-for="dish in filteredDishes" :key="dish.id" class="col">
          <div class="card h-100 cuisine-card">
            
            <img :src="dish.image" :alt="dish.name" class="card-img-top" style="height: 400px; object-fit: cover;">
            
            <div class="card-body">

              <h5 class="card-title">{{ dish.name }}</h5>
              <p class="card-text">{{ dish.desc }}</p>
              <p class="card-text"><b>Ingredients: </b><br>{{ dish.ingredients }}</p>
              <p class="card-text"><b>Instructions: </b><br>{{ dish.instructions }}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>


<style scoped>
@import url('https://unpkg.com/css.gg@2.0.0/icons/css/arrow-left-o.css');
.custom-btn {
  transition: background-color 0.3s, color 0.3s;
}

.custom-btn:hover {
  background-color: #333;
  color: #f5f5f5;
}

.cuisine-card {
  border: 0;
  border-radius: 15px;
  color: #fcf7e3;
  background-color: #00000081;
  box-shadow: 6px 7px 8px rgba(0, 0, 0, 0.3);

}

.cuisine-card img {
  border-radius: 15px 15px 0 0;
}

.cuisine-card h5 {
  color: #ffffff;
}
</style>

<script>
import { top3 } from '../../assets/cuisine_data.js';

export default {
  props: {
    cuisine: {
      type: String,
      required: false
    },

    selectedCuisine: {
      type: Object,
      default: null,
    },
  },

  computed: {
    filteredDishes() {
      if (!this.selectedCuisine) {
        return [];
      }

      const filtered = top3.find((cuisine) => cuisine.name === this.selectedCuisine.name)?.dishes; //finds the cuisine with the same name as the selected cuisine and returns the dishes array
      return filtered ? filtered : []; //returns empty array if filtered is undefined
    },
  },

  methods: {
    goBack() {
      this.$emit('go-back');
    },
  },
};
</script>
