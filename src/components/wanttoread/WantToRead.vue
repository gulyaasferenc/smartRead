<template>
  <div class="py-10 rounded-lg cursor-pointer">
    <h1 class="mb-4">I WANT to Read some news!!</h1>
    <p class="my-4">Paste the link here:</p>
    <input type="text" class="hovershadow" v-model="linkText" /> <chevrons-right-icon class="inline-block ml-1 cursor-pointer" size="1.5x" />
  </div>
</template>

<script>
import { ChevronsRightIcon } from 'vue-feather-icons'

export default {
  name: 'WantToRead',
  components: {
    ChevronsRightIcon
  },
  data () {
    return {
      linkText: ''
    }
  }
}
</script>

<style>
.hovershadow:hover {
    box-shadow: 0px 18px 32px 20px rgba(0,0,0,0.75)
  }
.hovershadow:focus {
    box-shadow: 0px 18px 32px 20px rgba(0,0,0,0.75)
  }
</style>
