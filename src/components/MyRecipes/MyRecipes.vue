<template>
  <div id="myRecipe" class="container">
    <h1>My Recipes</h1>
    <p>Make and upload your own recipes</p>
    <button class="addButton" @click="togglePopup" aria-label="Add new recipe">
      <em class="gg-add addIcon"></em>
      <span>Add new Recipe</span>
    </button>


    <div class="recipes">
      <div class="card" v-for="recipe in $store.state.recipes" :key="recipe.slug">
        <img :src="recipe.image" alt="Recipe image" class="recipeImage">

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

    <div class="recipePopup mt-3" v-if="popupOpen">
      <div class="popupContent">
        <h2>Add new recipe</h2>
        <form @submit.prevent="addNewRecipe"> <!-- prevent submit if form is not filled-->
          <div class="group">
            <label for="title"><strong>Title</strong></label>
            <input type="text" v-model="newRecipe.title" id="title" required />
          </div>

          <div class="group">
            <label for="description"><strong>Description</strong></label>
            <textarea v-model="newRecipe.description" id="description"></textarea>
          </div>


          <div class="group">
            <label for="image_link"><strong>Recipe Image Link</strong></label>
            <input type="text" v-model="newRecipe.image" id="image_link" />
          </div>

          <div class="group">
            <label for="ingredients"><strong>Ingredients</strong></label>
            <div class="ingredient" v-for="i in newRecipe.ingredientRows" :key="i">
              <input type="text" v-model="newRecipe.ingredients[i - 1]" id="ingredients" />
            </div>

            <button type="button" class="addButton" @click="addNewIngredient" title="Add Ingredient">
              <em class="gg-add addIcon"></em>
              <span>Add Ingredient</span>
            </button>

          </div>

          <div class="group">
            <label for="instructions"><strong>Instructions</strong></label>
            <div class="instructions" v-for="i in newRecipe.instructionsRows" :key="i">
              <textarea v-model="newRecipe.instructions[i - 1]" id="instructions"></textarea>
            </div>

            <button type="button" class="addButton" @click="addNewStep" title="Add Step">
              <em class="gg-add addIcon"></em>
              <span>Add step</span>
            </button>
          </div>


          <div class="d-flex justify-content-center">
            <button class="btn btn-primary" type="submit" title="Add recipe">
              <em class="gg-play-list-add"></em>
              <span class="ms-3">Add Recipe</span>
            </button>

            <button class="btn btn-secondary" type="button" @click="togglePopup" title="Close popup">
              <em class="gg-close"></em>
              <span class="ms-2">Close</span>
            </button>

          </div>

        </form>
      </div>

    </div>

  </div>
</template>

<script>
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

<style scoped src="./recipes.css"></style>