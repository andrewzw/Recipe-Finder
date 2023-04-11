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

<style scoped>
/* Import icons */
@import url('https://unpkg.com/css.gg@2.0.0/icons/css/add.css');
@import url('https://unpkg.com/css.gg@2.0.0/icons/css/play-list-add.css');
@import url('https://unpkg.com/css.gg@2.0.0/icons/css/close.css');

.btn-primary {
  background-color: rgb(3, 170, 3);
  border-color: rgb(3, 170, 3);
  display: flex;
  align-items: center;
}

.btn-primary:hover {
  background-color: rgb(0, 145, 0);
  border-color: rgb(0, 145, 0);
  display: flex;
  align-items: center;
}

.btn-secondary {
  display: flex;
  align-items: center;
}

.recipes .card {
  border: 3px solid #f5f5f5;
  color: rgb(255, 255, 255);
  padding: 1rem;
  border-radius: 5px;
  margin: 1rem;
  background-color: #081c337e;
  border-radius: 10px;
  box-shadow: 2px 7px 10px rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  align-items: left;
  max-width: 400px;
  justify-content: space-between;
}


.recipes .card img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  max-height: 100%;
}

.home {
  color: #2e2e2e;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.home h2,
p {
  color: #000000;
}

.card h2 {
  color: #fff;
  font-size: 3rem;
  margin-bottom: 1rem;
}

.card p {
  color: #fff;
}

.recipes {
  display: grid;
  margin-bottom: 60vh;
  grid-template-columns: repeat(3, 1fr);
}

.recipes .card {
  border: 3px solid #f5f5f5;
  color: rgb(255, 255, 255);
  padding: 1rem;
  border-radius: 5px;
  margin: 1rem;
  background-color: #081c337e;
  border-radius: 10px;
  box-shadow: 2px 7px 10px rgba(0, 0, 0, 0.7);

}


.recipes .card h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.recipes .card p {
  font-size: 1.125rem;
  line-height: 1.4;
  margin-bottom: 1rem;
}

.recipePopup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.recipePopup .popupContent {
  background-color: #ccd5ae;
  padding: 2rem;
  border-radius: 1rem;
  width: 100%;
  max-width: 768px;
  overflow-y: auto;
  max-height: 90%;
}

.popupContent h2 {
  color: #1e1e1e;
  text-align: center;
}

.popupContent h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.popupContent .group {
  margin-bottom: 1rem;
}

.popupContent .group label {
  display: block;
  margin-bottom: 0.5rem;
}

.popupContent .group input,
.popupContent .group textarea {
  display: block;
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 1rem;
}

.popupContent .group textarea {
  height: 100px;
  resize: none;
}

.popupContent button[type="submit"] {
  margin-right: 1rem;
}

.viewButton {
  background-color: #aaf0a3;
  color: #494949;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 10px;
  text-decoration: none;
  text-align: center;
}

.deleteButton {
  background-color: #f73434;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
}

.addIcon {
  margin-right: 5px;
}

.addButton {
  background-color: #5e83fc;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  display: flex;
  align-items: center;
}

.addButton:hover {
  box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.6);
}


.viewButton:hover {
  color: #fff;
  text-shadow: 2px 3px 6px rgba(0, 0, 0, 0.8);
  box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.6);
}

.deleteButton:hover {
  color: #000000;
  text-shadow: 2px 3px 6px rgba(255, 255, 255, 0.8);
  box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.6);
}

@media (max-width: 768px) {
  .recipes {
    grid-template-columns: 1fr;
  }
}
</style>