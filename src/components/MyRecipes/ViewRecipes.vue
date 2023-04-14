<template>
	<div class="view_recipe">
		<router-link to="/my-recipes"><i class="gg-arrow-left-o mb-3"></i></router-link> <!-- back to my recipes -->

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
			<table class="table table-striped">
				<tbody>
					<tr v-for="(step, i) in recipe.instructions" :key="i">
						<th scope="row">{{ i + 1 }}</th>
						<td><span v-html="sanitiseText(step)"></span></td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script>
import { useStore } from 'vuex';

export default {
	name: 'ViewRecipes',
	computed: {
		recipe() {
			const store = useStore();
			return store.state.recipes.find(recipe => recipe.slug === this.$route.params.slug);
		}
	},
	methods: {
		sanitiseText(text) {
			return text.replace(/\n/g, '<br />')
		}
	}
}
</script>

<style scoped src="./recipes.css"></style>
