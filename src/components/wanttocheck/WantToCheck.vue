<template>
  <div>
    <div class="text-white" v-for="(extract, i) of extracts" :key=i>
      <p>{{extract.text[0].text}}</p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'WantToCheck',
  data () {
    return {

    }
  },
  computed: {
    ...mapState({
      extracts: state => state.extracts
    })
  }
}
</script>

<style>

</style>
