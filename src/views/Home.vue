<template>
  <div class="home bg-gray-600 h-full">
    <OpenPage/>
  </div>
</template>

<script>
// @ is an alias to /src
import OpenPage from '@/components/OpenPage.vue'
import { Store } from 'idb-keyval'
import { mapState } from 'vuex'

export default {
  name: 'home',
  components: {
    OpenPage
  },
  async created () {
    this.$store.commit('setSmartStore', await new Store('smartDB', 'smartStore'))
    this.$store.dispatch('getIdbContent')
  },
  computed: {
    ...mapState({
      smartStore: state => state.smartStore
    })
  }
}
</script>

<style lang="scss" scoped>

</style>
