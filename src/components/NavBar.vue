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
            <h1><i class="fas fa-utensils"></i> Mama's Recipe</h1>
          </router-link>
        </div>

        <ul class="nav-items">
          <li class="nav-item">
            <router-link to="/" class="nav-link"><strong>Home</strong></router-link>
          </li>
          <li class="nav-item">
            <router-link to="/recipe-search" class="nav-link"><strong>Search Recipes</strong></router-link>
          </li>
          <li class="nav-item">
            <router-link to="/recipe-cuisine/" class="nav-link"><strong>Cuisine</strong></router-link>
          </li>
          <li class="nav-item">
            <router-link to="/my-recipes/" class="nav-link"><strong>My Recipes</strong></router-link>
          </li>
        </ul>

      </div>
    </div>
  </div>
</template>

<script>
import logo from '@/assets/Logos/linkedin_profile_image.png';

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

<style lang="scss" scoped>

.menu {
  
  display: inline-block;
  cursor: pointer;
}

.logo {
  height: 59px;
  padding: 0;
  width: auto;
  margin-right: 30px;
}

.bar1,
.bar2,
.bar3 {
  width: 35px;
  height: 5px;
  background-color: #333;
  margin: 6px 0;
  transition: 0.4s;
}

.nav-content {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: #ccd5ae;
  display: flex;
  justify-content: space-between;
  padding: 0px 30px;
  align-items: center;
}

.nav-items {
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  padding: 0 10px;
}


i {
  display: none;
}

.nav-items li:hover {
  color: white;
  text-shadow: 2px 2px 4px #000000;
}

.navbar-brand.router-link-exact-active h1 {
  text-shadow: none;
  color: rgb(0, 0, 0); //Mama's Recipe color on active
}

.router-link-exact-active:not(.navbar-brand) {
  color: #ffffff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

// Mobile version - hidden hamburger menu
@media screen and (max-width: 768px) {
  .nav-menu {
    padding-top: 10px;
    position: sticky;
    width: 100%;
    background-color: rgba(255, 255, 255, 0);
    
  }



  .open-menu {
    opacity: 1;
    height: 150px;
  }

  .closed-menu {
    opacity: 0;
    height: 0;
    padding: 0;
  }

  .nav-content {
    flex-direction: column;
    z-index: 100;
    position: relative;
    transition: all 0.2s ease-out;
  }

  .nav-items {
    flex-direction: column;
  }

  i {
    display: block;
    text-align: right;
    padding: 0 10px 10px 0;
  }
}
</style>