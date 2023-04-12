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
import './recipes.css';
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
