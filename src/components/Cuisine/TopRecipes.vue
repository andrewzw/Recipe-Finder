<template>
  <div>
    <div v-if="selectedCuisine">
      <button @click="goBack">Go Back to Cuisine Selection</button>
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">

        <!-- loops through the filteredDishes array and displays the name, image, description, ingredients, and instructions -->
        <div v-for="dish in filteredDishes" :key="dish.id" class="col">
          <div class="card h-100 cuisine-card">
            <img :src="dish.image" :alt="dish.name" class="card-img-top" style="height: 400px; object-fit: cover;">
            <div class="card-body">
              <h5 class="card-title">{{ dish.name }}</h5>
              <p class="card-text">{{ dish.desc }}</p>
              <p class="card-text"><b>Ingredients: </b>{{ dish.ingredients }}</p>
              <p class="card-text"><b>Instructions: </b>{{ dish.instructions }}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
  .cuisine-card {
  border: 0;
  color: #fcf7e3;
  background-color: #00000081;
}

.cuisine-card h5{
  color: #ffffff;}
</style>



<script>
import { top3 } from '../../assets/cuisine_data.js';

export default {
  props: {
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
