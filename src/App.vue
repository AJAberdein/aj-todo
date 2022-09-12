<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'


</script>
<template>
  <div class="title">
    <h1>howT<span class="cyan"></span><span class="pink">O</span>you<span class="cyan">D</span><span
        class="yellow">O</span>?</h1>
  </div>
  <nav class="nav-bar">
    <RouterLink class="yellow" to="/">Home</RouterLink>
    <RouterLink class="yellow" to="/about">About</RouterLink>
  </nav>
  <RouterView />
</template>




<style>

@import "./styles/main.css"
  
</style>