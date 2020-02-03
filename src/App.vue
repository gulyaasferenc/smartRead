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

/* width */
::-webkit-scrollbar {
  width: 2px;
}

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgb(4, 0, 255);
  border-radius: 10px;
}

</style>
