<template>
	<div class="recipe mt-5 pt-5">
		<router-link to="/my-recipes"><i class="gg-arrow-left-o"></i></router-link> <!-- back to my recipes -->

		<h2>{{ recipe.title }} </h2>
		<p class="desc">{{ recipe.description }}</p>
		<hr />
		<div class="ingredients">
			<h3>Ingredients</h3>
			<ul>
				<li v-for="(ingredient, i) in recipe.ingredients" :key="i">
					{{ ingredient }}
				</li>
			</ul>
		</div>
		<div class="instructions">
			<h3>Instructions</h3>
			<ol>
				<li v-for="(step, i) in recipe.instructions" :key="i">
					<span v-html="cleanText(step)"></span>
				</li>
			</ol>
		</div>
	</div>
</template>

<script>
import { useStore } from 'vuex';
export default {
	name: 'AddRecipes',
	computed: {
		recipe() {
			const store = useStore();
			return store.state.recipes.find(recipe => recipe.slug === this.$route.params.slug);
		}
	},
	methods: {
		cleanText(text) {
			return text.replace(/\n/g, '<br />')
		}
	}
}
</script>

<style>
.recipe {
	padding: 1rem;
	max-width: 768px;
	margin: 0 auto;
}

.desc {
	font-size: 1.125rem;
	line-height: 1.4;
	margin-bottom: 1rem;
}

hr {
	margin-bottom: 1rem;

}

h3 {
	margin-bottom: 1rem;
}

.ingredients {
	color: #f5f5f5;
	padding: 1rem;
	background-color: #081c338c;
	border-radius: 0.5rem;
	margin-bottom: 2rem;
}

.ingredients ul li {
	list-style-position: inside;
	line-height: 1.4;
	margin-bottom: 1rem;
}

.instructions ol li {
	margin-bottom: 1rem;
	padding-bottom: 0.5rem;
	list-style-position: inside;
	border-bottom: 1px solid #b2a589;
}
</style>