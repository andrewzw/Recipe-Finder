<template>
  <div id="carouselImg" class="carousel slide" data-bs-ride="carousel" data-bs-interval="1500">
    <div class="carousel-inner">

      <div class="floatingText container">
        <img src="../../assets/Logos/logo_transparent.png" alt="Mama's Recipe Logo">
        <p>All your favorite childhood cooking in one place</p>

      </div>

      <div class="carousel-item ">
        <img
          src="https://images.unsplash.com/photo-1458644267420-66bc8a5f21e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1036&q=80"
          class="d-block w-100" alt="Pasta">
      </div>

      <div class="carousel-item ">
        <img
          src="https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          class="d-block w-100" alt="Burger">
      </div>

      <div class="carousel-item ">
        <img
          src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          class="d-block w-100" alt="Fruits">
      </div>

      <div class="carousel-item ">
        <img
          src="https://images.unsplash.com/photo-1621291726769-86a0b3fc6357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          class="d-block w-100" alt="Fruit and meat platter">
      </div>

      <div class="carousel-item active">
        <img
          src="https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          class="d-block w-100" alt="Curry">
      </div>

    </div>

    <button class="carousel-control-prev" type="button" data-bs-target="#carouselImg" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselImg" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
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
  
<style src="./home.css" scoped></style>
