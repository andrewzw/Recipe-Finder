<template>
	<div class="viewRecipe">
		<!-- back to my recipes -->
		<router-link to="/my-recipes" aria-label="Back to my recipes page"
			class="btn rounded-pill border border-dark customBtn" style="border-color: black;">
			<em class="gg-arrow-left-o"></em>
		</router-link>


		<!-- Displays information of the selected recipe -->
		<h2>{{ recipe.title }} </h2>
		<p class="desc">{{ recipe.description }}</p>
		<hr />
		<div class="ingredients" role="region" aria-labelledby="ingredients-heading">
			<h3 id="ingredients-heading">Ingredients</h3>
			<ul>
				<li v-for="(ingredient, i) in recipe.ingredients" :key="i">
					{{ ingredient }}
				</li>
			</ul>
		</div>
		<div class="instructions" role="region" aria-labelledby="instructions-heading">
			<h3 id="instructions-heading">Instructions</h3>
			
			<table class="table table-striped">
				<caption>List of instructions for {{ recipe.title }}</caption>
				<thead>
					<tr>
						<th scope="col" id="step-header">Step #</th>
						<th scope="col" id="instruction-header">Instruction</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(step, i) in recipe.instructions" :key="i">
						<th scope="row" id="step{{ i+1 }}" headers="step-header">{{ i + 1 }}</th>
						<td headers="instruction-header"><span v-html="sanitiseText(step)"></span></td>
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
		// Gets the recipe from the store from localStorage
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
