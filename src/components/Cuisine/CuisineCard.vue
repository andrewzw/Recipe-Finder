<template>
  <div v-if="cuisine" class="card-container" @click="$emit('card-clicked', cuisine)">
    <div class="imgbox">
      <img :src="cuisine.image" class="card-img-top" :alt="cuisine.name" />
      <div class="card-img-overlay d-flex align-items-center justify-content-center">
        <div>
          <h5 class="card-title text-white text-center">{{ cuisine.name }}</h5>
          <p class="card-text text-white text-center">{{ cuisine.desc }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-container {
  height: 300px;
  width: 100%;
}

.imgbox {
  height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;
}

.imgbox img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 25px;
  
}

.card-img-overlay {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  border-radius: 25px;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 5%;
}


@media screen and (min-width: 360px) {
  .card-container {
  height: 300px;
  width: 100%;
  margin-left: 7.5%;
}
}

@media screen and (min-width: 768px) {
  .card-container {
  height: 300px;
  width: 100%;
  margin-right: -5%;
}
}
</style>


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
