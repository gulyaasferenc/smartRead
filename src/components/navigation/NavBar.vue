<template>
  <div class="relative">
    <div class="pl-4 h-10 block align-text-middle bg-darkMountain flex">
      <menu-icon
        class="text-white cursor-pointer my-2"
        @click="changeShowMenu()"
      ></menu-icon>
      <span class="text-white ml-4 my-2">Smart Reader</span>
    </div>
    <div v-if="showMenu">
      <my-menu></my-menu>
    </div>
  </div>
</template>

<script>
import { MenuIcon } from 'vue-feather-icons'
import MyMenu from './Menu'
export default {
  name: 'navbar',
  components: {
    MenuIcon,
    MyMenu
  },
  data () {
    return {

    }
  },
  computed: {
    showMenu () { return this.$store.state.showMenu }
  },
  watch: {
  },
  methods: {
    changeShowMenu () { this.$store.commit('setShowMenu', !this.showMenu) }
  }
}
</script>

<style lang="scss" scoped></style>
