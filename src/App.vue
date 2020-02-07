<template>
  <div id="app" class="bg-gray-600 min-h-screen">
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
}
#nav {
  position: sticky;
  top: 0;
  z-index: 110;
}
button:focus {
  outline: none
}
.content-shadow {
  -webkit-box-shadow: 2px 11px 33px 27px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 2px 11px 33px 27px rgba(0, 0, 0, 0.75);
  box-shadow: 2px 11px 33px 27px rgba(0, 0, 0, 0.75);
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
