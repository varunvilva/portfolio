<template>
  <div id="app">
    <Navbar />
    <RouterView />

  </div>
</template>

<script>
import { RouterView } from 'vue-router';
import HomePage from './components/HomePage.vue'
import Navbar from './components/Navbar.vue'


export default {
  name: 'App',
  components: {
    HomePage,
    Navbar,
  }
}
</script>

<style>
/* Add global styles here */
</style>
