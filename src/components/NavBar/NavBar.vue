<template>
  <div>
    <div class="nav-menu">

      <i class="fas fa-bars" @click="showMenu()">
        <div class="menu">
          <div class="bar1"></div>
          <div class="bar2"></div>
          <div class="bar3"></div>
        </div>
      </i>

      <div class="nav-content container-fluid" :class="this.showMobileMenu ? 'open-menu' : 'closed-menu'">

        <div class="logo ">
          <router-link to="/" class="navbar-brand d-flex align-items-center">
            <img :src="logo" alt="Logo" class="logo d-none d-lg-inline" />
            <h1><em class="fas fa-utensils"></em> Mama's Recipe</h1>
          </router-link>
        </div>


        <ul class="nav-items" role="menu">
          <li class="nav-item" role="menuitem">
            <router-link to="/" class="nav-link"><strong>Home</strong></router-link>
          </li>
          <li class="nav-item" role="menuitem">
            <router-link to="/recipe-search" class="nav-link"><strong>Search Recipes</strong></router-link>
          </li>
          <li class="nav-item" role="menuitem">
            <router-link to="/recipe-cuisine/" class="nav-link"><strong>Cuisine</strong></router-link>
          </li>
          <li class="nav-item" role="menuitem">
            <router-link to="/my-recipes/" class="nav-link"><strong>My Recipes</strong></router-link>
          </li>
        </ul>

      </div>
    </div>
  </div>
</template>

<script>
import logo from '@/assets/Logos/NavBar_Logo.png';

export default {
  name: "AppNavbar",
  data() {
    return {
      logo,
      showMobileMenu: false,
    };
  },
  methods: {
    showMenu() {
      this.showMobileMenu = !this.showMobileMenu;
    },

  },
};
</script>

<style src="./navbar.css" scoped></style>