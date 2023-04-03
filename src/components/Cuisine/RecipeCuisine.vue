<template>
  <div class="container">
    <div class="row">
      <h2 class="mt-5 text-center">Mama's Recipe Cuisine</h2>

      <div v-for="cuisine in cuisines" :key="cuisine.id" class="col-md-4 my-3">
        <CuisineCard :cuisine="cuisine" @card-clicked="fetchTopRecipes" />
      </div>

      <TopRecipes v-if="topRecipes.length" :cuisine="selectedCuisine" :recipes="topRecipes" />


    </div>
  </div>
</template>

<script>
import CuisineCard from './CuisineCard.vue';
import TopRecipes from './TopRecipes.vue';
import axios from 'axios';

export default {
  components: {
    CuisineCard,
    TopRecipes,
  },

  data() {
    return {
      selectedCuisine: '',
    topRecipes: [],
      cuisines: [
        {
          id: 1,
          name: "Mexican",
          desc: "Spicy and flavorful dishes with a blend of indigenous Mesoamerican and European cooking styles.",
          image: "https://images.unsplash.com/photo-1640983743761-4f0e0204bc58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
        },
        {
          id: 2,
          name: "Italian",
          desc: "Simple and fresh ingredients combined to create delicious and satisfying meals.",
          image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        },
        {
          id: 3,
          name: "Chinese",
          desc: "A balance of sweet, salty, sour, and bitter flavors in dishes that are often stir-fried, steamed, or deep-fried.",
          image: "https://images.unsplash.com/photo-1593250551601-524b0046095d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
        },
        {
          id: 4,
          name: "Japanese",
          desc: "Fresh and seasonal ingredients prepared with precision and attention to detail to create beautifully presented dishes.",
          image: "https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          id: 5,
          name: "Korean",
          desc: "Bold and spicy flavors, including the iconic fermented cabbage dish known as kimchi.",
          image: "https://images.pexels.com/photos/5773971/pexels-photo-5773971.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          id: 6,
          name: "Thai",
          desc: "A mix of spicy, sour, sweet, and salty flavors with a focus on fresh herbs and spices.",
          image: "https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          id: 7,
          name: "Indian",
          desc: "A variety of vegetarian and non-vegetarian dishes with complex spice blends and flavorful sauces.",
          image: "https://images.unsplash.com/photo-1631452180539-96aca7d48617?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        },
        {
          id: 8,
          name: "French",
          desc: "Rich and buttery sauces, delicate pastries, and high-quality ingredients used to create elegant and sophisticated dishes.",
          image: "https://images.unsplash.com/photo-1531664412848-9610afed156c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        },
        {
          id: 9,
          name: "Spanish",
          desc: "A fusion of Arabic, Jewish, and Christian culinary traditions with a focus on seafood, cured meats, and flavorful stews.",
          image: "https://images.unsplash.com/photo-1515443961218-a51367888e4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        }

      ]
    };
  },
  methods: {

    async fetchTopRecipes(cuisine) {
      const apiKey = 'df35115937e9449ba6c9f2fc60eaeb6f';
      const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${this.selectedCuisine}&number=20`;

      try {
        const response = await axios.get(apiUrl);
        const recipes = response.data.results;
        this.selectedCuisine = cuisine.name;
        this.topRecipes = recipes;
      } catch (error) {
        console.error('Failed to fetch recipes:', error);
      }
    },
    viewRecipeDetails(recipeId) {
    this.$router.push({ name: 'RecipeDetails', params: { id: recipeId } });
  },
},
};
</script>