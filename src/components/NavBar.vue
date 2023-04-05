<template>
    <nav class="navbar navbar-expand-lg">
      <div class="container">
        <router-link to="/home" class="navbar-brand d-flex align-items-center">
          <img :src="logo" alt="Logo" class="logo d-none d-lg-inline" />
          <h1><i class="fas fa-utensils"></i> Mama's Recipe</h1>
        </router-link>
  
  
        <div class="justify-content-end" id="navbarNav">
          <ul class="navbar-nav">
                <li class="nav-item">
                <router-link to="/home" class="nav-link"><strong>Home</strong></router-link>
                </li>
                <li class="nav-item">
                <router-link to="/recipe-search" class="nav-link"><strong>Search Recipes</strong></router-link>
                </li>
          </ul>
        </div>
      </div>
    </nav>
  </template>
  
  <style scoped>
.logo {
  height: 50px;
  width: auto;
  object-fit: contain;
  margin-right: 10px;
}

.navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: #b9c29e;
  width: 100%;
}

nav a {
  text-decoration: none;
  color: white;
  transition: color 0.3s;
}

nav a:hover {
  color: #362f2f;
}

.navbar-brand.router-link-exact-active {
  color: white;
}

.navbar-brand.router-link-exact-active h1 {
  text-shadow: none;
}

.router-link-exact-active:not(.navbar-brand) {
  color: #ffddb5;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.5);
}
</style>

  
  <script>
  import logo from '@/assets/logo.png';

  export default {
    name: "AppNavbar",
    data() {
      return {
        logo,
      };
    },
  };
  </script>
  