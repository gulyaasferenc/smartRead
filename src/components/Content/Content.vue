<template>
  <div>
    <div
      class="fixed w-full h-full top-0 left-0 bg-gray-800 z-20 overflow-auto"
      :style="contentStyle"
      v-if="contentReceived || getContentStarted"
    >
      <div v-if="contentReceived" class="text-xs">
        {{ content }}
      </div>
      <div v-if="getContentStarted" class="py-auto">
        <div class="loader"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Content',
  data () {
    return {}
  },
  computed: {
    ...mapState({
      content: state => state.content,
      contentReceived: state => state.contentReceived,
      getContentStarted: state => state.getContentStarted
    }),
    contentStyle () {
      let style = { opacity: '.5' }
      if (this.contentReceived) {
        style = { opacity: '1' }
      }
      return style
    }
  }
}
</script>

<style></style>
