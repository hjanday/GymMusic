<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
import NavBar from './components/NavBar.vue'
import BackgroundUI from './components/BackgroundUI.vue';


</script>

<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
   <NavBar />
   <router-link to = "/">
    Home
   </router-link>
    <router-link to = "/">
    About
   </router-link>
  <router-view></router-view>

 
</template>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
