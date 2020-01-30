<template>
  <div id="app bg-lightMountain h-screen">
    <div id="nav">
      <nav-bar></nav-bar>
    </div>
    <router-view/>
  </div>
</template>

<script>
import NavBar from '@/components/navigation/NavBar'

export default {
  name: 'app',
  components: {
    NavBar
  }
}
</script>

<style lang="scss">
@import './assets/styles/main.scss';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #C3CC71
}

</style>
