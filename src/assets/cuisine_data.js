export const cuisines = [
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
        image: "https://images.unsplash.com/photo-1562565652-a0d8f0c59eb4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
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
];
export default cuisines;

export const top3 = [
    {
        name: "Mexican",
        dishes: [
            {
                id: 1,
                name: "Tacos al Pastor",
                desc: "A popular Mexican dish featuring marinated pork and pineapple served on corn tortillas.",
                instructions: "Marinate pork, grill with pineapple, serve on warm corn tortillas with toppings.",
                ingredients: "pork, pineapple, corn tortillas, onion, cilantro, lime",
                image: "https://www.culinaryhill.com/wp-content/uploads/2022/12/Tacos-al-Pastor-Culinary-Hill-1200x800-1.jpg",
            },
            {
                id: 2,
                name: "Chiles Rellenos",
                desc: "Poblano peppers stuffed with cheese, coated in batter, and fried, often served with tomato sauce.",
                instructions: "Stuff peppers with cheese, coat in batter, fry, and serve with tomato sauce.",
                ingredients: "poblano peppers, cheese, flour, eggs, tomato sauce",
                image: "https://www.sargento.com/assets/Uploads/Recipe/Image/chiles-rellenos__FillWzExNzAsNTgzXQ.png",
            },
            {
                id: 3,
                name: "Guacamole",
                desc: "A classic Mexican dip made from ripe avocados, tomatoes, onions, and lime juice.",
                instructions: "Mash avocados, mix with chopped tomatoes, onions, lime juice, and seasoning.",
                ingredients: "avocado, tomato, onion, lime, cilantro, jalapeño, salt",
                image: "https://www.giallozafferano.com/images/255-25549/Guacamole_650x433_wm.jpg",
            },
        ],
    },

    {
        name: "Italian",
        dishes: [
            {
                id: 1,
                name: "Spaghetti Carbonara",
                desc: "A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.",
                instructions: "Cook spaghetti, sauté pancetta, mix with whisked eggs and cheese, toss with pasta.",
                ingredients: "spaghetti, eggs, cheese, pancetta, pepper",
                image: "https://www.allrecipes.com/thmb/Vg2cRidr2zcYhWGvPD8M18xM_WY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/11973-spaghetti-carbonara-ii-DDMFS-4x3-6edea51e421e4457ac0c3269f3be5157.jpg",
            },
            {
                id: 2,
                name: "Margherita Pizza",
                desc: "A classic Italian pizza with a simple tomato sauce, fresh mozzarella, basil, and olive oil.",
                instructions: "Prepare dough, spread tomato sauce, add mozzarella and basil, bake in hot oven.",
                ingredients: "pizza dough, tomato sauce, mozzarella, basil, olive oil",
                image: "https://www.perfectitaliano.com.au/content/dam/perfectitaliano-aus/recipe/0_desktop/Desktop-Margherita-Pizza.jpg",
            },
            {
                id: 3,
                name: "Tiramisu",
                desc: "A classic Italian dessert made with layers of coffee-soaked ladyfingers and a rich mascarpone cheese mixture.",
                instructions: "Soak ladyfingers in coffee, layer with mascarpone mixture, chill, dust with cocoa powder.",
                ingredients: "ladyfingers, coffee, mascarpone, sugar, egg yolks, cocoa powder",
                image: "https://www.allrecipes.com/thmb/xDLqDQoPkelZrIwC9ab56tv_eAw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/21412-tiramisu-ii-3x2-119-dc2ec77a0d39410195161a3ff98ca000.jpg",
            },
        ],
    },

    {
        name: "Chinese",
        dishes: [
            {
                id: 1,
                name: "Kung Pao Chicken",
                desc: "A spicy, stir-fried Chinese dish made with chicken, peanuts, vegetables, and chili peppers.",
                instructions: "Stir-fry chicken and vegetables, add sauce, peanuts, and chili peppers.",
                ingredients: "chicken, peanuts, bell peppers, onions, chili peppers, soy sauce, garlic",
                image: "https://www.seriouseats.com/thmb/AaMf6tliWc3jh0R-9KLiJG5fzZo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2014__07__2021-02-12-Take-Out-Kung-Pao-Chicken-MHOM-11-c46f6c06713c45c5a287ddbf08779d04.jpg",
            },
            {
                id: 2,
                name: "Beef and Broccoli",
                desc: "A popular Chinese-American dish featuring stir-fried beef and broccoli in a savory sauce.",
                instructions: "Stir-fry marinated beef, add broccoli, and finish with sauce.",
                ingredients: "beef, broccoli, soy sauce, garlic, ginger, cornstarch",
                image: "https://i.pinimg.com/originals/39/7e/fe/397efe57da6704670c3af9a79d57f279.jpg",
            },
            {
                id: 3,
                name: "Vegetable Fried Rice",
                desc: "A Chinese dish made with stir-fried rice, vegetables, and savory seasonings.",
                instructions: "Stir-fry vegetables, add cooked rice and seasonings, and toss to combine.",
                ingredients: "cooked rice, mixed vegetables, soy sauce, garlic, onion, sesame oil, eggs",
                image: "https://thewoksoflife.com/wp-content/uploads/2020/10/vegetable-fried-rice-13.jpg",
            },
        ],
    },

    {
        name: "Japanese",
        dishes: [
            {
                id: 1,
                name: "Sushi",
                desc: "A Japanese dish made with vinegared rice, seafood, and various fillings and toppings.",
                instructions: "Prepare sushi rice, slice fish, and assemble with desired fillings and toppings.",
                ingredients: "sushi rice, fish, nori, cucumber, avocado, wasabi",
                image: "https://img.taste.com.au/4SZrUrY6/w720-h480-cfill-q80/taste/2016/11/sushi-for-kids-81300-1.jpeg",
            },
            {
                id: 2,
                name: "Ramen",
                desc: "A Japanese noodle soup dish made with Chinese-style wheat noodles, served in a rich broth.",
                instructions: "Prepare broth, cook ramen noodles, assemble with toppings, and serve.",
                ingredients: "ramen noodles, broth, pork, green onions, soft-boiled egg, nori, bamboo shoots",
                image: "https://hips.hearstapps.com/hmg-prod/images/190208-delish-ramen-horizontal-093-1550096715.jpg?crop=0.8893333333333334xw:1xh;center,top&resize=1200:*",
            },
            {
                id: 3,
                name: "Tempura",
                desc: "A Japanese dish of seafood and vegetables that have been battered and deep-fried.",
                instructions: "Prepare batter, dip seafood and vegetables, deep-fry until crisp, and serve.",
                ingredients: "shrimp, vegetables, flour, cold water, egg, oil for frying",
                image: "https://cf-images.us-east-1.prod.boltdns.net/v1/static/1033249144001/761a7270-9e8c-4d8b-9437-c722d2b8f7fc/f6ad6213-297c-438e-814a-1851b699ba94/1280x720/match/image.jpg",
            },
        ],
    },

    {
        name: "Korean",
        dishes: [
            {
                id: 1,
                name: "Bibimbap",
                desc: "A Korean rice dish topped with sautéed vegetables, chili paste, sliced meat, and a fried egg.",
                instructions: "Cook rice, sauté vegetables and meat, assemble in bowl, top with egg and chili paste.",
                ingredients: "rice, mixed vegetables, beef, gochujang, sesame oil, fried egg",
                image: "https://www.seriouseats.com/thmb/9gYczIvS4R7ZvK19ahBns0xOG_k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20230113-Bibimbap-AmandaSuarez-hero-331e5e1ffa5b400fbb684e59b14d57c1.JPG",
            },
            {
                id: 2,
                name: "Kimchi",
                desc: "A traditional Korean side dish made from salted and fermented vegetables, most commonly napa cabbage and Korean radish.",
                instructions: "Salt vegetables, mix with chili paste and other ingredients, ferment in airtight container.",
                ingredients: "napa cabbage, Korean radish, gochugaru, garlic, ginger, fish sauce, sugar",
                image: "https://www.chilipeppermadness.com/wp-content/uploads/2021/12/Kimchi-SQ.jpg",
            },
            {
                id: 3,
                name: "Bulgogi",
                desc: "A Korean dish of thinly sliced, marinated beef, usually grilled or stir-fried.",
                instructions: "Marinate beef, grill or stir-fry, and serve with rice and side dishes.",
                ingredients: "beef, soy sauce, sugar, garlic, sesame oil, green onions, pear",
                image: "https://images.immediate.co.uk/production/volatile/sites/2/2022/09/Bulgogi-a63fca6.jpg?resize=768,574",
            },
        ],
    },

    {
        name: "Thai",
        dishes: [
            {
                id: 1,
                name: "Pad Thai",
                desc: "A popular Thai noodle dish made with stir-fried rice noodles, shrimp, tofu, and a flavorful sauce.",
                instructions: "Cook rice noodles, stir-fry shrimp and tofu, mix in sauce, add noodles, garnish, and serve.",
                ingredients: "rice noodles, shrimp, tofu, tamarind paste, fish sauce, sugar, bean sprouts, peanuts, lime",
                image: "https://www.feastingathome.com/wp-content/uploads/2016/04/pad-thai-2.jpg",
            },
            {
                id: 2,
                name: "Green Curry",
                desc: "A fragrant Thai curry made with green curry paste, coconut milk, vegetables, and your choice of protein.",
                instructions: "Cook curry paste, add coconut milk, vegetables, and protein, simmer, and serve over rice.",
                ingredients: "green curry paste, coconut milk, vegetables, protein (chicken, beef, tofu), Thai basil",
                image: "https://www.connoisseurusveg.com/wp-content/uploads/2022/05/vegan-green-curry-22-sq.jpg",
            },
            {
                id: 3,
                name: "Tom Yum Soup",
                desc: "A hot and sour Thai soup usually made with shrimp, lemongrass, galangal, and kaffir lime leaves.",
                instructions: "Simmer broth with herbs and spices, add shrimp and vegetables, season, and serve hot.",
                ingredients: "shrimp, lemongrass, galangal, kaffir lime leaves, lime juice, fish sauce, mushrooms, chili paste",
                image: "https://thewoksoflife.com/wp-content/uploads/2021/10/Tom-Yum-Soup-11.jpg",
            },
        ],
    },

    {
        name: "Indian",
        dishes: [
            {
                id: 1,
                name: "Butter Chicken",
                desc: "A popular Indian dish made with tender chicken pieces cooked in a creamy tomato sauce.",
                instructions: "Marinate chicken, cook in sauce, simmer, and serve with rice or naan.",
                ingredients: "chicken, yogurt, tomato sauce, cream, butter, garlic, ginger, garam masala",
                image: "https://iwashyoudry.com/wp-content/uploads/2020/02/Indian-Butter-Chicken-Recipe-6.jpg",
            },
            {
                id: 2,
                name: "Chana Masala",
                desc: "A flavorful Indian dish made with chickpeas cooked in a spicy tomato and onion sauce.",
                instructions: "Cook onions, tomatoes, and spices, add chickpeas, simmer, and serve with rice or flatbread.",
                ingredients: "chickpeas, tomatoes, onions, garlic, ginger, garam masala, coriander, cumin",
                image: "https://cdn77-s3.lazycatkitchen.com/wp-content/uploads/2020/01/easy-chana-masala-pan-768x1152.jpg",
            },
            {
                id: 3,
                name: "Palak Paneer",
                desc: "An Indian vegetarian dish made with paneer cheese and a creamy spinach sauce.",
                instructions: "Blanch spinach, cook with spices and cream, add paneer, and serve with rice or naan.",
                ingredients: "paneer, spinach, cream, onion, garlic, ginger, garam masala, cumin",
                image: "https://www.marionskitchen.com/wp-content/uploads/2021/08/Paneer-Curry8279.jpg",
            },
        ],
    },

    {
        name: "French",
        dishes: [
            {
                id: 1,
                name: "Coq au Vin",
                desc: "A classic French dish made with chicken braised in red wine with mushrooms, onions, and bacon.",
                instructions: "Sauté bacon, sear chicken, cook vegetables, simmer with wine, and serve hot.",
                ingredients: "chicken, bacon, red wine, mushrooms, pearl onions, garlic, thyme, bay leaf",
                image: "https://leitesculinaria.com/wp-content/uploads/2022/09/julia-child-coq-au-vin.jpg",
            },
            {
                id: 2,
                name: "Ratatouille",
                desc: "A vegetable stew originating from the Provence region of France, featuring eggplant, zucchini, bell peppers, and tomatoes.",
                instructions: "Sauté vegetables separately, combine, simmer, and serve warm or cold.",
                ingredients: "eggplant, zucchini, bell peppers, tomatoes, onion, garlic, thyme, olive oil",
                image: "https://img.buzzfeed.com/video-api-prod/assets/eb44570519264864814264f7f0a5e47a/BFV13909_BakedRatatouille-ThumbTextless1080.jpg?resize=1200:*",
            },
            {
                id: 3,
                name: "Crème Brûlée",
                desc: "A classic French dessert made with a creamy custard base and a crisp caramelized sugar topping.",
                instructions: "Prepare custard, bake in ramekins, chill, add sugar topping, caramelize, and serve.",
                ingredients: "heavy cream, egg yolks, sugar, vanilla extract, hot water",
                image: "https://www.cookingclassy.com/wp-content/uploads/2018/02/creme-brulee-7.jpg",
            },
        ],
    },

    {
        name: "Spanish",
        dishes: [
            {
                id: 1,
                name: "Paella",
                desc: "A traditional Spanish rice dish cooked with a variety of meats, seafood, and vegetables in a flavorful broth.",
                instructions: "Cook meat and seafood, sauté vegetables, add rice and broth, and simmer.",
                ingredients: "rice, chicken, rabbit, shrimp, mussels, bell peppers, tomatoes, saffron, paprika",
                image: "https://www.simplyrecipes.com/thmb/2GMHFcWEHZGOYbT4eoVCAu2uwsw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2018__07__Seafood-Paella-LEAD-VERTICAL-fc5f1e71baa8484cafa1a106ffaa9c23.jpg",
            },
            {
                id: 2,
                name: "Gazpacho",
                desc: "A cold Spanish soup made from blended tomatoes, cucumbers, bell peppers, and onions, garnished with croutons and olive oil.",
                instructions: "Blend vegetables, season, chill, and serve garnished with croutons and a drizzle of olive oil.",
                ingredients: "tomatoes, cucumbers, bell peppers, onions, garlic, sherry vinegar, olive oil, croutons",
                image: "https://hips.hearstapps.com/hmg-prod/images/delish-190606-gazpacho-269-landscape-pf-1560544275.jpg?crop=0.8891228070175439xw:1xh;center,top&resize=1200:*",
            },
            {
                id: 3,
                name: "Patatas Bravas",
                desc: "A popular Spanish tapas dish featuring crispy fried potatoes served with a spicy tomato sauce.",
                instructions: "Fry potatoes, prepare sauce, and serve potatoes topped with sauce.",
                ingredients: "potatoes, tomatoes, garlic, onion, paprika, cayenne pepper, olive oil",
                image: "https://fedbysab.com/wp-content/uploads/2022/09/Patatas-Bravas-Recipe-Best.jpg",
            },
        ],
    },
]