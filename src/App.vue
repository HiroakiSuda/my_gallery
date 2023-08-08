<template>
  <div>
    <TheNavbar />
    <div>
      <router-view/>
    </div>
  </div>
  
</template>

<script>
import TheNavbar from './views/TheNavbar';

export default {
  name: 'App',
  components: {
    TheNavbar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
</style>
