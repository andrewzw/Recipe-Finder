<template>
  <div v-if="cuisine" class="card-container" @click="$emit('card-clicked', cuisine)">
    <div class="imgbox">
      <img :src="cuisine.image" class="card-img-top" :alt="cuisine.name" />
      <div class="card-img-overlay d-flex align-items-center justify-content-center">
        <div>
          <h3 class="card-title text-white text-center">{{ cuisine.name }}</h3>
          <p class="card-text text-white text-center">{{ cuisine.desc }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-container {
  border-radius: 15px;
  box-shadow: 2px 7px 10px rgba(0, 0, 0, 0.7);
  cursor: pointer;
}

.card-container:hover {
  box-shadow: 5px 10px 10px rgba(240, 240, 240, 0.6);
  text-shadow: 0px 4px 10px rgba(255, 255, 255, 0.6);
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
  border-radius: 15px;

}


.card-img-overlay {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  border-radius: 15px;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 5%;
}

.card-img-overlay:hover {
  background-color: rgba(0, 0, 0, 0.7);
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
