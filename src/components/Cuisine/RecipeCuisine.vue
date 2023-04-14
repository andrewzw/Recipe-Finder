<template>
  <div id="recipe-cuisine" class="container">
    <div class="row ">
      <h1 class="text-center ">{{ selectedCuisine ? 'Top 3 ' + selectedCuisine.name + ' Dishes' : "Mama's Cuisine Recipes" }}</h1>

      <p class="text-center">{{ !selectedCuisine ? 'Click on a cuisine to see the top 3 recipes' : `Here are the top 3
              recipes of the ${selectedCuisine.name} cuisine!` }}</p>

      <div class="row" v-if="!selectedCuisine">
        <div class="col-md-4" v-for="(cuisine, index) in cuisines" :key="index">

          <div class="my-3 d-flex justify-content-center align-items-center">
            <CuisineCard :cuisine="cuisine" @card-clicked="onCardClicked" aria-label="Cuisine Button" />
          </div>

        </div>
      </div>

      <TopRecipes v-if="showTopRecipes" :selected-cuisine="selectedCuisine" @go-back="goBack" />

    </div>
  </div>
</template>

<script>
import CuisineCard from './CuisineCard.vue';
import cuisine_data from '../../assets/cuisine_data.js';
import TopRecipes from './TopRecipes.vue';

export default {
  components: {
    CuisineCard,
    TopRecipes,
  },

  data() {
    return {
      cuisines: cuisine_data,
      selectedCuisine: null,
      showTopRecipes: false,
    };
  },

  methods: {
    onCardClicked(cuisine) {
      this.selectedCuisine = cuisine;
      this.showTopRecipes = true;
      console.log('Card Clicked', cuisine)

    },

    goBack() {
      this.selectedCuisine = null;
      this.showTopRecipes = false;
    },

  },
};
</script>

<style scoped src="./cuisine.css"></style>