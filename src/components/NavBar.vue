<template>
    <div class="navbar">
      <header class="text-white">
        <div class="container d-flex justify-content-center align-items-center">
          <router-link to="/home">
            <img :src="logo" alt="Logo" class="logo" />
          </router-link>
          <h1><i class="fas fa-utensils"></i> Mama's Recipe</h1>
        </div>
      </header>
  
      <nav>
        <div class="container">
          <ul class="nav justify-content-center">
            <li class="nav-item">
              <router-link to="/home" class="nav-link"><strong>Home</strong></router-link>
            </li>
            <li class="nav-item">
              <router-link to="/recipe-search" class="nav-link"><strong>Search Recipes</strong></router-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </template>
  
  

<style scoped>
.logo {
  height: 80%;
  width: auto;
  object-fit: contain;
  margin-right: 10px;
  margin-top: 0;
}

.navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: #b9c29e;
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
}

nav a {
  text-decoration: none;
  color: white;
  transition: color 0.3s;
}

nav a:hover {
  color: #362f2f;
}

.router-link-exact-active {
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
  

  