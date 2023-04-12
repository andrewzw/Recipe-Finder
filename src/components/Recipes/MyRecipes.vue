<template>
  <div class="container home mt-5 pt-5">
    <h2>My Recipes</h2>
    <p>Make and upload your own recipes</p>
    <button class="addButton" @click="togglePopup">
      <i class="gg-add addIcon"></i>
      <span>Add new Recipe</span>
    </button>


    <div class="recipes">
      <div class="card" v-for="recipe in $store.state.recipes" :key="recipe.slug">
        <img :src="recipe.image" alt="Recipe image" class="recipe-image">

        <h2>{{ recipe.title }}</h2>
        <p>{{ recipe.description }}</p>

        <div>
          <router-link class="viewButton" :to="`/my-recipes/${recipe.slug}`">
            View Recipe
          </router-link>
          <button type="button" class="deleteButton" @click.prevent="deleteRecipe(recipe.slug)">Delete Recipe</button>
        </div>

      </div>
    </div>

    <div class="recipePopup" v-if="popupOpen">
      <div class="popupContent mt-5">
        <h2>Add new recipe</h2>
        <form @submit.prevent="addNewRecipe"> <!-- prevent submit if form is not filled-->
          <div class="group">
            <label><b>Title</b></label>
            <input type="text" v-model="newRecipe.title" />
          </div>

          <div class="group">
            <label><b>Description</b></label>
            <textarea v-model="newRecipe.description"></textarea>
          </div>


          <div class="group">
            <label><b>Recipe Image Link</b></label>
            <input type="text" v-model="newRecipe.image" />
          </div>

          <div class="group">
            <label><b>Ingredients</b></label>
            <div class="ingredient" v-for="i in newRecipe.ingredientRows" :key="i">
              <input type="text" v-model="newRecipe.ingredients[i - 1]" />
            </div>

            <button type="button" class="addButton" @click="addNewIngredient">
              <i class="gg-add addIcon"></i>
              <span>Add Ingredient</span>
            </button>

          </div>

          <div class="group">
            <label><b>Instructions</b></label>
            <div class="instructions" v-for="i in newRecipe.instructionsRows" :key="i">
              <textarea v-model="newRecipe.instructions[i - 1]"></textarea>
            </div>

            <button type="button" class="addButton" @click="addNewStep">
              <i class="gg-add addIcon"></i>
              <span>Add step</span>
            </button>
          </div>


          <div class="d-flex justify-content-center">
            <button class="btn btn-primary" type="submit">
              <i class="gg-play-list-add"></i>
              <span class="ms-3">Add Recipe</span>
            </button>

            <button class="btn btn-secondary" type="button" @click="togglePopup">
              <i class="gg-close"></i>
              <span class="ms-2">Close</span>
            </button>

          </div>

        </form>
      </div>

    </div>

  </div>
</template>

<script>
import './recipes.css';
import { ref } from 'vue'; //composition API
import { useStore } from 'vuex';
export default {
  name: 'MyRecipes',
  setup() {
    const newRecipe = ref({
      title: '',
      description: '',
      ingredients: [],
      instructions: [],
      ingredientRows: 1,
      instructionsRows: 1
    });
    const popupOpen = ref(false);
    const store = useStore();

    const togglePopup = () => {
      popupOpen.value = !popupOpen.value;
    }
    const addNewIngredient = () => {
      newRecipe.value.ingredientRows++;
    }

    const addNewStep = () => {
      newRecipe.value.instructionsRows++;
    }

    const addNewRecipe = () => {
      newRecipe.value.slug = newRecipe.value.title.toLowerCase().replace(/\s/g, '-');
      if (!newRecipe.value.slug) {
        alert("Please enter a title");
        return;
      }
      store.commit('ADD_RECIPE', { ...newRecipe.value, image: newRecipe.value.image || 'https://via.placeholder.com/300' });
      newRecipe.value = {
        title: '',
        description: '',
        image: '',
        ingredients: [],
        instructions: [],
        ingredientRows: 1,
        instructionsRows: 1
      };
      togglePopup();
    };

    const deleteRecipe = (slug) => {
      if (confirm('Are you sure you want to delete this recipe?')) {
        store.commit('DELETE_RECIPE', slug);
      }
    };
    return {
      newRecipe,
      addNewRecipe,
      togglePopup,
      popupOpen,
      addNewStep,
      addNewIngredient,
      deleteRecipe,
    }
  }
}
</script>
