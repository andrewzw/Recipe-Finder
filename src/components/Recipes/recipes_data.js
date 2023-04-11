import { createStore } from 'vuex'

const defaultRecipes = [
    {
      slug: 'katsu-curry',
      title: 'Katsu Curry',
      description: 'A delicious curry made with chicken, potatoes, and a special sauce',
      image: 'https://thewoksoflife.com/wp-content/uploads/2022/03/chicken-katsu-curry-rice-15.jpg',
      ingredients: [
        '1 tablespoon olive oil',
        '1 onion, chopped',
        '2 cloves garlic, chopped',
        '1 tablespoon curry powder',
      ],
      instructions: [
        'Heat oil in a large skillet over medium heat.',
        'Add onion and garlic and cook, stirring often, until softened, about 5 minutes.',
        'Add curry powder and cook, stirring, until fragrant, about 1 minute.',
        'Add chicken and potatoes and cook, stirring, until heated through, about 5 minutes.',
      ],
    },
    {
      slug: 'ramen-noodle-soup',
      title: 'Ramen noodle soup',
      description: 'A delicious curry made with chicken, potatoes, and a special sauce',
      image: 'https://showmetheyummy.com/wp-content/uploads/2017/09/Slow-Cooker-Ramen-Noodles-Show-Me-the-Yummy-6@2x.jpg',
      ingredients: [
        '1 tablespoon olive oil',
        '1 onion, chopped',
        '2 cloves garlic, chopped',
        '1 tablespoon curry powder',
      ],
      instructions: [
        'Heat oil in a large skillet over medium heat.',
        'Add onion and garlic and cook, stirring often, until softened, about 5 minutes.',
        'Add curry powder and cook, stirring, until fragrant, about 1 minute.',
        'Add chicken and potatoes and cook, stirring, until heated through, about 5 minutes.',
      ],
    },
  ];
  
  export const loadRecipes = () => {
    try {
      const recipes = localStorage.getItem('recipes');
      return recipes ? JSON.parse(recipes) : defaultRecipes;
    } catch (e) {
      console.error(e);
      return defaultRecipes;
    }
  };
  
  export const saveRecipes = (recipes) => {
    localStorage.setItem('recipes', JSON.stringify(recipes));
  };
  
  
  export default createStore({
    state: {
      recipes: loadRecipes()
    },
    mutations: {
      ADD_RECIPE(state, recipe) {
        state.recipes.push(recipe);
        saveRecipes(state.recipes);
      },
      DELETE_RECIPE(state, slug) {
        state.recipes = state.recipes.filter(recipe => recipe.slug !== slug);
        saveRecipes(state.recipes);
      }
    }
  });
  