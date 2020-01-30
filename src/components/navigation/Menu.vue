<template>
  <div class="w-64 bg-none text-white text-center  rounded-br-lg absolute top-0 left-0 mt-10  z-30">
    <ul style="list-style-type:none;">
      <li @click="hideMenu()">
        Menu 1
      </li>
      <li>
        Menu 2
      </li>
      <li>
        Menu 3
      </li>
      <li>
        Menu 4
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'mymenu',
  data () {
    return {}
  },
  methods: {
    hideMenu () {
      this.$store.commit('setShowMenu', false)
    }
  }
}
</script>

<style>

li {
  @apply py-4 cursor-pointer opacity-50 bg-darkMountain
}

li:hover {
  @apply opacity-100
}

</style>
