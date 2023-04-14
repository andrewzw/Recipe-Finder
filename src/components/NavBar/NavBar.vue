<template>
  <div class="topnav" id="myTopnav">

    <!-- Make logo icon clickable, allow for redirect to homepage-->
    <router-link to="/" class="navbar-brand d-flex align-items-center">
      <img :src="logo" alt="Logo" class="logo d-none d-lg-inline" />
      <h1><em class="fas fa-utensils"></em> Mama's Recipe</h1>
    </router-link>

    <!-- Navigation bar items -->
    <div class="navItems">
      <router-link to="/"><strong>Home</strong></router-link>
      <router-link to="/recipe-search"><strong>Search Recipes</strong></router-link>
      <router-link to="/recipe-cuisine/"><strong>Cuisine</strong></router-link>
      <router-link to="/my-recipes/"><strong>My Recipes</strong></router-link>
    </div>

    <!-- Responsive menu icon , show only on smaller screen-->
    <a href="javascript:void(0);" class="icon" title="Menu icon" @click="showMenu()">
      <div class="bar1"></div>
      <div class="bar2"></div>
      <div class="bar3"></div>
    </a>
  </div>
</template>

<script>
import logo from '@/assets/Logos/NavBar_Logo.png';

export default {
  name: "AppNavbar",
  data() {
    return {
      logo,
    };
  },
  methods: {
    
    //show responsive menu on smaller screen
    showMenu() {
      var x = document.getElementById("myTopnav");
      if (x.className === "topnav") {
        x.className += " responsive";
      } else {
        x.className = "topnav";
      }
    }

  },
};
</script>

<style src="./navbar.css" scoped></style>