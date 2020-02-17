<template>
  <div class="text-white p-4 h-full">
    <h1 class="text-xl py-2 ">Statistics</h1>
    <div>
      {{statistics}}
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Statistics',
  computed: {
    ...mapState({
      statistics: state => state.statistics
    })
  }
}
</script>

<style>

</style>
