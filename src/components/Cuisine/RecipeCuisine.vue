<template>
  <div id="recipe-cuisine" class="container">
    <div class="row ">
      <!-- Displays the selected cuisine name OR "Mama's Cuisine Recipes" depending if a cuisine card is clicked-->
      <h1 class="text-center ">{{ selectedCuisine ? 'Top 3 ' + selectedCuisine.name + ' Dishes' : "Mama's Cuisine Recipes"}}</h1> 
      
      <!-- Displays the selected cuisine description OR "Click on a cuisine to see the top 3 recipes"-->
      <p class="text-center">{{ !selectedCuisine ? 'Click on a cuisine to see the top 3 recipes' : `Here are the top 3 recipes of the ${selectedCuisine.name} cuisine!` }}</p> 

      <!-- Display the cuisine cards -->
      <div class="row" v-if="!selectedCuisine">
        <div class="col-md-4" v-for="(cuisine, index) in cuisines" :key="index">

          <div class="my-3 d-flex justify-content-center align-items-center">
            <CuisineCard :cuisine="cuisine" @card-clicked="onCardClicked" aria-label="Cuisine Button" />
          </div>

        </div>
      </div>

      <!-- if the card is click, display the Top Recipes of the selected cuisine -->
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
      this.selectedCuisine = cuisine; // set the selected cuisine using the card's cuisine value
      this.showTopRecipes = true; // show the top recipes of the selected cuisine
    },

    goBack() {
      this.selectedCuisine = null; // set the selected cuisine to null so it will display the cuisine cards instead of top recipes
      this.showTopRecipes = false; // hide the top recipes of the selected cuisine
    },

  },
};
</script>

<style scoped src="./cuisine.css"></style>