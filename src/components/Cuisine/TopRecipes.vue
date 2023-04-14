<template>
  <div id="recipe-cuisine-specific">
    <div v-if="selectedCuisine">

      <router-link class="btn mt-3 rounded-pill border border-dark custom-btn" style="border-color: black;"
        @click="goBack" :to="{ path: '/recipe-cuisine/' }">
        <em class="gg-arrow-left-o"></em>
      </router-link>

      <div class="mt-1 mb-5 row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        <!-- loops through the filteredDishes array and displays the name, image, description, ingredients, and instructions -->
        <div v-for="dish in filteredDishes" :key="dish.id" class="col">
          <div class="card h-100 cuisine-card">

            <img :src="dish.image" :alt="dish.name" class="card-img-top" style="height: 400px; object-fit: cover;">

            <div class="card-body">

              <h5 class="card-title">{{ dish.name }}</h5>
              <p class="card-text">{{ dish.desc }}</p>
              <p class="card-text"><strong>Ingredients: </strong><br>{{ dish.ingredients }}</p>
              <p class="card-text"><strong>Instructions: </strong><br>{{ dish.instructions }}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

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

<style scoped src="./cuisine.css"></style>