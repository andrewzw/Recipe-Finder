import { createStore } from 'vuex'

const defaultRecipes = [

  {
    slug: 'fishaball-noodle-soup',
    title: 'Fishball noodle soup',
    description: 'Chewy udon noodles swimming in a warm chicken broth accompanied by delicious fish balls.',
    image: 'https://christieathome.com/wp-content/uploads/2021/02/Fish-Ball-Udon-Soup-8-scaled.jpg',
    ingredients: [
      '8-10 store-bought fish balls or as many as desired',
      '1000 grams udon noodle reduce to 2 if you prefer a smaller serving',
      '1 stalk green onion finely sliced (optional garnish)',
      '2-3 cups Bok Choy sliced into half',
      '1 cup bean sprouts washed',
      '150 grams seafood mushrooms divided up and washed',
      'Fish Ball Noodle Soup Base: ',
      '2 cups chicken broth',
     ' 2 cups water',
      '½ tablespoon regular soy sauce',
      '2 tablespoon oyster sauce',
      '1 teaspoon mirin',
      '½ teaspoon sesame oil',
     ' 1 teaspoon garlic minced',
      '1 stalk green onion finely sliced',

    ],
    instructions: [
      'In a medium size pot filled with water, bring it to a boil. Lower your frozen udon noodle cakes into the hot boiling water and loosen. Once loosened, about 30-40 seconds, strain immediately. Any longer and the noodles will go soggy. Divide the noodles and transfer to serving bowls.',
      'In the same pot, fill it with your soup ingredients and mix. Bring to a boil.',
      'Then add fish balls and allow them to boil for 8 minutes, uncovered.',
      'As your fish balls are boiling in the soup, add bok choy, seafood mushroom and bean sprouts and blanch until both ingredients are cooked, about 2 minutes for bok choy and seafood mushrooms, and 1 minute for bean sprouts. Remove veggies with a slotted spoon. Divide the veggies and place them over top of your udon noodles.',
      'Remove the fish balls, divide the portion and place over top of noodles.',
      'Lastly, divide and pour your soup into each bowl of noodles and garnish with green onions (optional). Serve hot and enjoy! If you want the soup saltier, add 1 tablespoon more of oyster sauce.',

    ],
  },

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
  