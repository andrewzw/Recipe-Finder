<template>
  <div class="container home mt-5 pt-5">
    <h2>My Recipes</h2>
    <p>Make and upload your own recipes</p>
    <button class="addButton" @click="togglePopup">Add new Recipe</button>

    <div class="recipes">
      <div class="card" v-for="recipe in $store.state.recipes" :key="recipe.slug">
        <h2>{{ recipe.title }}</h2>
        <p>{{ recipe.description }}</p>
        <router-link :to="`/my-recipes/${recipe.slug}`">
          <button class="viewButton">View Recipe</button>
          <button class="deleteButton" @click.prevent="deleteRecipe(recipe.slug)">Delete Recipe</button>
        </router-link>


      </div>
    </div>

    <div class="recipePopup" v-if="popupOpen">
      <div class="popupContent">
        <h2>Add new recipe</h2>
        <form @submit.prevent="addNewRecipe"> <!-- prevent submit if form is not filled-->
          <div class="group">
            <label>Title</label>
            <input type="text" v-model="newRecipe.title" />
          </div>

          <div class="group">
            <label>Description</label>
            <textarea v-model="newRecipe.description"></textarea>
          </div>

          <div class="group">
            <label>Ingredients</label>
            <div class="ingredient" v-for="i in newRecipe.ingredientRows" :key="i">
              <input type="text" v-model="newRecipe.ingredients[i - 1]" />
            </div>
            <button type="button" @click="addNewIngredient">Add Ingredient</button>
          </div>

          <div class="group">
            <label>Instructions</label>
            <div class="method" v-for="i in newRecipe.methodRows" :key="i">
              <textarea v-model="newRecipe.method[i - 1]"></textarea>
            </div>
            <button type="button" @click="addNewStep">Add step</button>
          </div>

          <button type="submit">Add Recipe</button>
          <button type="button" @click="togglePopup">Close</button>
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
      method: [],
      ingredientRows: 1,
      methodRows: 1
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
      newRecipe.value.methodRows++;
    }

    const addNewRecipe = () => {
      newRecipe.value.slug = newRecipe.value.title.toLowerCase().replace(/\s/g, '-');
      if (!newRecipe.value.slug) {
        alert("Please enter a title");
        return;
      }
      store.commit('ADD_RECIPE', { ...newRecipe.value });
      newRecipe.value = {
        title: '',
        description: '',
        ingredients: [],
        method: [],
        ingredientRows: 1,
        methodRows: 1
      };
      togglePopup();
    }

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

<style>
.home {
  color: #ffecc5;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.home h2 ,p{
  color: #000000;
}

.card h2 {
  color: #fff;
  font-size: 3rem;
  margin-bottom: 32px;
}

.card p {
  color: #fff;
}

.recipes {
  display: grid;
  margin-bottom: 60vh;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
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

.recipes .card:hover {
  box-shadow: 5px 10px 10px rgba(240, 240, 240, 0.6);

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
  background-color: #081c33;
  padding: 2rem;
  border-radius: 1rem;
  width: 100%;
  max-width: 768px;
}

.popupContent h2{
color: #fff;
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

.addButton {
  background-color: #5e83fc;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
}

.addButton:hover {
  box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.6);

}
</style>