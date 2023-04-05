<template>
  <div class="container">
    <div class="row">
      <h2 class="mt-5 text-center">{{ selectedCuisine ? 'Top 3 ' + selectedCuisine.name + ' Dishes' : "Mama's Recipe Cuisine" }}</h2>

<p class="text-center">{{ !selectedCuisine ? 'Click on a cuisine to see the top 3 recipes' : `Here are the top 3 recipes of the ${selectedCuisine.name} cuisine!` }}</p>


      <div class="row" v-if="!selectedCuisine">
        <div class="col-md-4" v-for="(cuisine, index) in cuisines" :key="index">
          <CuisineCard :cuisine="cuisine" @card-clicked="onCardClicked" />
        </div>
      </div>
      <TopRecipes v-if="selectedCuisine" :selected-cuisine="selectedCuisine" />
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
    };
  },
  methods: {
    onCardClicked(cuisine) {
      this.selectedCuisine = cuisine;
      console.log('Card Clicked', cuisine)
    },
  },
};
</script>