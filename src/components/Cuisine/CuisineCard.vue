<!-- <template>
    <router-link :to="'/cuisine/' + cuisine.name">
        <div class="card h-100 position-relative" @click="$emit('card-clicked', cuisine.name)">
            <img :src="cuisine.image" class="card-img-top" :alt="cuisine.name" />

            <div
                class="card-img-overlay d-flex align-items-center justify-content-center position-absolute top-0 start-0 w-100 h-100">
                <div>
                    <h5 class="card-title text-white text-center">{{ cuisine.name }}</h5>
                    <p class="card-text text-white text-center">{{ cuisine.desc }}</p>
                </div>
            </div>
        </div>
    </router-link>
</template> -->

<template>
    <div v-if="cuisine" class="imgbox card h-100 position-relative" @click="$emit('card-clicked', cuisine)">
      <img :src="cuisine.image" class="card-img-top" :alt="cuisine.name" />
  
      <div class="card-img-overlay d-flex align-items-center justify-content-center position-absolute top-0 start-0 w-100 h-100">
        <div>
          <h5 class="card-title text-white text-center">{{ cuisine.name }}</h5>
          <p class="card-text text-white text-center">{{ cuisine.desc }}</p>
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

<style scoped>
.imgbox {
    border-radius: 25px !important;
    height: 300px;
    width: 400px;
    
}

.imgbox img {
    height: 300px;
    width: 400px;
    object-fit: cover;
    border-radius: 25px;
}

.imgbox::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    border-radius: 25px;
    background-color: rgba(0, 0, 0, 0.5);
}

</style>
