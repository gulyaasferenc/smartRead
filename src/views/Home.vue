<template>
  <div class="home bg-lightMountain">
    <OpenPage/>
  </div>
</template>

<script>
// @ is an alias to /src
import OpenPage from '@/components/OpenPage.vue'

export default {
  name: 'home',
  components: {
    OpenPage
  }
}
</script>

<style lang="scss" scoped>
  .logo {
    margin: auto;
    @apply border border-black rounded-lg
  }
</style>
