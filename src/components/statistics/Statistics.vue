<template>
  <div ref="width" class="text-white p-4 h-full" >
    <h1 class="text-xl py-2 ">Statistics</h1>
    <div>
      <canvas :key="render" ref="canv" class="mx-auto bg-gray-300 rounded" id="daily-canvas" :width="compWidth" :height="compHeight" />
      <canvas class="mx-auto my-2  bg-gray-300 rounded" id="fully-canvas" :width="compWidth" :height="compHeight" />
      <canvas class="mx-auto bg-gray-300 rounded" id="monthly-canvas" :width="compWidth" :height="compHeight" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
// import { dailyGraph } from '@/helpers/canvashelpers'

export default {
  name: 'Statistics',
  data () {
    return {
      compWidth: 300,
      compHeight: 300,
      refWidth: 0,
      render: 0
    }
  },
  computed: {
    ...mapState({
      statistics: state => state.statistics
    })
  },
  mounted () {
    this.$nextTick(async () => {
      this.refWidth = this.$refs.width.clientWidth - 4
      this.compHeight = this.$refs.width.clientHeight / 4
      // dailyGraph({ id: 'daily-canvas', width: this.refWidth, height: this.compHeight })
      const canvasEl = this.$refs.canv
      console.log(canvasEl)
      const ctx = canvasEl.getContext('2d')
      console.log(ctx)

      ctx.beginPath()
      ctx.lineWidth = 10
      // ctx.strokeStyle = '#0f0f0f'
      ctx.moveTo(4, 4)
      ctx.lineTo(4, 100)
      ctx.lineTo(this.$refs.width.clientWidth - 4, this.$refs.width.clientHeight / 4 - 20)
      ctx.stroke()
      this.render++
    })
  },
  watch: {
    refWidth () {
      this.compWidth = this.refWidth
    }
  }
}
</script>

<style>

</style>
