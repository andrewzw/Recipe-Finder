<template>
  <div v-if="cuisine" class="card-container" @click="$emit('card-clicked', cuisine)" role="button">

    <div class="imgbox">
      <img :src="cuisine.image" class="card-img-top" alt="Cuisine Name" />
      <div class="card-img-overlay d-flex align-items-center justify-content-center">
        <div>
          <h3 class="card-title text-white text-center">{{ cuisine.name }}</h3>
          <p class="card-text text-white text-center">{{ cuisine.desc }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cuisine: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped src="./cuisine.css"></style>