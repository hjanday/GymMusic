<script setup>
import { ref } from 'vue '
</script>

<template>

       <div class = "flex justify-left space-x-4 font-thin border-2 border-solid border-black top-0 left-0 right-0 rounded text-white bg-zinc-400">

       <a class="mt-2 mb-2 font-semibold ml-4 text-base ">GymMusic</a>
       <router-link to="/HomePage" class ="mt-2 mb-2 text-base"> Home </router-link> 
      <router-link to="/AboutPage" class ="mt-2 mb-2 text-base" > About </router-link> 
   </div>

   <router-view></router-view>
</template>