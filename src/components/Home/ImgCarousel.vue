<template>
  <div id="carouselImg" class="carousel slide" data-bs-ride="carousel" data-bs-interval="1500">
    <div class="carousel-inner">

      <div class="floating-text container">
        <h1>Mama's Recipe</h1>
        <p>All your favorite childhood cooking in one place</p>
      </div>

      <div class="carousel-item active">
        <img
          src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          class="d-block w-100" alt="Image Description">
      </div>

      <div class="carousel-item">
        <img
          src="https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          class="d-block w-100" alt="POW Logo">
      </div>

      <div class="carousel-item">
        <img
          src="https://images.unsplash.com/photo-1458644267420-66bc8a5f21e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1036&q=80"
          class="d-block w-100" alt="POW Logo">
      </div>

    </div>
  </div>
</template>
  
<script>
export default {
  components: {

  },
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>
  
<style scoped>
#carouselImg .carousel-item img {
  object-fit: cover;
  object-position: center;
  overflow: hidden;
  height: 70vh;
}

#carouselImg .carousel-item:before {
  content: "";
  background-image:
    linear-gradient(to bottom,
      rgba(0, 0, 0, 0), rgba(97, 97, 97, 0.3));
  background-color: rgba(0, 0, 0, 0.7);
  display: block;
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
}


#carouselImg {
  position: relative;
}

.floating-text {
  position: absolute;
  margin-top: 10vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #fff;
  z-index: 10;
}

p {
  color: #f5f5f5;
  text-align: center;
}

@media (max-width: 768px) {
  #carouselImg .carousel-item img {
    margin-top: 0;
    height: 40vh;
  }

  #carouselImg .carousel-item:before {
  height: 50vh;
}

.container {
  padding-bottom:10%; 
}
}
</style>
