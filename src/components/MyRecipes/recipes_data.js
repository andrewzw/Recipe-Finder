import { createStore } from 'vuex'

const defaultRecipes = [
  {
    slug: 'roast-pork-belly',
    title: 'Chinese Roast Pork Belly',
    description: 'A crispy and flavorful Chinese pork belly that makes for a delicious and satisfying meal.',
    image: 'https://thewoksoflife.com/wp-content/uploads/2015/03/cantonese-roast-pork-belly-8.jpg',
    ingredients: [
      '3 lb slab of pork belly',
      '2 teaspoons Shaoxing wine',
      '2 teaspoons salt',
      '1 teaspoon sugar',
      '1/2 teaspoon five spice powder',
      '1/4 teaspoon white pepper',
      '1 1/2 teaspoons rice wine vinegar',
      '1/2 cup coarse sea salt',
    ],
    instructions: [
      'Rinse the pork belly and pat dry. Place it skin-side down on a tray, and rub the Shaoxing wine into the meat (not the skin). Mix together the salt, sugar, five spice powder and white pepper. Thoroughly rub this spice mixture into the meat as well. Flip the meat over so it’s skin-side up.',
      'To prepare the skin, systematically poke holes ALL over the skin using a sharp metal skewer. The more holes there are, the better. Let it dry out in the fridge uncovered for 12-24 hours.',
      'Preheat the oven to 375 degrees F. Place a large piece of aluminum foil onto a baking tray, and fold up the sides around the pork snugly, so that you’re creating a kind of box all around it, with a 1-inch high border going around the sides.',
      'Brush the rice wine vinegar on top of the pork skin. Pack the sea salt in one even layer over the skin, so the pork is completely covered. Place in the oven and roast for 1 hour and 30 minutes. If your pork belly still has the rib attached, roast for 1 hour and 45 minutes.',
      'Take the pork out of the oven, turn on the broiler to low, and position the oven rack in the lowest position. Remove the top layer of sea salt from the pork belly, and unfold the foil. Put the pork back under the broiler to crisp up. This should take 5-10 minutes. The broiler should ideally be on “low” so that this process can happen gradually. If your broiler gets pretty hot, be sure to keep the pork as far away from the heat source as possible. Keep a close eye on it to prevent burning!',
      'When the skin has puffed up and gotten crispy, remove from the oven. Let it rest for about 15 minutes and then slice.',
    ],
  },

  {
    slug: 'roast-beef-and-potatoes',
    title: 'Roast Beef and Potatoes',
    description: 'A delicious and comforting meal of roast beef and potatoes with wholegrain mustard gravy.',
    image: 'https://img.taste.com.au/YA9May-J/w720-h480-cfill-q80/taste/2017/11/mustard-black-pepper-beef-with-roast-potatoes-taste_1980x1320-132906-1.jpg',
    ingredients: [
      '1kg Crème Gold potatoes, peeled, halved',
      '2 tbsp olive oil',
      '1kg Coles Beef Roast with Mustard & Black Pepper',
      '3 thyme sprigs',
      '165g pkt liquid gravy',
      '1 tbsp wholegrain mustard',
    ],
    instructions: [
      'Preheat oven to 180C. Bring the potato to the boil in a large saucepan of water. Reduce heat to low and simmer, uncovered, for 10 mins or until just tender. Drain. Return potato to pan with half the oil and shake to coat. Transfer to a roasting pan.',
      'Add the beef to the roasting pan. Drizzle the beef with remaining oil and top with thyme. Roast for 1 hour for medium or until cooked to your liking. Transfer beef to a plate. Cover with foil. Set aside for 10 mins to rest.',
      'Meanwhile, increase oven to 220C. Roast potato for a further 15 mins or until golden.',
      'Prepare the gravy following packet directions. Add the mustard and stir to combine. Thickly slice beef and serve with roast potatoes and gravy.',
    ],
  },

  {
    slug: 'char-kway-teow',
    title: 'Char Kway Teow',
    description: 'One of the most epic noodle dishes in the world from the streets of Malaysia!',
    image: 'https://rasamalaysia.com/wp-content/uploads/2009/11/char-koay-teow-thumb.jpg',
    ingredients: [
      "500 g / 1 lb fresh wide rice noodle (Note 1)",
      "2 tbsp lard, or vegetable oil (Note 2)",
      "2 tbsp vegetable oil, separated",
      "10 small prawns/shrimp, shelled and deveined",
      "2 garlic cloves, finely chopped",
      "1 Chinese sausage / Lup Chong Sausage, sliced thinly on the diagonal (Note 3)",
      "5 cm / 2\" piece of fried fish cake, sliced thinly (Note 4)",
      "20 stems garlic chives, cut into 4 pieces (Note 5)",
      "2 1/2 cups bean sprouts",
      "2 eggs",
    ],
    instructions: [
      "Heat 1 tbsp oil in a large non stick skillet over high heat.",
      "When heated, add shrimp and cook for 1 1/2 minutes until just cooked through, then remove into bowl",
      "Add Chinese sausage and fish cake, and cook for 1 minute until sausage is caramelised, then add to bowl.",
      "Add 1 tbsp oil then add egg and cook, pushing in the edges to make a thick omelette. Once set, chop it up roughly using a wooden spoon (see video), then add to bowl.",
      "Add bean sprouts and cook for about 1 minute until just starting to wilt, then add to bowl.",
      "Add lard. Once melted and starting to smoke, add garlic then immediately add noodles. Fold gently 4 times using a spatula + wooden spoon (see video) just to disperse oil through noodles.",
      "Tip all the other ingredients back in plus the chives. Fold gently twice, then pour all the Sauce over.",
      "Gently toss 4 to 6 times to disperse the sauce, pausing in between to allow the noodles to have a chance to caramelise on the edges a bit.",
      "Remove from stove and serve immediately.",
    ],
  },

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
      'House Vermont Curry (medium hot) ',
      'Cooked rice',
      'Onion sliced into 1cm wide pieces',
      'Potato cut to 1.5cm / ⅝” cubes',
      'Carrot  sliced to 7mm / ¼” thick pieces',
      'Chicken Cutlet (Japanese Chicken Schnitzel)  cut into 2.5cm / 1″ wide strips'
    ],

    instructions: [
      'Put oil into a pot and sauté onion pieces until the edges start browning',
      'Add potato and carrot pieces to the pot and stir.',
      'Add water and bring it to a boil. Remove scum as it rises.',
      'Add curry roux and cook.',
      'Cook chicken cutlets and slice them.',
      'Put cooked rice on one side of a serving plate, place cutlet pieces next to the rice.',
      'Pour curry on the side next to the cutlet away from the rice.',
      'Place a small amount of fukujinzuke on the plate.'
    ],
  },


  {
    slug: 'ramen-noodle-soup',
    title: 'Japanese ramen noodle soup',
    description: 'Japanese noodle soup, for when you crave something comforting yet light and wholesome.',
    image: 'https://showmetheyummy.com/wp-content/uploads/2017/09/Slow-Cooker-Ramen-Noodles-Show-Me-the-Yummy-6@2x.jpg',
    ingredients: [
      '1 tablespoon olive oil',
      '1 onion, chopped',
      '2 cloves garlic, chopped',
      '1 tablespoon curry powder',
    ],
    instructions: [
      'Mix 700ml chicken stock, 3 halved garlic cloves, 4 tbsp soy sauce, 1 tsp Worcestershire sauce, a sliced thumb-sized piece of ginger, ½ tsp Chinese five spice, pinch of chilli powder and 300ml water in a stockpot or large saucepan, bring to the boil, then reduce the heat and simmer for 5 mins.',
      'Taste the stock – add 1 tsp white sugar or a little more soy sauce to make it sweeter or saltier to your liking.',
      'Cook 375g ramen noodles following the pack instructions, then drain and set aside.',
      'Slice 400g cooked pork or chicken, fry in 2 tsp sesame oil until just starting to brown, then set aside.',
      'Divide the noodles between four bowls. Top each with a quarter of the meat, 25g spinach, 1 tbsp sweetcorn and two boiled egg halves each.',
      'Strain the stock into a clean pan, then bring to the boil once again.',
      'Divide the stock between the bowls, then sprinkle over 1 shredded nori sheet, sliced spring onions or shallots and a sprinkle of sesame seeds. Allow the spinach to wilt slightly before serving.',
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
