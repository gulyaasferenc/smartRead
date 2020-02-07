<template>
  <div
    class=" w-40 bg-none text-white text-center rounded-br-lg absolute top-0 left-0 mt-10 z-30"
  >
    <ul style="list-style-type:none;">
      <li v-for="(menu, i) of menuPoints" :key="i" @click="hideMenu()">
        {{ menu.displayName }}
      </li>
    </ul>
  </div>
</template>

<script>
import { MenuPoint } from '@/helpers/MenuPoints'
export default {
  name: 'mymenu',
  data () {
    return {
      menuPoints: []
    }
  },
  created () {
    this.createMenuPoints()
  },
  methods: {
    hideMenu () {
      this.$store.commit('setShowMenu', false)
    },
    createMenuPoints () {
      this.menuPoints.push(new MenuPoint('settings', 'Settings'))
    }
  }
}
</script>

<style>
li {
  @apply py-4 cursor-pointer bg-darkMountain;
}

li:hover {
  @apply opacity-100;
}

/* Medium (md) */
@media (min-width: 768px) {
  li {
    @apply opacity-50;
  }
}

/* Large (lg) */
@media (min-width: 1024px) {
  li {
    @apply opacity-50;
  }
}

/* Extra Large (xl) */
@media (min-width: 1280px) {
  li {
    @apply opacity-50;
  }
}
</style>
